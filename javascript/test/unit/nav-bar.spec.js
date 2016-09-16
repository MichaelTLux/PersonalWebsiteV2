import React from 'react';
import {shallow} from 'enzyme';


import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';

import NavBar from '../../src/nav-bar';

describe('Nav-Bar Component', () => {
    let renderedElement,
        expectedProps,
        headerRowNode,
        titleNode,
        layoutSpacerNode,
        navBarNode,
        skillsLinkNode,
        personalLinkNode,
        jobsLinkNode,
        educationLinkNode,
        achievementsLinkNode;

    function cacheNodes() {
        headerRowNode = renderedElement.props().children;
        [titleNode, layoutSpacerNode, navBarNode] = headerRowNode.props.children;
        [
            personalLinkNode,
            skillsLinkNode,
            jobsLinkNode,
            educationLinkNode,
            achievementsLinkNode
        ] = navBarNode.props.children;
    }

    function renderComponent() {
        const componentElement = React.createElement(NavBar, expectedProps);

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
        expect(renderedElement.node.type).to.equal('header');
        expect(renderedElement.props().className).to.equal('mdl-layout__header');
    });

    it('should have a header row node with the correct markup', () => {
        expect(headerRowNode.type).to.equal('div');
        expect(headerRowNode.props.className).to.equal('mdl-layout__header-row');
    });

    it('should have a title node with the correct markup', () => {
        expect(titleNode.type).to.equal('span');
        expect(titleNode.props.className).to.equal('mdl-layout-title');
        expect(titleNode.props.children).to.equal('Resume Presenter');
    });

    it('should have a layout spacer with the correct markup', () => {
        expect(layoutSpacerNode.type).to.equal('div');
        expect(layoutSpacerNode.props.className).to.equal('mdl-layout-spacer');
    });

    describe('Header Navbar', () => {
        it('should exist with the correct markup', () => {
            expect(navBarNode.type).to.equal('nav');
            expect(navBarNode.props.className)
                .to.equal('mdl-navigation mdl-layout--large-screen-only');
        });

        it('should contain a link to the personal information section', () => {
            expect(personalLinkNode.type).to.equal('a');
            expect(personalLinkNode.props.className)
                .to.equal('mdl-navigation__link navLink paddingBefore');
            expect(personalLinkNode.props.href).to.equal('#personal');
            expect(personalLinkNode.props.children).to.equal('Personal');
        });

        it('should contain a link to the skills section', () => {
            expect(skillsLinkNode.type).to.equal('a');
            expect(skillsLinkNode.props.className).to.equal('mdl-navigation__link navLink');
            expect(skillsLinkNode.props.href).to.equal('#skills');
            expect(skillsLinkNode.props.children).to.equal('Skills');
        });

        it('should contain a link to the work experience section', () => {
            expect(jobsLinkNode.type).to.equal('a');
            expect(jobsLinkNode.props.className).to.equal('mdl-navigation__link navLink');
            expect(jobsLinkNode.props.href).to.equal('#jobs');
            expect(jobsLinkNode.props.children).to.equal('Work Experience');
        });

        it('should contain a link to the education section', () => {
            expect(educationLinkNode.type).to.equal('a');
            expect(educationLinkNode.props.className).to.equal('mdl-navigation__link navLink');
            expect(educationLinkNode.props.href).to.equal('#education');
            expect(educationLinkNode.props.children).to.equal('Education');
        });

        it('should contain a link to the achievements section', () => {
            expect(achievementsLinkNode.type).to.equal('a');
            expect(achievementsLinkNode.props.className).to.equal('mdl-navigation__link navLink');
            expect(achievementsLinkNode.props.href).to.equal('#achievements');
            expect(achievementsLinkNode.props.children).to.equal('Achievements');
        });
    });
});
