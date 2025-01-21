const Footer = () => {
    return (
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-muted-foreground">© 2023 CryptoSite. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  