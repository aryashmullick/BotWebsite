import React, { Component } from 'react';
import {
    Animator,
    ScrollPage,
    batch,
    FadeIn,
    MoveIn,
    StickyIn,
  } from "react-scroll-motion";
import {Link} from "@mui/material"

class ContactComponent extends Component {
    render() { 
        return (
            <ScrollPage>
                <Animator animation={batch(StickyIn(),FadeIn(),MoveIn(1000,0))}>
                    <div style={{textAlign:"center"}}>
                        <Link href={"/pricing"} sx={{fontSize:"40px"}}>Check out the pricing!</Link>
                    </div>
                </Animator>
            </ScrollPage>
        );
    }
}
 
export default ContactComponent;