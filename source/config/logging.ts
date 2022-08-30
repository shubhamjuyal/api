const getTimeStamp = (/*no arguments*/): string => {
    return new Date().toISOString(); 
    // gives a string containing date in a readable format.
};

//following functions have three arguments named namespace, message and object where object argument is not neccessary...
const info = (namespace: string, message: string, object?: any) => {
    if(object)
    {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] [${message}] [${object}]`);
    }
    else{
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] [${message}]`);
    }
}
const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] [${message}] [${object}]`);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] [${message}]`);
    }
};
const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] [${message}] [${object}]`);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] [${message}]`);
    }
};
const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] [${message}] [${object}]`);
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] [${message}]`);
    }
};

export default {
    info,
    warn,
    error,
    debug
}