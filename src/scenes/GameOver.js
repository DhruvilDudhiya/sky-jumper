
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_popUP
		const container_popUP = this.add.container(0, 0);

		// transparent_bg
		const transparent_bg = this.add.image(543, 967, "transparent-bg");
		container_popUP.add(transparent_bg);

		// container_popupAnimation
		const container_popupAnimation = this.add.container(550.2523582551725, 978.6631228966995);
		container_popupAnimation.scaleX = 0;
		container_popupAnimation.scaleY = 0;
		container_popUP.add(container_popupAnimation);

		// you_win
		const you_win = this.add.image(-10.252358255172453, -18.66312289669952, "you_win");
		you_win.scaleX = 2;
		you_win.scaleY = 2;
		container_popupAnimation.add(you_win);

		// exit
		const exit = this.add.image(-182.25235825517245, 200.33687710330048, "Exit");
		exit.scaleX = 1.6;
		exit.scaleY = 1.6;
		container_popupAnimation.add(exit);

		// replay
		const replay = this.add.image(159.74764174482755, 198.33687710330048, "Replay");
		replay.scaleX = 1.6;
		replay.scaleY = 1.6;
		container_popupAnimation.add(replay);

		// score_gameover
		const score_gameover = this.add.text(-14.252358255172453, 20.33687710330048, "", {});
		score_gameover.scaleX = 1.1;
		score_gameover.scaleY = 1.1;
		score_gameover.setOrigin(0.5, 0.5);
		score_gameover.text = "16";
		score_gameover.setStyle({ "fontFamily": "angerpoiselampshade", "fontSize": "50px" });
		container_popupAnimation.add(score_gameover);

		this.you_win = you_win;
		this.exit = exit;
		this.replay = replay;
		this.score_gameover = score_gameover;
		this.container_popupAnimation = container_popupAnimation;
		this.container_popUP = container_popUP;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	you_win;
	/** @type {Phaser.GameObjects.Image} */
	exit;
	/** @type {Phaser.GameObjects.Image} */
	replay;
	/** @type {Phaser.GameObjects.Text} */
	score_gameover;
	/** @type {Phaser.GameObjects.Container} */
	container_popupAnimation;
	/** @type {Phaser.GameObjects.Container} */
	container_popUP;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		const gameScreen = this.scene.get("Level");
		gameScreen.levelComp.play();
		this.clickBtnClick = gameScreen.clickBtn ;
		this.score_gameover.text = score;
		this.replay.setInteractive().on("pointerdown", function(){
			this.clickBtnClick.play();
			this.scene.start("Level");
			score = 0;
			playerLife = 3;
			currentLevel = 1
		},this)
		this.exit.setInteractive().on("pointerdown", function(){
			this.clickBtnClick.play();
			gameScreen.backgroundMusic1.stop();
			this.scene.start("Splase");
			score = 0;
			playerLife = 3;
			currentLevel = 1
		},this)
		this.replay.on('pointerover', function () {
            this.oTweenManager.pointerOverTween(this.replay , 1.6);
		}, this)
		this.replay.on('pointerout', function () {
            this.oTweenManager.pointerOutTween(this.replay ,1.6);
		}, this)
		this.exit.on('pointerover', function () {
            this.oTweenManager.pointerOverTween(this.exit , 1.6);
		}, this)
		this.exit.on('pointerout', function () {
            this.oTweenManager.pointerOutTween(this.exit ,1.6);
		}, this)
			this.tween = this.tweens.add({
				targets: this.container_popupAnimation,
				scaleX: { from: 0, to: 1 },
				scaleY: { from: 0, to: 1 },
				duration: 300,
				delay : 200,
				ease: 'Sine.easeInOut',
				// yoyo : true,
				onComplete: () => {
					this.tween.stop();
				}
			})
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
