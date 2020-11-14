import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import isEmpty from '../../helpers/isEmpty';
import convertHtmlToText from '../../helpers/convertHtmlToText';
import convertTextToSlug from '../../helpers/convertTextToSlug';
import InputForm from '../../components/Form/InputForm';
import TextareaForm from '../../components/Form/TextareaForm';
import RichTextEditorForm from '../../components/Form/RichTextEditorForm';
import SelectInputForm from '../../components/Form/SelectInputForm';
import CreateSelectInputForm from '../../components/Form/CreateSelectInputForm';
import { Container } from '../../components/Styled/Wapper';
import { ButtonBtnType } from '../../components/Styled/Button';
import { DivSpinner } from '../../components/Styled/Spinners';
import {
	DivLg8Md10Center,
	DivFormGroup,
	DivCenter,
	FormTitleHeader,
	H1FormTileHeader,
	PFormTileHeader
} from '../../components/Styled/LoginForm';
import { connect } from 'react-redux';
import { editPostThunk, updatePostThunk, editPostResetedThunk } from '../../thunks/postThunk';
import { fetchTagThunk, fetchTagResetedThunk } from '../../thunks/tagThunk';
import { fetchCategoryThunk, fetchCategoryResetedThunk } from '../../thunks/categoryThunk';

const mapStateToProps = (state) => ({
	editPost: state.posts.editPost,
	updatePost: state.posts.updatePost,
	fetchTag: state.tags.fetchTag,
	fetchCategory: state.categories.fetchCategory
});
const mapDispatchToProps = {
	editPostThunk,
	updatePostThunk,
	fetchTagResetedThunk,
	fetchCategoryResetedThunk,
	editPostResetedThunk,
	fetchTagThunk,
	fetchCategoryThunk
};

