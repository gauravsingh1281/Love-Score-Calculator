const boyImage = [
  "boy1",
  "boy2",
  "boy3",
  "boy4",
  "boy5",
  "boy6",
  "boy7",
  "boy8",
];
const girlImage = [
  "girl1",
  "girl2",
  "girl3",
  "girl4",
  "girl5",
  "girl6",
  "girl7",
];

// for boys

var randomImage = Math.floor(Math.random() * boyImage.length);

var imageChange = "image/" + boyImage[randomImage] + ".jpg";
document.getElementById("boyimg").setAttribute("src", imageChange);

// for girls

var randomGirlImage = Math.floor(Math.random() * girlImage.length);
var girlImageChange = "image/" + girlImage[randomGirlImage] + ".jpg";
document.getElementById("girlimg").setAttribute("src", girlImageChange);

var genderCheck = document.getElementById("gendercheck").innerText;

if (genderCheck === "Girl") {
  document.getElementById("boyimg").removeAttribute("src");
  document.getElementById("boyimg").setAttribute("src", girlImageChange);
  document.getElementById("girlimg").removeAttribute("src");
  document.getElementById("girlimg").setAttribute("src", imageChange);
} else {
}
