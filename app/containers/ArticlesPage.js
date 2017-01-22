import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Articles from '../components/Articles';
import * as ArticlesActions from '../actions/articles';
import * as MenuActions from '../actions/menu';

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, ArticlesActions, MenuActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
