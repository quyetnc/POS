export const GET_LOCATION_TABLE = 'GET_LOCATION_TABLE';
export const GET_LOCATION_TABLE_SUCCESS = 'GET_LOCATION_TABLE_SUCCESS';
export const GET_LOCATION_TABLE_ERROR = 'GET_LOCATION_TABLE_ERROR';

export const getAllLocation = (PROPERTY_CODE, OUTLET_ID) => {
    return {
        type: GET_LOCATION_TABLE,
        data: { PROPERTY_CODE, OUTLET_ID },
    };
};