const propTypes = {
	editPostThunk: PropTypes.func.isRequired,
	fetchTagThunk: PropTypes.func.isRequired,
	fetchCategoryThunk: PropTypes.func.isRequired,
	fetchTagResetedThunk: PropTypes.func.isRequired,
	fetchCategoryResetedThunk: PropTypes.func.isRequired,
	updatePostThunk: PropTypes.func.isRequired,
	editPostResetedThunk: PropTypes.func.isRequired,
	editPost: PropTypes.object.isRequired,
	fetchTag: PropTypes.object.isRequired,
	fetchCategory: PropTypes.object.isRequired,
	updatePost: PropTypes.object.isRequired
};
const EditPostFormContainer = ({
	editPostThunk,
	fetchTagThunk,
	fetchCategoryThunk,
	updatePostThunk,
	fetchTagResetedThunk,
	fetchCategoryResetedThunk,
	editPostResetedThunk,
	editPost,
	fetchTag,
	fetchCategory,
	updatePost
}) => {
	const { id } = useParams();
	const history = useHistory();
	useEffect(() => {
		editPostThunk(id);
		fetchTagThunk();
		fetchCategoryThunk();
		return () => {
			editPostResetedThunk();
			fetchTagResetedThunk();
			fetchCategoryResetedThunk();
		};
	}, [
		editPostResetedThunk,
		editPostThunk,
		fetchCategoryResetedThunk,
		fetchCategoryThunk,
		fetchTagResetedThunk,
		fetchTagThunk,
		id
	]);
	const initialValues = {
		title: editPost.post.title,
		summary: editPost.post.summary,
		content: editPost.post.content,
		image: editPost.post.image,
		tag: editPost.post.tag,
		category: editPost.post.category
	};
	const validationSchema = Yup.object({
		title: Yup.string()
			.min(6, 'Title must be at least 6 characters')
			.max(100, 'Title must be at most 100 characters')
			.required('Title is required'),
		summary: Yup.string()
			.min(6, 'Summary must be at least 6 characters')
			.max(666, 'Summary must be at most 666 characters'),
		content: Yup.string().required('Content is required'),
		image: Yup.string().max(300, 'Image must be at most 300 characters'),
		tag: Yup.array()
			.min(1, 'Pick at least 1 tag')
			.of(
				Yup.object().shape({
					id: Yup.string().required(),
					title: Yup.string().required()
				})
			),
		category: Yup.array()
			.min(1, 'Pick at least 1 category')
			.of(
				Yup.object().shape({
					id: Yup.string().required(),
					title: Yup.string().required()
				})
			)
	});
	const onSubmit = (values) => {
		const post = {
			title: values.title,
			meta_title: values.title,
			meta_description: convertHtmlToText(values.content),
			slug: convertTextToSlug(values.title),
			summary: values.summary,
			image: values.image,
			content: values.content,
			tag: values.tag,
			category: values.category
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
				updatePostThunk(post, id, history);
			}
		});
	};
	return (
		<Container>
			{editPost.isLoading || isEmpty(editPost.post) ? (
				<DivSpinner />
			) : (
				<DivLg8Md10Center>
					<FormTitleHeader>
						<H1FormTileHeader>Create post</H1FormTileHeader>
						<PFormTileHeader>Create new post</PFormTileHeader>
					</FormTitleHeader>
					<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
						{({ values, errors, touched, handleSubmit, setFieldValue, setFieldTouched }) => (
							<form onSubmit={handleSubmit}>
								<DivFormGroup>
									<InputForm label="Title" id="title" name="title" type="text" />
								</DivFormGroup>
								<DivFormGroup>
									<InputForm
										label="Auto Slug"
										id="slug"
										name="slug"
										type="text"
										value={convertTextToSlug(values.title)}
										isError={updatePost.isError}
										errorMessage={updatePost.errorMessage.slug}
										readOnly
									/>
								</DivFormGroup>
								<DivFormGroup>
									<TextareaForm rows="6" label="Summary" id="summary" name="summary" type="text" />
								</DivFormGroup>
								<DivFormGroup>
									<RichTextEditorForm
										label="Content"
										id="content"
										textareaName="content"
										onEditorChange={(selectedValue) => setFieldValue('content', selectedValue)}
										onBlur={() => setFieldTouched('content', true)}
										value={values.content}
										height="333"
										errors={errors.content}
										touched={touched.content}
									/>
								</DivFormGroup>
								<DivFormGroup>
									<TextareaForm
										rows="4"
										label="Auto description"
										id="meta_description"
										name="meta_description"
										type="text"
										value={convertHtmlToText(values.content)}
										readOnly
									/>
								</DivFormGroup>
								<DivFormGroup>
									<CreateSelectInputForm
										id="tag"
										name="tag"
										label="Tag"
										isMulti={true}
										options={fetchTag.tag}
										onChange={(selectedValue) => {
											if (isEmpty(selectedValue)) {
												selectedValue = [];
											}
											setFieldValue('tag', selectedValue);
										}}
										onBlur={() => setFieldTouched('tag', true)}
										value={values.tag}
										getNewOptionData={(inputValue, optionLabel) => ({
											id: uuidv4(),
											title: optionLabel,
											meta_title: optionLabel,
											meta_description: optionLabel,
											slug: convertTextToSlug(optionLabel),
											content: optionLabel,
											__isNew__: true
										})}
										isValidNewOption={(inputValue, selectValue, selectOptions) => {
											if (
												inputValue.trim().length === 0 ||
												selectValue.find((option) => option.slug === convertTextToSlug(inputValue)) ||
												selectOptions.find((option) => option.slug === convertTextToSlug(inputValue))
											) {
												return false;
											}
											return true;
										}}
										getOptionValue={(option) => option.id}
										getOptionLabel={(option) => option.title}
										errors={errors.tag}
										touched={touched.tag}
									/>
								</DivFormGroup>
								<DivFormGroup>
									<SelectInputForm
										id="category"
										name="category"
										label="Category"
										isMulti={true}
										options={fetchCategory.category}
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
										errors={errors.category}
										touched={touched.category}
									/>
								</DivFormGroup>
								<DivFormGroup>
									<InputForm label="Image" id="image" name="image" type="text" />
								</DivFormGroup>
								<DivCenter>
									{updatePost.isLoading ? (
										<ButtonBtnType $typeBtn="primary" type="submit" disabled>
											Loading...
										</ButtonBtnType>
									) : (
										<ButtonBtnType $typeBtn="primary" type="submit">
											Update
										</ButtonBtnType>
									)}
								</DivCenter>
							</form>
						)}
					</Formik>
				</DivLg8Md10Center>
			)}
		</Container>
	);
};

EditPostFormContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(EditPostFormContainer);
