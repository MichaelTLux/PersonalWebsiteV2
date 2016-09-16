import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';

import personalReducer from '../../../src/reducers/personal';

describe('Personal Information Reducer', () => {
    function createInitialState() {
        return {
            firstName: 'Michael',
            lastName: 'Lux',
            summary: 'I a modivated full stack developer that has a love for learning new things',
            focus: 'Front End Development'
        };
    }

    before(() => {
        chai.use(sinonChai);
    });

    beforeEach(() => {
    });

    afterEach(() => {
    });

    it('should set the correct initial state', () => {
        const expectedInitialState = createInitialState(),
            actualInitialState = personalReducer(undefined, {});

        expect(actualInitialState).to.deep.equal(expectedInitialState);
    });
});
