import * as actionTypes from '../store/constants/actions';
import {put} from 'redux-saga/effects';
export default function* fetchNews() {

    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
      .then(response => response.json());
  
    yield put({ type: actionTypes.NEWS_RECEIVED, json: json.articles || [{ error: json.message }] });
    // here after receiving data we are dispatching an action with payload i.e. api data 
  }