import {describe, it} from 'mocha'
const assert = require('assert')

import { add } from '../src/index'

describe('index', function () {
    describe('add', function () {
        it('should work well', function() {
            assert.equal(add(1, 2), 3)
        })
    })
})