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
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
