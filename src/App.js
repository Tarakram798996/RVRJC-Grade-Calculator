import React, { useMemo, useState } from "react";
import SemesterSelector from "./components/SemesterSelector";
import GradeTable from "./components/GradeTable";
import ResultDisplay from "./components/ResultDisplay";
import { semesters, gradeMap, semCumCredits } from "./data/semesterData";
import Footer from "./components/Footer";

function round2(x) {
  return Math.round(x * 100) / 100;
}

export default function App() {
  const [semester, setSemester] = useState("");     // index 0..7 or ""
  const [grades, setGrades] = useState([]);         // per-subject selected letter grade
  const [prevCGPA, setPrevCGPA] = useState("");     // number
  const [sgpa, setSGPA] = useState(null);
  const [cgpa, setCGPA] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [errors, setErrors] = useState([]);

  const currentSubjects = useMemo(
    () => (semester === "" ? [] : semesters[semester].subjects),
    [semester]
  );

  // Calculate SGPA from selected grades
  const computeSGPA = () => {
  const errs = [];

  if (semester === "") {
    errs.push("Please select a semester.");
  }

  // Ensure all credit-bearing subjects have a grade
  if (semester !== "") {
    currentSubjects.forEach((s, i) => {
      if (s.credits > 0 && !grades[i]) {
        errs.push(`Select a grade for "${s.name}".`);
      }
    });
  }

  // --- Calculate SGPA regardless of prevCGPA ---
  let sg = null;
  if (semester !== "" && errs.length === 0) {
    let totalPoints = 0;
    let totalCredits = 0;
    currentSubjects.forEach((subj, idx) => {
      if (subj.credits > 0) {
        const gp = gradeMap[grades[idx]];
        totalPoints += subj.credits * gp;
        totalCredits += subj.credits;
      }
    });
    sg = round2(totalPoints / totalCredits);
    setSGPA(sg);
  } else {
    setSGPA(null);
  }

  // --- Calculate CGPA only if prevCGPA is valid ---
  if (semester > 0) {
    if (prevCGPA === "" || Number.isNaN(Number(prevCGPA))) {
      errs.push("Enter your previous CGPA to calculate updated CGPA.");
      setCGPA(null);
      setPercentage(null);
    } else if (prevCGPA < 0 || prevCGPA > 10) {
      errs.push("Previous CGPA must be between 0 and 10.");
      setCGPA(null);
      setPercentage(null);
    } else if (sg !== null) {
      const prevCredits = semCumCredits[semester - 1];
      const totalCreditsTillNow = semCumCredits[semester];
      const currentSemCredits = totalCreditsTillNow - prevCredits;

      const newCG = round2(((Number(prevCGPA) * prevCredits) + (sg * currentSemCredits)) / totalCreditsTillNow);
      setCGPA(newCG);
      setPercentage(round2((newCG - 0.5) * 10));
    }
  } else {
    setCGPA(null);
    setPercentage(null);
  }

  setErrors(errs);
};


  const resetAll = () => {
    setSemester("");
    setGrades([]);
    setPrevCGPA("");
    setSGPA(null);
    setCGPA(null);
    setPercentage(null);
    setErrors([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <h1 className="text-2xl md:text-3xl font-bold">
            R.V.R & J.C. Student Grade Calculator
          </h1>
          <p className="text-sm opacity-90">
            SGPA • CGPA • Percentage — using your official syllabus & credit weights of CS Branches
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6">
        <div className="bg-white rounded-2xl shadow p-5">
          <SemesterSelector semester={semester} setSemester={(s) => {
            setSemester(s);
            setGrades([]); // reset grades on semester change
            setSGPA(null); setCGPA(null); setPercentage(null); setErrors([]);
          }} semesters={semesters} />

          {semester !== "" && (
            <>
              <GradeTable subjects={currentSubjects} grades={grades} setGrades={setGrades} />

              {semester > 0 && (
                <div className="mt-4">
                  <label className="block mb-2 font-semibold">Previous CGPA</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    step="0.01"
                    min="0"
                    max="10"
                    className="border rounded p-2 w-full"
                    value={prevCGPA}
                    onChange={(e) => setPrevCGPA(e.target.value)}
                    placeholder="e.g. 8.45"
                  />
                  
                </div>
              )}

              <div className="mt-5 flex gap-3">
                <button
                  onClick={computeSGPA}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow"
                >
                  Calculate
                </button>
                <button
                  onClick={resetAll}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg"
                >
                  Reset
                </button>
              </div>

              <ResultDisplay
                sgpa={sgpa}
                cgpa={cgpa}
                percentage={percentage}
                errors={errors}
              />
            </>
          )}
        </div>

        <section className="mt-6 text-sm text-gray-600">
          <h3 className="font-semibold mb-1">Formulas used</h3>
          <ul className="list-disc ml-6">
            <li>SGPA = Σ(credits × grade points) / Σ(credits)</li>
            <li>CGPA (till current sem) =
              [ (Prev CGPA × Prev Total Credits) + (Current SGPA × Current Sem Credits) ] / (Total Credits till current sem)
            </li>
            <li>Percentage = (CGPA − 0.5) × 10</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
