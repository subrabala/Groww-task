import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  paymentMethods: [], 
  setProducts: (products) => set({ products }),
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
}));

export default useProductsStore;
