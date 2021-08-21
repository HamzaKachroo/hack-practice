
    // JAVASCRIPT GOES HERE
    const myDiv = document.getElementById('my-div');
    const myHeader = document.getElementById('my-header');
    const myButton = document.getElementById('my-button');

    function getRandomMood() {
const moods = ['🙂', '😍', '😂', '😢', '😡', '🥴'];
const randomIndex = Math.floor(Math.random() * moods.length);
return moods[randomIndex];
}


  myButton.addEventListener('click', () => {
  var mood = getRandomMood();
  myDiv.innerHTML = mood;
});

const hDiv = document.getElementById('hamza-div');
const hHeader = document.getElementById('hamza-header');
const hButton = document.getElementById('hamza-button');

function getRandomString() {
const moods2 = ["Looking forward to joining some clubs", "Looking forward to meeting new people", "Excited to learn more about my major", "Looking forward to hanging out in westwood", "looking forward to trying out the food in westwood", "looking forward to some interesting sounding classes"];
const randomIndex2 = Math.floor(Math.random() * moods2.length);
return moods2[randomIndex2];
}


hButton.addEventListener('click', () => {
var mood2 = getRandomString();
hDiv.innerHTML = mood2;
});