const scriptURL = 'https://script.google.com/macros/s/AKfycbwoqTgLGAhjCsG_ilEtwgxJ_VU6SpC5JhPH70PejfYEE9J388HQgZ1oOrxGZMaVm0vv/exec';

document.getElementById('attendanceForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(document.getElementById('attendanceForm'));

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('status').innerText = "Submitted successfully!";
    document.getElementById('attendanceForm').reset();
  })
  .catch(error => {
    document.getElementById('status').innerText = "Error submitting data.";
    console.error('Error!', error.message);
  });
});
