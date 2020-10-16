import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { LabelForm, RichTXTFormControl, DivInvalidFeedback } from '../Styled/LoginForm';

const RichTextEditorFormik = ({ touched, errors, isError, errorMessage, height, label, ...props }) => {
	return (
		<>
			<LabelForm htmlFor={props.id || props.name}>{label}</LabelForm>
			<RichTXTFormControl isInValid={((errors && touched) || (isError && errorMessage)) && true}>
				<Editor
					{...props}
					init={{
						apiKey: '7tb5sawtkhejvn3yeakoe0wsatx1chxf2a02617fn23psx6c',
						height: height,
						plugins: [
							'advlist autolink link image lists charmap print preview hr anchor pagebreak',
							'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
							'table emoticons template paste help'
						],
						toolbar:
							'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
							'bullist numlist outdent indent | link image | print preview media fullpage | ' +
							'forecolor backcolor emoticons | help',
						menu: {
							favs: {
								title: 'My Favorites',
								items: 'code visualaid | searchreplace | emoticons'
							}
						},
						menubar: 'favs file edit view insert format tools table help'
					}}
				/>
			</RichTXTFormControl>
			{errors && touched && <DivInvalidFeedback>{errors}</DivInvalidFeedback>}
			{isError && errorMessage && <DivInvalidFeedback>{errorMessage}</DivInvalidFeedback>}
		</>
	);
};

export default RichTextEditorFormik;
