"use client";
import Image from "next/image";

import { useRef, useState } from "react";
import { OverlayedElements } from "./OverlayedElements";
import { Metadata } from "next";
export type FullPost = {
  mediaUrl: string;
  author: {
    username: string;
    avatarUrl: string;
  };
  content: string;
  tags: string[];
  likeCount: number;
  feedbackCount: number;
  thumbnailUrl: string;
};

export default function Post({ post }: { post: FullPost }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoClick = () => {
    if (isPaused) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    setIsPaused(!isPaused);
  };

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div
        className="absolute top-10 left-0 w-4/5 h-3/5 z-50"
        style={{
          zIndex: 100,
          position: "absolute",
          top: "15%",
          left: "0%",
          width: "80%",
          height: "60%",
        }}
        onClick={onVideoClick}
      />

      <OverlayedElements
        post={post}
        isPaused={isPaused}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />

      {/* Background Blurred Video */}
      <Image
        alt="Background Video"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centers the video
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(10px)",
          zIndex: -1,
        }}
        width={1000}
        height={1000}
        src={post.thumbnailUrl}
      />

      <div className="w-full h-full flex items-center justify-center">
        {/* Main Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          style={{ maxWidth: "100%", maxHeight: "100%", zIndex: 1 }}
          src={post.mediaUrl}
          controls={false}
          playsInline
        />
        {isPaused && <PauseButton />}
      </div>
    </div>
  );
}

const PauseButton = () => {
  return (
    <svg
      color="white"
      style={{
        zIndex: 100,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-player-pause-filled"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
      <path
        d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
    </svg>
  );
};
