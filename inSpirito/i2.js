window.onload = function () {
  if (localStorage.getItem('person') !== null) {
    var title = document.getElementById('out');
    var person = JSON.parse(localStorage.getItem('person'))
    title.innerHTML = `Hello  ${person[0].name}`
  }

}
