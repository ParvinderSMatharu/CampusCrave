import { createContext, useContext, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'campuscrave-cart-items';
const NOTE_STORAGE_KEY = 'campuscrave-delivery-note';
const CartContext = createContext(null);

function readStoredValue(storageKey, fallbackValue) {
  if (typeof window === 'undefined') {
    return fallbackValue;
  }

  const savedValue = window.localStorage.getItem(storageKey);

  if (!savedValue) {
    return fallbackValue;
  }

  try {
    return JSON.parse(savedValue);
  } catch (error) {
    return fallbackValue;
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => readStoredValue(CART_STORAGE_KEY, []));
  const [deliveryNote, setDeliveryNote] = useState(() => readStoredValue(NOTE_STORAGE_KEY, ''));

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem(NOTE_STORAGE_KEY, JSON.stringify(deliveryNote));
  }, [deliveryNote]);

  const addToCart = (item, restaurant) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [
        ...currentItems,
        {
          id: item.id,
          name: item.name,
          description: item.description,
          image: item.image,
          price: item.price,
          quantity: 1,
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
        },
      ];
    });
  };

  const updateQuantity = (itemId, nextQuantity) => {
    setCartItems((currentItems) => {
      if (nextQuantity <= 0) {
        return currentItems.filter((item) => item.id !== itemId);
      }

      return currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: nextQuantity } : item,
      );
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length ? 1.99 : 0;
  const total = subtotal + deliveryFee;

  const value = {
    cartItems,
    deliveryNote,
    setDeliveryNote,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    itemCount,
    subtotal,
    deliveryFee,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
