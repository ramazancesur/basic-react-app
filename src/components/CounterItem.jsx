import React, { Component } from 'react'
import PropTypes from 'prop-types';

class CounterItem extends Component {

    render() {
        const { id } = this.props.item
        return (<div>
            <span className="badge badge-primary m-2"> {this.props.item.count} </span>
            <button
                className="btn btn-secondary btn-sm"
                onClick={() => this.props.handleIncrese(id, 2)}
            >
                Increament
            </button>

            <button
                className="btn btn-secondary btn-sm"
                onClick={() => this.props.handleDecrese(id, 2)}
            >
                Decreament
            </button>

        </div>)
    }
}
CounterItem.propTypes = {
    item: PropTypes.object.isRequired
}
export default CounterItem;