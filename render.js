function updateClockTime() {
  const updateClockTimeNow = new Date();
  const hours = updateClockTimeNow.getHours().toString().padStart(2, 0);
  const minutes = updateClockTimeNow.getMinutes().toString().padStart(2, 0);
  const seconds = updateClockTimeNow.getSeconds().toString().padStart(2, 0);
  const getTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock-time").textContent = getTime;
}

updateClockTime();
setInterval(updateClockTime, 1000);

function updateClockDate() {
  const updateClockDateNow = new Date();
  const getDate = updateClockDateNow.toLocaleDateString("en-US").toString().padStart(2, 0);
  document.getElementById("clock-date").textContent = getDate;
}

updateClockDate();
setInterval(updateClockDate, 1000);
