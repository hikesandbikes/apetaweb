import Post from "@/components/post/Post";
import { Metadata } from "next";

async function GetFullPost(id: string) {
  const res = await fetch(`https://apeta-server.fly.dev/post/${id}`);
  const { post } = await res.json();
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await GetFullPost(params.id);
  return {
    title: `@${post.author.username} on Apeta`,
    description: post.content,
    openGraph: {
      title: `@${post.author.username} on Apeta`,
      description: post.content,
      images: [
        {
          url: post.thumbnailUrl,
          width: 250,
          height: 250,
          alt: post.content,
        },
      ],
      videos: [
        {
          url: post.mediaUrl,
          width: 1920,
          height: 1080,
        },
      ],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const post = await GetFullPost(params.id);
  console.log({ post });
  return (
    <main>
      <Post post={post} />
    </main>
  );
}
