import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const showUser = this.props.users.find(
      (user) => user.id === this.props.userId
    );
    if (!showUser) return null;

    return <div className='header'> {showUser.name}</div>;
  }
}
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);