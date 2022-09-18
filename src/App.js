import React, { Component } from "react";

import ReactTooltip from "react-tooltip";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "top",
      type: "dark",
      effect: "float",
      condition: false,
    };
  }

  changePlace(place) {
    this.setState({
      place: place,
    });
  }

  changeType(type) {
    this.setState({
      type: type,
    });
  }

  changeEffect(effect) {
    this.setState({
      effect: effect,
    });
  }

  _onClick() {
    this.setState({
      condition: true,
    });
  }

  render() {
    const { place, type, effect } = this.state;
    return (
      <div>
        <section className="tooltip-example">
          <h4 className="title">React Tooltip</h4>
          <div className="demonstration">
            <a
              data-for="main"
              data-tip="Hello<br />multiline<br />tooltip"
              data-iscapture="true"
            >
              ◕‿‿◕
            </a>
          </div>
          <div className="control-panel">
            <div className="button-group">
              <div className="item">
                <p>Place</p>
                <a
                  className={place === "top" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "top")}
                >
                  Top<span className="mark">(default)</span>
                </a>
                <a
                  className={place === "right" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "right")}
                >
                  Right
                </a>
                <a
                  className={place === "bottom" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "bottom")}
                >
                  Bottom
                </a>
                <a
                  className={place === "left" ? "active" : ""}
                  onClick={this.changePlace.bind(this, "left")}
                >
                  Left
                </a>
              </div>
              <div className="item">
                <p>Type</p>
                <a
                  className={type === "dark" ? "active" : ""}
                  onClick={this.changeType.bind(this, "dark")}
                >
                  Dark<span className="mark">(default)</span>
                </a>
                <a
                  className={type === "success" ? "active" : ""}
                  onClick={this.changeType.bind(this, "success")}
                >
                  Success
                </a>
                <a
                  className={type === "warning" ? "active" : ""}
                  onClick={this.changeType.bind(this, "warning")}
                >
                  Warning
                </a>
                <a
                  className={type === "error" ? "active" : ""}
                  onClick={this.changeType.bind(this, "error")}
                >
                  Error
                </a>
                <a
                  className={type === "info" ? "active" : ""}
                  onClick={this.changeType.bind(this, "info")}
                >
                  Info
                </a>
                <a
                  className={type === "light" ? "active" : ""}
                  onClick={this.changeType.bind(this, "light")}
                >
                  Light
                </a>
              </div>
              <div className="item">
                <p>Effect</p>
                <a
                  className={effect === "float" ? "active" : ""}
                  onClick={this.changeEffect.bind(this, "float")}
                >
                  Float<span className="mark">(default)</span>
                </a>
                <a
                  className={effect === "solid" ? "active" : ""}
                  onClick={this.changeEffect.bind(this, "solid")}
                >
                  Solid
                </a>
              </div>
            </div>
          </div>
          <ReactTooltip
            id="main"
            place={place}
            type={type}
            effect={effect}
            multiline={true}
          />
        </section>
      </div>
    );
  }
}
