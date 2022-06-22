const $contactForm = document.querySelector('#contact-form');

const handleContactFormSubmit = event => {
    event.preventDefault();
  
    // get contact form data and organize it
    const name = $contactForm.querySelector('[name="name"]').value;
    const email = $contactForm.querySelector('[name="email"]').value;
    const message = $contactForm.querySelector('[name="message"]').value;
  
    const contactObj = { name, email, message };
    console.log(contactObj);
    fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactObj)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        alert('Error: ' + response.statusText);
      })
      .then(contactResponse => {
        console.log(contactResponse);
      });
  };
  
  
  
  $contactForm.querySelector('[name="submit-button"]').addEventListener('submit', handleContactFormSubmit);