import { NextRequest, NextResponse } from "next/server";

function validateEmail(email: string): boolean {
  const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const userData = await req.json();

    if (userData?.fullname?.length <= 2) {
      return NextResponse.json({
        success: false,
        message: "Kindly provide your full name.",
      });
    }
    if (!validateEmail(userData?.email)) {
      return NextResponse.json({
        success: false,
        message: "Kindly provide a valid email.",
      });
    }
    if (userData?.password?.length <= 6) {
      return NextResponse.json({
        success: false,
        message: "Your password is too weak.",
      });
    }
    if (userData?.password !== userData?.c_password) {
      return NextResponse.json({
        success: false,
        message: "Passwords do not match.",
      });
    }

    const res = await fetch(`${process.env.API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in auth API:", error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
