import { useState, useEffect } from "react";

// dragItem + dragzone + handlers
const useDragAndDrop = ({ dragItem, dropZone }) => {
  // if (!dragItem || !dropZone) {
  //   console.log("You must specify a drag item and a drop zone!");
  //   return;
  // }

  console.log({ dragItem, dropZone });

  const [distToEleOrigin, setDistToEleOrigin] = useState({ left: 0, top: 0 });
  const handleDragStart = (e) => {
    // 取得游標和 drag item 原點的距離
    const distToDragItemOrigin = {
      left: e.clientX - e.target.offsetLeft,
      top: e.clientY - e.target.offsetTop,
    };
    setDistToEleOrigin(distToDragItemOrigin);
  };
  // const handleDrag = (e) => e.preventDefault();
  // const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    //const dragItem = document.querySelector("#dragItem");
    // 計算 drag item 降落位置 (新的 left 和 top)
    const dragItemLeft = e.clientX - distToEleOrigin.left;
    const dragItemTop = e.clientY - distToEleOrigin.top;

    dragItem.style.left = `${dragItemLeft}px`;
    dragItem.style.top = `${dragItemTop}px`;
  };
  dragItem.setAttribute("draggable", true);

  useEffect(() => {
    dragItem.addEventListener("dragstart", handleDragStart);
    dropZone.addEventListener("drop", handleDrop);

    return () => {
      dragItem.removeEventListener("dragstart", handleDragStart);
      dropZone.removeEventListener("drop", handleDrop);
    };
  }, []);
};

export default useDragAndDrop;
