// /pages/api/add-post.js

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const res = await request.json();
    const { title, content, genre } = res;

    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        genre,
      },
    });

    return NextResponse.json({ result }); // Respond with a success message
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
