import WELCOME_IMAGE from "../assets/welcome.svg";

const Welcome = () => {
  return (
    <div className="w-full max-w-md mx-auto my-7 text-center text-white">
      <div className="w-[200px] h-[200px] md:w-[290px] md:h-[290px] bg-white flex items-center justify-center mx-auto rounded-full mb-5">
        <img
          src={WELCOME_IMAGE}
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
          alt="Welcome image of UpSolve It"
        />
      </div>
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1FB2A6] mb-2">
        Let's Up<span className="text-white">Solve</span> It
      </h1>
      <p className="text-slate-100 tracking-wide mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a,
        quam similique suscipit, quos dignissimos vel sequi, officia vitae
        soluta iste tenetur aliquam velit minus illum? Veniam nihil quis animi?
      </p>
      <button
        className="btn btn-accent"
        onClick={() =>
          document.getElementById("my_modal_2").classList.add("modal-open")
        }
      >
        Get Started
      </button>
    </div>
  );
};

export default Welcome;
