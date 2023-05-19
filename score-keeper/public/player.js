let playerInput = document.getElementById("input_user");

let playerRender = document.getElementById("namePlayer");

function handleCreate() {
  fetch("http://localhost:3000/api/v1/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ namePlayer: playerInput.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.location.href = "/player";
    })
    .then((data) => {
      console.log(data);
      window.location.href = "/player";
    })
    .catch((err) => {
      alert(err);
    });
}

let renderPlayer = "";
function render() {
  fetch("http://localhost:3000/api/v1/players")
    .then((res) => res.json())
    .then((res) => {
      res.map((player) => {
        renderPlayer += `<div class="input_player">${player.namePlayer}</div> `;
      });
      playerRender.innerHTML = renderPlayer;
    })
    .catch((err) => {
      alert(err);
    });
}
render();
