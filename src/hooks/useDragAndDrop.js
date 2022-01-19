import { useEffect, useRef } from "react";

const useDragAndDrop = ({ dragItemRef, dropZoneRef }) => {
  // 紀錄滑鼠游標和 drag item 原點之間的距離
  // 不用 useState，因為 event listener 只會取得 initial state (closure)，不會更新 => 改用 useRef
  // useState 要和 React 提供的 onClick, onDoubleClick... 併用，才會取得更新的 state
  const distanceRef = useRef({
    left: 0,
    top: 0,
  });

  // 取得游標和 drag item 原點的距離
  const handleDragStart = (e) => {
    distanceRef.current = {
      left: e.clientX - e.target.offsetLeft,
      top: e.clientY - e.target.offsetTop,
    };
  };

  const handleDrag = (e) => e.preventDefault();
  const handleDragOver = (e) => e.preventDefault();

  // 計算 drag item 原點降落位置 (新的 left 和 top)
  const handleDrop = (e) => {
    e.preventDefault();
    const { left, top } = distanceRef.current;
    const dragItemLeft = e.clientX - left;
    const dragItemTop = e.clientY - top;
    dragItemRef.current.style.left = `${dragItemLeft}px`;
    dragItemRef.current.style.top = `${dragItemTop}px`;
  };

  useEffect(() => {
    dragItemRef.current.setAttribute("draggable", true);
    dragItemRef.current.addEventListener("dragstart", handleDragStart);
    dragItemRef.current.addEventListener("drag", handleDrag);
    dropZoneRef.current.addEventListener("dragover", handleDragOver);
    dropZoneRef.current.addEventListener("drop", handleDrop);

    return () => {
      dragItemRef.current.removeAttribute("draggable");
      dragItemRef.current.removeEventListener("dragstart", handleDragStart);
      dragItemRef.current.removeEventListener("drag", handleDrag);
      dropZoneRef.current.removeEventListener("dragover", handleDragOver);
      dropZoneRef.current.removeEventListener("drop", handleDrop);
    };
  }, []);
};

export default useDragAndDrop;
