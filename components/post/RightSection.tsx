"use client";

import {
  IconVolumeOff,
  IconVolume,
  IconHeart,
  IconMessageCircle2,
} from "@tabler/icons-react";
import Image from "next/image";
import { FullPost } from "./Post";

export const RightSection = ({
  post,
  isMuted,
  setIsMuted,
}: {
  post: FullPost;
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {isMuted ? (
        <button
          className="bg-transparent mb-4 text-white"
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(false);
          }}
        >
          <IconVolumeOff size={32} />
        </button>
      ) : (
        <button
          className="bg-transparent mb-4 text-white"
          onClick={(e) => {
            e.stopPropagation();
            setIsMuted(true);
          }}
        >
          <IconVolume size={32} />
        </button>
      )}
      {/* <Image
        className="mb-8 rounded-full"
        src={post.author.avatarUrl}
        alt={post.author.username}
        width={40}
        height={40}
      /> */}
      <div className="flex flex-col items-center">
        <IconHeart size={32} color="white" />
        <p className="text-white">{post.likeCount}</p>
      </div>
      <div className="flex flex-col items-center">
        <IconMessageCircle2 size={32} color="white" />
        <p className="text-white">{post.feedbackCount}</p>
      </div>
    </div>
  );
};
