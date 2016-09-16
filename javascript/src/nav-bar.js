import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Resume Presenter</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <a href="#personal" className="mdl-navigation__link navLink paddingBefore">Personal</a>
                        <a href="#skills" className="mdl-navigation__link navLink">Skills</a>
                        <a href="#jobs" className="mdl-navigation__link navLink">Work Experience</a>
                        <a href="#education" className="mdl-navigation__link navLink">Education</a>
                        <a href="#achievements" className="mdl-navigation__link navLink">Achievements</a>
                    </nav>
                </div>
            </header>
        );
    }
}

