import { FaRegLaughWink } from "react-icons/fa";

function Homepage() {
  return (
    <main>
      <section className=" w-[500px] z-10  ">
        <div className="flex items-center gap-2">
          <h2
            data-text="Hi_There!"
            className="text-[75px] relative font-extrabold text-[#F9F9F9] uppercase textAnimation flex"
          >
            Hi_There!
          </h2>
        </div>
        <h3 className="text-4xl ">I'm Jhonnel, nice to meet you!</h3>
        <p className="mt-4">
          I work as a web developer and web designer, I have a passion in
          developing software and web applications that satisfies the customer
          needs. Frontend development is my specialty in which I create websites
          with attractive interfaces, and UX that is applied with simplicity.
        </p>
        <p>
          {" "}
          An enthusiastic young man that is a fast learner, good communicator,
          and an excellent team player.
        </p>
      </section>
    </main>
  );
}

export default Homepage;
