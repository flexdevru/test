export declare class StorylineManager {
    private static _instance;
    private storyLine;
    private player;
    static get instance(): StorylineManager;
    constructor();
    get inPlayer(): boolean;
    goNext: () => void;
    goNextSlide: () => void;
    setVar: (variable: string, value?: any) => void;
    getVar: (variable: string) => any;
}
