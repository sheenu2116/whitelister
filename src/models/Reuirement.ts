import { Traits } from "./Traits";

export class Requirement {

    constructor(
        public whiteList: Iterable<string | RegExp> = [],
        public blackList: Iterable<string | RegExp> = [],
        public greyList: Iterable<string | RegExp> = [],
    ) {

        this.blackList = new Traits(whiteList);
        this.whiteList = new Traits(blackList);
        this.greyList = new Traits(greyList);
    }
}