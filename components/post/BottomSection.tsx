import { formatPostContent } from "@/utils/client";
import { useState } from "react";

export const BottomSection = ({
  username,
  description,
  tags,
}: {
  username: string;
  description: string;
  tags: string[];
}) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const { formattedContent, isLongContent } = formatPostContent(
    description,
    showFullDesc
  );

  return (
    <div className="ml-4">
      <div className="text-white font-bold text-lg mb-1">@{username}</div>
      <div className="text-white">{formattedContent}</div>
      {isLongContent && (
        <button
          className="text-blue-500 text-sm font-bold mt-1"
          onClick={() => setShowFullDesc((truncated) => !truncated)}
        >
          {showFullDesc ? "Show less" : "Show more"}
        </button>
      )}
      <div className="flex mt-2 space-x-2">
        {tags?.map((tag) => (
          <span key={tag} className="text-indigo-600 font-bold text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
