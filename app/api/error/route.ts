import { NextResponse } from "next/server";

const handler = () => {
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
};

export const GET = handler;
