const App = () => {
  return (
    <>
      <header className="w-[100%] bg-black text-yellow-400 p-4">
        <div className="container mx-auto">
          <h1 className="text-center">ADD LESSON TASK</h1>
        </div>
      </header>
      <main className="bg-black">
        <section className="w-[100%] flex p-7 gap-[30px] ">
          <div className="container border-slate-500 border-[4px] mx-auto w-[50%] bg-black flex flex-col  p-4 gap-5">
            <input
              type="text"
              placeholder="lesson theme"
              className="p-4 rounded w-[500px]"
            />
            <textarea
              className="rounded w-[500px]"
              name="textarea"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="date"
              className="rounded p-4 inline relative w-[200px]"
            />
            <input
              type="time"
              className="rounded p-4 inline relative w-[200px] left-[250px] top-[-77px]"
            />
            <button className=" rounded text-yellow-400 p-4 bg-black-400 border-yellow-800 border-[4px] inline-block w-[270px]">
              SAQLASH
            </button>
          </div>
          <div className="wrapperTwo w-[50%] bg-white p-4 rounded">
            <h4>Lorem ipsum dolosdsdr sit.</h4>
            <p></p>
            <p className=""></p>
            <p></p>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
