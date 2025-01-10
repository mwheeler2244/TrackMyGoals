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

  const activePosts = posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content}
      genre={post.genre}
    />
  ));

  return (
    <div className="dashboard-container">
      {activePosts.length > 0 ? (
        <div className="post-cards">{activePosts}</div>
      ) : (
        <h2 style={{ marginInline: "auto", fontSize: "2.5rem" }}>
          no goals set, start today!
        </h2>
      )}
    </div>
  );
}
