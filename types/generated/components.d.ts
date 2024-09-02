import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksCard extends Schema.Component {
  collectionName: 'components_blocks_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
    bgimage: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    herotitle: Attribute.Text;
    herodescription: Attribute.Text;
    buttonLink: Attribute.Component<'elements.button-link'>;
    HeroImg: Attribute.Media<'images'>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    Name: Attribute.String;
    Descritpion: Attribute.Text;
    Plan: Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    PriceCards: Attribute.Component<'blocks.card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    isExteranl: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<
      ['primary', 'secondary', 'warning', 'error', 'info', 'default']
    >;
    url: Attribute.Text;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing card';
    description: '';
  };
  attributes: {
    PlanType: Attribute.String;
    Cost: Attribute.BigInteger;
    Featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    Link: Attribute.Component<'elements.button-link'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
    icon: 'apps';
  };
  attributes: {
    metTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.card': BlocksCard;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'elements.button-link': ElementsButtonLink;
      'elements.pricing-card': ElementsPricingCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
