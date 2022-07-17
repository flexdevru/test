import * as PIXI from 'pixi.js';

export class Main extends PIXI.Container {
	public static DEBUG: boolean = true;
	public static instance: Main;

	private last_time: number = 0;
	private fps_label!: PIXI.Text;

	constructor() {
		super();
//		this.addChild(AssetsManager.instance).start(this.onAssetsLoadComplete);
		this.createChildren();
	}

	private onAssetsLoadComplete = () => {
		Main.instance = this;
		//this.removeChild(AssetsManager.instance);
		//AssetsManager.instance.stopPreloader();
		this.createChildren();
	}

	private createChildren = () => {
		this.fps_label = new PIXI.Text('00', { fontFamily: 'Bold', fontSize: 16, fill: 0xff0000 });
        this.addChild(this.fps_label).position.set(10, 10);
	}

	public show_fps() {
		let current_time = new Date().getMilliseconds();
		let time: number = current_time - this.last_time;
		if (time == 0) return;
		if (this.fps_label == null) return;
		this.fps_label.text = (Math.floor(1000 / time)).toString() + ' fps';
		this.last_time = current_time;
	}
}