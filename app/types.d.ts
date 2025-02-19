export interface User {
  id: number;
  username?: string;
  email?: string;
}

export interface File {
  id: number;
  url?: string;
  name?: string;
  size?: number;
  content_type?: string;
  description?: string;
  user?: User;
  user_id: number;
  created_at?: string;
}

export interface ProductQuote {
  id: number;
  product?: string;
  product_name?: string;
  minimum_order_quantity?: number | null;
  quantity?: number;
  exw_unit_price_marked_up?: string;
  ddp_unit_price_marked_up?: string;
  shipping_cost?: string;
  production_time_days?: number;
  shipping_time_days?: number;
  lead_time_days_with_shipping?: number;
  sample_cost_marked_up?: string;
  sample_shipping_cost_marked_up?: string;
  sample_total_cost_marked_up?: string;
  sample_production_time_days?: number;
  sample_lead_time_days_with_shipping?: number;
  sample_payment_link?: string | null;
  sample_payment_status?: string | null;
  sampling_id?: number | null;
  client_notes?: string;
  files?: File[];
  similar_products?: [];
  tags?: string[];
}

export interface Supplier {
  supplier_cloak?: string;
  average_score?: number;
}

export interface SupplierPayload {
  id: number;
  status?: string;
  deposit_percentage?: number | null;
  product_quotes?: ProductQuote[];
  created_at?: string;
  updated_at?: string;
  recommended?: boolean;
  quantity?: number;
  client_notes?: string;
  bulk_shipping_option?: string | null;
  supplier_certifications?: string | null;
  supplier_credentials?: string | null;
  supplier_previous_customers?: string | null;
  similar_products?: [];
  supplier?: Supplier;
}
