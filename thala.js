var searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleSearch);

function isNumber(str) {
  return /^\d+$/.test(str);
}

function getSumDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

function findSingleDigitSum(str) {
  if (isNumber(str)) {
    let sum = getSumDigits(str);

    while (sum >= 10) {
      sum = getSumDigits(sum);
    }

    return sum;
  } else {
    return null;
  }
}

function handleSearch() {
  var searchText = document.getElementById("search-input").value;
  var playerDiv = document.getElementById("player");
  const result = findSingleDigitSum(searchText);
  if (result !== null) {
    if (result === 7) {
      playerDiv.innerHTML =
        "<h2>'Total is 7. Clearly,Thala For A Reason 💪'</h2>";
      playerDiv.innerHTML +=
        "<video id='video'><source src='./assets/Dhoni Meme _ Thala for A reason _ Dhoni.mp4' /></video>";
      var video = document.getElementById("video");
      video.currentTime = 0;
      video.endTime = 30;
      video.play();
    } else if (result === 9) {
      playerDiv.innerHTML = "<h2>'This time, Cheeku For A Reason 😎'</h2>";
      playerDiv.innerHTML +=
        "<video id='video'><source src='./assets/Virat_dance.mp4' /></video>";
      var video = document.getElementById("video");
      video.play();
    } else {
      playerDiv.innerHTML = "<h2>'Toot gya me to 😔'</h2>";
      playerDiv.innerHTML +=
        "<video id='video'><source src='./assets/toot gya.mp4' /></video>";
      var video = document.getElementById("video");
      video.currentTime = 0;
      video.endTime = 30;
      video.play();
    }
  } else {
    var count = searchText.length;
    if (searchText.length === 7 || searchText === "7") {
      playerDiv.innerHTML =
        "<h2>'Total is 7. Clearly,Thala For A Reason 💪'</h2>";
      playerDiv.innerHTML +=
        "<video id='video'><source src='./assets/Dhoni Meme _ Thala for A reason _ Dhoni.mp4' /></video>";
      var video = document.getElementById("video");
      video.currentTime = 0;
      video.endTime = 30;
      video.play();
    } else if (
      searchText.length === 9 ||
      searchText === "9" ||
      searchText === "18"
    ) {
      playerDiv.innerHTML = "<h2>'This time, For A Reason 😎'</h2>";
      playerDiv.innerHTML +=
        "<video id='video'><source src='./assets/Virat_dance.mp4' /></video>";
      var video = document.getElementById("video");
      video.play();
    } else {
      playerDiv.innerHTML = "<h2>'Toot gya me to 😔'</h2>";
      playerDiv.innerHTML +=
        "<video id='video'><source src='./assets/toot gya.mp4' /></video>";
      var video = document.getElementById("video");
      video.currentTime = 0;
      video.endTime = 30;
      video.play();
    }
  }
}
