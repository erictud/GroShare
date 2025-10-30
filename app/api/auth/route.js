import { NextResponse } from "next/server";

export async function POST(request) {
  const { method, credentials } = await request.json();
  const { email, username, password } = credentials;

  // Server side data validation
  try {
    if (method != "login" && method != "signup") {
      return NextResponse.json(
        { message: "Invalid auth method!" },
        { status: 400 }
      );
    }
    if (
      email &&
      (email.includes("@") == false || email.includes(".") == false)
    ) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    if (username.length < 4) {
      return NextResponse.json(
        { message: "Invalid username" },
        { status: 400 }
      );
    }
    if (password.length < 8 || password.toLowerCase() == password) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { message: "Internal server error!" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Data transfered " }, { status: 201 });
}
