import { HiDocumentText } from "react-icons/hi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumSquare,
} from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col">
          <p className="text-6xl text-palette-primary">Hi, I'm</p>
          <p className="text-7xl text-palette-primary">Gautham Dinesh</p>
          <hr className="mt-5 border-palette-secondary"></hr>
          <p className="text-2xl mt-5 text-palette-primary-text">
            Software Engineer & Full Stack Developer
          </p>

          <div className="flex items-center">
            <button className="cat">
              <a href="mailto:gautham.dkl@gmail.com">Let's Chat !</a>
            </button>
          </div>

          <div className="flex mt-5 links">
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
