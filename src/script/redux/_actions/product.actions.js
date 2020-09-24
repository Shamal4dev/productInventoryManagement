import { productConstants } from '../_constants/product.constants';
import { productService } from '../../services';
import { alertActions } from './alert.actions';
import { store } from '../_store/store';

export const productActions = {
    getAll,
    getById,
    add,
    update,
    delete: _delete
};

function getAll() {
    return dispatch => {
        dispatch(request());

        productService.getAll()
            .then(
                products => dispatch(success(products)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(products) { return { type: productConstants.GETALL_SUCCESS, products } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}


function getById(id) {
    return dispatch => {
        dispatch(request());

        productService.getById(id)
            .then(
                product => dispatch(success(product)),
                error => dispatch(failure(error))
            );
    };
    function request() { return { type: productConstants.GETBYID_REQUEST } }
    function success(product) { return { type: productConstants.GETBYID_SUCCESS, product } }
    function failure(error) { return { type: productConstants.GETBYID_FAILURE, error } }
}
function add(product) {
    return dispatch => {
        dispatch(request(product));

        productService.add(product)
            .then(
                product => { 
                    dispatch(success(product));
                    productService.getAll()
                    .then(
                        products => store.dispatch({ type: productConstants.GETALL_SUCCESS, products })
                    );
                    dispatch(alertActions.success('Product added successfully'));
                   
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(product) { return { type: productConstants.ADD_REQUEST, product } }
    function success(product) { return { type: productConstants.ADD_SUCCESS, product } }
    function failure(error) { return { type: productConstants.ADD_FAILURE, error } }
}
function update(product, alertRequired = true) {
    return dispatch => {
        dispatch(request(product));

        productService.update(product)
            .then(
                product => { 
                    dispatch(success());
                    productService.getAll()
                    .then(
                        products => store.dispatch({ type: productConstants.GETALL_SUCCESS, products })
                    );
                    if(alertRequired){
                        dispatch(alertActions.success('Product updated successfully'));
                    }
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(product) { return { type: productConstants.UPDATE_REQUEST, product } }
    function success(product) { return { type: productConstants.UPDATE_SUCCESS, product } }
    function failure(error) { return { type: productConstants.UPDATE_FAILURE, error } }
}


// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        productService.delete(id)
            .then(
                product => { 
                    
                    dispatch(success(id));
                    productService.getAll()
                    .then(
                        products => store.dispatch({ type: productConstants.GETALL_SUCCESS, products })
                    );
                    dispatch(alertActions.success('Product deleted successfully'));
                },
                error => {
                    dispatch(failure(id, error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(id) { return { type: productConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: productConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: productConstants.DELETE_FAILURE, id, error } }
}