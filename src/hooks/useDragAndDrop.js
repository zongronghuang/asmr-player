import { useState, useEffect } from "react";

// dragItem + dragzone + handlers
const useDragAndDrop = ({ dragItem, dropZone }) => {
  (!dragItem.current || !dropZone.current) &&
    console.log("You must specify a drag item and a drop zone");

  const [distToEleOrigin, setDistToEleOrigin] = useState({ left: 0, top: 0 });
  const handleDragStart = (e) => {
    // 取得游標和 drag item 原點的距離
    const distToDragItemOrigin = {
      left: e.clientX - e.target.offsetLeft,
      top: e.clientY - e.target.offsetTop,
    };
    setDistToEleOrigin(distToDragItemOrigin);
  };

  const handleDrag = (e) => e.preventDefault();
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    //const dragItem = document.querySelector("#dragItem");
    // 計算 drag item 降落位置 (新的 left 和 top)
    const dragItemLeft = e.clientX - distToEleOrigin.left;
    const dragItemTop = e.clientY - distToEleOrigin.top;

    dragItem.current.style.left = `${dragItemLeft}px`;
    dragItem.current.style.top = `${dragItemTop}px`;
  };

  useEffect(() => {
    dragItem.current.setAttribute("draggable", true);
    console.log("draggable", dragItem.current.getAttribute("draggable"));

    dragItem.current.addEventListener("dragstart", handleDragStart);
    dragItem.current.addEventListener("drag", handleDrag);
    dropZone.current.addEventListener("dragover", handleDragOver);
    dropZone.current.addEventListener("drop", handleDrop);

    return () => {
      dragItem.current.removeAttribute("draggable");
      dragItem.current.removeEventListener("dragstart", handleDragStart);
      dragItem.current.removeEventListener("drag", handleDrag);
      dropZone.current.removeEventListener("dragover", handleDragOver);
      dropZone.current.removeEventListener("drop", handleDrop);
    };
  }, []);
};

export default useDragAndDrop;
