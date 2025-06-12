import { memo } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectProducts } from "../../store/reducers/productsSlice";

interface Props {}

const OfferShowcase = ({}: Props) => {
  const discountedProducts = useAppSelector(selectProducts("discounted"));
  console.log("render OfferShowcase");
  return <div></div>;
};

export default memo(OfferShowcase);
