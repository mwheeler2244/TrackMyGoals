import React from "react";
import prisma from "@/lib/prisma";
import Post from "../components/post";

async function fetchPost() {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });
  return posts;
}

export default async function Dashboard() {
  const posts = await fetchPost();
  return (
    <div className="dashboard-container">
      <div className="post-cards">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            genre={post.genre}
          />
        ))}
      </div>
    </div>
  );
}
