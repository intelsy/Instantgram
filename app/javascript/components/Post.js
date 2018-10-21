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

  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  get initialState() {
    return {
      value: '',
    }
  }

  saveImage(file, message) {
    return new Promise((resolve, reject) => {
      request
      .post(`${APIEndpoints.MESSAGES}`)
      .attach('image', file, file.name)
      .field('message', message)
      .set('X-CSRF-Token', CSRFToken())
      .end((error, res) => {
        if (!error && res.status === 200) {
          let json = JSON.parse(res.text)
          resolve(json)
          location.href = '/'
        } else {
          reject(res)
        }
      })
    })
  }

  updateValue(e) {
    this.setState({
      value: e.target.value,
    })
  }

  onChange(e) {
    this.setState({
      image: e.target,
      value: '',
    })
  }

  postImage() {
    const message = this.state.value // 入力されたテキストを取得
    const image = this.state.image
    if (!image.files.length) return
    const file = image.files[0]
    this.saveImage(file, message)
  }

  render() {
    return (
      <div className='post-box'>
        <input
          type='file'
          ref='image'
          className='chosenFile'
          onChange={ this.onChange.bind(this) }
        />
        <input 
          type='text'
          onChange={ this.updateValue.bind(this) }
        />
        <input 
          onClick={ this.postImage.bind(this) }
        />
      </div>
    );
  }
}

export default Post
