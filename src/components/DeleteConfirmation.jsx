import { useEffect, useState } from "react";

const Timer=3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  const [isInterval,setIsInterval]=useState(Timer);


  useEffect(()=>{
    const interval = setInterval(()=>{

      console.log('interval')

      setIsInterval((prevTime)=>{
          return prevTime-10;
      })
    },10)

    return ()=>{
      clearInterval(interval);
    }
  },[])


  useEffect(()=>{
   
    const timer = setTimeout(()=>{
      onConfirm()
    },Timer)
    console.log('timer function')

    return ()=>{
      clearTimeout(timer)
      console.log('cleanup function')
    }
  },[onConfirm])

  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={isInterval} max={Timer}/>
    </div>
  );
}
