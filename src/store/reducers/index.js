import * as actionTypes from "../constants/actions";
const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_NEWS:
      return { ...state, loading: true };
    case actionTypes.NEWS_RECEIVED:
      return { ...state, news: action.json[1], loading: false }; // here in news:action.json[1] it is a payload getting from an action
    default:
      return state;
  }
};

export default reducer;
