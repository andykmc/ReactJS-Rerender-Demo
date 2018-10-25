import React from "react";

const MemoComponent = React.memo(function Functional(props) {
  const { pureProp, deepProp1, deepProp2 } = props;
  console.log("React Memo render");
  return (
    <p>
      Rect Memo: {pureProp} / {deepProp1.lv1} / {deepProp2.lv2.title}
    </p>
  );
});

export default MemoComponent;
