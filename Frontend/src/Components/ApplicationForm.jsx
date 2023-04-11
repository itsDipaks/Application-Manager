import React from "react";

const ApplicationForm = () => {


    
  return (
    <div>
      <section class="text-gray-600 body-font ">
        <div class=" px-5 py-24 mx-auto ">
          <div class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Compny Name
              </label>
              <input
                type="text"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex justify-between  gap-4">
              <div class="relative w-1/2 mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Date
                </label>
                <input
                  type="date"
                  id="name"
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative w-1/2 mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="time"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="flex justify-between  gap-4">
              <div class="relative mb-4 w-1/2">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  {" "}
                  Role Type
                </label>
                <select
                  id="countries"
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 px-3    "
                >
                  <option selected>Choose a Role</option>
                  <option value="Frontend">Frontend Developer</option>
                  <option value="Backend">Backend Developer</option>
                  <option value="FullStack">Full Stack Developer</option>
                  <option value="Nodejs">Nodejs Developer</option>
                  <option value="Softwear">Software Developer</option>
                  <option value="Quality">Quality Engineer </option>
                </select>
              </div>
              <div class="relative mb-4 w-1/2">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Job Type
                </label>
                <select
                  id="countries"
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 px-3    "
                >
                  <option selected>Choose a Role</option>
                  <option value="Internship">Internship</option>
                  <option value="FullTime">Full Time</option>
                  <option value="Intership_With_FullTime">
                    Intership + Full Time Offer{" "}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
</div>

            <div className="flex justify-between  gap-4">
              <div class="relative mb-4 w-1/2">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Select Offer City
                </label>
                <select
                  id="countries"
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 px-3    "
                >
                  <option selected>Choose a Location</option>
                  <option value="Mumbai">United States</option>
                  <option value="Nashik">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div class="relative mb-4 w-1/2">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Office Type
                </label>
                <select
                  id="countries"
                  class=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2 px-3    "
                >
                  <option selected>Choose a Office </option>
                  <option value="WFH">Home</option>
                  <option value="WFO">Office</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Company Description (if Any)
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm;
