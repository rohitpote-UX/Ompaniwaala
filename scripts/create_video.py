import os
import subprocess
from PIL import Image

def create_animated_delivery_video():
    input_img = "public/images/city-delivery-dusk.jpg"
    output_video = "public/videos/city-delivery-loop.mp4"
    temp_forward = "public/videos/temp_forward.mp4"
    
    if not os.path.exists(input_img):
        print(f"Error: {input_img} does not exist.")
        return

    # Dimensions
    width, height = 1920, 1080
    fps = 30
    duration = 6 # seconds

    # 1. Generate forward zoompan with subtle diagonal camera drift
    # zoom from 1.0 to 1.08 with smooth ease
    cmd_forward = [
        "ffmpeg", "-y",
        "-loop", "1",
        "-i", input_img,
        "-vf", f"scale=2560:-1,zoompan=z='min(zoom+0.00045,1.08)':x='iw/2-(iw/zoom/2)+sin(on/30)*20':y='ih/2-(ih/zoom/2)':d={fps*duration}:s={width}x{height}:fps={fps}",
        "-t", str(duration),
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-preset", "fast",
        "-crf", "19",
        "-an",
        temp_forward
    ]
    print("Running forward video generation...")
    subprocess.run(cmd_forward, check=True)

    # 2. Reverse to create a seamless breathing ping-pong loop (total 12s)
    # Forward + Reverse concatenation with no jump cut
    temp_reverse = "public/videos/temp_reverse.mp4"
    cmd_reverse = [
        "ffmpeg", "-y",
        "-i", temp_forward,
        "-vf", "reverse",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-preset", "fast",
        "-crf", "19",
        "-an",
        temp_reverse
    ]
    print("Running reverse video generation...")
    subprocess.run(cmd_reverse, check=True)

    # Concat forward and reverse into seamless loop
    concat_txt = "public/videos/concat.txt"
    with open(concat_txt, "w") as f:
        f.write(f"file 'temp_forward.mp4'\nfile 'temp_reverse.mp4'\n")

    cmd_concat = [
        "ffmpeg", "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", concat_txt,
        "-c", "copy",
        output_video
    ]
    print("Running concatenation...")
    subprocess.run(cmd_concat, check=True)

    # Cleanup temp files
    if os.path.exists(temp_forward): os.remove(temp_forward)
    if os.path.exists(temp_reverse): os.remove(temp_reverse)
    if os.path.exists(concat_txt): os.remove(concat_txt)

    print(f"Video successfully created at {output_video}")

if __name__ == "__main__":
    create_animated_delivery_video()
