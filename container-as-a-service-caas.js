import Image from 'next/image';
import Link from 'next/link';

// Component imports
import Button from '../components/Button';
import Circle from '../components/Circle';
import HowItWorksContainersCard from '../components/HowItWorksContainersCard';
import VideoPlayer from '../components/VideoPlayer';
import FoundationSection from '../components/FeaturesContainers';
import { AuthCard } from '../components/AuthCard';

// icon & images imports
import SiteLogo from '../public/_public/img/siteNavLogo.svg';
import PricingIcon from '../public/_public/icons/pricing.svg';
import CloudIcon from '../public/_public/icons/cloud.svg';
import TargetIcon from '../public/_public/icons/target-arrow.svg';
import PigBank from '../public/_public/icons/piggy-bank.svg';
import PGIcon from '../public/_public/icons/postgresql.svg';
import RedisIcon from '../public/_public/icons/redis.svg';
import DockerIcon from '../public/_public/icons/docker.svg';
import BuildDeploy from '../public/_public/img/build-deploy.svg';
import BringCode from '../public/_public/img/bring-code.svg';
import Scale from '../public/_public/img/scale.svg';
import NodeIcon from '../public/_public/icons/node.svg';
import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('../components/Modal').then(module => module.Modal), {
  ssr: false,
});

