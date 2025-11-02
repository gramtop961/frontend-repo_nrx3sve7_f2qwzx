import React from 'react';
import { GraduationCap, ShoppingCart, Menu, X, Search } from 'lucide-react';

const Navbar = ({ cartCount, onToggleCart, onSearch }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <GraduationCap className="text-indigo-600" />
              <span>CampusMart</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2 w-full max-w-md">
            <div className="flex items-center gap-2 w-full border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search books, gadgets, supplies..."
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <button type="submit" className="px-3 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
              Search
            </button>
          </form>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleCart}
              className="relative p-2 rounded-lg hover:bg-gray-100"
              aria-label="Open cart"
            >
              <ShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] bg-indigo-600 text-white rounded-full w-5 h-5 grid place-items-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="flex items-center gap-2 w-full border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search books, gadgets, supplies..."
                  className="w-full outline-none bg-transparent text-sm"
                />
              </div>
              <button type="submit" className="px-3 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-500">
                Go
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
