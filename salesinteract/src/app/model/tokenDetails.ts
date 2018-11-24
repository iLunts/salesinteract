export interface ConnectedOrganisation {
  name: string;
  id: string;
  role: string;
  logo: string;
}

export interface Subscription {
  price_month: number;
  price_year: number;
  enable_extended_statistics: boolean;
  enable_product_groups: boolean;
  enable_session_takeover: boolean;
  enable_import_data: boolean;
  enable_office365: boolean;
  enable_roles: boolean;
  enable_logs: boolean;
  enable_teams: boolean;
  enable_document_tracking: boolean;
  max_create_teams: number;
  max_create_contact_per_company: number;
  max_create_company: number;
  max_create_users: number;
  subscription_plan: string;
}

export interface Token {
  iss: string;
  aud: string;
  jti: string;
  iat: number;
  nbf: number;
  exp: number;
  userId: string;
  organisationId: string;
  role: string;
  connectedOrganisations: ConnectedOrganisation[];
  subscription: Subscription;
}
