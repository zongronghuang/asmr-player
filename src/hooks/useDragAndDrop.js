import { useEffect, useRef } from "react";

// useDragAndDrop 可以在同一個 drop zone 上面，設定一個以上的 drag item
// drop zone 和 drag item 都要以 ref 的形態傳入
const useDragAndDrop = ({ dragItemRef, dropZoneRef }) => {
  // 紀錄滑鼠游標和 drag item 原點之間的距離
  // 不用 useState，因為 event listener 只會取得 initial state (closure)，不會更新 => 改用 useRef
  // useState 要和 React 提供的 onClick, onDoubleClick... 併用，才會取得更新的 state
  const dragDistanceRef = useRef({
    left: 0,
    top: 0,
  });
  const isDraggedRef = useRef(false);
  const dragItemEvents = [
    {
      name: "dragstart",
      handler(e) {
        // 取得游標和 drag item 原點的距離
        dragDistanceRef.current = {
          left: e.clientX - e.target.offsetLeft,
          top: e.clientY - e.target.offsetTop,
        };
        isDraggedRef.current = true;
      },
    },
    {
      name: "drag",
      handler(e) {
        e.preventDefault();
      },
    },
  ];
  const dropZoneEvents = [
    {
      name: "dragover",
      handler(e) {
        e.preventDefault();
      },
    },
    {
      name: "drop",
      handler(e) {
        // 計算 drag item 原點降落位置 (新的 left 和 top)
        // 用 isDraggedRef 判斷元件是否被拖曳，被拖曳的元件才會重新計算位置
        e.preventDefault();
        const { left, top } = dragDistanceRef.current;
        if (!isDraggedRef.current) {
          return;
        }
        const dragItemLeft = e.clientX - left;
        const dragItemTop = e.clientY - top;
        dragItemRef.current.style.left = `${dragItemLeft}px`;
        dragItemRef.current.style.top = `${dragItemTop}px`;
        isDraggedRef.current = false;
      },
    },
  ];

  useEffect(() => {
    // 讓 drag item 能夠被拖曳
    dragItemRef.current.setAttribute("draggable", true);
    const originalPosition = getComputedStyle(
      dragItemRef.current
    ).getPropertyValue("position");
    dragItemRef.current.style.position = "absolute";

    dragItemEvents.forEach((e) =>
      dragItemRef.current.addEventListener(e.name, e.handler)
    );
    dropZoneEvents.forEach((e) =>
      dropZoneRef.current.addEventListener(e.name, e.handler)
    );

    return () => {
      // 回復 drag item 先前狀態
      dragItemRef.current.removeAttribute("draggable");
      dragItemRef.current.style.position = originalPosition;

      dragItemEvents.forEach((e) =>
        dragItemRef.current.removeEventListener(e.name, e.handler)
      );
      dropZoneEvents.forEach((e) =>
        dropZoneRef.current.removeEventListener(e.name, e.handler)
      );
    };
  }, []);
};

export default useDragAndDrop;
