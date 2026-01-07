import React from "react";
import { Container } from "react-bootstrap";
import "./NewPortfolioBanner.css";

function NewPortfolioBanner() {
    return (
        <div className="new-portfolio-banner">
            <Container>
                <div className="banner-content">
                    <span className="banner-emoji">🎉</span>
                    <span className="banner-text">
                        Check out my <span className="purple">new portfolio</span> with updated projects and design!
                    </span>
                    <a
                        href="https://shivamsinghportfoliov2.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="banner-button"
                    >
                        Visit New Portfolio →
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default NewPortfolioBanner;
