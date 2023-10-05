import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useFirebase } from "../context/Firebase";
import toast from "react-hot-toast";

const SignIn = () => {
  const firebase = useFirebase();
  const handleGoogleSignIn = () => {
    firebase
      .signInUserWithGoogle()
      .then((res) => {
        document.getElementById("my_modal_2").classList.remove("modal-open");
        toast.success("SignIn Successfully", {
          id: 1,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleGithubSignIn = () => {
    firebase
      .signInUserWithGithub()
      .then((res) => {
        document.getElementById("my_modal_2").classList.remove("modal-open");
        toast.success("SignIn Successfully", {
          id: 1,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box text-center text-white">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() =>
            document.getElementById("my_modal_2").classList.remove("modal-open")
          }
        >
          ✕
        </button>
        <h3 className="text-lg md:text-xl font-semibold mb-3">
          Sign Up or Sign In
        </h3>
        <p className="text-sm text-slate-100 mb-7 tracking-wide">
          Let's First SignIn or SignUp using google or github to access or
          manage your list of questions that you want to upSolve
        </p>
        <button
          className="flex items-center justify-center gap-3 my-3 w-[80%] text-center  font-medium mx-auto py-[10px] rounded-full border border-[#1FB2A6] hover:bg-[#1FB2A6] hover:text-white transition-all ease-in-out"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="text-lg md:text-xl" /> Sign In with Google
        </button>
        <div className="divider">OR</div>
        <button
          className="flex items-center justify-center gap-3 my-3 w-[80%] text-center  font-medium mx-auto py-[10px] rounded-full border border-[#1FB2A6] hover:bg-[#1FB2A6] hover:text-white transition-all ease-in-out"
          onClick={handleGithubSignIn}
        >
          <BsGithub className="text-lg md:text-xl" /> Sign In with GitHub
        </button>
      </div>
    </dialog>
  );
};

export default SignIn;