const Home = ({ signupUser, socialAuth }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-secondary">
      <Head>
        <title>
          Bring Your Code, Leave DevOps To Us!
        </title>
        <meta
          name="description"
          content="With Back4App Containers you can deploy and scale your apps seamlessly on globally distributed containers"
        />
        <meta
          name="keywords"
          content="Container, container as a service, docker, docker as a service, application hosting"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="Back4App Inc" />
        <link rel="icon" href="/_public/favicon.png" />
       
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bring Your Code, Leave DevOps To Us!"
        />
        <meta
          property="og:description"
          content="With Back4App Containers you can deploy and scale your apps seamlessly on globally distributed containers"
        />
        <meta property="og:url" content="https://www.back4app.com" />
        <link rel="canonical" href="https://www.back4app.com" />
        <meta property="og:site_name" content="Back4app™" />
        <meta
          property="og:image"
          content="https://www.back4app.com/images/logo-social.png"
        />
        <meta property="fb:app_id" content="500748560091545" />
        <meta property="fb:admins" content="1105590154" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bring Your Code, Leave DevOps To Us!"
        />
        <meta
          name="twitter:description"
          content="With Back4App Containers you can deploy and scale your apps seamlessly on globally distributed containers"
        />
        <meta name="twitter:url" content="https://www.back4app.com" />
        <meta
          name="twitter:image:src"
          content="https://www.back4app.com/images/logo-social.png"
        />
        <meta name="twitter:site" content="@back4app" />
        <link rel="icon" type="image/x-icon" href="/_public/favicon.ico" />
      </Head>
      {open && (
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          content={
            <iframe
              width="620"
              height="445"
              src="https://www.youtube.com/embed/c-EjxZe0fFE?autoplay=1"
              title="Back4App"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          }
        />
      )}


      {/* Hero Section */}
      <section className="px-4 py-4 sm:pt-[4.25rem] lg:pl-[4rem] desktop:pl-[9.875rem] sm:pb-[4.125rem] relative z-0 overflow-hidden bg-primary-dark">
        <div className="hidden sm:block absolute w-full h-full top-[10.6875rem] bottom-0 right-0 -z-10">
          <div className="opacity-30 h-full w-full bg-repeat bg-[url('/_public/img/HeaderBG.png')] bg-contain"></div>
        </div>
        <div className="grid lg:grid-cols-2 mt-5 sm:mt-0 sm:p-0 max-w-7xl mx-auto z-[1]">
          {/* Content */}
          <div className="relative mx-auto z-10 w-full">
            <Circle
              classNames="w-[42.5625rem] h-[34.375rem] -left-[6.6rem] -top-[8rem] hidden sm:block -z-[1]"
              fromColor="#518fc726"
              toColor="#88b7e000"
            />
            <div className="flex text-center lg:text-left flex-col mx-auto sm:px-0 mb-0 z-[2] sm:mx-[3rem] lg:mx-0 sm:mb-[2rem] lg:mb-0">
            <span className="header-text-shadow flex items-center leading-130 font-secondary mb-[14px] mx-auto sm:m-0 sm:mb-3">
              <SiteLogo className="w-[9rem] h-[5rem]" />
                &nbsp;&nbsp;&nbsp;Containers
            </span>        
             <h1 className="header-text-shadow text-[1.625rem] md:text-[2.5rem] lg:text-[2.3rem] desktop:text-[2.8125rem] leading-130 font-primary font-bold mb-[14px] mx-auto sm:m-0 sm:mb-3">
              Bring Your Code,<br />Leave DevOps To Us!
              </h1>
              <div className="font-secondary text-lg leading-[180%] mt-2 sm:mt-0 md:text-[22px] sm:leading-140 sm:px-0">
              With Back4App Containers you can deploy and scale your apps seamlessly on globally distributed containers
              </div>
              <div className="action mt-10 mx-auto sm:mx-0 ">
              </div>
            </div>
          </div>

          {/* Sign up form */}
          <AuthCard
            header={
              <div className="mb-4 sm:mb-8">
                <div className="hidden sm:block font-primary font-bold text-base text-center mb-[10px]">
                  Deploy your code in minutes for FREE!
                </div>
                <div className="font-secondary font-normal text-xsm text-center text-blue-site">
                  No credit card required
                </div>
              </div>
            }
            authLabel="Sign up with email"
            authIcW={'15'}
            authIcH={'15'}
            authAction={async (...args) => {
              return await signupUser(...args);
            }}
            socialAuth={async (...args) => {
              return await socialAuth(...args);
            }}
            gglLabel={'Sign up with Google'}
            ghubLabel={'Sign up with Github'}
            footer={
              <div className="text-base sm:text-xs font-secondary leading-140 text-center mt-5 text-light sm:px-2 opacity-80">
                By signing up you agree to our{' '}
                <Link href="https://www.back4app.com/terms-of-service.pdf">
                  <a
                    className="underline underline-offset-2 text-[#2EA44F]"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Terms of Service
                  </a>
                </Link>{' '}
                and{' '}
                <Link href="https://www.back4app.com/privacy.pdf">
                  <a
                    className="underline underline-offset-2 text-[#2EA44F]"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </a>
                </Link>
                .
              </div>
            }
          />

          {/* Stats */}
          <div className="px-4 w-full mx-auto my-8 sm:my-0 sm:mt-[3rem] md:mt-[3rem] desktop:mt-[5.8125rem] sm:p-0">
            {/* <div className="font-secondary text-lg leading-[180%] md:text-[22px] sm:leading-140 sm:px-0 text-center lg:text-left pb-2">
              Based on the Parse Platform.
            </div> */}
            <div className="flex flex-col sm:flex-row justify-evenly lg:justify-between desktop:justify-start sm:items-end space-y-10 sm:space-y-0">
              <div className="text-center relative z-0 overflow-visible desktop:mr-[4.5rem]">
                <div className="font-primary text-3xl sm:text-[1.728rem] sm:leading-140 font-semibold text-center md:mb-[0.725rem] z-10 ">
                  <span className="text-green-site sm:leading-140">+</span>
                  200
                </div>
                <div className="font-secondary text-[1.21rem] lg:text-[1rem] desktop:text-[1.21rem] leading-[1.69375rem] sm:ml-1">
                  Countries
                </div>
              </div>
              <div className="text-center relative overflow-visible desktop:mr-[5.7rem]">
                <div className="font-primary text-[1.728rem] sm:leading-140 font-semibold md:mb-[0.725rem] z-10">
                  <span className="text-green-site">+</span>
                  260,000
                </div>
                <div className="font-secondary text-[1.21rem] lg:text-[1rem] desktop:text-[1.21rem] leading-[1.69375rem]">
                  Developers
                </div>
              </div>
              <div className="text-center relative overflow-visible">
                <div className="font-primary text-[1.728rem] sm:leading-140 font-semibold md:mb-[0.725rem] z-10">
                  <span className="text-green-site">+</span>
                  380,000
                </div>
                <div className="font-secondary text-[1.21rem] lg:text-[1rem] desktop:text-[1.21rem] leading-[1.69375rem]">
                  Apps
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* linear gradient faded */}
        <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10 "></div>
      </section>


      {/* How it works */}
      <section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
        <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
          <div className="lg:max-w-3xl lg:mx-auto">
            <h1 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
              How it works
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch lg:flex-wrap items-center my-5 space-y-4 lg:space-y-0 lg:space-x-0 lg:my-20">
            <HowItWorksContainersCard
              title={<BringCode width="60px" height="56px" />}
              text="Bring your code"
              description="Easy repository connections! Just bring your code and we’ll take it from here. Connect to the GitHub repository you want to deploy."
            />
            <HowItWorksContainersCard
              title={<BuildDeploy width="60px" height="56px" />}
              text="Buid & Deploy"
              description="Deploy in minutes! We’ll build your project, and deploy it to the container without waiting for deployment slots or dealing with messy error messages. "
            />
            <HowItWorksContainersCard
              title={<Scale width="70px" height="56px" />}
              text="Scale"
              description="Easily scale your applications from your dashboard without downtime. On top of that, you'll have full control of your costs with our Predictable Pricing! "
            />
          </div>
          <div className="max-w-7xl mx-auto sm:py-0">
            <div className="max-w-5xl sm:mx-[3rem] lg:mx-auto mx-5 my-5 sm:my-20">
              <VideoPlayer src={'containers'} />
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-[4]">
            <Link href="/container-as-a-service-caas" passHref>
              <Button
                value="Deploy for FREE"
                type="primary"
                className="h-8 sm:h-9 px-[12px] py-[6px] sm:py-[8px] font-semibold text-sm sm:leading-140"
              />
            </Link>
          </div>
        </div>
        <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10 "></div>
      </section>

      {/* Foundation Section */}
      <FoundationSection />
      {/* {isDesktop ? <FoundationSection /> : null} */}

      {/* Benefits Section */}
      <section className="px-4 py-4 sm:pt-[4.25rem] lg:pl-[4rem] desktop:pl-[9.875rem] sm:pb-[4.125rem] relative z-0 overflow-hidden bg-primary-dark">
        <div className="grid md:grid-cols-2 desktop:space-x-[5rem] desktop:mx-auto relative sm:mx-[3rem] lg:mx-[5rem] sm:space-x-[2rem] lg:space-x-[3rem] desktop:max-w-layout sm:pl-1">
          {/* Left Content */}
          <div className="my-4 sm:my-0 mx-auto md:mx-0 md:max-w-sm lg:max-w-md desktop:max-w-[426px] pt-10">
            <h1 className="header-text-shadow font-primary text-2xl leading-130 sm:text-[2.1875rem] sm:leading-130 font-semibold text-center md:text-left mb-3 sm:mb-[30px] pt-20">
              Benefits
            </h1>
            <div className="font-secondary text-lg leading-180 text-center md:text-left sm:mx-0 md:text-lg md:leading-140 sm:mb-[2.8125rem]">
              Deploying and Scaling your apps has never been this quick, easy, and cost-efficient!
            </div>
            <div className="hidden md:block">
              <Link href="/container-as-a-service-caas" passHref>
                <Button
                  value="Get Started for FREE"
                  type="primary"
                  className="h-8 sm:h-9 px-[12px] py-[6px] sm:py-[8px] font-semibold text-sm sm:leading-140"
                />
              </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
                <div className="hidden lg:flex flex-col sm:space-y-4 sm:pr-5">
              <Link href="https://blog.back4app.com/what-are-containers-in-cloud-computing/">
                <a className="font-secondary text-green-site font-semibold text-sm cursor-pointer transition hover:underline hover:underline-offset-2">
                  What are Containers in Cloud Computing?
                </a>
              </Link>
              <Link href="https://blog.back4app.com/deploy-docker-container/">
                <a className="font-secondary text-green-site font-semibold text-sm cursor-pointer transition hover:underline hover:underline-offset-2">
                  How to deploy a Docker container? 
                </a>
              </Link>
              
            </div>
          </div>

          {/* Right Content */}
          <div className="my-4 md:my-0 space-y-[21px]">
            {/* Icon Cards */}
            <div className="flex md:flex-row justify-center items-center md:justify-start md:items-start space-x-1 md:space-x-8 flex-col border-b border-highlight-border/5 pb-6">
              <div className="">
                <CloudIcon width="50px" height="50px" color="#C1E2FF" />
              </div>
              <div className="text-center md:text-left flex flex-col space-y-2">
                <h4 className="font-primary font-semibold text-lg sm:leading-140">
                  Open Source
                </h4>
                <p className="md:block font-secondary md:text-sm">
                Back4App Containers harnesses the power of widely-recognized open-source technologies, creating an all-encompassing and robust development platform.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row justify-center items-center md:justify-start md:items-start space-x-1 md:space-x-8 flex-col border-b border-highlight-border/5 pb-6">
              <div className="">
                <PigBank width="50px" height="50px" color="#C1E2FF" />
              </div>
              <div className="text-center md:text-left flex flex-col space-y-2">
                <h4 className="font-primary font-semibold text-lg sm:leading-140">
                  Free Tier
                </h4>
                <p className="md:block font-secondary text-sm">
                  We offer a free plan to help dev teams get started.
                  No time limits, no ads, no forced add-ons, no forced plans, and no hassle!
                </p>
              </div>
            </div>
            <div className="flex md:flex-row justify-center items-center md:justify-start md:items-start space-x-1 md:space-x-8 flex-col border-b border-highlight-border/5 pb-6">
              <div className="">
                <TargetIcon width="50px" height="50px" color="#C1E2FF" />
              </div>
              <div className="text-center md:text-left flex flex-col space-y-2">
                <h4 className="font-primary font-semibold text-lg sm:leading-140">
                  Developer Focused
                </h4>
                <p className="md:block font-secondary text-sm">
                  Bridge the gap between development and production once and for all in a simple, easy and straightforward manner!
                  Focus on your core products, and leave DevOps to us.
                </p>
              </div>
            </div>

            <div className="flex md:flex-row justify-center items-center md:justify-start md:items-start space-x-1 md:space-x-8 flex-col pb-6">
              <div className="">
                <PricingIcon width="50px" height="50px" color="#C1E2FF" />
              </div>
              <div className="text-center md:text-left flex flex-col space-y-2">
                <h4 className="font-primary font-semibold text-lg sm:leading-140">
                  Simple & Predictable Pricing
                </h4>
                <p className="md:block font-secondary text-sm">
                  No more unexpected charges! Our plans are straightforward and easy to understand so you know exactly how much you{'’'}re going to spend with no surprises.
                  Pay as go, and scale up or down as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* under the hood Section */}
      <section className="px-6 py-4 sm:p-0 sm:pb-[3.3rem] relative border border-blue-site/5">
        <div className="max-w-[1030px] mx-auto sm:mt-[109px]">
          <div className="max-w-3xl mx-auto">
            <h1 className="header-text-shadow font-primary text-[1.375rem] sm:text-[35px] sm:leading-130 font-semibold text-center mb-4">
              Curious about what{'’'}s<br className="sm:hidden" /> under the
              hood?
            </h1>
            <div className="font-secondary text-sm sm:text-lg sm:leading-140 text-center mx-4 sm:mx-auto">
              Back4App Containers is a combination of open-source tools.
             The platform was built using enterprise-grade, open-source products like:
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:space-y-3 items-center justify-center my-8 mt-[78px] space-y-4 lg:space-y-0 lg:mx-[3rem] md:mx-[2rem] desktop:mx-0">
            <a
              href="https://github.com/docker"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border rounded-md border-blue-200/20 w-[190px] h-[9.0625rem] sm:h-44 sm:pt-2 flex justify-center flex-col items-center space-y-2 sm:space-y-[24px] hover:bg-primary-dark hover:cursor-pointer mx-2"
            >
              <DockerIcon width="50px" height="50px" />
              <p className="font-secondary text-lg sm:text-sm">Docker</p>
            </a>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border rounded-md border-blue-200/20 w-[190px] h-[9.0625rem] sm:h-44 sm:pt-2 flex justify-center flex-col items-center space-y-2 sm:space-y-[33px] hover:bg-primary-dark hover:cursor-pointer mx-2"
            >
              <NodeIcon width="36px" height="40px" />
              <p className="font-secondary text-lg sm:text-sm">NodeJS</p>
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border rounded-md border-blue-200/20 w-[190px] h-[9.0625rem] sm:h-44 sm:pt-2 flex justify-center flex-col items-center space-y-2 sm:space-y-[33px] hover:bg-primary-dark hover:cursor-pointer mx-2"
            >
              <PGIcon width="40px" height="40px" />
              <p className="font-secondary text-lg sm:text-sm">PostgreSQL</p>
            </a>
            <a
              href="https://redis.io/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="border rounded-md border-blue-200/20 w-[190px] h-[9.0625rem] sm:h-44 sm:pt-2 flex justify-center flex-col items-center space-y-2 sm:space-y-[33px] hover:bg-primary-dark hover:cursor-pointer mx-2"
            >
              <RedisIcon width="40px" height="40px" />
              <p className="font-secondary text-lg sm:text-sm">Redis</p>
            </a>
          </div>
        </div>
      </section>

      {/* Community support Section */}
      <section className="px-6 pt-4 pb-2 sm:py-16 sm:pt-[100px] sm:pb-[6.2rem] sm:p-0 relative bg-primary-dark">
        <div className="lg:max-w-[60rem] desktop:max-w-[64.375rem] mx-auto desktop:mx-auto py-4 sm:p-0">
          <div className="grid lg:grid-cols-3 lg:h-[26.875rem] sm:px-[3rem] lg:px-0">
            {/* Text Content */}
            <div className="lg:col-span-1 lg:flex lg:flex-col lg:justify-start lg:items-center lg:mx-auto w-full">
              <h1 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-130 font-semibold text-center lg:text-left mb-6 w-full">
                Join our Developer{'’'}s Community:
              </h1>
              <div className="font-secondary sm:text-lg leading-180 text-center lg:text-left sm:leading-140 sm:mx-0 w-full">
                Share your thoughts and ideas with developers from around the globe, get your questions answered, and master new skills!
              </div>
              <br/>
              <span className="text-2xl sm:text-[35px] sm:leading-130 font-semibold text-center lg:text-left mb-6 w-full ">
                <Link href="https://twitter.com/back4app" passHref>
                  <Button
                    value="Follow us on twitter"
                    type="secondary"
                    className="text-sm leading-140 font-semibold h-9 flex items-center"
                  />
                </Link>
              </span>
            </div>
            {/* Right Content */}
            <div className="lg:col-span-2 sm:h-full lg:ml-20 mt-[2rem] lg:mt-0">
              <div className="flex space-x-2 sm:space-x-5 my-2 sm:m-0 h-[106px] sm:h-[200px] w-full">
                <div className="w-1/2 h-full border relative rounded-sm sm:rounded-md border-blue-200/20 flex justify-center items-center hover:bg-primary-light transition-colors">
                <a
                    href="https://twitter.com/back4app"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="relative mx-10 sm:mx-16 w-40 h-20"
                  >
                    <Image
                      alt="Twitter"
                      src="/_public/img/twitter-bird.png"
                      layout="fill"
                      objectFit="contain"
                      className="relative h-[unset]"
                    />
                  </a>
                </div>
                <div className="w-1/2 h-full border relative rounded-sm sm:rounded-md border-blue-200/20 flex justify-center items-center hover:bg-primary-light transition-colors">
                <a
                    href="https://join.slack.com/t/back4appcommunity/shared_invite/zt-mul3jkwn-ny7E_6yLIocOmVUjR3mFHQ"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="relative mx-10 sm:mx-16 w-full h-full"
                  >
                    <Image
                      alt="slack"
                      src="/_public/icons/slack-full.svg"
                      layout="fill"
                      objectFit="contain"
                      className="relative h-[unset]"
                    />
                  </a>
                </div>
              </div>
              <div className="flex sm:space-x-4 space-x-2 my-2 sm:mt-4 h-[106px] sm:h-[200px]">
              <div className="w-1/2 h-full border relative rounded-sm sm:rounded-md border-blue-200/20 flex justify-center items-center hover:bg-primary-light transition-colors">
                  <a
                    href="https://www.youtube.com/c/Back4App"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="relative mx-10 sm:mx-16 w-full h-full"
                  >
                    <Image
                      alt="youtube"
                      src="/_public/icons/yt-full.svg"
                      layout="fill"
                      objectFit="contain"
                      className="relative h-[unset]"
                    />
                  </a>
                </div>
                <div className="w-1/2 h-full border relative rounded-sm sm:rounded-md border-blue-200/20 flex justify-center items-center hover:bg-primary-light transition-colors">
                <a
                    href="https://stackoverflow.com/questions/tagged/back4app"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="relative mx-10 sm:mx-16 w-full h-full"
                  >
                    <Image
                      alt="stackoverflow"
                      src="/_public/icons/stackoverflow-full.svg"
                      layout="fill"
                      objectFit="contain"
                      className="relative h-[unset]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10 "></div>
        </div>
      </section>

      {/* last Section */}
      <section className="relative sm:h-[547px] z-0 flex justify-center items-center bg-primary-dark">
        <div className="absolute w-full h-full hidden sm:block">
          <div className="opacity-30 h-full w-full bg-repeat bg-[url('/_public/img/HeaderBG.png')] bg-contain"></div>
        </div>
        <div className="absolute w-full bottom-0 left-0 -z-10 h-1/2 sm:hidden">
          <Image
            src="/_public/img/footerBg.png"
            alt="footer background icons"
            layout="fill"
            objectFit="scale-down"
            className="w-full h-full"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-8 sm:p-0 z-10">
          <div className="max-w-7xl mx-auto sm:mt-[35px]">
            <div className="max-w-3xl mx-auto">
              <h1 className="header-text-shadow font-primary text-2xl sm:text-[35px] leading-140 font-semibold text-center mb-1 sm:mb-4">
              Ready to ship software faster without worrying about DevOps?
              </h1>
              <div className="font-secondary text-base sm:text-[22px] leading-140 text-center sm:mx-auto ">
              Sign-up for FREE and join over 220,000 developers worldwide
                <br className="hidden sm:block" /> 
                 who use Back4app to build faster, focus on user experience, and
                 <br className="hidden sm:block" />{' '}
                 reduce costs!
              </div>
              <div className="flex justify-center mt-4 sm:mt-[50px]">
                <Link href="/signup" passHref>
                  <Button
                    value="Deploy for FREE"
                    type="primary"
                    className="h-8 sm:h-9 px-[12px] py-[6px] sm:py-[8px] font-semibold text-sm sm:leading-140"
                  />
                </Link>
                {/* <button className="h-8 sm:h-9 bg-green-site px-[12px] py-[6px] sm:py-[8px] font-semibold text-sm sm:leading-140 text-center cursor-pointer focus:outline-none outline-none rounded-sm">
                  Start building now!
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
