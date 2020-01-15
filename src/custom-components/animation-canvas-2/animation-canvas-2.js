export default function AnimationCanvas2(p) {
    let maxDTheta;
    let minDTheta;
    let maxTheta;
    const childGenOdds = .01;

    const minBoltWidth = 3;
    const maxBoltWidth = 10;

    const minJumpLength = 1;
    const maxJumpLength = 10;

    const stormMode = true;
    const fadeStrikes = true;
    const randomColors = false;
    const maxTimeBetweenStrikes = 3000;

    let boltColor;
    let skyColor;


    let bolt;
    let lastStrike = 0;
    let nextStrikeInNms = 0;


    p.setup = function () {
        maxDTheta = p.PI / 10;
        minDTheta = p.PI / 20;
        maxTheta = p.PI / 2;

        p.colorMode(p.HSB, 100);
        p.smooth();
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noFill();
        boltColor = p.color(0, 0, 99);
        skyColor = p.color(0, 0, 8, 20);
        p.background(skyColor);

        bolt = new LightningBolt(p.random(0, p.width), 0, p.random(minBoltWidth, maxBoltWidth), 0, minJumpLength, maxJumpLength, boltColor);
    }

    p.draw = function () {
        if (stormMode && p.millis() - lastStrike > nextStrikeInNms) {//time for a new bolt?
            lastStrike = p.millis();
            nextStrikeInNms = p.random(0, maxTimeBetweenStrikes);
    
            bolt = new LightningBolt(p.random(0, p.width), 0, p.random(minBoltWidth, maxBoltWidth), 0, minJumpLength, maxJumpLength, boltColor);
            bolt.draw();
        }
        else {
            if (fadeStrikes) {
                p.noStroke();
                p.fill(skyColor);
                p.rect(0, 0, p.width, p.height);
                p.noFill();
            }
        }
    }

    window.onresize = function (event) {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function () {
            p.resizeCanvas(p.windowWidth, p.windowHeight)
        }, 250);
    }

    let LightningBolt = function (x0I, y0I, width0, theta0, jumpMin, jumpMax, inputColor) {
        this.lineWidth0 = width0;
        this.lineWidth = width0;
        this.theta = theta0;
        this.x0 = x0I;
        this.y0 = y0I;
        this.x1 = x0I;
        this.y1 = y0I;
        this.x2 = x0I;
        this.y2 = y0I;
        this.straightJumpMin = jumpMin;
        this.straightJumpMax = jumpMax;
        this.myColor = inputColor;
        this.straightJump = p.random(this.straightJumpMin, this.straightJumpMax);
    };
    
    LightningBolt.prototype.draw = function () {
        while (this.y2 < p.height && (this.x2 > 0 && this.x2 < p.width)) {
            p.strokeWeight(1);
    
            this.theta += randomSign() * p.random(minDTheta, maxDTheta);
            if (this.theta > maxTheta)
                this.theta = maxTheta;
            if (this.theta < -maxTheta)
                this.theta = -maxTheta;
    
            this.straightJump = p.random(this.straightJumpMin, this.straightJumpMax);
            this.x2 = this.x1 - this.straightJump * p.cos(this.theta - p.HALF_PI);
            this.y2 = this.y1 - this.straightJump * p.sin(this.theta - p.HALF_PI);
    
            if (randomColors)
                this.myColor = slightlyRandomColor(this.myColor, this.straightJump);
    
            this.lineWidth = p.map(this.y2, p.height, this.y0, 1, this.lineWidth0);
            if (this.lineWidth < 0)
                this.lineWidth = 0;
                p.stroke(this.myColor);
                p.strokeWeight(this.lineWidth);
                p.line(this.x1, this.y1, this.x2, this.y2);
            this.x1 = this.x2;
            this.y1 = this.y2;
    
            if (p.random(0, 1) < childGenOdds) {
                let newTheta = this.theta;
                newTheta += randomSign() * p.random(minDTheta, maxDTheta);
                if (this.theta > maxTheta)
                    this.theta = maxTheta;
                if (this.theta < -maxTheta)
                    this.theta = -maxTheta;
                (new LightningBolt(this.x2, this.y2, this.lineWidth, newTheta, this.straightJumpMin, this.straightJumpMax, boltColor)).draw();
            }
        }
    }
    
    function randomSign() //returns +1 or -1
    {
        const num = p.random(-1, 1);
        if (num === 0)
            return -1;
        else
            return (p.int)(num / p.abs(num));
    }
    
    function slightlyRandomColor(inputCol, length) {
        let h = p.hue(inputCol);
        h = (h + p.random(-length, length)) % 100;
        return p.color(h, 99, 99);
    }
};