import { dbConnect } from "@/db/dbconnect";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
dbConnect()

export async function POST(request: NextRequest) {
    try {
        const reqbody = await request.json()
        const { email, password } = reqbody
        console.log(reqbody);
        const existeduser = await User.findOne({ email })
        if (existeduser) {
            return NextResponse.json({
                error: "User already exist!"
            }, {
                status: 400
            })
        }
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const newUser = new User({
            email,
            password: hashedPassword
        })
        const CreatedUser = await newUser.save()
        if (!CreatedUser) {
            return NextResponse.json({
                error: "Some Error Ocurred while Registering the user"
            },
                {
                    status: 400
                })

        }
        console.log(CreatedUser)
        return NextResponse.json({
            message: "User Registered Successfully",
            success: true,
            CreatedUser
        })
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}