import React from "react"
import request from 'superagent'

const Root = window.location.origin || `${window.location.protocol}//${window.location.hostname}`

const APIRoot = `${Root}/api`
const APIEndpoints = {
  MESSAGES: APIRoot + '/images',
}

function CSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}

class Post extends React.Component {

  saveImage(file) {
    return new Promise((resolve, reject) => {
      request
      .post(`${APIEndpoints.MESSAGES}`)
      .attach('image', file, file.name)
      .set('X-CSRF-Token', CSRFToken())
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
    this.saveImage(file)
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
      </div>
    );
  }
}

export default Post
