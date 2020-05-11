import { Trait } from "../types";
import { isIterable } from "../helpers";

export class Traits implements Iterable<Trait>{
    readonly items: Array<Trait>;

    constructor(items: Iterable<Trait>) {
        if (!isIterable(items))
            throw new Error('the passed object for the list is not iterable, please pass an iterable object!')
        this.items = Array.from(items);
    }

    add(item: Trait): Traits {
        this.items.push(item);
        return this;
    }

    remove(item: Trait): Traits {
        const idx = this.items.findIndex(i => i === item);
        if (idx)
            delete this.items[idx];
        return this;
    }

    [Symbol.iterator](): Iterator<Trait> {
        let index = 0;
        return {
            next: (): IteratorResult<Trait> =>  {
                return {
                    done: this.items.length === index,
                    value: this.items[index++]
                }
            }
        }
    }

}
