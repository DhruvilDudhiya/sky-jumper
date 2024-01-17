class TweenManager {

    constructor(oScene) {
        this.oScene = oScene;
    }
    gameObjectTween = (targetName , scale ,tweenScale) => {
        this.tween = this.oScene.tweens.add({
            targets: targetName,
            scaleX: { from: scale, to: tweenScale, from: tweenScale, to: scale },
            scaleY: { from: scale, to: tweenScale, from: tweenScale, to: scale },
            duration: 300,
            ease: 'Sine.easeInOut',
            // yoyo : true,
            onComplete: () => {
                this.tween.stop();
            }
        })
    }
    playerTween = (targetName , scale , tweenScale ) => {
        this.playerAnim = this.oScene.tweens.add({
            targets : targetName,
            scaleX: { from: scale, to: tweenScale },
			scaleY: { from: scale, to: tweenScale },
            duration : 500,
            onComplete : () => {
                setTimeout(() => {
                     targetName.setScale(0.6);
                   },8000);
            }
        })
    }
    pointerOverTween(btn, initSclae) {
        this.oScene.input.setDefaultCursor('pointer');
        this.oScene.tweens.add({
            targets: btn,
            scaleX: initSclae + 0.05,
            scaleY: initSclae + 0.05,
            duration: 50
        })
    }
    pointerOutTween(btn , initSclae){
        this.oScene.input.setDefaultCursor('default');
        this.oScene.tweens.add({
            targets: btn,
            scaleX: initSclae,
            scaleY: initSclae,
            duration: 50
        })
    }
    tweenStarScale = (star) => {
        this.oScene.tweens.add({
            targets: star,
            scaleX: 1.3,  
            scaleY: 1.3,  
            duration: 500,  
            yoyo: true,  
            repeat: -1,  
            ease: 'Linear'
        });
    }
    scoreTween = (hero , text) => {
        this.oScene.tweens.add({
            targets: text,
            y: hero.y - 200,
            duration: 800,
            onComplete: () => {
                text.visible = false;
            }

        })
 
    }
    logoTween = (sprite) => {
        this.oScene.tweens.add({
            targets: sprite,
            scaleX: "/=0.9",
            scaleY: "/=0.9",
            duration: 600,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        })
    }

}