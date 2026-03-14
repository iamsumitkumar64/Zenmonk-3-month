import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    const publicDir = path.join(process.cwd(), 'public', 'uploads');

    try {
        const files = await fs.readdir(publicDir);
        const audioFiles = files.filter(file => file.endsWith('.mp3') || file.endsWith('.wav') || file.endsWith('.ogg'));
        const fileUrls = audioFiles.map(file => `${file}`);

        return NextResponse.json({ files: fileUrls });
    } catch (error) {
        console.error('Error reading audio files:', error);
        return NextResponse.json({ message: 'Error reading audio files' }, { status: 500 });
    }
}
