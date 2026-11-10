import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Dock } from "@/components/Dock";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "MeetTheDev | Ibrahim Aftab — Senior Frontend Engineer & Web Developer",
  description:
    "Official developer portfolio for Ibrahim Aftab (MeetTheDev). Senior Frontend Engineer & Web Developer specializing in JavaScript (ES6+), React 18, Next.js 14, Semantic HTML5, Modern CSS3, Tailwind CSS, Supabase, fluid Framer Motion animations, and sub-second Core Web Vitals.",
  keywords: [
    "Ibrahim Aftab",
    "MeetTheDev",
    "Senior Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "HTML5 CSS3",
    "Tailwind CSS",
    "Supabase Developer",
    "Web Engineering",
    "Shadcn UI",
    "Framer Motion",
    "UI UX Developer",
  ],
  authors: [{ name: "Ibrahim Aftab", url: "https://github.com/ibrahimfazil-511" }],
  icons: {
    icon: "/meetthedev-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('meetthedev-theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-offwhite dark:bg-brand-obsidian text-zinc-900 dark:text-zinc-100 antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black relative overflow-x-hidden">
        <ThemeProvider>
          {/* Ambient monochrome background studio illumination */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-white/[0.05] dark:bg-white/[0.035] rounded-full blur-[140px] animate-pulse-slow" />
            <div className="absolute top-1/3 -right-40 w-96 h-96 bg-zinc-400/[0.04] dark:bg-white/[0.02] rounded-full blur-[140px]" />
            <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-zinc-300/[0.04] dark:bg-white/[0.02] rounded-full blur-[128px]" />
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <Dock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
