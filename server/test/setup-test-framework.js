'use strict'

const database = require('../src/database')

jest.mock('../src/logger')

beforeAll(() => database.authenticate())
afterAll(() => database.close())
