import { createSelector } from 'reselect';

const getFetchPost = (state) => state.posts.fetchPost;
// reselect function
export const getFetchPostState = createSelector([getFetchPost], (fetchPost) => fetchPost);
