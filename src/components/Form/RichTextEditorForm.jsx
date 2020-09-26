import React from 'react';
import classnames from 'classnames';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditorForm = ({ label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<Editor
				{...props}
				init={{
					apiKey: '7tb5sawtkhejvn3yeakoe0wsatx1chxf2a02617fn23psx6c',
					height: 666,
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
		</>
	);
};

export default RichTextEditorForm;
