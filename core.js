class InitialState {

    constructor(context) {
        this.super = context;
    }

    init() {

        // ! soome logic here 

        // undefunde -> initial
        this.super.setState('initial');

        // todo Logger replace
        console.log('finished initial config');

        // next step
        this.super.readyState.init();


    }
}

class ReadyState {
    constructor(context) {
        this.super = context;
    }

    init() {
        // ! soome logic here 

        // initial -> ready
        this.super.setState('ready');

        // todo Logger replace
        console.log('finished request config');

        // next step
        this.super.pendingState.init();
        // this.super.resolvedState.init();
        // this.super.rejectedState.init();
    }
}

class PendingState {
    constructor(context) {
        this.super = context;
    }

    init() {
        // ! soome logic here 

        // ready -> pedding
        this.super.setState('pedding');

        // todo Logger replace
        console.log('request pedding');

        // next step
        this.super.resolvedState.init();
        // this.super.rejectedState.init();
    }
}

class ResolvedState {
    constructor(context) {
        this.super = context;
    }

    init() {
        // ! soome logic here 

        // pedding -> resolved
        this.super.setState('resolved');

        // todo Logger replace
        console.log('request resolved');

        // to ready ?
        // this.super.readyState.init();
    }
}

class RejectedState {
    constructor(context) {
        this.super = context;
    }

    init() {
        // ! soome logic here 

        // pedding -> rejected
        this.super.setState('rejected');

        // todo Logger replace
        console.log('request rejected');

        // to ready ?
        // this.super.readyState.init();
    }
}

// import InitialState from './InitialState'

class RequestWrapper {
    constructor(config) {
        this.state = undefined;
        this.consfig = config;
        this.initialState = new InitialState(this);
        this.readyState = new ReadyState(this);
        this.pendingState = new PendingState(this);
        this.rejectedState = new RejectedState(this);
        this.resolvedState = new ResolvedState(this);
    }

    init() {
        this.initialState.init();
    }

    setState(nextState) {
        this.log(nextState);
        this.state = nextState;
    }

    log() {
        console.log(this.state);
    }
}

const instance = new RequestWrapper({})

instance.init();