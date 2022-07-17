export declare class FontsManager {
    private static _instance;
    static get instance(): FontsManager;
    constructor();
    init: (value: Array<string>, onLoad: () => void) => void;
}
