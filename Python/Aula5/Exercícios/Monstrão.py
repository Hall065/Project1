# Faça um codigo para encurtar URL usando pyshorttener's

# pip install pyshorteners
import pyshorteners as ps

url = input("Digite a URL que deseja encurtar: ")

u = ps.Shortener().tinyurl.short(url)

print("URL encurtada:", u)
