import { MdAddCircleOutline, MdOutlineRefresh } from "react-icons/md";
import Welcome from "./Welcome";
import QuestionsList from "./QuestionsList";
import AddQuestion from "./AddQuestion";
import { useState } from "react";

const Home = ({ auth }) => {
  const [refresh, setRefresh] = useState(true);
  return (
    <div className="min-h-[80vh] container mx-auto px-4">
      {!auth ? (
        <Welcome />
      ) : (
        <>
          <div className="w-full max-w-[400px] mx-auto flex items-center justify-between text-white my-6">
            <button
              className="flex items-center justify-center gap-3 my-3 w-[45%] text-center  font-medium mx-auto py-[10px] rounded-full border border-[#1FB2A6] hover:bg-[#1FB2A6] hover:text-white transition-all ease-in-out"
              onClick={() =>
                document
                  .getElementById("my_modal_3")
                  .classList.add("modal-open")
              }
            >
              <MdAddCircleOutline className="text-lg md:text-xl" /> Add Question
            </button>
            <button
              className="flex items-center justify-center gap-3 my-3 w-[45%] text-center  font-medium mx-auto py-[10px] rounded-full border border-[#1FB2A6] hover:bg-[#1FB2A6] hover:text-white transition-all ease-in-out"
              onClick={() => setRefresh(!refresh)}
            >
              <MdOutlineRefresh className="text-lg md:text-xl" /> Refresh List
            </button>
          </div>
          <AddQuestion />
          <QuestionsList refresh={refresh} />
        </>
      )}
    </div>
  );
};

export default Home;
