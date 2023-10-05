import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import toast from "react-hot-toast";

const UpdateQuestion = (props) => {
  const firebase = useFirebase();
  const [ques, setQues] = useState("");
  const [qUrl, setQUrl] = useState("");
  useEffect(() => {
    setQUrl(props.questionUrl);
    setQues(props.question);
  }, [props]);
  const handleQuestionModification = () => {
    if (ques === "" || qUrl === "") {
      return toast.error("All Fields are required", { id: 5 });
    }
    firebase
      .updateQuestion(ques, qUrl, props.docId)
      .then((res) => {
        toast.success("Question Update Successfully", { id: 5 });
      })
      .catch((err) => {
        toast.error("Something went wrong", { id: 5 });
      });
  };
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box text-center text-white">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() =>
            document.getElementById("my_modal_4").classList.remove("modal-open")
          }
        >
          ✕
        </button>
        <h3 className="text-lg md:text-xl font-semibold mb-6">
          Update Question
        </h3>
        <div className="w-full max-w-sm mx-auto mb-5">
          <input
            type="text"
            name="question"
            value={ques}
            onChange={(e) => setQues(e.target.value)}
            className="inline-block w-full p-2 border border-[#1FB2A6] text-white rounded-md outline-none bg-base-200"
            placeholder="Enter a Question"
          />
        </div>
        <div className="w-full max-w-sm mx-auto mb-7">
          <input
            type="text"
            name="questionUrl"
            value={qUrl}
            onChange={(e) => setQUrl(e.target.value)}
            className="inline-block w-full p-2 border border-[#1FB2A6] text-white rounded-md outline-none bg-base-200"
            placeholder="Enter your question URL"
          />
        </div>
        <div className="w-full max-w-sm mx-auto mb-4">
          <button
            onClick={handleQuestionModification}
            className=" my-3 w-full text-center  font-medium mx-auto py-[10px] rounded-md border border-[#1FB2A6] bg-[#1FB2A6] hover:text-white transition-all ease-in-out"
          >
            Submit
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateQuestion;
