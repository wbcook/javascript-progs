var board = " ";
for (i = 1; i <= 32; i++) {
    board += "# ";
    if (i % 4 === 0)
      board += "\n";
    if (i % 8 === 0)
      board += " ";
}
console.log(board);