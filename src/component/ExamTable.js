import React from "react";
import "./ExamTable.css";

export default function ExamTable() {
  return (
    <table className="tableExm">
      <tr>
        <th>Exam Date</th>
        <th>Subject Code</th>
        <th>Subject</th>
      </tr>
      <tr>
        <td>19-07-2021</td>
        <td>CSCA416</td>
        <td>DATABASE MANAGEMENT SYSTEM LAB</td>
      </tr>
      <tr>
        <td>23-07-2021</td>
        <td>CSEL561</td>
        <td>BIG DATA</td>
      </tr>
      <tr>
        <td>26-07-2021</td>
        <td>CSCA421</td>
        <td>COMPUTER NETWORKS</td>
      </tr>
      <tr>
        <td>27-07-2021</td>
        <td>CSCA424</td>
        <td>COMPUTER NETWORKS LAB</td>
      </tr>
      <tr>
        <td>29-07-2021</td>
        <td>CSEL441</td>
        <td>FUNDAMENTALS OF CRYPTOGRAPHY</td>
      </tr>
      <tr>
        <td>31-07-2021</td>
        <td>CSEL451</td>
        <td>OBJECT ORIENTED SYSTEM DESIGN</td>
      </tr>
      <tr>
        <td>02-08-2021</td>
        <td>CSCA414</td>
        <td>DATA STRUCTURES AND ALGORITHM LAB</td>
      </tr>
      <tr>
        <td>03-08-2021</td>
        <td>CSCA423</td>
        <td>COMMUNICATION SKILLS</td>
      </tr>
      <tr>
        <td>05-08-2021</td>
        <td>CSCA422</td>
        <td>OPERATING SYSTEMS</td>
      </tr>
      <tr>
        <td>06-08-2021</td>
        <td>CSCA425</td>
        <td>OPERATING SYSTEMS LAB</td>
      </tr>
      <tr>
        <td>07-08-2021</td>
        <td>CSCA415</td>
        <td>OBJECT ORIENTED PROGRAMMING LAB</td>
      </tr>
    </table>
  );
}
