// Step-1{make empty arrays}
let interviewList = [];
let rejectedList = [];
let currentStatus = "all-btn";

// Step-1 {get all the ids}
const total = document.getElementById("totalcount");
const interviewCount = document.getElementById("interviewcount");
const rejectedCount = document.getElementById("rejectedcount");
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
const jobsCard = document.getElementById("jobs-card");
const filterSection = document.getElementById("filter-section");
const jobsCountLabel = document.getElementById("jobs-count");

// Step-2 {Calculate function}
function calculateCount() {
  total.innerText = jobsCard.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  // Always update jobs-count label based on current active tab
  if (currentStatus === "all-btn") {
    jobsCountLabel.innerText = jobsCard.children.length + " jobs";
  } else if (currentStatus === "interview-btn") {
    jobsCountLabel.innerText = interviewList.length + " jobs";
  } else if (currentStatus === "rejected-btn") {
    jobsCountLabel.innerText = rejectedList.length + " jobs";
  }
}
calculateCount();

