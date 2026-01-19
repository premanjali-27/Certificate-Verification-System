const CertificateResult = ({ verified }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Verification Result</h3>
      <p><strong>Name:</strong> {verified.name}</p>
      <p><strong>Course:</strong> {verified.course}</p>
      <p style={{ color: "green" }}>
        <strong>Status:</strong> {verified.status}
      </p>
    </div>
  );
};

export default CertificateResult;
