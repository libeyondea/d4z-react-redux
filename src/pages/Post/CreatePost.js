import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPostThunk } from '../../thunks/postThunk'
import classnames from 'classnames'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Swal from "sweetalert2";
import MainLayout from '../../layouts/MainLayout';

const propTypes = {
	createPostThunk: PropTypes.func.isRequired,
	createPost: PropTypes.object.isRequired,
	log: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
	createPost: state.createPost,
	log: state.log
})
const mapDispatchToProps = {
	createPostThunk
}
const CreatePost = (props) => {
	const today = new Date()
	const dateNow = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
	const { createPostThunk, createPost, log } = props
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
			const { title, meta_title, meta_description, slug, summary, image, content, published_at } = values
			const post = {
				title: title,
				meta_title: meta_title,
				meta_description: meta_description,
				slug: slug,
				summary: summary,
				image: image,
				content: content,
				published: (log.user.role_id === 1) ? '1' : '0',
				published_at: (log.user.role_id === 1) ? dateNow : published_at,
				user_id: log.user.id
			}
			Swal.fire({
				title: 'Do you want to create?',
				icon: 'question',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
				cancelButtonText: 'No'
			}).then((result) => {
				if (result.isConfirmed) {
					createPostThunk(post, slug, history);
				}
			})
		}
	})
	return (
		<MainLayout>
			<header className="masthead" style={{ backgroundImage: 'url("/assets/img/home-bg.jpg")' }}>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>Create Post</h1>
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
												'is-invalid': createPost.errors.title || (formik.touched.title && formik.errors.title)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.title}
										/>
										{formik.touched.title && formik.errors.title ? (
											<div className="invalid-feedback">{formik.errors.title}</div>
										) : null}
										{createPost.errors.title && <div className="invalid-feedback">{createPost.errors.title}</div>}
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
												'is-invalid': createPost.errors.meta_title || (formik.touched.meta_title && formik.errors.meta_title)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.meta_title}
										/>
										{formik.touched.meta_title && formik.errors.meta_title ? (
											<div className="invalid-feedback">{formik.errors.meta_title}</div>
										) : null}
										{createPost.errors.meta_title && <div className="invalid-feedback">{createPost.errors.meta_title}</div>}
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
												'is-invalid': createPost.errors.meta_description || (formik.touched.meta_description && formik.errors.meta_description)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.meta_description}
										/>
										{formik.touched.meta_description && formik.errors.meta_description ? (
											<div className="invalid-feedback">{formik.errors.meta_description}</div>
										) : null}
										{createPost.errors.meta_description && <div className="invalid-feedback">{createPost.errors.meta_description}</div>}
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
												'is-invalid': createPost.errors.slug || (formik.touched.slug && formik.errors.slug)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.slug}
										/>
										{formik.touched.slug && formik.errors.slug ? (
											<div className="invalid-feedback">{formik.errors.slug}</div>
										) : null}
										{createPost.errors.slug && <div className="invalid-feedback">{createPost.errors.slug}</div>}
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
												'is-invalid': createPost.errors.summary || (formik.touched.summary && formik.errors.summary)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.summary}
										/>
										{formik.touched.summary && formik.errors.summary ? (
											<div className="invalid-feedback">{formik.errors.summary}</div>
										) : null}
										{createPost.errors.summary && <div className="invalid-feedback">{createPost.errors.summary}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Content</label>
										<input
											type="text"
											id="content"
											name="content"
											placeholder="Content"
											className={classnames('form-control', {
												'is-invalid': createPost.errors.content || (formik.touched.content && formik.errors.content)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.content}
										/>
										{formik.touched.content && formik.errors.content ? (
											<div className="invalid-feedback">{formik.errors.content}</div>
										) : null}
										{createPost.errors.content && <div className="invalid-feedback">{createPost.errors.content}</div>}
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
												'is-invalid': createPost.errors.image || (formik.touched.image && formik.errors.image)
											})}
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											value={formik.values.image}
										/>
										{formik.touched.image && formik.errors.image ? (
											<div className="invalid-feedback">{formik.errors.image}</div>
										) : null}
										{createPost.errors.image && <div className="invalid-feedback">{createPost.errors.image}</div>}
									</div>
								</div>
								<div className="text-center">
									{createPost.loading ? (
										<button type="submit" className="btn btn-primary" disabled>
											<span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
											Loading...
										</button>
									) : (
											<button type="submit" className="btn btn-primary">
												Create
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
CreatePost.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)