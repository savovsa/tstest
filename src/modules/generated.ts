import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ModuleContext } from '@graphql-modules/core';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * Date in ISO 8601 format
   * https://en.wikipedia.org/wiki/ISO_8601
 **/
  Date: any,
};

export type AddClientInput = {
  name?: Maybe<Scalars['String']>,
};

export type Client = {
  __typename?: 'Client',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};


export type Invoice = {
  __typename?: 'Invoice',
  id: Scalars['ID'],
  date?: Maybe<Scalars['Date']>,
  client?: Maybe<Client>,
  items?: Maybe<Array<Maybe<InvoiceItem>>>,
  user?: Maybe<User>,
};

export type InvoiceInput = {
  date: Scalars['Date'],
  clientId: Scalars['ID'],
  items: Array<InvoiceItemInput>,
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Float']>,
  unitType?: Maybe<UnitType>,
  price?: Maybe<Scalars['Float']>,
};

export type InvoiceItemInput = {
  id: Scalars['ID'],
  quantity: Scalars['Float'],
  price: Scalars['Float'],
};

export type Mutation = {
  __typename?: 'Mutation',
  addClient?: Maybe<Scalars['Boolean']>,
  addInvoice?: Maybe<Scalars['Boolean']>,
  register?: Maybe<Scalars['Boolean']>,
  login: Scalars['String'],
};


export type MutationAddClientArgs = {
  client: AddClientInput
};


export type MutationAddInvoiceArgs = {
  invoice: InvoiceInput
};


export type MutationRegisterArgs = {
  user: RegisterInputUser
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
  __typename?: 'Query',
  getClientById?: Maybe<Array<Maybe<Client>>>,
  getInvoiceById?: Maybe<Invoice>,
  currentUser?: Maybe<User>,
  getUserById?: Maybe<User>,
};


export type QueryGetClientByIdArgs = {
  id: Scalars['ID']
};


export type QueryGetInvoiceByIdArgs = {
  id: Scalars['ID']
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']
};

export type RegisterInputUser = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
};

export enum UnitType {
  Pc = 'PC',
  Kg = 'KG',
  L = 'L'
}

export type User = {
  __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Client: ResolverTypeWrapper<Client>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Invoice: ResolverTypeWrapper<Invoice>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  InvoiceItem: ResolverTypeWrapper<InvoiceItem>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  UnitType: UnitType,
  User: ResolverTypeWrapper<User>,
  Mutation: ResolverTypeWrapper<{}>,
  AddClientInput: AddClientInput,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  InvoiceInput: InvoiceInput,
  InvoiceItemInput: InvoiceItemInput,
  RegisterInputUser: RegisterInputUser,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  ID: Scalars['ID'],
  Client: Client,
  String: Scalars['String'],
  Invoice: Invoice,
  Date: Scalars['Date'],
  InvoiceItem: InvoiceItem,
  Float: Scalars['Float'],
  UnitType: UnitType,
  User: User,
  Mutation: {},
  AddClientInput: AddClientInput,
  Boolean: Scalars['Boolean'],
  InvoiceInput: InvoiceInput,
  InvoiceItemInput: InvoiceItemInput,
  RegisterInputUser: RegisterInputUser,
};

export type ClientResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type InvoiceResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Invoice'] = ResolversParentTypes['Invoice']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  client?: Resolver<Maybe<ResolversTypes['Client']>, ParentType, ContextType>,
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['InvoiceItem']>>>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
};

export type InvoiceItemResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['InvoiceItem'] = ResolversParentTypes['InvoiceItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  unitType?: Resolver<Maybe<ResolversTypes['UnitType']>, ParentType, ContextType>,
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
};

export type MutationResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addClient?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationAddClientArgs, 'client'>>,
  addInvoice?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationAddInvoiceArgs, 'invoice'>>,
  register?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'user'>>,
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>,
};

export type QueryResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getClientById?: Resolver<Maybe<Array<Maybe<ResolversTypes['Client']>>>, ParentType, ContextType, RequireFields<QueryGetClientByIdArgs, 'id'>>,
  getInvoiceById?: Resolver<Maybe<ResolversTypes['Invoice']>, ParentType, ContextType, RequireFields<QueryGetInvoiceByIdArgs, 'id'>>,
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>,
};

export type UserResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = ModuleContext> = {
  Client?: ClientResolvers<ContextType>,
  Date?: GraphQLScalarType,
  Invoice?: InvoiceResolvers<ContextType>,
  InvoiceItem?: InvoiceItemResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = ModuleContext> = Resolvers<ContextType>;
