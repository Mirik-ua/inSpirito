var letterValid = document.querySelectorAll('.letterValid')
var nameValue = document.getElementById('name')
var address = document.getElementById('address');
var city = document.getElementById('city');
var zip_code = document.getElementById('zip_code');
var male = document.getElementById('male')
var female = document.getElementById('female')

function gender() {
  if (male.checked) {
    return male.value
  }else if (female.checked) {
    return female.value
  }
}

var valid = document.getElementById('ok').onclick = function () {
  var warningIcon = '<i class="fas fa-exclamation-circle"></i>';
  var switcher = false;

  if (switcher === false) {
    if (nameValue.value.length <= 1) {
      document.querySelector('.nameError').innerHTML = 'enter ur name pls ' + warningIcon
    }else document.querySelector('.nameError').innerHTML = ''

    if (address.value.length <= 1) {
      document.querySelector('.addressError').innerHTML = 'enter ur address pls ' + warningIcon
    }else document.querySelector('.addressError').innerHTML = ''

    if (city.value.length <= 1) {
      document.querySelector('.cityError').innerHTML = 'enter ur city pls ' + warningIcon
    }else document.querySelector('.cityError').innerHTML = ''

   if (zip_code.value.length <= 1) {
    document.querySelector('.zipError').innerHTML = 'enter ur zip code pls' + warningIcon
    }else if (zip_code.value.length > 5) {
      document.querySelector('.zipError').innerHTML = 'you entered more than necessary' + warningIcon
    }else if (zip_code.value.length < 5) {
      document.querySelector('.zipError').innerHTML = 'you entered less than necessary' + warningIcon
    }else {
      document.querySelector('.zipError').innerHTML = ''
      switcher = true
    }
  }
  if (switcher === true) {
    form()
  }
}

document.getElementById('cancel').onclick = function() {
  window.location = "";
};

function form() {
  var person = [];
  if (localStorage.getItem('person') === null) {
    var obj = {
      name : nameValue.value,
      address : address.value,
      address2 : address2.value,
      city : city.value,
      gender: gender(),
      zip : zip_code.value,
      toJSON: function () {
        return {
          name : this.name,
          address : this.address,
          city : this.city,
          gender: this.gender,
          zip : this.zip,
        }
      }
    };
    person[person.length] = obj;
    localStorage.setItem('person', JSON.stringify(person))
  }else {
    person = JSON.parse(localStorage.getItem('person'));
    obj = {
      name : nameValue.value,
      address : address.value,
      address2 : address2.value,
      city : city.value,
      gender: gender(),
      zip : zip_code.value,
      toJSON: function () {
        return {
          name : this.name,
          address : this.address,
          city : this.city,
          gender: this.gender,
          zip : this.zip,
        }
      }
    };
    person[person.length] = obj;
    localStorage.setItem('person', JSON.stringify(person))
    window.location = "i2.html";
  }
  console.log(person);
};


letterValid.forEach(function (item) {
  item.addEventListener('keypress', function (event) {
      var char = String.fromCharCode(event.which);
      if (!(/[a-z,A-Z]/.test(char))) {
        event.preventDefault();
      }
  })
});

document.getElementById('zip_code').onkeypress = function (event) {
  var char = String.fromCharCode(event.which);
  if (!(/[0-9+]/.test(char))) {
    event.preventDefault();
  }
};

//   var json = JSON.stringify(localStorage.getItem('person'));
//   var xml = new XMLHttpRequest();
//   xml.open('POST', 'any url', true)
//   xml.setRequestHeader('Content-type','application/json; charset=utf-8');
//   xml.onload = function () {
  //     var users = JSON.parse(xml.responseText);
  // 	if (xml.readyState == 4 && xml.status == "201") {
    // 		console.table(users);
    // 	} else {
      // 		console.error(users);
      // 	}
      // }
