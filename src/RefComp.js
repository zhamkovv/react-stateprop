import React, { forwardRef } from "react";

const RefComp = forwardRef((props, ref2) => {
  return (
    <>
      <button ref={ref2}>Вторая</button>
    </>
  );
});

export default RefComp;
