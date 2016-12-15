import { FETCH_FEED_SUCCESS } from '../actions';

export default function (state = { images: [] }, action) {
  switch (action.type) {
    case FETCH_FEED_SUCCESS:
      return { images: action.images };
    default:
      return state;
  }
}
