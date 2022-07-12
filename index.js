function id(id) {
  return document.getElementById(id);
}

const makeRandoms = (length, min, max) => {
  if (length > max - min) throw "Impossible Inputs";
  const nums = new Set();
  while (nums.size < length)
    nums.add(Math.floor(Math.random() * (max - min)) + min);
  return Array.from(nums);
};

const row = [
  id("b1"),
  id("b2"),
  id("b3"),
  id("b4"),
  id("b5"),
  id("i5"),
  id("i1"),
  id("i2"),
  id("i3"),
  id("i4"),
  id("i5"),
  id("n1"),
  id("n2"),
  id("n4"),
  id("n5"),
  id("g1"),
  id("g2"),
  id("g3"),
  id("g4"),
  id("g5"),
  id("o1"),
  id("o2"),
  id("o3"),
  id("o4"),
  id("o5"),
];

function generateBingoCard() {
  let row_b = makeRandoms(5, 1, 15);
  let row_i = makeRandoms(5, 16, 30);
  let row_n = makeRandoms(5, 31, 45);
  let row_g = makeRandoms(5, 46, 60);
  let row_o = makeRandoms(5, 61, 75);
  // return [row_b, row_i, row_n, row_g, row_o];
  row[0].textContent = row_b[0];
  row[1].textContent = row_b[1];
  row[2].textContent = row_b[2];
  row[3].textContent = row_b[3];
  row[4].textContent = row_b[4];
  row[5].textContent = row_i[0];
  row[6].textContent = row_i[1];
  row[7].textContent = row_i[2];
  row[8].textContent = row_i[3];
  row[9].textContent = row_i[4];
  row[10].textContent = row_n[0];
  row[11].textContent = row_n[1];
  row[12].textContent = row_n[2];
  row[13].textContent = row_n[3];
  row[14].textContent = row_n[4];
  row[15].textContent = row_g[0];
  row[16].textContent = row_g[1];
  row[17].textContent = row_g[2];
  row[18].textContent = row_g[3];
  row[19].textContent = row_g[4];
  row[20].textContent = row_o[0];
  row[21].textContent = row_o[1];
  row[22].textContent = row_o[2];
  row[23].textContent = row_o[3];
  row[24].textContent = row_o[4];
}

document
  .getElementById("randomize")
  .addEventListener("click", generateBingoCard);

document.onload = generateBingoCard();
