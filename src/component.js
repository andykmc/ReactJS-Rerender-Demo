import React from "react";
import PropTypes from "prop-types";

class RComponent extends React.Component {
  static propTypes = {
    pureProp: PropTypes.string,
    deepProp1: PropTypes.object,
    deepProp2: PropTypes.object
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { pureProp, deepProp1, deepProp2 } = this.props;
    if (
      nextProps.pureProp === pureProp &&
      nextProps.deepProp1.lv1 === deepProp1.lv1 &&
      nextProps.deepProp2.lv2.title === deepProp2.lv2.title
    ) {
      return false;
    }
    return true;
  }

  render() {
    console.log("React Comp render");
    const { pureProp, deepProp1, deepProp2 } = this.props;

    return (
      <p>
        React Comp: {pureProp} / {deepProp1.lv1} / {deepProp2.lv2.title}
      </p>
    );
  }
}

export default RComponent;
