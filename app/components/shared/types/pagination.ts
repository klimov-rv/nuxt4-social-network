export interface Pagination<T> {
  data: T[];
  from: number;
  last_page: number;
  prev_page_url: string;
  next_page_url: string;
  last_page_url: string;
  total: number;
}
