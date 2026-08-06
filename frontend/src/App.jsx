import { Button } from "@/components/ui/button"

import { Copy, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input"

export const App =() => {
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Backend request
      const response = await fetch("http://localhost:3000/api/v1/urls/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: inputUrl,
        }),
      });
    const data = await response.json();
    console.log(data); // See what your backend returned
    setShortUrl(data.data.shortendUrl);

      // Success
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    
  };
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Enter Url</CardTitle>
        <CardDescription>
          Enter the url you want to shorten
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Input
                type="url"
                placeholder="https://www.example.com"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex-col gap-2 mt-4">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Creating..." : "Create Short URL"}
        </Button>
        </div>
        </form>
      </CardContent>
      <CardFooter>
        {shortUrl && (
          <div className="w-full rounded-md border p-3 ">
            <p className="text-sm text-muted-foreground">Short URL</p>
            <div className='flex justify-between'>
                <a
                  href={shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline break-all"
                >
                  {shortUrl}
                </a>
                <button onClick={handleCopy}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
            </div>
          </div>
        )}
      </CardFooter>
      
    </Card>
    </div>
    </>
  )
}
