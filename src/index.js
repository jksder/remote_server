// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
//Import Components
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Create a react component
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: null,
  };

  componentDidMount() {
    //get the location from the browser
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //helper function
  renderContent() {
    //if error has occurred
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    //if no error and latitude attained
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.lat} />;
    }

    //if no error but latitude not yet attained
    if (!this.state.errorMessage && !this.state.lat) {
      return <Spinner loading_msg="Please Allow Location Request" />;
    }
  }

  render() {
    return (
      <div className='border plain'>
        {this.renderContent()}
      </div>
    );
  }
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
