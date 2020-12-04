import React, { Component } from "react";
import Sketch from "react-p5";

const modLength = 20;

class DynamicBackground extends Component {

  constructor() {
    super();

    this.mods = [];
  
    this.prevMouseX = null;
    this.prevMouseY = null;
    this.mouseState = false;
    this.mousePrevState = false;
  
    this.windowWasResized = false;
    this.width = 0;
    this.height = 0;
  
    this.canvasHolder = "sketch-holder";

  }
  setup = (p5) => {
    this.width = p5.windowWidth;
    this.height = p5.windowHeight;
    this.canvas = p5
      .createCanvas(this.width, this.height)
      .parent(this.canvasHolder);
    p5.stroke(255, 50);
    this.generateMods(p5);
  };
  draw = (p5) => {
    this.mouseState = p5.mouseIsPressed;
    if (
      this.prevMouseX === p5.mouseX &&
      this.prevMouseY === p5.mouseY &&
      !(this.mousePrevState || this.mouseState) &&
      !this.windowWasResized
    )
      return;
    if (this.mouseState) {
      p5.background(50, 123, 168, 10);
    } else {
      p5.background(50, 123, 168, 100);
    }

    p5.strokeWeight(15);

    p5.translate(20, 20);
    for (let i = 0; i < this.mods.length; i++) {
      for (let j = 0; j < this.mods[i].length; j++) {
        this.mods[i][j].update(p5);
        this.mods[i][j].draw2(p5);
      }
    }
    this.prevMouseX = p5.mouseX;
    this.prevMouseY = p5.mouseY;
    this.mousePrevState = this.mouseState;
  };
  windowResized = (p5) => {
    this.height = p5.windowHeight;
    this.width = p5.windowWidth;
    this.windowWasResized = true;
    p5.resizeCanvas(this.width, this.height);
    this.generateMods(p5);
  };
  generateMods(p5) {
    const wideCount = Math.round(this.width / 80);
    const highCount = Math.round(this.height / 80);

    const offsetX = this.width / wideCount;
    const offsetY = this.height / highCount;

    this.mods = [];
    for (let i = 0; i < wideCount; i++) {
      this.mods[i] = [];
      for (let j = 0; j < highCount; j++) {
        this.mods[i][j] = new Module(
          (0.25 + i) * offsetX,
          (j + 0.25) * offsetY
        );
      }
    }
  }

  render() {
    return (
      <div>
        <div
          id="sketch-holder"
          style={{
            width: "100%",
            height: "100vh",
            zIndex: -1,
            position: "absolute",
            top: "0px",
            right: "0px",
            background: "rgb(50, 123, 168)",
          }}
        />
        <Sketch
          setup={this.setup}
          draw={this.draw}
          windowResized={this.windowResized}
        />
      </div>
    );
  }
}
export default DynamicBackground;

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
}

Module.prototype.update = function (p5) {
  this.a = p5.atan2(p5.mouseY - this.y, p5.mouseX - this.x);
};

Module.prototype.draw2 = function (p5) {
  p5.push();
  p5.translate(this.x, this.y);
  p5.rotate(this.a);
  p5.line(-modLength, 0, modLength, 0);
  p5.pop();
};
