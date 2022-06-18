import React, { Component } from 'react';
import {
    Animator,
    ScrollPage,
    batch,
    FadeIn,
    MoveIn,
    StickyIn,
  } from "react-scroll-motion";

class ContactComponent extends Component {
    render() { 
        return (
            <ScrollPage>
                <Animator animation={batch(StickyIn(),FadeIn(),MoveIn(1000,0))}>
                    <div style={{textAlign:"center"}}>
                        <h4 style={{color:"cyan"}}>WELL, What are you waiting for mate?</h4>
                        <a id="contactTag" href="https://contact.ar9157.me" target={"_blank"} style={{color:"yellowgreen",textDecoration:"none"}} rel={"noreferrer"}><u>CONTACT ME NOWWW!!</u></a >
                    </div>
                </Animator>
            </ScrollPage>
        );
    }
}
 
export default ContactComponent;