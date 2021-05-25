import { NEWS, NEWS_DETAIL } from './action';

export default (state = {}, action) => {
  const payload = action.payload;

  switch (action.type) {
    case NEWS.PENDING:
        return {
          ...state,
          error: ''
        };
    case NEWS.SUCCESS:
        return {
          ...state,
          news: payload
        }
    case NEWS.ERROR:
        return {
          ...state,
          error: payload.message
        }
    case NEWS_DETAIL.SUCCESS:
        return {
          ...state,
          newsDetail: payload
        }
    default:
      return state;
  }
};
