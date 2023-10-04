import { MdLogout, MdLogin } from "react-icons/md";
import { useFirebase } from "../context/Firebase";
import toast from "react-hot-toast";

const Navbar = ({ auth }) => {
  const firebase = useFirebase();
  const handleLogout = () => {
    firebase
      .logoutUser()
      .then(() => toast.success("Logout Successfully", { id: 2 }))
      .catch((err) => {
        console.log(err.message);
        toast.error("Something Went Wrong! while logout");
      });
  };
  return (
    <nav className=" bg-base-300 py-4 text-white  mb-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg lg:text-2xl font-semibold">
            Up<span className=" text-[#1FB2A6]">Solve</span> It
          </h3>
          <p className="text-[10px] text-slate-100 md:text-sm">
            List of questions that you want to solve again in future.
          </p>
        </div>
        {auth ? (
          <div className="md:tooltip md:tooltip-bottom" data-tip="Logout">
            <button
              className="w-11 h-11 bg-slate-700 hover:bg-slate-800 rounded-full flex items-center justify-center text-2xl text-[#1FB2A6]"
              onClick={handleLogout}
            >
              <MdLogout />
            </button>
          </div>
        ) : (
          <div className="md:tooltip md:tooltip-bottom" data-tip="Sign In">
            <button
              className="w-11 h-11 bg-slate-700 hover:bg-slate-800 rounded-full flex items-center justify-center text-2xl text-[#1FB2A6]"
              onClick={() =>
                document
                  .getElementById("my_modal_2")
                  .classList.add("modal-open")
              }
            >
              <MdLogin />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
