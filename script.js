const scriptURL = 'YOUR_WEB_APP_URL'; // Replace with your Apps Script Web App URL

document.getElementById('attendanceForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const attendance = document.querySelector('input[name="attendance"]:checked').value;
  const place = document.getElementById('place').value;

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify({ name, attendance, place }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById('status').innerText = "Submitted successfully!";
    document.getElementById('attendanceForm').reset();
  })
  .catch(err => {
    document.getElementById('status').innerText = "Error submitting data.";
    console.error(err);
  });
});
