import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogBlog extends Schema.Component {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'blog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    shortDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
    createDate: Attribute.Date;
  };
}

export interface BusinessMorningBusinessMornings extends Schema.Component {
  collectionName: 'components_business_m_ornings_business_mornings';
  info: {
    displayName: 'businessMorning';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    date: Attribute.Date;
    description: Attribute.RichText;
  };
}

export interface MemberMember extends Schema.Component {
  collectionName: 'components_member_members';
  info: {
    displayName: 'member';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    role: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.RichText;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blog': BlogBlog;
      'business-morning.business-mornings': BusinessMorningBusinessMornings;
      'member.member': MemberMember;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
