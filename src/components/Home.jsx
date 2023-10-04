import { MdAddCircleOutline } from "react-icons/md";
import Welcome from "./Welcome";
import QuestionsList from "./QuestionsList";
import AddQuestion from "./AddQuestion";

const Home = ({ auth }) => {
  return (
    <div className="min-h-[80vh] container mx-auto px-4">
      {!auth ? (
        <Welcome />
      ) : (
        <>
          <div className="w-full max-w-[250px] mx-auto text-white my-6">
            <button
              className="flex items-center justify-center gap-3 my-3 w-[80%] text-center  font-medium mx-auto py-[10px] rounded-full border border-[#1FB2A6] hover:bg-[#1FB2A6] hover:text-white transition-all ease-in-out"
              onClick={() =>
                document
                  .getElementById("my_modal_3")
                  .classList.add("modal-open")
              }
            >
              <MdAddCircleOutline className="text-lg md:text-xl" /> Add Question
            </button>
          </div>
          <AddQuestion />
          <QuestionsList />
        </>
      )}
    </div>
  );
};

export default Home;
