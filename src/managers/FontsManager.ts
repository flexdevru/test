import WebFont = require('webfontloader');

export class FontsManager {
	private static _instance: FontsManager;

	public static get instance(): FontsManager {
		if (FontsManager._instance == null) FontsManager._instance = new FontsManager();
		return FontsManager._instance;
	}

	constructor() {
	}

	public init = (value: Array<string>, onLoad: () => void) => {
		WebFont.load({
			custom:
			{
				families: value,
				urls: ['fonts/fonts.css']
			},
			active: function () { onLoad() },
		})
	}
}