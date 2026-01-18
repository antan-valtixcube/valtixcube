"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";
import ContactLocations from "./contactlocation.js";
import { HelpCircle, LifeBuoy, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus("");
  };

  const validateForm = (f) => {
    const e = {};
    if (!f.firstName || !f.firstName.trim()) e.firstName = "First name is required.";
    if (!f.lastName || !f.lastName.trim()) e.lastName = "Last name is required.";

    if (!f.email || !f.email.trim()) e.email = "Email is required.";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(f.email)) e.email = "Please enter a valid email address.";
    }

    if (!f.phone || !f.phone.trim()) e.phone = "Phone number is required.";
    else if ((f.phone.replace(/\D/g, "").length) < 7) e.phone = "Please enter a valid phone number.";

    if (!f.company || !f.company.trim()) e.company = "Company is required.";
    if (!f.role || !f.role.trim()) e.role = "Role is required.";

    // if (!f.services || !f.services.length) e.services = "Please select at least one service.";

    if (!f.message || !f.message.trim()) e.message = "Project description is required.";
    else if (f.message.trim().length < 10) e.message = "Please provide a longer project description.";

    return e;
  };

  const handleSubmit = async (eEvent) => {
    eEvent.preventDefault();
    setLoading(true);
    setStatus("");

    const foundErrors = validateForm(form);
    if (Object.keys(foundErrors).length) {
      setErrors(foundErrors);
      setStatus("Please fix the errors before submitting.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({});
        setErrors({});
      } else {
        setStatus("Something went wrong.");
      }
    } catch (err) {
      setLoading(false);
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>LET'S DISCUSS YOUR OPPORTUNITY</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.page}>
        <div className={styles.container}>

          {/* LEFT FORM */}
          <div className={styles.formArea}>

            {/* STEP 01 */}
            <div className={styles.step}>
              {/* <span>01.</span> */}
              <h2>Tell Us About Yourself</h2>
            </div>

            <div className={styles.grid}>
              <div className={styles.field}>
                <label>First Name</label>
                <input
                  placeholder="John"
                  name="firstName"
                  value={form?.firstName || ""}
                  onChange={(e) => updateField(e.target.name, e.target.value)}
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
              </div>

              <div className={styles.field}>
                <label>Last Name</label>
                <input
                  placeholder="Jones"
                  name="lastName"
                  value={form?.lastName || ""}
                  onChange={(e) => updateField(e.target.name, e.target.value)}
                  aria-invalid={!!errors.lastName}
                />
                {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
              </div>

              <div className={styles.field}>
                <label>Email Address</label>
                <input
                  placeholder="doe@mydomain.com"
                  name="email"
                  value={form?.email || ""}
                  onChange={(e) => updateField(e.target.name, e.target.value)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              <div className={styles.field}>
                <label>Phone</label>
                <input
                  placeholder="Enter your phone number"
                  name="phone"
                  value={form?.phone || ""}
                  onChange={(e) => updateField(e.target.name, e.target.value)}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>

              <div className={styles.field}>
                <label>Company</label>
                <input
                  placeholder="Your company name"
                  name="company"
                  value={form?.company || ""}
                  onChange={(e) => updateField(e.target.name, e.target.value)}
                  aria-invalid={!!errors.company}
                />
                {errors.company && <p className={styles.error}>{errors.company}</p>}
              </div>

              <div className={styles.field}>
                <label>Role</label>
                <input
                  placeholder="Your role"
                  name="role"
                  value={form?.role || ""}
                  onChange={(e) => updateField(e.target.name, e.target.value)}
                  aria-invalid={!!errors.role}
                />
                {errors.role && <p className={styles.error}>{errors.role}</p>}
              </div>
            </div>

            {/* STEP 02 */}
            <div className={styles.step}>
              {/* <span>02.</span> */}
              <h2>How Can We Help You With?</h2>
            </div>

            <div className={styles.checkboxGrid}>
              {[
                { label: "IT Consulting", name: "itConsulting" },
                { label: "UI / UX Design", name: "uiUxDesign" },
                { label: "Cloud Solution", name: "cloudSolution" },
                { label: "AI & Machine Learning", name: "aiMachineLearning" },
                { label: "Technical Support", name: "technicalSupport" },
                { label: "DevOps Services", name: "devOpsServices" },
              ].map((item) => (
                <label key={item.name} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    value={item.name}
                    checked={form.services?.includes(item.name) || false}
                    onChange={(ev) => {
                      const { checked, value } = ev.target;
                      setForm((prev) => {
                        const current = prev.services || [];
                        const services = checked
                          ? [...current, value]
                          : current.filter((s) => s !== value);
                        return { ...prev, services };
                      });
                      setErrors((prev) => ({ ...prev, services: undefined }));
                    }}
                  />
                  <span className={styles.checkmark}></span>
                  {item.label}
                </label>
              ))}
            </div>
            {errors.services && <p className={styles.error}>{errors.services}</p>}

            {/* STEP 03 */}
            <div className={styles.step}>
              {/* <span>03.</span> */}
              <h2>Tell Us About Your Project</h2>
            </div>

            <div className={styles.fullField}>
              <label>Project Description</label>
              <textarea
                placeholder="Your Message"
                name="message"
                value={form?.message || ""}
                onChange={(e) => updateField(e.target.name, e.target.value)}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className={styles.error}>{errors.message}</p>}
            </div>

            <button onClick={handleSubmit} className={styles.submit} disabled={loading}>
              {loading ? "Sending..." : "Submit Now"}
            </button>
            {status && <p className={styles.info}>{status}</p>}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className={styles.sidebar}>
            <ContactLocations />
          </div>

        </div>
      </section>
    </>
  );
}