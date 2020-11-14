import React from 'react';
import LayoutContainer from '../../containers/Layout/LayoutContainer';
import CreatePostFormContainer from '../../containers/Post/CreatePostFormContainer';

const CreatePost = () => {
	return (
		<LayoutContainer>
			<CreatePostFormContainer />
		</LayoutContainer>
	);
};

export default CreatePost;
