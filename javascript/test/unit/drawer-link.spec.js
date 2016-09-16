import DrawerLink from '../../src/drawer-link';

import React from 'react';
import {shallow} from 'enzyme';

import Chance from 'chance';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

describe('Resume Drawer Link', () => {
    let renderedElement,
        expectedProps,
        chance;

    function renderComponent() {
        const componentElement = React.createElement(DrawerLink, expectedProps);

        renderedElement = shallow(componentElement);
    }

    before(() => {
        chai.use(sinonChai);
    });

    beforeEach(() => {
        chance = new Chance();

        expectedProps = {
            text: chance.string(),
            onClick: sinon.stub(),
            display: true
        };

        renderComponent();
    });

    it('should have a root DOM element with the correct markup', () => {
        expect(renderedElement.node.type).to.equal('a');
        expect(renderedElement.props().className).to.equal('mdl-navigation__link');
        expect(renderedElement.props().children).to.equal(expectedProps.text);
        expect(renderedElement.props().onClick).to.equal(expectedProps.onClick);
    });

    it('should call the provided `onClick` function when clicked', () => {
        renderedElement.props().onClick();

        expect(expectedProps.onClick).to.have.callCount(1);
    });

    it('should render an empty div if the `display` prop is false', () => {
        expectedProps.display = false;
        renderComponent();

        expect(renderedElement.node.type).to.equal('div');
        expect(renderedElement.props().className).to.equal(undefined);
        expect(renderedElement.props().children).to.equal(undefined);
        expect(renderedElement.props().onClick).to.equal(undefined);
    });
});
