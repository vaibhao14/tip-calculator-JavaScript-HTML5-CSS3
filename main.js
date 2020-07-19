//Calculate Tip
function calculateTip() {
  var serviceQuality = document.getElementById("serviceQuality").value;
  var billAmount = document.getElementById("billAmount").value;
  var numOfShare = document.getElementById("numOfShare").value;

  //validate input
  if (billAmount === "" || serviceQuality == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfShare === "" || numOfShare <= 1) {
    numOfShare = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (billAmount * serviceQuality) / numOfShare;
  //round to two decimal places
  total = (Math.round(total * 100) / 100).toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
