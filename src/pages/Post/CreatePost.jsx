import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { createPostThunk } from '../../thunks/postThunk';
import { fetchTagThunk } from '../../thunks/tagThunk';
import { fetchCategoryThunk } from '../../thunks/categoryThunk';
import MainLayout from '../../layouts/MainLayout';
import InputForm from '../../components/Form/InputForm';
import TextareaForm from '../../components/Form/TextareaForm';
import RichTextEditorForm from '../../components/Form/RichTextEditorForm';
import SelectInputForm from '../../components/Form/SelectInputForm';

const propTypes = {
	createPostThunk: PropTypes.func.isRequired,
	fetchTagThunk: PropTypes.func.isRequired,
	fetchCategoryThunk: PropTypes.func.isRequired,
	createPost: PropTypes.object.isRequired,
	fetchTag: PropTypes.object.isRequired,
	fetchCategory: PropTypes.object.isRequired,
	log: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	createPost: state.createPost,
	fetchTag: state.fetchTag,
	fetchCategory: state.fetchCategory,
	log: state.log
});
const mapDispatchToProps = {
	createPostThunk,
	fetchTagThunk,
	fetchCategoryThunk
};
const CreatePost = (props) => {
	const { createPostThunk, fetchTagThunk, fetchCategoryThunk, fetchCategory, fetchTag, createPost } = props;
	const history = useHistory();
	const [state, setState] = useState({
		title: '',
		meta_title: '',
		meta_description: '',
		slug: '',
		summary: '',
		image: ''
	});
	const [content, setContent] = useState('');
	const [tag, setTag] = useState(null);
	const [category, setCategory] = useState(null);

	useEffect(() => {
		fetchTagThunk();
		fetchCategoryThunk();
	}, []);
	const handleSelectTagChange = (values) => {
		setTag(values);
	};
	const handleSelectCategoryChange = (values) => {
		setCategory(values);
	};
	const handleEditorChange = (content) => {
		setContent(content);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setState((prevState) => ({
			...prevState,
			[name]: value
		}));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const { title, meta_title, meta_description, slug, summary, image } = state;
		const post = {
			title: title,
			meta_title: meta_title,
			meta_description: meta_description,
			slug: slug,
			summary: summary,
			image: image,
			content: content,
			post_tag: tag,
			post_category: category
		};
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
							<form onSubmit={handleSubmit}>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<TextareaForm
											rows="3"
											label="Title"
											id="title"
											name="title"
											type="text"
											onChange={handleChange}
											value={state.title}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<TextareaForm
											rows="3"
											label="Meta title"
											id="meta_title"
											name="meta_title"
											type="text"
											onChange={handleChange}
											value={state.meta_title}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<TextareaForm
											rows="6"
											label="Meta description"
											id="meta_description"
											name="meta_description"
											type="text"
											onChange={handleChange}
											value={state.meta_description}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<InputForm
											label="Slug"
											id="slug"
											name="slug"
											type="text"
											onChange={handleChange}
											value={state.slug}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<TextareaForm
											rows="6"
											label="Summary"
											id="summary"
											name="summary"
											type="text"
											onChange={handleChange}
											value={state.summary}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<RichTextEditorForm
											label="Content"
											id="content"
											textareaName="content"
											onEditorChange={handleEditorChange}
											value={content}
											height="666"
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<SelectInputForm
											id="tag"
											name="tag"
											label="Tag"
											options={fetchTag.tags}
											onChange={handleSelectTagChange}
											value={tag}
											getOptionLabel={(option) => option.title}
											getOptionValue={(option) => option.id}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<SelectInputForm
											id="category"
											name="category"
											label="Category"
											options={fetchCategory.categories}
											onChange={handleSelectCategoryChange}
											value={category}
											getOptionLabel={(option) => option.title}
											getOptionValue={(option) => option.id}
										/>
									</div>
								</div>
								<div className="control-group">
									<div className="form-group floating-label-form-group controls">
										<InputForm
											label="Image"
											id="image"
											name="image"
											type="text"
											onChange={handleChange}
											value={state.image}
										/>
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
	);
};

CreatePost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
