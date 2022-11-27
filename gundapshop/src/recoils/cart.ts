import { atom, selectorFamily, useRecoilValue } from "recoil";

const cartState = atom<Map<string, number>>({
  key: "cartState",
  default: new Map(),
});

export const cartItemSelector = selectorFamily<number | undefined, string>({
  key: "certItem",
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
    },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      if (typeof newValue === "number") {
        const newCart = get(cartState).set(id, newValue);
        set(cartState, newCart);
      }
    },
});