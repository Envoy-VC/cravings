/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

export enum Cuisines {
  Afghani = 'Afghani',
  American = 'American',
  Arabian = 'Arabian',
  Asian = 'Asian',
  Bakery = 'Bakery',
  Beverages = 'Beverages',
  Biryani = 'Biryani',
  Burgers = 'Burgers',
  Cafe = 'Cafe',
  CakeAndPastries = 'Cake_and_Pastries',
  Chaat = 'Chaat',
  Chinise = 'Chinise',
  Continental = 'Continental',
  Desserts = 'Desserts',
  FastFood = 'Fast_food',
  Goan = 'Goan',
  Grill = 'Grill',
  Gujarati = 'Gujarati',
  HealthyFood = 'Healthy_Food',
  Hyderabadi = 'Hyderabadi',
  IceCream = 'Ice_Cream',
  IceCreamCakes = 'Ice_Cream_Cakes',
  Indian = 'Indian',
  Italian = 'Italian',
  ItalianAmerican = 'Italian_American',
  Juices = 'Juices',
  Kebabs = 'Kebabs',
  Kerla = 'Kerla',
  Maharashtrian = 'Maharashtrian',
  Mexican = 'Mexican',
  Momos = 'Momos',
  Mughlai = 'Mughlai',
  NorthIndian = 'North_Indian',
  Paan = 'Paan',
  PanAsian = 'Pan_Asian',
  Pastaas = 'Pastaas',
  Pizzas = 'Pizzas',
  Punjabi = 'Punjabi',
  RollsAndWraps = 'Rolls_and_Wraps',
  Salads = 'Salads',
  Seafood = 'Seafood',
  Snacks = 'Snacks',
  SouthIndian = 'South_Indian',
  StreetFood = 'Street_Food',
  Sushi = 'Sushi',
  Sweets = 'Sweets',
  Tandoor = 'Tandoor',
  Thai = 'Thai',
  Waffle = 'Waffle'
}

