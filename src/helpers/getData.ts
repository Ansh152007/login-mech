import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getData = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || ""
        const tkv:any = jwt.verify(token,process.env.JWT_SECRET!)
        return tkv._id
    } catch (error) {
        
    }
}