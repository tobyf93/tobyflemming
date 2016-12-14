import axios from 'axios';

export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
const FETCH_FEED_FAIL = 'FETCH_FEED_FAIL';

export const fetchFeed = () => (dispatch) => {
  axios.get('/feed').then(
    res => dispatch({ type: FETCH_FEED_SUCCESS, images: res.data }),
    err => dispatch({ type: FETCH_FEED_FAIL, err }),
  );
};
