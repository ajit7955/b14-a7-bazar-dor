export function formatPrice(price) {
  if (price === null || price === undefined) {
    return "—";
  }

  return new Intl.NumberFormat("bn-BD").format(price);
}

export function getChangeText(product) {
  const change = product?.change;

  if (!change) {
    return "কোনো পরিবর্তন নেই";
  }

  if (change.dir === "up") {
    return `↑ ${change.pct}%`;
  }

  if (change.dir === "down") {
    return `↓ ${Math.abs(change.pct)}%`;
  }

  return "—";
}

export function getChangeClass(product) {
  const direction = product?.change?.dir;

  if (direction === "up") {
    return "bg-green-100 text-green-700";
  }

  if (direction === "down") {
    return "bg-red-100 text-red-700";
  }

  return "bg-gray-100 text-gray-600";
}

export function sortByPrice(products, order = "low") {
  return [...products].sort((a, b) => {
    if (order === "high") {
      return b.today - a.today;
    }

    return a.today - b.today;
  });
}