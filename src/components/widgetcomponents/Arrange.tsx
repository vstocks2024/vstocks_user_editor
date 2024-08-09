"use client";
import { observer } from 'mobx-react'
import React from 'react'
import { StoreContext } from "@/store";
import { RiBringToFront, RiBringForward,RiSendBackward,RiSendToBack } from "react-icons/ri";
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';


export const Arrange = observer(() => {
  const store = React.useContext(StoreContext);
    const [expand,setExpand]=React.useState<boolean>(true);
    const handleBringToFront=()=>{
      try{
        
      if(!store.selectedElement) return;
      console.log("hello");
    }
    catch(err)
    {
      console.log(err);
    }
    }
    const handleBringForward =()=>{
      try{
        if(!store.selectedElement) return;
        if(!store.selectedElement.fabricObject) return;
        store.selectedElement.fabricObject.bringForward(true);
      }
      catch(err)
      {
        console.log(err);
      }
    }
    const handleSendBackward=()=>{
      try{
        if(!store.selectedElement) return;
        if(!store.selectedElement.fabricObject) return;
        store.selectedElement.fabricObject.sendBackwards(true);
      }
      catch(err)
      {
        console.log(err);
      }
    }
    const handleSendToBack=()=>{
          try{
        if(!store.selectedElement) return;
        if(!store.selectedElement.fabricObject) return;
        store.selectedElement.fabricObject.sendToBack();
      }
      catch(err)
      {
        console.log(err);
      }}

    
  return (
    <>
    <div className='topdivlayer'>
   <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
   <div className='compheadsec1'>
   <h3 className='widgetheading'>Arrange</h3>
          <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
          </div>
      </section>
      {expand  ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
        <div className='space-x-3  px-3 py-2 inline-flex flex-row items-center justify-start'>
     <button onClick={handleBringToFront}  className='' type='button'>
        <RiBringToFront size={24}/>
      </button>
      <button onClick={handleBringForward} className='' type='button'>
        <RiBringForward size={24}/>
      </button>
      <button onClick={handleSendBackward} className='' type='button'>
        <RiSendBackward size={24}/>
      </button>
      <button onClick={handleSendToBack} className='' type='button'>
        <RiSendToBack size={24}/>
      </button>
    </div>
    </section>:null}
</div>
    </>
  )
});