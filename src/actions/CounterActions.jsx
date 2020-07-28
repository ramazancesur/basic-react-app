import * as counterTypes from '../actions/actionTypes'

export function getAllCounters(){
    return {
        type: counterTypes.GET_ALL
    }
}
export function handleIncrese(buttonId, incrementRate){
    return {
        type: counterTypes.HANDLE_INCRESE,
        buttonId: buttonId,
        incrementRate: incrementRate
    }
}

export function handleDecrese(buttonId, decrementRate){
    return {
        type: counterTypes.HANDLE_DECRESE,
        buttonId: buttonId,
        incrementRate: decrementRate
    }
}

export function newCounter(initialValue){
    return {
        type: counterTypes.NEW_COUNTER,
        initialValue: initialValue
    }
}




export const applyFilter = (filteredData) => {
    let success = (responseData) => { return { type: actionType.GET_ALL_NVG_CAPABILITY, responseData } }
    return dispatch => apiCall("http://localhost:8441/restService/")
        .post("postService",
            filteredData,
            { headers: { "Access-Control-Allow-Origin": "*" } })
        .then(responseData => {
            dispatch(success)
        }).catch(error => {
            dispatch(error)
        });
}

export const getAllCapabilities = () => {
    let success = (data) => { return { type: actionType.GET_ALL_NVG_CAPABILITY, data } }
    let failed = (error) => { return { type: actionType.GET_ALL_NVG_CAPABILITY_ERROR, error } }
    return dispatch => apiCall("http://localhost:8441/restService/")
        .get("getCapabilitiesRequest")
        .then((request) => {
            dispatch(success(request.data[0]));
        }).catch((ex) => {
            dispatch(failed(ex.message))
        });
}
