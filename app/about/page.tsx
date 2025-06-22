"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Calendar } from "lucide-react";
import Link from "next/link";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Python",
  "Django",
  "FastAPI",
  "Flask",
  "Golang",
  "Rust",
  "Java",
  "Spring Boot",
  "Laravel",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "MySQL",
  "ElasticSearch, SQLite",
  "Firebase",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Github Actions",
  "Jenkins",
  "Terraform",
  "Ansible",
  "Vercel",
  "Netlify",
  "Sentry",
  "Prometheus",
  "Grafana",
  "Nginx",
  "Apache",
  "Bash",
  "Linux",
  "CI/CD",
  "React Native",
  "Flutter",
  "iOS",
  "Android",
  "Expo",
  "Git",
  "VSCode",
  "Figma",
  "Postman",
  "REST APIs",
  "WebSockets",
  "Claude",
  "OpenAI",
  "ChatGPT",
  "Jira",
  "Slack",
  "Confluence",
  "Agile Methodologies",
  "Monday",
  "GraphQL",
];

const experience = [
  {
    title: "Software/Systems Architect",
    company: "Mviyo Technologies",
    period: "May 2024 - Present",
    description:
      "As a Software Architect, I design the infrastructure for multiple products, define technology stacks, and architect APIs. While overseeing high-level technical decisions, I also actively contribute to development, building mobile apps with React Native, backend systems with Django, WebSocket services using Golang, and web clients with React and Next.js.",
    achievements: [
      "Designed scalable cost effective architecture for multiple products.",
      "Designed software development processes and workflows.",
      "Prepared technical documentation and architecture diagrams.",
      "Oversaw the implementation of new features and enhancements, ensuring alignment with product requirements.",
    ],
  },
  {
    title: "Software Developer(Contractual)",
    company: "Mviyo Technologies",
    period: "Nov 2023 - May 2024",
    description:
      "Developed React Native mobile clients for multiple user types, leveraging Redux for state management, and built a high-availability Django backend to support them. Designed and implemented automated CI/CD pipelines using GitHub Actions for deployment across AWS services. Created web-based administration and analytics interfaces with React.js and Redux, as well as end-user onboarding and reporting interfaces with Next.js. Additionally, developed a Golang-based geo-proximity tool using Gorilla, implementing triangulation algorithms and real-time data streaming via long polling and WebSockets.",
    achievements: [
      "Refactored and optimized existing codebase, improving code quality readability and performance.",
      "Oversaw the implementation of new features and enhancements, ensuring alignment with product requirements.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "MIBV Media",
    period: "2019 - 2020",
    description:
      "As a Technical Support Specialist, I tackle complex technical issues that require scripting or coding beyond available tools, enabling systems and websites to interact with APIs, deploying scripts, managing servers, and designing CI/CD pipelines with GitHub Actions. I also extend website functionality on Framer using React and TypeScript and automate workflows with Smartsuite and other internal company tools.",
    achievements: [
      "Designed backup methodologies for critical systems and data.",
      "Wrote and deployed automation scripts to streamline workflows and improve efficiency.",
      "Integrated third-party APIs to dynamic interfaces in Framer.",
    ],
  },
  {
    title: "Lead DevOps Engineer(Contractual)",
    company: "Great Sun Financial",
    period: "May 2024 - Nov 2024",
    description:
      "As a DevOps Engineer, I designed and implemented CI/CD pipelines using GitHub and GitHub Actions, built staging, testing, and production environments on DigitalOcean and AWS, and deployed applications with Docker. I also set up metrics reporting and error detection workflows and managed infrastructure security, including firewall configurations.",
    achievements: [
      "Designed and deployed development, test and canary environments.",
      "Implemented CI/CD pipelines to terraform provisioned AWS and Digital Ocean infrastructure.",
      "Prepared Neo4j production, test and canary environments.",
    ],
  },
  {
    title: "Senior Software Engineer(Contractual)",
    company: "Great Sun Financial",
    period: "March 2024 - May 2024",
    description:
      "Led the development team for Credex, a distributed fintech solution leveraging WhatsApp as its primary interface. Contributed to the system architecture, selected primary technology stacks, and actively developed backend services using Node.js, Typerscript, Neo4j, and Python Django.",
    achievements: [
      "Refactored existing serverless architecture to enhance operability and enhancibility eliminating cold starts and nearly doubling performance.",
      "Decoupled client side and server side logic improving load times.",
      "Moved stack to typescript to improve readability and introduce type saftey.",
      "Introduced express.js to improve routing and middleware management.",
      "Implemented a custom authentication and authorization system to enhance security and user management.",
      "Optimized GraphQL queries and mutations to reduce response times and improve data retrieval efficiency.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Healthify Medical Software",
    period: "Jan 2022 - Nov 2024",
    description:
      "Designed, developed, and deployed a large-scale distributed medical aid claims and contributions system, modernizing a Django monolith using the strangler pattern to reduce downtime by over 60% and implementing RabbitMQ for asynchronous microservices communication. Automated CI/CD pipelines for a high-availability Kubernetes cluster using GitHub Actions and Jenkins while managing monitoring and alerting with Grafana, Prometheus, and Alert Manager. Additionally, led and mentored junior developers and interns, overseeing task assignments, code reviews, and professional development.",
    achievements: [
      "Lead recruitment and onboarding of senior and junior developers.",
      "Designed and implemented a large-scale distributed medical aid claims and contributions system.",
      "Led the data migration process from legacy systems to the new architecture, ensuring data integrity and minimal downtime.",
      "Implemented a comprehensive testing strategy, including unit tests, integration tests, and end-to-end tests, to ensure system reliability and performance.",
      "Designed and implemented a high-availability Kubernetes cluster with automated CI/CD pipelines using GitHub Actions and Jenkins.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Intelli Africa Solutions",
    period: "Jan 2021 - Dec 2021",
    description:
      "Designed and built a high-availability, multitenant SMS and Email gateway in Python Django, as well as installable Python and node.js packages deployed to PyPI and NPM. Integrated with relevant Telecomms Service Providers and implemented automated and scheduled emailing and SMS solutions. Designed and implemented a deployment pipeline to remote VPS servers.",
    achievements: [
      "Designed and built a high-availability, multitenant SMS and Email gateway in Python Django.",
      "Developed installable Python and Node.js packages deployed to PyPI and NPM.",
      "Integrated with relevant Telecomms Service Providers and implemented automated and scheduled emailing and SMS solutions.",
      "Designed and implemented a deployment pipeline to remote VPS servers.",
      "Worked with external service providers to develop a payment gateway.",
      "Migrated the tumai application from Django to a React client side implementation.",
    ],
  },
  {
    title: "Software Engineer(Contractual)",
    company: "Dryback Technology",
    period: "Jan 2021 - Dec 2021",
    description:
      "Designed, developed, and deployed the Dabane Trust education system for local farmers, using Django for the backend and React.js for the client. The system sends SMS notifications of new information, and to accommodate high data charges and low internet access in rural Zimbabwe, I also designed, developed, and deployed a text-based, menu-driven WhatsApp chatbot.",
    achievements: ["I did a lotttttt  of freelance projects. A LOOOOT. LOL."],
  },
  {
    title: "Intern",
    company: "Integrity Business Solutions",
    period: "Jan 2021 - Dec 2021",
    description:
      "Back here, we customized and implemented the Hansaworld ERP all around the country for prominent business of really different sizes and domains. I helped set up networking infrastructures, set up POS machines, fiscalization, training of stuff and helping them capture data on their new systems.",
    achievements: [
      "Well, I was an intern. I will be updating this as I remember more of what I was doing specifically lol.",
    ],
  },
];

const intro =
  "I am the epitome of a dopamine driven developer. I thrive on the thrill of intense problem solving and the satisfaction of constantly proving to myself that I actually am as smart as I think I am.";

const expanded =
  "Please do not let my versitility fool you. Ever heard of a footballer callled Ruud Gullit? He damn near played every position on the field and won a Ballon Do'r while at it. I am the Ruud Gullit of software engineering. I do this in my sleep! Now while I may describe myself as an extremely versatile full-stack developer, my preference is more on the server side. Crazily enough, Golang and Rust are my favorite  programming languages but my most proficient are Python and Javascript. Talk about a toxic relationship.";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who am I?</h1>
              <p className="text-xl text-muted-foreground mb-6">{intro}</p>
              <p className="text-muted-foreground mb-8">{expanded}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Pretoria, South Africa</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <span>tyronemguni@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>I am avaliable, dazzle me!</span>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2" size={16} />
                  Download Resume
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D4D03AQHGBNx_KWmx6Q/profile-displayphoto-shrink_800_800/B4DZY.XAPRH4Ac-/0/1744802943191?e=1755734400&v=beta&t=TZZArLzDEz1_wORpt1eGTIcDfbsE7Ro64M20sfixvPY"
                      alt="Tyrone Mguni"
                      width={400}
                      height={400}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">My weapons of choice.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">
              My professional journey in software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-muted"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
