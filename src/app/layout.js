import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata = {
  title: "Manish Kumar Akela | Full Stack Web Developer & CSE Student",
  description: "Manish Kumar Akela, final-year CSE student at GKV Haridwar, India. Passionate full stack developer with strong skills in web development and problem-solving.",
  keywords: "Manish Kumar Akela, Software Engineer, Full Stack Developer, GKV Haridwar, CSE Student, Manish Akela Portfolio",
  openGraph: {
    title: 'Manish Kumar Akela | Full Stack Developer',
    description: 'Explore projects and skills of Manish Kumar Akela, a final year CSE student at GKV Haridwar.',
    url: 'https://manishdev.info',
    siteName: 'Manish Portfolio',
    type: 'website',
    images: [
      {
        url: '/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'Manish Portfolio Preview Image',
      },
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manish Kumar Akela",
  alternateName: ["Manish Yadav", "Manish Kumar", "Manish"],
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "GKV Haridwar"
  },
  url: "https://manishdev.info",
  sameAs: [
    "https://x.com/manishh_dev",
    "https://github.com/manish-gkv",
    "https://in.linkedin.com/in/manish-kumar-akela-104731213",
    "https://www.instagram.com/manish16.10/"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salempur",
    addressRegion: "Vaishali",
    addressCountry: "India"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={``}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
