import yt_dlp

def run_downloader():
    print("--- Universal Video Downloader (YT, IG, X, etc.) ---")
    link = input("Paste your URL here: ").strip()

    if not link:
        print("Error: No URL provided.")
        return

    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',
        'outtmpl': '%(title)s.%(ext)s',
        'noplaylist': True,
        'quiet': False,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print(f"\n[Status] Analyzing link...")
            ydl.download([link])
            print("\n[Success] Download complete!")
    except Exception as e:
        print(f"\n[Error] Something went wrong: {e}")

if __name__ == "__main__":
    run_downloader()