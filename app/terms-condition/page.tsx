import PolicyLayout from "../privacy-policy/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated={new Date().toLocaleDateString()}>
      <p>
        These Terms & Conditions govern your use of the ValtixCube website and
        services.
      </p>

      <h2>1. Services</h2>
      <p>
        We provide technology consulting, software development, and AI-enabled
        solutions based on agreed proposals or SOWs.
      </p>

      <h2>2. Use of Website</h2>
      <ul>
        <li>No misuse or unauthorized access</li>
        <li>No unlawful or harmful activities</li>
        <li>Website content is informational only</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        All website content belongs to ValtixCube unless stated otherwise.
        Deliverables are governed by separate agreements.
      </p>

      <h2>4. Confidentiality</h2>
      <p>
        Non-public information shared during engagements will be treated as
        confidential.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Liability is limited as defined in service agreements. We are not liable
        for indirect or consequential damages.
      </p>

      <h2>6. Governing Law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>7. Contact</h2>
      <p>Email: contact@valtixcube.com</p>
    </PolicyLayout>
  );
}
