import { NextResponse } from "next/server";


export async function GET() {
    try {
        const response = NextResponse.json({ message: "Logout Successfull" }, { status: 200 });
        response.cookies.set("token","",{httpOnly:true})
        return response
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}