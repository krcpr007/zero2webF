import React from "react";
import { GiCrossedSabres } from "react-icons/gi";
import Upload from "./Upload";
import Input from "./Input.json";

function Modal({ setShowModal, showModal }) {
  // const [showModal, setShowModal] = useState(false);
  const editDetails = () => {
    // show and hide details/modal
    setShowModal(!showModal);
  };
  const handleInputs = (e) => {
    //this function will handle the input
    // let name, value;
    // name = e.target.name;
    // value = e.target.value;
  };
  const updateDetails = async () => {
    //function for updating the details
    try {
      const yes = window.confirm("Confirm do you want to update?"); //confirmation
      if (yes) {
        setShowModal(false);
        editDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" overflow-y-auto overflow-x-hidden fixed m-50 z-50 w-full top-20 md:left-1/2 h-modal md:h-full">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <form>
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
              <button
                type="button"
                onClick={() => setShowModal(!showModal)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <GiCrossedSabres className="text-sky-500 text-lg" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-5">
              {Input.inputs.map((item, i) => (
                <div>
                  <label
                    htmlFor={item.name}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {item.label}
                  </label>
                  <input
                    type="text"
                    name={item.name}
                    id={item.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleInputs}
                  />
                </div>
              ))}
              <Upload />
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="tailwind-btn"
                onClick={updateDetails}
              ></button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-sky-500 rounded-lg border border-sky-500 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-sky-500 dark:border-sky-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={editDetails}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
