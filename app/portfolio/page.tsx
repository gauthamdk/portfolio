import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

export default function Portfolio() {
  return (
    <main className="container mx-auto my-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-5">
        <div className="mb-5 bullets">
          <p className="text-6xl text-palette-primary">Experiences</p>
          <hr className="border-palette-secondary"></hr>

          <div className="my-3 mx-1">
            <p className="text-palette-secondary text-xl">Summer Analyst</p>
            <div className="flex justify-between text-palette-primary-text my-1">
              <p className="text-lg">Goldman Sachs</p>
              <p>June - August 2022</p>
            </div>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Built <b>React</b> application to query and visualize loan data
                for analysis by the front office to make new deals and service
                loans
              </li>
              <li>
                Designed and tested API endpoints in <b>Java Dropwizard</b> to
                aggregate millions of data points with <b>SQL</b> queries
              </li>
              <li>
                Engineered CI/CD with <b>Docker</b>, <b>Kubernetes</b>, and{" "}
                <b>Terraform</b> to automate testing and deployment pipeline
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <p className="text-palette-secondary text-xl">Software Engineer</p>
            <div className="flex justify-between text-palette-primary-text my-1">
              <p className="text-lg">Keyper</p>
              <p>February - June 2022</p>
            </div>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Designed <b>Docusign</b> integration with <b>Airtable</b> to
                allow clients to sign documents using a <b>NodeJS</b> middleware
              </li>
              <li>
                Built <b>Onesignal</b> notification integrations with Airtable
                automations using <b>JavaScript</b> to deliver notifications on
                a timely basis
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <p className="text-palette-secondary text-xl">
              Software Engineer Intern
            </p>
            <div className="flex justify-between text-palette-primary-text my-1">
              <p className="text-lg">
                <a
                  href="https://www.labocine.com/habitat"
                  className="flex items-center"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Labocine{" "}
                  <FiExternalLink className="ml-2 text-palette-primary"></FiExternalLink>
                </a>
              </p>
              <p>June - August 2021</p>
            </div>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Created user profiles with the ability to feature playlists and
                hide profiles for over 20,000 users using <b>Handlebars</b>
              </li>
              <li>
                Utilized <b>NodeJS</b> to design platform to connect over 15,000
                users and film‑makers at the Imagine Science Film Festival
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <p className="text-palette-secondary text-xl">
              Machine Learning Assistant
            </p>
            <div className="flex justify-between text-palette-primary-text my-1">
              <p className="text-lg">Music and Sound Cultures (MaSC)</p>
              <p>March 2020 - April 2021</p>
            </div>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Developed a transcriber for mridangam music using <b>Python</b>{" "}
                and <b>Scipy</b> with 89% accuracy using support vector machines
              </li>
              <li>
                Segmented audio files based on energy threshold using{" "}
                <b>Librosa</b> to generate 1,300 clips for training and testing
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <p className="text-palette-secondary text-xl">
              Full Stack Web Developer
            </p>
            <div className="flex justify-between text-palette-primary-text my-1">
              <p className="text-lg">Bamian Auto Parts</p>
              <p>August 2020</p>
            </div>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Built a full‑stack web app using <b>NodeJS</b>, <b>ReactJS</b>,
                and <b>ExpressJS</b> to perform data analysis on weekly excel
                reports
              </li>
              <li>
                Automated sales report generation using <b>Python</b>, reducing
                time taken by 90%
              </li>
              <li>
                Modeled database using <b>MongoDB</b> to hold over 10,000
                company records with search and filtering capabilities
              </li>
              <li>
                Designed visualization platform with <b>ChartJS</b> to show
                monthly progress in sales
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <p className="text-palette-secondary text-xl">Research Intern</p>
            <div className="flex justify-between text-palette-primary-text my-1">
              <p className="text-lg">
                Modern Microprocessors Architecture (MoMa Lab)
              </p>
              <p>June - August 2020</p>
            </div>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Fine‑tuned machine learning tool to identify code/data sections
                in binary files using Python with 99% accuracy
              </li>
              <li>
                Generated data for the model using one‑hot encoding with{" "}
                <b>numpy</b> and sparse matrices to reduce memory consumption
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:ml-20">
          <p className="text-6xl text-palette-primary">Projects</p>
          <hr className="border-palette-secondary"></hr>

          <div className="my-3 mx-1 bullets">
            <p className="text-palette-secondary text-xl">
              Migration of Legacy application to AWS
            </p>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Migrated legacy Java application and <b>MySQL</b> database to{" "}
                <b>AWS</b> for scalability and elasticity
              </li>
              <li>
                Containerized legacy application and dependencies using{" "}
                <b>Docker</b>
                to run with <b>AWS Fargate</b>
              </li>
              <li>
                Transferred data from local MySQL database to <b>AWS RDS</b>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <a
              className="flex items-center"
              href="https://github.com/gauthamdk/GymBookingAutomation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-palette-secondary text-xl">Gym Booking Bot</p>
              <AiFillGithub className="text-palette-primary ml-2 text-lg"></AiFillGithub>
            </a>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Automated gym slot booking using <b>Selenium</b>, and{" "}
                <b>RaspberryPi</b>
              </li>
              <li>Bypassed MFA using touch macros on Android phone</li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <a
              className="flex items-center"
              href="https://github.com/gauthamdk/LeadAndLead"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-palette-secondary text-xl">LeadAndLead</p>
              <AiFillGithub className="text-palette-primary ml-2 text-lg"></AiFillGithub>
            </a>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Implemented a tool to fly a parrot minidrone by using hand
                gestures only
              </li>
              <li>
                Programmed interface using <b>Python</b> with the Drone SDK and
                Leap Motion SDK
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <a
              className="flex items-center"
              href="https://github.com/gauthamdk/Deadliner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-palette-secondary text-xl">Deadliner</p>
              <AiFillGithub className="text-palette-primary ml-2 text-lg"></AiFillGithub>
            </a>
            <ul className="list-disc text-palette-primary-text [&>*]:mt-1">
              <li>
                Scraped university’s classes website using <b>Selenium</b> with{" "}
                <b>Python</b>
                to get due dates for assignments
              </li>
              <li>
                Generated events automatically in <b>Google Calendar</b> with
                due date and set reminders with Google Calender API
              </li>
            </ul>
          </div>

          <p className="text-6xl text-palette-primary">Misc</p>
          <hr className="border-palette-secondary"></hr>

          <div className="my-3 mx-1">
            <p className="text-palette-secondary text-xl">
              HackAD (CS club) President [2022-2023]
            </p>
          </div>

          <hr></hr>

          <div className="my-3 mx-1">
            <a
              href="https://intro.nyuadim.com/author/gdk244/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center"
            >
              <p className="text-palette-secondary text-xl">
                Interactive Media
              </p>
              <FiExternalLink className="ml-2 text-palette-primary"></FiExternalLink>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-5">
        <p className="text-4xl text-palette-primary">
          Languages and Frameworks
        </p>
        <hr className="border-palette-secondary"></hr>

        <div className="langs mt-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 items-center justify-center">
          <div>
            <Image src="/c.png" width={40} height={0} alt="C logo"></Image>
          </div>
          <div>
            <Image src="/c++.png" width={40} height={50} alt="C++ logo"></Image>
          </div>
          <div>
            <Image
              src="/java.png"
              width={30}
              height={50}
              alt="Java logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/html.png"
              width={40}
              height={50}
              alt="HTML logo"
            ></Image>
          </div>
          <div>
            <Image src="/css.png" width={30} height={50} alt="CSS logo"></Image>
          </div>
          <div>
            <Image src="/js.png" width={40} height={50} alt="JS logo"></Image>
          </div>
          <div>
            <Image
              src="/p5js.png"
              width={40}
              height={50}
              alt="p5js logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/nextjs.png"
              width={50}
              height={50}
              alt="NextJS logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/nodejs.png"
              width={40}
              height={50}
              alt="NodeJS logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/reactjs.png"
              width={40}
              height={50}
              alt="ReactJS logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/ts.png"
              width={30}
              height={50}
              alt="Typescript logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/tailwind.png"
              width={40}
              height={50}
              alt="TailwindCSS logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/Python.png"
              width={40}
              height={50}
              alt="Python logo"
            ></Image>
          </div>
          <div>
            <Image src="/SQL.png" width={45} height={50} alt="SQL logo"></Image>
          </div>
          <div>
            <Image
              src="/bootstrap.png"
              width={35}
              height={50}
              alt="Bootstrap logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/ExpressJS.png"
              width={60}
              height={50}
              alt="ExpressJS logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/selenium.png"
              width={40}
              height={50}
              alt="Selenium logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/Flask.png"
              width={40}
              height={50}
              alt="Flask logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/matplotlib.png"
              width={40}
              height={50}
              alt="Matplotlib logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/arduino.png"
              width={40}
              height={50}
              alt="Arduino logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/firebase.png"
              width={60}
              height={50}
              alt="Firebase logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/handlebars.png"
              width={40}
              height={50}
              alt="Handlebars logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/mongodb.png"
              width={60}
              height={50}
              alt="MongoDB logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/tensorflow.png"
              width={60}
              height={50}
              alt="Tensorflow logo"
            ></Image>
          </div>
          <div>
            <Image src="/aws.png" width={40} height={50} alt="AWS logo"></Image>
          </div>
          <div>
            <Image
              src="/docker.webp"
              width={40}
              height={50}
              alt="Docker logo"
            ></Image>
          </div>
          <div>
            <Image src="/git.png" width={40} height={50} alt="Git logo"></Image>
          </div>
          <div>
            <Image
              src="/k8s.png"
              width={40}
              height={50}
              alt="Kubernetes logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/postman.png"
              width={40}
              height={50}
              alt="Postman logo"
            ></Image>
          </div>
          <div>
            <Image
              src="/terraform.png"
              width={50}
              height={50}
              alt="Terraform logo"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
