"use client";
export function formatPostContent(
  content: string,
  showFullDescription: boolean
) {
  const isLongContent = content.length > 200;
  const isTruncated = content.length > 200 && !showFullDescription;
  const formattedContent = isTruncated
    ? content.slice(0, 200) + "..."
    : content;

  return { formattedContent, isLongContent };
}
