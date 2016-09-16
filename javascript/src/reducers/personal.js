function getInitialState() {
    return {
        firstName: 'Michael',
        lastName: 'Lux',
        summary: 'I a modivated full stack developer that has a love for learning new things',
        focus: 'Front End Development'
    };
}

export default (state = getInitialState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};
