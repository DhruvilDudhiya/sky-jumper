
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
		const logo = this.add.image(540, 535, "logo");
		logo.scaleX = 1.5;
		logo.scaleY = 1.5;

		// play_btn
		const play_btn = this.add.image(540, 1268, "Play_btn");
		play_btn.scaleX = 1.5;
		play_btn.scaleY = 1.5;

		// info
		const info = this.add.image(815, 1530, "info");
		info.scaleX = 2;
		info.scaleY = 2;

		// settings
		const settings = this.add.image(265, 1530, "Settings");
		settings.scaleX = 2;
		settings.scaleY = 2;

		// container_Settings
		const container_Settings = this.add.container(552, 1227);

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

		// load
		const load = this.add.image(-169, 132, "Load-2");
		load.scaleX = 0.1;
		load.setOrigin(0, 0.5);
		container_Settings.add(load);

		// music_off
		const music_off = this.add.image(398, 1214, "music-on");
		music_off.scaleX = 2;
		music_off.scaleY = 2;
		music_off.visible = false;

		// sound_off
		const sound_off = this.add.image(397, 1359, "sound");
		sound_off.scaleX = 2;
		sound_off.scaleY = 2;
		sound_off.visible = false;

		this.logo = logo;
		this.play_btn = play_btn;
		this.info = info;
		this.settings = settings;
		this.container_Settings = container_Settings;
		this.settings_1 = settings_1;
		this.close = close;
		this.load_2 = load_2;
		this.load = load;
		this.music_off = music_off;
		this.sound_off = sound_off;

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
	/** @type {Phaser.GameObjects.Container} */
	container_Settings;
	/** @type {Phaser.GameObjects.Image} */
	settings_1;
	/** @type {Phaser.GameObjects.Image} */
	close;
	/** @type {Phaser.GameObjects.Image} */
	load_2;
	/** @type {Phaser.GameObjects.Image} */
	load;
	/** @type {Phaser.GameObjects.Image} */
	music_off;
	/** @type {Phaser.GameObjects.Image} */
	sound_off;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oSoundManager = new SoundManager(this);
		this.backgroundMusic = this.sound.add('backgroundSJ', { loop: true });
		this.colldeSound = this.sound.add('collideSL', { loop: false });
		this.levelComplete = this.sound.add('levelCompletedSJ', { loop: false });
		this.touchPlatfrom = this.sound.add('levelFailed', { loop: false });
		this.collectCarrot = this.sound.add('carrot_collect', { loop: false });
		this.buttonClick = this.sound.add('buttonClick', { loop: false });

		this.backgroundMusic.play();

		this.minVolume = 0;
		this.maxVolume = 1;

		this.minVolume1 = 0;
		this.maxVolume1 = 1;

		this.play_btn.setInteractive().on("pointerdown", function () {
			this.buttonClick.play();
			this.scene.start("Level");
		}, this)
		this.info.setInteractive().on("pointerdown", function () {
			this.buttonClick.play();
		}, this);
		this.settings.setInteractive().on("pointerdown", function () {
			this.buttonClick.play();
			this.tween = this.tweens.add({
				targets: this.container_Settings,
				scaleX: { from: 0, to: 1 },
				scaleY: { from: 0, to: 1 },
				duration: 300,
				ease: 'Sine.easeInOut',
				// yoyo : true,
				onComplete: () => {
					this.tween.stop();
					this.music_off.visible = true;
					this.sound_off.visible = true;

				}
			})
		}, this)
		this.close.setInteractive().on("pointerdown", function () {
			this.buttonClick.play();
			this.music_off.visible = false;
			this.sound_off.visible = false;
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
			this.oTweenManager.pointerOverTween(this.settings, 2);
		}, this)
		this.settings.on('pointerout', function () {
			this.oTweenManager.pointerOutTween(this.settings, 2);
		}, this)
		this.info.on('pointerover', function () {
			this.oTweenManager.pointerOverTween(this.info, 2);
		}, this)
		this.info.on('pointerout', function () {
			this.oTweenManager.pointerOutTween(this.info, 2);
		}, this)

		this.oTweenManager.logoTween(this.logo);
		this.oTweenManager.logoTween(this.play_btn);
		this.slideBar();
		this.SoundSlideBar();
	}
	updateSoundVolume = (xPosition) => {
		const volume = Phaser.Math.Clamp((xPosition - 400) / 286, this.minVolume, this.maxVolume);
		this.backgroundMusic.setVolume(volume);
	};
	updateSoundVolume1 = (xPosition) => {
		const volume = Phaser.Math.Clamp((xPosition - 400) / 286, this.minVolume1, this.maxVolume1);
		this.colldeSound.setVolume(volume);
		this.levelComplete.setVolume(volume);
		this.touchPlatfrom.setVolume(volume);
		this.collectCarrot.setVolume(volume);
		this.buttonClick.setVolume(volume);
	}

slideBar() {
	this.music_off.x = 686,
	this.load_2.scaleX = 1.75;
	let isMove = false;
	this.music_off.setInteractive().on("pointerdown", () => {
		isMove = true;
		this.input.on("pointermove", (pointer1) => {
			if (isMove && pointer1.isDown) {
				this.music_off.x = pointer1.x;
				this.music_off.x = Phaser.Math.Clamp(this.music_off.x, 400, 686);
				this.updateSoundVolume(this.music_off.x);
				if (this.music_off.x >= 417) {
					this.music_off.setTexture("music-on");
					this.load_2.scaleX = 0.00639 * (this.music_off.x - 400);
				} else {
					this.load_2.scaleX = 0.035;
					this.music_off.setTexture("music-off");
				}
			}

		})
	})
	this.input.on('pointerup', () => {
		isMove = false;
	})

}
SoundSlideBar = () => {
	this.sound_off.x = 686,
	this.load.scaleX = 1.75;
	let isMove1 = false;
	this.sound_off.setInteractive().on("pointerdown", () => {
		isMove1 = true;
		this.input.on("pointermove", (pointer2) => {
			if (isMove1 && pointer2.isDown) {
				this.sound_off.x = pointer2.x;
				this.sound_off.x = Phaser.Math.Clamp(this.sound_off.x, 400, 686);
				this.updateSoundVolume1(this.sound_off.x);
				if (this.sound_off.x >= 417) {
					this.sound_off.setTexture("sound");
					this.load.scaleX = 0.00639 * (this.sound_off.x - 400);
				} else {
					this.sound_off.setTexture("sound_off");
					this.load.scaleX = 0.035;
				}
			}

		})
	})
	this.input.on('pointerup', () => {
		isMove1 = false;
	})
}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
