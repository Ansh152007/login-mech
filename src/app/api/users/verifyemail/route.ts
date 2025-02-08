import { dbConnect } from "@/db/dbconnect";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
dbConnect();

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json();
        const {token}= reqbody
        console.log(token)

        const user = await User.findOne({verifyToken: token,verifyTokenExpiry:{$gt: Date.now()}})

        if (!user){
            return NextResponse.json({error:"User not found"},{status:400})
        }
        console.log(user)

        user.isVerified = true;
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save()
        return NextResponse.json({message:"Email verified",status:200})
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}