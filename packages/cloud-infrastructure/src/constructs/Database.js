'use strict'

const core = require('@aws-cdk/core')
const ec2 = require('@aws-cdk/aws-ec2')
const rds = require('@aws-cdk/aws-rds')

class Database extends core.Construct {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {import('./Database.types').DatabaseProps} props
   */
  constructor(scope, id, props) {
    super(scope, id)

    // Skapa en egen security group och lägg till Cloud9 access
    // CREATE TABLE Recipes ( id CHAR(36) PRIMARY KEY, name VARCHAR(255) NOT NULL );

    const securityGroup = new ec2.SecurityGroup(this, `${id}SecurityGroup`, {
      vpc: props.vpc
    })

    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(3306))

    this.instance = new rds.DatabaseInstance(this, `${id}Instance`, {
      engine: rds.DatabaseInstanceEngine.mariaDb({
        version: rds.MariaDbEngineVersion.VER_10_4_13
      }),
      databaseName: props.dbName,
      deleteAutomatedBackups: process.env.NODE_ENV !== 'production',
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      removalPolicy: process.env.NODE_ENV === 'production'
        ? core.RemovalPolicy.RETAIN
        : core.RemovalPolicy.SNAPSHOT,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T2,
        ec2.InstanceSize.MICRO
      ),
      securityGroups: [securityGroup]
    })
  }
}

module.exports = Database
