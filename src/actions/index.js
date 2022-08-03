//import React from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  console.log('above Fetch data');
  await dispatch(fetchData());
  console.log('Response Data');
  const userId = _.uniq(_.map(getState().post, 'userId'));

  userId.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchData = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_DATA', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
