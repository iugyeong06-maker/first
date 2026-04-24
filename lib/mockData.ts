export interface Product {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  height?: number; // For masonry layout simulation
  prices: Price[];
  recommendations: Recommendation[];
}

export interface Price {
  platform: string;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  benefits?: string[];
  link: string;
}

export interface Recommendation {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  price: number;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "오버사이즈 옥스퍼드 셔츠",
    brand: "무신사 스탠다드",
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    height: 400,
    prices: [
      { platform: "무신사", price: 35900, originalPrice: 42000, discountRate: 15, benefits: ["네이버페이 2%", "무료배송"], link: "#" },
      { platform: "29CM", price: 38000, originalPrice: 42000, discountRate: 10, benefits: ["쿠폰가 36,000원"], link: "#" },
      { platform: "네이버", price: 35500, benefits: ["네이버페이 포인트 3,500원 적립"], link: "#" },
    ],
    recommendations: [
      { id: "r1", name: "와이드 치노 팬츠", brand: "무신사 스탠다드", price: 42000, imageUrl: "https://images.unsplash.com/photo-1624371414361-e67094c2030d?w=400&q=80" },
      { id: "r2", name: "캔버스 스니커즈", brand: "컨버스", price: 65000, imageUrl: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80" },
    ]
  },
  {
    id: "2",
    name: "빈티지 워싱 데님 재킷",
    brand: "리바이스",
    imageUrl: "https://images.unsplash.com/photo-157690539192a-8aa445965406?w=800&q=80",
    height: 600,
    prices: [
      { platform: "무신사", price: 129000, originalPrice: 159000, discountRate: 18, link: "#" },
      { platform: "리바이스 공식홈", price: 159000, link: "#" },
    ],
    recommendations: []
  },
  {
    id: "3",
    name: "캐시미어 블렌드 가디건",
    brand: "메종 키츠네",
    imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    height: 500,
    prices: [
      { platform: "SSG", price: 345000, benefits: ["현대카드 5% 할인"], link: "#" },
      { platform: "Farfetch", price: 420000, link: "#" },
    ],
    recommendations: []
  },
  {
      id: "4",
      name: "플리츠 스커트",
      brand: "자라",
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
      height: 700,
      prices: [
        { platform: "ZARA", price: 59000, link: "#" },
      ],
      recommendations: []
    },
    {
      id: "5",
      name: "울 체크 코트",
      brand: "H&M",
      imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      height: 450,
      prices: [
        { platform: "H&M", price: 149000, link: "#" },
      ],
      recommendations: []
    },
    {
      id: "6",
      name: "베이직 티셔츠",
      brand: "유니클로",
      imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80",
      height: 550,
      prices: [
        { platform: "유니클로", price: 19900, link: "#" },
      ],
      recommendations: []
    }
];
