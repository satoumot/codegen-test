// GENERATED: do not edit manually
import * as graphql from 'graphql';
export const StringTypename = 'String';
export const IDTypename = 'ID';
export const FloatTypename = 'Float';
export const IntTypename = 'Int';
export const BooleanTypename = 'Boolean';
export const ProductTypename = 'Product';
export const CartTypename = 'Cart';
export const QueryTypename = 'Query';
export const MutationTypename = 'Mutation';
export class Config<TContext> {
  constructor(config: Config<TContext>) { Object.assign(this, config) }
  Product?: ProductResolver<TContext>
  Cart?: CartResolver<TContext>
  Query!: QueryResolver<TContext>
  Mutation!: MutationResolver<TContext>
}
export interface ProductSource {
  __typename?: "Product"
  readonly id: string | null | undefined
  readonly name: string | null | undefined
  readonly price: number | null | undefined
  readonly description: string | null | undefined
}
export class ProductResolver<TContext> {
  constructor(config: ProductResolver<TContext>) { Object.assign(this, config) }
  __type?: (source: any, context: TContext, info: graphql.GraphQLResolveInfo) => boolean
}
export interface CartSource {
  __typename?: "Cart"
  readonly id: string | null | undefined
  readonly productId: string | null | undefined
  readonly quantity: number | null | undefined
}
export class CartResolver<TContext> {
  constructor(config: CartResolver<TContext>) { Object.assign(this, config) }
  __type?: (source: any, context: TContext, info: graphql.GraphQLResolveInfo) => boolean
}
export interface QuerySource {
  __typename?: "Query"
}
export class QueryResolver<TContext> {
  constructor(config: QueryResolver<TContext>) { Object.assign(this, config) }
  __type?: (source: any, context: TContext, info: graphql.GraphQLResolveInfo) => boolean
  product!: (src:  QuerySource, args: { id: string}, context: TContext, info: graphql.GraphQLResolveInfo) => ProductSource | null | undefined | Promise<ProductSource | null | undefined>
  cart!: (src:  QuerySource, args: { id: string}, context: TContext, info: graphql.GraphQLResolveInfo) => CartSource | null | undefined | Promise<CartSource | null | undefined>
}
export interface MutationSource {
  __typename?: "Mutation"
}
export class MutationResolver<TContext> {
  constructor(config: MutationResolver<TContext>) { Object.assign(this, config) }
  __type?: (source: any, context: TContext, info: graphql.GraphQLResolveInfo) => boolean
  createCart!: (src:  MutationSource, args: { id: string, productId: string, quantity: number}, context: TContext, info: graphql.GraphQLResolveInfo) => string | null | undefined | Promise<string | null | undefined>
  placeOrder!: (src:  MutationSource, args: { id: string, itemId: string, quantity: number}, context: TContext, info: graphql.GraphQLResolveInfo) => string | null | undefined | Promise<string | null | undefined>
  refundOrder!: (src:  MutationSource, args: { orderId: string}, context: TContext, info: graphql.GraphQLResolveInfo) => string | null | undefined | Promise<string | null | undefined>
  payOrder!: (src:  MutationSource, args: { orderId: string, amount: number}, context: TContext, info: graphql.GraphQLResolveInfo) => string | null | undefined | Promise<string | null | undefined>
  workflowOrder!: (src:  MutationSource, args: { orderId: string, itemId: string}, context: TContext, info: graphql.GraphQLResolveInfo) => string | null | undefined | Promise<string | null | undefined>
}
export function createGraphQLSchema<TContext>(config?: Config<TContext>): graphql.GraphQLSchema {
  const StringType = graphql.GraphQLString
  const IDType = graphql.GraphQLID
  const FloatType = graphql.GraphQLFloat
  const IntType = graphql.GraphQLInt
  const BooleanType = graphql.GraphQLBoolean
  const ProductType: graphql.GraphQLObjectType = new graphql.GraphQLObjectType({
    name: "Product",
    description: undefined,
    interfaces: () => [],
    isTypeOf: config?.Product?.__type,
    fields: () => ({
      id: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {},
      },
      name: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {},
      },
      price: { 
        type: FloatType, description: undefined, deprecationReason: undefined, args: {},
      },
      description: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {},
      },
    }),
  })
  const CartType: graphql.GraphQLObjectType = new graphql.GraphQLObjectType({
    name: "Cart",
    description: undefined,
    interfaces: () => [],
    isTypeOf: config?.Cart?.__type,
    fields: () => ({
      id: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {},
      },
      productId: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {},
      },
      quantity: { 
        type: IntType, description: undefined, deprecationReason: undefined, args: {},
      },
    }),
  })
  const QueryType: graphql.GraphQLObjectType = new graphql.GraphQLObjectType({
    name: "Query",
    description: undefined,
    interfaces: () => [],
    isTypeOf: config?.Query?.__type,
    fields: () => ({
      product: { 
        type: ProductType, description: undefined, deprecationReason: undefined, args: {  id: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },},
        resolve: config && config.Query.product as any,
      },
      cart: { 
        type: CartType, description: undefined, deprecationReason: undefined, args: {  id: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },},
        resolve: config && config.Query.cart as any,
      },
    }),
  })
  const MutationType: graphql.GraphQLObjectType = new graphql.GraphQLObjectType({
    name: "Mutation",
    description: undefined,
    interfaces: () => [],
    isTypeOf: config?.Mutation?.__type,
    fields: () => ({
      createCart: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {  id: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },   productId: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },   quantity: { type: new graphql.GraphQLNonNull(IntType), defaultValue: undefined, description: undefined },},
        resolve: config && config.Mutation.createCart as any,
      },
      placeOrder: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {  id: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },   itemId: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },   quantity: { type: new graphql.GraphQLNonNull(IntType), defaultValue: undefined, description: undefined },},
        resolve: config && config.Mutation.placeOrder as any,
      },
      refundOrder: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {  orderId: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },},
        resolve: config && config.Mutation.refundOrder as any,
      },
      payOrder: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {  orderId: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },   amount: { type: new graphql.GraphQLNonNull(IntType), defaultValue: undefined, description: undefined },},
        resolve: config && config.Mutation.payOrder as any,
      },
      workflowOrder: { 
        type: StringType, description: undefined, deprecationReason: undefined, args: {  orderId: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },   itemId: { type: new graphql.GraphQLNonNull(StringType), defaultValue: undefined, description: undefined },},
        resolve: config && config.Mutation.workflowOrder as any,
      },
    }),
  })
  return new graphql.GraphQLSchema({
    types: [
      StringType,
      IDType,
      FloatType,
      IntType,
      BooleanType,
      ProductType,
      CartType,
      QueryType,
      MutationType,
    ]
  });
}