import React, { Component } from "react";
import {
  Animator,
  ScrollPage,
  batch,
  FadeIn,
  MoveOut,
} from "react-scroll-motion";

class BotsComponent extends Component {
  state = {};
  render() {
    return (
      <ScrollPage>
        <Animator animation={batch(FadeIn(), MoveOut(0, -100))}>
          <div style={{ textAlign: "center" }}>
            <h3 className="d-flex justify-content-center">My Bot</h3>
            <br></br>
            <img
              className="rounded mx-auto d-block"
              src="https://cdn.ar9157.me/i/mainAV.png"
              alt="AR Bot Avatar PNG"
              width={"250px"}
              height={"250px"}
            />
            <br></br>
            <br></br>
            <span className="d-flex justify-content-center">
              AR Bot is a multipurpose bot which includes Moderation, Fun, and
              information commands. New commands are added every week!! (Kinda)
            </span>
            <br></br>
            <a
              href="https://discord.com/oauth2/authorize?client_id=856799964063465502&permissions=8&scope=applications.commands%20bot"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <button className="btn btn-outline-primary">Invite</button>
            </a>
            <br />
            <code style={{fontSize:"10px"}}>I have made some more bots for others, but I am keeping them anonymous because of reasons.</code>
          </div>
        </Animator>
      </ScrollPage>
    );
  }
}

export default BotsComponent;
