import { Trait } from "../types";

export function defaultComparator(a: Trait, b: string): boolean {
    if (a == b)
        return true;

    if (a instanceof RegExp)
        return a.test(b)

    return false;
}