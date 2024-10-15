fetch('./../../Data-base/Koshary.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Koshary_type_1').textContent = data.Koshary_type_1;
    document.getElementById('Koshary_prise_1').textContent = data.Koshary_prise_1;
    document.getElementById('Koshary_type_2').textContent = data.Koshary_type_2;
    document.getElementById('Koshary_prise_2').textContent = data.Koshary_prise_2;
    document.getElementById('Koshary_type_3').textContent = data.Koshary_type_3;
    document.getElementById('Koshary_prise_3').textContent = data.Koshary_prise_3;
    document.getElementById('Koshary_type_4').textContent = data.Koshary_type_4;
    document.getElementById('Koshary_prise_4').textContent = data.Koshary_prise_4;
    document.getElementById('Koshary_type_5').textContent = data.Koshary_type_5;
    document.getElementById('Koshary_prise_5').textContent = data.Koshary_prise_5;

  });