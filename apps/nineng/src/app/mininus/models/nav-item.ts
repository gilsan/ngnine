export interface NavItem {
    displayName: string;
    displaed?: boolean;
    iconName: string;
    route?: string;
    children?: NavItem[];
}

export interface Item {
    id?: string;
    userId:string;
    name: string;
}