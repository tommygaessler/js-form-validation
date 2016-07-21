$(document).on('ready', function() {
  $('form').on('submit', function (event) {
    event.preventDefault();

    validateFirstName();
    validateLastName();
    validateEmail();
  });
});

function hideCallout() {
  $('small').css('display', 'none');
}
function showCallout(msg, selector) {

  $(selector).text(msg);
  $(selector).css('display', 'block');
  setTimeout(hideCallout, 4000);
}

function validateFirstName () {

  var firstNameMinLength = 3;
  var firstName = $('#firstName').val();

  if (firstName === '')
  {
    showCallout('Enter your first name', '.smallFirstName');
  }

  else if (firstName.length < firstNameMinLength)
  {
    showCallout('Your first name is too short', '.smallFirstName');
  }

  else if (firstName[0] !== firstName[0].toUpperCase())
  {
    showCallout('Capitalize the first letter of your first name', '.smallFirstName');
  }
}

function validateLastName () {

  var lastNameMinLength = 5;
  var lastName = $('#lastName').val();

  if (lastName === '')
  {
    showCallout('Enter your last name', '.smallLastName');
  }

  else if (lastName.length < lastNameMinLength)
  {
    showCallout('Your last name is too short', '.smallLastName');
  }

  else if (lastName[0] !== lastName[0].toUpperCase())
  {
    showCallout('Capitalize the last letter of your first name', '.smallLastName');
  }
}

function validateEmail () {
  var email = $('#email').val();

  var at = email.indexOf('@');
  var dot = email.indexOf('.', at);

  if (email === '')
  {
    showCallout('Enter your email', '.smallEmail');
  }
  else if (!email.includes('@'))
  {
    showCallout('Email is missing an @', '.smallEmail');
  }
  else if (dot === at + 1)
  {
    showCallout('. Cannot come right after @', '.smallEmail');
  }
  else if (at === 0)
  {
    showCallout('Missing content before @', '.smallEmail');
  }
}
