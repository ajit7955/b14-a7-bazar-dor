import { formatPrice } from "@/lib/utils";

export default function PriceTicker({ products = [] }) {
  const items = products.slice(0, 10);

  if (!items.length) {
    return null;
  }

  return (
    <div className="border-b bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl overflow-x-auto px-4">
        <div className="flex min-w-max items-center gap-6 py-3">
          <div className="sticky left-0 z-10 bg-gray-950 pr-2 text-sm font-bold text-green-400">
            📊 আজকের দর
          </div>

          {items.map((product) => {
            const isUp = product.change?.dir === "up";
            const isDown = product.change?.dir === "down";

            return (
              <div
                key={product.id}
                className="flex items-center gap-2 text-sm"
              >
                <span>{product.image}</span>

                <span className="font-medium">
                  {product.nameBn}
                </span>

                <span className="font-bold">
                  ৳{formatPrice(product.today)}
                </span>

                <span
                  className={
                    isUp
                      ? "font-semibold text-green-400"
                      : isDown
                        ? "font-semibold text-red-400"
                        : "text-gray-400"
                  }
                >
                  {isUp && "↑"}
                  {isDown && "↓"}
                  {product.change?.pct
                    ? ` ${Math.abs(product.change.pct)}%`
                    : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}