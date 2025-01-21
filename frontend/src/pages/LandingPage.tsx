import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 to-primary-slate-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Yo this is dancepool here</h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              Your gateway to the world of cryptocurrencies
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg" className="mr-4">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-black">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Why Choose CryptoSite?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Secure Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Keep your cryptocurrencies safe with our state-of-the-art wallet technology.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Real-time Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Execute trades instantly with our advanced trading platform.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Expert Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Stay informed with our curated news and expert analysis.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

