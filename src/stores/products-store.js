import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  paymentMethods: [], 
  total : 0,
  setProducts: (products) => set({ products }),
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
  setTotal: (total) => set({ total }),

}));

export default useProductsStore;
