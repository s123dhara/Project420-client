import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project420Landing = () => {
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(null);
  const heroRef = useRef(null);
  const exploreRef = useRef(null);
  const collectionsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Loading Screen Animation
    const loadingTl = gsap.timeline({
      onComplete: () => 
        setLoading(false)
        });

    loadingTl
      .to('.loading-number', {
        textContent: 100,
        duration: 2,
        ease: 'power2.inOut',
        snap: { textContent: 1 },
        onUpdate: function() {
          this.targets()[0].textContent = Math.ceil(this.targets()[0].textContent) + '%';
        }
      })
      .to('.loading-bar', {
        scaleX: 1,
        duration: 2,
        ease: 'power2.inOut'
      }, 0)
      .to(loadingRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.3
      });

    return () => loadingTl.kill();
  }, []);

  useEffect(() => {
    if (loading) return;

    // Hero Section Timeline Animation: Logo → Headline → Subtext → CTA → Image
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTl
      // 1. Logo Animation
      .to('.nav-logo', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      })
      .to('.nav-menu-item', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08
      }, '-=0.4')
      .to('.nav-cta-btn', {
        opacity: 1,
        scale: 1,
        duration: 0.5
      }, '-=0.3')
      
      // 2. Headline Animation (staggered lines)
      .to('.hero-title-line', {
        yPercent: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power4.out'
      }, '-=0.2')
      
      // 3. Subtext Animation
      .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out'
      }, '-=0.5')
      
      // 4. CTA Buttons Animation
      .to('.hero-cta', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'back.out(1.4)'
      }, '-=0.4')
      
      // 5. Image Reveal Animation
      .to('.hero-image', {
        scale: 1,
        opacity: 1,
        duration: 1.3,
        ease: 'power2.out'
      }, '-=0.6')
      .to('.hero-image-border', {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
      }, '-=0.8')
      
      // 6. Scroll Indicator
      .to('.scroll-indicator', {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, '-=0.5');

    // Explore Section Scroll Animation
    gsap.from('.explore-card', {
      scrollTrigger: {
        trigger: exploreRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 80,
      rotation: 3,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Collections Section with Pin and Transform
    const collections = gsap.utils.toArray('.collection-item');
    collections.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        x: i % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    });

    // Testimonials Parallax
    gsap.to('.testimonial-card', {
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      yPercent: -20,
      ease: 'none'
    });

    // CTA Section Scale Animation
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(1.4)'
    });

    // Smooth scroll reveal for stats
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.4)'
    });

  }, [loading]);

  return (
    <div className="relative bg-[#0A0A0A] text-[#F5F5F0] overflow-hidden">
      {/* Loading Screen */}
      {loading && (
        <div 
          ref={loadingRef}
          className="fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center"
        >
          <div className="text-center">
            <div className="loading-number text-7xl md:text-9xl font-bold text-[#D4AF37] mb-8">
              0%
            </div>
            <div className="w-64 md:w-96 h-1 bg-[#2A2A2A] mx-auto overflow-hidden">
              <div className="loading-bar h-full bg-gradient-to-r from-[#D4AF37] to-[#F5F5F0] origin-left scale-x-0"></div>
            </div>
            <p className="mt-6 text-[#F5F5F0]/60 tracking-[0.3em] text-sm">PROJECT 420</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="nav-logo text-2xl font-bold tracking-tight opacity-0">
            <span className="text-[#D4AF37]">PROJECT</span>
            <span className="text-[#F5F5F0]">420</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm tracking-wide">
            <a href="#explore" className="nav-menu-item hover:text-[#D4AF37] transition-colors opacity-0">COLLECTIONS</a>
            <a href="#collections" className="nav-menu-item hover:text-[#D4AF37] transition-colors opacity-0">LOOKBOOK</a>
            <a href="#testimonials" className="nav-menu-item hover:text-[#D4AF37] transition-colors opacity-0">REVIEWS</a>
            <a href="#contact" className="nav-menu-item hover:text-[#D4AF37] transition-colors opacity-0">CONTACT</a>
          </div>
          <button className="nav-cta-btn px-6 py-2 bg-[#D4AF37] text-[#0A0A0A] font-semibold text-sm tracking-wide hover:bg-[#F5F5F0] transition-all opacity-0">
            SHOP NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#F5F5F0]/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="overflow-hidden mb-4">
              <h1 className="hero-title-line text-6xl md:text-8xl font-bold leading-none mb-2 opacity-0">
                REFINED
              </h1>
            </div>
            <div className="overflow-hidden mb-4">
              <h1 className="hero-title-line text-6xl md:text-8xl font-bold leading-none mb-2 opacity-0">
                <span className="text-[#D4AF37]">ELEGANCE</span>
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-line text-6xl md:text-8xl font-bold leading-none opacity-0">
                REDEFINED
              </h1>
            </div>
            
            <p className="hero-subtitle mt-8 text-lg md:text-xl text-[#F5F5F0]/70 max-w-lg leading-relaxed opacity-0">
              Discover the intersection of timeless craftsmanship and contemporary design. 
              Elevate your wardrobe with pieces that speak to sophistication.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="hero-cta px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm tracking-wider hover:bg-[#F5F5F0] transition-all transform hover:scale-105 opacity-0">
                EXPLORE COLLECTION
              </button>
              <button className="hero-cta px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-sm tracking-wider hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all opacity-0">
                WATCH FILM
              </button>
            </div>
          </div>

          <div className="relative hero-image opacity-0">
            <div className="aspect-[3/4] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl text-[#D4AF37]/20 font-bold">420</div>
                  <p className="text-[#F5F5F0]/40 tracking-[0.5em] text-sm mt-4">HERO IMAGE</p>
                </div>
              </div>
            </div>
            <div className="hero-image-border absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[#D4AF37] rounded-lg -z-10 opacity-0"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-0">
          <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item text-center p-8 bg-[#1A1A1A]/50 backdrop-blur border border-[#D4AF37]/20 rounded-lg">
            <div className="text-5xl font-bold text-[#D4AF37] mb-2">10K+</div>
            <div className="text-[#F5F5F0]/60 tracking-widest text-sm">HAPPY CLIENTS</div>
          </div>
          <div className="stat-item text-center p-8 bg-[#1A1A1A]/50 backdrop-blur border border-[#D4AF37]/20 rounded-lg">
            <div className="text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
            <div className="text-[#F5F5F0]/60 tracking-widest text-sm">PREMIUM PIECES</div>
          </div>
          <div className="stat-item text-center p-8 bg-[#1A1A1A]/50 backdrop-blur border border-[#D4AF37]/20 rounded-lg">
            <div className="text-5xl font-bold text-[#D4AF37] mb-2">50+</div>
            <div className="text-[#F5F5F0]/60 tracking-widest text-sm">COUNTRIES</div>
          </div>
          <div className="stat-item text-center p-8 bg-[#1A1A1A]/50 backdrop-blur border border-[#D4AF37]/20 rounded-lg">
            <div className="text-5xl font-bold text-[#D4AF37] mb-2">98%</div>
            <div className="text-[#F5F5F0]/60 tracking-widest text-sm">SATISFACTION</div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section ref={exploreRef} id="explore" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              EXPLORE <span className="text-[#D4AF37]">CATEGORIES</span>
            </h2>
            <p className="text-[#F5F5F0]/60 text-lg max-w-2xl mx-auto">
              Curated collections for the modern gentleman who values quality and style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="explore-card group cursor-pointer">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl text-[#D4AF37]/30 font-bold mb-4">01</div>
                    <p className="text-[#F5F5F0]/40 tracking-[0.3em] text-sm">TAILORED SUITS</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                  <h3 className="text-2xl font-bold mb-2">TAILORED SUITS</h3>
                  <p className="text-[#F5F5F0]/60 text-sm">Precision-cut masterpieces</p>
                </div>
              </div>
            </div>

            <div className="explore-card group cursor-pointer">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl text-[#D4AF37]/30 font-bold mb-4">02</div>
                    <p className="text-[#F5F5F0]/40 tracking-[0.3em] text-sm">CASUAL WEAR</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                  <h3 className="text-2xl font-bold mb-2">CASUAL ELEGANCE</h3>
                  <p className="text-[#F5F5F0]/60 text-sm">Effortless sophistication</p>
                </div>
              </div>
            </div>

            <div className="explore-card group cursor-pointer">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl text-[#D4AF37]/30 font-bold mb-4">03</div>
                    <p className="text-[#F5F5F0]/40 tracking-[0.3em] text-sm">ACCESSORIES</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                  <h3 className="text-2xl font-bold mb-2">ACCESSORIES</h3>
                  <p className="text-[#F5F5F0]/60 text-sm">Finishing touches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Lookbook */}
      <section ref={collectionsRef} id="collections" className="py-32 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              SIGNATURE <span className="text-[#D4AF37]">COLLECTION</span>
            </h2>
            <p className="text-[#F5F5F0]/60 text-lg max-w-2xl mx-auto">
              Each piece tells a story of craftsmanship and attention to detail
            </p>
          </div>

          <div className="space-y-24">
            <div className="collection-item grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl text-[#D4AF37]/20 font-bold">SS</div>
                    <p className="text-[#F5F5F0]/40 tracking-[0.5em] text-sm mt-4">SPRING/SUMMER</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[#D4AF37] text-sm tracking-[0.3em] mb-4">COLLECTION 2025</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">The Modern Gentleman</h3>
                <p className="text-[#F5F5F0]/70 text-lg mb-8 leading-relaxed">
                  Inspired by classic tailoring with a contemporary twist. This collection features 
                  premium fabrics, impeccable construction, and timeless silhouettes designed for 
                  the discerning modern man.
                </p>
                <button className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-sm tracking-wider hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all">
                  VIEW COLLECTION
                </button>
              </div>
            </div>

            <div className="collection-item grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="text-[#D4AF37] text-sm tracking-[0.3em] mb-4">ESSENTIALS</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Timeless Wardrobe</h3>
                <p className="text-[#F5F5F0]/70 text-lg mb-8 leading-relaxed">
                  Build your foundation with versatile pieces that transcend seasons and trends. 
                  Crafted from the finest materials, these essentials are designed to last a lifetime.
                </p>
                <button className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-sm tracking-wider hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all">
                  SHOP ESSENTIALS
                </button>
              </div>
              <div className="order-1 md:order-2 aspect-square bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl text-[#D4AF37]/20 font-bold">ES</div>
                    <p className="text-[#F5F5F0]/40 tracking-[0.5em] text-sm mt-4">ESSENTIALS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              CLIENT <span className="text-[#D4AF37]">STORIES</span>
            </h2>
            <p className="text-[#F5F5F0]/60 text-lg max-w-2xl mx-auto">
              Hear from those who've experienced the PROJECT 420 difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-[#1A1A1A]/50 backdrop-blur border border-[#D4AF37]/20 rounded-lg p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#D4AF37] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#F5F5F0]/80 text-lg mb-8 leading-relaxed">
                "The craftsmanship is unparalleled. Every stitch speaks to the dedication and 
                attention to detail that goes into each piece."
              </p>
              <div>
                <div className="font-bold text-[#D4AF37]">Marcus Chen</div>
                <div className="text-[#F5F5F0]/60 text-sm">CEO, Tech Innovations</div>
              </div>
            </div>

            <div className="testimonial-card bg-[#1A1A1A]/50 backdrop-blur border border-[#D4AF37]/20 rounded-lg p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#D4AF37] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#F5F5F0]/80 text-lg mb-8 leading-relaxed">
                "PROJECT 420 has completely transformed my wardrobe. The fit, quality, and style 
                are exactly what I've been looking for."
              </p>
              <div>
                <div className="font-bold text-[#D4AF37]">David Rodriguez</div>
                <div className="text-[#F5F5F0]/60 text-sm">Creative Director</div>
              </div>
            </div>

            <div className="testimonial-card bg-[#1A1A1A]/50 backdrop-blur border border-[#D4AF37]/20 rounded-lg p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#D4AF37] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#F5F5F0]/80 text-lg mb-8 leading-relaxed">
                "From the first wear, you can feel the difference. These aren't just clothes – 
                they're investments in your personal style."
              </p>
              <div>
                <div className="font-bold text-[#D4AF37]">James Anderson</div>
                <div className="text-[#F5F5F0]/60 text-sm">Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#F5F5F0] rounded-2xl p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-[#0A0A0A] mb-6">
                READY TO ELEVATE YOUR STYLE?
              </h2>
              <p className="text-[#0A0A0A]/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of discerning gentlemen who've discovered the PROJECT 420 difference. 
                Your wardrobe transformation begins here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-[#0A0A0A] text-[#F5F5F0] font-bold text-sm tracking-wider hover:bg-[#1A1A1A] transition-all transform hover:scale-105">
                  START SHOPPING
                </button>
                <button className="px-10 py-5 border-2 border-[#0A0A0A] text-[#0A0A0A] font-bold text-sm tracking-wider hover:bg-[#0A0A0A] hover:text-[#F5F5F0] transition-all">
                  BOOK CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            JOIN THE <span className="text-[#D4AF37]">ELITE</span>
          </h3>
          <p className="text-[#F5F5F0]/60 text-lg mb-10">
            Subscribe for exclusive access to new collections, styling tips, and members-only offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-[#0A0A0A] border border-[#D4AF37]/30 rounded text-[#F5F5F0] placeholder:text-[#F5F5F0]/40 focus:outline-none focus:border-[#D4AF37]"
            />
            <button className="px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm tracking-wider hover:bg-[#F5F5F0] transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0A0A0A] border-t border-[#D4AF37]/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6">
                <span className="text-[#D4AF37]">PROJECT</span>
                <span className="text-[#F5F5F0]">420</span>
              </div>
              <p className="text-[#F5F5F0]/60 text-sm leading-relaxed">
                Redefining menswear through timeless design and exceptional craftsmanship.
              </p>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-bold mb-4 tracking-wide">SHOP</h4>
              <ul className="space-y-2 text-[#F5F5F0]/60 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Suits</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Casual</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Accessories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-bold mb-4 tracking-wide">COMPANY</h4>
              <ul className="space-y-2 text-[#F5F5F0]/60 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Craftsmanship</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-bold mb-4 tracking-wide">SUPPORT</h4>
              <ul className="space-y-2 text-[#F5F5F0]/60 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F5F5F0]/40 text-sm">
              © 2025 PROJECT 420. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#F5F5F0]/60 hover:text-[#D4AF37] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-[#F5F5F0]/60 hover:text-[#D4AF37] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-[#F5F5F0]/60 hover:text-[#D4AF37] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 
4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project420Landing;