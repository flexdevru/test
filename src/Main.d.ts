import * as PIXI from 'pixi.js';
export declare class Main extends PIXI.Container {
    static DEBUG: boolean;
    static instance: Main;
    private last_time;
    private fps_label;
    private data?;
    constructor();
    private onAssetsLoadComplete;
    private createChildren;
    private onPointerDown;
    show_fps(): void;
}
