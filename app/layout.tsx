import '../src/styles/style.scss';

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://letsechoapp.com/" />
        <meta property="og:title" content="Letsecho" />
        <meta property="og:description" content="Discover spontaneous activities, meet people, and make meaningful connections." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css?family=Heebo:400,700|Oxygen:700" rel="stylesheet" />
        <script src="https://unpkg.com/scrollreveal@4.0.5/dist/scrollreveal.min.js"></script>
      </head>
      <body>{children}</body>
      </html>
    )
  }