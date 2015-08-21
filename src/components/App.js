import React, {Component} from 'react';
import OuterDialog from './OuterDialog';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actionCreators from '../actions/modals';

@connect(state => ({process: state.modals}))
export default class App extends Component {
  constructor(props) {
    super(props);

    this.actionCreators = bindActionCreators(actionCreators, this.props.dispatch);
  }

  render() {
    return (
      <div className="container">
        <button className="btn btn-primary"
            onClick={::this.actionCreators.initiateEdit}>Edit assignment</button>
        <OuterDialog status={this.props.process}
            loadContent={::this.actionCreators.fetchContent}
            endEdit={::this.actionCreators.terminateEdit}
            beginLink={::this.actionCreators.initiateLink}
            saveLink={::this.actionCreators.saveLink}
            endLink={::this.actionCreators.endLink}/>
      </div>
    );
  }
}
