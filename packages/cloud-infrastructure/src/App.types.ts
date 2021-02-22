import { StackProps } from '@aws-cdk/core'

export type AppProps = Pick<StackProps, 'env'> & { name: string }
