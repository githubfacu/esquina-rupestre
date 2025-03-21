import { X } from 'lucide-react';
import { Product } from '../types';
import { useEffect, useRef, useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {

  const [showDetail, setShowDetail] = useState(false)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
      const handleInteraction = (event: MouseEvent | KeyboardEvent) => {
          if (
              event instanceof KeyboardEvent && event.key === 'Escape' ||
              event instanceof MouseEvent && infoRef.current && !infoRef.current.contains(event.target as Node)
          ) {
            setShowDetail(false)
          }
      };

      document.addEventListener('mousedown', handleInteraction);
      document.addEventListener('keydown', handleInteraction);

      return () => {
          document.removeEventListener('mousedown', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
      };
  }, []);

  return (
    <>
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
            <button 
              onClick={ () => setShowDetail(true) }
              className="flex items-center space-x-2 px-4 py-2 bg-[#1259c3] text-white rounded-md hover:bg-[#3483fa] transition-colors duration-75 font-semibold"
            >
              <span>Ver Detalles</span>
            </button>
          </div>
        </div>
      </div>

      {
        showDetail &&
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4 ">
              <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div ref={infoRef} className="relative flex w-full items-center overflow-hidden bg-white dark:bg-[#202127] rounded-md  dark:shadow-gray-900/50 transition-transform px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button 
                    onClick={ () => setShowDetail(false) }
                    type="button" 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  >
                    <span className="sr-only">Cerrar</span>
                      <X className='h-8 w-8'/>
                  </button>
                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                    />
                    <div className="sm:col-span-8 lg:col-span-7">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12  dark:text-gray-50">{product.name}</h2>
                        <section 
                          aria-labelledby="information-heading" 
                          className="mt-2"
                        >
                          <h3 id="information-heading" className="sr-only">Información del producto</h3>
                          <p className="text-2xl text-gray-900 dark:text-gray-50">${product.price.toFixed(2)}</p>
                          </section>
                          <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
                            {product.description}
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};