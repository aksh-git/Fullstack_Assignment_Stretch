import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const userData = await req.json();

    const response = await fetch(`${process.env.API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in auth API:", error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
