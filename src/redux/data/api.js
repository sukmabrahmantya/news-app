import { newsFns, newsDetailFns } from './action';
import { Axios } from '../utils';
import { dummyData } from '../../dummyData';

export function getNewsDetail(data) {
  return dispatch => {
    dispatch(newsDetailFns.success(data))
  };
};

export function getNews() {
  console.log('masuk API')
  return dispatch => {
    dispatch(newsFns.pending());

    Axios({
      method: 'get',
      url: `top-headlines?country=id&pageSize=20&apiKey=c26baf585ce845e0a01621bf209d26ca`
    })
    .then(({data}) => {
      console.log(data)
      dispatch(newsFns.success(data))
    })
    .catch(err => {
      dispatch(newsFns.success(dummyData))
    })
  };
};