import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseCounter} from '../redux/actions/counterActions'
class Increasecounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {this.props.dispatch(increaseCounter())}}>
                    1 arttır
                </button>
            </div>
        );
    }
}

function mapDispartchProps(dispatch) {
    return {actions : bindActionCreators(increaseCounter,dispatch)}
}
export default connect(mapDispartchProps)(Increasecounter); 
