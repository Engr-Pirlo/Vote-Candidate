// Get the necessary elements from the DOM
const voteButtons = document.querySelectorAll(".vote-button");
const voteCounts = document.querySelectorAll(".vote-count");
const resultElement = document.getElementById("result");
const showWinnerButton = document.getElementById("show-winner-button");

// Add click event listener to each vote button
voteButtons.forEach(button => {
  button.addEventListener("click", function() {
    const candidate = this.getAttribute("data-candidate");
    const voteCountElement = document.getElementById(`vote-count-${candidate}`);

    let voteCount = parseInt(voteCountElement.textContent);
    voteCount++;
    voteCountElement.textContent = voteCount;

    showResult();
  });
});

// Add click event listener to toggle styles button
showWinnerButton.addEventListener("click", function() {
  const candidateImages = document.querySelectorAll(".candidate img");
  candidateImages.forEach(img => {
    img.classList.toggle("highlight-img");
  });
});

// Function to determine and display the candidate with the highest votes
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
