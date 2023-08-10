var formData = new FormData(document.querySelector('form.passport-Domik-Form'))

for (const pair of formData.entries()) {
  console.log(`${pair[0]}, ${pair[1]}`);
}
