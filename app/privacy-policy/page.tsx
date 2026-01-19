import PolicyLayout from "./PolicyLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated={new Date().toLocaleDateString()}>
      <p>
        ValtixCube (“we”, “our”, “us”) is committed to protecting your privacy and
        ensuring the security of your personal information.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Name, email address, phone number, company name, and role</li>
        <li>Information submitted via contact or inquiry forms</li>
        <li>IP address, browser type, device, and usage data</li>
        <li>Information voluntarily shared during business discussions</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Respond to inquiries and requests</li>
        <li>Provide and improve our services</li>
        <li>Communicate proposals, updates, and services</li>
        <li>Improve website performance and user experience</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Data Sharing & Disclosure</h2>
      <p>
        We do not sell or rent personal information. Data may be shared only with
        trusted service providers or when legally required.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We use reasonable technical and organizational safeguards. However, no
        online system is fully secure.
      </p>

      <h2>5. Cookies & Tracking</h2>
      <p>
        We may use cookies and analytics tools to improve website performance.
        You can manage cookies via browser settings.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access your personal data</li>
        <li>Request correction or deletion</li>
        <li>Withdraw consent for communications</li>
      </ul>

      <h2>7. Third-Party Links</h2>
      <p>
        We are not responsible for privacy practices of third-party websites.
      </p>

      <h2>8. Policy Updates</h2>
      <p>
        This policy may be updated periodically. Changes will appear on this
        page.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        Email: contact@valtixcube.com <br />
        Company: ValtixCube <br />
        Location: India
      </p>
    </PolicyLayout>
  );
}
