fetch('./../../Data-base/Ofires.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Ofires_type_1').textContent = data.Ofires_type_1;
    document.getElementById('Ofires_prise_1').textContent = data.Ofires_prise_1;
    document.getElementById('Ofires_type_2').textContent = data.Ofires_type_2;
    document.getElementById('Ofires_prise_2').textContent = data.Ofires_prise_2;

  });