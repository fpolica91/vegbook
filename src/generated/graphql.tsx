import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateFollowers = {
  __typename?: 'AggregateFollowers';
  _avg?: Maybe<FollowersAvgAggregate>;
  _count?: Maybe<FollowersCountAggregate>;
  _max?: Maybe<FollowersMaxAggregate>;
  _min?: Maybe<FollowersMinAggregate>;
  _sum?: Maybe<FollowersSumAggregate>;
};

export type AggregateFollowing = {
  __typename?: 'AggregateFollowing';
  _avg?: Maybe<FollowingAvgAggregate>;
  _count?: Maybe<FollowingCountAggregate>;
  _max?: Maybe<FollowingMaxAggregate>;
  _min?: Maybe<FollowingMinAggregate>;
  _sum?: Maybe<FollowingSumAggregate>;
};

export type AggregateProfile = {
  __typename?: 'AggregateProfile';
  _avg?: Maybe<ProfileAvgAggregate>;
  _count?: Maybe<ProfileCountAggregate>;
  _max?: Maybe<ProfileMaxAggregate>;
  _min?: Maybe<ProfileMinAggregate>;
  _sum?: Maybe<ProfileSumAggregate>;
};

export type AggregateRecipes = {
  __typename?: 'AggregateRecipes';
  _avg?: Maybe<RecipesAvgAggregate>;
  _count?: Maybe<RecipesCountAggregate>;
  _max?: Maybe<RecipesMaxAggregate>;
  _min?: Maybe<RecipesMinAggregate>;
  _sum?: Maybe<RecipesSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Followers = {
  __typename?: 'Followers';
  User: Array<User>;
  _count?: Maybe<FollowersCount>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type FollowersUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type FollowersAvgAggregate = {
  __typename?: 'FollowersAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type FollowersAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type FollowersCount = {
  __typename?: 'FollowersCount';
  User: Scalars['Int'];
};

export type FollowersCountAggregate = {
  __typename?: 'FollowersCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  userId: Scalars['Int'];
  username: Scalars['Int'];
};

export type FollowersCountOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowersCreateInput = {
  User?: Maybe<UserCreateNestedManyWithoutFollowersInput>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowersCreateManyInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowersCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<FollowersWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FollowersCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<FollowersCreateWithoutUserInput>>;
};

export type FollowersCreateOrConnectWithoutUserInput = {
  create: FollowersCreateWithoutUserInput;
  where: FollowersWhereUniqueInput;
};

export type FollowersCreateWithoutUserInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowersGroupBy = {
  __typename?: 'FollowersGroupBy';
  _avg?: Maybe<FollowersAvgAggregate>;
  _count?: Maybe<FollowersCountAggregate>;
  _max?: Maybe<FollowersMaxAggregate>;
  _min?: Maybe<FollowersMinAggregate>;
  _sum?: Maybe<FollowersSumAggregate>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowersListRelationFilter = {
  every?: Maybe<FollowersWhereInput>;
  none?: Maybe<FollowersWhereInput>;
  some?: Maybe<FollowersWhereInput>;
};

export type FollowersMaxAggregate = {
  __typename?: 'FollowersMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type FollowersMaxOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowersMinAggregate = {
  __typename?: 'FollowersMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type FollowersMinOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowersOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type FollowersOrderByWithAggregationInput = {
  _avg?: Maybe<FollowersAvgOrderByAggregateInput>;
  _count?: Maybe<FollowersCountOrderByAggregateInput>;
  _max?: Maybe<FollowersMaxOrderByAggregateInput>;
  _min?: Maybe<FollowersMinOrderByAggregateInput>;
  _sum?: Maybe<FollowersSumOrderByAggregateInput>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowersOrderByWithRelationInput = {
  User?: Maybe<UserOrderByRelationAggregateInput>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export enum FollowersScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UserId = 'userId',
  Username = 'username'
}

export type FollowersScalarWhereInput = {
  AND?: Maybe<Array<FollowersScalarWhereInput>>;
  NOT?: Maybe<Array<FollowersScalarWhereInput>>;
  OR?: Maybe<Array<FollowersScalarWhereInput>>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntNullableFilter>;
  username?: Maybe<StringFilter>;
};

export type FollowersScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<FollowersScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<FollowersScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<FollowersScalarWhereWithAggregatesInput>>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  userId?: Maybe<IntNullableWithAggregatesFilter>;
  username?: Maybe<StringWithAggregatesFilter>;
};

export type FollowersSumAggregate = {
  __typename?: 'FollowersSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type FollowersSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type FollowersUpdateInput = {
  User?: Maybe<UserUpdateManyWithoutFollowersInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FollowersUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FollowersUpdateManyWithWhereWithoutUserInput = {
  data: FollowersUpdateManyMutationInput;
  where: FollowersScalarWhereInput;
};

export type FollowersUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<FollowersWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FollowersCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<FollowersCreateWithoutUserInput>>;
  delete?: Maybe<Array<FollowersWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FollowersScalarWhereInput>>;
  disconnect?: Maybe<Array<FollowersWhereUniqueInput>>;
  set?: Maybe<Array<FollowersWhereUniqueInput>>;
  update?: Maybe<Array<FollowersUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FollowersUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<FollowersUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FollowersUpdateWithWhereUniqueWithoutUserInput = {
  data: FollowersUpdateWithoutUserInput;
  where: FollowersWhereUniqueInput;
};

export type FollowersUpdateWithoutUserInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FollowersUpsertWithWhereUniqueWithoutUserInput = {
  create: FollowersCreateWithoutUserInput;
  update: FollowersUpdateWithoutUserInput;
  where: FollowersWhereUniqueInput;
};

export type FollowersWhereInput = {
  AND?: Maybe<Array<FollowersWhereInput>>;
  NOT?: Maybe<Array<FollowersWhereInput>>;
  OR?: Maybe<Array<FollowersWhereInput>>;
  User?: Maybe<UserListRelationFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntNullableFilter>;
  username?: Maybe<StringFilter>;
};

export type FollowersWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Following = {
  __typename?: 'Following';
  User: Array<User>;
  _count?: Maybe<FollowingCount>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type FollowingUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type FollowingAvgAggregate = {
  __typename?: 'FollowingAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type FollowingAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type FollowingCount = {
  __typename?: 'FollowingCount';
  User: Scalars['Int'];
};

export type FollowingCountAggregate = {
  __typename?: 'FollowingCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  userId: Scalars['Int'];
  username: Scalars['Int'];
};

export type FollowingCountOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowingCreateInput = {
  User?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowingCreateManyInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowingCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<FollowingWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FollowingCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<FollowingCreateWithoutUserInput>>;
};

export type FollowingCreateOrConnectWithoutUserInput = {
  create: FollowingCreateWithoutUserInput;
  where: FollowingWhereUniqueInput;
};

export type FollowingCreateWithoutUserInput = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowingGroupBy = {
  __typename?: 'FollowingGroupBy';
  _avg?: Maybe<FollowingAvgAggregate>;
  _count?: Maybe<FollowingCountAggregate>;
  _max?: Maybe<FollowingMaxAggregate>;
  _min?: Maybe<FollowingMinAggregate>;
  _sum?: Maybe<FollowingSumAggregate>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type FollowingListRelationFilter = {
  every?: Maybe<FollowingWhereInput>;
  none?: Maybe<FollowingWhereInput>;
  some?: Maybe<FollowingWhereInput>;
};

export type FollowingMaxAggregate = {
  __typename?: 'FollowingMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type FollowingMaxOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowingMinAggregate = {
  __typename?: 'FollowingMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type FollowingMinOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowingOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type FollowingOrderByWithAggregationInput = {
  _avg?: Maybe<FollowingAvgOrderByAggregateInput>;
  _count?: Maybe<FollowingCountOrderByAggregateInput>;
  _max?: Maybe<FollowingMaxOrderByAggregateInput>;
  _min?: Maybe<FollowingMinOrderByAggregateInput>;
  _sum?: Maybe<FollowingSumOrderByAggregateInput>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type FollowingOrderByWithRelationInput = {
  User?: Maybe<UserOrderByRelationAggregateInput>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export enum FollowingScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UserId = 'userId',
  Username = 'username'
}

export type FollowingScalarWhereInput = {
  AND?: Maybe<Array<FollowingScalarWhereInput>>;
  NOT?: Maybe<Array<FollowingScalarWhereInput>>;
  OR?: Maybe<Array<FollowingScalarWhereInput>>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntNullableFilter>;
  username?: Maybe<StringFilter>;
};

export type FollowingScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<FollowingScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<FollowingScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<FollowingScalarWhereWithAggregatesInput>>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  userId?: Maybe<IntNullableWithAggregatesFilter>;
  username?: Maybe<StringWithAggregatesFilter>;
};

export type FollowingSumAggregate = {
  __typename?: 'FollowingSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type FollowingSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type FollowingUpdateInput = {
  User?: Maybe<UserUpdateManyWithoutFollowingInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FollowingUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FollowingUpdateManyWithWhereWithoutUserInput = {
  data: FollowingUpdateManyMutationInput;
  where: FollowingScalarWhereInput;
};

export type FollowingUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<FollowingWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FollowingCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<FollowingCreateWithoutUserInput>>;
  delete?: Maybe<Array<FollowingWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FollowingScalarWhereInput>>;
  disconnect?: Maybe<Array<FollowingWhereUniqueInput>>;
  set?: Maybe<Array<FollowingWhereUniqueInput>>;
  update?: Maybe<Array<FollowingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FollowingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<FollowingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FollowingUpdateWithWhereUniqueWithoutUserInput = {
  data: FollowingUpdateWithoutUserInput;
  where: FollowingWhereUniqueInput;
};

export type FollowingUpdateWithoutUserInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  userId?: Maybe<NullableIntFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FollowingUpsertWithWhereUniqueWithoutUserInput = {
  create: FollowingCreateWithoutUserInput;
  update: FollowingUpdateWithoutUserInput;
  where: FollowingWhereUniqueInput;
};

export type FollowingWhereInput = {
  AND?: Maybe<Array<FollowingWhereInput>>;
  NOT?: Maybe<Array<FollowingWhereInput>>;
  OR?: Maybe<Array<FollowingWhereInput>>;
  User?: Maybe<UserListRelationFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  userId?: Maybe<IntNullableFilter>;
  username?: Maybe<StringFilter>;
};

export type FollowingWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFollowers: Followers;
  createFollowing: Following;
  createManyFollowers: AffectedRowsOutput;
  createManyFollowing: AffectedRowsOutput;
  createManyProfile: AffectedRowsOutput;
  createManyRecipes: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createProfile: Profile;
  createRecipes: Recipes;
  createUser: User;
  deleteFollowers?: Maybe<Followers>;
  deleteFollowing?: Maybe<Following>;
  deleteManyFollowers: AffectedRowsOutput;
  deleteManyFollowing: AffectedRowsOutput;
  deleteManyProfile: AffectedRowsOutput;
  deleteManyRecipes: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteProfile?: Maybe<Profile>;
  deleteRecipes?: Maybe<Recipes>;
  deleteUser?: Maybe<User>;
  loginFucker: User;
  signupFucker: User;
  updateFollowers?: Maybe<Followers>;
  updateFollowing?: Maybe<Following>;
  updateManyFollowers: AffectedRowsOutput;
  updateManyFollowing: AffectedRowsOutput;
  updateManyProfile: AffectedRowsOutput;
  updateManyRecipes: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateProfile?: Maybe<Profile>;
  updateRecipes?: Maybe<Recipes>;
  updateUser?: Maybe<User>;
  upsertFollowers: Followers;
  upsertFollowing: Following;
  upsertProfile: Profile;
  upsertRecipes: Recipes;
  upsertUser: User;
};


export type MutationCreateFollowersArgs = {
  data: FollowersCreateInput;
};


export type MutationCreateFollowingArgs = {
  data: FollowingCreateInput;
};


export type MutationCreateManyFollowersArgs = {
  data: Array<FollowersCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyFollowingArgs = {
  data: Array<FollowingCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyProfileArgs = {
  data: Array<ProfileCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyRecipesArgs = {
  data: Array<RecipesCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateRecipesArgs = {
  data: RecipesCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteFollowersArgs = {
  where: FollowersWhereUniqueInput;
};


export type MutationDeleteFollowingArgs = {
  where: FollowingWhereUniqueInput;
};


export type MutationDeleteManyFollowersArgs = {
  where?: Maybe<FollowersWhereInput>;
};


export type MutationDeleteManyFollowingArgs = {
  where?: Maybe<FollowingWhereInput>;
};


export type MutationDeleteManyProfileArgs = {
  where?: Maybe<ProfileWhereInput>;
};


export type MutationDeleteManyRecipesArgs = {
  where?: Maybe<RecipesWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteRecipesArgs = {
  where: RecipesWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginFuckerArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  where: UserWhereUniqueInput;
};


export type MutationSignupFuckerArgs = {
  signupData: UserCreateInput;
};


export type MutationUpdateFollowersArgs = {
  data: FollowersUpdateInput;
  where: FollowersWhereUniqueInput;
};


export type MutationUpdateFollowingArgs = {
  data: FollowingUpdateInput;
  where: FollowingWhereUniqueInput;
};


export type MutationUpdateManyFollowersArgs = {
  data: FollowersUpdateManyMutationInput;
  where?: Maybe<FollowersWhereInput>;
};


export type MutationUpdateManyFollowingArgs = {
  data: FollowingUpdateManyMutationInput;
  where?: Maybe<FollowingWhereInput>;
};


export type MutationUpdateManyProfileArgs = {
  data: ProfileUpdateManyMutationInput;
  where?: Maybe<ProfileWhereInput>;
};


export type MutationUpdateManyRecipesArgs = {
  data: RecipesUpdateManyMutationInput;
  where?: Maybe<RecipesWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateRecipesArgs = {
  data: RecipesUpdateInput;
  where: RecipesWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertFollowersArgs = {
  create: FollowersCreateInput;
  update: FollowersUpdateInput;
  where: FollowersWhereUniqueInput;
};


export type MutationUpsertFollowingArgs = {
  create: FollowingCreateInput;
  update: FollowingUpdateInput;
  where: FollowingWhereUniqueInput;
};


export type MutationUpsertProfileArgs = {
  create: ProfileCreateInput;
  update: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpsertRecipesArgs = {
  create: RecipesCreateInput;
  update: RecipesUpdateInput;
  where: RecipesWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type ProfileAvgAggregate = {
  __typename?: 'ProfileAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ProfileAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileCountAggregate = {
  __typename?: 'ProfileCountAggregate';
  _all: Scalars['Int'];
  bio: Scalars['Int'];
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProfileCountOrderByAggregateInput = {
  bio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileCreateInput = {
  bio?: Maybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutProfileInput;
};

export type ProfileCreateManyInput = {
  bio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: Maybe<ProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: Maybe<ProfileCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutUserInput = {
  bio?: Maybe<Scalars['String']>;
};

export type ProfileGroupBy = {
  __typename?: 'ProfileGroupBy';
  _avg?: Maybe<ProfileAvgAggregate>;
  _count?: Maybe<ProfileCountAggregate>;
  _max?: Maybe<ProfileMaxAggregate>;
  _min?: Maybe<ProfileMinAggregate>;
  _sum?: Maybe<ProfileSumAggregate>;
  bio?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProfileMaxAggregate = {
  __typename?: 'ProfileMaxAggregate';
  bio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ProfileMaxOrderByAggregateInput = {
  bio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileMinAggregate = {
  __typename?: 'ProfileMinAggregate';
  bio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ProfileMinOrderByAggregateInput = {
  bio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileOrderByWithAggregationInput = {
  _avg?: Maybe<ProfileAvgOrderByAggregateInput>;
  _count?: Maybe<ProfileCountOrderByAggregateInput>;
  _max?: Maybe<ProfileMaxOrderByAggregateInput>;
  _min?: Maybe<ProfileMinOrderByAggregateInput>;
  _sum?: Maybe<ProfileSumOrderByAggregateInput>;
  bio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileOrderByWithRelationInput = {
  bio?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationInput>;
  userId?: Maybe<SortOrder>;
};

export type ProfileRelationFilter = {
  is?: Maybe<ProfileWhereInput>;
  isNot?: Maybe<ProfileWhereInput>;
};

export enum ProfileScalarFieldEnum {
  Bio = 'bio',
  Id = 'id',
  UserId = 'userId'
}

export type ProfileScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ProfileScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProfileScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ProfileScalarWhereWithAggregatesInput>>;
  bio?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  userId?: Maybe<IntWithAggregatesFilter>;
};

export type ProfileSumAggregate = {
  __typename?: 'ProfileSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ProfileSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProfileUpdateInput = {
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutProfileInput>;
};

export type ProfileUpdateManyMutationInput = {
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProfileUpdateOneWithoutUserInput = {
  connect?: Maybe<ProfileWhereUniqueInput>;
  connectOrCreate?: Maybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: Maybe<ProfileCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProfileUpdateWithoutUserInput>;
  upsert?: Maybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithoutUserInput = {
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileCreateWithoutUserInput;
  update: ProfileUpdateWithoutUserInput;
};

export type ProfileWhereInput = {
  AND?: Maybe<Array<ProfileWhereInput>>;
  NOT?: Maybe<Array<ProfileWhereInput>>;
  OR?: Maybe<Array<ProfileWhereInput>>;
  bio?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<IntFilter>;
};

export type ProfileWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateFollowers: AggregateFollowers;
  aggregateFollowing: AggregateFollowing;
  aggregateProfile: AggregateProfile;
  aggregateRecipes: AggregateRecipes;
  aggregateUser: AggregateUser;
  findFirstFollowers?: Maybe<Followers>;
  findFirstFollowing?: Maybe<Following>;
  findFirstProfile?: Maybe<Profile>;
  findFirstRecipes?: Maybe<Recipes>;
  findFirstUser?: Maybe<User>;
  findManyFollowers: Array<Followers>;
  findManyRecipes: Array<Recipes>;
  findUniqueFollowers?: Maybe<Followers>;
  findUniqueRecipes?: Maybe<Recipes>;
  following?: Maybe<Following>;
  followings: Array<Following>;
  groupByFollowers: Array<FollowersGroupBy>;
  groupByFollowing: Array<FollowingGroupBy>;
  groupByProfile: Array<ProfileGroupBy>;
  groupByRecipes: Array<RecipesGroupBy>;
  groupByUser: Array<UserGroupBy>;
  profile?: Maybe<Profile>;
  profiles: Array<Profile>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateFollowersArgs = {
  cursor?: Maybe<FollowersWhereUniqueInput>;
  orderBy?: Maybe<Array<FollowersOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowersWhereInput>;
};


export type QueryAggregateFollowingArgs = {
  cursor?: Maybe<FollowingWhereUniqueInput>;
  orderBy?: Maybe<Array<FollowingOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowingWhereInput>;
};


export type QueryAggregateProfileArgs = {
  cursor?: Maybe<ProfileWhereUniqueInput>;
  orderBy?: Maybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProfileWhereInput>;
};


export type QueryAggregateRecipesArgs = {
  cursor?: Maybe<RecipesWhereUniqueInput>;
  orderBy?: Maybe<Array<RecipesOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RecipesWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstFollowersArgs = {
  cursor?: Maybe<FollowersWhereUniqueInput>;
  distinct?: Maybe<Array<FollowersScalarFieldEnum>>;
  orderBy?: Maybe<Array<FollowersOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowersWhereInput>;
};


export type QueryFindFirstFollowingArgs = {
  cursor?: Maybe<FollowingWhereUniqueInput>;
  distinct?: Maybe<Array<FollowingScalarFieldEnum>>;
  orderBy?: Maybe<Array<FollowingOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowingWhereInput>;
};


export type QueryFindFirstProfileArgs = {
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<Array<ProfileScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProfileWhereInput>;
};


export type QueryFindFirstRecipesArgs = {
  cursor?: Maybe<RecipesWhereUniqueInput>;
  distinct?: Maybe<Array<RecipesScalarFieldEnum>>;
  orderBy?: Maybe<Array<RecipesOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RecipesWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyFollowersArgs = {
  cursor?: Maybe<FollowersWhereUniqueInput>;
  distinct?: Maybe<Array<FollowersScalarFieldEnum>>;
  orderBy?: Maybe<Array<FollowersOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowersWhereInput>;
};


export type QueryFindManyRecipesArgs = {
  cursor?: Maybe<RecipesWhereUniqueInput>;
  distinct?: Maybe<Array<RecipesScalarFieldEnum>>;
  orderBy?: Maybe<Array<RecipesOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RecipesWhereInput>;
};


export type QueryFindUniqueFollowersArgs = {
  where: FollowersWhereUniqueInput;
};


export type QueryFindUniqueRecipesArgs = {
  where: RecipesWhereUniqueInput;
};


export type QueryFollowingArgs = {
  where: FollowingWhereUniqueInput;
};


export type QueryFollowingsArgs = {
  cursor?: Maybe<FollowingWhereUniqueInput>;
  distinct?: Maybe<Array<FollowingScalarFieldEnum>>;
  orderBy?: Maybe<Array<FollowingOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowingWhereInput>;
};


export type QueryGroupByFollowersArgs = {
  by: Array<FollowersScalarFieldEnum>;
  having?: Maybe<FollowersScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<FollowersOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowersWhereInput>;
};


export type QueryGroupByFollowingArgs = {
  by: Array<FollowingScalarFieldEnum>;
  having?: Maybe<FollowingScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<FollowingOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowingWhereInput>;
};


export type QueryGroupByProfileArgs = {
  by: Array<ProfileScalarFieldEnum>;
  having?: Maybe<ProfileScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ProfileOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProfileWhereInput>;
};


export type QueryGroupByRecipesArgs = {
  by: Array<RecipesScalarFieldEnum>;
  having?: Maybe<RecipesScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<RecipesOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RecipesWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryProfilesArgs = {
  cursor?: Maybe<ProfileWhereUniqueInput>;
  distinct?: Maybe<Array<ProfileScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProfileOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProfileWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Recipes = {
  __typename?: 'Recipes';
  author: User;
  authorId: Scalars['Int'];
  cookingTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  ingredients: Array<Scalars['String']>;
  name: Scalars['String'];
  published: Scalars['Boolean'];
  servings?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type RecipesAvgAggregate = {
  __typename?: 'RecipesAvgAggregate';
  authorId?: Maybe<Scalars['Float']>;
  healthScore?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  servings?: Maybe<Scalars['Float']>;
};

export type RecipesAvgOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  healthScore?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  servings?: Maybe<SortOrder>;
};

export type RecipesCountAggregate = {
  __typename?: 'RecipesCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  cookingTime: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  healthScore: Scalars['Int'];
  id: Scalars['Int'];
  ingredients: Scalars['Int'];
  name: Scalars['Int'];
  published: Scalars['Int'];
  servings: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type RecipesCountOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  cookingTime?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  healthScore?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ingredients?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  servings?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RecipesCreateInput = {
  author: UserCreateNestedOneWithoutRecipesInput;
  cookingTime?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<RecipesCreateingredientsInput>;
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  servings?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RecipesCreateManyAuthorInput = {
  cookingTime?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<RecipesCreateManyingredientsInput>;
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  servings?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RecipesCreateManyAuthorInputEnvelope = {
  data: Array<RecipesCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type RecipesCreateManyInput = {
  authorId: Scalars['Int'];
  cookingTime?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<RecipesCreateManyingredientsInput>;
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  servings?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RecipesCreateManyingredientsInput = {
  set: Array<Scalars['String']>;
};

export type RecipesCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<RecipesWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RecipesCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<RecipesCreateWithoutAuthorInput>>;
  createMany?: Maybe<RecipesCreateManyAuthorInputEnvelope>;
};

export type RecipesCreateOrConnectWithoutAuthorInput = {
  create: RecipesCreateWithoutAuthorInput;
  where: RecipesWhereUniqueInput;
};

export type RecipesCreateWithoutAuthorInput = {
  cookingTime?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  ingredients?: Maybe<RecipesCreateingredientsInput>;
  name: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  servings?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RecipesCreateingredientsInput = {
  set: Array<Scalars['String']>;
};

export type RecipesGroupBy = {
  __typename?: 'RecipesGroupBy';
  _avg?: Maybe<RecipesAvgAggregate>;
  _count?: Maybe<RecipesCountAggregate>;
  _max?: Maybe<RecipesMaxAggregate>;
  _min?: Maybe<RecipesMinAggregate>;
  _sum?: Maybe<RecipesSumAggregate>;
  authorId: Scalars['Int'];
  cookingTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  ingredients?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  published: Scalars['Boolean'];
  servings?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type RecipesListRelationFilter = {
  every?: Maybe<RecipesWhereInput>;
  none?: Maybe<RecipesWhereInput>;
  some?: Maybe<RecipesWhereInput>;
};

export type RecipesMaxAggregate = {
  __typename?: 'RecipesMaxAggregate';
  authorId?: Maybe<Scalars['Int']>;
  cookingTime?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  servings?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RecipesMaxOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  cookingTime?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  healthScore?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  servings?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RecipesMinAggregate = {
  __typename?: 'RecipesMinAggregate';
  authorId?: Maybe<Scalars['Int']>;
  cookingTime?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  healthScore?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  servings?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RecipesMinOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  cookingTime?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  healthScore?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  servings?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RecipesOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type RecipesOrderByWithAggregationInput = {
  _avg?: Maybe<RecipesAvgOrderByAggregateInput>;
  _count?: Maybe<RecipesCountOrderByAggregateInput>;
  _max?: Maybe<RecipesMaxOrderByAggregateInput>;
  _min?: Maybe<RecipesMinOrderByAggregateInput>;
  _sum?: Maybe<RecipesSumOrderByAggregateInput>;
  authorId?: Maybe<SortOrder>;
  cookingTime?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  healthScore?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ingredients?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  servings?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type RecipesOrderByWithRelationInput = {
  author?: Maybe<UserOrderByWithRelationInput>;
  authorId?: Maybe<SortOrder>;
  cookingTime?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  healthScore?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ingredients?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  servings?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum RecipesScalarFieldEnum {
  AuthorId = 'authorId',
  CookingTime = 'cookingTime',
  CreatedAt = 'createdAt',
  Description = 'description',
  HealthScore = 'healthScore',
  Id = 'id',
  Ingredients = 'ingredients',
  Name = 'name',
  Published = 'published',
  Servings = 'servings',
  UpdatedAt = 'updatedAt'
}

export type RecipesScalarWhereInput = {
  AND?: Maybe<Array<RecipesScalarWhereInput>>;
  NOT?: Maybe<Array<RecipesScalarWhereInput>>;
  OR?: Maybe<Array<RecipesScalarWhereInput>>;
  authorId?: Maybe<IntFilter>;
  cookingTime?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  healthScore?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  ingredients?: Maybe<StringNullableListFilter>;
  name?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  servings?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RecipesScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<RecipesScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<RecipesScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<RecipesScalarWhereWithAggregatesInput>>;
  authorId?: Maybe<IntWithAggregatesFilter>;
  cookingTime?: Maybe<StringNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringNullableWithAggregatesFilter>;
  healthScore?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  ingredients?: Maybe<StringNullableListFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  servings?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type RecipesSumAggregate = {
  __typename?: 'RecipesSumAggregate';
  authorId?: Maybe<Scalars['Int']>;
  healthScore?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  servings?: Maybe<Scalars['Int']>;
};

export type RecipesSumOrderByAggregateInput = {
  authorId?: Maybe<SortOrder>;
  healthScore?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  servings?: Maybe<SortOrder>;
};

export type RecipesUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutRecipesInput>;
  cookingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  healthScore?: Maybe<NullableIntFieldUpdateOperationsInput>;
  ingredients?: Maybe<RecipesUpdateingredientsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  servings?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipesUpdateManyMutationInput = {
  cookingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  healthScore?: Maybe<NullableIntFieldUpdateOperationsInput>;
  ingredients?: Maybe<RecipesUpdateingredientsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  servings?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipesUpdateManyWithWhereWithoutAuthorInput = {
  data: RecipesUpdateManyMutationInput;
  where: RecipesScalarWhereInput;
};

export type RecipesUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<RecipesWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<RecipesCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<RecipesCreateWithoutAuthorInput>>;
  createMany?: Maybe<RecipesCreateManyAuthorInputEnvelope>;
  delete?: Maybe<Array<RecipesWhereUniqueInput>>;
  deleteMany?: Maybe<Array<RecipesScalarWhereInput>>;
  disconnect?: Maybe<Array<RecipesWhereUniqueInput>>;
  set?: Maybe<Array<RecipesWhereUniqueInput>>;
  update?: Maybe<Array<RecipesUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<RecipesUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<RecipesUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type RecipesUpdateWithWhereUniqueWithoutAuthorInput = {
  data: RecipesUpdateWithoutAuthorInput;
  where: RecipesWhereUniqueInput;
};

export type RecipesUpdateWithoutAuthorInput = {
  cookingTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  healthScore?: Maybe<NullableIntFieldUpdateOperationsInput>;
  ingredients?: Maybe<RecipesUpdateingredientsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  servings?: Maybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipesUpdateingredientsInput = {
  push?: Maybe<Array<Scalars['String']>>;
  set?: Maybe<Array<Scalars['String']>>;
};

export type RecipesUpsertWithWhereUniqueWithoutAuthorInput = {
  create: RecipesCreateWithoutAuthorInput;
  update: RecipesUpdateWithoutAuthorInput;
  where: RecipesWhereUniqueInput;
};

export type RecipesWhereInput = {
  AND?: Maybe<Array<RecipesWhereInput>>;
  NOT?: Maybe<Array<RecipesWhereInput>>;
  OR?: Maybe<Array<RecipesWhereInput>>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<IntFilter>;
  cookingTime?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  healthScore?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  ingredients?: Maybe<StringNullableListFilter>;
  name?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  servings?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type RecipesWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Scalars['String']>>;
  hasSome?: Maybe<Array<Scalars['String']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  email: Scalars['String'];
  followers: Array<Followers>;
  following: Array<Following>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  recipes: Array<Recipes>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export type UserFollowersArgs = {
  cursor?: Maybe<FollowersWhereUniqueInput>;
  distinct?: Maybe<Array<FollowersScalarFieldEnum>>;
  orderBy?: Maybe<Array<FollowersOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowersWhereInput>;
};


export type UserFollowingArgs = {
  cursor?: Maybe<FollowingWhereUniqueInput>;
  distinct?: Maybe<Array<FollowingScalarFieldEnum>>;
  orderBy?: Maybe<Array<FollowingOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FollowingWhereInput>;
};


export type UserRecipesArgs = {
  cursor?: Maybe<RecipesWhereUniqueInput>;
  distinct?: Maybe<Array<RecipesScalarFieldEnum>>;
  orderBy?: Maybe<Array<RecipesOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<RecipesWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  followers: Scalars['Int'];
  following: Scalars['Int'];
  recipes: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  token: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  followers?: Maybe<FollowersCreateNestedManyWithoutUserInput>;
  following?: Maybe<FollowingCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<ProfileCreateNestedOneWithoutUserInput>;
  recipes?: Maybe<RecipesCreateNestedManyWithoutAuthorInput>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserCreateNestedManyWithoutFollowersInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowersInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowersInput>>;
};

export type UserCreateNestedManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateNestedOneWithoutProfileInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProfileInput>;
  create?: Maybe<UserCreateWithoutProfileInput>;
};

export type UserCreateNestedOneWithoutRecipesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRecipesInput>;
  create?: Maybe<UserCreateWithoutRecipesInput>;
};

export type UserCreateOrConnectWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRecipesInput = {
  create: UserCreateWithoutRecipesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFollowersInput = {
  email: Scalars['String'];
  following?: Maybe<FollowingCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<ProfileCreateNestedOneWithoutUserInput>;
  recipes?: Maybe<RecipesCreateNestedManyWithoutAuthorInput>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserCreateWithoutFollowingInput = {
  email: Scalars['String'];
  followers?: Maybe<FollowersCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<ProfileCreateNestedOneWithoutUserInput>;
  recipes?: Maybe<RecipesCreateNestedManyWithoutAuthorInput>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserCreateWithoutProfileInput = {
  email: Scalars['String'];
  followers?: Maybe<FollowersCreateNestedManyWithoutUserInput>;
  following?: Maybe<FollowingCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  recipes?: Maybe<RecipesCreateNestedManyWithoutAuthorInput>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserCreateWithoutRecipesInput = {
  email: Scalars['String'];
  followers?: Maybe<FollowersCreateNestedManyWithoutUserInput>;
  following?: Maybe<FollowingCreateNestedManyWithoutUserInput>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<ProfileCreateNestedOneWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: Maybe<SortOrder>;
  followers?: Maybe<FollowersOrderByRelationAggregateInput>;
  following?: Maybe<FollowingOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  profile?: Maybe<ProfileOrderByWithRelationInput>;
  recipes?: Maybe<RecipesOrderByRelationAggregateInput>;
  token?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Token = 'token',
  Username = 'username'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  token?: Maybe<StringNullableFilter>;
  username?: Maybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  password?: Maybe<StringNullableWithAggregatesFilter>;
  token?: Maybe<StringNullableWithAggregatesFilter>;
  username?: Maybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  followers?: Maybe<FollowersUpdateManyWithoutUserInput>;
  following?: Maybe<FollowingUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  recipes?: Maybe<RecipesUpdateManyWithoutAuthorInput>;
  token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutFollowersInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutFollowingInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutFollowersInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowersInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowersInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowersInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowersInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowersInput>>;
};

export type UserUpdateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserUpdateOneRequiredWithoutProfileInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProfileInput>;
  create?: Maybe<UserCreateWithoutProfileInput>;
  update?: Maybe<UserUpdateWithoutProfileInput>;
  upsert?: Maybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateOneRequiredWithoutRecipesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRecipesInput>;
  create?: Maybe<UserCreateWithoutRecipesInput>;
  update?: Maybe<UserUpdateWithoutRecipesInput>;
  upsert?: Maybe<UserUpsertWithoutRecipesInput>;
};

export type UserUpdateWithWhereUniqueWithoutFollowersInput = {
  data: UserUpdateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  data: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutFollowersInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  following?: Maybe<FollowingUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  recipes?: Maybe<RecipesUpdateManyWithoutAuthorInput>;
  token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowingInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  followers?: Maybe<FollowersUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  recipes?: Maybe<RecipesUpdateManyWithoutAuthorInput>;
  token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProfileInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  followers?: Maybe<FollowersUpdateManyWithoutUserInput>;
  following?: Maybe<FollowingUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  recipes?: Maybe<RecipesUpdateManyWithoutAuthorInput>;
  token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRecipesInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  followers?: Maybe<FollowersUpdateManyWithoutUserInput>;
  following?: Maybe<FollowingUpdateManyWithoutUserInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<NullableStringFieldUpdateOperationsInput>;
  profile?: Maybe<ProfileUpdateOneWithoutUserInput>;
  token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutProfileInput = {
  create: UserCreateWithoutProfileInput;
  update: UserUpdateWithoutProfileInput;
};

export type UserUpsertWithoutRecipesInput = {
  create: UserCreateWithoutRecipesInput;
  update: UserUpdateWithoutRecipesInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  email?: Maybe<StringFilter>;
  followers?: Maybe<FollowersListRelationFilter>;
  following?: Maybe<FollowingListRelationFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  password?: Maybe<StringNullableFilter>;
  profile?: Maybe<ProfileRelationFilter>;
  recipes?: Maybe<RecipesListRelationFilter>;
  token?: Maybe<StringNullableFilter>;
  username?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
};

export type CreateUserMutationMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutationMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', email: string, password?: string | null | undefined, username: string, id: number } };

export type LoginUserMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
  where: UserWhereUniqueInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginFucker: { __typename?: 'User', email: string, token?: string | null | undefined, id: number, username: string, name?: string | null | undefined } };

export type SignUpUserMutationVariables = Exact<{
  signupData: UserCreateInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signupFucker: { __typename?: 'User', email: string, username: string, id: number } };

export type UserInfoFragment = { __typename?: 'User', id: number, name?: string | null | undefined, email: string, username: string };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name?: string | null | undefined, email: string, username: string }> };

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  name
  email
  username
}
    `;
export const CreateUserMutationDocument = gql`
    mutation CreateUserMutation($data: UserCreateInput!) {
  createUser(data: $data) {
    email
    password
    username
    id
  }
}
    `;
export type CreateUserMutationMutationFn = Apollo.MutationFunction<CreateUserMutationMutation, CreateUserMutationMutationVariables>;

/**
 * __useCreateUserMutationMutation__
 *
 * To run a mutation, you first call `useCreateUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutationMutation, { data, loading, error }] = useCreateUserMutationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutationMutation, CreateUserMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutationMutation, CreateUserMutationMutationVariables>(CreateUserMutationDocument, options);
      }
export type CreateUserMutationMutationHookResult = ReturnType<typeof useCreateUserMutationMutation>;
export type CreateUserMutationMutationResult = Apollo.MutationResult<CreateUserMutationMutation>;
export type CreateUserMutationMutationOptions = Apollo.BaseMutationOptions<CreateUserMutationMutation, CreateUserMutationMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($password: String!, $email: String!, $where: UserWhereUniqueInput!) {
  loginFucker(password: $password, email: $email, where: $where) {
    email
    token
    id
    username
    name
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser($signupData: UserCreateInput!) {
  signupFucker(signupData: $signupData) {
    email
    username
    id
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      signupData: // value for 'signupData'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;