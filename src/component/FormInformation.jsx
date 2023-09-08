import React, { Component } from "react";
import Swal from "sweetalert2";
export default class FormInformation extends Component {
  alertBtn = () => {
    this.props.dataInfo.map((countDataInfo) => {
      Swal.fire({
        title:
          "ID : " +
          countDataInfo.id +
          "<br>" +
          "Email : " +
          countDataInfo.emailStu +
          "<br>" +
          "Name : " +
          countDataInfo.studentName +
          "<br>" +
          "Age : " +
          countDataInfo.ageStu +
          "<br>",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat`,
      });
    });
  };

  changeBtn = (dataInfo) => {
    this.props.dataInfo.map((dataBtn) => {
      console.log(dataBtn.id);
      console.log(dataInfo);
      if (dataBtn.id === dataInfo) {
        if (dataBtn.staTus === "Padding") {
          dataBtn.staTus = "Done";
        } else {
          dataBtn.staTus = "Padding";
        }
      }
    });
    this.setState({
      dataBtn: this.props.dataInfo,
    });
  };

  render() {
    return (
      <div class="border border-white-300 text-gray-900 text-sm rounded-lg">
        <table class="w-[1000px] rounded-lg text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs-[70] rounded-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" class="px-1 py- ">
                Id
              </th>
              <th scope="col" class="px-1 py-5">
                Email
              </th>
              <th scope="col" class="px-1 py-5">
                Student name
              </th>
              <th scope="col" class="px-1 py-5">
                Age
              </th>

              <th scope="col" class="px-5 py-5">
                Status
              </th>

              <th scope="col" class="px-5 py-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataInfo.map((countDataInfo) => (
              <tr className="bg-white border-b dark:bg-gray-800  dark:border-gray-700 even:bg-red-300 odd:bg-white p-5">
                <td className="px-6, py-4">{countDataInfo.id} </td>
                <td className="px-6, py-4">{countDataInfo.emailStu} </td>
                <td className="px-6, py-4">{countDataInfo.studentName} </td>
                <td className="px-8, py-5">{countDataInfo.ageStu} </td>
                <td>
                  <button
                    onClick={ () => this.changeBtn(countDataInfo.id)}
                    type="button"
                    class={countDataInfo.staTus === "Padding" ? "focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" : "focus:outline-none text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"}
                  >
                    {countDataInfo.staTus}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.alertBtn()}
                    type="button"
                    class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                  >
                    Show more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
