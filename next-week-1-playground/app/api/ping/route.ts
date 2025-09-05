import { NextResponse } from "next/server";

export function GET(request: Request) {
    console.log(process.env.SECRET_KEY);
    return NextResponse.json({ message: "pong" });
}
