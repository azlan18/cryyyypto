import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const CompanyPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">About CryptoSite</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At CryptoSite, we're dedicated to making cryptocurrency accessible to everyone. Our mission is to provide a
            secure, user-friendly platform for buying, selling, and managing digital assets.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We're a diverse group of blockchain enthusiasts, financial experts, and technology innovators. Together,
            we're working to shape the future of finance.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>We prioritize the security of our users' assets and data above all else.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>We're constantly exploring new technologies to improve our services.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transparency</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>We believe in open communication with our users and the crypto community.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CompanyPage

