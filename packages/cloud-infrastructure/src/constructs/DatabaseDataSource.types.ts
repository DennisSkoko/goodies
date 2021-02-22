import { GraphqlApi, BaseResolverProps } from '@aws-cdk/aws-appsync'
import { Vpc } from '@aws-cdk/aws-ec2'

export type ManagerRequest =
  { action: 'get', props: { id: string } } |
  { action: 'list', props: {} } |
  { action: 'create', props: { recipe: string } }

export type ConstructorProps = {
  api: GraphqlApi
  vpc: Vpc
}

export type CreateResolverProps = Omit<
  BaseResolverProps,
  'responseMappingTemplate'|'requestMappingTemplate'
> & { payload: ManagerRequest }
