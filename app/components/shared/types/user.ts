export type UserWithoutPassword = Omit<UserShape, 'password'>;

export interface UserShape {
  id: number;
  is_activated: boolean;
  refer_id: any;
  legal: LegalEntity;
  legal_type: string;
  legal_class: string;
  avatar?: Avatar | null;
}

export interface Account {
  id: number;
  email: string;
  is_activated: boolean;
  username: string;
  legal_type: string;
  phone: string;
  refer_id: any;
  referral_percent: number;
  wallet_address: string;
  legal_class: string;
  avatar: Avatar;
  legal: LegalEntity;
  verification: any;
  socials: any[];
  fiat: any;
}

export type LegalEntity = IndividualEntity | CompanyEntity;

export interface IndividualEntity {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  nikname: string;
  about?: string;
  website?: string;
  deleted_at: string | null;
  need_wallet: boolean;
  search_by_nickname: string;
  user: UserShape;
  logo?: any;
  banner?: Banner;
}

export interface CompanyEntity {
  id: number;
  created_at: string;
  name: string;
  inn: string;
  kpp?: string;
  payment_account: string;
  bik: string;
  personal_account?: string;
  correspondent_account?: string;
  address: string;
  ceo: string;
  name_brend: string;
  website?: string;
  info?: string;
  deleted_at: string | null;
  terminal?: string;
  shop_id?: string;
  logo?: any;
  user: UserShape;
  okpo?: string;
  okato?: string;
  okved?: string;
  ogrn?: string;
}
