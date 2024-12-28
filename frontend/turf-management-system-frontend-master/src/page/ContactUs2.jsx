
// const ContactUs = () => {
//   return (
//     <div className="text-color ms-5 me-5 mr-5 mt-3">
//       <b>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
//         mollitia, molestiae quas vel sint commodi repudiandae consequuntur
//         voluptatum laborum numquam blanditiis harum quisquam eius sed odit
//         fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
//         accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
//         molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
//         officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
//         nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
//         error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
//         modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
//         error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
//         dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
//         amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
//         temporibus enim commodi iusto libero magni deleniti quod quam
//         consequuntur! Commodi minima excepturi repudiandae velit hic maxime
//         doloremque. Quaerat provident commodi consectetur veniam similique ad
//         earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
//         fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
//         labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
//         ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
//         aliquam numquam totam ratione voluptas quod exercitationem fuga.
//         Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
//         1427 lorem ipsumWhatever By Shadow on Mar 26 2022 DonateThankComment
//         <br />
//         <br />
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
//         mollitia, molestiae quas vel sint commodi repudiandae consequuntur
//         voluptatum laborum numquam blanditiis harum quisquam eius sed odit
//         fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
//         accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
//         molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
//         officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
//         nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
//         error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
//         modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
//         error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt
//         dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed
//         amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
//         temporibus enim commodi iusto libero magni deleniti quod quam
//         consequuntur! Commodi minima excepturi repudiandae velit hic maxime
//         doloremque. Quaerat provident commodi consectetur veniam similique ad
//         earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
//         fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores
//         labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto
//         ab laudantium modi minima sunt esse temporibus sint culpa, recusandae
//         aliquam numquam totam ratione voluptas quod exercitationem fuga.
//         Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!
//         1427 lorem ipsumWhatever By Shadow on Mar 26 2022 DonateThankComment
//       </b>
//     </div>
//   );
// };

// export default ContactUs;


// import React, { useState } from 'react';
// import styles from './ContactUs.module.css';

// const ContactUs = () => {
  // State to manage form inputs
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });

  // // State to manage form submission status
  // const [status, setStatus] = useState('');

  // // Handle input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.subject || !formData.message) {
  //     setStatus('Please fill in all fields.');
  //     return;
  //   }

  //   // For demonstration, we'll just log the data and show a success message
  //   console.log('Form Data Submitted:', formData);
  //   setStatus('Your message has been sent successfully!');

  //   // Reset form
  //   setFormData({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   });

  //   // In a real application, you would send the data to a backend server or an email service here
  // };

//   return (
//     <div className={styles.container}>
//       {/* Header Section */}
//       <header className={styles.header}>
//         <h1>Contact Us</h1>
//         <p>We'd love to hear from you! Reach out to us using the form below.</p>
//       </header>

//       {/* Contact Form */}
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="name">Name<span className={styles.required}>*</span></label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={styles.input}
//             placeholder="Your Name"
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email<span className={styles.required}>*</span></label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={styles.input}
//             placeholder="your.email@example.com"
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="subject">Subject<span className={styles.required}>*</span></label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className={styles.input}
//             placeholder="Subject"
//             required
//           />
//         </div>

//         <div className={styles.formGroup}>
//           <label htmlFor="message">Message<span className={styles.required}>*</span></label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className={styles.textarea}
//             placeholder="Your message..."
//             rows="5"
//             required
//           ></textarea>
//         </div>

//         {status && <p className={styles.status}>{status}</p>}

//         <button type="submit" className={styles.button}>Send Message</button>
//       </form>

//       {/* Contact Information */}
//       <section className={styles.contactInfo}>
//         <h2>Our Contact Details</h2>
//         <p><strong>Email:</strong> <a href="mailto:support@turfbookingsystem.com">support@turfbookingsystem.com</a></p>
//         <p><strong>Phone:</strong> +1 (234) 567-8901</p>
//         <p><strong>Address:</strong> 123 Turf Lane, Sports City, Country</p>
//       </section>

//       {/* Footer */}
//       <footer className={styles.footer}>
//         <p>&copy; {new Date().getFullYear()} Turf Booking System. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;
