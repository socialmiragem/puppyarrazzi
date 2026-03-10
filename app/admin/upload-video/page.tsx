"use client"

import { useState, useRef } from "react"

export default function UploadVideoPage() {
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<{ url: string; filename: string; size: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const file = fileInputRef.current?.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        throw new Error("Upload failed")
      }

      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-card rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Upload Promo Video</h1>
        <p className="text-muted-foreground text-sm mb-6">
          Upload your business intro/promo video here. Once uploaded, copy the URL and set it as the{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">NEXT_PUBLIC_PROMO_VIDEO_URL</code>{" "}
          environment variable.
        </p>

        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label htmlFor="video-file" className="block text-sm font-medium text-foreground mb-1.5">
              Video File
            </label>
            <input
              ref={fileInputRef}
              id="video-file"
              type="file"
              accept="video/mp4,video/webm,video/quicktime"
              required
              className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#FFB74D] file:text-[#1a1a1a] hover:file:bg-[#FFA726] file:cursor-pointer"
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full py-3 px-4 rounded-xl bg-[#FFB74D] text-[#1a1a1a] font-semibold hover:bg-[#FFA726] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {uploading ? "Uploading..." : "Upload Video"}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200 space-y-3">
            <p className="text-green-800 font-medium text-sm">Video uploaded successfully.</p>
            <div className="space-y-1.5">
              <p className="text-xs text-green-700">
                <span className="font-medium">File:</span> {result.filename}
              </p>
              <p className="text-xs text-green-700">
                <span className="font-medium">Size:</span> {(result.size / (1024 * 1024)).toFixed(1)} MB
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-green-800 mb-1">Blob URL (set as NEXT_PUBLIC_PROMO_VIDEO_URL):</p>
              <div className="flex gap-2">
                <input
                  readOnly
                  value={result.url}
                  className="flex-1 text-xs p-2 rounded-md border border-green-300 bg-white text-green-900 font-mono"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(result.url)}
                  className="px-3 py-1.5 text-xs rounded-md bg-green-700 text-white hover:bg-green-800 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
