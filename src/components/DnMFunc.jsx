import { DndContext } from "@dnd-kit/core";

import Draggable from "./Draggable";
import Droppable from "./Droppable";

import { Elementone } from "./Elements/Elementone";
import { Elementtwo } from "./Elements/Elementtwo";
import { Elementthree } from "./Elements/Elementthree";
import { Elementfour } from "./Elements/Elementfour";
import { Elementfive } from "./Elements/Elementfive";
import { Elementsix } from "./Elements/Elementsix";
import { Elementseven } from "./Elements/Elementseven";

export const DnMFunc = () => {
  return (
    <DndContext>
      <div style={{display: "flex",
                  justifyContent: "space-evenly"}}>
      <Elementone />
      <Elementtwo />
      <Elementthree />
      <Elementfour />
      <Elementfive />
      <Elementsix />
      <Elementseven />
      </div>
    </DndContext>
  );
};

export default DnMFunc;
