import { Product, MOCK_PRODUCTS } from "./mockData";

/**
 * Service to handle visual search and product lookups.
 * Structured to be easily replaced with SerpApi or Google Lens API.
 */
export const ProductService = {
  /**
   * Searches for products using an image URL or keyword.
   */
  async searchProducts(params: { q?: string; url?: string }): Promise<Product[]> {
    console.log("Searching products with:", params);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // In a real implementation:
    // const response = await fetch(`/api/search?q=${params.q}&url=${params.url}`);
    // return response.json();

    // Filtering mock data based on query if provided
    if (params.q) {
      const query = params.q.toLowerCase();
      return MOCK_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query)
      );
    }

    return MOCK_PRODUCTS;
  },

  /**
   * Fetches detailed information for a single product.
   */
  async getProductById(id: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return MOCK_PRODUCTS.find(p => p.id === id) || null;
  },

  /**
   * Fetches the latest price comparison for a specific product item.
   */
  async getPriceComparison(productId: string) {
    const product = await this.getProductById(productId);
    return product?.prices || [];
  }
};
