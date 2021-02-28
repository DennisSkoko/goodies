import { StackProps } from '@aws-cdk/core'
import { Vpc } from '@aws-cdk/aws-ec2'
import { DatabaseInstance } from '@aws-cdk/aws-rds'

export type ApiProps = StackProps & { database: DatabaseInstance, vpc: Vpc }
