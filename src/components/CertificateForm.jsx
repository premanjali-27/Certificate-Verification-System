const CertificateForm = ({ setVerified }) => {
  const handleVerify = (e) => {
    e.preventDefault();

    // Dummy verification logic
    setVerified({
      name: "Khushi Jain",
      course: "Full Stack Development",
      status: "Verified",
    });
  };

  return (
    <form onSubmit={handleVerify}>
      <input
        type="text"
        placeholder="Enter Certificate ID"
        required
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit">Verify</button>
    </form>
  );
};

export default CertificateForm;
