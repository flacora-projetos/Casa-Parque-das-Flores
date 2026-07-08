import os
import json
import requests
import re

API_KEY = "6d207e02198a847aa98d0a2a901485a5"
UPLOAD_URL = "https://freeimage.host/api/1/upload"

images_dir = "public/images"
image_files = os.listdir(images_dir)

url_mapping = {}

print("Uploading images...")
for file in image_files:
    if not file.endswith(".jpg"):
        continue
    filepath = os.path.join(images_dir, file)
    print(f"Uploading {file}...")
    with open(filepath, "rb") as f:
        files = {"source": f}
        data = {"key": API_KEY, "action": "upload", "format": "json"}
        response = requests.post(UPLOAD_URL, files=files, data=data)
        
        try:
            result = response.json()
            remote_url = result["image"]["url"]
            url_mapping[f"/images/{file}"] = remote_url
            print(f"Success: {remote_url}")
        except Exception as e:
            print(f"Failed to upload {file}: {e}")

print("Updating src/data/images.ts...")
with open("src/data/images.ts", "r") as f:
    content = f.read()

for local_url, remote_url in url_mapping.items():
    content = content.replace(f"'{local_url}'", f"'{remote_url}'")
    content = content.replace(f'"{local_url}"', f"'{remote_url}'")

with open("src/data/images.ts", "w") as f:
    f.write(content)

print("Done! Here is the new content of images.ts:")
