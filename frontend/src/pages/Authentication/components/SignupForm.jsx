import LinkedinFullLogo from "./linkedinFullLogo";

const SignupForm = () => {
  return (
    <div className="container full-width">
      <div className="header">
        <LinkedinFullLogo />
      </div>
      <h1>Make the most of your professional life</h1>
      <div className="signup-form">
        <form action="#">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <div className="flex column center">
            <div className="checkbox-container">
              <label htmlFor="agree">
                I agree to the LinkedIn User Agreement, Privacy Policy, and
                Cookie Policy
              </label>
            </div>
            <button type="submit">Agree & Join</button>
          </div>
        </form>
        <p>
          Already on LinkedIn? <a href="#">Sign in</a>
        </p>
      </div>
      <div className="footer">
        <p>© LinkedIn 2024</p>
        <a href="#">Legal</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  );
};

export default SignupForm;
