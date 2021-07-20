import React from 'react'
import "./Header.css"

export default function index() {
    return (
        <header className = "header">
            <div className = "my-name">
                Michael Cervantes
            </div>
            <div className = "center-content">
                <h1 className = "center-content-main">
                    <span className = "center-content-large">Michael Cervantes</span>
                    <span className = "center-content-medium">Full Stack Developer</span>
                </h1>
                <a href = "#" class = "btn btn-white">See My Work</a>
            </div>
        </header>
    )
}
