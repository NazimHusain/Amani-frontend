import React from "react";

// ==================Design================
import figma from '../assets/icon/Tech-icon/Design/figma.svg';
import canva from '../assets/icon/Tech-icon/Design/canva.svg';
import framer from '../assets/icon/Tech-icon/Design/framer.svg';
import illustrator from '../assets/icon/Tech-icon/Design/adobe-illustrator.svg';
import photoshop from '../assets/icon/Tech-icon/Design/photoshop.svg';
import adobeXD from '../assets/icon/Tech-icon/Design/adobe-xd.svg';
import sketch from '../assets/icon/Tech-icon/Design/sketch.png';
import readymag from '../assets/icon/Tech-icon/Design/figma.svg';
import webflow from '../assets/icon/Tech-icon/Design/webflow.png';


// ================Backend================
import django from '../assets/icon/Tech-icon/Backend/django.png';
import python from '../assets/icon/Tech-icon/Backend/python.png';
import node from '../assets/icon/Tech-icon/Backend/node.png';
import flask from '../assets/icon/Tech-icon/Backend/flask.png';
import fastApi from '../assets/icon/Tech-icon/Backend/fastapi.png';

// ================Cloud================
import googlecloud from '../assets/icon/Tech-icon/cloud/google-cloud.png';
import aws from '../assets/icon/Tech-icon/cloud/aws.png';
import azure from '../assets/icon/Tech-icon/cloud/azure.png';

// =================Cross Platform================
import flutter from '../assets/icon/Tech-icon/CrossPlatform/flutter.png';
import reactnative from '../assets/icon/Tech-icon/CrossPlatform/react-native.png';

// =================DataBases================
import mongo from '../assets/icon/Tech-icon/Databases/mongo.png';
import mysql from '../assets/icon/Tech-icon/Databases/mysql.png';
import oracle from '../assets/icon/Tech-icon/Databases/oracle.png';
import postgres from '../assets/icon/Tech-icon/Databases/postgres.png';


// =================Frontend================
import angular from '../assets/icon/Tech-icon/Frontend/angular.png';
import bootstrap from '../assets/icon/Tech-icon/Frontend/bootstrap.png';
import css from '../assets/icon/Tech-icon/Frontend/css3.png';
import html from '../assets/icon/Tech-icon/Frontend/html5.png';
import javascript from '../assets/icon/Tech-icon/Frontend/javascript.png';
import react from '../assets/icon/Tech-icon/Frontend/react.png';
import vue from '../assets/icon/Tech-icon/Frontend/vue.png';
import next from '../assets/icon/Tech-icon/Frontend/next.png';


// =================Native================
import android from '../assets/icon/Tech-icon/Native/android.png';
// import ios from '../assets/icon/Tech-icon/Native/ios.png';
import kotlin from '../assets/icon/Tech-icon/Native/kotlin.png';
import swift from '../assets/icon/Tech-icon/Native/swift.png';


// =================Q/A================
import chrome from '../assets/icon/Tech-icon/QA/chrome.png';
import selenium from '../assets/icon/Tech-icon/QA/selenium.png';
import postman from '../assets/icon/Tech-icon/QA/postman.png';

// =================Agile================
import jira from '../assets/icon/Tech-icon/Agile/jira.png';
import trello from '../assets/icon/Tech-icon/Agile/trello.png';
import Gsuite from '../assets/icon/Tech-icon/Agile/google.png';

// =================Ecomerce===============
import oscar from '../assets/icon/Tech-icon/E-commerce/oscar.png';
import saleor from '../assets/icon/Tech-icon/E-commerce/saleor.png';






