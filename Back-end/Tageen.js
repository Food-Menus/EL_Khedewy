fetch('./../../Data-base/Tageen.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Tageen_type_1').textContent = data.Tageen_type_1;
    document.getElementById('Tageen_prise_1').textContent = data.Tageen_prise_1;
    document.getElementById('Tageen_type_2').textContent = data.Tageen_type_2;
    document.getElementById('Tageen_prise_2').textContent = data.Tageen_prise_2;
    document.getElementById('Tageen_type_3').textContent = data.Tageen_type_3;
    document.getElementById('Tageen_prise_3').textContent = data.Tageen_prise_3;
    document.getElementById('Tageen_type_4').textContent = data.Tageen_type_4;
    document.getElementById('Tageen_prise_4').textContent = data.Tageen_prise_4;
    document.getElementById('Tageen_type_5').textContent = data.Tageen_type_5;
    document.getElementById('Tageen_prise_5').textContent = data.Tageen_prise_5;
    document.getElementById('Tageen_type_6').textContent = data.Tageen_type_6;
    document.getElementById('Tageen_prise_6').textContent = data.Tageen_prise_6;
    document.getElementById('Tageen_type_7').textContent = data.Tageen_type_7;
    document.getElementById('Tageen_prise_7').textContent = data.Tageen_prise_7;
    document.getElementById('Tageen_type_8').textContent = data.Tageen_type_8;
    document.getElementById('Tageen_prise_8').textContent = data.Tageen_prise_8;
    document.getElementById('Tageen_type_9').textContent = data.Tageen_type_9;
    document.getElementById('Tageen_prise_9').textContent = data.Tageen_prise_9;
    document.getElementById('Tageen_type_10').textContent = data.Tageen_type_10;
    document.getElementById('Tageen_prise_10').textContent = data.Tageen_prise_10;

  });