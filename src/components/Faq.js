import React from 'react';
import Helmet from 'react-helmet';

export const Faq = () => {
  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta property="og:title" content="Terms" />
        <meta property="og:description" content="Discover spontaneous activities, meet people, and make meaningful connections." />
      </Helmet>
      <main>
        <article>
          <h1 className="specialHeadline">FAQ</h1>
          <h2>What's Letsecho app?</h2>
          <p>Letsecho allows you to make friends spontaneously in your area by attending activities together. Discover and join gatherings with people nearby.</p>
          <p>Create gatherings using curated suggestions based on location, day, and time.</p>
          <h2>Contact Us</h2>
          <p>If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at info@letsechoapp.com.</p>
        </article>
      </main>
    </>
  )
}
