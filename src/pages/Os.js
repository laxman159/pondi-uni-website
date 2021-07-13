import React from "react";
import Header from "../component/Header";
import "./os.css";
// import PDFViewer from "pdf-viewer-reactjs";
import sampleqp from "../assets/sampleqp.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function os() {
  return (
    <div>
      <Header />
      <div className="osmain">
        <h1>Operating System</h1>
        <h3>Guide for coming theory exam</h3> <br />
        <span>
          Keep in mind that you have to do your own work and dont only study
          what is given in this guide only and later complain that questions
          didnt come from here. This guide is the get student 70-80% prepared
          for the coming OS Theory Exam.
        </span>
        <br />
        <span>We already know the question will be all numerical.</span>
        <div className="qpattern">
          <ul>
            {" "}
            <h3 style={{ color: "red" }}>Topic</h3>
            <li>
              Exercice problem in Safe State Prediction using Bankers Algorithm
            </li>
            <li>Exercise problem in Page Replacement Algorithm</li>
            <li>Exercise problem in CPU scheduling Algorithm</li>
            <li>Exercise problem in Disk Scheduling Algorithm</li>
          </ul>
        </div>
        <div className="qpatternpdf">
          <h3 style={{ color: "red" }}>Sample Question Paper</h3>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                height: "550px",
                width: "100%",
              }}
            >
              <Viewer fileUrl="https://drive.google.com/file/d/1MyPE4oGOgKZHDuadxrBNOmXSP8bt8Sk4/view?usp=sharing" />
            </div>
          </Worker>
        </div>
        <hr />
        <div className="ba">
          <h2 style={{ color: "red" }}>Bankers Algorithm</h2>
          <span>
            Bankers Algorithm is a deadlock avoidance and detection algorithm.
            Check Out the Below Youtube tutorial to easily understand Bankers
            Algorithm
          </span>
          <div className="row">
            <h4>
              {" "}
              Link:{" "}
              <a
                href="https://www.youtube.com/watch?v=-VoZvNvYt-A"
                target="_blank"
                rel="noreferrer"
              >
                Bankers Algorithm
              </a>
            </h4>
          </div>
          <div className="exercise">
            <h3>Practise questions:</h3>
            <h4>
              {" "}
              Link:{" "}
              <a
                href="https://www.gatevidyalay.com/bankers-algorithm-deadlock-avoidance-2/"
                target="_blank"
                rel="noreferrer"
              >
                Bankers Algorithm Exercise
              </a>
            </h4>
          </div>
        </div>
        <hr />
        <div className="pra">
          <h2 style={{ color: "red" }}>Page Replacement Algorithm</h2>
          <span>
            Page Replacement Algorithm are of two types:
            <ul>
              <li>Least Recently Used (LRU)</li>
              <li>First In First Out (FIFO)</li>
            </ul>
          </span>
          <div className="row">
            <h4>
              Link:{" "}
              <a
                href="https://www.youtube.com/watch?v=dYIoWkCvd6A"
                target="_blank"
                rel="noreferrer"
              >
                LRU
              </a>{" "}
            </h4>
            <h4>
              Link:{" "}
              <a
                href="https://www.youtube.com/watch?v=4wVp97-uqr0"
                target="_blank"
                rel="noreferrer"
              >
                LRU
              </a>{" "}
            </h4>
            <h4>
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=8rcUs5RutX0"
                target="_blank"
                rel="noreferrer"
              >
                FIFO
              </a>
            </h4>
            <h4>
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=chaGpiqFJWI"
                target="_blank"
                rel="noreferrer"
              >
                FIFO
              </a>
            </h4>
          </div>
          <div className="exercise">
            <h3>Practise questions:</h3>
            <h4>
              {" "}
              Link:{" "}
              <a
                href="https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/"
                target="_blank"
                rel="noreferrer"
              >
                Page Replacement Algorithm
              </a>
            </h4>
          </div>
        </div>
        <hr />
        <div className="cpu">
          <h2 style={{ color: "red" }}>CPU scheduling Algorithm</h2>
          <span>
            CPU scheduling Algorithm are of six types, the most common four are:
            <ul>
              <li>First Come First Serve (FCFS)</li>
              <li>Shortest Job Fist (SJF)</li>
              <li>Shortest Remaining Time First (SJF with preemption)</li>
              <li>Round Robin (RR)</li>
            </ul>
          </span>
          <div className="row">
            <h4>
              {" "}
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=MZdVAVMgNpA"
                target="_blank"
                rel="noreferrer"
              >
                FCFS
              </a>
            </h4>
            <h4>
              {" "}
              Link:{" "}
              <a
                href="https://www.youtube.com/watch?v=VSMAjMfJ6KQ"
                target="_blank"
                rel="noreferrer"
              >
                FCFS
              </a>
            </h4>
            <h4>
              {" "}
              Link :
              <a
                href="https://www.youtube.com/watch?v=VCIVXPoiLpU"
                target="_blank"
                rel="noreferrer"
              >
                SJF
              </a>
            </h4>
            <h4>
              {" "}
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=t0g9b3SJECg"
                target="_blank"
                rel="noreferrer"
              >
                SJF
              </a>
            </h4>
            <h4>
              {" "}
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=_QcX99B-zbU"
                target="_blank"
                rel="noreferrer"
              >
                SRTF
              </a>
            </h4>
            <h4>
              {" "}
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=-jFGYDfWkXI"
                target="_blank"
                rel="noreferrer"
              >
                RR
              </a>
            </h4>
          </div>
          <div className="exercise">
            <h3>Practise questions:</h3>
            <h4>
              {" "}
              Link:{" "}
              <a
                href="https://www.notesjam.com/2018/11/scheduling-algorithms-examples.html"
                target="_blank"
                rel="noreferrer"
              >
                CPU scheduling Algorithm Exercise
              </a>
            </h4>
          </div>
        </div>
        <hr />
        <div className="disk">
          <h2 style={{ color: "red" }}>Disk Scheduling Algorithm</h2>
          <span>
            There are more then 9+ disk scheduling algorithm but to most common
            ones asked in the exam are the
            <ul>
              <li>Shortest Seek Time First (SSTF)</li>
            </ul>
            <ul>
              <li>First Come First Serve (FCFS)</li>
            </ul>
          </span>
          <div className="row">
            <h4>
              {" "}
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=P_dA8VGJjA8"
                target="_blank"
                rel="noreferrer"
              >
                SSTF
              </a>
            </h4>
            <h4>
              {" "}
              Link :{" "}
              <a
                href="https://www.youtube.com/watch?v=yP89YlEGCqA"
                target="_blank"
                rel="noreferrer"
              >
                FCFS
              </a>
            </h4>
          </div>
          <div className="exercise">
            <h3>Practise questions:</h3>
            <h4>
              {" "}
              Link :{" "}
              <a
                href="https://www.geeksforgeeks.org/disk-scheduling-algorithms/"
                target="_blank"
                rel="noreferrer"
              >
                Disk Scheduling Algorithms Exercises
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
