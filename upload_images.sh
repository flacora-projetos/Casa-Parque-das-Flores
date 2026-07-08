#!/bin/bash
API_KEY="6d207e02198a847aa98d0a2a901485a5"

for file in public/images/*.jpg; do
    filename=$(basename "$file")
    echo "Uploading $filename..."
    response=$(curl -s -F "key=$API_KEY" -F "action=upload" -F "source=@$file" -F "format=json" https://freeimage.host/api/1/upload)
    
    url=$(echo $response | grep -o '"url":"[^"]*"' | head -1 | cut -d'"' -f4 | sed 's/\\//g')
    
    if [ -n "$url" ]; then
        echo "Success: $url"
        sed -i "s|'/images/$filename'|'$url'|g" src/data/images.ts
        sed -i "s|\"/images/$filename\"|'$url'|g" src/data/images.ts
        sed -i "s|/images/$filename|$url|g" index.html
        sed -i "s|/images/$filename|$url|g" src/components/Hero.tsx
    else
        echo "Failed to upload $filename"
    fi
done

echo "Done!"
