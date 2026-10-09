const BASE_URL =
  "https://api.api-store.workers.dev/api/bazardor";

const FALLBACK_BASE_URL =
  "https://api.abcz.workers.dev/api/bazardor";

async function fetchFromApi(endpoint) {
  const urls = [
    `${BASE_URL}${endpoint}`,
    `${FALLBACK_BASE_URL}${endpoint}`,
  ];

  let lastError = null;

  for (const url of urls) {
    try {
      const response = await fetch(url, {
        next: {
          revalidate: 60,
        },
      });

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      lastError = error;

      console.error(
        `API failed: ${url}`,
        error.message
      );
    }
  }

  throw lastError || new Error("Both APIs failed");
}

export async function getProducts() {
  const data = await fetchFromApi("/products");

  if (Array.isArray(data)) {
    return data;
  }

  return data?.products || [];
}

export async function getProductBySlug(slug) {
  const products = await getProducts();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return null;
  }

  try {
    const data = await fetchFromApi(
      `/products/${product.id}`
    );

    return data?.product || data || product;
  } catch (error) {
    console.error(
      "Product details API failed:",
      error.message
    );

    return product;
  }
}

export async function getProductsByCategory(category) {
  const data = await fetchFromApi(
    `/products?category=${encodeURIComponent(category)}`
  );

  if (Array.isArray(data)) {
    return data;
  }

  return data?.products || [];
}

export async function getCategories() {
  const data = await fetchFromApi("/categories");

  if (Array.isArray(data)) {
    return data;
  }

  return data?.categories || [];
}

export async function getCategoryBySlug(slug) {
  const data = await fetchFromApi(
    `/categories/${encodeURIComponent(slug)}`
  );

  return data?.category || data;
}