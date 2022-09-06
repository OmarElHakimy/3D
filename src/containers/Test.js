    import React from 'react';
    import {ScrollContainer, ScrollPage, Animator, batch, MoveOut, MoveIn, Sticky} from 'react-scroll-motion';

    import Page1 from "../components/Page1";
    import Page2 from "../components/Page2";
    import Page3 from "../components/Page3";
    import Page4 from "../components/Page4";
    import "./pages.css";
    
    const Test = () => {
        
        return (
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <Animator animation={batch(Sticky(), MoveIn(0, -500), MoveOut(-1000, 500))}> 
                            <Page1/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <Animator animation={batch(Sticky(),MoveIn(1000, -500), MoveOut(-1000, -500))}> 
                            <Page2/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <Animator animation={batch(Sticky(), MoveIn(1000, 500), MoveOut(1000, -500))}> 
                            <Page3/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={3}>
                        <Animator animation={batch(Sticky(),MoveIn(-1000, 500), MoveOut(0, -500))}> 
                            <Page4/>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
        )
    }

    export default Test;