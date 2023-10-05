import { useEffect, useState } from "react";
import { FiEdit, FiLink } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useFirebase } from "../context/Firebase";
import toast from "react-hot-toast";

const QuestionsList = ({ refresh }) => {
  const firebase = useFirebase();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    firebase
      .getAllQuestions()
      .then((res) => {
        setQuestions(res.docs);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong", { id: 4 });
      });
  }, [refresh]);
  return (
    <>
      {loading ? (
        <div className="w-10 mx-auto mt-10">
          <span className="loading loading-spinner text-success"></span>
        </div>
      ) : questions.length > 0 ? (
        <div className="w-full max-w-[800px] mx-auto overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Question</th>
                <th>Question URL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {questions.map((question, i) => (
                <tr className="hover" key={question.id}>
                  <th>{i + 1}</th>
                  <td className="min-w-[250px]">{question.data().question}</td>
                  <td className=" text-xl">
                    <div>
                      <a
                        href={
                          question.data().questionUrl.substring(0, 4) === "http"
                            ? question.data().questionUrl
                            : `https://${question.data().questionUrl}`
                        }
                        target="_blank"
                        className="hover:text-[#1FB2A6]"
                      >
                        <FiLink />
                      </a>
                    </div>
                  </td>
                  <td className="flex items-center gap-4 text-xl">
                    <div className="md:tooltip md:tooltip-top" data-tip="Edit">
                      <button className="hover:text-[#1FB2A6]">
                        <FiEdit />
                      </button>
                    </div>
                    <div
                      className="md:tooltip md:tooltip-top"
                      data-tip="Delete"
                    >
                      <button className="hover:text-red-500">
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3 className="mt-10 text-2xl  text-slate-600 text-center">
          Currently Your Question list is empty. Please add at least one.
        </h3>
      )}
    </>
  );
};

export default QuestionsList;
