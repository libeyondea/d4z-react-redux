import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import MainLayout from '../../layouts/MainLayout';
import { createPostThunk } from '../../thunks/postThunk';
import { fetchTagThunk } from '../../thunks/tagThunk';
import { fetchCategoryThunk } from '../../thunks/categoryThunk';
import isEmpty from '../../helpers/isEmpty';
import InputFormik from '../../components/Formik/InputFormik';
import TextareaFormik from '../../components/Formik/TextareaFormik';
import RichTextEditorFormik from '../../components/Formik/RichTextEditorFormik';
import SelectInputFormik from '../../components/Formik/SelectInputFormik';

const propTypes = {
	createPostThunk: PropTypes.func.isRequired,
	fetchTagThunk: PropTypes.func.isRequired,
	fetchCategoryThunk: PropTypes.func.isRequired,
	createPost: PropTypes.object.isRequired,
	fetchTag: PropTypes.object.isRequired,
	fetchCategory: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	createPost: state.createPost,
	fetchTag: state.fetchTag,
	fetchCategory: state.fetchCategory
});
const mapDispatchToProps = {
	createPostThunk,
	fetchTagThunk,
	fetchCategoryThunk
};
const CreatePost = (props) => {
	const { createPostThunk, fetchTagThunk, fetchCategoryThunk, fetchCategory, fetchTag, createPost } = props;
	const history = useHistory();
	useEffect(() => {
		fetchTagThunk();
		fetchCategoryThunk();
	}, []);
	const initialValues = {
		title: '',
		meta_title: '',
		meta_description: '',
		slug: '',
		summary: '',
		content: '',
		image: '',
		tag: [],
		category: []
	};
	const validationSchema = Yup.object({
		title: Yup.string().required('Title is required'),
		meta_title: Yup.string().required('Meta title is required'),
		meta_description: Yup.string().required('Meta description is required'),
		slug: Yup.string().required('Slug is required'),
		summary: Yup.string().required('Summary is required'),
		content: Yup.string().required('Content is required'),
		image: Yup.string().required('Image is required'),
		tag: Yup.array()
			.min(1, 'Pick at least 1 tag')
			.of(
				Yup.object().shape({
					id: Yup.number().required().positive().integer(),
					title: Yup.string().required()
				})
			),
		category: Yup.array()
			.min(1, 'Pick at least 1 category')
			.of(
				Yup.object().shape({
					id: Yup.number().required().positive().integer(),
					title: Yup.string().required()
				})
			)
	});
	const onSubmit = (values) => {
		const { title, meta_title, meta_description, slug, summary, content, image, tag, category } = values;
		const post = {
			title: title,
			meta_title: meta_title,
			meta_description: meta_description,
			slug: slug,
			summary: summary,
			image: image,
			content: content,
			tag: tag,
			category: category
		};
		console.log(post);
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
		});
	};
	return (
		<MainLayout>
			<header className="masthead" style={{ backgroundImage: 'url("/assets/img/react.jpg")' }}>
				<div className="overlay" />
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-10 mx-auto">
							<div className="site-heading">
								<h1>Create Post</h1>
								<span className="subheading">D4Z</span>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-10 mx-auto">
						<div className="nht-form">
							<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
								{({ values, errors, touched, handleSubmit, setFieldValue, setFieldTouched }) => (
									<form onSubmit={handleSubmit}>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<TextareaFormik rows="3" label="Title" id="title" name="title" type="text" />
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<TextareaFormik rows="3" label="Meta title" id="meta_title" name="meta_title" type="text" />
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<TextareaFormik
													rows="6"
													label="Meta description"
													id="meta_description"
													name="meta_description"
													type="text"
												/>
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<InputFormik label="Slug" id="slug" name="slug" type="text" />
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<TextareaFormik rows="6" label="Summary" id="summary" name="summary" type="text" />
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<RichTextEditorFormik
													label="Content"
													id="content"
													textareaName="content"
													onEditorChange={(selectedValue) => setFieldValue('content', selectedValue)}
													onBlur={() => setFieldTouched('content', true)}
													value={values.content}
													height="333"
													errored={errors.content}
													touched={touched.content}
												/>
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<SelectInputFormik
													id="tag"
													name="tag"
													label="Tag"
													options={fetchTag.tags}
													onChange={(selectedValue) => {
														if (isEmpty(selectedValue)) {
															selectedValue = [];
														}
														setFieldValue('tag', selectedValue);
													}}
													onBlur={() => setFieldTouched('tag', true)}
													value={values.tag}
													getOptionValue={(option) => option.id}
													getOptionLabel={(option) => option.title}
													errored={errors.tag}
													touched={touched.tag}
												/>
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<SelectInputFormik
													id="category"
													name="category"
													label="Category"
													options={fetchCategory.categories}
													onChange={(selectedValue) => {
														if (isEmpty(selectedValue)) {
															selectedValue = [];
														}
														setFieldValue('category', selectedValue);
													}}
													onBlur={() => setFieldTouched('category', true)}
													value={values.category}
													getOptionValue={(option) => option.id}
													getOptionLabel={(option) => option.title}
													errored={errors.category}
													touched={touched.category}
												/>
											</div>
										</div>
										<div className="control-group">
											<div className="form-group floating-label-form-group controls">
												<InputFormik label="Image" id="image" name="image" type="text" />
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
								)}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

CreatePost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
