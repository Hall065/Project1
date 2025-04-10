import speedtest

test = speedtest.Speedtest()
down = test.download()
up = test.upload()

print(f"Velocidade de download: {down / 1_000_000:.2f} Mbps")
print(f"Velocidade de upload: {up / 1_000_000:.2f} Mbps")
