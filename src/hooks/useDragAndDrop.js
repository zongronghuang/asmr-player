import { useEffect, useRef } from "react";

const useDragAndDrop = ({ dragItemRef, dropZoneRef }) => {
  // 紀錄滑鼠游標和 drag item 原點之間的距離
  // 不用 useState，因為 event listener 只會取得 initial state (closure)，不會更新 => 改用 useRef
  // useState 要和 React 提供的 onClick, onDoubleClick... 併用，才會取得更新的 state
  const distanceRef = useRef({
    left: 0,
    top: 0,
  });

  const dragItemEvents = [
    {
      name: "dragstart",
      handler(e) {
        // 取得游標和 drag item 原點的距離
        distanceRef.current = {
          left: e.clientX - e.target.offsetLeft,
          top: e.clientY - e.target.offsetTop,
        };
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
        e.preventDefault();
        const { left, top } = distanceRef.current;
        const dragItemLeft = e.clientX - left;
        const dragItemTop = e.clientY - top;
        dragItemRef.current.style.left = `${dragItemLeft}px`;
        dragItemRef.current.style.top = `${dragItemTop}px`;
      },
    },
  ];

  useEffect(() => {
    dragItemRef.current.setAttribute("draggable", true);
    dragItemEvents.forEach((e) =>
      dragItemRef.current.addEventListener(e.name, e.handler)
    );
    dropZoneEvents.forEach((e) =>
      dropZoneRef.current.addEventListener(e.name, e.handler)
    );

    return () => {
      dragItemRef.current.removeAttribute("draggable");
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
