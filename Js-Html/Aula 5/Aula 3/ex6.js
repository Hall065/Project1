let temperatura = parseFloat(prompt("Digite a temperatura:"));

if (temperatura >= 30) {
  alert("Tá calor! Beba bastante água. 🔥");
  prompt(temperatura);
} else if (temperatura >= 20) {
  alert("Clima agradável! Aproveite o dia. ☀️");
  prompt(temperatura);
} else if (temperatura >= 10) {
  alert("Tá fresquinho! Leve um casaco leve. 🍂");
  prompt(temperatura);
} else {
  alert("Tá frio! Se agasalhe bem. ❄️");
  prompt(temperatura);
}