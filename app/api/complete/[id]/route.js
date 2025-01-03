import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;

  const response = await prisma.post.update({
    where: { id },
    data: {
      completed: true,
    },
  });

  return NextResponse.json(response);
}
