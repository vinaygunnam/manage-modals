import React, {Component} from 'react';
import InnerDialog from './InnerDialog';

export default class OuterDialog extends Component {
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
        if (!nextProps.status.edit.visible) {
          $(modal).modal('hide');
          this.setState({
            visible: false
          });
        }
      } else {
        if (nextProps.status.edit.visible) {
          $(modal).modal('show');
          this.props.loadContent();
          this.setState({
            visible: true
          });
        }
      }
    }, 0);
  }

  render() {
    let content;
    let allowAddLink = true;

    if (this.props.status.edit.loading) {
      content = <div>Loading content...</div>;
      allowAddLink = false;
    } else {
      content = <section>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolores nam quod, pariatur quaerat odio delectus sapiente similique nemo aspernatur, eveniet dolorem, tenetur optio cupiditate, reiciendis quos in perferendis deleniti.</div>
        <div>Quos reiciendis ipsa praesentium nulla quasi dolore nihil facere, odit, dignissimos, repellendus velit, dolor accusamus quam ipsam. Tempora, ipsam, repellendus! Porro molestiae ad a facilis asperiores. Repudiandae dignissimos beatae vero!</div>
        <div>Culpa, possimus voluptate nesciunt adipisci maxime blanditiis assumenda similique, sed ex, minima et corrupti repellat dolorum quam! Ratione cum fuga nesciunt itaque provident quasi voluptatem eum, ex, dolorum hic saepe.</div>
      </section>;
    }



    return (
      <div className="modal" tabIndex={-1} role="dialog" data-order={1} ref="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Assignment editor</h4>
            </div>
            <div className="modal-body">
              {content}
              <InnerDialog status={this.props.status.link}
                  saveLink={::this.props.saveLink}
                  endLink={::this.props.endLink}/>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary"
                    disabled={!allowAddLink}
                    onClick={::this.props.beginLink}>Add link</button>
              <button type="button" className="btn btn-default" onClick={::this.props.endEdit}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
