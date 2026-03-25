'use client'

import { useCart } from '@/lib/cart-store'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart()
  const count = itemCount()
  const totalAmount = total()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card border-l border-border flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" aria-hidden="true" />
            <h2 className="text-lg font-display font-bold">
              Carrito
              {count > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({count} {count === 1 ? 'artículo' : 'artículos'})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-foreground">El carrito está vacío</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Explora nuestro catálogo de productos PRFV
                </p>
              </div>
              <Link
                href="/productos"
                onClick={closeCart}
                className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary-hover transition-colors mt-2"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4" role="list">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 p-4 bg-secondary rounded-sm border border-border">
                  <div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground line-clamp-2">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.category}</p>
                    {item.price > 0 && (
                      <p className="text-sm text-primary font-semibold mt-1">
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-sm border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                        aria-label={`Reducir cantidad de ${item.name}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-sm border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                        aria-label={`Aumentar cantidad de ${item.name}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label={`Eliminar ${item.name} del carrito`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border">
            {totalAmount > 0 && (
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold text-foreground">{totalAmount.toFixed(2)} €</span>
              </div>
            )}
            <p className="text-xs text-muted-foreground mb-4">
              Los precios son orientativos. Solicite cotización formal para proyectos.
            </p>
            <Link
              href="/contacto"
              onClick={closeCart}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium py-3 rounded-md hover:bg-primary-hover transition-colors shadow-md"
            >
              Solicitar Cotización
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
