import React from 'react';

import NavBar from './nav-bar';
import '../sass/resume.scss';

export default class Resume extends React.Component {
    render() {
        return (
            <div className="resume">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <NavBar/>
                    <main className="mdl-layout__content">
                        <div className="page-content">
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
