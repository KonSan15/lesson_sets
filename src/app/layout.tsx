// Path: src\app

import './globals.css';
import 'katex/dist/katex.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the base path from environment or default to empty string
  const basePath = process.env.GITHUB_ACTIONS ? '/lesson-sets' : '';
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add base tag with correct path */}
        <base href={`${basePath}/`} />
        {/* Ensure CSS is loaded with correct path */}
        <link rel="stylesheet" href={`${basePath}/globals.css`} />
      </head>
      <body className="min-h-screen bg-gray-950">
        {children}
      </body>
    </html>
  );
}