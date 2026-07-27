import React, { useState, useEffect } from "react";
import {
  doc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  Timestamp,
  addDoc,
  orderBy,
  query,
  where
} from "firebase/firestore";
import { db } from "../firebase-config";
import moment from "moment";

const getMonthsForYear = (year) => ({
  jan: { name: "January", start: `${year}-01-01`, end: `${year}-01-31` },
  feb: { name: "February", start: `${year}-02-01`, end: `${year}-02-28` },
  mar: { name: "March", start: `${year}-03-01`, end: `${year}-03-31` },
  apr: { name: "April", start: `${year}-04-01`, end: `${year}-04-30` },
  may: { name: "May", start: `${year}-05-01`, end: `${year}-05-31` },
  jun: { name: "June", start: `${year}-06-01`, end: `${year}-06-30` },
  jul: { name: "July", start: `${year}-07-01`, end: `${year}-07-31` },
  aug: { name: "August", start: `${year}-08-01`, end: `${year}-08-31` },
  sep: { name: "September", start: `${year}-09-01`, end: `${year}-09-30` },
  oct: { name: "October", start: `${year}-10-01`, end: `${year}-10-31` },
  nov: { name: "November", start: `${year}-11-01`, end: `${year}-11-30` },
  dec: { name: "December", start: `${year}-12-01`, end: `${year}-12-31` }
});


// ---------------------------------------------
// Component
// ---------------------------------------------
  const Report = () => {
  const [year, setYear] = useState(2024);
  const MONTHS = getMonthsForYear(year);
  const fuelCollRef = collection(db, "fuel");
  // -------------------------------------------
  // Store all month records in ONE state object
  // -------------------------------------------
  const [recordsByMonth, setRecordsByMonth] = useState({
    jan: [],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  });

  // -------------------------------------------
  // Store totals in ONE object instead of 144 vars
  // -------------------------------------------
  const [totals, setTotals] = useState({
    jan: { gallons: 0, paid: 0, price: 0, avg: 0 },
    feb: { gallons: 0, paid: 0, price: 0, avg: 0 },
    mar: { gallons: 0, paid: 0, price: 0, avg: 0 },
    apr: { gallons: 0, paid: 0, price: 0, avg: 0 },
    may: { gallons: 0, paid: 0, price: 0, avg: 0 },
    jun: { gallons: 0, paid: 0, price: 0, avg: 0 },
    jul: { gallons: 0, paid: 0, price: 0, avg: 0 },
    aug: { gallons: 0, paid: 0, price: 0, avg: 0 },
    sep: { gallons: 0, paid: 0, price: 0, avg: 0 },
    oct: { gallons: 0, paid: 0, price: 0, avg: 0 },
    nov: { gallons: 0, paid: 0, price: 0, avg: 0 },
    dec: { gallons: 0, paid: 0, price: 0, avg: 0 }
  });


useEffect(() => {
  const getRecords = async () => {
    const monthKeys = Object.keys(MONTHS);

    const results = await Promise.all(
      monthKeys.map(async (key) => {
        const { start, end } = MONTHS[key];

        const q = query(
          fuelCollRef,
          orderBy("date"),
          where("date", ">=", moment(start).toDate()),
          where("date", "<=", moment(end).toDate())
        );

        const snapshot = await getDocs(q);

        return {
          key,
          records: snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }))
        };
      })
    );

    const updated = {};
    results.forEach(({ key, records }) => {
      updated[key] = records;
    });

    setRecordsByMonth(updated);
  };

  getRecords();
}, [year]); // reload when year changes

return (
    <div className="homeContainer tableContainer">
      <h1>Fuel Tracker Reports - Copilot Created Usage by Month</h1>

      {/* YEAR SELECTOR (optional) */}
      Select Year: <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
        <option value={2024}>2024</option>
        <option value={2025}>2025</option>
        <option value={2026}>2026</option>
      </select>

      {/* ⭐ THIS ENTIRE BLOCK IS STEP 4 ⭐ */}
      {Object.keys(MONTHS).map((key) => {
        const month = MONTHS[key];
        const records = recordsByMonth[key] || [];

        let totalGallons = 0;
        let totalPaid = 0;

        const rows = records.map((record) => {
          const pricePaid = record.gallons * record.price;
          totalGallons += Number(record.gallons);
          totalPaid += pricePaid;

          return (
            <tr key={record.id}>
              <td>{moment(record.date.toDate()).format("YYYY-MM-DD hh:mm:ssa")}</td>
              <td>{record.vehicle}</td>
              <td>{record.station}</td>
              <td className="justify-right">{record.gallons}</td>
              <td className="justify-right">${record.price}</td>
              <td className="justify-right">${pricePaid.toFixed(2)}</td>
            </tr>
          );
        });

        const avgPerGallon = totalGallons > 0 ? totalPaid / totalGallons : 0;

        return (
          <div key={key}>
            <h1>{month.name} {year}</h1>

            <div className="reportContainer">
              <table>
                <tbody>{rows}</tbody>
              </table>
            </div>

            <div className="summary">
              <p>{month.name} Total Gallons: {totalGallons.toFixed(3)}</p>
              <p>{month.name} Avg Per Gallon: ${avgPerGallon.toFixed(3)}</p>
              <p>{month.name} Total Paid: ${totalPaid.toFixed(2)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default Report