var formData = new FormData(document.querySelector('form.passport-Domik-Form'))
for (const pair of formData.entries()) {
  alert(`${pair[0]}, ${pair[1]}`);
}
