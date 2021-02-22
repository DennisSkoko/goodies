'use strict'

const core = require('@aws-cdk/core')
const ec2 = require('@aws-cdk/aws-ec2')
const cloud9 = require('@aws-cdk/aws-cloud9')

class Vpc extends core.Stack {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {import('@aws-cdk/core').StackProps} [props]
   */
  constructor(scope, id, props) {
    super(scope, id, props)

    /** @readonly */
    this.vpc = new ec2.Vpc(this, 'Vpc', {
      natGateways: 0
    })

    if (process.env.NODE_ENV !== 'production') {
      /** @readonly */
      this.devMachine = new cloud9.Ec2Environment(this, 'DevMachine', {
        vpc: this.vpc,
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

    // DevMachine7D6E7C2A:
    // Type: AWS::Cloud9::EnvironmentEC2
    // Properties:
    //   InstanceType: t3.micro
    //   Description: Machine for development purposes to access resources within the VPC
    //   SubnetId:
    //     Ref: VpcPublicSubnet1Subnet5C2D37C4
  }
}

module.exports = Vpc
