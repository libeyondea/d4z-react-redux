import React, { useEffect, Component } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPostThunk, updatePostThunk } from '../../thunks/postThunk';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import MainLayout from '../../layouts/MainLayout';
import LoadingEditPost from '../../components/Loading/LoadingEditPost';
import CustomInput from '../../components/Form/CustomInput';
import CustomTextarea from '../../components/Form/CustomTextarea';

const propTypes = {
	editPostThunk: PropTypes.func.isRequired,
	updatePostThunk: PropTypes.func.isRequired,
	editPost: PropTypes.object.isRequired,
	updatePost: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	editPost: state.editPost,
	updatePost: state.updatePost
});
const mapDispatchToProps = {
	editPostThunk,
	updatePostThunk
};
const EditPost = (props) => {
	const { editPostThunk, updatePostThunk, editPost, updatePost } = props;
	const { slug } = useParams();
	const history = useHistory();
	useEffect(() => {
		editPostThunk(slug);
	}, []);
	const initialState = {
		title: '',
		meta_title: '',
		meta_description: '',
		slug: '',
		summary: '',
		content: '',
		image: ''
	};
	const schema = Yup.object({
		title: Yup.string().required('Title is required'),
		meta_title: Yup.string().required('Meta title is required'),
		meta_description: Yup.string().required('Meta description is required'),
		slug: Yup.string().required('Slug is required'),
		summary: Yup.string().required('Summary is required'),
		image: Yup.string().required('Image is required'),
		content: Yup.string().required('Content is required')
	});
	const onSubmit = (values) => {
		const slugNew = values.slug;
		const post = {
			title: values.title,
			meta_title: values.meta_title,
			meta_description: values.meta_description,
			slug: slugNew,
			summary: values.summary,
			image: values.image,
			content: values.content,
			published: editPost.posts.published,
			published_at: editPost.posts.published_at,
			user_id: editPost.posts.user_id
		};
		Swal.fire({
			title: 'Do you want to update?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
			cancelButtonText: 'No'
		}).then((result) => {
			if (result.isConfirmed) {
				updatePostThunk(post, history, slug, slugNew);
			}
		});
	};
	const { register, handleSubmit, errors } = useForm({
		mode: 'all',
		resolver: yupResolver(schema),
		defaultValues: initialState,
		shouldFocusError: true
	});
	return (
		<MainLayout>
			<header className="masthead" style={{ backgroundImage: 'url("/assets/img/home-bg.jpg")' }}>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>Edit Post</h1>
								<span className="subheading">Admin</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						{editPost.loading ? (
							<LoadingEditPost />
						) : (
							<div className="nht-form">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<CustomTextarea
												rows="3"
												label="Title"
												id="title"
												name="title"
												type="text"
												register={register}
												error={errors.title}
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<CustomTextarea
												rows="3"
												label="Meta title"
												id="meta_title"
												name="meta_title"
												type="text"
												register={register}
												error={errors.meta_title}
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<CustomTextarea
												rows="6"
												label="Meta description"
												id="meta_description"
												name="meta_description"
												type="text"
												register={register}
												error={errors.meta_description}
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<CustomInput
												label="Slug"
												id="slug"
												name="slug"
												type="text"
												register={register}
												error={errors.slug}
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<CustomTextarea
												rows="6"
												label="Summary"
												id="summary"
												name="summary"
												type="text"
												register={register}
												error={errors.summary}
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<CustomTextarea
												rows="16"
												label="Content"
												id="content"
												name="content"
												type="text"
												register={register}
												error={errors.content}
											/>
										</div>
									</div>
									<div className="control-group">
										<div className="form-group floating-label-form-group controls">
											<CustomInput
												label="Image"
												id="image"
												name="image"
												type="text"
												register={register}
												error={errors.image}
											/>
										</div>
									</div>
									<div className="text-center">
										{updatePost.loading ? (
											<button type="submit" className="btn btn-primary" disabled>
												<span
													className="spinner-border spinner-border-sm mr-1"
													role="status"
													aria-hidden="true"
												/>
												Loading...
											</button>
										) : (
											<button type="submit" className="btn btn-primary">
												Update
											</button>
										)}
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
EditPost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
