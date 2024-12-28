
// const ContactUs = () => {
//   return (
//     <div className="text-color ms-5 me-5 mr-5 mt-3">
//       <b>
        
//       </b>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';

const ContactUs = () => {
  // Initialize state to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to handle form submission status
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    // Example: Sending form data to an API endpoint
    try {
      const response = await fetch('/api/contact', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="text-color ms-5 me-5 mt-3">
      <h2 className="mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            <strong>Subject</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            <strong>Message</strong>
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {status && (
          <div className="mt-3">
            <p>{status}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
