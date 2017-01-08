import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sources from '../components/Sources';
import * as SourcesActions from '../actions/sources';

function mapStateToProps(state) {
  return {
    sources: state.sources
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SourcesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
