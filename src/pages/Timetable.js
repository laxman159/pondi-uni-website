import React from "react";
import ExamTable from "../component/ExamTable";
import Header from "../component/Header";
import "./Timetable.css";

export default function Timetable() {
  return (
    <div className="timetable">
      <Header />
      <div className="ttinfo">
        <h3>
          Exam Releated Info for 2nd semester{" "}
          <span style={{ color: "red" }}>MCA</span> students
        </h3>
      </div>
      <div className="timeexam">
        <ExamTable />
      </div>
    </div>
  );
}
