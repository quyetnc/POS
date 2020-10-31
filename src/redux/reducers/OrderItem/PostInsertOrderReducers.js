import {
    POST_INSERT_ORDER_ERROR,
    POST_INSERT_ORDER_SUCCESS,
} from '../../actions/OrderItem/PostInsertOrderAction';
var initialState = [];
const postInsertOrderReducers = (state = initialState, action) => {
    try {
        switch (action.type) {
            case POST_INSERT_ORDER_SUCCESS:
                // console.log(action.response);
                return action.response;

            case POST_INSERT_ORDER_ERROR:
                return action.response;
            default:
                return state;
        }
    } catch (error) {
        return state;
    }
};

export default postInsertOrderReducers;
