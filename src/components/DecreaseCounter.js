import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decreaseCounter } from '../redux/actions/counterActions';

class Decreasecounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {this.props.dispatch(decreaseCounter())}}>1 Azalt</button>            
            </div>
        );
    }
}

function mapDispatchProps(dispatch) {
    return {action : bindActionCreators(decreaseCounter,dispatch)}
}
export default connect(mapDispatchProps)(Decreasecounter);
