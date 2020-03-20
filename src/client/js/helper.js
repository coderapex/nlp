// trim(1.0789, 2); => o/p: 1.07
function trim(number, precision = 2) {
  let array = number.toString().split(".");
  array.push(array.pop().substring(0, precision));
  let trimmedNumber = array.join(".");
  console.log(trimmedNumber);
  return Number(trimmedNumber);
}

export { trim };

// titleCase("I am tea pot"); => "I Am Tea Pot"
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export { titleCase };
