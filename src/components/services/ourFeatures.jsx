import { motion } from "framer-motion";
import React from "react";
import Featureidea from '../../assets/icon/pages-img/featureIdea.png'

export default function ServiceFeaturesSection() {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-tr from-black via-[#23193E] to-black relative flex items-center">
      <div className="max-w-7xl mx-auto px-6 z-10">
        {/* Left Heading */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-purple-400 tracking-tight mb-2">
            FEATURES
          </h2>
          <div className="text-2xl font-light text-neutral-200 mb-2">
            OF OUR SERVICES
          </div>
        </div>
        {/* Features */}
        <div className="grid md:grid-cols-1 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">
                Comprehensive Discovery<br />
                and Consultation
              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
            We collaborate closely with you to identify high impact AI opportunities within your organization. By understanding your challenges and goals, we design tailored AI agents that deliver measurable, real world results.
            </div>
          </motion.div>


          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">
                Tailored Solution<br />
                Recommendations
              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
             Receive a clear and strategic AI roadmap aligned with your immediate priorities and long term vision. Our solutions are designed to scale as your business and technology needs evolve
            </div>
          </motion.div>


          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">
                Rapid Development and Validation<br />

              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
              Quickly prototype and interact with AI solutions before full deployment. This ensures alignment with your expectations and allows for refinement early in the process.
            </div>
          </motion.div>



          {/* Feature 4 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">
                Full-Stack Expertise<br />

              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
             From RAG implementations and system integrations to data ingestion and complete development, we manage every layer of your AI solution under one roof.
            </div>
          </motion.div>



          {/* Feature 5 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">
                Rigorous Testing and Assurance<br />

              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
             We apply advanced AI validation and testing protocols to ensure your agents perform reliably, securely, and efficiently from day one.
            </div>
          </motion.div>



          {/* Feature 6 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">
                Seamless Deployment and Runtime<br />

              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
              Transition smoothly from development to deployment within a scalable, managed runtime environment built for performance and growth.
            </div>
          </motion.div>


          {/* Feature 6 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">

                Empowering Your Team<br />

              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
             We provide comprehensive documentation, knowledge transfer, and training to ensure your team confidently leverages and manages your AI solutions.
            </div>
          </motion.div>




          {/* Feature 7 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">

                Continuous Optimization & Ongoing Support<br />

              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
              Our partnership continues well beyond deployment. Through regular reviews, performance monitoring, updates, and proactive improvements.
            </div>
          </motion.div>



          {/* Feature 7 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row rounded-2xl bg-neutral-900/90 shadow-xl"
          >
            <div className="md:w-1/3 p-8">
              <div className="text-white text-3xl font-bold mb-3">

                Tailored Insights Through Analytics<br />

              </div>
            </div>
            <div className="md:w-2/3 p-8 text-neutral-300 text-xl flex items-center">
              Gain clear visibility through custom reports and performance analytics. We deliver actionable insights that help you understand results, measure value, and optimize operations.
            </div>
          </motion.div>


          {/* Feature Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="
            overflow-hidden
 
            ">
              <img
                src={Featureidea}
                alt="AI Service Analytics"
                className="  max-h-40
                          md:max-h-40
                          w-auto
                          object-contain "
              />

              {/* subtle overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-purple-700/10" />
            </div>
          </motion.div>

        </div>
      </div>





      {/* Background Blur Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-0 top-0 w-2/3 h-2/3 rounded-full bg-purple-700 blur-3xl opacity-30" />
      </div>
    </section>
  );
}
