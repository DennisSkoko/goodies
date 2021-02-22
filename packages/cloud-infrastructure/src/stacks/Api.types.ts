import { StackProps } from '@aws-cdk/core'
import { Vpc } from '@aws-cdk/aws-ec2'
import { ServerlessCluster } from '@aws-cdk/aws-rds'

export type ApiProps = StackProps & { database: ServerlessCluster, vpc: Vpc }
