import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPostThunk, updatePostThunk } from '../../thunks/postThunk';
import classnames from 'classnames';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from "sweetalert2";
import MainLayout from '../../layouts/MainLayout';

const propTypes = {
	editPostThunk: PropTypes.func.isRequired,
	updatePostThunk: PropTypes.func.isRequired,
	editPost: PropTypes.object.isRequired,
	updatePost: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
	editPost: state.editPost,
	updatePost: state.updatePost
})
const mapDispatchToProps = {
    editPostThunk,
    updatePostThunk
}
const EditPost = (props) => {
	const { editPostThunk, updatePostThunk, editPost, updatePost, match } = props
	const { slug } = match.params
	const history = useHistory()
	const formik = useFormik({
		initialValues: {
			title: '',
			meta_title: '',
			meta_description: '',
			slug: '',
			summary: '',
			image: '',
			content: '',
			published: '',
			published_at: '',
			user_id: ''
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.required('Title is required'),
			meta_title: Yup.string()
				.required('Meta title is required'),
			meta_description: Yup.string()
				.required('Meta description is required'),
			slug: Yup.string()
				.required('Slug is required'),
			summary: Yup.string()
				.required('Summary is required'),
			image: Yup.string()
				.required('Image is required'),
			content: Yup.string()
				.required('Content is required')
		}),
		onSubmit: values => {
			const slugNew = values.slug
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
			}
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
					updatePostThunk(post, history, slug, slugNew)
				}
			})
		}
	})
	useEffect(() => {
		editPostThunk(slug)
	}, [editPostThunk, slug])
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
						<div className="nht-form">
							<form onSubmit={formik.handleSubmit}>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Title</label>
										<input
											type="text"
											id="title"
											name="title"
											placeholder="Title"
											className={classnames('form-control', {
												'is-invalid': updatePost.errors.title || (formik.touched.title && formik.errors.title)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.title}
										/>
										{formik.touched.title && formik.errors.title ? (
											<div className="invalid-feedback">{formik.errors.title}</div>
										) : null}
										{updatePost.errors.title && <div className="invalid-feedback">{updatePost.errors.title}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Meta title</label>
										<input
											type="text"
											id="meta_title"
											name="meta_title"
											placeholder="Meta title"
											className={classnames('form-control', {
												'is-invalid': updatePost.errors.meta_title || (formik.touched.meta_title && formik.errors.meta_title)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.meta_title}
										/>
										{formik.touched.meta_title && formik.errors.meta_title ? (
											<div className="invalid-feedback">{formik.errors.meta_title}</div>
										) : null}
										{updatePost.errors.meta_title && <div className="invalid-feedback">{updatePost.errors.meta_title}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Meta Description</label>
										<input
											type="text"
											id="meta_description"
											name="meta_description"
											placeholder="Meta Description"
											className={classnames('form-control', {
												'is-invalid': updatePost.errors.meta_description || (formik.touched.meta_description && formik.errors.meta_description)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.meta_description}
										/>
										{formik.touched.meta_description && formik.errors.meta_description ? (
											<div className="invalid-feedback">{formik.errors.meta_description}</div>
										) : null}
										{updatePost.errors.meta_description && <div className="invalid-feedback">{updatePost.errors.meta_description}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Slug</label>
										<input
											type="text"
											id="slug"
											name="slug"
											placeholder="Slug"
											className={classnames('form-control', {
												'is-invalid': updatePost.errors.slug || (formik.touched.slug && formik.errors.slug)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.slug}
										/>
										{formik.touched.slug && formik.errors.slug ? (
											<div className="invalid-feedback">{formik.errors.slug}</div>
										) : null}
										{updatePost.errors.slug && <div className="invalid-feedback">{updatePost.errors.slug}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Summary</label>
										<input
											type="text"
											id="summary"
											name="summary"
											placeholder="Summary"
											className={classnames('form-control', {
												'is-invalid': updatePost.errors.summary || (formik.touched.summary && formik.errors.summary)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.summary}
										/>
										{formik.touched.summary && formik.errors.summary ? (
											<div className="invalid-feedback">{formik.errors.summary}</div>
										) : null}
										{updatePost.errors.summary && <div className="invalid-feedback">{updatePost.errors.summary}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Content</label>
										<textarea
											id="content"
											name="content"
											placeholder="Content"
											className={classnames('form-control', {
												'is-invalid': updatePost.errors.content || (formik.touched.content && formik.errors.content)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.content}
											rows="6">
										</textarea>
										{formik.touched.content && formik.errors.content ? (
											<div className="invalid-feedback">{formik.errors.content}</div>
										) : null}
										{updatePost.errors.content && <div className="invalid-feedback">{updatePost.errors.content}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Image</label>
										<input
											type="text"
											id="image"
											name="image"
											placeholder="Image"
											className={classnames('form-control', {
												'is-invalid': updatePost.errors.image || (formik.touched.image && formik.errors.image)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.image}
										/>
										{formik.touched.image && formik.errors.image ? (
											<div className="invalid-feedback">{formik.errors.image}</div>
										) : null}
										{updatePost.errors.image && <div className="invalid-feedback">{updatePost.errors.image}</div>}
									</div>
								</div>
								<div className="text-center">
									{updatePost.loading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
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
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
EditPost.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(EditPost)