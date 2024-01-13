var texts = [
  "Olá!",
  "Batata frita é muito bom.",
  "Sim esses textos são aleatórios."
];

document.getElementById('randomText').value = texts[Math.floor(Math.random()*texts.length)];
