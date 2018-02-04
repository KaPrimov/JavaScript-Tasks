import { AJAX_BEGIN, AJAX_ERROR, FETCH_PAGE_SUCCESS, CREATE_FURNITURE_SUCCESS, ADD_REVIEW_SUCCESS, GOT_REVIEWS_SUCCESS } from './actionTypes';
import { fetchPage, fetchDetails, fetchSearchPage, createFurniture, addReview, getReviews } from '../api/remote';

function fetchSuccess(data) {
    return {
        type: FETCH_PAGE_SUCCESS,
        data
    };
}

function createSuccess(data) {
    return {
        type: CREATE_FURNITURE_SUCCESS,
        data
    };
}

function addReviewSuccess(furnitureId, data) {
    return {
        type: ADD_REVIEW_SUCCESS,
        furnitureId,
        data
    }
}

function gotReviewsSuccess(furnitureId, data) {
    return {
        type: GOT_REVIEWS_SUCCESS,
        furnitureId,
        data
    }
}
export function fetchPageAction(page) {
    return async (dispatch) => {
        dispatch({ type: AJAX_BEGIN });
        try {
            const data = await fetchPage(page);
            dispatch(fetchSuccess(data));
        } catch (error) {
            dispatch({
                type: AJAX_ERROR,
                error
            });
        }
    };
}

export function fetchDetailsAction(id) {
    return async (dispatch) => {
        dispatch({ type: AJAX_BEGIN });
        try {
            const data = await fetchDetails(id);
            dispatch(fetchSuccess([data]));
        } catch (error) {
            dispatch({
                type: AJAX_ERROR,
                error
            });
        }
    };
}

export function fetchSearchAction(query, page) {
    return async (dispatch) => {
        dispatch({ type: AJAX_BEGIN });
        try {
            const data = await fetchSearchPage(query, page);
            dispatch(fetchSuccess(data));
        } catch (error) {
            dispatch({
                type: AJAX_ERROR,
                error
            });
        }
    };
}

export function createAction(item) {
    return async (dispatch) => {
        dispatch({ type: AJAX_BEGIN });
        try {
            const data = await createFurniture(item);
            dispatch(createSuccess(data));
        } catch (error) {
            dispatch({
                type: AJAX_ERROR,
                error
            });
        }
    };
}

export function addReviewActionCreator(furnitureId, item) {
    return async (dispatch) => {
        dispatch({ type: AJAX_BEGIN });
        try {
            const data = await addReview(furnitureId, item);
            dispatch(addReviewSuccess(furnitureId, data));
        } catch (error) {
            dispatch({
                type: AJAX_ERROR,
                error
            });
        }
    };
}

export function getReviewsAction(furnitureId) {
    return async (dispatch) => {
        dispatch({ type: AJAX_BEGIN });
        try {
            const data = await getReviews(furnitureId);
            dispatch(gotReviewsSuccess(furnitureId, data));
        } catch (error) {
            dispatch({
                type: AJAX_ERROR,
                error
            });
        }
    };
}