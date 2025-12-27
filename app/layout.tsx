import "./globals.css";

export const metadata = {
  title: "GoldFrame — Bartosz Ciszek",
  description: "Cinematic post-production, color grading, storytelling",

  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/favicon/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/favicon/android-chrome-512x512.png" }
    ]
  },

  manifest: "/favicon/site.webmanifest"
};

export const viewport = {
  themeColor: "#0f0f10"
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* CRITICAL CSS – wymusza tło, font i glow zanim załaduje się reszta */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html,body{background:#0f0f10!important;color:#e6eef6!important;min-height:100%!important;}
              body{font-family:'Inter',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial!important;}
              .animated-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
              main,header,section,footer,.container-max,.card,.project-box{position:relative;z-index:1;}
            `
          }}
        />
      </head>

      <body className="bg-[#0f0f10] text-white antialiased overflow-x-hidden">
        {/* BACKGROUND GLOW */}
        <div className="animated-bg" aria-hidden>
          <div className="blob-3" />
          <div className="center-glow" />
        </div>

        {children}
      </body>
    </html>
  );
}
