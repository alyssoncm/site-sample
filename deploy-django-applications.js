import Image from 'next/image';
import Link from 'next/link';

// Component imports
import Button from '../components/Button';
import Circle from '../components/Circle';
import HowItWorksContainersCard from '../components/HowItWorksContainersCard';
import VideoPlayer from '../components/VideoPlayer';
import Tag from '../components/Tags';
import FoundationSection from '../components/FeaturesContainers';
import { AuthCard } from '../components/AuthCard';
import DemoAppCard from '../components/DemoAppCard';

// icon & images imports
import QuestionIcon from '../public/_public/icons/question-circle.svg';
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
import GhubIcon from '../public/_public/icons/github.svg';

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
             Deploy, Run and Scale<br />Django applications globally.
              </h1>
              <div className="font-secondary text-lg leading-[180%] mt-2 sm:mt-0 md:text-[22px] sm:leading-140 sm:px-0">
              From your code to production-ready Django applications in a few clicks.
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
                  Deploy your Django apps in minutes!
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



 {/* 3rd Section */}
 <section className="px-6 py-4 sm:px-8 sm:py-0 sm:pt-[70px] sm:pb-[68px] relative bg-primary-dark">
        <div className="max-w-7xl mx-auto mt-4 sm:my-0">
          <h2 className="header-text-shadow font-primary text-2xl sm:text-[2.81rem] sm:leading-130 text-center font-bold">
            What makes us <span className="text-blue-site">Unique?</span>
          </h2>
          <br></br>
          <div className="font-secondary text-sm sm:text-lg sm:leading-140 text-center mx-4 sm:mx-auto">
          Dealing with deployment slots, fighting messy error messages, and wrestling with scaling issues <br/> are the last things you want as a Django developer. Wouldn&apos;t it be great to have a solution that takes care of all this?
          </div>
          <div className="flex flex-wrap justify-center items-center space-y-3 sm:space-y-3 my-4 sm:my-[50px] px-4 sm:p-0">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Tag
                text="Zero Downtime deployments"
                icon={<QuestionIcon className="w-3 h-3" />}
                tooltipText="Our platform ensures that new containers are always ready to work when deploying a new commit or changing container configurations, guaranteeing zero downtime. Your Django applications will be up and running seamlessly, without any service interruptions during deployments."
              />
              <Tag
                text="Straightforward, easy-to-use, and low-learning curve"
                icon={<QuestionIcon className="w-3 h-3" />}
                tooltipText="Connect to the GitHub repository you want to deploy, and we'll handle the rest. We'll build your project and deploy it to the container swiftly and without any messy error messages. We even provide a way to easily scale your applications from your dashboard."
              />
              <Tag
                text="Real time monitoring"
                icon={<QuestionIcon className="w-3 h-3" />}
                tooltipText="Identify bottlenecks and optimize performance by easily monitoring crucial metrics such as CPU, RAM, Bandwidth, and more. Our real-time monitoring system helps you to maintain the health and performance of your Django applications."
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Tag
                text="Easy-to-understand and predictable pricing"
                icon={<QuestionIcon className="w-3 h-3" />}
                tooltipText="With our Predictable Pricing, you'll have full control of your costs. Our plans are straightforward and easy to understand so you know exactly how much you’re going to spend with no surprises. Pay as go, and scale up or down as needed"
              />
              <Tag
                text="Dedicated and Enterprise plans"
                icon={<QuestionIcon className="w-3 h-3" />}
                tooltipText="We are committed to providing the best service to all our users. Whether you're a small development team just getting started or a large enterprise with complex needs, we have dedicated plans to suit you. We offer a free plan to help dev teams get started, with no time limits, no ads, no forced add-ons, no forced plans, and no hassle. And for larger teams and enterprises, we have robust and flexible plans to meet your unique needs."
              />
            </div>
          </div>
          <div className="flex justify-center">
            <a href="https://www.back4app.com/docs-containers/run-a-django-container-app">
              <Button
                value="Deploy a Django App"
                type="secondary"
                className="h-9 leading-140 font-secondary font-semibold flex items-center"
              />
            </a>
            {/* <button className="border h-9 border-light sm:leading-140 rounded-sm cursor-pointer text-sm font-secondary font-semibold px-[12px] py-[8px] focus:outline-none bg-none flex items-center space-x-2">
              <span> Learn more</span>
            </button> */}
          </div>
        </div>
        <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10 "></div>
      </section>


      {/* How it works */}
      <section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
        <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
          <div className="lg:max-w-3xl lg:mx-auto">
            <h2 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
            How it works
            </h2>
            <br></br>
            <div className="font-secondary text-sm sm:text-lg sm:leading-140 text-center mx-4 sm:mx-auto">
          Back4App Containers offers an easy repository connection, build & deploy features, and easy scaling. Connect to your GitHub repository, let us build your project, and deploy it seamlessly​.
          </div>
          <br></br>
          
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch lg:flex-wrap items-center my-5 space-y-4 lg:space-y-0 lg:space-x-0 lg:my-20">
            <HowItWorksContainersCard
              title={<BringCode width="60px" height="56px" />}
              text="Bring your code"
              description="Easy repository connections! Just bring your Django repo and we’ll take it from here. Connect to the GitHub repository you want to deploy."
            />
            <HowItWorksContainersCard
              title={<BuildDeploy width="60px" height="56px" />}
              text="Buid & Deploy"
              description="Deploy in minutes! We’ll build your Django project, and deploy it to the container without waiting for deployment slots or dealing with messy error messages. "
            />
            <HowItWorksContainersCard
              title={<Scale width="70px" height="56px" />}
              text="Scale"
              description="Easily scale your Django applications from your dashboard without downtime. On top of that, you'll have full control of your costs with our Predictable Pricing! "
            />
          </div>
          <div className="max-w-7xl mx-auto sm:py-0">
            <div className="max-w-5xl sm:mx-[3rem] lg:mx-auto mx-5 my-5 sm:my-20">
              <VideoPlayer src={'containers'} />
            </div>
          </div>
          <div className="flex justify-center mt-4 sm:mt-[4]">
            <Link href="/deploy-django-applications" passHref>
              <Button
                value="Deploy Django Apps for FREE"
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
              Benefits for Django applications
            </h1>
            <div className="font-secondary text-lg leading-180 text-center md:text-left sm:mx-0 md:text-lg md:leading-140 sm:mb-[2.8125rem]">
              Deploying and Scaling your apps has never been this quick, easy, and cost-efficient!
            </div>
            <div className="hidden md:block">
              <Link href="/deploy-django-applications" passHref>
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
              <Link href="https://www.back4app.com/docs-containers/run-a-django-container-app">
                <a className="font-secondary text-green-site font-semibold text-sm cursor-pointer transition hover:underline hover:underline-offset-2">
                  Run a Django Container app
                </a>
              </Link>
              <Link href="https://blog.back4app.com/how-to-deploy-a-django-application/">
                <a className="font-secondary text-green-site font-semibold text-sm cursor-pointer transition hover:underline hover:underline-offset-2">
                  How to deploy a Django Application?
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
                  Free Tier for Django projects
                </h4>
                <p className="md:block font-secondary text-sm">
                We offer a free plan to help Django developers get started. Develop, deploy, and scale your Django applications with no hidden costs. Experience all the benefits without any time limits, no ads, and no hassle!
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
                No surprises, just simple and straightforward pricing, perfect for Django developers. Our plans align with your application growth, giving you the flexibility to scale up or down as required. Focus on your Django applications, knowing exactly what your costs will be.
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




 {/* Apps Section */}
 <section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
        <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
          <div className="max-w-3xl mx-auto">
            <h3 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
              Django project templates to start with
            </h3>
            <div className="font-secondary sm:text-lg sm:leading-140 text-center mx-4 ">
            Accelerate your Django development journey on Back4App Containers with our Dockerized templates. These templates streamline Dockerfile construction, enabling swift and efficient deployment. Jumpstart your projects and focus on what truly matters - building amazing applications.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch lg:flex-wrap items-center my-5 space-y-4 lg:space-y-0 lg:space-x-0 lg:my-20">
            <DemoAppCard
              title="Python Django template"
              description="Explore our ready-to-deploy Django sample project for Back4App Containers. Your ideal guide to effortless Django application deployment."
              actionLink="https://github.com/templates-back4app/containers-python-django"
            />
            <DemoAppCard
              title="Python Flask template"
              description="Dive into our prepared Flask project for Back4App Containers. Your perfect blueprint for smooth Flask application deployment."
              actionLink="https://github.com/templates-back4app/containers-python-flask-sample"
            />
            <DemoAppCard
              title="Elixir Phoenix template"
              description="Explore our ready-made Elixir Phoenix template for Back4App Containers. A quick-start guide for effortless deployment of your Elixir Phoenix applications."
              actionLink="https://github.com/templates-back4app/containers-elixir-phoenix"
            />
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="https://github.com/templates-back4app"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Button
                value={
                  <span className="flex items-center space-x-2">
                    <GhubIcon className="hover:text-green-site transition w-[0.9375rem] h-[0.9375rem]" />
                    <span> View more on GitHub</span>
                  </span>
                }
                type="iconBtn"
                className="h-9 font-semibold flex items-center px-3 py-2"
              />
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

       {/* Article Section */}
