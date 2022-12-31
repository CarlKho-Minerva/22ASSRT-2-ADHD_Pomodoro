import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { integrationActions } from '../actions';

class Integration extends React.Component {
  render() {
    return (
      <div>
        <h2>Integration</h2>
        {
          this.props.integrations.map(integration => (
            <div key={integration.id}>
              <p>{integration.name}</p>
              <button onClick={() => this.props.disconnectIntegration(integration.id)}>Disconnect</button>
            </div>
          ))
        }
        <button onClick={() => this.props.connectIntegration()}>Connect</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  integrations: state.integrations,
});

const mapDispatchToProps = dispatch => bindActionCreators(integrationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Integration);