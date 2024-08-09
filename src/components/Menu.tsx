"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import {
  MdDownload,
  MdVideocam,
  MdWebStories,
  MdAnimation,
  MdTitle,
  MdLibraryMusic,
  MdOutlineFormatColorFill,
  MdMovieFilter,
} from "react-icons/md";
import { IoImages } from "react-icons/io5";
import { PiSmileyStickerFill, PiShapesFill } from "react-icons/pi";
import { Store } from "@/store/Store";
import axios from "axios";
import { getObjectURL } from "./functions/get_put_url";

export const Menu = observer(() => {
  const store = React.useContext(StoreContext);

  return (
    <div className="hidden h-full min-[977px]:flex min-[977px]:flex-col min-[977px]:items-center min-[977px]:justify-between gap-y-[18px] min-w-[59px] max-w-[4.3%]   py-10 bg-[#202020]">
      {MENU_OPTIONS.map((option) => {
        return (
          <button
            key={option.name}
            onClick={() => {
              store.selectedMenuOption === option.name
                ? (store.selectedMenuOption = null)
                : option.action(store);
            }}
            className=" hover:brightness-200 bg-transparent px-[1px]  justify-between items-center flex-col inline-flex "
          >
            <span className=" inline-flex flex-col justify-center items-center">
              <option.icon
                className=""
                size={24}
                color={`${
                  store.selectedMenuOption === option.name
                } ? "#00a0f5" : "black" `}
              />
              <span
                className={`w-full text-white text-center  text-[11px] leading-relaxed`}
              >
                {option.name}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
});

const MENU_OPTIONS = [
  {
    name: "Text",
    icon: MdTitle,
    action: (store: Store) => {
      const fontFile = new FontFace(
        "Epilogue",
        "url(https://fonts.gstatic.com/s/epilogue/v17/O4ZMFGj5hxF0EhjimngomvnCCtqb30OXMDLiDJXVigHPVA.ttf)"
      );
      document.fonts.add(fontFile);
      fontFile.load().then(() => {
          // font loaded successfully!
        console.log(fontFile.family);
          store.addText({
            text: "Start Typing",
            fontSize: 40,
            fontFamily: fontFile.family,
          });
        },
        (err) => {
          console.error(err);
        }
      );
    },
  },
  {
    name: "Images",
    icon: IoImages,
    action: (store: Store) => {
      store.setSelectedMenuOption("Images");
    },
  },
  {
    name: "Audio",
    icon: MdLibraryMusic,
    action: (store: Store) => {
      store.setSelectedMenuOption("Audio");
    },
  },
  {
    name: "Shapes",
    icon: PiShapesFill,
    action: (store: Store) => {
      store.setSelectedMenuOption("Shapes");
    },
  },
  {
    name: "Stickers",
    icon: PiSmileyStickerFill,
    action: (store: Store) => {
      store.setSelectedMenuOption("Stickers");
    },
  },
  {
    name: "Video",
    icon: MdVideocam,
    action: (store: Store) => {
      store.setSelectedMenuOption("Video");
    },
  },
  {
    name: "Assets",
    icon: MdWebStories,
    action: (store: Store) => {
      store.setSelectedMenuOption("Assets");
    },
  },
  // {
  //   name: "Animation",
  //   icon: MdAnimation,
  //   action: (store: Store) => {
  //     store.setSelectedMenuOption("Animation");
  //   },
  // },
  // {
  //   name: "Effects",
  //   icon: MdMovieFilter,
  //   action: (store: Store) => {
  //     store.setSelectedMenuOption("Effect");
  //   },
  // },
  // {
  //   name: "Fill",
  //   icon: MdOutlineFormatColorFill,
  //   action: (store: Store) => {
  //     store.setSelectedMenuOption("Fill");
  //   },
  // },
  {
    name: "Export",
    icon: MdDownload,
    action: (store: Store) => {
      store.setSelectedMenuOption("Export");
    },
  },
];