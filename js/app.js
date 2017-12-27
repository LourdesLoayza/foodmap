

// Búsqueda de locales

function begin() {
  search();
}

function search() {

  var selectDistrict = $('#select-district')
  var district;

 
  function selectionDistrict(event) {

    
    switch (true) {
     
      case event.target.value === 'LIMA':
        district = data['LIMA'];
        console.log('PRUEBA')
        break;
        case event.target.value === 'MIRAFLORES':
        district = data['MIRAFLORES'];
        console.log('PRUEBA')
        break;
        case event.target.value === 'SAN-ISIDRO':
        district = data['SAN-ISIDRO'];
        console.log('PRUEBA')
        break;
    }
  }
}

$(document).ready(begin);