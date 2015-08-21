import React, {Component} from 'react';

export default class InnerDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    let self = this;
    setTimeout(() => {
      const modal = self.refs.modal.getDOMNode();

      // if already visible
      if (this.state.visible) {
        if (!nextProps.status.visible) {
          $(modal).modal('hide');
          this.setState({
            visible: false
          });
        }
      } else {
        if (nextProps.status.visible) {
          $(modal).modal('show');
          this.setState({
            visible: true
          });
        }
      }
    }, 0);
  }

  render() {
    let buttonText = this.props.status.loading ? 'Saving...' : 'Save link';

    return (
      <div id="modal-2" className="modal" tabIndex={-1} role="dialog"
                style={{right: '50%'}} data-order={2} ref="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add new link</h4>
            </div>
            <div className="modal-body">
              ---------------------------
              <br/>(fill out fields)<br/>
              ---------------------------
              <br/><br/>
              <button className="btn btn-primary"
                  disabled={this.props.status.loading}
                  onClick={::this.props.saveLink}>{buttonText}</button>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={::this.props.endLink}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
