
// You can write more code here

/* START OF COMPILED CODE */

class Splase extends Phaser.Scene {

	constructor() {
		super("Splase");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// transparent_bg
		this.add.image(551, 962, "transparent-bg");

		// logo
		const logo = this.add.image(527, 368, "logo");
		logo.scaleX = 1.5;
		logo.scaleY = 1.5;

		// play_btn
		const play_btn = this.add.image(539, 1316, "Play_btn");
		play_btn.scaleX = 2;
		play_btn.scaleY = 2;

		// info
		const info = this.add.image(780, 1530, "info");
		info.scaleX = 2;
		info.scaleY = 2;

		// settings
		const settings = this.add.image(265, 1530, "Settings");
		settings.scaleX = 2;
		settings.scaleY = 2;

		// container_Settings
		const container_Settings = this.add.container(552, 1227);
		container_Settings.scaleX = 0;
		container_Settings.scaleY = 0;

		// settings_1
		const settings_1 = this.add.image(-15.473185832849481, -1.221571800213951, "settings");
		container_Settings.add(settings_1);

		// close
		const close = this.add.image(350.5268141671505, -269.22157180021395, "Close");
		close.scaleX = 2;
		close.scaleY = 2;
		container_Settings.add(close);

		// load_2
		const load_2 = this.add.image(-170, -10, "Load-2");
		load_2.scaleX = 0.1;
		load_2.setOrigin(0, 0.5);
		container_Settings.add(load_2);

		// music_off
		const music_off = this.add.image(-162, -12, "music-off");
		music_off.scaleX = 2;
		music_off.scaleY = 2;
		container_Settings.add(music_off);

		this.logo = logo;
		this.play_btn = play_btn;
		this.info = info;
		this.settings = settings;
		this.settings_1 = settings_1;
		this.close = close;
		this.container_Settings = container_Settings;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	play_btn;
	/** @type {Phaser.GameObjects.Image} */
	info;
	/** @type {Phaser.GameObjects.Image} */
	settings;
	/** @type {Phaser.GameObjects.Image} */
	settings_1;
	/** @type {Phaser.GameObjects.Image} */
	close;
	/** @type {Phaser.GameObjects.Container} */
	container_Settings;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.play_btn.setInteractive().on("pointerdown", function () {
			this.scene.start("Level");
		}, this)
		this.info.setInteractive();
		this.settings.setInteractive().on("pointerdown", function () {
			this.tween = this.tweens.add({
				targets: this.container_Settings,
				scaleX: { from: 0, to: 1 },
				scaleY: { from: 0, to: 1 },
				duration: 300,
				ease: 'Sine.easeInOut',
				// yoyo : true,
				onComplete: () => {
					this.tween.stop();
				}
			})
		}, this)
		this.close.setInteractive().on("pointerdown", function () {
			this.tween = this.tweens.add({
				targets: this.container_Settings,
				scaleX: { from: 1, to: 0 },
				scaleY: { from: 1, to: 0 },
				duration: 300,
				ease: 'Sine.easeInOut',
				// yoyo : true,
				onComplete: () => {
					this.tween.stop();
				}
			})
		}, this)
        this.settings_1.setInteractive();
		this.settings.on('pointerover', function () {
            this.oTweenManager.pointerOverTween(this.settings , 2);
		}, this)
		this.settings.on('pointerout', function () {
            this.oTweenManager.pointerOutTween(this.settings ,2);
		}, this)
		this.info.on('pointerover', function () {
            this.oTweenManager.pointerOverTween(this.info , 2);
		}, this)
		this.info.on('pointerout', function () {
            this.oTweenManager.pointerOutTween(this.info ,2);
		}, this)

		this.oTweenManager.logoTween(this.logo);
		this.oTweenManager.logoTween(this.play_btn);
	}
	slideBar(){

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
