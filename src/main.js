$(document).on('ready', function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    validateFirstName();
    validateLastName();
  });
});

function hideCallout() {
  $('.vaildCallout').css('display', 'none');
}
function showCallout(msg) {
  $('.vaildCallout > h2').text(msg);
  $('.vaildCallout').css('display', 'block');
  setTimeout(hideCallout, 2000)
}

function validateFirstName () {

  var firstNameMinLength = 3;
  var firstName = $('#firstName').val();

  if (firstName === '')
  {
    showCallout('Enter your first name')
  }

  else if (firstName.length < firstNameMinLength)
  {
    showCallout('Your first name is too short')
  }

  else if (firstName[0] !== firstName[0].toUpperCase())
  {
    showCallout('Capitalize the first letter of your first name')
  }
}

function validateLastName () {

  var lastNameMinLength = 5;
  var lastName = $('#lastName').val();

  if (lastName === '')
  {
    showCallout('Enter your last name');
  }

  else if (lastName.length < lastNameMinLength)
  {
    showCallout('Your last name is too short');
  }

  else if (lastName[0] !== lastName[0].toUpperCase())
  {
    showCallout('Capitalize the last letter of your first name');
  }
}
