import '../src/styles/style.scss';

export const metadata = {
  title: 'Letsecho',
  description: 'Discover spontaneous activities, meet people, and make meaningful connections.',
  metadataBase: new URL('https://letsechoapp.com'),
  openGraph: {
    site_name: 'Letsecho',
    type: 'website'
  }
}

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
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