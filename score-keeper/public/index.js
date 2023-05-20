let namePlayer = document.getElementById("name_player");
let namenamescore = document.getElementById("input-Player-wp");

let renderplayer = "";
function renderNamePlayer() {
  fetch("http://localhost:3000/api/v1/players")
    .then((res) => res.json())

    .then((data) => {
      renderplayer += `<th>#</th>`;
      data?.forEach((item) => {
        renderplayer += `<th>${item.namePlayer}</th>`;
      });

      namePlayer.innerHTML = renderplayer;
    })
    .catch((err) => console.log(err));
}
renderNamePlayer();

let renderScore = "";
function renderNameScore() {
  fetch("http://localhost:3000/api/v1/players")
    .then((res) => res.json())
    .then((data) => {
      renderScore += ` <td>round 1</td>`;
      data?.forEach((item) => {
        renderScore += `<td>
                            <input
                            type="number"
                            placeholder="0"
                            name="score"
                            id="Input-Player"
                            class="input-Player-${item.id}"
                            />
                        </td>`;
      });
      namenamescore.innerHTML = renderScore;
      data?.forEach((item) => {
        let inputId = `Input-Player-${item.id}`;

        let inputElement = document.getElementById(inputId);
        console.log(inputElement);
      });
    })
    .catch((err) => console.log(err));
}
renderNameScore();


