import {takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../constants/actions';
import fetchNews from '../../api/news-api'
// import axios from 'axios'

// function* fetchNews() {

//   const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
//     .then(response => response.json());

//   yield put({ type: actionTypes.NEWS_RECEIVED, json: json.articles || [{ error: json.message }] });
//   // here after receiving data we are dispatching an action with payload i.e. api data 
// }

function* actionWatcher() {
  yield takeLatest(actionTypes.GET_NEWS, fetchNews)
  // used for watching all the actins when an action encountered then its corresponding worker(function) will execute
}


export default function* rootSaga() {
  //here we're exporting root saga which contains all the action watchers
  yield all([
    actionWatcher(),
  ]);
}

