import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">PROJECT420</h1>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-gray-600 transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Shirts</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Polos</a>
            <a href="#" className="hover:text-gray-600 transition-colors">T-Shirts</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Sale</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-sm uppercase tracking-wider">Search</button>
            <button className="text-sm uppercase tracking-wider">Account</button>
            <button className="bg-black text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
              Cart (0)
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 h-screen flex items-center bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-6">
              ELEVATE<br />
              YOUR<br />
              STYLE
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Discover premium menswear crafted for the modern gentleman. 
              Where sophistication meets contemporary design.
            </p>
            <button className="bg-black text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
              Shop Collection
            </button>
          </div>
          <div className="relative">
            <div className="bg-gray-200 h-96 md:h-[600px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm uppercase tracking-wider">New Collection</p>
                <h3 className="text-2xl font-bold">Premium Shirts</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">SHOP BY CATEGORY</h2>
            <p className="text-gray-600">Curated collections for every occasion</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "FORMAL SHIRTS", subtitle: "Business Ready", image: "formal" },
              { title: "CASUAL WEAR", subtitle: "Weekend Vibes", image: "casual" },
              { title: "PREMIUM POLOS", subtitle: "Smart Casual", image: "polo" }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-100 h-80 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-sm uppercase tracking-wider text-gray-600">{category.subtitle}</p>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">SIGNATURE<br />COLLECTION</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Meticulously crafted pieces that define modern masculinity. 
                Each garment tells a story of precision and style.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-sm uppercase tracking-wider">Premium Cotton Blend</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-sm uppercase tracking-wider">Tailored Fit</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-sm uppercase tracking-wider">Hand-Finished Details</span>
                </div>
              </div>
              <button className="border border-white text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                Explore Collection
              </button>
            </div>
            <div className="bg-gray-800 h-96 relative">
              <div className="absolute top-6 right-6 bg-white text-black px-3 py-1 text-xs uppercase tracking-wider">
                New
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold">BEST SELLERS</h2>
            <button className="text-sm uppercase tracking-wider border-b border-black hover:border-gray-400 transition-colors">
              View All
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Classic White Shirt", price: "₹2,999", originalPrice: "₹3,999" },
              { name: "Navy Polo", price: "₹1,999", originalPrice: null },
              { name: "Charcoal Blazer", price: "₹7,999", originalPrice: "₹9,999" },
              { name: "Cotton T-Shirt", price: "₹999", originalPrice: null }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-100 h-80 mb-4 relative overflow-hidden">
                  <div className="absolute top-4 left-4">
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-2 py-1 text-xs uppercase">Sale</span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
                </div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wider">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">STAY UPDATED</h2>
          <p className="text-gray-600 mb-8">Get the latest updates on new arrivals and exclusive offers</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
            <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">PROJECT420</h3>
              <p className="text-gray-400 text-sm">
                Redefining men's fashion with premium quality and contemporary design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Polos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Project420. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App