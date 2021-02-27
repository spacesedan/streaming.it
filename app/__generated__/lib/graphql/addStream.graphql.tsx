/* 731fb7c34c9b91779ff3dd9343dacba0065c7709
 * This file is automatically generated by graphql-let. */

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Mongo object id scalar type */
  ObjectId: any;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addStream: Stream;
  deleteStream: Scalars['Boolean'];
  editStream: Stream;
  login: UserResponse;
  register: UserResponse;
};


export type MutationAddStreamArgs = {
  input: StreamInput;
};


export type MutationDeleteStreamArgs = {
  streamId: Scalars['ObjectId'];
};


export type MutationEditStreamArgs = {
  input: StreamInput;
};


export type MutationLoginArgs = {
  input: AuthInput;
};


export type MutationRegisterArgs = {
  input: AuthInput;
};


export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  user?: Maybe<User>;
};


export type QueryStreamArgs = {
  streamId: Scalars['ObjectId'];
};


export type QueryUserArgs = {
  userId: Scalars['ObjectId'];
};

export type Stream = {
  __typename?: 'Stream';
  _id: Scalars['ObjectId'];
  author: User;
  description: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type StreamInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ObjectId']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type AddStreamMutationVariables = Exact<{
  input: StreamInput;
}>;


export type AddStreamMutation = (
  { __typename?: 'Mutation' }
  & { addStream: (
    { __typename?: 'Stream' }
    & Pick<Stream, '_id' | 'title' | 'description' | 'url'>
  ) }
);


export const AddStreamDocument = gql`
    mutation AddStream($input: StreamInput!) {
  addStream(input: $input) {
    _id
    title
    description
    url
  }
}
    `;
export type AddStreamMutationFn = Apollo.MutationFunction<AddStreamMutation, AddStreamMutationVariables>;

/**
 * __useAddStreamMutation__
 *
 * To run a mutation, you first call `useAddStreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStreamMutation, { data, loading, error }] = useAddStreamMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddStreamMutation(baseOptions?: Apollo.MutationHookOptions<AddStreamMutation, AddStreamMutationVariables>) {
        return Apollo.useMutation<AddStreamMutation, AddStreamMutationVariables>(AddStreamDocument, baseOptions);
      }
export type AddStreamMutationHookResult = ReturnType<typeof useAddStreamMutation>;
export type AddStreamMutationResult = Apollo.MutationResult<AddStreamMutation>;
export type AddStreamMutationOptions = Apollo.BaseMutationOptions<AddStreamMutation, AddStreamMutationVariables>;