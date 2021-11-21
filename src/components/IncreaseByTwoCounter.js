import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';

class Increasebytwocounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e =>{this.props.dispatch(increaseByTwoCounter())}}>2 arttır</button>
            </div>
        );
    }
}

function mapDispatchProps(dispacth){
    return {action : bindActionCreators(increaseByTwoCounter,dispacth)}
}
export default connect(mapDispatchProps)(Increasebytwocounter);
