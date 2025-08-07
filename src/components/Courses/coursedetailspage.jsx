"use client";
import React from "react";

export default function BatchDetails() {
  const tables = [
    {
      title: "BMS, BAF & BBI Batch Details",
      buttons: ["BMS", "FYBMS"],
      data: [
        {
          commencement: "2nd Week of July",
          batch: "Evening",
          timings: "04.30 pm to 06.00 pm",
          course: "Accounts & Maths, Eco, & Law",
          yearlyFees: "₹16,000/-",
          semFees: "₹8,000/-",
        },
      ],
    },
    {
      buttons: ["BAF", "FYBAF"],
      data: [
        {
          commencement: "2nd Week of July",
          batch: "Evening",
          timings: "04.30 pm to 06.00 pm",
          course: "Accounts & Maths, Eco, Law & Auditing",
          yearlyFees: "₹16,000/-",
          semFees: "₹8,500/-",
        },
      ],
    },
    {
      buttons: ["BBI", "FYBBI"],
      data: [
        {
          commencement: "2nd Week of July",
          batch: "Evening",
          timings: "04.30 pm to 06.00 pm",
          course: "Accounts, Eco, Law, Quantitative Method",
          yearlyFees: "₹16,000/-",
          semFees: "₹8,500/-",
        },
      ],
    },
    {
      title: "FYBCOM, SYBCOM & TYBCOM Batch Details:",
      buttons: ["TYBCOM Batch Details"],
      data: [
        {
          commencement: "2nd Week of July",
          batch: "Evening",
          timings: "04.30 pm to 06.00 pm",
          course: "",
          yearlyFees: "",
          semFees: "",
        },
      ],
    },
  ];

  const fybcomSycomBatches = [
    {
      batchLabel: "Batch 1:",
      commencement: "2nd Week of June",
      batch: "Evening",
      timings: "6 pm – 7 pm",
    },
    {
      batchLabel: "Batch 2:",
      commencement: "1st Week of June",
      batch: "Afternoon",
      timings: "3.45 pm – 5 pm",
    },
  ];

  return (
    <div className="px-4 py-6 md:px-6 space-y-12 text-base md:text-lg">
      {/* Dynamic Tables for BMS/BAF/BBI */}
      <section className="space-y-10">
        {tables.map((table, index) => (
          <div key={index}>
            {table.title && (
              <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
                {table.title}
              </h2>
            )}

            {table.buttons?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {table.buttons.map((btn, i) => (
                  <button
                    key={i}
                    className={`border px-4 py-2 rounded-full ${
                      i === 0
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    } text-sm md:text-base font-semibold`}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            )}
             <div className="overflow-x-auto ml-[2px] mr-[30px] sm:ml-[40px] sm:mr-[20px] md:ml-[50px] md:mr-[30px] max-w-[1600px] rounded-lg">

              <table className="w-full table-auto border-collapse border border-gray-300 shadow-md text-base">
                <thead className="bg-blue-100 text-left">
                  <tr>
                    <th className="border border-gray-300 px-4 py-4 whitespace-nowrap">
                      Date of Commencement :
                    </th>
                    <th className="border border-gray-300 px-4 py-4 whitespace-nowrap">Batch :</th>
                    <th className="border border-gray-300 px-4 py-4 whitespace-nowrap">Timings :</th>
                    {table.data[0].course && (
                      <th className="border border-gray-300 px-4 py-4 whitespace-nowrap">
                        Course :
                      </th>
                    )}
                    {table.data[0].yearlyFees && (
                      <th className="border border-gray-300 px-4 py-4 whitespace-nowrap">
                        Yearly Fees :
                      </th>
                    )}
                    {table.data[0].semFees && (
                      <th className="border border-gray-300 px-4 py-4 whitespace-nowrap">
                        Sem I :
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {table.data.map((row, idx) => (
                    <tr key={idx} className="min-h-[60px]">
                      <td className="border border-gray-300 px-4 py-4">{row.commencement}</td>
                      <td className="border border-gray-300 px-4 py-4">{row.batch}</td>
                      <td className="border border-gray-300 px-4 py-4">{row.timings}</td>
                      {row.course && (
                        <td className="border border-gray-300 px-4 py-4">{row.course}</td>
                      )}
                      {row.yearlyFees && (
                        <td className="border border-gray-300 px-4 py-4">{row.yearlyFees}</td>
                      )}
                      {row.semFees && (
                        <td className="border border-gray-300 px-4 py-4">{row.semFees}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      {/* Static FYBCOM/SYBCOM Features */}
      <section className="space-y-6 px-[50px]">
        <ul className="space-y-4 text-base md:text-lg">
          {[
            "Weekly Test Preliminary Exams in each semester as per University Standard.",
            "Printed Notes and Complimentary Accounts Textbook.",
            "Specialised Teachers for each Subject.",
            "Revision and intensive coaching’s after completion of portion.",
            "Revision includes Solving of University Papers",
            "Complete Support will be provided till the University Exams.",
            "Personal attention to each and every students.",
            "We ensure 100 % results for T.Y. B.Com.",
            "We also conduct separate lectures for university correspondence students.",
          ].map((point, index) => (
            <li
              key={index}
              className="relative pl-5 before:absolute before:top-2.5 before:left-0 before:w-1.5 before:h-1.5 before:rounded-full before:bg-black"
            >
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Render FYBCOM/SYBCOM Batch Tables */}
      <section className="space-y-10">
        {fybcomSycomBatches.map((batch, index) => (
          <div key={index}>
            <div className="flex mb-2">
              <button className="border border-orange-500 text-blue-800 px-4 py-2 rounded-md font-medium text-sm md:text-base">
                FYBCOM / SYBCOM Batch Details
              </button>
            </div>

            <div className="flex mb-2">
              <button className="border border-orange-300 text-blue-800 px-4 py-1 rounded-md font-medium text-sm md:text-base">
                {batch.batchLabel}
              </button>
            </div>

            <div className="border shadow-md overflow-x-auto mx-auto  ml-[37px] max-w-[1000px] rounded-lg">
              <div className="w-full">
                <table className="w-full text-left border-collapse text-base">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 p-3">Date of Commencement :</th>
                      <th className="border border-blue-200 p-3">Batch :</th>
                      <th className="border border-blue-200 p-3">Timings :</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className="border border-gray-200 p-3">{batch.commencement}</td>
                      <td className="border border-gray-200 p-3">{batch.batch}</td>
                      <td className="border border-gray-200 p-3">{batch.timings}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}