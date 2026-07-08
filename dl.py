import urllib.request
import urllib.error
import urllib.parse
import http.cookiejar
import sys

def download_drive_file(file_id, dest):
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    
    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    
    try:
        response = opener.open(url)
        content_type = response.headers.get('Content-Type')
        if content_type and content_type.startswith('text/html'):
            # Probably the confirmation page
            text = response.read().decode('utf-8')
            confirm_token = None
            for cookie in cj:
                if cookie.name.startswith('download_warning'):
                    confirm_token = cookie.value
                    break
            
            if confirm_token:
                new_url = f"{url}&confirm={confirm_token}"
                response = opener.open(new_url)
                with open(dest, 'wb') as f:
                    f.write(response.read())
            else:
                print("Could not find confirm token. Output saved.")
        else:
            with open(dest, 'wb') as f:
                f.write(response.read())
        print(f"Downloaded {file_id} to {dest}")
    except Exception as e:
        print(f"Error: {e}")

download_drive_file(sys.argv[1], sys.argv[2])
