import React from "react";

export default function ResultDisplay({ sgpa, cgpa, percentage, errors }) {
  return (
    <div className="mt-6">
      {errors.length > 0 && (
        <div className="mb-4 p-4 bg-red-100 rounded border border-red-300">
          <h3 className="font-semibold mb-2 text-red-700">Please fix the following:</h3>
          <ul className="list-disc ml-6 text-red-700">
            {errors.map((e, i) => <li key={i}>{e}</li>)}
          </ul>
        </div>
      )}

      <div className="p-4 bg-emerald-50 rounded border border-emerald-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 rounded bg-white shadow-sm">
            <p className="text-sm text-gray-500">Semester SGPA</p>
            <p className="text-2xl font-bold">{sgpa ?? "—"}</p>
          </div>
          <div className="p-3 rounded bg-white shadow-sm">
            <p className="text-sm text-gray-500">Updated CGPA</p>
            <p className="text-2xl font-bold">{cgpa ?? "—"}</p>
          </div>
          <div className="p-3 rounded bg-white shadow-sm">
            <p className="text-sm text-gray-500">Percentage</p>
            <p className="text-2xl font-bold">
              {percentage !== null ? `${percentage}%` : "—"}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
