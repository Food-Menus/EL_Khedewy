fetch('./../../Data-base/Helw.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Helw_type_1').textContent = data.Helw_type_1;
    document.getElementById('Helw_prise_1').textContent = data.Helw_prise_1;
    document.getElementById('Helw_type_2').textContent = data.Helw_type_2;
    document.getElementById('Helw_prise_2').textContent = data.Helw_prise_2;
    document.getElementById('Helw_type_3').textContent = data.Helw_type_3;
    document.getElementById('Helw_prise_3').textContent = data.Helw_prise_3;
    document.getElementById('Helw_type_4').textContent = data.Helw_type_4;
    document.getElementById('Helw_prise_4').textContent = data.Helw_prise_4;
    document.getElementById('Helw_type_5').textContent = data.Helw_type_5;
    document.getElementById('Helw_prise_5').textContent = data.Helw_prise_5;
    document.getElementById('Helw_type_6').textContent = data.Helw_type_6;
    document.getElementById('Helw_prise_6').textContent = data.Helw_prise_6;
    document.getElementById('Helw_type_6_1').textContent = data.Helw_type_6_1;
    document.getElementById('Helw_prise_6_1').textContent = data.Helw_prise_6_1;
    document.getElementById('Helw_type_7').textContent = data.Helw_type_7;
    document.getElementById('Helw_prise_7').textContent = data.Helw_prise_7;
    document.getElementById('Helw_type_8').textContent = data.Helw_type_8;
    document.getElementById('Helw_prise_8').textContent = data.Helw_prise_8;
    
  });