import { useMemo } from "react";
import { FullPost } from "./Post";
import { RightSection } from "./RightSection";
import { BottomSection } from "./BottomSection";

export const OverlayedElements = ({
  post,
  isPaused,
  isMuted,
  setIsMuted,
}: {
  post: FullPost;
  isPaused: boolean;
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
}) => {
  const bg = useMemo(() => {
    if (isPaused) return "rgba(0,0,0,0.5)";
    return "rgba(0,0,0,0.15)";
  }, [isPaused]);

  return (
    <div
      className="w-full h-screen absolute bg-opacity-50 flex flex-col justify-between z-10"
      style={{ background: bg }}
    >
      <div className="absolute bottom-6 left-0 p-2 w-3/4">
        <BottomSection
          username={post.author.username}
          description={post.content}
          tags={post.tags}
        />
      </div>
      <div className="absolute bottom-9 right-6 p-2">
        <RightSection post={post} isMuted={isMuted} setIsMuted={setIsMuted} />
      </div>
    </div>
  );
};
