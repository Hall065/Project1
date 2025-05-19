import webbrowser

url = "..........................."

download = url[:12] + "..." + url[12:]

webbrowser.open(download)

print("Download iniciado com sucesso!")