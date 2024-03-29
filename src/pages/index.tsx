import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";
import checklist from "../assets/checklist.svg";
import resume from "../assets/resume.svg";
import work from "../assets/work.svg";
import gucci from "../assets/gucci.svg";
import pin from "../assets/pin.svg";
import design from "../assets/design.svg";
import business from "../assets/business.svg";
import dev from "../assets/dev.svg";
import communication from "../assets/comminication.svg";
import pattern from "../assets/pattern.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <header className="container mx-auto mt-6 flex items-center justify-between px-5">
        <Logo />
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link href="/">
                <a className="text-sm font-medium text-gray-700 hover:text-violet-500">
                  Find Jobs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm font-medium text-gray-700 hover:text-violet-500">
                  Recent Posts
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-sm font-medium text-gray-700 hover:text-violet-500">
                  Company
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-6">
          <button className="text-sm font-semibold">Login</button>
          <button className="h-14 rounded-full bg-violet-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-violet-500">
            Create Account
          </button>
        </div>
      </header>
      <main>
        <section className="container mx-auto mt-16 px-5 text-center">
          <h1 className="mb-6 text-7xl font-bold leading-tight text-neutral-900">
            The home of your
            <br /> dream job
          </h1>
          <p className="text-lg text-gray-600">
            You do not have the right to remain silent… let us know <br /> what
            it takes to challenge you
          </p>
        </section>
        <section className="container mx-auto mt-16 px-5">
          <p className="mb-2 text-center font-semibold uppercase tracking-[.17em] text-teal-600">
            How it works
          </p>
          <div className="mb-6 text-center text-5xl font-bold leading-tight text-neutral-800">
            Simple steps to get <br />
            your next job
          </div>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <li className="rounded-2xl border border-gray-200 bg-white px-10 py-11 text-center transition hover:border-transparent hover:drop-shadow-2xl">
              <Image src={checklist} width={80} height={80} alt="" />
              <h4 className="mt-14 mb-3.5 text-xl font-semibold">
                Register Your Account
              </h4>
              <p className="text-gray-500">
                Capitalize on low hanging fruit to identify added Override the
                digital.
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 bg-white px-10 py-11 text-center transition hover:border-transparent hover:drop-shadow-2xl">
              <Image src={resume} width={80} height={80} alt="" />
              <h4 className="mt-14 mb-3.5 text-xl font-semibold">
                Upadate Resume
              </h4>
              <p className="text-gray-500">
                Capitalize on low hanging fruit to identify added Override the
                digital.
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 bg-white px-10 py-11 text-center transition hover:border-transparent hover:drop-shadow-2xl">
              <Image src={work} width={80} height={80} alt="" />
              <h4 className="mt-14 mb-3.5 text-xl font-semibold">
                Apply for News Jobs
              </h4>
              <p className="text-gray-500">
                Capitalize on low hanging fruit to identify added Override the
                digital.
              </p>
            </li>
          </ul>
        </section>
        <section className="mt-16 bg-zinc-100 py-28">
          <div className="container mx-auto  px-5">
            <p className="mb-2 font-semibold uppercase tracking-[.17em] text-purple-600">
              Jobs near me
            </p>
            <div className="mb-6 text-5xl font-bold leading-tight text-neutral-800">
              Featured Jobs
            </div>
            <p className="text-gray-500">Employee and Employment Company.</p>
            <ul className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
              <li className="rounded-2xl bg-white p-8">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white drop-shadow-sm">
                    <Image src={gucci} alt="gucci" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-1.5 text-lg font-semibold leading-none">
                      Gucci
                    </p>
                    <span className="text-xs leading-none text-slate-500">
                      5 days ago
                    </span>
                  </div>
                </div>
                <h3 className="my-11 text-2xl font-semibold">
                  Senior UX/UI Developer with strong Designer skills
                </h3>
                <div className="space-x-4 md:space-y-2.5 md:space-x-0 lg:space-x-4">
                  <div className="inline-flex items-center space-x-1.5 rounded bg-orange-100 py-2 px-3 text-xs font-medium text-orange-600">
                    <Image src={pin} alt="" />
                    <span>Oslo, Norway</span>
                  </div>
                  <span className="inline-flex rounded bg-slate-100 py-2 px-3  text-xs text-slate-500">
                    Part-Time
                  </span>
                </div>
              </li>
              <li className="rounded-2xl bg-white p-8">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white drop-shadow-sm">
                    <Image src={gucci} alt="gucci" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-1.5 text-lg font-semibold leading-none">
                      Gucci
                    </p>
                    <span className="text-xs leading-none text-slate-500">
                      5 days ago
                    </span>
                  </div>
                </div>
                <h3 className="my-11 text-2xl font-semibold">
                  Senior UX/UI Developer with strong Designer skills
                </h3>
                <div className="space-x-4 md:space-y-2.5 md:space-x-0 lg:space-x-4">
                  <div className="inline-flex items-center space-x-1.5 rounded bg-orange-100 py-2 px-3 text-xs font-medium text-orange-600">
                    <Image src={pin} alt="" />
                    <span>Oslo, Norway</span>
                  </div>
                  <span className="inline-flex rounded bg-slate-100 py-2 px-3  text-xs text-slate-500">
                    Part-Time
                  </span>
                </div>
              </li>
              <li className="rounded-2xl bg-white p-8">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white drop-shadow-sm">
                    <Image src={gucci} alt="gucci" />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-1.5 text-lg font-semibold leading-none">
                      Gucci
                    </p>
                    <span className="text-xs leading-none text-slate-500">
                      5 days ago
                    </span>
                  </div>
                </div>
                <h3 className="my-11 text-2xl font-semibold">
                  Senior UX/UI Developer with strong Designer skills
                </h3>
                <div className="space-x-4 md:space-y-2.5 md:space-x-0 lg:space-x-4">
                  <div className="inline-flex items-center space-x-1.5 rounded bg-orange-100 py-2 px-3 text-xs font-medium text-orange-600">
                    <Image src={pin} alt="" />
                    <span>Oslo, Norway</span>
                  </div>
                  <span className="inline-flex rounded bg-slate-100 px-3 py-2 text-xs text-slate-500">
                    Part-Time
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-20 text-center">
              <button className="h-14 rounded-full bg-violet-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-violet-500">
                See all
              </button>
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-16 px-5">
          <div className="text-center">
            <p className="mb-2 font-semibold uppercase tracking-[.17em] text-purple-600">
              99+ jobs category
            </p>
            <div className="mb-6 text-5xl font-bold leading-tight text-neutral-800">
              Choose by category
            </div>
            <p className="text-gray-500">
              You do not have the right to remain silent… let us know <br />{" "}
              what it takes to challenge you
            </p>
          </div>
          <ul className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
            <li className="rounded-2xl rounded-lg border border-gray-200 bg-white p-8 text-center transition hover:cursor-pointer hover:drop-shadow-2xl">
              <Image src={design} alt="" />
              <h4 className="mt-8 mb-2 text-xl font-semibold">Design</h4>
              <p className="text-sm font-medium text-slate-500">310 Vacancy</p>
            </li>
            <li className="rounded-2xl rounded-lg border border-gray-200 bg-white p-8 text-center transition hover:cursor-pointer hover:drop-shadow-2xl">
              <Image src={business} alt="" />
              <h4 className="mt-8 mb-2 text-xl font-semibold">Design</h4>
              <p className="text-sm font-medium text-slate-500">310 Vacancy</p>
            </li>
            <li className="rounded-2xl rounded-lg border border-gray-200 bg-white p-8 text-center transition hover:cursor-pointer hover:drop-shadow-2xl">
              <Image src={dev} alt="" />
              <h4 className="mt-8 mb-2 text-xl font-semibold">Design</h4>
              <p className="text-sm font-medium text-slate-500">310 Vacancy</p>
            </li>
            <li className="rounded-2xl rounded-lg border border-gray-200 bg-white p-8 text-center transition hover:cursor-pointer hover:drop-shadow-2xl">
              <Image src={communication} alt="" />
              <h4 className="mt-8 mb-2 text-xl font-semibold">Design</h4>
              <p className="text-sm font-medium text-slate-500">310 Vacancy</p>
            </li>
          </ul>
        </section>
        <section className="container relative mx-auto mt-16 rounded-3xl bg-purple-600 bg-cover bg-no-repeat py-20 px-5">
          <Image
            className="opacity-80"
            src={pattern}
            layout="fill"
            objectFit="cover"
            alt=""
          />
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <p className="mb-2 font-semibold uppercase tracking-[.17em] text-purple-300">
              News letter
            </p>
            <div className="text-5xl font-bold leading-tight text-white">
              Subscribe Newsletter
            </div>
            <div className="w-lg sm: mt-12 flex w-3/4 max-w-lg items-stretch justify-between rounded-full bg-white p-1 md:w-2/4 lg:w-2/5">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full bg-transparent px-8 outline-0"
              />
              <button className="h-16 rounded-full bg-amber-400 px-7 text-sm font-semibold text-white transition-colors hover:bg-amber-300">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto mt-40 grid grid-cols-4 gap-10 px-5 pb-20">
        <div>
          <Logo />
        </div>
        <div>
          <span className="text-xl font-semibold">Support</span>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  How it Works
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  Features
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-xl font-semibold">Links</span>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  FAQ
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  How it Works
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  Features
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="font-medium text-gray-700 hover:text-violet-500">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-xl font-semibold">Get in touch</span>
          <div className="mt-6 space-y-3 font-medium text-gray-600">
            <p>123 456 7789 10</p>
            <p>007 popie, New City, USA</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
