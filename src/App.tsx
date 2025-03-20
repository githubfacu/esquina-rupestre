import React, { useState } from 'react';
import { Layout, Search, Filter, MapPin, Clock, Phone } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { ProductCard } from './components/ProductCard';
import { products, categories } from './data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-[#1a1a20]">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 h-16 bg-gray-100 dark:bg-[#1a1a20] shadow-md">
          <div className="container h-full flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src='/fotor-ai-20250319221926-icon.ico' className="w-8 h-8 text-[#3a5ccc] dark:text-blue-400" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Esquina Rupestre</h1>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative mt-16">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
              alt="Esquina Rupestre"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">La Esquina Rupestre</h2>
              <p className="text-xl mb-8">Catálogo de productos de calidad. Descubre nuestra selección de artículos.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Av. Principal #123, Ostende</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Lun - Sáb: 9:00 - 20:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+123 456 7890</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-[#1a1a20] shadow-md dark:shadow-gray-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border text-gray-900 dark:text-gray-50 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 flex-wrap">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-4 py-2 rounded-md font-semibold ${
                    selectedCategory === '' 
                      ? 'bg-[#1259c3] text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  Todos
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md font-semibold ${
                      selectedCategory === category.id
                        ? 'bg-[#1259c3] text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 mx-auto text-gray-400" />
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                No se encontraron productos que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </main>
      </div>
      <footer className='flex items-center justify-center bg-gray-100 dark:bg-[#1a1a20] py-4 border-t-[1px] border-gray-200 dark:border-gray-700'>
        <p className='text-gray-900 dark:text-gray-100'>
          Hecho por Facus
        </p>
      </footer>
    </ThemeProvider>
  );
}

export default App;