import React from 'react';
import classnames from 'classnames';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditorFormik = ({ touched, errored, errors, height, label, ...props }) => {
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<div
				className={classnames('form-control-tiny-mce', {
					'is-invalid-tiny-mce': (errored && touched) || errors
				})}
			>
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
			</div>
			{errored && touched && <div className="invalid-feedback d-block">{errored}</div>}
			{errors && <div className="invalid-feedback d-block">{errors}</div>}
		</>
	);
};

export default RichTextEditorFormik;
