// Generic functions are functions who receive arguments of any type and we can make them return the same type
export function genericFunction<T>(argument: T): T{
    return argument;
}

export const genericFunctionArrow = <T>(argument: T): T => argument;