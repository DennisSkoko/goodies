import { FunctionProps } from '@aws-cdk/aws-lambda'

type BaseProps = Omit<FunctionProps, 'runtime'|'handler'|'code'>

export type Project = 'database'

export type DatabaseProjectProps = BaseProps
  & { project: 'database', handler: 'manager' }

export type Props = DatabaseProjectProps
