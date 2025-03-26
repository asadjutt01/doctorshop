import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "API call was successful!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
