module.exports = function main(str) {
  var result = numInverToLcd(str);
  return result;
};

function numInverToLcd(str) {
  var strArr = str.split("").map(function (item) {
    return +item;
  });

  var numStr = [
    ["._.", "|.|", "|_|"], ["...", "..|", "..|"], ["._.", "._|", "|_."],
    ["._.", "._|", "._|"], ["...", "|_|", "..|"], ["._.", "|_.", "._|"],
    ["._.", "|_.", "|_|"], ["._.", "..|", "..|"], ["._.", "|_|", "|_|"],
    ["._.", "|_|", "..|"]
  ];

  var arr = [];
  for (var i = 0; i < 3; i++) {
    var temp = [];
    for (var j = 0, len = strArr.length; j < len; j++) {
      var index = strArr[j];
      temp.push(numStr[index][i]);
    }
    arr.push(temp.join(" "));
  }
  var result = arr.join("\n") + "\n";
  return result;
}


