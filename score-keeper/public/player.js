let playerInput = document.getElementById("input_user");

function handleCreate() {
  fetch("http://localhost:3000/api/v1/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ namePlayer: playerInput.value }),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert(err);
    });
}
