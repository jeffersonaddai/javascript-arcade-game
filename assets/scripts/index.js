const canvas = document.getElementById("canvas");
const play = document.getElementById("playBtn");
const endingScoreInput = document.getElementById("endingScore");
canvasContext = canvas.getContext('2d');
colorRect(0,0,canvas.width,canvas.height,'black');

play.addEventListener('click', ()=>{
    localStorage.clear();
    localStorage.setItem('winningScore', endingScoreInput.value);
    window.location.assign('game.html');
})
function colorRect(leftX,topY, width,height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY, width,height);
}