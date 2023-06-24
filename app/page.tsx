import { HiDocumentText } from "react-icons/hi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumSquare,
} from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import Link from "next/link";
import { US, GB, AE, IN, GH } from "country-flag-icons/react/3x2";

export default function Home() {
  return (
    <main className="container sm:mx-auto mx-3">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <h1 className="text-6xl text-palette-primary">Hi, I&apos;m</h1>
          <h1 className="text-7xl text-palette-primary">Gautham Dinesh</h1>
          <hr className="mt-5 border-palette-secondary"></hr>
          <h2 className="text-2xl mt-5 text-palette-primary-text">
            Software Engineer & Full Stack Developer
          </h2>

          <div className="mt-3 flex">
            <IN title="India" className="w-5 mx-2 rounded-sm drop-shadow-md" />
            <GH title="Ghana" className="w-5 mx-2 rounded-sm drop-shadow-md" />
            <AE
              title="United Arab Emirates"
              className="w-5 mx-2 rounded-sm drop-shadow-md"
            />
            <US
              title="United States"
              className="w-5 mx-2 rounded-sm drop-shadow-md"
            />
            <GB
              title="United Kingdom"
              className="w-5 mx-2 rounded-sm drop-shadow-md outline-green-400 outline-none"
            />
          </div>
          <div className="flex items-center">
            <button className="cta">
              <a
                href="mailto:gautham.dkl@gmail.com"
                className="text-2xl sm:text-xl text-white"
              >
                Let&apos;s Chat !
              </a>
            </button>
          </div>

          <div className="md:flex mt-5 links grid grid-cols-2">
            <Link href="/portfolio" className="flex items-center">
              <HiDocumentText></HiDocumentText>
              <p>Portfolio</p>
            </Link>
            <a
              href="https://www.linkedin.com/in/gauthamdk/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center"
            >
              <AiFillLinkedin></AiFillLinkedin>
              <p>LinkedIn</p>
            </a>
            <a
              href="https://github.com/gauthamdk"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center"
            >
              <AiFillGithub></AiFillGithub>
              <p>Github</p>
            </a>
            <a
              href="https://twitter.com/_gauthamdk"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center"
            >
              <AiOutlineTwitter></AiOutlineTwitter>
              <p>Twitter</p>
            </a>
            <a
              href="https://gauthamdk.medium.com"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center"
            >
              <AiFillMediumSquare></AiFillMediumSquare>
              <p>Medium</p>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~010ecc15d76da3f4d2"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center"
            >
              <SiUpwork></SiUpwork>
              <p>UpWork</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
