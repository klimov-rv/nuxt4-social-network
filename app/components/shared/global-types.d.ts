import type * as Types from './types';

declare global {
  type User = Types.UserShape;
  type UserWithoutPassword = Types.UserWithoutPassword;
  type Account = Types.Account;
  type LegalEntity = Types.LegalEntity;
  type IndividualEntity = Types.IndividualEntity;
  type CompanyEntity = Types.CompanyEntity;

  type Avatar = Types.Avatar;
  type Banner = Types.Banner;
  type Image = Types.Image;
  type UploadFile = Types.UploadFile;
  type PreviewUpload = Types.PreviewUpload;
  type Preview = Types.Preview;
  type Background = Types.Background;

  type Article = Types.Article;
  type ArticleResponse = Types.ArticleResponse;

  type Pagination<T> = Types.Pagination<T>;

  type Token = Types.Token;
  type Collection = Types.Collection;
  type Author = Types.Author;

  type Support = Types.Support;

  type ModerationStatus = Types.ModerationStatus;

  type DefaultOctoberPage = any;

  type Video = Types.Video;
  type VideoPreview = Types.VideoPreview;
}

export {};
