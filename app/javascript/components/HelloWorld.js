import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
        // Greeting: {this.props.greeting}
        <div>
        <h1>instantgram</h1>
        <p>Created by Tsurusaki and Yamazaki</p>
        </div>
    );
  }
}

// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };
export default HelloWorld
