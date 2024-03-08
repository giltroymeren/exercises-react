import React from "react";
import { Student } from "./StudentForm";

type Props = {
  student: Student;
};

function StudentID({ student }: Props) {
  return (
    <div
      className="w-1/2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 
              sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 self-center"
    >
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://picsum.photos/200"
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {student.firstName} {student.lastName}
          </p>
          <p className="text-slate-500">{student.degree}</p>
          <p className="text-slate-900">{student.university}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentID;
