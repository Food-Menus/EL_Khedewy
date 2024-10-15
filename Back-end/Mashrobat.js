fetch('./../../Data-base/Mashrobat.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Mashrobat_type_1').textContent = data.Mashrobat_type_1;
    document.getElementById('Mashrobat_prise_1').textContent = data.Mashrobat_prise_1;
    document.getElementById('Mashrobat_type_2').textContent = data.Mashrobat_type_2;
    document.getElementById('Mashrobat_prise_2').textContent = data.Mashrobat_prise_2;
    document.getElementById('Mashrobat_type_3').textContent = data.Mashrobat_type_3;
    document.getElementById('Mashrobat_prise_3').textContent = data.Mashrobat_prise_3;
    document.getElementById('Mashrobat_type_4').textContent = data.Mashrobat_type_4;
    document.getElementById('Mashrobat_prise_4').textContent = data.Mashrobat_prise_4;
    document.getElementById('Mashrobat_type_5').textContent = data.Mashrobat_type_5;
    document.getElementById('Mashrobat_prise_5').textContent = data.Mashrobat_prise_5;
    document.getElementById('Mashrobat_type_6').textContent = data.Mashrobat_type_6;
    document.getElementById('Mashrobat_prise_6').textContent = data.Mashrobat_prise_6;
    document.getElementById('Mashrobat_type_7').textContent = data.Mashrobat_type_7;
    document.getElementById('Mashrobat_prise_7').textContent = data.Mashrobat_prise_7;

  });