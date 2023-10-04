import { useState } from "react";
import { FiEdit, FiLink } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const QuestionsList = () => {
  const [questions, setQuestions] = useState([
    { question: "Median of Two Sorted Arrays", questionUrl: "hello" },
    { question: "Median of LinkedList", questionUrl: "welcome" },
  ]);
  return (
    <>
      {questions.length > 0 ? (
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
                <tr className="hover">
                  <th>{i + 1}</th>
                  <td className="min-w-[250px]">{question.question}</td>
                  <td className=" text-xl">
                    <div>
                      <a
                        href={question.questionUrl}
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
