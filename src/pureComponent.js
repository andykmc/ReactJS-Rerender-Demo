import React from "react";
import PropTypes from "prop-types";

class PureComponent extends React.PureComponent {
  static propTypes = {
    pureProp: PropTypes.string,
    deepProp1: PropTypes.object,
    deepProp2: PropTypes.object
  };

  render() {
    console.log("React PureComp render");
    const { pureProp, deepProp1, deepProp2 } = this.props;

    return (
      <p>
        React PureComp: {pureProp} / {deepProp1.lv1} / {deepProp2.lv2.title}
      </p>
    );
  }
}

export default PureComponent;
