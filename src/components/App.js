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
        <div className="panel">
          <div className="panel-body">
            <blockquote>
              <a href="https://github.com/vinaygunnam/manage-modals" target="_blank">View source</a>
            </blockquote>
          </div>
        </div>

        <div className="well">
          <button className="btn btn-primary"
              onClick={::this.actionCreators.initiateEdit}>Edit assignment</button>
          <br/><br/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

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
