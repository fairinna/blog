import React from 'react';
import { connection } from 'react-redux';

class PostList extends React.Component {
  render() {
    return <div>POST LIST</div>;
  }
}
export default connection()(PostList);
