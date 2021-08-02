import React, {useEffect, useRef, useState} from 'react';
import Moveable from "react-moveable";


const Canvas = () => {
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
  const [isDrawing, setIsDrawing] = useState(true);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    // canvas.width = window.innerWidth * 2 ;
    // canvas.height = window.innerHeight * 2 ;
    // canvas.width = '500px';
    // canvas.height = '500px';
    // canvas.style.width = '500px';
    // canvas.style.height = '500px';
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;
    
    canvas.style.backgroundColor = 'white';
    const context = canvas.getContext("2d");
    context.scale(2,2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    contextRef.current = context;
    const interval = setInterval(() => {
      const item = JSON.parse(localStorage.getItem("element"))
      const userName = item ? item.elementableAttributes.text : '';  
      
      context.fillText(userName, 50, 40);

       }, 100);
    // console.log(userName);
    context.fillStyle = "black"

  }, []);

// const startDrawing = (nativeEvent) => {
//   const {offsetX, offsetY} = nativeEvent;
//   contextRef.current.beginPath();
//   contextRef.current.moveTo(offsetX, offsetY);
//   setIsDrawing(true);
// }


const finishDrawing = () => {
  contextRef.current.closePath();
  setIsDrawing(false);
}

const draw = ({nativeEvent}) => {
  if(isDrawing) {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }
}
// const item = JSON.parse(localStorage.getItem("element"))
// const userName = item ? item.user.name : '';
const frame = {
  translate: [0, 0],
  rotate:0,
};
// const target ={
  
// }

  return (
    <div style={{ width: '10%', height: '10%' }} >
      <Moveable
    target={document.querySelector("canvas")}
    draggable
    throttleDrag={0}
    resizable
    // keepRatio={keepRatio}
    throttleResize={0}
    rotatable={true}
    throttleRotate={0}
    rotationPosition="top"
    onRotateStart={({ set }) => {
        set(frame.rotate);

    }}
    onDragStart={({ set }) => {
      //add resize and rotate
      // frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
      // frame.translate = [
      //   parseInt(target.style.left, 10),
      //   parseInt(target.style.top, 10),
      // ];
      set(frame.translate);
    }}
    onDrag={({ beforeTranslate }) => {
      frame.translate = beforeTranslate;
    }}
    onResizeStart={({ setOrigin, dragStart }) => {
      setOrigin(['%', '%']);
      // frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
      // frame.translate = [
      //   parseInt(target.style.left, 10),
      //   parseInt(target.style.top, 10),
      // ];
      if (dragStart) {
        dragStart.set(frame.translate);
      }
    }}
    // onResize={({
    //   width, height, drag,
    // }) => {
    //   frame.translate = drag.beforeTranslate;
    //   target.style.width = `${width}px`;
    //   target.style.height = `${height}px`;
    //   // console.log(this.element)
    //   element.elementableAttributes.width = width / zoom;
    //   element.elementableAttributes.height = height / zoom;
    //   setState({});
    // }}

    onRotate={({ target, beforeRotate }) => {
      frame.rotate = beforeRotate;
      target.style.transform = `rotate(${beforeRotate}deg)`;
  }}
  onRotateEnd={({ target, isDrag, clientX, clientY }) => {
      console.log("onRotateEnd", target, isDrag);
  }}
    />
    <canvas  width="500" height="500" style={{position: 'absolute'}}
    // onMouseDown={startDrawing}
    onMouseUp={finishDrawing}
    // onMouseMove={draw}
    ref={canvasRef}
    
    /> 
    </div>
  )
}

export default Canvas;