import React, { useState } from 'react';
import { validateEmail } from '../../helpers/helpers.js';

function Contact() {
    // Create state variables for the fields in the form
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        // Get the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, set the state to equal the inputValue (target.value)
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Check to see if the name is empty or the email is invalid. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !name) {
            setErrorMessage('Name or Email is invalid');
            return;
        }
        // If successful, clear the inputs
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1>Let's talk - I'd love to hear from you!</h1>
            <p>
                Call:
                512.743.4434
            </p>
            <h2>Message:</h2>
            <form id="contact-form" className="contact-form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="submit" onClick={handleFormSubmit}>
                    SEND
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;

