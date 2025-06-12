import { useSelector } from "react-redux";
import { RootState } from "../store";

/**
 * Verifica se um produto está no carrinho.
 * @param productId ID do produto
 * @returns boolean indicando se está presente
 */
export const useIsInCart = (productId: number): boolean => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return cartItems.some((item) => item.id === productId);
};
