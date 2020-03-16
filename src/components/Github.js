import React from 'react'
import walk from '../images/walkin.png'
import what from '../images/whatdo.JPG'
import quiz from '../images/Quiz.JPG'
import plan from '../images/planner.JPG'
import pass from '../images/password.JPG'
import note from '../images/note.JPG'

export default function Github() {
    return (
        <div className="container bg-light text-dark mb-4">
            <h1 className="pt-4 pb-2 mt-4 mb-2 ml-2 border-bottom">Portfolio</h1>
            <div className="row m-8" style={{ height: "250px" }}>
                <a className="col-4" href="https://github.com/Alexander-Happe/Project_2">
                    <img src={walk} className="img-fluid" alt="Walk" id="card" />
                    <h3 className="text-center bg-dark text-white">What's in the Walk in'</h3>
                </a>
                <a className="col-4" href="https://github.com/HoomieJanell/project_1">
                    <img src={what} className="img-fluid" alt="WhatDo" id="card" />
                    <h3 className="text-center bg-dark text-white">WhatDo</h3>
                </a>
                <a className="col-4" href="https://github.com/jpellow/Quiz" id="card">
                    <img src={quiz} className="img-fluid" alt="Quiz" id="card" />
                    <h3 className="text-center bg-dark text-white">Quiz</h3>
                </a>
            </div>
            <div className="row mt-4" style={{ height: "350px" }}>
                <a className="col-4 mb-4" href="https://github.com/jpellow/planner">
                    <img src={plan} className="img-fluid" alt="Work day Planner" id="card" />
                    <h3 className="text-center bg-dark text-white">Work day Planner</h3>
                </a>
                <a className="col-4 mb-4" href="https://github.com/jpellow/password">
                    <img src={pass} className="img-fluid" alt="Password" id="card" />
                    <h3 className="text-center bg-dark text-white">Password Generator</h3>
                </a>
                <a className="col-4 mb-4" href="https://github.com/jpellow/Note">
                    <img src={note} className="img-fluid" alt="Note" id="card" />
                    <h3 className="text-center bg-dark text-white">Note Taker</h3>
                </a>

            </div>
        </div>

    )
}