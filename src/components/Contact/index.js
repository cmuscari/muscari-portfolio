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
            setErrorMessage('error -  name or email is invalid');
            return;
        } else {
            console.log(name, email, message);
            alert('Your message was submitted successfully! Thank you!');
        }
        // If successful, clear the inputs
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container d-flex flex-column justify-content-center align-items-center">
            <div className="contact-container-inner d-flex flex-column justify-content-center align-items-center">
                <h1 className="contact-title">Let's Connect</h1>
                {/* <h2 className="subtitle">call me:</h2>
                <p className="call-text">
                    512.743.4434
                </p>
                <br></br>
                <br></br> */}
                <h2 className="subtitle">message me:</h2>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                    className="input"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    className="input"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                    className="input textarea"
                />
                <button type="submit" name="submit-button" onClick={handleFormSubmit} className="send-button btn-lg">
                    SEND
                </button>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div >
    );
}


export default Contact;


