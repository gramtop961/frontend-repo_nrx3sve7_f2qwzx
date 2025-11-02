import React from 'react';
import { Star, Plus } from 'lucide-react';

const CategoryFilter = ({ categories, active, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {['All', ...categories].map((cat) => (
      <button
        key={cat}
        onClick={() => onChange(cat)}
        className={
          'px-3 py-1.5 rounded-full text-sm border transition ' +
          (active === cat
            ? 'bg-indigo-600 border-indigo-600 text-white'
            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50')
        }
      >
        {cat}
      </button>
    ))}
  </div>
);

const ProductCard = ({ product, onAdd }) => (
  <div className="group border rounded-xl p-3 hover:shadow-sm transition bg-white">
    <div className="aspect-square rounded-lg bg-gray-100 mb-3 overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="flex items-start justify-between gap-2">
      <div>
        <h3 className="font-semibold text-gray-900 leading-tight line-clamp-2">{product.title}</h3>
        <div className="mt-1 text-xs text-gray-500">{product.category}</div>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill={i < product.rating ? 'currentColor' : 'none'} />
          ))}
        </div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-gray-900">${product.price.toFixed(2)}</div>
        <div className="text-xs text-gray-500">{product.condition}</div>
      </div>
    </div>
    <button
      onClick={() => onAdd(product)}
      className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500"
    >
      <Plus size={16} /> Add to cart
    </button>
  </div>
);

const ProductGrid = ({ products, searchQuery, activeCategory, onCategoryChange, onAddToCart }) => {
  const categories = React.useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category))).sort();
  }, [products]);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-10" id="shop">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Featured items</h2>
        <CategoryFilter categories={categories} active={activeCategory} onChange={onCategoryChange} />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center text-gray-600 py-16">No items match your search.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
