import React from 'react';

export default class ResumeDrawerLink extends React.Component {
    render() {
        const {text, onClick, display} = this.props;

        if (display) {
            return (
                <a
                    className="mdl-navigation__link"
                    onClick={onClick}
                >
                    {text}
                </a>
            );
        }

        return <div></div>;
    }
}
