import React from "react";
import Typewriter from "typewriter-effect";

function Type2() {
    return (
        <Typewriter
            options={{
                strings: [
                    " HELLO 👋",
                    " नमस्ते 🙏",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 90,
            }}
        />
    );
}

export default Type2;
