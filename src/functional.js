import React from "react";

function Functional(props) {
  console.log("pure function render");
  const { pureProp, deepProp1, deepProp2 } = props;
  return (
    <p>
      pure func: {pureProp} / {deepProp1.lv1} / {deepProp2.lv2.title}
    </p>
  );
}

export default Functional;
