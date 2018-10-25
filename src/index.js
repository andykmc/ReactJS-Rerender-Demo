import React from "react";
import ReactDOM from "react-dom";

import Functional from "./functional";
import RComponent from "./component";
import MemoComponent from "./memoComponent";
import PureComponent from "./pureComponent";
import "./styles.css";

class App extends React.Component {
  state = {
    pureProp: "before",
    deepProp1: { lv1: "lv1 before" },
    deepProp2: { lv2: { title: "lv2 before" } }
  };

  render() {
    const { pureProp, deepProp1, deepProp2, counter } = this.state;

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              pureProp: "after"
            });
          }}
        >
          Update pureProp
        </button>
        <button
          onClick={() => {
            this.setState({
              deepProp1: { lv1: "lv1 after" }
            });
          }}
        >
          Update deepProp2 lv1
        </button>
        <button
          onClick={() => {
            this.setState({
              deepProp2: { lv2: { title: "lv2 after" } }
            });
          }}
        >
          Update deepProp2 lv2
        </button>
        <Functional
          pureProp={pureProp}
          deepProp1={deepProp1}
          deepProp2={deepProp2}
        />
        <RComponent
          pureProp={pureProp}
          deepProp1={deepProp1}
          deepProp2={deepProp2}
        />
        <MemoComponent
          pureProp={pureProp}
          deepProp1={deepProp1}
          deepProp2={deepProp2}
        />
        <PureComponent
          pureProp={pureProp}
          deepProp1={deepProp1}
          deepProp2={deepProp2}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
