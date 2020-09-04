import React from "react";

function Spinner(props){
  return (
    <div className="ui active dimmer">
          <div className="ui big text loader">{props.loading_msg}</div>
    </div>
  );
}

Spinner.defaultProps = {
 loading_msg: 'Loading...'
}


export default Spinner;

