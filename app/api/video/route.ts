import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { blobs } = await list()

    const videos = blobs
      .filter((blob) => {
        const ext = blob.pathname.toLowerCase()
        return ext.endsWith(".mp4") || ext.endsWith(".webm") || ext.endsWith(".mov")
      })
      .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())

    if (videos.length === 0) {
      return NextResponse.json({ video: null })
    }

    const latest = videos[0]
    return NextResponse.json({
      video: {
        url: latest.url,
        filename: latest.pathname,
        uploadedAt: latest.uploadedAt,
      },
    })
  } catch (error) {
    console.error("Error fetching video:", error)
    return NextResponse.json({ video: null })
  }
}
