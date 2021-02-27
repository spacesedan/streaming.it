/* 328c326f9afc2a8de9133f83a7945bed3db12027
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

export type StreamsQueryVariables = Exact<{ [key: string]: never; }>;


export type StreamsQuery = (
  { __typename?: 'Query' }
  & { streams: Array<(
    { __typename?: 'Stream' }
    & Pick<Stream, '_id' | 'title' | 'description' | 'url'>
  )> }
);


export const StreamsDocument = gql`
    query Streams {
  streams {
    _id
    title
    description
    url
  }
}
    `;

/**
 * __useStreamsQuery__
 *
 * To run a query within a React component, call `useStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStreamsQuery(baseOptions?: Apollo.QueryHookOptions<StreamsQuery, StreamsQueryVariables>) {
        return Apollo.useQuery<StreamsQuery, StreamsQueryVariables>(StreamsDocument, baseOptions);
      }
export function useStreamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StreamsQuery, StreamsQueryVariables>) {
          return Apollo.useLazyQuery<StreamsQuery, StreamsQueryVariables>(StreamsDocument, baseOptions);
        }
export type StreamsQueryHookResult = ReturnType<typeof useStreamsQuery>;
export type StreamsLazyQueryHookResult = ReturnType<typeof useStreamsLazyQuery>;
export type StreamsQueryResult = Apollo.QueryResult<StreamsQuery, StreamsQueryVariables>;