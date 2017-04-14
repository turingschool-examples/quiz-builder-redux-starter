import * as actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Users from '../components/Users/Users'

const mapStateToProps = (state) => {
  return { users: state.users }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
