

// const AboutUs = () => {
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
//       </b>
//     </div>
//   );
// };

// export default AboutUs;


// import React from 'react';
import styles from './About.module.css'; // Import the CSS module

const AboutUs = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>About Turf Booking System</h1>
        <p>Your ultimate solution for managing and booking sports turf facilities.</p>
      </header>

      {/* Introduction Section */}
      <section className={styles.section}>
        <h2>Introduction</h2>
        <p>
          The Turf Booking System is a comprehensive platform designed to streamline the process of booking sports turfs. Whether you're a player looking to reserve a field for practice or a manager aiming to efficiently handle bookings, our system provides an intuitive and user-friendly interface to meet your needs.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <h2>Features</h2>
        <ul className={styles.featuresList}>
          <li><strong>Real-Time Availability:</strong> Check and book available turf slots in real-time.</li>
          <li><strong>User Authentication:</strong> Secure login and registration for users and administrators.</li>
          <li><strong>Payment Integration:</strong> Seamless online payments for bookings.</li>
          <li><strong>Booking Management:</strong> Easily manage, modify, or cancel your bookings.</li>
          <li><strong>Notifications:</strong> Receive email and SMS notifications for booking confirmations and reminders.</li>
          <li><strong>Admin Dashboard:</strong> Comprehensive dashboard for administrators to oversee bookings and manage turf schedules.</li>
        </ul>
      </section>

      {/* Technologies Used Section */}
      <section className={styles.section}>
        <h2>Technologies Used</h2>
        <div className={styles.techStack}>
          <span className={styles.techItem}>ReactJS</span>
          <span className={styles.techItem}>Node.js</span>
          <span className={styles.techItem}>Express.js</span>
          <span className={styles.techItem}>MongoDB</span>
          <span className={styles.techItem}>Firebase</span>
          <span className={styles.techItem}>Stripe API</span>
          <span className={styles.techItem}>Material-UI</span>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <h2>Our Team</h2>
        <p>
          Our team consists of passionate developers and sports enthusiasts dedicated to providing the best turf booking experience. We continuously strive to enhance our platform based on user feedback and emerging technologies.
        </p>
      </section>

      {/* Contact Section */}
      <section className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          Have questions or need support? Reach out to us at <a href="mailto:support@turfbookingsystem.com">support@turfbookingsystem.com</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Turf Booking System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
