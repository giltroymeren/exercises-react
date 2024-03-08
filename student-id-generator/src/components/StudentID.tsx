import React from "react";
import { Student } from "./StudentForm";

type Props = {
  student: Student;
};

function StudentID({ student }: Props) {
  return (
    <div
      className="py-8 px-8 max-w-m mx-auto bg-white rounded-xl shadow-lg space-y-2 
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
          <p className="text-xs lining-nums font-mono text-cyan-300">
            {Date.now()}
          </p>
          <p className="text-slate-500">{student.degree}</p>
          <p className="text-slate-900">{student.university}</p>
          <button
            className="px-4 py-1 text-sm text-cyan-600 font-semibold rounded-full 
            border border-cyan-200 hover:text-white hover:bg-cyan-600 hover:border-transparent 
            focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
          >
            Message{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 mb-0.5 inline-block "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023
                  2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 
                  0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentID;
