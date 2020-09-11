import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPostAction, updatePostAction } from '../../actions/postAction';
import classnames from 'classnames';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const EditPost = (props) => {

    const { slug } = props.match.params;

    const initialState = {
        title: props.editPost.posts.title,
        meta_title: props.editPost.posts.meta_title,
        meta_description: props.editPost.posts.meta_description,
        slug: props.editPost.posts.slug,
        summary: props.editPost.posts.summary,
        image: props.editPost.posts.image,
        content: props.editPost.posts.content,
        published: '1',
        published_at: '',
        user_id: ''
    }

    const [state, setState] = useState(initialState);

    const { register, errors, handleSubmit } = useForm({
        defaultValues: {
            title: props.editPost.posts.title,
            meta_title: props.editPost.posts.meta_title,
            meta_description: props.editPost.posts.meta_description,
            slug: props.editPost.posts.slug,
            summary: props.editPost.posts.summary,
            image: props.editPost.posts.image,
            content: props.editPost.posts.content
        }
    });

    useEffect(() => {
        if (!props.log.isAuthenticated) {
            props.history.push('/login');
        }
    })

    useEffect(() => {
        props.editPostAction(slug);
    }, [props.editPostAction, slug])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setState(state => ({
            ...state,
            [name]: value
        }))
    }

    const onSubmit = () => {
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
            user_id: props.log.user.id
        }
        props.updatePostAction(post, slug);
    }

    return (
        <React.Fragment>
            <header className="masthead" style={{ backgroundImage: 'url("/assets/img/home-bg.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Update Post</h1>
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            id="title"
                                            placeholder="Title"
                                            className={classnames('form-control', {
                                                'is-invalid': props.updatePost.errors.title || errors.title
                                            })}
                                            name="title"
                                            onChange={handleInputChange}
                                            ref={register({
                                                required: "Title is required",
                                            })}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="title"
                                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                                        />
                                        {props.updatePost.errors.title && <div className="invalid-feedback">{props.updatePost.errors.title}</div>}
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Meta title</label>
                                        <input
                                            type="text"
                                            id="meta_title"
                                            placeholder="Meta title"
                                            className={classnames('form-control', {
                                                'is-invalid': props.updatePost.errors.meta_title || errors.meta_title
                                            })}
                                            name="meta_title"
                                            onChange={handleInputChange}
                                            ref={register({
                                                required: "Meta title is required",
                                            })}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="meta_title"
                                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                                        />
                                        {props.updatePost.errors.meta_title && <div className="invalid-feedback">{props.updatePost.errors.meta_title}</div>}
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Meta Description</label>
                                        <input
                                            type="text"
                                            id="meta_description"
                                            placeholder="Meta Description"
                                            className={classnames('form-control', {
                                                'is-invalid': props.updatePost.errors.meta_description || errors.meta_description
                                            })}
                                            name="meta_description"
                                            onChange={handleInputChange}
                                            ref={register({
                                                required: "Meta Description is required",
                                            })}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="meta_description"
                                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                                        />
                                        {props.updatePost.errors.meta_description && <div className="invalid-feedback">{props.updatePost.errors.meta_description}</div>}
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                        <label>Slug</label>
                                        <input
                                            type="text"
                                            id="slug"
                                            placeholder="Slug"
                                            className={classnames('form-control', {
                                                'is-invalid': props.updatePost.errors.slug || errors.slug
                                            })}
                                            name="slug"
                                            onChange={handleInputChange}
                                            ref={register({
                                                required: "Slug is required",
                                            })}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="slug"
                                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                                        />
                                        {props.updatePost.errors.slug && <div className="invalid-feedback">{props.updatePost.errors.slug}</div>}
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
                                                'is-invalid': props.updatePost.errors.summary || errors.summary
                                            })}
                                            name="summary"
                                            onChange={handleInputChange}
                                            ref={register({
                                                required: "Summary is required",
                                            })}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="summary"
                                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                                        />
                                        {props.updatePost.errors.summary && <div className="invalid-feedback">{props.updatePost.errors.summary}</div>}
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
                                                'is-invalid': props.updatePost.errors.content || errors.content
                                            })}
                                            name="content"
                                            onChange={handleInputChange}
                                            ref={register({
                                                required: "Content is required",
                                            })}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="content"
                                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                                        />
                                        {props.updatePost.errors.content && <div className="invalid-feedback">{props.updatePost.errors.content}</div>}
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
                                                'is-invalid': props.updatePost.errors.image || errors.image
                                            })}
                                            name="image"
                                            onChange={handleInputChange}
                                            ref={register({
                                                required: "Image is required",
                                            })}
                                        />
                                        <ErrorMessage
                                            errors={errors}
                                            name="image"
                                            render={({ message }) => <div className="invalid-feedback">{message}</div>}
                                        />
                                        {props.updatePost.errors.image && <div className="invalid-feedback">{props.updatePost.errors.image}</div>}
                                    </div>
                                </div>
                                <div className="text-center">
                                    {props.updatePost.loading ? (
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
        </React.Fragment>
    )
}

EditPost.propTypes = {
    editPostAction: PropTypes.func.isRequired,
    updatePostAction: PropTypes.func.isRequired,
    editPost: PropTypes.object.isRequired,
    updatePost: PropTypes.object.isRequired,
    log: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    editPost: state.editPost,
    updatePost: state.updatePost,
    log: state.log
})

export default connect(mapStateToProps, { editPostAction, updatePostAction })(EditPost)