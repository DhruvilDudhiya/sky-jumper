class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.totalPlatfrom = 100;
        this.gameStarted = false; 
        this.platformHorizontalSpeedRange = [220, 380];
        this.platformLengthRange = [400, 450],
            this.platformVerticalDistanceRange = [300, 450];
    
    }
    startGame() {
        this.gameStarted = true;
    }
    updatePlatformSpeedRange() {
        console.log("gameManager", currentLevel);
        switch (currentLevel) {
            case 1:
                console.log("case1", currentLevel);
                this.platformHorizontalSpeedRange = [220, 380];
                this.platformLengthRange = [400, 450],
                    this.platformVerticalDistanceRange = [300, 450];
                break;
            case 2:
                console.log("case2", currentLevel);
                this.platformHorizontalSpeedRange = [220, 550];
                this.platformLengthRange = [400, 480],
                    this.platformVerticalDistanceRange = [300, 450];
                this.totalPlatfrom = 155;
                break;
            case 3:
                console.log("case2", currentLevel);
                this.platformHorizontalSpeedRange = [320, 550];
                this.platformLengthRange = [400, 500],
                    this.platformVerticalDistanceRange = [300, 450];
                this.totalPlatfrom = 155;
                break;
            // Add more cases for other levels as needed
        }
    }

}