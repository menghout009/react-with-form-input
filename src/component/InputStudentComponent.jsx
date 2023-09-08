import React, { Component } from "react";
import FormInformation from "./FormInformation";

export default class InputStudentComponent extends Component {

  constructor() {
    super();
    this.state = {
      StudentInformation:[],
      newemailStu: "null",
      newStuInfo: "null",
      newageStu: "null",
      
    };
  }
  inputInfo = (inputInfo) => {
    this.setState({ newStuInfo: inputInfo.target.value });
  };
  // Email input
  inputemailStu = (inputEmail) => {
    this.setState({ newemailStu: inputEmail.target.value });
  };
  // Age input
  inputageStu = (inputAge) => {
    this.setState({ newageStu: inputAge.target.value });
  };

  subBtn = () => {
    const newInput = {
      id: this.state.StudentInformation.length + 1,
      emailStu: this.state.newemailStu,
      studentName: this.state.newStuInfo,
      ageStu: this.state.newageStu,
      staTus : "Padding",
    };
    this.setState(
      {
        StudentInformation: [...this.state.StudentInformation, newInput],
        newStuInfo: "null",
        newemailStu: "null",
        newageStu: "null",
      },
      () => console.log("This is student : ", this.state.StudentInformation)
    );
  };

  
  
  render() {
    return (
      // Form Input information
      <div>
        <div>
          <div className="mt-10 ">
            <label
              for="text"
              class="text-gray-300	color: rgb(240 171 252); px-1000 m-20 text-6xl font-serif block font-extrabold text-block-900 dark:text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
            >
              Student Information Input
            </label>

            {/* Your Email */}
            <label class=" px-3 font-bold mt-20">Your Email</label>
            <div>
              <div class="relative mb-8">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1000px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  onChange={this.inputemailStu}
                />
              </div>
            </div>

            {/* User name */}
            <label class=" px-3 font-bold py-5 ">User name</label>
            <div>
              <div class="relative mb-8">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-6 h-6 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1000px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="User name"
                  onChange={this.inputInfo}
                />
              </div>
            </div>

            {/* Age */}

            <label class=" px-3 font-bold py-5 ">Age</label>
            <div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-6 h-6 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[1000px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Age"
                  onChange={this.inputageStu}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Button */}
        <button 
        
        type="button" 
        class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 mb-5" onClick={() => this.subBtn()}>Purple</button>
        {/* Display */}
        <FormInformation dataInfo={this.state.StudentInformation} />
      </div>
    )
  }
}
