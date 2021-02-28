'use strict'

const core = require('@aws-cdk/core')
const cloud9 = require('@aws-cdk/aws-cloud9')
const ec2 = require('@aws-cdk/aws-ec2')
const Api = require('../constructs/Api')
const Database = require('../constructs/Database')

class Main extends core.Stack {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {import('@aws-cdk/core').StackProps} props
   */
  constructor(scope, id, props) {
    super(scope, id, props)

    /** @readonly */
    const vpc = new ec2.Vpc(this, 'Vpc', {
      natGateways: 0
    })

    if (process.env.NODE_ENV !== 'production') {
      /** @readonly */
      this.devMachine = new cloud9.Ec2Environment(this, 'DevMachine', {
        vpc,
        description: 'Machine for development purposes to access resources'
          + ' within the VPC',
        instanceType: ec2.InstanceType.of(
          ec2.InstanceClass.T3,
          ec2.InstanceSize.MICRO
        ),
        subnetSelection: {
          subnetType: ec2.SubnetType.PUBLIC
        }
      })
    }

    const database = new Database(this, 'Database', { vpc, dbName: id })

    new Api(this, 'Api', { vpc, database: database.instance })
  }
}

module.exports = Main
