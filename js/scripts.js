var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var app = new Vue({
  el: '#app',
  data: {
    first: '',
    last: '',
    selected: '',
    picked: ''
  }
})

const inputs = document.querySelectorAll('.signup__in input');

const patterns = {
  first_name: /^[a-z\d]{3,12}$/i,
  last_name: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

/*function validate(field, regex) {
  if (regex.test(field.value) || field.value == '') {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value])
  });
});

const next = document.getElementById('next');
const favorite = document.querySelector('.favorite');

next.addEventListener('click', nextSection);

function nextSection() {
  favorite.classList.add('see');
  next.classList.add('hide');
}
