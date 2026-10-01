const http = require("http");

const PORT = 3000;

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Denis", type: "Toze", attack: 10, defense: 10 },
  { name: "Oligarca Russo", type: "Espião", attack: 5, defense: 8 },
  { name: "Raodrigo Araujo", type: "Sardinha", attack: 1, defense: 1 },
];

const rotas = ["/", "/sobre", "/cartas", "/agora"];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);



  if (req.url === "/") {
    res.write("<h1>Apresentação</h1>");
    res.end("<p>talvez funciona</p>");
    return;
  }

  else if (req.url === "/sobre") {
    res.write("<h1>Dinis</h1>");
    res.end("<p>TGPSI24-T</p>");
    return;
  }
  else if (req.url === "/cartas") {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    const numIt = items.length;
    res.write(`${items}`);
    res.end(`${cards.length}`);
    return;
  }
  else if (req.url === "/agora") {
    const now = new Date().toLocaleString("pt-PT");
    res.end(`${now}`);
    return;
  }
  else if (req.url === "/cartas/aleatorias") {
    const card = cards[Math.floor(Math.random() * cards.length)];
    res.end(`${card.name}, ${card.type},${card.attack},${card.defense},`);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>erro</h1>");
    return;
  }
});

server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});
