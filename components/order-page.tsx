'use client'

import { useState } from 'react'
import { Plus, Minus, ShoppingCart, X, Pizza, Link } from 'lucide-react'
import { useNavigate } from 'react-router-dom' 

type FoodItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

type CartItem = FoodItem & { quantity: number }

const foodItems: FoodItem[] = [
  { id: 1, name: "Chicken Tikka Masala(500ml)", description: "Tender chicken marinated in spices, grilled to perfection, and served in a tangy, creamy tomato-based sauce.", price: 260, image: "/chicked_tikka_masala.webp?height=200&width=200"},
  { id: 2, name: "Dal Makhni(500ml)", description: "Rich and creamy lentil curry slow-cooked with butter, cream, and fragrant spices, offering a classic North Indian indulgence.", price: 220, image: "/dal_m.webp?height=200&width=200" },
  { id: 3, name: "Rice", description: "Fluffy, steamed grains of rice, a versatile side that complements any meal with its light and neutral flavor.", price: 120, image: "/rice.jpg?height=200&width=200" },
  { id: 4, name: "Paneer Lababdar(500ml)", description: "Soft paneer cubes simmered in a luscious, mildly spiced tomato and cream gravy, offering a rich and velvety taste.", price: 230, image: "/paneer_labbadar.jpg?height=200&width=200"},
  { id: 5, name: "Mix Veg(500ml)", description: "Colorful medley of seasonal vegetables cooked in aromatic spices for a wholesome and flavorful dish", price: 200, image: "/mix_veg.jpg?height=200&width=200" },
]

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const navigate = useNavigate() 

  const addToCart = (item: FoodItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      }
      return prevCart.filter(cartItem => cartItem.id !== itemId)
    })
  }

  const getItemQuantity = (itemId: number) => {
    const item = cart.find(cartItem => cartItem.id === itemId)
    return item ? item.quantity : 0
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your order!')
    setCart([])            
    setIsCheckingOut(false) 
    setIsCartOpen(false)   
    navigate('/')         
  }

  return (
    <div className="min-h-screen bg-pink-50 relative">
     <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
           
            <Pizza className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold text-xl">LeftoverLuxe</span>
           <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-pink-100 text-pink-700 p-2 rounded-full hover:bg-pink-200 transition duration-300 relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </header>
        
        <main>
          <h2 className="text-2xl font-semibold mb-4 text-pink-700">Menu</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {foodItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-pink-100">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-600 font-bold">₹{item.price.toFixed(2)}</span>
                    {getItemQuantity(item.id) === 0 ? (
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full hover:bg-pink-200 transition duration-300"
                      >
                        <Plus className="inline-block mr-1 h-4 w-4" />
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center bg-pink-100 rounded-full">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-pink-700 px-2 py-1 rounded-l-full hover:bg-pink-200 transition duration-300"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2 text-pink-700">{getItemQuantity(item.id)}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="text-pink-700 px-2 py-1 rounded-r-full hover:bg-pink-200 transition duration-300"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-pink-700">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4 mb-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center border-b border-pink-100 pb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">₹{item.price.toFixed(2)} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center bg-pink-100 rounded-full">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-pink-700 px-2 py-1 rounded-l-full hover:bg-pink-200 transition duration-300"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2 text-pink-700">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="text-pink-700 px-2 py-1 rounded-r-full hover:bg-pink-200 transition duration-300"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-xl font-bold mb-4 text-pink-700">
                  Total: ₹{getTotalPrice()}
                </div>
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-pink-100 text-pink-700 py-2 rounded-full hover:bg-pink-200 transition duration-300"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
            
            {isCheckingOut && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-pink-700">Checkout</h3>
                <form onSubmit={handleCheckout}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-pink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                    <textarea
                      id="address"
                      className="w-full px-3 py-2 border border-pink-100 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-pink-100 text-pink-700 py-2 rounded-full hover:bg-pink-200 transition duration-300"
                  >
                    Complete Order
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    
    </div>
  )
}
