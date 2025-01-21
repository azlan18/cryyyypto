import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const NewsPage = () => {
  // Dummy news data
  const newsItems = [
    {
      id: 1,
      title: "Bitcoin Reaches New All-Time High",
      description: "Bitcoin surpasses $100,000 for the first time in history.",
      date: "2023-06-15",
    },
    {
      id: 2,
      title: "Ethereum 2.0 Launch Date Announced",
      description: "Ethereum Foundation sets a date for the highly anticipated Ethereum 2.0 upgrade.",
      date: "2023-06-14",
    },
    {
      id: 3,
      title: "New Cryptocurrency Regulation Proposed",
      description: "Government officials propose new regulations for cryptocurrency exchanges.",
      date: "2023-06-13",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Crypto News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default NewsPage

