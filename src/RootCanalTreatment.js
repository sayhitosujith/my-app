import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import rootCanalImg from "./assets/RootCanal.jpg";

export default function RootCanalTreatment() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">

      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs>

          <Link to="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>

          <Link to="/HomePage" className="opacity-60">
            Home
          </Link>

          <Link to="/Welcome" className="opacity-60">
            Welcome
          </Link>

          <span className="font-medium text-orange-900">
            Root Canal Treatment
          </span>

        </Breadcrumbs>
      </div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-900">
          Root Canal Treatment
        </h1>
        <p className="text-gray-600 mt-3 italic">
          Save your natural tooth and eliminate pain with advanced dental care.
        </p>
      </div>

      {/* Introduction + Image */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div className="text-gray-700 leading-7">
          <p>
            Root Canal Treatment (RCT) is a dental procedure used to treat
            infection inside a tooth. When the pulp inside the tooth becomes
            infected due to deep decay, cracks, or trauma, a root canal helps
            remove the infection and preserve your natural tooth.
          </p>

          <p className="mt-4">
            Our dental specialists use modern technology and painless procedures
            to ensure a comfortable treatment experience while restoring your
            tooth's health and function.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={rootCanalImg}
            alt="Root Canal Treatment"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>

      {/* Symptoms */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">
          Signs You May Need a Root Canal
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
          <li>Persistent tooth pain</li>
          <li>Sensitivity to hot or cold</li>
          <li>Swollen or tender gums</li>
          <li>Darkening of the tooth</li>
          <li>Pain when chewing or biting</li>
          <li>Pimple-like swelling on the gums</li>
        </ul>
      </div>

      {/* Procedure */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">
          Root Canal Treatment Procedure
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-semibold">1. Examination & X-Ray</h3>
            <p>The dentist examines the tooth and takes an X-ray.</p>
          </div>

          <div>
            <h3 className="font-semibold">2. Local Anesthesia</h3>
            <p>The area is numbed to ensure a painless procedure.</p>
          </div>

          <div>
            <h3 className="font-semibold">3. Remove Infected Pulp</h3>
            <p>The infected pulp tissue is removed from inside the tooth.</p>
          </div>

          <div>
            <h3 className="font-semibold">4. Cleaning & Disinfection</h3>
            <p>The root canals are cleaned and disinfected thoroughly.</p>
          </div>

          <div>
            <h3 className="font-semibold">5. Filling & Sealing</h3>
            <p>The canals are filled with a special material to seal the tooth.</p>
          </div>

          <div>
            <h3 className="font-semibold">6. Dental Crown</h3>
            <p>A crown may be placed to restore strength and function.</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4">
          Benefits of Root Canal Treatment
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-6">
          <li>Saves your natural tooth</li>
          <li>Prevents infection from spreading</li>
          <li>Relieves pain and discomfort</li>
          <li>Restores chewing ability</li>
          <li>Improves overall oral health</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <h3 className="text-xl font-semibold text-orange-900">
          Book Your Appointment Today
        </h3>
        <p className="text-gray-600 mt-2">
          If you are experiencing tooth pain, early treatment can save your
          tooth and prevent complications.
        </p>

        <button className="mt-5 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg shadow">
          Book Appointment
        </button>
      </div>

    </section>
  );
}