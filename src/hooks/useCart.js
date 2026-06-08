// useCart — placeholder custom hook
// TODO: Wire up Redux cart selectors and dispatch actions

export function useCart() {
  // TODO: const dispatch = useDispatch();
  // TODO: const items = useSelector((s) => s.cart.items);

  const addItem    = (item)   => { /* TODO */ };
  const removeItem = (itemId) => { /* TODO */ };
  const clearCart  = ()       => { /* TODO */ };

  return { items: [], addItem, removeItem, clearCart };
}
