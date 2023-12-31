
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// loading_base1
		const loading_base1 = this.add.image(569, 1687, "Loading_base1");
		loading_base1.visible = false;

		// load
		const load = this.add.image(570, 1683, "Load");
		load.scaleX = 0.95;
		load.visible = false;

		// transparent_bg
		const transparent_bg = this.add.image(558, 966, "transparent-bg1");

		// logo1
		const logo1 = this.add.image(527, 368, "logo1");
		logo1.scaleX = 1.2;
		logo1.scaleY = 1.2;

		this.transparent_bg = transparent_bg;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	transparent_bg;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		this.progress = this.add.text(600, 1580, "", {});
		this.progress.setOrigin(0.5, 0.5);
		this.progress.text = "0%";
		this.progress.setStyle({ "color": "#ffffffff", "fontFamily": "angerpoiselampshade", "fontSize": "70px" });

		this.outerBar = this.add.sprite(570, 1685, "Loading_base1");
		this.outerBar.setOrigin(0.5, 0.5);

		this.innerBar = this.add.sprite(570 / 2 + 10 ,1683,"Load").setScale(0.95, 1);
		this.innerBar.setOrigin(0, 0.5);

		this.innerBar.setVisible(true);

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.innerBar.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			// Replace with your game object image
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);
			this.progress.setText(currentInterval + "%");

			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				setTimeout(() => {
					this.scene.start("Splase");
				}, 200);
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
