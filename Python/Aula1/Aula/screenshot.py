import pyautogui as p
import os

# Salva as prints aqui
pasta_destino = r"C:\Users\Dev1\Documents\JVF\Prog\Python\Aula1\Capturas"

# Cria a pasta se n existir
if not os.path.exists(pasta_destino):
    os.makedirs(pasta_destino)

# Captura a tela
ss = p.screenshot()

# Define o caminho completo para salvar
caminho_arquivo = os.path.join(pasta_destino, "ImagemCapturada.png")

# Salva a captura de tela
ss.save(caminho_arquivo)

print(f"Captura de tela salva em: {caminho_arquivo}")
