import { Requirement } from "./Reuirement";
import { defaultComparator as exploratoryTest } from "../helpers";


export function Recruiter (
    job: Function, 
    whiteList?: Iterable<string | RegExp>, 
    blackList?: Iterable<string | RegExp>, 
    greylist?: Iterable<string | RegExp>, 
    test: Function = exploratoryTest ) {

    const requirement = new Requirement(whiteList, blackList, greylist)

    return {
        requirement,
        screening(candidate) {

            const { requirement } = this;
            // checking the blacklist, returns if blacklisted.
            for (let it = requirement.blackList[Symbol.iterator](), unwanted; unwanted = it.next().value;) {
                if (test(unwanted, candidate))
                    return;
            }
    
            // fire the tracking if event is whitelisted.
            for (let it = requirement.whiteList[Symbol.iterator](), wanted; wanted = it.next().value;) {
                if (test(wanted, candidate))
                    return job(candidate);
            }
        }
    }
}