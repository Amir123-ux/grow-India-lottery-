export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: "20px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <a href="/" style={{ marginRight: "10px" }}>Home</a>
          <a href="/register" style={{ marginRight: "10px" }}>Register</a>
          <a href="/login" style={{ marginRight: "10px" }}>Login</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
