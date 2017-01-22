import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import * as MenuActions from '../actions/menu';

function mapStateToProps(state) {
  return {
    visible: state.menu.visible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MenuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
