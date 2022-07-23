import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import BotsComponent from "./mainComponents/myBot";
import WhatInMyBot from "./mainComponents/whatInBot";
import ContactComponent from "./mainComponents/contact";
import MenuComponent from "./mainComponents/menu";

const ZoomInScrollOut = batch(
  StickyIn(),
  FadeIn(),
  ZoomIn(),
  MoveOut(0, -1000)
);

function App() {
  return (
    <div>
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <h2>HELLO!</h2> Welcome! Scroll down to see..um..stuff
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <div style={{ textAlign: "center" }}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "30px" }}>
              <b>BOTS</b>
            </span>
            <span style={{ fontSize: "20px" }}>
              {" "}
              are 😎! <br />
              So I decided to make some...
            </span>
            <br />
          </Animator>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(FadeIn(), MoveOut(0, -100))}>
          
          <div id="iUseDisnake" style={{textAlign:"center"}}>
            I am fluent in python and thus I use&#160;
            <a
              href="https://github.com/disnakedev/disnake"
              style={{ textDecoration: "none" }}
              target={"_blank"}
              rel={"noreferrer"}
            >
              disnake
            </a>
            , a fork of discord.py to code bots.
          </div><br />
          <div id="terminalDiv" className="d-flex justify-content-center">
            <div id="termynal" data-termynal>
              <span data-ty={"input"}>pip install disnake</span>
              <span data-ty={"progress"}></span>
              <span data-ty>Successfully installed disnake</span>
            </div>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <code>
          <hr></hr>
            <h5>
              Making bots is fun. I have been on discord since the year 2020 and
              it is the best platform ever!
            </h5>
            <br />
            <h6>
              Over the years, I have learnt so much and it is very fun and
              interesting to make bots for myself or others. <br />
              In fact,{" "}
              <a
                href="https://contact.ar9157.me"
                target={"_blank"}
                rel={"noreferrer"}
                style={{ textDecoration: "none" }}
              >
                contact
              </a>{" "}
              me about any code related problem, and I will definitely try to
              help you!
            </h6>
            <hr></hr>
          </code>
        </Animator>
      </ScrollPage>
      <BotsComponent />
      <WhatInMyBot />
      <ContactComponent />
    </ScrollContainer>
    <MenuComponent />
    </div>
  );
}

export default App;
