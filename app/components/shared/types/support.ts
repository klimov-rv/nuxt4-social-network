export interface Support {
  id: number;
  name: string;
  content: string;
  categories: string;
  order?: number;
  slug: string;
  image?: Image;
}

export interface ModerationStatus {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
}
