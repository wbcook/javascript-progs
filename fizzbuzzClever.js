var number = 1;
while (number <= 15) {
    var word = "";
    if (number % 3 === 0)
      word += "Fizz";
    if (number % 5 === 0)
      word += "Buzz";
    if (word === "")
      console.log(number);
    else
      console.log(word);
    number += 1;
}
