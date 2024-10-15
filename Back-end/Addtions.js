fetch('./../../Data-base/Addtions.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Addtions_type_1').textContent = data.Addtions_type_1;
    document.getElementById('Addtions_prise_1').textContent = data.Addtions_prise_1;
    document.getElementById('Addtions_type_2').textContent = data.Addtions_type_2;
    document.getElementById('Addtions_prise_2').textContent = data.Addtions_prise_2;
    document.getElementById('Addtions_type_3').textContent = data.Addtions_type_3;
    document.getElementById('Addtions_prise_3').textContent = data.Addtions_prise_3;
    document.getElementById('Addtions_type_4').textContent = data.Addtions_type_4;
    document.getElementById('Addtions_prise_4').textContent = data.Addtions_prise_4;
    document.getElementById('Addtions_type_5').textContent = data.Addtions_type_5;
    document.getElementById('Addtions_prise_5').textContent = data.Addtions_prise_5;
    document.getElementById('Addtions_type_6').textContent = data.Addtions_type_6;
    document.getElementById('Addtions_prise_6').textContent = data.Addtions_prise_6;
    document.getElementById('Addtions_type_7').textContent = data.Addtions_type_7;
    document.getElementById('Addtions_prise_7').textContent = data.Addtions_prise_7;
    document.getElementById('Addtions_type_8').textContent = data.Addtions_type_8;
    document.getElementById('Addtions_prise_8').textContent = data.Addtions_prise_8;

  });