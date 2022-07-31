import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  renderList() {
    return this.props.post.map((item) => {
      return (
        <div className='item' key={item.id}>
          <i className='large middle aligned icon user'></i>
          <div className='content'>
            <div className='description'>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </div>
          <UserHeader userId={item.userId} />
        </div>
      );
    });
  }
  render() {
    console.log(this.props.post);
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { post: state.post };
};
export default connect(mapStateToProps, { fetchData })(PostList);
