"use client";

import React, { useEffect } from "react";

import { FcComments, FcLike, FcShare } from 'react-icons/fc';

const ContentItem = ({
  like = 0,
  share = 0,
  comment = 0,
  hot,
  update,
  text,
  src,
}: {
    like: number,
    share: number,
    comment: number,
    hot: boolean,
    update: boolean,
    text: string,
    src: string
}) => {
  return (
    <div className="flex shirink-0 w-64 h-64 relative rounded-md border border-gray-500 hover:border-gray-400 transition cursor-pointer overflow-hidden group">
      <img
        src={src}
        className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute flex flex-col bottom-0 left-0 w-full text-white ">
        <div className="flex gap-1 mb-1 ml-2">
          {hot && (
            <span className="inline-block border-red-300 border bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              HOT
            </span>
          )}
          {update && (
            <span className="inline-block border-blue-300 border bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              UPDATE
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 justify-between bg-black bg-opacity-70 py-2 px-4">
          <p className="text-sm">{text}</p>
          <div className="flex justify-between gap-2">
            <div className="flex gap-2 text-sm items-center">
              <FcLike className="transition-transform duration-300 transform hover:scale-125" />
              {like}
            </div>
            <div className="flex gap-2 text-sm items-center">
              <FcShare className="transition-transform duration-300 transform hover:scale-125" />
              {share}
            </div>
            <div className="flex gap-2 text-sm items-center">
              <FcComments className="transition-transform duration-300 transform hover:scale-125" />
              {comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
