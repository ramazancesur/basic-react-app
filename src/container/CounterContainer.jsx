import {connect} from 'react-redux'
import Counter from '../components/Counter'
import { getAllCounters, handleIncrese,handleDecrese, newCounter }   from '../actions/CounterActions'

const mapStateToProps= (state) =>({
    counterReducer: state.counterReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCounters: () => {
            dispatch(getAllCounters())
        },
        handleIncrese: (btnId=0, incrementRate=1)=> {
            dispatch(handleIncrese(btnId,incrementRate))
        },
        handleDecrese:  (btnId=0, decrementRate=1)=> {
            dispatch(handleDecrese(btnId,decrementRate))
        },
        newCounter: (initialValue=0) => {
            dispatch(newCounter(initialValue))
        }
        
    }
}

const CounterContainer= connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;