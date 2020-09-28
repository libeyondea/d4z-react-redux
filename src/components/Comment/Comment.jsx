import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import classnames from 'classnames';
import { fetchCommentThunk, createCommentThunk } from '../../thunks/commentThunk';
import RichTextEditorForm from '../../components/Form/RichTextEditorForm';

const propTypes = {
	fetchCommentThunk: PropTypes.func.isRequired,
	createCommentThunk: PropTypes.func.isRequired,
	createComment: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	fetchComment: state.fetchComment,
	createComment: state.createComment
});
const mapDispatchToProps = {
	fetchCommentThunk,
	createCommentThunk
};
const CreateComment = (props) => {
	const { fetchCommentThunk, createCommentThunk, fetchComment, createComment } = props;
	const { slug } = useParams();
	const [parentCommment, setParentCommment] = useState('');
	const [childrenCommment, setChildrenCommment] = useState({
		parent_id: '',
		content: ''
	});
	const [replyBox, setReplyBox] = useState(false);
	useEffect(() => {
		fetchCommentThunk(slug);
	}, []);
	const HandlerOnOffReply = () => {
		setReplyBox(!replyBox);
	};
	const handleCommentChange = (content) => {
		setParentCommment(content);
	};
	const handleChildrenCommentChange = (event) => {
		const { name, value } = event.target;
		setChildrenCommment({
			parent_id: name,
			content: value
		});
	};
	const handleChildCommentSubmit = (event) => {
		event.preventDefault();
		const comment = {
			parent_id: childrenCommment.parent_id,
			content: childrenCommment.content
		};
		if (createCommentThunk(comment, slug)) {
			fetchCommentThunk(slug);
			setChildrenCommment({
				parent_id: '',
				content: ''
			});
		}
	};
	const handleCommentSubmit = (event) => {
		event.preventDefault();
		const comment = {
			parent_id: '',
			content: parentCommment
		};
		if (createCommentThunk(comment, slug)) {
			fetchCommentThunk(slug);
			setParentCommment('');
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
					<img src="/assets/img/user-icon.jpg" className="img-fluid" />
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
					<button className="comment-reply reply-popup" onClick={HandlerOnOffReply}>
						<i className="fa fa-reply-all mr-1" aria-hidden="true" />
						Reply
					</button>
				</div>
				{replyBox && (
					<div className="comment-box add-comment reply-box">
						<span className="commenter-pic">
							<img src="/assets/img/user-icon.jpg" className="img-fluid" />
						</span>
						<span className="commenter-name">
							<form onSubmit={handleChildCommentSubmit}>
								<input
									type="text"
									placeholder="Add a reply comment"
									id={'childComment' + comment.id}
									name={comment.id}
									onChange={handleChildrenCommentChange}
								/>
								<button type="submit" className="reply-comment btn btn-primary">
									Reply
								</button>
								<a onClick={HandlerOnOffReply} className="reply-comment btn btn-light reply-popup">
									Cancel
								</a>
							</form>
						</span>
					</div>
				)}
				{comment.children_comment && FetchComment(comment.children_comment, true)}
			</div>
		));
	};
	return (
		<div className="comments">
			<div className="comments-details">
				<span className="total-comments comments-sort">666 Comments</span>
				<span className="dropdown">
					<button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
						Sort By <span className="caret" />
					</button>
					<div className="dropdown-menu">
						<a href="#" className="dropdown-item">
							Top Comments
						</a>
						<a href="#" className="dropdown-item">
							Newest First
						</a>
					</div>
				</span>
			</div>
			<div className="comment-box add-comment">
				<div className="nht-form">
					<form onSubmit={handleCommentSubmit}>
						<div className="control-group">
							<div className="form-group floating-label-form-group controls">
								<RichTextEditorForm
									label="Comment"
									id="comment"
									textareaName="comment"
									onEditorChange={handleCommentChange}
									value={parentCommment}
									height="200"
								/>
							</div>
						</div>
						<div className="text-right">
							{createComment.loading ? (
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
				</div>
			</div>
			{fetchComment.loading ? <div>Loading.....</div> : FetchComment(fetchComment.comments, false)}
		</div>
	);
};

CreateComment.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
