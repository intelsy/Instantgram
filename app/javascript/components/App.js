import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    return (
        // Greeting: {this.props.greeting}
        <div>
        <header>
          <h1>instantgram</h1>
        </header>
        <main>
        <p>Using Ruby, Rails, React</p>
        </main>
        </div>
    );
  }
}

// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };
export default App
