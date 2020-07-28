import * as actionTypes from '../actions/actionTypes'

const initialState = {
    countList: []
}


function initaiDataCount(state, action) {
    let { countList } = state
    countList = [
        { id: 1, count: 4 },
        { id: 3, count: 2 },
        { id: 4, count: 5 },
        { id: 2, count: 6 },
        { id: 5, count: 7 }
    ];
    return {
        ...state,
        countList
    };
}

function handleIncrese(state, action) {
    let { countList } = state;
    countList = countList.map(item => {
        if (item.id == action.buttonId) {
            item.count += action.incrementRate;
        }
        return item;
    })
    return {
        ...state,
        countList
    }
}

function handleDecrese(state, action) {
    let { countList } = state;
    countList = countList.map(item => {
        if (item.id == action.buttonId) {
            item.count -= action.incrementRate;
        }
        return item;
    })
    return {
        ...state,
        countList
    }
}

function newCounter(state, action) {
    let { countList } = state;
    const newIndex= arrayMax(countList.map(item=> item.id))+1;
    debugger;
    const newObj= {id: newIndex, count: action.initialValue}
    countList.push(newObj);
    return {
        ...state,
            countList
    }
}

function arrayMax(itemList) {
    return  Math.max.apply(Math, itemList);
}

function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL:
            return initaiDataCount(state, action);
        case actionTypes.HANDLE_INCRESE:
            return handleIncrese(state, action)
        case actionTypes.HANDLE_DECRESE:
            return handleDecrese(state, action);
        case actionTypes.NEW_COUNTER:
            return newCounter(state, action);
        default:
            return state;
    }
}

export default CounterReducer;