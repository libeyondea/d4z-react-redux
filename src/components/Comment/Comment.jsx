import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import classnames from 'classnames';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
	fetchCommentThunk,
	createReplyCommentThunk,
	createCommentThunk,
	fetchCommentResetedThunk
} from '../../thunks/commentThunk';
import RichTextEditorFormik from '../../components/Formik/RichTextEditorFormik';

const propTypes = {
	fetchCommentThunk: PropTypes.func.isRequired,
	fetchCommentResetedThunk: PropTypes.func.isRequired,
	createCommentThunk: PropTypes.func.isRequired,
	createReplyCommentThunk: PropTypes.func.isRequired,
	createComment: PropTypes.object.isRequired,
	createReplyComment: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	fetchComment: state.comments.fetchComment,
	createComment: state.comments.createComment,
	createReplyComment: state.comments.createReplyComment
});
const mapDispatchToProps = {
	fetchCommentThunk,
	fetchCommentResetedThunk,
	createCommentThunk,
	createReplyCommentThunk
};
const CreateComment = (props) => {
	const {
		fetchCommentThunk,
		fetchCommentResetedThunk,
		createCommentThunk,
		createReplyCommentThunk,
		fetchComment,
		createComment,
		createReplyComment,
		postId
	} = props;
	const [replyBox, setReplyBox] = useState(false);
	const [parentId, setParentId] = useState('');
	useEffect(() => {
		fetchCommentThunk(postId);
		return () => {
			fetchCommentResetedThunk();
		};
	}, [fetchCommentResetedThunk, fetchCommentThunk, postId]);
	const replyCommentInitialValues = {
		replyComment: ''
	};
	const replyCommentValidationSchema = Yup.object({
		replyComment: Yup.string().required('Reply is required')
	});
	const handleReplyCommentSubmit = (values, { resetForm }) => {
		const comment = {
			parent_id: parentId,
			content: values.replyComment
		};
		setReplyBox(false);
		if (createReplyCommentThunk(comment, postId)) {
			fetchCommentThunk(postId);
			resetForm({});
		}
	};

	const commentInitialValues = {
		comment: ''
	};
	const commentValidationSchema = Yup.object({
		comment: Yup.string().required('Comment is required')
	});
	const commentOnSubmit = (values, { resetForm }) => {
		const comment = {
			content: values.comment
		};
		setReplyBox(false);
		if (createCommentThunk(comment, postId)) {
			fetchCommentThunk(postId);
			resetForm({});
		}
	};
	const FetchComment = (comments, class_reply) => {
		return comments.map((comment) => (
			<div
				className={classnames('comment-box', {
					replied: class_reply
				})}
				key={comment.id}
			>
				<span className="commenter-pic">
					<img src="/assets/img/user-icon.jpg" className="img-fluid" alt="" />
				</span>
				<span className="commenter-name">
					<a href="#!">{comment.user.user_name}</a> <span className="comment-time">{comment.created_at}</span>
				</span>
				<div className="comment-txt more">{parse(comment.content)}</div>
				<div className="comment-meta">
					<button className="comment-like">
						<i className="fa fa-thumbs-up mr-1" aria-hidden="true" />
						999
					</button>
					<button className="comment-dislike">
						<i className="fa fa-thumbs-down mr-1" aria-hidden="true" />
						666
					</button>
					<button
						className="comment-reply reply-popup"
						onClick={() => {
							if (!replyBox) {
								setParentId(comment.id);
							} else {
								setParentId('');
							}
							setReplyBox(!replyBox);
						}}
					>
						<i className="fa fa-reply-all mr-1" aria-hidden="true" />
						Reply
					</button>
				</div>
				{replyBox && (
					<div className="comment-box add-comment reply-box">
						<span className="commenter-pic">
							<img src="/assets/img/user-icon.jpg" className="img-fluid" alt="" />
						</span>
						<span className="commenter-name">
							<Formik
								initialValues={replyCommentInitialValues}
								validationSchema={replyCommentValidationSchema}
								onSubmit={handleReplyCommentSubmit}
							>
								{({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
									<form onSubmit={handleSubmit}>
										<input
											type="text"
											placeholder="Add a reply comment"
											name="replyComment"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.replyComment}
										/>
										{errors.replyComment && touched.replyComment && (
											<div className="invalid-feedback d-block">{errors.replyComment}</div>
										)}
										{createReplyComment.isLoading ? (
											<button type="submit" className="reply-comment btn btn-primary" disabled>
												<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
												Loading...
											</button>
										) : (
											<button type="submit" className="reply-comment btn btn-primary">
												Reply
											</button>
										)}
										<a
											href="#!"
											onClick={() => {
												if (!replyBox) {
													setParentId(comment.id);
												} else {
													setParentId('');
												}
												setReplyBox(!replyBox);
											}}
											className="reply-comment btn btn-light reply-popup"
										>
											Cancel
										</a>
									</form>
								)}
							</Formik>
						</span>
					</div>
				)}
				{comment.children_comment && FetchComment(comment.children_comment, true)}
			</div>
		));
	};
	const CommentForm = (
		<>
			<div className="comments-details">
				<span className="total-comments comments-sort">666 Comments</span>
				<span className="dropdown">
					<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
						Sort By <span className="caret" />
					</button>
					<div className="dropdown-menu">
						<a href="#!" className="dropdown-item">
							Top Comments
						</a>
						<a href="#!" className="dropdown-item">
							Newest First
						</a>
					</div>
				</span>
			</div>
			<div className="comment-box add-comment">
				<div className="nht-form">
					<Formik
						initialValues={commentInitialValues}
						validationSchema={commentValidationSchema}
						onSubmit={commentOnSubmit}
					>
						{({ values, errors, touched, handleSubmit, setFieldValue, setFieldTouched }) => (
							<form onSubmit={handleSubmit}>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<RichTextEditorFormik
											label="Comment"
											id="comment"
											textareaName="comment"
											onEditorChange={(selectedValue) => setFieldValue('comment', selectedValue)}
											onBlur={() => setFieldTouched('comment', true)}
											value={values.comment}
											height="333"
											errored={errors.comment}
											touched={touched.comment}
										/>
									</div>
								</div>
								<div className="text-right">
									{createComment.isLoading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
											Loading...
										</button>
									) : (
										<button type="submit" className="btn btn-primary">
											Comment
										</button>
									)}
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
	return (
		<div className="comments">
			{CommentForm}
			{FetchComment(fetchComment.comment, false)}
		</div>
	);
};

CreateComment.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
