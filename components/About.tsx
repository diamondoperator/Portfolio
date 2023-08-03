import Image from "next/image";
import Link from "next/link";

// about text component
function AboutText(): JSX.Element {
  return (
    <div className="col-span-2 mx-4">
      <p className="uppercase text-xl tracking-widest text-indigo-600 text-center xl:text-start">
        About Me
      </p>
      <h2 className="py-4 text-center xl:text-start">Creative Technologist</h2>
      <p className="py-2 text-gray-600">
       I am a creative technologist with experience in physical computing, graphic design, front-end development, back-end development, video game testing, AR, and new media art. I have used tools like HTML5,CSS,Javascript, hyper3d, A-Frame, unity, the Adobe Creative Suite, and creative coding to create websites, web applications, digital art, and new media art installations.
      </p>
      <p className="py-2 text-gray-600">
      </p>
      <Link href="/#projects" scroll={false}>
        <p className="py-2 text-gray-600 underline cursor-pointer">
          Click to see my favorite projects.
        </p>
      </Link>
    </div>
  );
}

// about image container
function AboutImage(): JSX.Element {
  return (
    <div className=" bg-white w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image
        alt="/"
        blurDataURL="../public/assets/navbarLogo.png"
        className="rounded-xl"
        height={1080}
        placeholder="blur"
        src="https://source.unsplash.com/random/?web+developer"
        width={1920}
      />
    </div>
  );
}

// about component
export default function About(): JSX.Element {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-32">
      <div className="max-w-7xl m-auto md:grid grid-cols-3 gap-8">
        <AboutText />
        <AboutImage />
      </div>
    </div>
  );
}
