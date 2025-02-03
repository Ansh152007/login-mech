import { getData } from "@/helpers/getData";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/user.model";
import { dbConnect } from "@/db/dbconnect";

dbConnect()