import { getData } from "@/helpers/getData";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/user.model";
import { dbConnect } from "@/db/dbconnect";

dbConnect()

export async function GET(request: NextRequest) {
    try {
        const userID = await getData(request)
        const user = await User.findOne({_id:userID}).select("-password")
        return NextResponse.json(
            {
                message: "User Found!",
                data: user
            }
        )
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({
            error: error.message
        },
    {
        status:500
    })
    }
}