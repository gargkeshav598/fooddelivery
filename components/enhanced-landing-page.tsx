'use client'
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Pizza, DollarSign, Truck, ThumbsUp, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import RetroGrid from "@/components/ui/retro-grid";
import { useNavigate } from 'react-router-dom';

export const EnhancedLandingPageComponent = ({ windowWidth }: { windowWidth: number }) => {
  const isMobile = windowWidth < 768;
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/order');
  };

  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="landing-page">
      <header className={`px-4 lg:px-6 h-16 flex items-center fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link className="flex items-center justify-center" href="#">
            <Pizza className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold text-xl">LeftoverLuxe</span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#menu">
              Menu
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
              Contact
            </Link>
          </nav>
          <Button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-40 p-4"
        >
          <nav className="flex flex-col gap-4">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#menu">
              Menu
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
      <main className="flex-1 pt-16">
        <section className="hero-section">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
       Food Delivered Economically
      </span>
 
      <RetroGrid />
    </div>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enjoy gourmet party food at a fraction of the cost. Sustainable, affordable, and oh-so-tasty!
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={handleRedirect} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose LeftoverLuxe?</h2>
            <div className="grid gap-6 items-center md:grid-cols-3">
              {[
                { icon: DollarSign, title: "Budget-Friendly", description: "Enjoy high-quality food at a fraction of the original price." },
                { icon: Truck, title: "Fast Delivery", description: "Get your food delivered quickly while it's still fresh and delicious." },
                { icon: ThumbsUp, title: "Eco-Friendly", description: "Reduce food waste and support sustainable consumption." }
              ].map((feature, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-none shadow-lg">
                    <CardHeader>
                      <feature.icon className="w-12 h-12 mb-4 text-primary" />
                      <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 items-center md:grid-cols-3">
              {[
                { step: 1, title: "Browse Menu", description: "Check out our daily selection of leftover party food." },
                { step: 2, title: "Place Order", description: "Select your favorites and add them to your cart." },
                { step: 3, title: "Enjoy!", description: "Receive your delicious, budget-friendly meal." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Indulge?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join LeftoverLuxe today and start enjoying gourmet meals at amazing prices!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our terms and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <Pizza className="h-6 w-6 text-primary" />
              <span className="font-bold">LeftoverLuxe</span>
            </div>
            <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:underline underline-offset-4" href="#">
                FAQ
              </Link>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 LeftoverLuxe. All rights reserved.
          </div>
        </div>
      </footer>
      <style jsx>{`
        .landing-page {
          text-align: center;
          padding: 20px;
        }
        .main-title {
          font-size: ${isMobile ? '2rem' : '3rem'};
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: ${isMobile ? '1rem' : '1.2rem'};
          line-height: 1.5;
          margin-bottom: 20px;
        }
        .button-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .order-button, .learn-more-button {
          padding: 10px 20px;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .order-button {
          background-color: #8a2be2;
          color: white;
        }
        .learn-more-button {
          background-color: #f8f8f8;
          color: #333;
        }
        .why-choose {
          font-size: ${isMobile ? '1.5rem' : '2rem'};
          margin-top: 30px;
        }
        .hero-section {
          background-image: url('/img.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          padding: 3rem 1rem;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding: 6rem 1rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-section {
            padding: 8rem 1rem;
          }
        }

        @media (min-width: 1280px) {
          .hero-section {
            padding: 12rem 1rem;
          }
        }
      `}</style>
    </div>
  )
}