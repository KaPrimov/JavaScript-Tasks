import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectons => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, payload: collectons
});

export const fetchCollectionsFailure = message => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE, payload: message
});
