const charset = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
];

let passId1 = document.getElementById("password-id1");
let passId2 = document.getElementById("password-id2");

function passwordGenerator() {
  let randomNumber;
  let password = "";
  for (i = 0; i < 15; i++) {
    randomNumber = Math.floor(Math.random() * charset.length);
    password += charset[randomNumber];
  }
  return password;
}

function generatePassword() {
  passId1.textContent = passwordGenerator();
  passId2.textContent = passwordGenerator();
}
