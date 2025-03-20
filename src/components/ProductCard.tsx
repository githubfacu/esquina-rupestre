import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white dark:bg-[#202127] rounded-md shadow-lg dark:shadow-gray-900/50 overflow-hidden transition-transform flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-[#E1FF2D]">{product.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{product.description}</p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            ${product.price.toFixed(2)}
          </span>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1259c3] text-white rounded-md hover:bg-[#3483fa] transition-colors duration-75 font-semibold">
            <span>Ver Detalles</span>
            <ArrowRight size={18}/>
          </button>
        </div>
      </div>
    </div>
  );
};