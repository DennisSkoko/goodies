'use strict'

const database = require('../src/database')

beforeAll(() => database.authenticate())
afterAll(() => database.close())
