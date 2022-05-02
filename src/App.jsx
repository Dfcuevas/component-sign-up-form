import "./App.css";

function App() {
  return (
    <main className="container">
      <section className="info__section">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className="form__section">
        <div className="form__info">
          <p>
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </p>
        </div>
        <form className="form__container">
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="First Name"
          />
          <input
            type="text"
            name="user_lastName"
            id="user_lastName"
            placeholder="Last Name"
          />
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Email Address"
          />
          <input
            type="password"
            name="user_password"
            id="user_password"
            placeholder="Password"
          />
          <button type="submit">Claim your free trial</button>
          <p className="footer">
            By clicking the button, you are agreeing to our{" "}
            <span className="red-text">Terms and Services</span>
          </p>
        </form>
      </section>
    </main>
  );
}

export default App;
