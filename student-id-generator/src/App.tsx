import React from "react";
import "./App.css";
import StudentID from "./components/StudentID";
import StudentForm, { Student } from "./components/StudentForm";

function App() {
  const [studentData, setStudentData] = React.useState<Student | undefined>(
    undefined
  );

  return (
    <div className="w-full flex flex-row">
      <div className="basis-1/3">
        <StudentForm setStudentData={setStudentData} />
      </div>

      {studentData && (
        <div className="basis-2/3 flex">
          <StudentID student={studentData} />
        </div>
      )}
    </div>
  );
}

export default App;
