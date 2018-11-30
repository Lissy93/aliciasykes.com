/**
 * This class stores the tree structure for navbar item groups
 * @author Alicia Sykes
 */

import NavBarItem from './NavBarItem';

export default class NavBarItems {
    private theNavBarItems: NavBarItem[];

    /**
     * Initially requires an array of JSON objects
     * containing `name`, `path` and optionally `children`
     * @param theNavBarItems
     */
    constructor(theNavBarItems?: any) {
        this.theNavBarItems = theNavBarItems || [];
    }

    /**
     * Does what it says.
     * Turns JSON into nav bar items, and returns.
     */
    public makeTheFuckingNavbar(navData: any) {
        const theFuckingNavBar: NavBarItem[] = [];
        for (const navDataItem of navData) {
            const children = (navDataItem.children.length > 0) ?
                this.makeTheFuckingNavbar(navDataItem.children) : [];
            theFuckingNavBar.push(this.makeItem(navDataItem, children));
        }
        return theFuckingNavBar;
    }

    /**
     * Turns an individual JSON object into NavBarItem
     * @param record
     * @param children
     */
    private makeItem(record: any, children: NavBarItem[]) {
        return new NavBarItem(record.name, record.path, children);
    }

}
