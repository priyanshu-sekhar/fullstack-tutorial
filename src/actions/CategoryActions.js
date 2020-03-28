import {categories_uri} from "../models/Apis";
import {GET_HEADER} from "../models/Headers";
import {FETCH_CATEGORIES} from "../models/Events";
import {logAPIError} from "../models/Errors";

export const fetchCategories = (dispatch) => {
  fetch(categories_uri, GET_HEADER)
      .then(res => res.json())
      .then(value => {
        dispatch({
          type: FETCH_CATEGORIES,
          payload: value
        })
      })
      .catch(err => logAPIError(categories_uri, err))
};