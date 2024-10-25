fetch('./../../Data-base/Crep.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Crep_type_1').textContent = data.Crep_type_1;
    document.getElementById('Crep_prise_1').textContent = data.Crep_prise_1;
    document.getElementById('Crep_type_2').textContent = data.Crep_type_2;
    document.getElementById('Crep_prise_2').textContent = data.Crep_prise_2;
    document.getElementById('Crep_type_3').textContent = data.Crep_type_3;
    document.getElementById('Crep_prise_3').textContent = data.Crep_prise_3;
    document.getElementById('Crep_type_4').textContent = data.Crep_type_4;
    document.getElementById('Crep_prise_4').textContent = data.Crep_prise_4;
    document.getElementById('Crep_type_5').textContent = data.Crep_type_5;
    document.getElementById('Crep_prise_5').textContent = data.Crep_prise_5;
    document.getElementById('Crep_type_6').textContent = data.Crep_type_6;
    document.getElementById('Crep_prise_6').textContent = data.Crep_prise_6;
    document.getElementById('Crep_type_7').textContent = data.Crep_type_7;
    document.getElementById('Crep_prise_7').textContent = data.Crep_prise_7;
    document.getElementById('Crep_type_8').textContent = data.Crep_type_8;
    document.getElementById('Crep_prise_8').textContent = data.Crep_prise_8;
    document.getElementById('Crep_type_9').textContent = data.Crep_type_9;
    document.getElementById('Crep_prise_9').textContent = data.Crep_prise_9;
    document.getElementById('Crep_type_10').textContent = data.Crep_type_10;
    document.getElementById('Crep_prise_10').textContent = data.Crep_prise_10;
    document.getElementById('Crep_type_10_1').textContent = data.Crep_type_10_1;
    document.getElementById('Crep_prise_10_1').textContent = data.Crep_prise_10_1;
    document.getElementById('Crep_type_11').textContent = data.Crep_type_11;
    document.getElementById('Crep_prise_11').textContent = data.Crep_prise_11;
    document.getElementById('Crep_type_11_1').textContent = data.Crep_type_11_1;
    document.getElementById('Crep_prise_11_1').textContent = data.Crep_prise_11_1;
    document.getElementById('Crep_type_12').textContent = data.Crep_type_12;
    document.getElementById('Crep_prise_12').textContent = data.Crep_prise_12;

  });