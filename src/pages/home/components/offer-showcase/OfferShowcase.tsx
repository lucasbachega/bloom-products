import { memo } from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { selectProducts } from "../../../../store/reducers/productsSlice";

const OfferShowcase = () => {
  const discountedProducts = useAppSelector((state) =>
    selectProducts(state, "discounted")
  );
  console.log("render OfferShowcase");
  return <div></div>;
};

export default memo(OfferShowcase);
