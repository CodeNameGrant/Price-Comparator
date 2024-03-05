import { useMemo } from 'react';
import { dayjs, max } from '../libs/dayjs';
import { Price, Product } from '../types';

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  // TODO fix
  const lastUpdated = useMemo(() => {
    const dates = product.prices.map((item) => item.updated);

    return max(dates);
  }, [product]);

  const cheapestPrice = product.prices.reduce((cheapestPrice: Price, currPrice: Price) => {
    if (!cheapestPrice) return currPrice;

    return currPrice.price < cheapestPrice.price ? currPrice : cheapestPrice;
  }, null);

  return (
    <div className="border border-solid rounded px-2">
      <div className="flex justify-between">
        <span className="font-semibold">{product.name}</span>
        <span className="text-green-600">
          {cheapestPrice.price} - {cheapestPrice.retailer}
        </span>
      </div>

      <div className="italic text-sm text-gray-500">Updated {dayjs(lastUpdated).fromNow()}</div>

      {/* TODO */}
      {/* <div>Other Options</div> */}
    </div>
  );
}
