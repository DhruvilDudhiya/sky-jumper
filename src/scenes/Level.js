
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_background
		const container_background = this.add.container(0, 0);

		// transparent_bg
		const transparent_bg = this.add.image(544, 962, "transparent-bg");
		container_background.add(transparent_bg);

		// life_Boarc_Base
		const life_Boarc_Base = this.add.image(917, 100, "Life_Boarc_Base");
		life_Boarc_Base.scaleX = 1.7;
		life_Boarc_Base.scaleY = 1.7;
		container_background.add(life_Boarc_Base);

		// text_life
		const text_life = this.add.text(909, 100, "", {});
		text_life.setOrigin(0.5, 0.5);
		text_life.text = "3";
		text_life.setStyle({ "fontFamily": "angerpoiselampshade", "fontSize": "40px" });
		container_background.add(text_life);

		// timer_text
		const timer_text = this.add.text(540, 378, "", {});
		timer_text.setOrigin(0.5, 0.5);
		timer_text.alpha = 0.3;
		timer_text.alphaTopLeft = 0.3;
		timer_text.alphaTopRight = 0.3;
		timer_text.alphaBottomLeft = 0.3;
		timer_text.alphaBottomRight = 0.3;
		timer_text.setStyle({ "fontFamily": "angerpoiselampshade", "fontSize": "500px", "stroke": "#a28768", "strokeThickness":15});
		container_background.add(timer_text);

		// move
		const move = this.add.image(1002, 99, "move");
		move.scaleX = 1.7;
		move.scaleY = 1.7;
		container_background.add(move);

		// container_collect
		const container_collect = this.add.container(0, 0);

		// life_bg_1
		const life_bg_1 = this.add.image(851, 211, "Carrot_Life_Minus");
		life_bg_1.tintFill = true;
		container_collect.add(life_bg_1);

		// life_bg_2
		const life_bg_2 = this.add.image(933, 211, "Carrot_Life_Minus");
		life_bg_2.tintFill = true;
		container_collect.add(life_bg_2);

		// life_bg_3
		const life_bg_3 = this.add.image(1015, 211, "Carrot_Life_Minus");
		life_bg_3.tintFill = true;
		container_collect.add(life_bg_3);

		// container_notColleted
		const container_notColleted = this.add.container(0, 0);

		// life_1
		const life_1 = this.add.image(851, 210, "Carrot_Life");
		life_1.visible = false;
		container_notColleted.add(life_1);

		// life_2
		const life_2 = this.add.image(933, 210, "Carrot_Life");
		life_2.visible = false;
		container_notColleted.add(life_2);

		// life_3
		const life_3 = this.add.image(1015, 210, "Carrot_Life");
		life_3.visible = false;
		container_notColleted.add(life_3);

		// scoreContainer
		const scoreContainer = this.add.container(272.5216879588149, 99.41042705415889);

		// score_Board_Base
		const score_Board_Base = this.add.image(10.47831204118512, 0.5895729458411125, "score_Board_Base");
		score_Board_Base.scaleX = 1.7;
		score_Board_Base.scaleY = 1.7;
		scoreContainer.add(score_Board_Base);

		// score_txt
		const score_txt = this.add.text(20.47831204118512, -0.41042705415888747, "", {});
		score_txt.scaleX = 1.1;
		score_txt.scaleY = 1.1;
		score_txt.setOrigin(0.5, 0.5);
		score_txt.text = "score : 3";
		score_txt.setStyle({ "fontFamily": "angerpoiselampshade", "fontSize": "45px", "stroke": "#000000ff" });
		scoreContainer.add(score_txt);

		// leaf
		const leaf = this.add.image(-134.52168795881488, -2.4104270541588875, "Leaf");
		leaf.scaleX = 1.7;
		leaf.scaleY = 1.7;
		scoreContainer.add(leaf);

		this.container_background = container_background;
		this.transparent_bg = transparent_bg;
		this.text_life = text_life;
		this.timer_text = timer_text;
		this.container_collect = container_collect;
		this.life_bg_1 = life_bg_1;
		this.life_bg_2 = life_bg_2;
		this.life_bg_3 = life_bg_3;
		this.container_notColleted = container_notColleted;
		this.life_1 = life_1;
		this.life_2 = life_2;
		this.life_3 = life_3;
		this.scoreContainer = scoreContainer;
		this.score_txt = score_txt;
		this.leaf = leaf;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_background;
	/** @type {Phaser.GameObjects.Image} */
	transparent_bg;
	/** @type {Phaser.GameObjects.Text} */
	text_life;
	/** @type {Phaser.GameObjects.Text} */
	timer_text;
	/** @type {Phaser.GameObjects.Container} */
	container_collect;
	/** @type {Phaser.GameObjects.Image} */
	life_bg_1;
	/** @type {Phaser.GameObjects.Image} */
	life_bg_2;
	/** @type {Phaser.GameObjects.Image} */
	life_bg_3;
	/** @type {Phaser.GameObjects.Container} */
	container_notColleted;
	/** @type {Phaser.GameObjects.Image} */
	life_1;
	/** @type {Phaser.GameObjects.Image} */
	life_2;
	/** @type {Phaser.GameObjects.Image} */
	life_3;
	/** @type {Phaser.GameObjects.Container} */
	scoreContainer;
	/** @type {Phaser.GameObjects.Text} */
	score_txt;
	/** @type {Phaser.GameObjects.Image} */
	leaf;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oGameManager = new GameManager(this);
		this.oParticalManager = new ParticalManager(this);
		this.platfromCount = 0;
		const firstScene = this.scene.get("Splase");
		this.backgroundMusic1 = firstScene.backgroundMusic;
		this.levelComp = firstScene.levelComplete;
		this.collideSound = firstScene.colldeSound;
		this.platfromCollide = firstScene.touchPlatfrom;
		this.carrotCollect = firstScene.collectCarrot;
		this.clickBtn = firstScene.buttonClick;
		let currentLevel = 1;
		this.platformGroup = this.physics.add.group();
		this.platformHorizontalSpeedRange = [220, 380];
		this.platformLengthRange = [400, 450],
		this.platformVerticalDistanceRange = [300, 450];
		this.firstPlatformPosition = 2 / 5;
		this.time2 = 6;
		this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });
		this.updatePlayerLife(playerLife);
		this.updateScore(score);
		this.gameWidth = 1080,
			this.gameHeight = 1920,

		this.collectedCarrot = 0;
		this.particles1 = this.add.particles("smoke");
		this.collidePartical = this.add.particles("cloud");
		this.particles = this.add.particles('blastPartical');
		this.initializeLevel(currentLevel);


		this.addPlayer();
		this.fallPartical = this.particles1.createEmitter({
			lifespan: 100,
			alpha: { start: 1, end: 0.3 },
			speed: { min: -30, max: 30 },
			scale: { start: 1, end: 1 }
		})
		this.fallPartical.startFollow(this.hero, 0, 0);


		 this.emitter = this.particles.createEmitter({
			speed: { min: 10, max: 1000},
			// angle: { min: 360, max: 0 },
			gravityY: 10,
			lifespan: { min: 250, max: 1000 },
			scale: { start: 0.5, end: 0 },
			// quantity: 5,
			// on: false
		});
		this.emitter.stop();
		// setTimeout(() => {
		// 	this.particles.destroy()
		// }, 800)
		this.camera1 = this.cameras.main;
		this.camera1.startFollow(this.hero, true, 0, 0.5, 0, - (this.gameWidth / 1 - this.gameWidth * this.firstPlatformPosition));
		this.scrollFector()
	}
	initializeLevel = (level) => {
		this.platformGroup.clear(true);
		let numPlatforms = (level === 1) ? 100 : 100;
		for (let i = 0; i < numPlatforms; i++) {
			this.addPlatform(i === 0);
		}
	}
	addPlaforms = () => {
		let numPlatforms = 10;
		for (let i = 0; i < numPlatforms; i++) {
			this.addPlatform(false);
		}
	}
	scrollFector = () => {
		this.container_background.setScrollFactor(0);
		this.container_collect.setScrollFactor(0);
		this.container_notColleted.setScrollFactor(0);
		this.scoreContainer.setScrollFactor(0);
	}
	addPlayer = () => {
		this.hero = this.physics.add.sprite(this.gameWidth / 2, 0, "hero");
		this.hero.setScale(0.6);
		this.hero.setFrictionX(1);
		this.hero.setSize(120, 120);
		this.hero.setOffset(20, 95);
	}
	onEvent() {
		this.time2--;
		this.formattedTime = this.time2.toString().padStart(2, '0');
		if (this.formattedTime == 0) {
			this.timedEvent.paused = true;
			this.destroyPlatform();
		}
	}
	addPlatform = (isFirstPlatform) => {
		let platform = this.platformGroup.create(
			this.gameWidth / 2,
			isFirstPlatform ? this.gameWidth * this.firstPlatformPosition : 0,
			'p_1' // Use the randomly selected image name
		);

		platform.setScale(1, 1);
		platform.setSize(400, 90);
		platform.isHeroOnIt = false;
		platform.refreshBody();
		platform.setImmovable(true);
		platform.body.setAllowGravity(false);
		platform.setFrictionX(1);
		if (!isFirstPlatform) {
			this.positionPlatform(platform);
		}
		else {
			platform.setTexture("platform1");
			platform.setSize(400, 90);

		}
		platform.assignedVelocityX = isFirstPlatform ? 0 : this.randomValue(this.platformHorizontalSpeedRange) * Phaser.Math.RND.sign();
		if (Math.random() < 0.3) {
			this.addCarrot(platform);
		} else {
			this.addStars(platform);
		}
	}
	addCarrot = (platform) => {
		let carrot = this.add.image(platform.x + Phaser.Math.Between(platform.displayWidth / 2, platform.displayWidth / 2), platform.y - platform.displayHeight / 1, "carrot");
		platform.carrot = carrot;
	}
	addStars = (platform) => {
		let star = this.add.image(- platform.x, platform.y - platform.displayHeight / 1, "star");
		platform.star = star;
		this.oTweenManager.tweenStarScale(platform.star);

	}
	paintSafePlatforms = () => {
		let floorPlatform = this.getHighestPlatform(0);
		floorPlatform.setTexture("platform1")
		floorPlatform.setScale(1);
		floorPlatform.setSize(380, 80);
		floorPlatform.refreshBody();
		let targetPlatform = this.getHighestPlatform(floorPlatform.y);
		targetPlatform.setTexture("platform1");
		targetPlatform.setScale(1);
		targetPlatform.setSize(380, 80);
		targetPlatform.refreshBody();
	}
	updateLevels = (platform) => {
		currentLevel++;
		this.setLevels(currentLevel);
	}
	setLevels = (currentLevel) => {
		switch (currentLevel) {
			case 2:
				this.level2Speed = [300, 380];
				this.platformGroup.getChildren().forEach(child => {child.body.gameObject.assignedVelocityX = this.randomValue(this.level2Speed) * Phaser.Math.RND.sign()});
				break;
			case 3:
				this.level3Speed = [350, 400];
				this.platformGroup.getChildren().forEach(child => child.body.gameObject.assignedVelocityX = this.randomValue(this.level3Speed) * Phaser.Math.RND.sign());
			default:
				break;
		}
	}
	handleCollision = (hero, platform) => {
		if (!platform.isHeroOnIt) {
			this.platfromCount++;
			switch (this.platfromCount) {
				case 15:
					this.updateLevels(platform)
					break;
				case 30:
					this.updateLevels(platform);
					break;
				default:
					break;
			}
			this.currentPlatformName = platform.texture.key;
			if (!this.oGameManager.gameStarted) {
				this.oGameManager.startGame(); // Start the game when hero lands on the first platform
				// You can enable player input here
				this.input.on("pointerdown", this.destroyPlatform, this);
			}
			if (this.currentPlatformName == "p_1") {
				// hero.setTexture("bunny");
				this.emitter.start();
				this.emitter.explode(100, hero.x, hero.y);
				hero.setScale(1.5, 1.5);
                hero.destroy();
				this.platfromCollide.play();
				this.cameras.main.shake(200, 0.02);
				playerLife--;
				if (playerLife == 0) {
					setTimeout(() => {
						this.scene.start("GameOver");
					}, 600);
				} else {
					this.updatePlayerLife(playerLife);
					setTimeout(() => {
						this.scene.start("Level");
					}, 500);
				}
			}
			if (hero.x < platform.getBounds().left) {
				hero.setVelocityY(-100);
				hero.setVelocityX(-100);
				hero.angle = -45;
				// hero.setTexture("bunny");
				this.emitter.start();
				this.emitter.explode(100, hero.x, hero.y);
				hero.setScale(1.5, 1.5);
				hero.destroy();
				this.platfromCollide.play();
				playerLife--;
				if (playerLife == 0) {
					setTimeout(() => {
						this.scene.start("GameOver");
					}, 800);
				} else {
					this.updatePlayerLife(playerLife);
					setTimeout(() => {
						this.scene.start("Level");
					}, 500);
				}
			}
			if (hero.x > platform.getBounds().right) {
				hero.setVelocityY(-100);
				hero.setVelocityX(100);
				hero.angle = 45;
				// hero.visible = false;
				// hero.setTexture("bunny");
				this.emitter.start();
				this.emitter.explode(100, hero.x, hero.y);
				hero.setScale(1.5, 1.5);
				hero.destroy();
				this.platfromCollide.play();
				playerLife--;
				if (playerLife == 0) {
					setTimeout(() => {
						this.scene.start("GameOver");
					}, 800);
				} else {
					this.updatePlayerLife(playerLife);
					setTimeout(() => {
						this.scene.start("Level");
					}, 500);
				}
			}
			platform.isHeroOnIt = true;
			this.fallPartical.stop();
			this.paintSafePlatforms();
			this.canDestroy = true;
			this.addPartical(hero.x, hero.y);

			const nextPlatform = this.findNextPlatform(platform);
			if (nextPlatform) {
				this.nextPlatformName = nextPlatform.texture.key;
			} else {
				this.nextPlatformName = "";
			}
		} else {

		}
	}
	findNextPlatform = (currentPlatform) => {
		let nextPlatform = null;
		const platforms = this.platformGroup.getChildren();
		const currentIndex = platforms.indexOf(currentPlatform);
		if (currentIndex !== -1 && currentIndex < platforms.length - 1) {
			nextPlatform = platforms[currentIndex + 1];
		}
		return nextPlatform;
	}
	randomValue(a) {
		return Phaser.Math.Between(a[0], a[1]);
	}
	destroyPlatform = () => {
		this.fallPartical.start();
		if (this.canDestroy) {
			this.canDestroy = false;
			let closestPlatform = this.physics.closest(this.hero).gameObject;
			let furthestPlatform = this.physics.furthest(this.hero);
			closestPlatform.isHeroOnIt = false;
			if (closestPlatform.star) {
				closestPlatform.star.destroy(); // Remove the star sprite
			}
			closestPlatform.y = furthestPlatform.gameObject.y + this.randomValue(this.platformVerticalDistanceRange);
			closestPlatform.assignedVelocityX = this.randomValue(this.platformHorizontalSpeedRange) * Phaser.Math.RND.sign();
			closestPlatform.x = this.gameWidth / 2;
			closestPlatform.displayWidth = this.randomValue(this.platformLengthRange);
		}
		this.time2 = 6; // Reset the timer to 5 seconds
		this.timedEvent.paused = false; // Resume the timer
	}
	positionPlatform(platform) {
		platform.y = this.getLowestPlatform() + this.randomValue(this.platformVerticalDistanceRange);
		platform.x = this.gameWidth / 2;
		platform.setSize(275, 85);
		platform.displayWidth = this.randomValue(this.platformLengthRange);
	}
	getLowestPlatform() {
		let lowestPlatform = null;
		this.platformGroup.getChildren().forEach(function (platform) {
			lowestPlatform = Math.max(lowestPlatform, platform.y);
		});
		return lowestPlatform;
	}
	getHighestPlatform(maxHeight) {
		let highestPlatform = null;
		this.platformGroup.getChildren().forEach(function (platform) {
			if ((platform.y > maxHeight) && (!highestPlatform || platform.y < highestPlatform.y)) {
				highestPlatform = platform;
			}
		});
		return highestPlatform;
	}
	collectStar(hero, platform) {
		hero = hero;
		platform = platform;
		if (platform.star) {
			platform.star.destroy();
			platform.star = undefined;
			if (platform.texture.key == "p_1") {
			} else {
				score = score + 1;
				this.tweenText = this.add.text(hero.x, this.hero.y, "");
				this.tweenText.setStyle({ "fontFamily": "boldRegular", "fontSize": "50px", "color": "#a28768", });
				this.tweenText.text = "+1";
				this.collideSound.play();
				this.updateScore(score);
				this.oTweenManager.gameObjectTween(this.leaf, 1.7, 2);
				this.oTweenManager.scoreTween(hero, this.tweenText);
			}
		}
	}
	collectCarrot(hero, platform) {
		hero = hero;
		platform = platform;
		if (platform.carrot) {
			platform.carrot.destroy();
			platform.carrot = undefined;
			if (platform.texture.key == "p_1") {
			} else {
				this.collectedCarrot++;
				this.carrotCollect.play();
				this.updateCarrot(this.collectedCarrot, hero);
			}
		}
	}
	updateCarrot = (carrot, hero) => {
		switch (carrot) {
			case 1:
				this.life_1.visible = true;
				this.oTweenManager.gameObjectTween(this.life_1, 1, 1.4);
				break;
			case 2:
				this.life_2.visible = true;
				this.oTweenManager.gameObjectTween(this.life_2, 1, 1.4);
				break;
			case 3:
				this.life_3.visible = true;
				this.oTweenManager.gameObjectTween(this.life_3, 1, 1.4);
				this.tweenText = this.add.text(hero.x, this.hero.y, "");
				this.tweenText.setStyle({ "fontFamily": "boldRegular", "fontSize": "50px", "color": "#a28768", });
				this.tweenText.text = "+20";
				score = score + 20;
				this.oTweenManager.scoreTween(hero, this.tweenText);
				this.updateScore(score);
				this.collectedCarrot = 0;
				this.updatePlayerScale(hero);
				setTimeout(() => {
					this.container_notColleted.iterate(function (child) {
						child.setVisible(false);
					});
				}, 1000);
				break;
			default:
				break;
		}

	}
	updatePlayerScale(player) {
		this.playerAnim = this.tweens.add({
			targets: player,
			scaleX: { from: 0.6, to: 1 },
			scaleY: { from: 0.6, to: 1 },
			duration: 500,
			onComplete: () => {
				setTimeout(() => {
					this.tweenAnimer2(player);
				}, 8000);
			}
		})
	}
	tweenAnimer2 = (player) => {
		this.playerAnim = this.tweens.add({
			targets: player,
			scaleX: { from: 1, to: 0.6 },
			scaleY: { from: 1, to: 0.6 },
			duration: 500,
		})
	}

	updateScore = (score) => {
		this.oTweenManager.gameObjectTween(this.scoreContainer, 1, 1.10);
		this.score_txt.text = "score : " + score;
	}

	updatePlayerLife = (life) => {
		this.text_life.text = life;
		if (life < 1) {
			this.scene.start("gameOver")
		}
	}
	update() {

		this.timer_text.text = this.formattedTime;
		if (this.hero.angle == 0) {
			this.physics.world.collide(this.hero, this.platformGroup, this.handleCollision, null, this);
			this.physics.add.overlap(this.hero, this.platformGroup, this.collectStar, null, this);
			this.physics.add.overlap(this.hero, this.platformGroup, this.collectCarrot, null, this);
			let heroY = this.hero.y;

			this.platformGroup.getChildren().forEach(function (platform) {
				if (platform.y + this.gameHeight < heroY) {
					platform.destroy();
				}
			}, this);

			// Filter out destroyed platforms
			this.platformGroup.children.iterate(function (platform) {
				if (platform && platform.getData('destroyed')) {
					this.platformGroup.remove(platform);
				}
			}, this);
		}
		this.platformGroup.getChildren().forEach(function (platform) {
			if (platform.texture.key == "platform1") {
				if (platform.star) {
					platform.star.x = platform.x;
					platform.star.y = platform.y - platform.displayHeight / 1;
				}
			} else if (platform.texture.key == "p_1") {
				if (platform.star) {
					platform.star.x = platform.x;
					platform.star.y = platform.y - platform.displayHeight / 2;
				}
			}

		}, this);
		this.platformGroup.getChildren().forEach(function (platform) {
			if (platform.carrot) {
				platform.carrot.x = platform.x;
				platform.carrot.y = platform.y - platform.displayHeight / 1.5;
			}
		}, this);
		this.platformGroup.getChildren().forEach(function (platform) {
			if (platform.y + this.gameHeight < this.hero.y) {
				this.scene.stop("Level");
				setTimeout(() => {
					this.scene.start("GameOver");
				}, 500);
			}
			let distance = Math.max(0.2, 1 - ((Math.abs(this.gameWidth / 2 - platform.x) / (this.gameWidth / 2)))) * Math.PI / 2;
			platform.setVelocityX(platform.assignedVelocityX * distance);
			if ((platform.body.velocity.x < 0 && platform.getBounds().left < this.hero.displayWidth / 2) || (platform.body.velocity.x > 0 && platform.getBounds().right > this.gameWidth - this.hero.displayWidth / 2)) {
				platform.assignedVelocityX *= -1;
			}
		}, this);
	}
	blastParticle() {


		// emitter.setPosition(diamond.x, diamond.y);

	}
	addPartical(x, y) {
		const partical1 = this.collidePartical.createEmitter({
			scale: { start: 2, end: 0 },
			speed: 200,
			lifespan: 1000,
			maxParticles: 500,
			gravityY: 100,
		})
		partical1.startFollow(this.hero, 0, 50)
		// partical1.flow(1,1);
		setTimeout(() => partical1.remove(), 500);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
