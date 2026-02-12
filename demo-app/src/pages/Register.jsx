function Register() {
  let name = "";
  let email = "";
  let password = "";

  function handleRegister(e) {
    e.preventDefault();
    alert("Registered");
  }

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleRegister} style={{ width: "300px", padding: "20px", border: "1px solid black" }}>
        <h2>Register</h2>

        <input placeholder="Name" onChange={(e) => (name = e.target.value)} />
        <br /><br />

        <input placeholder="Email" onChange={(e) => (email = e.target.value)} />
        <br /><br />

        <input type="password" placeholder="Password" onChange={(e) => (password = e.target.value)} />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
