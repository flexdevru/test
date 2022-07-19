import * as PIXI from 'pixi.js';
import MultiStyleText from 'pixi-multistyle-text';
import { AssetsManager } from './managers/AssetsManager';
import { SoundManager } from './managers/SoundManager';
import * as Utils from "./utils/Utils";
import { FontStyle } from "./utils/FontStyle"; 
import { VideoPreloader } from './preloader/VideoPreloader';

export class Main extends PIXI.Container {
	public static DEBUG: boolean = true;
	public static instance: Main;

	private last_time: number = 0;
	private fps_label!: PIXI.Text;

	private data?: Object;

	constructor() {
		super();
		this.addChild(AssetsManager.instance).start(this.onAssetsLoadComplete);
		SoundManager.instance.init();
	}

	private onAssetsLoadComplete = () => {
		Main.instance = this;
		this.removeChild(AssetsManager.instance);
		this.createChildren();
	}

	private createChildren = () => {

		this.data = AssetsManager.instance.getObject('data');

		this.addChild(AssetsManager.instance.getSprite(this.data['background']));


		this.fps_label = new PIXI.Text('00', { fontFamily: 'Bold', fontSize: 16, fill: 0xff0000 });
		this.addChild(this.fps_label).position.set(10, 10);
		
				let label: PIXI.Text = new PIXI.Text(this.data['title'], new FontStyle('Regular', 48).fill(0xff00ff).style);
		this.addChild(label).position.set(100, 10);

		let multistyle_label: MultiStyleText = new MultiStyleText(this.data['title2'], { default: { fontFamily: 'Regular', fontSize: 32, fill: 0xff00ff }, br: { fontFamily: 'Bold', fontSize: 32, fill: 0xff0000 } });
		this.addChild(multistyle_label).position.set(400, 100);

		let multistyle_label2: MultiStyleText = new MultiStyleText(this.data['title2'], new FontStyle('Regular', 32).fill(0xff00ff).addTag('br', new FontStyle('Light').fill(0x55ff55).fontSize(40)).multistyle);
		this.addChild(multistyle_label2).position.set(400, 200);

		

		Utils.TextureHelper.createRoundedTexture(200, 80, Utils.rgba_create(0x55ff55), Utils.rgba_create(0x000000), 2, 10).then(function (texture:PIXI.Texture) {
			Main.instance.addChild(PIXI.Sprite.from(texture)).position.set(100, 100);
		});

		this.addChild(PIXI.Sprite.from(Utils.TextureHelper.createRoundedTexture2(200, 80, Utils.rgba_create(0x5555ff), Utils.rgba_create(0x000000), 2, 10))).position.set(100, 250);
		
		let vp: VideoPreloader = new VideoPreloader(400, 300);
		this.addChild(vp).position.set(400, 300);
		vp.start();

	}

	private onPointerDown = (event:any) => { 
		console.log(event.type);
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