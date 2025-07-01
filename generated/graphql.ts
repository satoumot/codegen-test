import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCart?: Maybe<Scalars['String']['output']>;
  payOrder?: Maybe<Scalars['String']['output']>;
  placeOrder?: Maybe<Scalars['String']['output']>;
  refundOrder?: Maybe<Scalars['String']['output']>;
  workflowOrder?: Maybe<Scalars['String']['output']>;
};


export type MutationCreateCartArgs = {
  id: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationPayOrderArgs = {
  amount: Scalars['Int']['input'];
  orderId: Scalars['String']['input'];
};


export type MutationPlaceOrderArgs = {
  id: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationRefundOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationWorkflowOrderArgs = {
  itemId: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
};

export type Product = {
  __typename?: 'Product';
  citest?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  cart?: Maybe<Cart>;
  product?: Maybe<Product>;
};


export type QueryCartArgs = {
  id: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
};

export type CreateCartMutationVariables = Exact<{
  id: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CreateCartMutation = { __typename?: 'Mutation', createCart?: string | null };

export type PayOrderMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
  amount: Scalars['Int']['input'];
}>;


export type PayOrderMutation = { __typename?: 'Mutation', payOrder?: string | null };

export type PlaceOrderMutationVariables = Exact<{
  id: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type PlaceOrderMutation = { __typename?: 'Mutation', placeOrder?: string | null };

export type RefundOrderMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
}>;


export type RefundOrderMutation = { __typename?: 'Mutation', refundOrder?: string | null };

export type WorkflowOrderMutationVariables = Exact<{
  orderId: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
}>;


export type WorkflowOrderMutation = { __typename?: 'Mutation', workflowOrder?: string | null };

export type CartQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CartQuery = { __typename?: 'Query', cart?: { __typename?: 'Cart', id?: string | null, productId?: string | null, quantity?: number | null } | null };

export type ProductQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id?: string | null, name?: string | null, price?: number | null, description?: string | null } | null };


export const CreateCartDocument = gql`
    mutation createCart($id: String!, $productId: String!, $quantity: Int!) {
  createCart(id: $id, productId: $productId, quantity: $quantity)
}
    `;
export type CreateCartMutationFn = Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>;

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *      productId: // value for 'productId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useCreateCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, options);
      }
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationResult = Apollo.MutationResult<CreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const PayOrderDocument = gql`
    mutation payOrder($orderId: String!, $amount: Int!) {
  payOrder(orderId: $orderId, amount: $amount)
}
    `;
export type PayOrderMutationFn = Apollo.MutationFunction<PayOrderMutation, PayOrderMutationVariables>;

/**
 * __usePayOrderMutation__
 *
 * To run a mutation, you first call `usePayOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePayOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [payOrderMutation, { data, loading, error }] = usePayOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function usePayOrderMutation(baseOptions?: Apollo.MutationHookOptions<PayOrderMutation, PayOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PayOrderMutation, PayOrderMutationVariables>(PayOrderDocument, options);
      }
export type PayOrderMutationHookResult = ReturnType<typeof usePayOrderMutation>;
export type PayOrderMutationResult = Apollo.MutationResult<PayOrderMutation>;
export type PayOrderMutationOptions = Apollo.BaseMutationOptions<PayOrderMutation, PayOrderMutationVariables>;
export const PlaceOrderDocument = gql`
    mutation placeOrder($id: String!, $itemId: String!, $quantity: Int!) {
  placeOrder(id: $id, itemId: $itemId, quantity: $quantity)
}
    `;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      itemId: // value for 'itemId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, options);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const RefundOrderDocument = gql`
    mutation refundOrder($orderId: String!) {
  refundOrder(orderId: $orderId)
}
    `;
export type RefundOrderMutationFn = Apollo.MutationFunction<RefundOrderMutation, RefundOrderMutationVariables>;

/**
 * __useRefundOrderMutation__
 *
 * To run a mutation, you first call `useRefundOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefundOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refundOrderMutation, { data, loading, error }] = useRefundOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useRefundOrderMutation(baseOptions?: Apollo.MutationHookOptions<RefundOrderMutation, RefundOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefundOrderMutation, RefundOrderMutationVariables>(RefundOrderDocument, options);
      }
export type RefundOrderMutationHookResult = ReturnType<typeof useRefundOrderMutation>;
export type RefundOrderMutationResult = Apollo.MutationResult<RefundOrderMutation>;
export type RefundOrderMutationOptions = Apollo.BaseMutationOptions<RefundOrderMutation, RefundOrderMutationVariables>;
export const WorkflowOrderDocument = gql`
    mutation workflowOrder($orderId: String!, $itemId: String!) {
  workflowOrder(orderId: $orderId, itemId: $itemId)
}
    `;
export type WorkflowOrderMutationFn = Apollo.MutationFunction<WorkflowOrderMutation, WorkflowOrderMutationVariables>;

/**
 * __useWorkflowOrderMutation__
 *
 * To run a mutation, you first call `useWorkflowOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWorkflowOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [workflowOrderMutation, { data, loading, error }] = useWorkflowOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      itemId: // value for 'itemId'
 *   },
 * });
 */
export function useWorkflowOrderMutation(baseOptions?: Apollo.MutationHookOptions<WorkflowOrderMutation, WorkflowOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WorkflowOrderMutation, WorkflowOrderMutationVariables>(WorkflowOrderDocument, options);
      }
export type WorkflowOrderMutationHookResult = ReturnType<typeof useWorkflowOrderMutation>;
export type WorkflowOrderMutationResult = Apollo.MutationResult<WorkflowOrderMutation>;
export type WorkflowOrderMutationOptions = Apollo.BaseMutationOptions<WorkflowOrderMutation, WorkflowOrderMutationVariables>;
export const CartDocument = gql`
    query cart($id: String!) {
  cart(id: $id) {
    id
    productId
    quantity
  }
}
    `;

/**
 * __useCartQuery__
 *
 * To run a query within a React component, call `useCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCartQuery(baseOptions: Apollo.QueryHookOptions<CartQuery, CartQueryVariables> & ({ variables: CartQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CartQuery, CartQueryVariables>(CartDocument, options);
      }
export function useCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartQuery, CartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CartQuery, CartQueryVariables>(CartDocument, options);
        }
export function useCartSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CartQuery, CartQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CartQuery, CartQueryVariables>(CartDocument, options);
        }
export type CartQueryHookResult = ReturnType<typeof useCartQuery>;
export type CartLazyQueryHookResult = ReturnType<typeof useCartLazyQuery>;
export type CartSuspenseQueryHookResult = ReturnType<typeof useCartSuspenseQuery>;
export type CartQueryResult = Apollo.QueryResult<CartQuery, CartQueryVariables>;
export const ProductDocument = gql`
    query product($id: String!) {
  product(id: $id) {
    id
    name
    price
    description
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables> & ({ variables: ProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export function useProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;