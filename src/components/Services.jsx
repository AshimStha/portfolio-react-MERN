import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

export default function Services() {
  return (
    <>
      <section className="text-center my-20 py-15">
        <h1 className="text-4xl font-medium mb-10 py-2 text-teal-600 md:text-5xl">Services</h1>

        {/**
         * lg:flex gap-10 - When the screen size is large display:flex with gap.
         */}
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-1 flex-col items-center">
            <img src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design principles.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-1 flex-col items-center">
            <img src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-teal-600">Web Tools I Use</h4>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Laravel</p>
            <p className="text-gray-800 py-1">C#</p>
            <p className="text-gray-800 py-1">Wordpress</p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-1 flex-col items-center">
            <img src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Collab Tools I Use</h4>
            <p className="text-gray-800 py-1">Jira</p>
            <p className="text-gray-800 py-1">Slack</p>
          </div>
        </div>
      </section>
    </>
  );
}
