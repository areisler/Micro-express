module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCartItem {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CartItem {
  id: ID!
  articleId: ID!
  articleName: String!
  articlePrice: Float!
  quantity: Int!
}

type CartItemConnection {
  pageInfo: PageInfo!
  edges: [CartItemEdge]!
  aggregate: AggregateCartItem!
}

input CartItemCreateInput {
  id: ID
  articleId: ID!
  articleName: String!
  articlePrice: Float!
  quantity: Int!
}

type CartItemEdge {
  node: CartItem!
  cursor: String!
}

enum CartItemOrderByInput {
  id_ASC
  id_DESC
  articleId_ASC
  articleId_DESC
  articleName_ASC
  articleName_DESC
  articlePrice_ASC
  articlePrice_DESC
  quantity_ASC
  quantity_DESC
}

type CartItemPreviousValues {
  id: ID!
  articleId: ID!
  articleName: String!
  articlePrice: Float!
  quantity: Int!
}

type CartItemSubscriptionPayload {
  mutation: MutationType!
  node: CartItem
  updatedFields: [String!]
  previousValues: CartItemPreviousValues
}

input CartItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartItemWhereInput
  AND: [CartItemSubscriptionWhereInput!]
  OR: [CartItemSubscriptionWhereInput!]
  NOT: [CartItemSubscriptionWhereInput!]
}

input CartItemUpdateInput {
  articleId: ID
  articleName: String
  articlePrice: Float
  quantity: Int
}

input CartItemUpdateManyMutationInput {
  articleId: ID
  articleName: String
  articlePrice: Float
  quantity: Int
}

input CartItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  articleId: ID
  articleId_not: ID
  articleId_in: [ID!]
  articleId_not_in: [ID!]
  articleId_lt: ID
  articleId_lte: ID
  articleId_gt: ID
  articleId_gte: ID
  articleId_contains: ID
  articleId_not_contains: ID
  articleId_starts_with: ID
  articleId_not_starts_with: ID
  articleId_ends_with: ID
  articleId_not_ends_with: ID
  articleName: String
  articleName_not: String
  articleName_in: [String!]
  articleName_not_in: [String!]
  articleName_lt: String
  articleName_lte: String
  articleName_gt: String
  articleName_gte: String
  articleName_contains: String
  articleName_not_contains: String
  articleName_starts_with: String
  articleName_not_starts_with: String
  articleName_ends_with: String
  articleName_not_ends_with: String
  articlePrice: Float
  articlePrice_not: Float
  articlePrice_in: [Float!]
  articlePrice_not_in: [Float!]
  articlePrice_lt: Float
  articlePrice_lte: Float
  articlePrice_gt: Float
  articlePrice_gte: Float
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [CartItemWhereInput!]
  OR: [CartItemWhereInput!]
  NOT: [CartItemWhereInput!]
}

input CartItemWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCartItem(data: CartItemCreateInput!): CartItem!
  updateCartItem(data: CartItemUpdateInput!, where: CartItemWhereUniqueInput!): CartItem
  updateManyCartItems(data: CartItemUpdateManyMutationInput!, where: CartItemWhereInput): BatchPayload!
  upsertCartItem(where: CartItemWhereUniqueInput!, create: CartItemCreateInput!, update: CartItemUpdateInput!): CartItem!
  deleteCartItem(where: CartItemWhereUniqueInput!): CartItem
  deleteManyCartItems(where: CartItemWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cartItem(where: CartItemWhereUniqueInput!): CartItem
  cartItems(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem]!
  cartItemsConnection(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartItemConnection!
  node(id: ID!): Node
}

type Subscription {
  cartItem(where: CartItemSubscriptionWhereInput): CartItemSubscriptionPayload
}
`
      }
    