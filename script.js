let getNumber = document.getElementById('countNumber');
let dispMessage = document.getElementById('displayMessage');

// console.log(getNumber, dispMessage);


const displayNumber = (number) => {
    // console.log(number);
    getNumber.innerText = number;
  };
  

  const displayMessage = () => {
    // console.log("Guvi Geeks");
    dispMessage.innerText = "Guvi Geeks - Chennai";
  };
  
  // Define a function to countdown from a given number to 1
  const countdown = (number, callback) => {
    if (number >= 0) {
      displayNumber(number);
      setTimeout(() => countdown(number - 1, callback), 1000);
    } else {
      callback();
    }
  };
  
  // Start the countdown
  countdown(10, displayMessage);