
import React from 'react';
import { EXPERIENCES, SKILLS, EDUCATION, IconMail, IconLink, IconPhone, IconDownload, EXPERTISE_LEVELS } from './constants';
import Card from './components/Card';
import SkillPill from './components/SkillPill';
import ExperienceBarGraph from './components/ExperienceBarGraph';

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <section className={`py-12 ${className}`}>
    <h2 className="text-2xl font-bold text-cyan-400 mb-8 tracking-wide uppercase">{title}</h2>
    {children}
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="py-12 md:py-20 flex flex-col-reverse md:flex-row items-start md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Brendan Cooney</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mt-2">Sales & Digital Marketing Professional</h2>
            <p className="mt-4 max-w-xl text-gray-400">
              With over 20 years of experience, I am a results-driven professional blending sales, digital marketing, and operations expertise. My career began in South Africa, where I founded and scaled a major digital signage network. Upon relocating to Ireland, I continued to excel, significantly boosting lead generation and online engagement for multiple companies through strategic digital marketing initiatives. Currently, I am expanding my operational and analytical skills in a high-precision manufacturing environment at Freudenberg. I am passionate about leveraging technology and data-driven insights to foster business growth and efficiency.
            </p>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <a href="mailto:advicast@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><IconMail className="w-6 h-6" /></a>
              <a href="tel:+353831304031" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><IconPhone className="w-6 h-6" /></a>
              <a href="https://brendancooney.bio.link/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"><IconLink className="w-6 h-6" /></a>
              <a 
                href="https://drive.google.com/file/d/1QRAi4Hp5S-_4eKtc-wpGA2QEqWhEC_IK/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-600 text-white font-bold py-2 px-5 rounded-md hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-0.5"
              >
                <IconDownload className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
           <div className="mb-8 md:mb-0 md:ml-10">
              <img src="https://res.cloudinary.com/dulvjkxha/image/upload/v1763206641/CV/BC_Profile_Toptal_q8ossa.jpg" alt="Brendan Cooney" className="rounded-full w-32 h-32 md:w-40 md:h-40 border-4 border-gray-700 shadow-lg"/>
           </div>
        </header>

        <main>
          {/* Experience Section */}
          <Section title="Work Experience">
            <div className="relative border-l-2 border-gray-700 pl-8 space-y-12">
               <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-1.5 top-1.5 ring-8 ring-gray-900"></div>
              {EXPERIENCES.map((exp, index) => (
                <div key={index} className="relative">
                   <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[37px] top-2 transform -translate-y-1/2"></div>
                  <Card>
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <p className="text-sm text-gray-400 whitespace-nowrap sm:text-right">{exp.period}</p>
                    </div>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
                      {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                    </ul>
                    {exp.skills && exp.skills.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => <SkillPill key={i} skill={skill} />)}
                        </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </Section>
          
          {/* Skills Section */}
          <Section title="Skills & Expertise">
            <Card>
                <div className="space-y-6">
                    {SKILLS.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <SkillPill key={skill} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
          </Section>

          {/* Education Section */}
          <Section title="Education">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, index) => (
                <Card key={index}>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <p className="text-cyan-400">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mt-1">{edu.period}</p>
                </Card>
              ))}
            </div>
          </Section>

          {/* Expertise Overview Section */}
          <Section title="Expertise Overview">
            <ExperienceBarGraph expertiseData={EXPERTISE_LEVELS} />
          </Section>

        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Brendan Cooney. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
