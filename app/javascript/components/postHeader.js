import React from 'react'

class PostHeader extends React.Component {
  render () {
    return (
      <div className='postHeader'>
        <img className='postUserIcon' src='https://pbs.twimg.com/profile_images/872289046218801152/nV_CRssz_400x400.jpg'/>
        <div className='postUserName'>Shota Yamazaki</div>
      </div>
    );
  }
}
export default PostHeader
