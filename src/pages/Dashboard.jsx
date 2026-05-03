import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const scheduleRef = useRef(null);

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
import { getMedicines } from "../services/api";
import { useEffect, useState } from "react";

const [medicines, setMedicines] = useState([]);

useEffect(() => {
  getMedicines()
    .then((res) => {
      setMedicines(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


  // ✅ FIXED: state added (ONLY CHANGE)
  const [medicines, setMedicines] = React.useState([
    { name: "Paracetamol", time: "08:00 AM", status: "taken" },
    { name: "Vitamin C", time: "02:00 PM", status: "pending" },
    { name: "Antibiotic", time: "09:00 PM", status: "missed" },
    { name: "Calcium", time: "10:00 AM", status: "taken" },
    { name: "Iron Supplement", time: "04:00 PM", status: "pending" },
    { name: "Multivitamin", time: "07:00 PM", status: "taken" },
  ]);

  // ✅ NEW FUNCTION (added only)
  const markAsDone = (index) => {
    const updated = medicines.map((med, i) =>
      i === index ? { ...med, status: "taken" } : med
    );

    setMedicines(updated);
  };

  useEffect(() => {
    const pending = medicines.find((m) => m.status === "pending");

    if (pending) {
      setTimeout(() => {
        alert(`Reminder: ${pending.name} at ${pending.time}`);
      }, 3000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER (UNCHANGED) */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2966/2966481.png"
              className="w-9"
              alt="logo"
            />
            <h1 className="text-xl font-bold text-green-700">
              MedCare Health System
            </h1>
          </div>

          <div className="flex gap-6 text-gray-600 font-medium">
            <button onClick={() => navigate("/dashboard")} className="hover:text-green-700">Dashboard</button>
            <button onClick={() => navigate("/history")} className="hover:text-green-700">History</button>
            <button onClick={() => navigate("/report")} className="hover:text-green-700">Reports</button>
          </div>

          <button
            onClick={logout}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">

        {/* HERO (UNCHANGED) */}
        <section className="bg-white rounded-2xl shadow-sm p-8 text-center">

          <h2 className="text-3xl font-bold text-gray-800">
            Your Health, Our Responsibility
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            MedCare helps patients manage medicines safely, on time, and with full
            confidence through a structured digital health system.
          </p>

          <button
            onClick={() =>
              scheduleRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            View Schedule
          </button>

        </section>

        {/* MEDICINE SECTION */}
        <section ref={scheduleRef}>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Today’s Medication Plan
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {medicines.map((med, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-5 border border-gray-100"
              >

                <h4 className="font-semibold text-gray-800">{med.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{med.time}</p>

                <div className="mt-3">
                  {med.status === "taken" && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full">
                      Taken
                    </span>
                  )}

                  {med.status === "pending" && (
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full">
                      Pending
                    </span>
                  )}

                  {med.status === "missed" && (
                    <span className="bg-red-100 text-red-700 px-3 py-1 text-sm rounded-full">
                      Missed
                    </span>
                  )}
                </div>

                {/* ✅ ONLY FUNCTION ADDED HERE */}
                <button
                  onClick={() => markAsDone(i)}
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                >
                  Mark as Done
                </button>

              </div>
            ))}

          </div>

        </section>

        {/* ABOUT / VISION / BENEFITS (UNCHANGED) */}
        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-4">
            About MedCare
          </h3>
          <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
            MedCare is a digital healthcare assistant designed to simplify medication management. It ensures patients never miss their doses and helps build a consistent health routine with structured tracking and reminders.
          </p>
        </section> 

        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-center text-green-700 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            To create a world where every patient manages their health confidently without missing a single dose, supported by smart and simple technology.          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Benefits
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>✔ Timely medicine reminders</li>
            <li>✔ Better health discipline</li>
            <li>✔ Reduced medication errors</li>
            <li>✔ Easy patient tracking</li>
            <li>✔ Simple and clean UI</li>
          </ul>
        </section>

      </main>

      {/* FOOTER (UNCHANGED) */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MedCare Health System
        </div>
      </footer>

    </div>
  );
}