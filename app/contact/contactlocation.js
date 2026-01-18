"use client";

import styles from "./ContactForm.module.scss";
const locations = [
  {
    country: "United States",
    city: "Chennai",
    address: "525, North Tryon Street, Suite 1600, Charlotte, NC 28202-0213",
    phone: "+91 800 123 4567",
    email: "contact@valtixcube.com",
  },
  {
    country: "Germany",
    city: "Coimbatore",
    address:
      "501, Satyamev Eminence, Science City Road, Ahmedabad, Gujarat - 380060",
    phone: "+91 800 123 4567",
    email: "contact@valtixcube.com",
  },
];

export default function ContactLocations() {
  return (
    <div className={styles.locations}>

      <div className={styles.card}>
        <h3>India</h3>
        {locations.map((item, index) => (
          <div key={index}>
            <div key={index}>
              <div className={styles.city}>
                <span className={styles.dot}></span>
                {item.city}
              </div>

              {/* <p className={styles.address}>{item.address}</p> */}


              <div className={styles.contact}>
                <p className={styles.phone}>{item.phone}</p>
                <p className={styles.email}>{item.email}</p>
              </div>

              <div className={styles.divider}>
                <span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
