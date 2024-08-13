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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog.blog': BlogBlog;
      'business-morning.business-mornings': BusinessMorningBusinessMornings;
      'member.member': MemberMember;
    }
  }
}
