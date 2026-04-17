import type { UserShape } from './user';
import type {
  Avatar,
  Preview,
  Background,
  UploadFile,
  PreviewUpload,
} from './media';
import type { ModerationStatus } from './support';

export interface Author {
  id: number;
  is_activated: boolean;
  legal_type: string;
  refer_id: any;
  legal_class: string;
  legal: import('./user').LegalEntity;
  avatar: Avatar;
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  tokens_count: number;
  is_favorited: boolean;
  created_at: string;
  updated_at: string;
  user: UserShape;
  tokens_collection?: { data: Token[] };
  preview?: Preview | null;
  background?: Background | null;
  preview_convert?: any;
  background_convert?: any;
  trading: string | number;
  min_price?: string | number;
  royalty?: number;
  blockchain_id?: number | null;
  contract_address?: string;
  external_address?: string | null;
  moderation_status?: ModerationStatus | null;
  moderation_preview?: any;
  moderation_background?: any;
  modarated_at?: string | null;
  reasons_rejection_id?: any;
  is_produced: boolean;
  is_burnable?: boolean;
  deleted_at?: string | null;
  is_default_collection?: boolean;
  category_id?: number;
  amount?: string;
  comment?: string;
  tokens_sales: number;
  export_at?: string | null;
}

export interface Token {
  id: number;
  name: string;
  description: string;
  price: string;
  user: UserShape;
  collection: Collection;
  author: Author;
  type: string;
  is_hidden: boolean;
  is_sale: boolean;
  is_favorited: boolean;
  favorites_count: number;
  original_file: string;
  secret_key: string;
  created_at: string;
  updated_at: string;
  upload_file?: UploadFile | null;
  preview_upload?: PreviewUpload | null;
  moderation_status?: ModerationStatus | null;
  moderation_image?: any;
  reasons_rejection_id?: any;
  commission_percent?: number;
  buy_percent?: number;
  royalty?: number;
  currency?: string;
  external_address?: string | null;
  external_id?: string;
  link?: string;
  file_path?: string | null;
  preview?: string | null;
  hidden?: any;
  in_progress?: boolean;
  is_booked?: boolean;
  galleries?: any[];
  galleries_full?: any[];
  external_reference?: any;
  deleted_at?: string | null;
}
