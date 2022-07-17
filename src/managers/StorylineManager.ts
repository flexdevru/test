export class StorylineManager {
	private static _instance: StorylineManager;
	private storyLine: any = window.parent;
	private player: any;

	public static get instance(): StorylineManager {
		if (StorylineManager._instance == null) StorylineManager._instance = new StorylineManager();
		return StorylineManager._instance;
	}

	constructor() {
		if (this.storyLine != null) {
			try {
				this.player = this.storyLine.GetPlayer();
			}
			catch (e) {
				this.player = null;
			}
		}
	}

	public get inPlayer(): boolean {
		return this.player == null ? false : true;
	}

	public goNext = () => {
		let currentTime = new Date();
		let uniqueTime = currentTime.getTime();
		if (this.player != null) this.player.SetVar('goNext', uniqueTime);
		console.log('goNext invoked');
	}

	public goNextSlide = () => {
		let currentTime = new Date();
		let uniqueTime = currentTime.getTime();
		if (this.player != null) this.player.SetVar('goNextSlide', uniqueTime);
		console.log('goNextSlide invoked');
	}

	public setVar = (variable: string, value: any = null) => {
		let currentTime = new Date();
		if (value == null) value = currentTime.getTime();

		if (this.player != null) this.player.SetVar(variable, value);
		console.log(variable, 'set to value:', value);
	}

	public getVar = (variable: string) => {
		let value: any = null;
		if (this.player != null) value = this.player.GetVar(variable);
		console.log(variable, 'get value:', value);
		return value;
	}
}