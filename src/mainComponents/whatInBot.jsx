import React, { Component } from "react";
import {
  Animator,
  ScrollPage,
  batch,
  StickyIn,
  FadeIn,
  MoveIn,
  MoveOut
} from "react-scroll-motion";

class WhatInMyBot extends Component {
  render() {
    return (
      <ScrollPage>
        <Animator animation={batch(StickyIn(),MoveIn(-1000,0),FadeIn(),MoveOut(1000,0))}>
            <div style={{textAlign:"center"}}>
                <h3 style={{color:"cyan"}}>What is in my bots?</h3><br />
                <span style={{color:"lightblue"}}>
                    My bots have everything. From amazing user-friendly UI to slash commands to databases.<br />
                    Cool right? Maybe test out my bot or you can contact me for more info!
                </span>
            </div>
        </Animator>
      </ScrollPage>
    );
  }
}

export default WhatInMyBot;
