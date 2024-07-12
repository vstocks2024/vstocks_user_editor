"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {IoIosPricetag} from 'react-icons/io'
import axios from "axios";

type ImageResourceProps = {
  fileid:string;
  filename: string;
  filesource:string;
  index: number;
};
export const ImageResource = observer(
  ({fileid, filename,filesource, index }: ImageResourceProps) => {
    const store = React.useContext(StoreContext);
    const ref = React.useRef<HTMLImageElement>(null);
    const [resolution, setResolution] = React.useState({ w: 0, h: 0 });

    const handleImageDelete=async()=>{
     const deletedImage= await axios.delete(`${process.env.NEXT_PUBLIC_URL}/image/delete/${fileid}`)
     console.log(deletedImage);

    }

    return (
      <div className="rounded-lg overflow-hidden items-center bg-slate-800 m-[15px] flex flex-col relative">
        <div className=" bg-transparent text-white py-1 absolute text-sm bottom-2 left-2">
          {resolution.w}x{resolution.h}
        </div>
        <button className="hover:bg-[#00a0f5] bg-transparent rounded z-10 text-white font-bold py-1 absolute text-lg top-2 left-2">
            <IoIosPricetag size={20}/>
          </button>
        <button
          className="hover:bg-[#00a0f5] bg-transparent rounded z-10 text-white font-bold py-1 absolute text-lg top-2 right-2"
          onClick={handleImageDelete}>
          <MdDelete size={20} />
        </button>
        <button
          className="hover:bg-[#00a0f5]  bg-transparent rounded z-10 text-white font-bold py-1 absolute text-lg bottom-2 right-2"
          onClick={() => store.addImage(fileid,filename,index)}>
          <MdAdd size={20} />
        </button>
       
        <img onLoad={() => {
            setResolution({
              w: ref.current?.naturalWidth ?? 0,
              h: ref.current?.naturalHeight ?? 0,
            });
          }}
          crossOrigin = "anonymous"
          ref={ref}
          className="max-h-[100px] max-w-[150px]"
          src={filesource}
          height={200}
          width={200}
          id={`image-${index}`}
        ></img>
      </div>
   );
        });
