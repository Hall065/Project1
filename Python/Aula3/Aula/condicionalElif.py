nota = float(input("Digite a nota: "))

if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")

"""
        +----------------------+
        |  Digite a nota       |
        +----------------------+
                   |
                   v
        +----------------------+
        |  nota >= 7 ?         |
        +----------------------+
           |            |
         Sim           Não
           |            |
           v            v
+----------------+   +-------------------+
| print("Aprovado") | | nota >= 5 ?       |
+----------------+   +-------------------+
                         |           |
                       Sim          Não
                         |           |
                         v           v
            +------------------+  +------------------+
            | print("Recuperação") | print("Reprovado") |
            +------------------+  +------------------+
                         |           |
                         +-----------+
                               |
                               v
                            +------+
                            | Fim  |
                            +------+
"""
