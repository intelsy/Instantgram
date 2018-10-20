import React from "react"
import request from 'superagent'

const Root = window.location.origin || `${window.location.protocol}//${window.location.hostname}`

const APIRoot = `${Root}/api`
const APIEndpoints = {
  MESSAGES: APIRoot + '/images',
}

class Post extends React.Component {

  setImage(e) {
    this.state = e.target
  }

  saveImageChat(file) {
    return new Promise((resolve, reject) => {
      request
      .post(`${APIEndpoints.MESSAGES}`)
    //   .set('X-CSRF-Token', CSRFToken())
      .attach('image', file, file.name)
    //   .field('to_user_id', to_user_id)
      .end((error, res) => {
        if (!error && res.status === 200) {
          let json = JSON.parse(res.text)
          resolve(json)
        } else {
          reject(res)
        }
      })
    })
  }

  postImage(e) {
    const inputDOM = e.target
    if (!inputDOM.files.length) return
    const file = inputDOM.files[0]
    this.saveImageChat(file)
  }

  render() {
    return (
      <div className='post-box'>
        <input
          type='file'
          ref='image'
          className='chosenFile'
          onChange={ this.postImage.bind(this) }
        />
        <span 
          className='post-box__tip'
          onClick={ this.postImage.bind(this) }
        >
        post
        </span>
      </div>
    );
  }
}

export default Post
