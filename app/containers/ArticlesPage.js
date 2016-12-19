import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Articles from '../components/Articles';
import * as ArticlesActions from '../actions/articles';

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ArticlesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
