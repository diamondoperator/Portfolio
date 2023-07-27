// text found in hero component
export default function HeroText(): JSX.Element {
  return (
    <>
      <div>
        <p className="uppercase text-sm tracking-widest text-gray-600">
          Let&apos;s build web applications!
        </p>
      </div>

      <h1 className="py-4 text-gray-700">
        Hello, I&apos;m <span className="text-indigo-600">Bryant</span>
      </h1>
      <h1 className="py-4 text-gray-700">Creative Technologist</h1>
      <p className="py-4 text-gray-600 max-w-xs m-auto">
        Creating websites, web applications, and new media art with emerging technologies.
      </p>
    </>
  );
}
