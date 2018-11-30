/**
 * This class stores the tree structure for navbar elements
 * @author Alicia Sykes
 */

export default class NavBarItem {
    private name: string;
    private path: string;
    private children: NavBarItem[];

    constructor(name: string, path: string, children?: NavBarItem[]) {
        this.name = name;
        this.path = path;
        this.children = children || [];
    }

    public hasChildren() {
        return this.children.length > 0;
    }
}
