import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 border-b border-neutral-700/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors uppercase tracking-wider">Shirts</a>
            <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors uppercase tracking-wider">Suits</a>
            <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors uppercase tracking-wider">Wedding</a>
            <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors uppercase tracking-wider">Accessories</a>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-3xl font-bold tracking-tighter text-white">PROJECT<span className="text-amber-500">420</span></h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-neutral-300 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-neutral-300 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="bg-amber-500 text-black px-4 py-2 text-sm font-semibold hover:bg-amber-400 transition-colors">
              CART (0)
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* <img 
            src="https://i.pinimg.com/736x/b4/3b/bd/b43bbd59739ca58747de0f0097d19bb5.jpg" 
            alt="Premium Menswear" 
            className="w-full h-full object-cover"
          /> */}
          <img 
            src="bg2.jpeg" 
            alt="Premium Menswear" 
            className="w-full h-full object-cover"
          />
          {/* <img 
            src="https://instagram.fccu3-1.fna.fbcdn.net/v/t51.82787-15/575243187_18492682897073010_2498052468084485075_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=107&ig_cache_key=Mzc1NzQ4ODkwNzg1MzQ4NDQ4Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTY4My5zZHIuQzMifQ%3D%3D&_nc_ohc=OXf3sRpWlEwQ7kNvwHiltMQ&_nc_oc=AdnLSxh7FP5t8aoKyq9bLV1b7vwNk4T5-3RiM9udtelBCJYlohbWgodSn3jrQkRwDH8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu3-1.fna&_nc_gid=tjhnE_TawLhJEWhbopLEFA&oh=00_Afq65apzx4CqVCkuoC1P2lvlCBAN3UPcal4waO8aHLS34Q&oe=696B0C85" 
            alt="Premium Menswear" 
            className="w-full h-full object-cover"
          /> */}
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest border border-amber-500 px-4 py-2">Premium Menswear</span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-bold leading-none text-white">
                ELEVATE YOUR<br />
                <span className="text-amber-500">PRESENCE</span>
              </h1>
              <p className="text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
                Discover Project420's exclusive collection of premium formal and wedding wear. 
                Crafted for men who command attention.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <button className="bg-amber-500 text-black px-10 py-4 text-sm font-bold tracking-wider hover:bg-amber-400 transition-all duration-300 transform hover:scale-105">
                  SHOP COLLECTION
                </button>
                <button className="border-2 border-white text-white px-10 py-4 text-sm font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                  LOOKBOOK
                </button>
              </div>
              <div className="flex items-center justify-center space-x-8 text-neutral-300 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span>10,000+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">SHOP BY CATEGORY</h2>
            <p className="text-neutral-600 text-lg">Discover our curated collections</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "FORMAL SHIRTS", subtitle: "Business Ready", img: "https://i.pinimg.com/736x/e5/6f/3a/e56f3a8c8f8e8f8e8f8e8f8e8f8e8f8e.jpg" },
              { title: "WEDDING SUITS", subtitle: "Special Occasions", img: "https://i.pinimg.com/736x/b4/3b/bd/b43bbd59739ca58747de0f0097d19bb5.jpg" },
              { title: "CASUAL WEAR", subtitle: "Weekend Style", img: "https://i.pinimg.com/736x/a1/2b/3c/a12b3c4d5e6f7g8h9i0j1k2l3m4n5o6p.jpg" }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer relative overflow-hidden">
                <div className="bg-neutral-200 h-96 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm uppercase tracking-widest text-amber-500 mb-2">{category.subtitle}</p>
                    <h3 className="text-3xl font-bold">{category.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-5xl font-bold text-white">BEST SELLERS</h2>
            <button className="text-amber-500 text-sm uppercase tracking-wider border-b-2 border-amber-500 hover:text-amber-400 transition-colors">
              View All
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Classic White Shirt", price: "₹2,999", originalPrice: "₹3,999" },
              { name: "Navy Blazer", price: "₹7,999", originalPrice: null },
              { name: "Charcoal Suit", price: "₹12,999", originalPrice: "₹15,999" },
              { name: "Premium Polo", price: "₹1,999", originalPrice: null }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-neutral-800 h-96 mb-4 relative overflow-hidden">
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold uppercase">Sale</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <h3 className="font-semibold mb-2 text-white uppercase tracking-wider">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-amber-500 text-xl">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-neutral-500 line-through text-sm">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-neutral-200 h-96 md:h-[500px]"></div>
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-black">CRAFTED FOR<br />EXCELLENCE</h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              At Project420, we believe every man deserves to look and feel exceptional. 
              Our premium collection combines timeless design with modern craftsmanship.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 mt-2"></div>
                <div>
                  <h4 className="font-bold text-black mb-1">Premium Materials</h4>
                  <p className="text-neutral-600">Finest fabrics sourced from renowned mills</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 mt-2"></div>
                <div>
                  <h4 className="font-bold text-black mb-1">Expert Tailoring</h4>
                  <p className="text-neutral-600">Precision cut for the perfect fit</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-amber-500 mt-2"></div>
                <div>
                  <h4 className="font-bold text-black mb-1">Timeless Design</h4>
                  <p className="text-neutral-600">Classic styles that never go out of fashion</p>
                </div>
              </div>
            </div>
            <button className="bg-black text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-neutral-800 transition-colors">
              OUR STORY
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">JOIN THE CLUB</h2>
          <p className="text-neutral-400 mb-8">Get exclusive access to new collections and special offers</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:border-amber-500"
            />
            <button className="bg-amber-500 text-black px-8 py-4 text-sm font-bold tracking-wider hover:bg-amber-400 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">PROJECT<span className="text-amber-500">420</span></h3>
              <p className="text-neutral-400 text-sm">
                Premium menswear for the modern gentleman.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Shirts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wedding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-neutral-400 text-sm">© 2024 Project420. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App