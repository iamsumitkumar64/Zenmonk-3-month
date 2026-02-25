import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

export const POST = async (req: NextRequest) => {
    const formData = await req.formData();
    const body = Object.fromEntries(formData);
    const file = (body.file as Blob) || null;

    // file size checked
    if (file.size > 10000000) {//10mb
        return NextResponse.json({
            message: "File Size is greater than 10mb",
            success: false,
        });
    }

    if (file) {
        // check file buffer 
        const buffer = Buffer.from(await file.arrayBuffer());

        // create folder of upload in public if not exists
        if (!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR);
        }

        // write buffer in upload folder
        fs.writeFileSync(
            path.resolve(UPLOAD_DIR, (body.file as File).name),
            buffer
        );
    } else {
        return NextResponse.json({
            message: "File not found",
            success: false,
        });
    }

    return NextResponse.json({
        success: true,
        name: (body.file as File).name,
        message: "Backend got it",
    });
};