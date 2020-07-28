import React, { Component } from 'react';
import CounterItem from './CounterItem'

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { counterReducer, getAllCounters, handleIncrese, handleDecrese, newCounter } = this.props
        return (<div>
            <button
                onClick={getAllCounters}
                className={'btn btn-blue'}
            >
                getAllCounters
                </button>

            <button
                onClick={() => newCounter(3)}
                className={'btn btn-blue'}
            >
                New Counter
                </button>

            {counterReducer.countList.length !== 0 &&
                <h1>
                    {counterReducer.countList.map((item, index) => (
                        <CounterItem
                            key={index}
                            item={item}
                            handleIncrese={handleIncrese}
                            handleDecrese={handleDecrese}
                        />
                    ))}
                </h1>

            }


        </div>
        )
    }
}

export default Counter;