<section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
  <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
    <div className="max-w-3xl mx-auto">
      <h3 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
        What Is Django?
      </h3>
      <div className="font-secondary sm:text-lg sm:leading-140 text-justify mx-4">
        If you are a web developer, you must have heard about Django. As a high-level Python web framework, it empowers developers to build web applications that are both scalable and robust in a rapid and efficient manner. In this article, we&apos;ll cover everything you need to know about Django, from its features to its core advantages.
      </div>
    </div>
  </div>
  <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10"></div>
</section>

        
<section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
  <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
    <div className="max-w-3xl mx-auto">
      <h3 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
        Django Introduction and Features
      </h3>
      <div className="font-secondary sm:text-md sm:leading-140 text-justify mx-4">
        Written in Python and free to use, Django is an open-source web framework that adheres to the model-template-views architectural pattern. Since its inception in 2005, it has gained immense popularity and is now widely regarded as one of the most effective frameworks for constructing sophisticated and dynamic websites.
        <br /><br />
        Django allows developers to build web applications with minimal coding, enabling them to focus more on logic instead of boilerplate code. It comes with a lot of features such as authentication, routing, authorization, object-relational mapping (ORM), templates, and database migrations that make it easier for developers to create complex web applications.
      </div>
    </div>
  </div>
  <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10"></div>
