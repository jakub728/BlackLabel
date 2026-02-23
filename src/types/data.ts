export interface OrderData {
  orderId: string;
  timestamp: string;
  country: string;
  city: string;
  lat: number;
  lon: number;
  category: string;
  subcategory: string;
  product: string;
  quantity: number;
  unitPrice: number;
  paymentMethod: string;
  customerType: string;
  device: string;
  deliveryDays: number;
}

export interface Data {
  meta: {
    currency: string;
    generatedAt: string;
    source: string;
  };
  orders: OrderData[];
}
