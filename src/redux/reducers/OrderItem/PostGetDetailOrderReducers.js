import {
    POST_GET_DETAIL_ORDER_SUCCESS,
    POST_GET_DETAIL_ORDER_ERROR,
} from '../../actions/OrderItem/PostGetDetailOrderAction';
var initialState = [];
const detailOrderReducers = (state = initialState, action) => {
    try {
        switch (action.type) {
            case POST_GET_DETAIL_ORDER_SUCCESS:
                // console.log(action.response);
                return action.response;

            case POST_GET_DETAIL_ORDER_ERROR:
                return action.response ? action.response.isSuccess : -1;
            default:
                return state;
        }
    } catch (error) {
        return state;
    }
};

export default detailOrderReducers;
