import { connect } from 'react-redux'

import * as userActions from '../../actions/user_actions'
import * as userSelectors from '../../selectors/user_selectors'
import * as errorSelectors from '../../selectors/error_selectors'

import { UserForm} from './user_form'

const mapStateToProps = state => {
  return {
    errors: errorSelectors.errors(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    populateUsers: users => dispatch(userActions.populateUsers(users)),
    addOrUpdateUser: users => dispatch(userActions.addOrUpdateUser(users)),
    postUser: user => dispatch(userActions.postUser(user)),
    removeUser: users => dispatch(userActions.removeUser(users))
  }
}

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)

export default UserContainer