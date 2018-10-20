import React from 'react'
import Photo from './photo'
import Comment from './comment'
import PostHeader from './postHeader'

class MicroPost extends React.Component {
  render () {
    return (
      <div>
        <PostHeader />
        <Photo />
        <Comment />
      </div>
    );
  }
}
export default MicroPost
