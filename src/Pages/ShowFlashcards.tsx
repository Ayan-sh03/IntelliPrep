import React, { useState } from "react";
import Flashcard from "../Components/Flashcard";
import { TiPlusOutline } from "react-icons/ti";

const ShowFlashcards = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div className="flex p-20 bg-bgColor1 flex-col gap-5 w-screen h-screen font-montserrat">
        <h1 className="font-bold text-5xl text-white">Flashcards</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center w-5/12"
          onClick={() => setShowModal(true)}
        >
          <TiPlusOutline className="mr-2" />
          Add Flashcard
        </button>

        {/* Modal window start  */}
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-montserrat">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Add Flashcard</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div className=" max-w-xl rounded-md border  p-6 text-black">
                    <form className="flex flex-col gap-6 mx-10">
                      <div className="m-2 flex flex-col gap-3 rounded-sm text-xl">
                        <label htmlFor="Title">Title</label>
                        <input
                          id="Title"
                          name="Title"
                          className="text-md hover:box-shadow-3xl hover:box-shadow-white focus:ring-3 focus:ring-blue rounded-md border bg-transparent py-1 indent-3 hover:outline-none focus:ring-inset"
                        />
                      </div>

                      <div className="m-2 flex flex-col gap-3 rounded-sm text-xl">
                        <label htmlFor="Content">Content</label>
                        <textarea
                          id="Title"
                          name="Title"
                          className="border-gradient-to-r hover:box-shadow-3xl hover:box-shadow-white h-40 resize-none rounded-md border-2 bg-transparent from-blue-600 to-blue-300"
                        />
                      </div>
                    </form>
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {/* Modal window End  */}

        <div className="flex flex-row  gap-10 flex-wrap">
          <Flashcard
            title="New Temporary"
            description="some random description"
          />
          <Flashcard
            title="New Temporary"
            description="some random description"
          />
          <Flashcard
            title="New Temporary"
            description="some random description"
          />
          <Flashcard
            title="New Temporary"
            description="some random description"
          />
        </div>
      </div>
    </>
  );
};

export default ShowFlashcards;
