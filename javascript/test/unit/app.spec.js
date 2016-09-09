import App from '../../src/app';
import Resume from '../../src/resume';
import reducers from '../../src/reducers';

import React from 'react';
import {shallow} from 'enzyme';

import * as Redux from 'redux';
import {Provider} from 'react-redux';

import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Chance from 'chance';

describe('App Component', () => {
    let renderedElement,
        sandbox,
        chance,
        fakeStore,
        fakeStoreState,
        renderedResumeComponent,
        renderedProviderComponent;
    
    before(() => {
        chai.use(sinonChai);
    });

    function cacheNodes() {
        renderedProviderComponent = renderedElement.find(Provider);
        renderedResumeComponent = renderedProviderComponent.find(Resume);
    }
    
    function renderComponent() {
        const componentElement = React.createElement(App);

        renderedElement = shallow(componentElement);

        cacheNodes();
    }
    
    beforeEach(() => {
        chance = new Chance();
        sandbox = sinon.sandbox.create();

        fakeStoreState = chance.string();
        fakeStore = {
            subscribe: sandbox.stub(),
            dispatch() {},
            getState() {
                return fakeStoreState;
            },
            [chance.string()]: chance.string()
        };
        sandbox.stub(Redux, 'createStore').returns(fakeStore);

        renderComponent();
    });
    
    afterEach(() => {
        sandbox.restore();
    });
    
    it('should exist with the correct markup', () => {
        expect(renderedElement.node.type).to.equal('div');
        expect(renderedElement.props().className).to.equal('app');
    });

    it('should create a Redux store', () => {
        expect(Redux.createStore).to.have.callCount(1);
        expect(Redux.createStore).to.be.calledWith(reducers);
    });

    it('should save the Redux store in the application state', () => {
        expect(renderedElement.instance().state.store).to.deep.equal(fakeStore);
    });

    it('should print any updates to the store', () => {
        const consoleStub = sandbox.stub(console, 'log');

        expect(fakeStore.subscribe).to.have.callCount(1);
        expect(fakeStore.subscribe).to.be.calledWith(sinon.match.func);

        const [callback] = fakeStore.subscribe.firstCall.args;
        callback();

        expect(consoleStub).to.have.callCount(1);
        expect(consoleStub).to.be.calledWith('store.getState()', fakeStoreState);
    });

    describe('Redux Store Provider', () => {
        it('should exist', () => {
            expect(renderedProviderComponent).to.not.equal(undefined);
        });

        it('should contain the Resume component as its only child', () => {
            expect(renderedResumeComponent).to.not.equal(undefined);
        });

        it('should have the store passed as a prop', () => {
            expect(renderedProviderComponent.props().store).to.eql(fakeStore);
        });
    });
});
