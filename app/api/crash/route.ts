import { NextResponse } from "next/server";

export async function GET() {
  // Log the crash attempt
  console.log("Server crash initiated via API route");

  // Schedule the process.exit() call
  setTimeout(() => {
    process.exit(1);
  }, 1000);

  // Return a response before exiting
  return NextResponse.json({ message: "Server shutdown initiated" });
}
