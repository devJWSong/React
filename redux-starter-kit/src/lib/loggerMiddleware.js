const loggerMiddleware = store => next => action => {
    console.log('Present State', store.getState());
    console.log('Action', action);

    const result = next(action);

    console.log('Next State', store.getState());
    console.log('\n');

    return result;
}

export default loggerMiddleware;