import { Vpc } from '@aws-cdk/aws-ec2'

export type DatabaseProps = { vpc: Vpc, dbName: string }
