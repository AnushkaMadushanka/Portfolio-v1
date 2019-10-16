export default function AnimationCanvas(p) {

    let system;

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        system = new ParticleSystem(p.createVector(p.width / 2, 50));
        for (let index = 0; index < 500; index++) {
            system.addParticle();
        }
    }

    p.draw = function () {
        p.background('#000');
        system.run();
    }

    window.onresize = function (event) {
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(function () {
            this.console.log({ windowWidth: p.windowWidth, windowHeight: p.windowHeight })
            p.resizeCanvas(p.windowWidth, p.windowHeight)
            system = new ParticleSystem(p.createVector(p.width / 2, 50));
            for (let index = 0; index < 500; index++) {
                system.addParticle();
            }
        }, 250);

    }

    // A simple Particle class
    let Particle = function (position) {
        this.velocity = p.createVector(p.random(0, 0.5), 0);
        this.position = p.createVector(p.random(0, p.windowWidth), p.random(0, p.windowHeight));
        this.diameter = p.random(3, 12)
    };

    Particle.prototype.run = function () {
        this.update();
        this.display();
    };

    // Method to update position
    Particle.prototype.update = function () {
        this.position.add(this.velocity);
    };

    // Method to display
    Particle.prototype.display = function () {
        p.fill(255);
        p.ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
    };

    // Is the particle still useful?
    Particle.prototype.isEnd = function () {
        return this.position.x > p.width;
    };

    let ParticleSystem = function (position) {
        this.origin = position.copy();
        this.particles = [];
    };

    ParticleSystem.prototype.addParticle = function () {
        this.particles.push(new Particle(this.origin));
    };

    ParticleSystem.prototype.run = function () {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isEnd()) {
                p.position.x = 0
                p.run()
            }
        }
    };
};