import React from 'react';
import ResumeDrawerLink from './drawer-link';

export default class Drawer extends React.Component {
    render() {
        return (
            <div className="mdl-layout__drawer" ref="drawer">
                <span className="mdl-layout-title">Actions</span>
                <nav className="mdl-navigation">
                    <ResumeDrawerLink
                        text="Link one"
                    />
                    <ResumeDrawerLink
                        text="Link two hidden"
                        display={false}
                    />
                </nav>
            </div>
        );
    }
}
