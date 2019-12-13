import React, { createContext, useState, useEffect } from 'react';

const BASE_URL =
  'http://private-5815fe-recommendationsknip.apiary-mock.com/products';

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActiveProduct = id => {
    const [activeProd] = products.filter(product => product.id === id);
    setActiveProduct(activeProd);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        handleActiveProduct,
        activeProduct,
        setActiveProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
