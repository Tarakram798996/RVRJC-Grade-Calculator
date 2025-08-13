import React from "react";
import { gradeMap } from "../data/semesterData";

export default function GradeTable({ subjects, grades, setGrades }) {
  const handleChange = (i, value) => {
    const next = [...grades];
    next[i] = value;
    setGrades(next);
  };

  return (
    <div className="mt-2 overflow-x-auto">
      <table className="w-full border rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Subject</th>
            <th className="border p-2">Credits</th>
            <th className="border p-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subj, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50">
              <td className="border p-2">{subj.name}</td>
              <td className="border p-2 text-center">{subj.credits}</td>
              <td className="border p-2 text-center">
                {subj.credits > 0 ? (
                  <select
                    value={grades[idx] || ""}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    className="border rounded p-1 w-28"
                  >
                    <option value="">-- Select --</option>
                    {Object.keys(gradeMap).map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-gray-500 mt-1">Note: MC courses carry 0 credits and don’t affect SGPA.</p>
    </div>
  );
}
