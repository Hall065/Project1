
media = float(input("Informe a média: "))

if media > 5:
    print("Aprovado")

"""
        +---------------------+
        |  Informe a média   |
        +---------------------+
                  |
                  v
        +---------------------+
        | média > 5 ?         |
        +---------------------+
           |            |
         Sim           Não
           |            |
           v            v
+----------------+    +-----------+
|  print("Aprovado") |  |   Fim    |
+----------------+    +-----------+
           |
           v
        +--------+
        |  Fim   |
        +--------+
"""
