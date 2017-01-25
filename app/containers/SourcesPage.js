import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sources from '../components/Sources';
import * as SourcesActions from '../actions/sources';
import * as MenuActions from '../actions/menu';

function mapStateToProps(state) {
  return {
    sources: state.sources,
    menuVisible: state.menu.visible,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, MenuActions, SourcesActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