/** Boolean expression comparing fields on type "Cuisines" */
export type CuisinesFilter = {
  eq?: InputMaybe<Cuisines>;
  in?: InputMaybe<Array<Cuisines>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Cuisines>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuItem = Node & {
  __typename?: 'MenuItem';
  allergens?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  is_vegetarian?: Maybe<Scalars['Boolean']['output']>;
  item_name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  owner?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  restaurant?: Maybe<Restaurant>;
  restaurant_id?: Maybe<Scalars['UUID']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};

export type MenuItemConnection = {
  __typename?: 'MenuItemConnection';
  edges: Array<MenuItemEdge>;
  pageInfo: PageInfo;
};

export type MenuItemDeleteResponse = {
  __typename?: 'MenuItemDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MenuItem>;
};

export type MenuItemEdge = {
  __typename?: 'MenuItemEdge';
  cursor: Scalars['String']['output'];
  node: MenuItem;
};

export type MenuItemFilter = {
  allergens?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MenuItemFilter>>;
  category?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringFilter>;
  is_vegetarian?: InputMaybe<BooleanFilter>;
  item_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MenuItemFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MenuItemFilter>>;
  owner?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  restaurant_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type MenuItemInsertInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  is_vegetarian?: InputMaybe<Scalars['Boolean']['input']>;
  item_name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  restaurant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type MenuItemInsertResponse = {
  __typename?: 'MenuItemInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MenuItem>;
};

export type MenuItemOrderBy = {
  allergens?: InputMaybe<OrderByDirection>;
  category?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image?: InputMaybe<OrderByDirection>;
  is_vegetarian?: InputMaybe<OrderByDirection>;
  item_name?: InputMaybe<OrderByDirection>;
  owner?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  restaurant_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type MenuItemUpdateInput = {
  allergens?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  is_vegetarian?: InputMaybe<Scalars['Boolean']['input']>;
  item_name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  restaurant_id?: InputMaybe<Scalars['UUID']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type MenuItemUpdateResponse = {
  __typename?: 'MenuItemUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<MenuItem>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `MenuItem` collection */
  deleteFromMenuItemCollection: MenuItemDeleteResponse;
  /** Deletes zero or more records from the `Restaurant` collection */
  deleteFromRestaurantCollection: RestaurantDeleteResponse;
  /** Adds one or more `MenuItem` records to the collection */
  insertIntoMenuItemCollection?: Maybe<MenuItemInsertResponse>;
  /** Adds one or more `Restaurant` records to the collection */
  insertIntoRestaurantCollection?: Maybe<RestaurantInsertResponse>;
  /** Updates zero or more records in the `MenuItem` collection */
  updateMenuItemCollection: MenuItemUpdateResponse;
  /** Updates zero or more records in the `Restaurant` collection */
  updateRestaurantCollection: RestaurantUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromMenuItemCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MenuItemFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromRestaurantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoMenuItemCollectionArgs = {
  objects: Array<MenuItemInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoRestaurantCollectionArgs = {
  objects: Array<RestaurantInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateMenuItemCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MenuItemFilter>;
  set: MenuItemUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateRestaurantCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RestaurantFilter>;
  set: RestaurantUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `MenuItem` */
  menuItemCollection?: Maybe<MenuItemConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  requesting_user_id?: Maybe<Scalars['String']['output']>;
  /** A pagable collection of type `Restaurant` */
  restaurantCollection?: Maybe<RestaurantConnection>;
};


/** The root type for querying data */
export type QueryMenuItemCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MenuItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MenuItemOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryRestaurantCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RestaurantFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RestaurantOrderBy>>;
};

export type Restaurant = Node & {
  __typename?: 'Restaurant';
  active?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Datetime']['output']>;
  cuisine?: Maybe<Array<Maybe<Cuisines>>>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  menuItemCollection: MenuItemConnection;
  name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  opening_hours_end?: Maybe<Scalars['Opaque']['output']>;
  opening_hours_start?: Maybe<Scalars['Opaque']['output']>;
  owner: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['BigInt']['output']>;
  postal_code?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Datetime']['output']>;
};


export type RestaurantMenuItemCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MenuItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MenuItemOrderBy>>;
};

export type RestaurantConnection = {
  __typename?: 'RestaurantConnection';
  edges: Array<RestaurantEdge>;
  pageInfo: PageInfo;
};

export type RestaurantDeleteResponse = {
  __typename?: 'RestaurantDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

export type RestaurantEdge = {
  __typename?: 'RestaurantEdge';
  cursor: Scalars['String']['output'];
  node: Restaurant;
};

export type RestaurantFilter = {
  active?: InputMaybe<BooleanFilter>;
  address?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RestaurantFilter>>;
  city?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RestaurantFilter>;
  opening_hours_end?: InputMaybe<OpaqueFilter>;
  opening_hours_start?: InputMaybe<OpaqueFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RestaurantFilter>>;
  owner?: InputMaybe<StringFilter>;
  phone_number?: InputMaybe<BigIntFilter>;
  postal_code?: InputMaybe<IntFilter>;
  state?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type RestaurantInsertInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cuisine?: InputMaybe<Array<InputMaybe<Cuisines>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opening_hours_end?: InputMaybe<Scalars['Opaque']['input']>;
  opening_hours_start?: InputMaybe<Scalars['Opaque']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['BigInt']['input']>;
  postal_code?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type RestaurantInsertResponse = {
  __typename?: 'RestaurantInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

export type RestaurantOrderBy = {
  active?: InputMaybe<OrderByDirection>;
  address?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  opening_hours_end?: InputMaybe<OrderByDirection>;
  opening_hours_start?: InputMaybe<OrderByDirection>;
  owner?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
  postal_code?: InputMaybe<OrderByDirection>;
  state?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type RestaurantUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  cuisine?: InputMaybe<Array<InputMaybe<Cuisines>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opening_hours_end?: InputMaybe<Scalars['Opaque']['input']>;
  opening_hours_start?: InputMaybe<Scalars['Opaque']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['BigInt']['input']>;
  postal_code?: InputMaybe<Scalars['Int']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type RestaurantUpdateResponse = {
  __typename?: 'RestaurantUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Restaurant>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type GetRestaurantByOwnerQueryVariables = Exact<{
  owner: Scalars['String']['input'];
}>;


export type GetRestaurantByOwnerQuery = { __typename: 'Query', restaurantCollection?: { __typename: 'RestaurantConnection', edges: Array<{ __typename: 'RestaurantEdge', node: { __typename: 'Restaurant', id: string, owner: string, name?: string | null, image?: string | null, description?: string | null, address?: string | null, city?: string | null, state?: string | null, postal_code?: number | null, phone_number?: string | null, email?: string | null, opening_hours_end?: any | null, opening_hours_start?: any | null, active?: boolean | null } }> } | null };

export type GetRestaurantsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GetRestaurantsQuery = { __typename: 'Query', restaurantCollection?: { __typename: 'RestaurantConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null }, edges: Array<{ __typename: 'RestaurantEdge', cursor: string, node: { __typename: 'Restaurant', nodeId: string, id: string, owner: string, image?: string | null, name?: string | null, description?: string | null, address?: string | null, city?: string | null, state?: string | null, postal_code?: number | null, phone_number?: string | null, email?: string | null, opening_hours_end?: any | null, opening_hours_start?: any | null, active?: boolean | null, created_at?: string | null, updated_at?: string | null, cuisine?: Array<Cuisines | null> | null } }> } | null };


export const GetRestaurantByOwnerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRestaurantByOwner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"restaurantCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postal_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"opening_hours_end"}},{"kind":"Field","name":{"kind":"Name","value":"opening_hours_start"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRestaurantByOwnerQuery, GetRestaurantByOwnerQueryVariables>;
export const GetRestaurantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRestaurants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"restaurantCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"nodeId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postal_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"opening_hours_end"}},{"kind":"Field","name":{"kind":"Name","value":"opening_hours_start"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"cuisine"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetRestaurantsQuery, GetRestaurantsQueryVariables>;