import React from 'react'
import walk from '../images/walkin.png'
import what from '../images/whatdo.JPG'
import quiz from '../images/Quiz.JPG'
import plan from '../images/planner.JPG'
import pass from '../images/password.JPG'
import note from '../images/note.JPG'

export default function Portfolio() {
    return (
        <div className="container bg-light text-dark mb-4">
            <h1 className="pt-4 pb-2 mt-4 mb-2 ml-2 border-bottom">Portfolio</h1>
            <div className="row m-8" style={{ height: "250px" }}>
                <a className="col-4" href="https://enigmatic-coast-21560.herokuapp.com/">
                    <img src={walk} alt="walkin" className="img-fluid" id="card" />
                    <h3 className="text-center bg-dark text-white">What's in the Walk in'</h3>
                </a>
                <a className="col-4" href="https://hoomiejanell.github.io/project_1/">
                    <img src={what} className="img-fluid" alt="whatdo" id="card" />
                    <h3 className="text-center bg-dark text-white">WhatDo</h3>
                </a>
                <a className="col-4" href="https://jpellow.github.io/Quiz/" id="card">
                    <img src={quiz} className="img-fluid" alt="quiz" id="card" />
                    <h3 className="text-center bg-dark text-white">Quiz</h3>
                </a>
            </div>
            <div className="row mt-4" style={{ height: "350px" }}>
                <a className="col-4 mb-4" href="https://jpellow.github.io/planner/">
                    <img src={plan} className="img-fluid" alt="planner" id="card" />
                    <h3 className="text-center bg-dark text-white">Work day Planner</h3>
                </a>
                <a className="col-4 mb-4" href="https://jpellow.github.io/password/">
                    <img src={pass} className="img-fluid" alt="password" id="card" />
                    <h3 className="text-center bg-dark text-white">Password Generator</h3>
                </a>
                <a className="col-4 mb-4" href="https://whispering-scrubland-39807.herokuapp.com/">
                    <img src={note} className="img-fluid" alt="note" id="card" />
                    <h3 className="text-center bg-dark text-white">Note Taker</h3>
                </a>

            </div>
        </div>

    )
}