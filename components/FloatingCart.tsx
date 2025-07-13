"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, X, Plus, Minus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./CartProvider"
import Image from "next/image"
import { Input } from "@/components/ui/input" // Assuming Input component is available from shadcn/ui
import { Label } from "@/components/ui/label" // Assuming Label component is available from shadcn/ui

export default function FloatingCart() {
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [lastAddedItem, setLastAddedItem] = useState<string>("")
  const [deliveryDate, setDeliveryDate] = useState<string>("")
  const [deliveryTime, setDeliveryTime] = useState<string>("")
  const [formattedDeliveryDate, setFormattedDeliveryDate] = useState<string>("")
  const [formattedDeliveryTime, setFormattedDeliveryTime] = useState<string>("")

  useEffect(() => {
    if (totalItems > 0) {
      setShowSuccess(true)
      const timer = setTimeout(() => setShowSuccess(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [totalItems])

  useEffect(() => {
    if (deliveryDate) {
      setFormattedDeliveryDate(
        new Date(deliveryDate).toLocaleDateString("en-PK", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      )
    } else {
      setFormattedDeliveryDate("Not specified")
    }
  }, [deliveryDate])

  useEffect(() => {
    setFormattedDeliveryTime(deliveryTime || "Not specified")
  }, [deliveryTime])

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`
  }

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return

    // Generate a simple order ID (for demonstration, in a real app this would come from a backend)
    const orderId = `ALM-${Date.now().toString().slice(-6)}`

    // Create a clean, readable WhatsApp message
    let message = `🎉 *NEW ORDER from Al-Macca Caterers!* 🎉\n`
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
    message += `📝 *Order ID:* ${orderId}\n`
    message += `🗓️ *Order Date:* ${new Date().toLocaleDateString("en-PK")}\n`
    message += `🚚 *Preferred Delivery:* ${formattedDeliveryDate} at ${formattedDeliveryTime}\n`
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`

    message += `📋 *ORDER DETAILS:*\n\n`

    // Add each item in a clean format
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`
      message += `    • Quantity: ${item.quantity}\n`
      message += `    • Unit Price: Rs. ${item.price.toLocaleString()}\n`
      message += `    • Subtotal: Rs. ${(item.price * item.quantity).toLocaleString()}\n`
      message += `    ─────────────────────────────────────\n`
    })

    message += `\n💰 *TOTAL AMOUNT: Rs. ${totalPrice.toLocaleString()}*\n\n`

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`
    message += `📞 *NEXT STEPS:*\n`
    message += `• Please confirm this order and provide your full name.\n`
    message += `• Share your complete delivery address (including landmarks).\n`
    message += `• Mention any special requests or notes for your order.\n\n`

    message += `🙏 *Thank you for choosing Al-Macca Caterers!* 🙏\n`
    message += `We look forward to serving you. Our team will contact you shortly to finalize the details.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/923333227339?text=${encodedMessage}`, "_blank")

    clearCart()
    setIsOpen(false)
    setDeliveryDate("") // Clear date after order
    setDeliveryTime("") // Clear time after order
  }

  if (totalItems === 0) return null

  return (
    <>
      {showSuccess && (
        <div className="fixed bottom-24 right-6 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slideInUp">
          ✅ Item added to cart!
        </div>
      )}

      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg flex flex-col items-center justify-center transition-all hover:scale-110 animate-pulse"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs font-bold mt-1">{totalItems}</span>
        </button>
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)} />

          {/* Cart Panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col animate-slideInRight">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-yellow-50">
              <h2 className="text-xl font-bold flex items-center gap-2 text-gray-800">
                <ShoppingCart className="w-5 h-5 text-yellow-600" />
                Your Cart ({totalItems} items)
              </h2>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 border-b pb-4 last:border-b-0">
                      {/* Item Image */}
                      <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image
                          src={item.image || "/placeholder.svg?height=80&width=80"}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</h3>
                        <p className="text-yellow-600 font-bold text-lg">{formatPrice(item.price)}</p>
                        <p className="text-xs text-gray-500">Subtotal: {formatPrice(item.price * item.quantity)}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-700 text-xs font-medium"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Delivery Date and Time Pickers */}
              <div className="mt-6 p-4 border rounded-lg bg-gray-50 space-y-4">
                <h3 className="font-semibold text-gray-800">Preferred Delivery Time</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="delivery-date" className="text-xs text-gray-600 mb-1 block">
                      Date
                    </Label>
                    <Input
                      id="delivery-date"
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="delivery-time" className="text-xs text-gray-600 mb-1 block">
                      Time
                    </Label>
                    <Input
                      id="delivery-time"
                      type="time"
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t bg-gray-50 p-4 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-700">Total Amount:</span>
                  <span className="text-2xl font-bold text-yellow-600">{formatPrice(totalPrice)}</span>
                </div>

                {/* Order Summary */}
                <div className="text-xs text-gray-600 bg-white p-3 rounded-lg">
                  <p className="font-medium mb-1">Order Summary:</p>
                  <p>
                    {totalItems} item{totalItems > 1 ? "s" : ""} • Total: {formatPrice(totalPrice)}
                  </p>
                  <p>
                    Delivery: {formattedDeliveryDate} at {formattedDeliveryTime}
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 h-12 text-base font-semibold"
                  >
                    <Send className="w-5 h-5" />
                    Send Order via WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="text-center text-xs text-gray-500 pt-2 border-t">
                  <p>📞 +92 333 322 7339</p>
                  <p>Al-Macca Caterers - Premium Catering Services</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
