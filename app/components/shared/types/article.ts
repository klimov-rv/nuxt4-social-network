export interface Article {
  id: number;
  name: string;
  content: string;
  categories: string;
  order: any;
  slug: string;
  image: any;
  file: any;
}

export type ArticleResponse = Article[];
