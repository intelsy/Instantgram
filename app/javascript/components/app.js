import React from 'react'
import PropTypes from 'prop-types'
import MicroPost from './microPost'
import Comment from './comment'

class App extends React.Component {
  render () {
    return (
        // Greeting: {this.props.greeting}
        <div>
          <header>
            <h1 className='logo'>Instantgram</h1>
          </header>
          <main>
            <MicroPost />
          </main>
        </div>
    );
  }
}

// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };
export default App
