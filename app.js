// alert("Hi Man")

//storage Location memory

// Local Variable 
// Gobalk 

// var // E6

// let 
// const

// String number . float , boolean
//''
//""
// ``

// let name1 = "Omar "
// let personalInformation = ''
// name = 'Abdi'
// console.log(name)
// // let personalInformation
// const number = 13.14
// number = 9.0
// console.log(number)

// var name  = 'omar'
// var name  = 'omar'
// var name  = 'omar'
// var name  = 'omar'
// var name  = 'omar'



// let name = "Omar"

// let x = 5
// let y = 10
// y+=10;
// let sum = x+y;

// console.log(sum)



// // Get the necessary elements from the DOM
// const countElement = document.getElementById("count");
// const incrementButton = document.getElementById("increment");
// const decrementButton = document.getElementById("decrement");
// const resetButton = document.getElementById("reset");

// let count = 0;

// // Function to update the count element
// function updateCount() {
//   countElement.textContent = count;
// }

// // Event listener for the increment button
// incrementButton.addEventListener("click", function() {
//   count++;
//   updateCount();
// });

// // Event listener for the decrement button
// decrementButton.addEventListener("click", function() {
//   if (count > 0) {
//     count--;
//     updateCount();
//   }
// });

// // Event listener for the reset button
// resetButton.addEventListener("click", function() {
//   count = 0;
//   updateCount();
// });

// // Initialize the count
// updateCount();


// Get the necessary elements from the DOM
const voteButtons = document.querySelectorAll(".vote-button");

// Add click event listener to each vote button
voteButtons.forEach(button => {
  button.addEventListener("click", function() {
    const candidate = this.getAttribute("data-candidate");
    const voteCountElement = document.getElementById(`vote-count-${candidate}`);

    let voteCount = parseInt(voteCountElement.textContent);
    voteCount++;
    voteCountElement.textContent = voteCount;
  });
});


function showResult() {
    let maxVotes = 0;
    let winningCandidate = "";
  
    voteCounts.forEach(countElement => {
      const candidate = countElement.getAttribute("id").split("-")[2];
      const voteCount = parseInt(countElement.textContent);
  
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        winningCandidate = candidate;
      }
    });
  
    resultElement.innerHTML = `<p>The current leader is Candidate ${winningCandidate} with ${maxVotes} votes.</p>`;
  }
