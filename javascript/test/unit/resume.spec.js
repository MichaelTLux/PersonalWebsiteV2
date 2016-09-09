import React from 'react';
import {shallow} from 'enzyme';

import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Resume from '../../src/resume';

describe('Resume Component', () => {
    let renderedElement,
        sandbox,
        mdlLayoutNode,
        mdlLayoutContentNode,
        pageContentNode;

    before(() => {
        chai.use(sinonChai);
    });

    function cacheNodes() {
        mdlLayoutNode = renderedElement.props().children;
        mdlLayoutContentNode = mdlLayoutNode.props.children;
        pageContentNode = mdlLayoutContentNode.props.children;
    }
    
    function renderComponent() {
        const componentElement = React.createElement(Resume);

        renderedElement = shallow(componentElement);

        cacheNodes();
    }
    
    beforeEach(() => {
        sandbox = sinon.sandbox.create();

        renderComponent();
    });
    
    afterEach(() => {
        sandbox.restore();
    });

    it('should exist with the correct markup', () => {
        expect(renderedElement.node.type).to.equal('div');
        expect(renderedElement.props().className).to.equal('resume');
    });

    it('should contain an mdl-layout div', () => {
        expect(mdlLayoutNode.type).to.equal('div');
        expect(mdlLayoutNode.props.className)
            .to.equal('mdl-layout mdl-js-layout mdl-layout--fixed-header');
    });

    it('should contain a layout content node', () => {
        expect(mdlLayoutContentNode.type).to.equal('main');
        expect(mdlLayoutContentNode.props.className).to.equal('mdl-layout__content');
    });

    it('should contain a page content node', () => {
        expect(pageContentNode.type).to.equal('div');
        expect(pageContentNode.props.className).to.equal('page-content');
    });
});