</section>

<section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
  <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
    <div className="max-w-3xl mx-auto">
      <h3 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
        Core Features of Django
      </h3>
      <div className="font-secondary sm:text-md sm:leading-140 text-justify mx-4">
        The Django framework has several core features that make it stand out from its counterparts. These include:
        <ol className="list-decimal list-inside my-4">
          <li>Object-Relational Mapping (ORM): Django uses a powerful ORM that allows developers to interact with databases without writing SQL code.</li>
          <li>URL routing: Django follows an elegant URL routing approach that makes it easy to map URLs to views.</li>
          <li>Template system: Django&apos;s template system separates logic from presentation, making it easy to create dynamic and reusable templates.</li>
          <li>Admin interface: Django comes with an intuitive admin interface that enables developers to manage their application&apos;s data easily.</li>
          <li>Security: Django has several built-in security features that protect your web application against common attacks like cross-site scripting (XSS) and SQL injection.</li>
        </ol>
      </div>
    </div>
  </div>
  <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10"></div>
</section>

<section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
  <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
    <div className="max-w-3xl mx-auto">
      <h3 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
        Advantages of Django
      </h3>
      <div className="font-secondary sm:text-md sm:leading-140 text-justify mx-4">
        Django has several advantages that make it a preferred choice for web developers worldwide. Some of these advantages include:
        <ul className="list-disc list-inside my-4">
          <li>Rapid development: Django enables developers to build prototypes and minimum viable products (MVPs) quickly, thanks to its batteries-included philosophy.</li>
          <li>Scalability: Django&apos;s scalable architecture allows developers to handle high-traffic web applications efficiently.</li>
          <li>Reusability: Django&apos;s modular approach facilitates code reusability, making it easy to write maintainable and scalable applications.</li>
          <li>Community support: Django has a vibrant community that contributes to its development and provides support to developers worldwide.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10"></div>
</section>

<section className="px-6 py-4 sm:p-0 bg-primary-dark relative border-t border-blue-site/10">
  <div className="desktop:max-w-[64.375rem] mx-auto md:mx-[1rem] lg:mx-[3rem] desktop:mx-auto py-4 sm:pt-[100px] sm:pb-[70px]">
    <div className="max-w-3xl mx-auto">
      <h3 className="header-text-shadow font-primary text-2xl sm:text-[35px] sm:leading-140 font-semibold text-center mb-4">
        Why Use Back4app Containers?
      </h3>
      <div className="font-secondary sm:text-md sm:leading-140 text-justify mx-4">
        Back4app Containers is a highly scalable and robust hosting platform that offers developers a user-friendly way of deploying and scaling their web applications. Its intuitive user interface and documentation make deployment seamless and hassle-free, allowing you to deploy your Django application within minutes.
        <br /><br />
        Additionally, the platform offers horizontal and vertical scalability to ensure that your web application can handle high traffic without affecting performance. It provides a secure hosting environment with robust security features, protecting your application against common attacks such as cross-site scripting and SQL injection. Back4app Containers also guarantees high availability through multiple regions and automatic failover. With competitive pricing plans, it is an affordable option for startups and small businesses. Overall, Back4app Containers is a reliable hosting platform that meets the needs of Django developers looking to deploy and scale their web applications quickly and efficiently.
      </div>
    </div>
  </div>
  <div className="absolute w-full h-20 bottom-0 left-0 bg-gradient-to-t from-[#208aec]/20 via-transparent to-transparent bg-opacity-10"></div>
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
                <Link href="/deploy-django-applications" passHref>
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
