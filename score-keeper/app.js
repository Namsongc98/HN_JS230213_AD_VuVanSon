const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
app.use(express.json());

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/player", (req, res) => {
  res.sendFile(`${__dirname}/public/player.html`);
});

app.get("/api/v1/players", (req, res) => {
  let playerData = JSON.parse(fs.readFileSync("./api/apiPlayers.json"));
  return res.json(playerData);
});

app.get("/api/v1/players/:id", (req, res) => {
  const { id } = req.params;

  try {
    let playerData = JSON.parse(fs.readFileSync("./api/apiPlayers.json"));
    const playerId = playerData.findindex((player) => player.id === +id);
    if (playerId) {
      res.json(playerId);
    } else {
      res.json({ messager: "không thấy" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/v1/players", (req, res) => {
  let { id, namePlayer, score } = req.body;
  try {
    let playerData = JSON.parse(fs.readFileSync("./api/apiPlayers.json"));
    let player = {
      id: Math.floor(Math.random() * 10000000),
      namePlayer,
      score: [],
    };
    playerData.push(player);
    fs.writeFileSync("./api/apiPlayers.json", JSON.stringify(playerData));
    res.json({ messager: "thanh công" });
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/v1/players/:id", (req, res) => {

  const { id } = req.params;
  let { namePlayer, score } = req.body;
  try {
    let playerData = JSON.parse(fs.readFileSync("./api/apiPlayers.json"));
    let findIndex = playerData.findIndex((e, i) => e.id === +id);
    

    if (findIndex === -1) {
      res.json({
        message: "Question not found",
      });
    } else {
      console.log(findIndex);
      playerData[findIndex] = {
        ...playerData[findIndex],
        namePlayer,
        score: [],
      };
      fs.writeFileSync("./api/apiPlayers.json", JSON.stringify(playerData));
      res.json({
        message: "Question updated successfully",
      });
    }
  } catch (error) {
    res.json({
      error,
    });
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port  http://localhost:3000`);
});
