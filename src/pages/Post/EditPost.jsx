import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import MainLayout from '../../layouts/MainLayout';
import { editPostThunk, updatePostThunk } from '../../thunks/postThunk';
import { fetchTagThunk } from '../../thunks/tagThunk';
import { fetchCategoryThunk } from '../../thunks/categoryThunk';
import EditPostLoading from '../../components/Loading/EditPostLoading';
import InputForm from '../../components/Form/InputForm';
import TextareaForm from '../../components/Form/TextareaForm';
import RichTextEditorForm from '../../components/Form/RichTextEditorForm';
import SelectInputForm from '../../components/Form/SelectInputForm';

const propTypes = {
	editPostThunk: PropTypes.func.isRequired,
	fetchTagThunk: PropTypes.func.isRequired,
	fetchCategoryThunk: PropTypes.func.isRequired,
	updatePostThunk: PropTypes.func.isRequired,
	editPost: PropTypes.object.isRequired,
	fetchTag: PropTypes.object.isRequired,
	fetchCategory: PropTypes.object.isRequired,
	updatePost: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
	editPost: state.editPost,
	fetchTag: state.fetchTag,
	fetchCategory: state.fetchCategory,
	updatePost: state.updatePost
});
const mapDispatchToProps = {
	editPostThunk,
	fetchTagThunk,
	fetchCategoryThunk,
	updatePostThunk
};
const EditPost = (props) => {
	const {
		editPostThunk,
		fetchTagThunk,
		fetchCategoryThunk,
		updatePostThunk,
		editPost,
		fetchTag,
		fetchCategory,
		updatePost
	} = props;
	const { slug } = useParams();
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
		editPostThunk(slug);
		fetchTagThunk();
		fetchCategoryThunk();
	}, []);
	useEffect(() => {
		setState({
			title: editPost.posts.title,
			meta_title: editPost.posts.meta_title,
			meta_description: editPost.posts.meta_description,
			slug: editPost.posts.slug,
			summary: editPost.posts.summary,
			image: editPost.posts.image
		});
		setContent(editPost.posts.content);
	}, [editPost.posts]);
	const handleEditorChange = (content) => {
		setContent(content);
	};
	const handleSelectTagChange = (values) => {
		setTag(values);
	};
	const handleSelectCategoryChange = (values) => {
		setCategory(values);
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
		const { title, meta_title, meta_description, summary, image } = state;
		const newSlug = state.slug;
		const post = {
			title: title,
			meta_title: meta_title,
			meta_description: meta_description,
			slug: newSlug,
			summary: summary,
			content: content,
			image: image,
			post_tag: tag,
			post_category: category
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
				updatePostThunk(post, history, slug, newSlug);
			}
		});
	};
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
							<EditPostLoading />
						) : (
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
						)}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

EditPost.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
