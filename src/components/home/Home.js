import React from 'react'
import Typewriter from 'typewriter-effect';
import "./home.css"
import Button from '../button/Button';
import useWebAnimations from "@wellyshen/use-web-animations";

function Home() {

    const { ref } = useWebAnimations({
        keyframes: [
            {transform: "translate(20px, 10px)"},
            {transform: "translateX(40px, 10px)"},
        ],
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
        // onReady: ({ playState, animate, animation }) => {
        //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
        // },
        // onUpdate: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the running state or changes state
        // },
        // onFinish: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
        // },
        // // More useful options...
      });

    return (
        <>
        <section className="main">
            <div>
            <Typewriter
                  options={{
                    strings: ["The blockchain platform for real money, assets, and blazing-fast token payments that scale."],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "h2",
                    cursorClassName: "Typewriter__cursor"
                  }}
            />
            </div>
            <p>Syscoin Platform provides trustless interoperability with Ethereum ERC-20, token and asset microtransactions, and Bitcoin-core-compliant merge-mined security.</p>
            <Button text="Support" />
            <Button text="Wallets" />
            <Button text="News" />
            <Button text="White Papers" />
            <Button text="Road Map" />
        </section>
        <section className="section2">
            <div className="div1">
                <h2>What Can You Build?</h2>
                <p>The possibilities of what you can build on the Syscoin platform are limited only by your imagination. Here are a some use cases to get your wheels turning:</p>
            </div>
            <div className="div2">
                <img ref={ref} src="./images/what-can-you-build.png" alt="animation"/>
            </div>
        </section>
        </>
    )
}

export default Home
