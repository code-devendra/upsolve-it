import React from "react";

const AddQuestion = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-center text-white">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() =>
            document.getElementById("my_modal_3").classList.remove("modal-open")
          }
        >
          ✕
        </button>
        <h3 className="text-lg md:text-xl font-semibold mb-6">Add Question</h3>
        <form>
          <div className="w-full max-w-sm mx-auto mb-5">
            <input
              type="text"
              name="question"
              className="inline-block w-full p-2 border border-[#1FB2A6] text-white rounded-md outline-none bg-base-200"
              placeholder="Enter a Question"
            />
          </div>
          <div className="w-full max-w-sm mx-auto mb-7">
            <input
              type="text"
              name="questionUrl"
              className="inline-block w-full p-2 border border-[#1FB2A6] text-white rounded-md outline-none bg-base-200"
              placeholder="Enter your question URL"
            />
          </div>
          <div className="w-full max-w-sm mx-auto mb-4">
            <button className=" my-3 w-full text-center  font-medium mx-auto py-[10px] rounded-md border border-[#1FB2A6] bg-[#1FB2A6] hover:text-white transition-all ease-in-out">
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddQuestion;