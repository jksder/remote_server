// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from './ApprovalCard';

// Import Compponents
import CommentDetail from "./CommentDetail";

//local variables
var names = ["Sam", "Alex", "Jane"];
var times = ["4:45PM", "11:45PM", "3:45PM"];
var content = ["Nice Work!", "10/10 Best blog ever", "Can't believe I haven't seen this before!"];

var comments = [];
for (let k = 0; k < 3; k++) {
    comments.push(
        <ApprovalCard key={names[k] + "_status"}>
            <CommentDetail key={names[k]} commenter={names[k]} time={times[k]} content={content[k]} />
        </ApprovalCard>
        );
}

// Create a react component
function App() {
  return (
    <div className="ui container comments">
        {comments}
    </div>
  );
}

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
