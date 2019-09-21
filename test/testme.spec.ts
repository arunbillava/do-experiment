import TestMe from '../src/app/testme';
import { expect } from 'chai';
import 'mocha';

describe('TestMe',()=>{
    it('should return `Tested`',()=>{
        let testme=new TestMe();
        expect('Tested').equal(testme.testMe());
    })
});