import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPostAction } from '../../actions/postAction';
import classnames from 'classnames';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const CreatePost = ({ createPostAction, createPost, log, history }) => {

	const defaultState = {
		title: '',
		meta_title: '',
		meta_description: '',
		slug: '',
		summary: '',
		image: '',
		content: '',
		published: '1',
		published_at: '',
		user_id: ''
	}

	const [state, setState] = useState(defaultState);

	useEffect(() => {
		if (!log.isAuthenticated) {
			history.push('/login');
		}
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setState(state => ({
			...state,
			[name]: value
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const post = {
			title: state.title,
			meta_title: state.meta_title,
			meta_description: state.meta_description,
			slug: state.slug,
			summary: state.summary,
			image: state.image,
			content: state.content,
			published: state.published,
			published_at: state.published_at,
			user_id: log.user.id
		}
		createPostAction(post);
		setState(defaultState);
	}

	return (
		<React.Fragment>
			<header className="masthead" style={{ backgroundImage: 'url("assets/img/home-bg.jpg")' }}>
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
							<form onSubmit={handleSubmit}>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Title</label>
										<input
											type="text"
											id="title"
											placeholder="Title"
											className={classnames('form-control', { 'is-invalid': createPost.errors.title })}
											name="title"
											onChange={handleInputChange}
											value={state.title}
										/>
										{createPost.errors.title && <div className="invalid-feedback">{createPost.errors.title}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Meta title</label>
										<input
											type="text"
											id="meta_title"
											placeholder="Meta title"
											className={classnames('form-control', { 'is-invalid': createPost.errors.meta_title })}
											name="meta_title"
											onChange={handleInputChange}
											value={state.meta_title}
										/>
										{createPost.errors.meta_title && <div className="invalid-feedback">{createPost.errors.meta_title}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Meta Description</label>
										<input
											type="text"
											id="meta_description"
											placeholder="Meta Description"
											className={classnames('form-control', { 'is-invalid': createPost.errors.meta_description })}
											name="meta_description"
											onChange={handleInputChange}
											value={state.meta_description}
										/>
										{createPost.errors.meta_description && <div className="invalid-feedback">{createPost.errors.meta_description}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Slug</label>
										<input
											type="text"
											id="slug"
											placeholder="Slug"
											className={classnames('form-control', { 'is-invalid': createPost.errors.slug })}
											name="slug"
											onChange={handleInputChange}
											value={state.slug}
										/>
										{createPost.errors.slug && <div className="invalid-feedback">{createPost.errors.slug}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Summary</label>
										<input
											type="text"
											id="summary"
											placeholder="Summary"
											className={classnames('form-control', {
												'is-invalid': createPost.errors.summary
											})}
											name="summary"
											onChange={handleInputChange}
											value={state.summary}
										/>
										{createPost.errors.summary && <div className="invalid-feedback">{createPost.errors.summary}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Content</label>
										<input
											type="text"
											id="content"
											placeholder="Content"
											className={classnames('form-control', {
												'is-invalid': createPost.errors.content
											})}
											name="content"
											onChange={handleInputChange}
											value={state.content}
										/>
										{createPost.errors.content && <div className="invalid-feedback">{createPost.errors.content}</div>}
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<label>Image</label>
										<input
											type="text"
											id="image"
											placeholder="Image"
											className={classnames('form-control', {
												'is-invalid': createPost.errors.image
											})}
											name="image"
											onChange={handleInputChange}
											value={state.image}
										/>
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
		</React.Fragment>
	)
}

CreatePost.propTypes = {
	createPostAction: PropTypes.func.isRequired,
	createPost: PropTypes.object.isRequired,
	log: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	createPost: state.createPost,
	log: state.log
})

export default connect(mapStateToProps, { createPostAction })(CreatePost)