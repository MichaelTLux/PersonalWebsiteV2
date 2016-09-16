import Drawer from '../../src/drawer';
import DrawerLink from '../../src/drawer-link';

import React from 'react';
import {shallow} from 'enzyme';

import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';

describe('Resume Drawer Component', () => {
    let renderedElement,
        expectedProps,
        titleNode,
        navNode,
        firstLinkNode,
        hiddenLinkNode;

    function cacheNodes() {
        [titleNode, navNode] = renderedElement.props().children;
        [firstLinkNode, hiddenLinkNode] = navNode.props.children;
    }

    function renderComponent() {
        const componentElement = React.createElement(Drawer, expectedProps);

        renderedElement = shallow(componentElement);

        cacheNodes();
    }

    before(() => {
        chai.use(sinonChai);
    });

    beforeEach(() => {
        expectedProps = {};

        renderComponent();
    });

    it('should exist with the correct markup', () => {
        expect(renderedElement.node.type).to.equal('div');
        expect(renderedElement.props().className).to.equal('mdl-layout__drawer');
    });

    it('should have a title with the correct markup', () => {
        expect(titleNode.type).to.equal('span');
        expect(titleNode.props.className).to.equal('mdl-layout-title');
        expect(titleNode.props.children).to.equal('Actions');
    });
    describe('Nav Node', () => {
        it('should exist with the correct markup', () => {
            expect(navNode.type).to.equal('nav');
            expect(navNode.props.className).to.equal('mdl-navigation');
        });

        describe('Hidden Link', () => {
            it('should exist with the correct markup', () => {
                expect(firstLinkNode.type).to.equal(DrawerLink);
                expect(firstLinkNode.props.text).to.equal('Link one');
            });
        });

        describe('Hidden Link', () => {
            it('should exist with the correct markup', () => {
                expect(hiddenLinkNode.type).to.equal(DrawerLink);
                expect(hiddenLinkNode.props.text).to.equal('Link two hidden');
                expect(hiddenLinkNode.props.display).to.equal(false);
            });
        });
    });
});
