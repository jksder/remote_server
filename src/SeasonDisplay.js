// Import the React and ReactDOM libraries
import React from "react";

//Import CSS
import './SeasonDisplay.css'

//HELPER FUNCTIONS
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

// Create a react component
class SeasonDisplay extends React.Component {
  state = {
    season: null,
    text: null,
    icon: null,
  };

  componentDidMount() {
    const season = getSeason(this.props.latitude, new Date().getMonth());
    const text =
      season === "winter" ? "Burr, it is chilly!" : "Lets hit the beach!";
    const icon = season === "winter" ? "snowflake" : "sun";
    this.setState({ season: season, text: text, icon: icon });
  }

  render() {
    return (
        <div className={this.state.season} id = 'season-display'>
        <i
          id="icon-left"
          className={"massive " + this.state.icon + " icon"}
        ></i>
        <h1 id="display_text">{this.state.text}</h1>
        <i
          id="icon-right"
          className={"massive " + this.state.icon + " icon"}
        ></i>
      </div>
    );
  }
}

export default SeasonDisplay;
