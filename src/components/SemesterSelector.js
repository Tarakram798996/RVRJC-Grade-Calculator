import React from "react";

export default function SemesterSelector({ semester, setSemester, semesters }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">Select Semester:</label>
      <select
        value={semester}
        onChange={(e) => setSemester(Number(e.target.value))}
        className="border rounded p-2 w-full"
      >
        <option value="">-- Choose Semester --</option>
        {semesters.map((s, idx) => (
          <option key={idx} value={idx}>
            {s.name}
          </option>
        ))}
      </select>
    </div>
  );
}
