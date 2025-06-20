"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
  'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS',
  'Docker', 'Kubernetes', 'Git', 'Linux', 'CI/CD', 'GraphQL'
];

const experience = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'DryBack Technology',
    period: '2022 - Present',
    description: 'Leading development of scalable web applications and mentoring junior developers. Architecting cloud solutions and implementing DevOps practices.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led a team of 5 developers on multiple projects',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    title: 'Full-Stack Developer',
    company: 'Tech Innovations Ltd',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects using React, Node.js, and Python. Collaborated with design teams to implement pixel-perfect UIs.',
    achievements: [
      'Built 15+ production applications',
      'Improved code quality through comprehensive testing',
      'Mentored 3 junior developers'
    ]
  },
  {
    title: 'Frontend Developer',
    company: 'StartupCo',
    period: '2019 - 2020',
    description: 'Focused on creating responsive and interactive user interfaces. Worked closely with UX designers to translate designs into functional web applications.',
    achievements: [
      'Increased user engagement by 35%',
      'Implemented responsive design across all platforms',
      'Optimized performance for mobile devices'
    ]
  }
];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference.
              </p>
              <p className="text-muted-foreground mb-8">
                Based in Johannesburg, South Africa, I specialize in building scalable 
                web applications using modern technologies. I love solving complex problems 
                and turning ideas into reality through code. When I'm not coding, you'll 
                find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge through technical writing.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Johannesburg, South Africa</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <span>tyrone@drybacktechnology.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>Available for projects</span>
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
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
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
            <p className="text-muted-foreground">
              Technologies I work with to bring ideas to life
            </p>
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
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
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