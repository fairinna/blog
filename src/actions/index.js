//import React from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchData = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_DATA', payload: response.data });
};
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
