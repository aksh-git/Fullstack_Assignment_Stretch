import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const token = req.headers.get("auth-token") || "";
    const res = await fetch(
      `${process.env.API_URL}/api/student/getLoggedInStudent`,
      {
        headers: {
          "auth-token": token,
        },
      }
    );
    const response = await res.json();

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Internal server error.",
    });
  }
}
