import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const rd = new URL(req.url);
    const query = rd.searchParams.get("query");

    if (!query) {
      return NextResponse.json({
        success: false,
        message: "Query parameter is required for search.",
      });
    }

    // Make a request to the backend search endpoint
    const backendApiUrl = `${process.env.API_URL}/api/search/students?query=${encodeURIComponent(
      query.toString()
    )}`; // Replace with your actual backend URL

    const response = await fetch(backendApiUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in search API:", error);
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
