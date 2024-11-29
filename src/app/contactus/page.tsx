"use client";
import { BackgroundBeams } from "../../components/ui/background-beams";
import avatar from "../../../public/photo.jpg";

function page() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Connect with Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Hello 👋 wanna get in touch with me. I provide reliable communication
          solutions for your inquiries, feedback, or collaborations. Whether you
          are reaching out for Tech opportunity or just want to say hello, I
          have got you covered.
        </p>
        <div className="mt-4">
          <div className="flex items-start bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <img
              src="/photo.jpg"
              alt="Chao Wang"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="mb-2">
                <span className="font-semibold">Name: </span>
                <span className="text-blue-400"> Chao Wang</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:ChaoWang0097@protonmail.com"
                  className="text-blue-400 hover:underline"
                >
                  ChaoWang0097@protonmail.com
                </a>
              </div>
              <div>
                <span className="font-semibold">Address:</span>
                <div className="text-blue-400">
                  Overijsesteenweg 74
                  <br />
                  Tervuren
                  <br />
                  3080
                  <br />
                  Belgium
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default page;
