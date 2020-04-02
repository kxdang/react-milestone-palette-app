import React, { Component } from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: `100%` }}>
      {colors.map((c, idx) => (
        <DraggableColorBox
          index={idx}
          color={c.color}
          name={c.name}
          key={c.name}
          handleClick={() => removeColor(c.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
