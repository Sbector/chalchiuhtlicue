import './globals.css'

export const metadata = {
  title: 'chalchiuhtlicue',
  description: 'fotogrametría de la diosa de la lluvia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="relative">{children}</body>
    </html>
  )
}
