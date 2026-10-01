const http = require("http");
const express = require("express");
const app = express();

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



    app.get("/", (req, res) => {
        res.write("<h1>Apresentação</h1>");
        res.end("<p>talvez funciona</p>");
    });

    app.get("/sobre", (req, res) => {
        res.write("<h1>Dinis</h1>");
        res.end("<p>TGPSI24-T</p>");
    });
    app.get("/cartas", (req, res) => {
        const items = cards.map(card => `<li>${card.name}</li>`).join("");
        const numIt = items.length;
        res.write(`${items}`);
        res.end(`${cards.length}`);
    });
    app.get("/agora", (req, res) => {
        const now = new Date().toLocaleString("pt-PT");
        res.end(`${now}`);
    });
    app.get("/cartas/aleatorias", (req, res) => {
        const card = cards[Math.floor(Math.random() * cards.length)];
        res.end(`${card.name}, ${card.type},${card.attack},${card.defense},`);
    });

    app.use((req, res) => {
        res.status(404).send("<h1>404</h1>");
    });
});

server.listen(PORT, () => {
    console.log(`Server a correr em http://localhost:${PORT}`);
});
