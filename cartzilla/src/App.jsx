import { useState, useEffect } from "react"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.slice(1) || "/"
  )

  const navigate = (path) => {
    window.location.hash = path
    setCurrentPath(path)
  }

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || "/")
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <>
      {currentPath === "/signin" ? (
        <SignIn navigate={navigate} />
      ) : (
        <SignUp navigate={navigate} />
      )}
    </>
  )
}