// Categories with tools
const expertiseCategories = [
  {
    title: "Design",
    tools: [
      { icon: figma, name: "Figma" },
      { icon: photoshop, name: "Photoshop" },
      { icon: illustrator, name: "Illustrator" },
      { icon: adobeXD, name: "Adobe XD" },
      { icon: sketch, name: "Sketch" },
      { icon: webflow, name: "Webflow" },
      { icon: canva, name: "Canva" },
      { icon: framer, name: "Framer" },
    ],
  },

  {
    title: "Frontend",
    tools: [
      { icon: angular, name: "Angular" },
      { icon: bootstrap, name: "Bootstrap" },
      { icon: css, name: "CSS3" },
      { icon: html, name: "HTML 5" },
      { icon: javascript, name: "Java Script" },
      { icon: react, name: "React" },
      { icon: vue, name: "Vue" },
      { icon: next, name: "Next Js" },
    ],
  },
  {
    title: "Native",
    tools: [
      { icon: android, name: "Android" },
      // { icon: ios, name: "IOS" },
      { icon: kotlin, name: "Kotlin" },
      { icon: swift, name: "Swift" },
    ],
  },

  {
    title: "Cross Platform",
    tools: [
      { icon: flutter, name: "Flutter" },
      { icon: reactnative, name: "React Native" },

    ],
  },
  {
    title: "Backend",
    tools: [
      { icon: python, name: "Python" },
      { icon: django, name: "Django" },
      { icon: node, name: "Node Js" },
      { icon: flask, name: "Flask" },
      { icon: fastApi, name: "FastAPI" },
    ],
  },

  {
    title: "Databases",
    tools: [
      { icon: mongo, name: "Mongo" },
      { icon: mysql, name: "Mysql" },
      { icon: oracle, name: "Oracle" },
      { icon: postgres, name: "Postgres" },
    ],
  },

  {
    title: "Cloud",
    tools: [
      { icon: googlecloud, name: "Google Cloud" },
      { icon: aws, name: "AWS" },
      { icon: azure, name: "Azure" },
    ],
  },


  {
    title: "Agile",
    tools: [
      { icon: jira, name: "Jira" },
      { icon: trello, name: "Tralleo" },
      { icon: Gsuite, name: "G Suite" },
    ],
  },

  {
    title: "E-commerce",
    tools: [
      { icon: oscar, name: "Django Oscar" },
      { icon: saleor, name: "Saleor" },

    ],
  },


  //  {
  //   title: "AI/ML",
  //   tools: [
  //     { icon: figma, name: "Figma" },
  //     { icon: photoshop, name: "Photoshop" },
  //     { icon: illustrator, name: "Illustrator" },
  //     { icon: adobeXD, name: "Adobe XD" },
  //     { icon: sketch, name: "Sketch" },
  //     { icon: readymag, name: "Readymag" },
  //     // { icon: webflow, name: "Webflow" },
  //     { icon: canva, name: "Canva" },
  //     { icon: framer, name: "Framer" },
  //   ],
  // },



  //  {
  //   title: "Automation",
  //   tools: [
  //     { icon: figma, name: "Figma" },
  //     { icon: photoshop, name: "Photoshop" },
  //     { icon: illustrator, name: "Illustrator" },
  //     { icon: adobeXD, name: "Adobe XD" },
  //     { icon: sketch, name: "Sketch" },
  //     { icon: readymag, name: "Readymag" },
  //     { icon: webflow, name: "Webflow" },
  //     { icon: canva, name: "Canva" },
  //     { icon: framer, name: "Framer" },
  //   ],
  // },

  {
    title: "Q/A",
    tools: [
      { icon: chrome, name: "Chrome" },
      { icon: selenium, name: "Selenium" },
      { icon: postman, name: "PostMan" },
    ],
  },
];

const ExpertiseSection = () => {
  return (
    <section className="relative w-full bg-gray-900 text-white flex">
      {/* Left Sidebar */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-1/3 flex flex-col justify-center p-8 bg-gradient-to-r from-gray-950 to-gray-900">
        <h2 className="text-5xl font-bold text-orange-500 mb-4 border-b-2 border-orange-500 pb-2">
          Our Expertise
        </h2>
        <p className="text-xl text-gray-300">
          Modern technologies for stable, scalable, and secure solutions.
        </p>
      </div>


      {/* Right Content */}
      <div className="flex-1 p-4 flex flex-col gap-4">
        {expertiseCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-4 shadow-md"
          >
            {/* Category Title */}
            <div className="inline-block bg-gray-700 font-semibold text-base px-3 py-1 rounded-full mb-2">
              {category.title}
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-12 h-12 mb-1 object-contain"
                  />
                  <span className="text-sm text-gray-200 font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ExpertiseSection;
