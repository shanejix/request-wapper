export default class InitialState {

    constructor(context) {
        this.super = context;
    }

    init() {
        this.super.setState('pendding');
        console.log('initial config');
    }
}