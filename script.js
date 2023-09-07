// function to update the current date of the week and UTC time
document.addEventListener("DOMContentLoaded", function () {
  
  function updateDateTime() {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    // Extract HH: MM : SS from UTC
    const currentUTCTime = currentDate.toISOString().substr(11, 8);

    // update the HTML element with fetched data
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDay;
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentUTCTime;
  }
  
  // calling the function
  updateDateTime();

  //update the date and time every second
  setInterval(updateDateTime, 1000);
});