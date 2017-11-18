import * as types from './actionTypes';
import productApi from '../api/mockProductApi';

export function loadProductSuccess(products) {
  return {type: types.LOAD_PRODUCT_DATA, products};
}

export function loadProducts() {
  return function (dispatch) {
    return productApi.getAllProducts().then(products => {
      dispatch(loadProductSuccess(products));
    }).catch(error => {
      throw (error);
    })
  }
}
