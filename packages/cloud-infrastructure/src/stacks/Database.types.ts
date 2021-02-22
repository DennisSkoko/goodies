import { StackProps } from '@aws-cdk/core'
import { Vpc } from '@aws-cdk/aws-ec2'

export type DatabaseProps = StackProps & { vpc: Vpc }
