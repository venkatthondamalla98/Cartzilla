import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Mail, Package, CreditCard, Tag, Heart, Smile } from "lucide-react"

function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/')

  const navigate = (path) => {
    window.location.hash = path
    setCurrentPath(path)
  }

  window.addEventListener('hashchange', () => {
    setCurrentPath(window.location.hash.slice(1) || '/')
  })

  return currentPath === '/signin' ? <SignIn navigate={navigate} /> : <SignUp navigate={navigate} />
}

function SignUp({ navigate }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [privacy, setPrivacy] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = () => {
    const newErrors = {}
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address"
    }
    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }
    if (!privacy) {
      newErrors.privacy = "You must accept the Privacy Policy"
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      alert("🎉 Account Created! Welcome to Cartzilla!")
      setEmail("")
      setPassword("")
      setPrivacy(false)
    }
  }

  const benefits = [
    { icon: Mail, text: "Subscribe to your favorite products" },
    { icon: Package, text: "View and manage your orders and wishlist" },
    { icon: CreditCard, text: "Earn rewards for future purchases" },
    { icon: Tag, text: "Receive exclusive offers and discounts" },
    { icon: Heart, text: "Create multiple wishlists" },
    { icon: Smile, text: "Pay for purchases by installments" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-7xl grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="p-8 md:p-12 lg:p-14">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/30">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Cartzilla</h1>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Create an account</h2>
            <p className="text-base text-gray-600">
              I already have an account.{" "}
              <button onClick={() => navigate('/signin')} className="text-blue-600 hover:text-blue-800 font-medium transition-colors underline-offset-2 hover:underline">
                Sign in
              </button>
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <Label htmlFor="email" className="text-base font-semibold text-gray-700 mb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-12 text-base border-2 border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 rounded-lg transition-all"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 font-medium">⚠ {errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password" className="text-base font-semibold text-gray-700 mb-2">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full h-12 text-base border-2 border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 rounded-lg transition-all"
              />
              <p className="text-gray-400 text-sm mt-2 font-medium">Minimum 8 characters</p>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 font-medium">⚠ {errors.password}</p>
              )}
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="privacy"
                checked={privacy}
                onCheckedChange={(checked) => setPrivacy(checked)}
                className="mt-1 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
              />
              <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                I have read and accept the{" "}
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium underline-offset-2 hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.privacy && (
              <p className="text-red-500 text-sm -mt-2 font-medium">⚠ {errors.privacy}</p>
            )}

            <Button
              onClick={handleSubmit}
              className="w-full h-12 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white text-base font-semibold rounded-xl shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all hover:-translate-y-0.5"
            >
              Create an account →
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400 mb-4 font-medium">or continue with</p>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                className="flex-1 h-11 border-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 h-11 border-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 h-11 border-2 hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#000000">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Apple
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Need help?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium underline-offset-2 hover:underline">
              Contact support
            </a>
          </p>
        </div>

        {/* Right Side - Benefits */}
        <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 tracking-tight">
            Cartzilla account benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={i}
                  className="bg-white/90 backdrop-blur-sm border-0 shadow-sm hover:shadow-xl p-6 rounded-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {benefit.text}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// Sign In Page
function SignIn({ navigate }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = () => {
    const newErrors = {}
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address"
    }
    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length === 0) {
      alert("✅ Successfully signed in!")
      setEmail("")
      setPassword("")
      setRemember(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden p-8 md:p-12">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/30">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Cartzilla</h1>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Welcome back</h2>
          <p className="text-base text-gray-600">
            Don't have an account?{" "}
            <button onClick={() => navigate('/')} className="text-blue-600 hover:text-blue-800 font-medium transition-colors underline-offset-2 hover:underline">
              Sign up
            </button>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <Label htmlFor="signin-email" className="text-base font-semibold text-gray-700 mb-2">
              Email
            </Label>
            <Input
              id="signin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-12 text-base border-2 border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 rounded-lg transition-all"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2 font-medium">⚠ {errors.email}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor="signin-password" className="text-base font-semibold text-gray-700">
                Password
              </Label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium underline-offset-2 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input
              id="signin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-12 text-base border-2 border-gray-200 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 rounded-lg transition-all"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2 font-medium">⚠ {errors.password}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id="remember"
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked)}
              className="data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
            />
            <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
              Remember me
            </label>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white text-base font-semibold rounded-xl shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all hover:-translate-y-0.5"
          >
            Sign in →
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-4 font-medium">or continue with</p>
          <div className="flex gap-4">
            <Button 
              variant="outline"
              className="flex-1 h-11 border-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </Button>
            
            <Button 
              variant="outline"
              className="flex-1 h-11 border-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Button>
            
            <Button 
              variant="outline"
              className="flex-1 h-11 border-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Need help?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium underline-offset-2 hover:underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  )
}

export default Router