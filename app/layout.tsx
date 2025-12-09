// /app/layout.tsx  — ZASTĄP CAŁY PLIK TYM
import "./globals.css";

export const metadata = {
  title: "Kierownik — Portfolio",
  description: "Montaż. Kolor. Ruch. Neonowe portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />

        {/* CRITICAL INLINE CSS — natychmiast wymusza tło i font jeśli globals.css nie zadziała */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html,body{background:#000!important;color:#e6eef6!important;min-height:100%!important;}
            body{font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial !important;}
            .animated-bg{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
            main, header, section, footer, .container-max, .card, .project-box {position:relative; z-index:1;}
          `
        }} />
      </head>

      <body className="bg-black text-white antialiased">
        {/* animated background with extra blobs */}
        <div className="film-grain" aria-hidden="true" />
        <div className="animated-bg" aria-hidden="true">
          <div className="blob-3" />
          <div className="center-glow" />
        </div>

        

        {children}
      </body>
    </html>
  );
}
