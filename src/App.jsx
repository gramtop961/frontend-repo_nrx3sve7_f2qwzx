import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { Minus, Plus, Trash2, X } from 'lucide-react';

const initialProducts = [
  {
    id: 'p1',
    title: 'Calculus: Early Transcendentals (8th Edition)',
    price: 39.99,
    category: 'Books',
    condition: 'Like New',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1754304342321-2b4b9ed3fd2a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYWxjdWx1cyUzQSUyMEVhcmx5JTIwVHJhbnNjZW5kZW50YWxzJTIwJTI4OHRofGVufDB8MHx8fDE3NjIxMDYwNjJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    title: 'TI-84 Plus CE Graphing Calculator',
    price: 79.0,
    category: 'Electronics',
    condition: 'Good',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1552926738-05d2482b9c36?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIxMDYwNjJ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    title: 'Noise-Cancelling Headphones',
    price: 59.0,
    category: 'Electronics',
    condition: 'Like New',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1634717037148-4dc76c09a328?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb2lzZS1DYW5jZWxsaW5nJTIwSGVhZHBob25lc3xlbnwwfDB8fHwxNzYyMTA1NTU3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    title: 'Organic Chemistry Set (Lab Kit)',
    price: 45.0,
    category: 'Supplies',
    condition: 'Good',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1705727210721-961cc64a6895?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmdhbmljJTIwQ2hlbWlzdHJ5JTIwU2V0JTIwJTI4TGFifGVufDB8MHx8fDE3NjIxMDU1NTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p5',
    title: 'Ergonomic Desk Chair',
    price: 110.0,
    category: 'Furniture',
    condition: 'Very Good',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1688578735972-b61ec274df7b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFcmdvbm9taWMlMjBEZXNrJTIwQ2hhaXJ8ZW58MHwwfHx8MTc2MjEwNTU1OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p6',
    title: 'Dorm Mini Fridge',
    price: 95.0,
    category: 'Appliances',
    condition: 'Good',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1582484898866-ac15ca496f0d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEb3JtJTIwTWluaSUyMEZyaWRnZXxlbnwwfDB8fHwxNzYyMTA1NTU4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p7',
    title: 'Reusable Notebook (Smart Notebook)',
    price: 18.5,
    category: 'Supplies',
    condition: 'New',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1598620616655-7fce1a6fdf87?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZXVzYWJsZSUyME5vdGVib29rJTIwJTI4U21hcnQlMjBOb3RlYm9vayUyOXxlbnwwfDB8fHwxNzYyMTA2MDYzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p8',
    title: 'MacBook Air 13" (2019)',
    price: 420.0,
    category: 'Electronics',
    condition: 'Good',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1650735310143-41f3baa9d1a3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWNCb29rJTIwQWlyJTIwMTN8ZW58MHwwfHx8MTc2MjEwNjA2M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p9',
    title: 'Whiteboard + Markers Set',
    price: 22.0,
    category: 'Supplies',
    condition: 'Like New',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1571456610111-72c649ad3521?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaGl0ZWJvYXJkJTIwJTJCJTIwTWFya2VycyUyMFNldHxlbnwwfDB8fHwxNzYyMTA1NTU4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p10',
    title: 'Rug for Dorm (4x6)',
    price: 35.0,
    category: 'Home',
    condition: 'Good',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1759146464279-af282e1d2c73?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSdWclMjBmb3IlMjBEb3JtJTIwJTI4NHg2JTI5fGVufDB8MHx8fDE3NjIxMDYwNjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p11',
    title: 'Hoodie - Campus Edition (M)',
    price: 25.0,
    category: 'Apparel',
    condition: 'Very Good',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1761511027831-5e50ae4d9b8c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb29kaWUlMjAtJTIwQ2FtcHVzJTIwRWRpdGlvbiUyMCUyOE0lMjl8ZW58MHwwfHx8MTc2MjEwNTU1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p12',
    title: 'Desk Lamp with USB',
    price: 19.0,
    category: 'Home',
    condition: 'Like New',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1612813434847-b01fffea46ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNrJTIwTGFtcCUyMHdpdGglMjBVU0J8ZW58MHwwfHx8MTc2MjEwNjA2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

function App() {
  const [products] = React.useState(initialProducts);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cart, setCart] = React.useState({}); // id -> { product, qty }

  const cartItems = Object.values(cart);
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev[product.id];
      const qty = existing ? existing.qty + 1 : 1;
      return { ...prev, [product.id]: { product, qty } };
    });
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart((prev) => {
      const entry = prev[id];
      if (!entry) return prev;
      const nextQty = Math.max(1, entry.qty + delta);
      return { ...prev, [id]: { ...entry, qty: nextQty } };
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const clearCart = () => setCart({});

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar
        cartCount={cartCount}
        onToggleCart={() => setCartOpen((v) => !v)}
        onSearch={(q) => setSearchQuery(q)}
      />

      <Hero onExplore={() => {
        const el = document.getElementById('shop');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <ProductGrid
        products={products}
        searchQuery={searchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onAddToCart={handleAddToCart}
      />

      <Footer />

      {/* Cart Drawer */}
      <div className={`fixed inset-0 z-50 ${cartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!cartOpen}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${cartOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setCartOpen(false)}
        />
        {/* Panel */}
        <aside className={`absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-xl transition-transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold">Your Cart</h3>
            <button onClick={() => setCartOpen(false)} className="p-2 rounded-lg hover:bg-gray-100" aria-label="Close cart">
              <X />
            </button>
          </div>
          <div className="h-[calc(100%-160px)] overflow-y-auto p-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-600 py-20">Your cart is empty.</div>
            ) : (
              cartItems.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-3 border rounded-lg p-3">
                  <img src={product.image} alt={product.title} className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{product.title}</div>
                    <div className="text-sm text-gray-500">{product.condition} • {product.category}</div>
                    <div className="mt-1 font-semibold">${(product.price * qty).toFixed(2)}</div>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <button onClick={() => updateQty(product.id, -1)} className="p-1 rounded border hover:bg-gray-50" aria-label="Decrease quantity"><Minus size={16} /></button>
                      <span className="text-sm w-6 text-center">{qty}</span>
                      <button onClick={() => updateQty(product.id, 1)} className="p-1 rounded border hover:bg-gray-50" aria-label="Increase quantity"><Plus size={16} /></button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(product.id)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500" aria-label="Remove item">
                    <Trash2 />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-t p-4 space-y-3 bg-white">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={clearCart} className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50">Clear</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500">Checkout</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
