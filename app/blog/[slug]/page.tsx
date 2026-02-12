"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share,
  Twitter,
  Linkedin,
} from "lucide-react";

// Mock blog data - in a real app, this would come from a CMS or API
const blogData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Why I moved from session auth to JWT auth on AWS.",
    excerpt:
      "How I migrated from session-based authentication to JWT-based authentication on AWS.",
    content: `
# Session Auth vs JWT Auth on AWS: How being broke drove my decision

In one of my current projects, I was using session authentication, but things got a little bit...costly... Of late, I like to use AWS ElasticBeanstalk when deploying my projects because I am AWS certified, and I know my stuff?.

## The Pickle With ElasticBeanstalk

Here's the thing about ElasticBeanstalk: it is built for stateless deployments. And session Authentication? Well, that's stateful. When you log in using session auth, the server will keep a record of all the people who logged in somewhere, which we like to call a session store. So on every request you make to the backend, you will send a cookie with your session ID along with your request, and we will check it in the session store to see if that session exists. That sounds very simple... 🤔

Well, if you use modern web frameworks like NestJs, which is what I was using, they will store your session in memory. That means when your server is restarted, you lose all your session data, and all users have to log in whenever something happens, and your app has to restart. So what do we then do about this? Well, we can connect a more persistent data store on the server, right? Yes! We can use Redis to persist the session data instead of relying on the default solution. For those who don't know, Redis is a pretty fast key-value database.

## The twist?

Great, problem solved, we install Redis, run it locally, and we are up and running, right? Well... I did mention we are using hashtag#ElasticBeanstalk, which is stateless. That means if I install Redis on the provisioned server and I make a few changes and push them, the current server instance I have running could(will) be destroyed, and a new one will be given to me with nothing but my previous application state before installing Redis.

The best way to go about this is to have a different server handle the session store so that new changes don't destroy our session store. The problem is, I am unemployed and too broke to be whipping up servers at will 🤷‍♂️ . 

That's when I decided to use JWT authentication. A JWT is a fancy string curated by fancy mathematics I do not want to get into right now. It's slightly more complicated to do right than sessions; that's why I didn't want to use it at first, but it is cheaper. JWT auth is stateless in the sense that the server is looking at your JWT and validating whether or not the encryption is valid or not. It is not exactly referencing some store to check for validity(there is an asterisk there), so that means it completely eliminates a cost, so good, I get to eat meat this week.


---

*What do you think about the cost of managed cloud products, justified? Share your thoughts on [Twitter](https://twitter.com/tyronemguni) or [LinkedIn](https://linkedin.com/in/tyronemguni).*
    `,
    date: "2024-01-15",
    readTime: "3 min read",
    tags: ["Cloud", "AWS", "Cost Optimization", "Opinion"],
    author: "Tyrone Mguni",
  },
  "2": {
    id: "2",
    title: "Diminishing Returns in Software Development Experience",
    excerpt:
      "How competence increases at a decreasing rate as you gain more experience.",
    content: `
# Diminishing Returns in Software Development Experience

For developers working on a similar stack, an engineer with 5 years of experience is closer to an engineer with 20 years of experience than an engineer with 1 year of experience is to one with 5 years.

## The Assumptions: To smoothen the model of course

### 1. RESTful Design (When It Makes Sense)

If both engineers work on projects of similar complexity, using similar technologies, this becomes quite true. There is less to improve on at the top end. Your rate of improvement begins to increase at a diminishing rate at some point. 

The gap in technical competency begins to shrink. Senior developers might understand domains and business processes better, but technical competency? Not as much as you think. I've mentored developers whose skills have become completely unrecognizable in a year. Heck, in some pull requests, you begin to objectively see that they are becoming better than you at some things.

This is why I hate it when developers with more experience use that as an argument to make their point instead of objectively tackling problems and listening to input or feedback from those with less experience. It becomes difficult for the newer devs to tell you when you are wrong respectfully. I mean, how do you tell your "proud" superior that they are objectively wrong?

---

*Senior engineers should stop be obnoxious just because they have spent more hours in front of a computer.*
    `,
    date: "2025-10-10",
    readTime: "3 min read",
    tags: ["Experience", "Software Development", "Opinion"],
    author: "Tyrone Mguni",
  },
  "3": {
    id: "3",
    title: "'Don't fight like a man. Fight like a girl.'",
    excerpt:
      "How small companies lose their advantage by trying to behave like large ones.",
    content: `
# 'Don't fight like a man. Fight like a girl.'

Not too long ago, I was watching the John Wick spinoff "Ballerina," and in there was a nugget of a quote. During the protagonist's training, she is fighting a man, and her trainer tells her, "Don't fight like a man. Fight like a girl."

The idea was that she lost her advantage the moment she tried to fight in a conventional sense. A large part of a small business's advantage is its size. When it tries to operate like a large company, it loses that very same advantage. FIGHT LIKE A SMALL BUSINESS!

## The benefits of being small

As a small business, you have too little to lose. You can fail faster, pivot faster, and find out what works faster. Agility is supposed to be your virtue, but if you introduce too many needless processes, you lose your edge.

I know this because I've worked at places that prioritize looking busy over actually getting things done and putting products out. The idea is not to abandon all processes but to find a good balance that embraces the agility of a small business.
---

*Start ups should move fast, break things and iterate fast, you have nothing to lose, show it!*
    `,
    date: "2025-11-30",
    readTime: "3 min read",
    tags: ["Startups", "Agility", "Opinion"],
    author: "Tyrone Mguni",
  },
  "4": {
    id: "4",
    title: "There is a cult amongst Rust developers!",
    excerpt: "Debunking the irrational, blind admiration for Rust.",
    content: `
# There is a cult amongst Rust developers!

Rust developers champion the Rust programming language as the one size fits all of the programming world. To this, I quote my brother: " Just because your plumber knows how to fix pipes, doesn't mean you should have him fixing your engine." 

When I argue this point that Rust is not always the best solution for some problems, the language's champions start listing out benchmarks as if I do not know that RUST is a remarkable language. The problem isn't that it is not a superior technology; most of its problems are around business 💰🫰 requirements.

## The Rust learning curve

📊 Statistically, it can take an Average developer 3-6 months to be comfortable with Rust. For comparison, the guys over at Golang say it just takes you a weekend to switch to it. Heck, it could take more time(6 -12 months) for Rust developers to be able to shift production-ready code. Bloody hell 😤 !

Anders Hejlsberg, an architect over at the Typescript team, clearly put it out that should they have rewritten the Typescript compiler in RUST, it would have taken 3-4 years, while Golang took them a few months to adopt.

I admire RUST a lot, but most businesses do not need to use it. It mainly affects the ability to ship products faster. Do not get me started on how hard it would be to find Rust developers or to have a team adopt the language. It makes little business sense, which is very often the bottom line.
---

*Technical metrics alone are not enough! Sorry for the rant, but bloody hell, the RUST guys need to relax on this thing. 😤*
    `,
    date: "2025-10-15",
    readTime: "3 min read",
    tags: ["Rust", "Opinion"],
    author: "Tyrone Mguni",
  },
  "5": {
    id: "5",
    title: "Why not automate the entire division?",
    excerpt:
      "A pissed off me trying to get his documents at the district office flirts with the idea of automating the entire division.",
    content: `
# Why not automate the entire division?

So I lost my ID a while ago, and I figured it's time to get it replaced. That's when I decided to visit the district office in my hometown. I did expect the process to be tedious, but boy, was I wrong. It was worse! Let me explain. 

I got there in the morning, saw a cluster of people who I assumed were there for a similar purpose as me, asked what was going on from one of the guys there, and right there, the first problem! He said one of the guys in a suit instructed us to wait here, he would come out with numbered cards, and they would hand those to each of us so as to create some sort of "clever" queue. The smart queue got dumb real quick as he came back after over an hour and told people to make an ACTUAL physical queue so he could hand out those cards. So now people are not being served in order of when they arrived, but by their ability to muscle disorderly into this queue? What a great way to piss people off!

Well, I went to the back of the queue despite being hours earlier than most of the folks there. And when he approached me, I told him I wanted to collect my birth certificate as well as replace my ID, and he just told me to walk right in, we will sort out your ID when you are done there first. So I waited an hour to be told I didn't have to wait to get one of the things done? Oowww, but it gets worse.

After I had collected my birth certificate, I went back to the ID office and a different guy attended to me. Told him what the other guy told me, and the other guy goes, "No card, no entry. Go outside and wait till we bring you a card." For another couple of hours? 

At this point, I was fed up with these guys, went back by the benches, and all I could think of was how I could automate their jobs 🤔 . I was surprised by how little time it took me to mentally architect how to replace these guys, not even with AI, just simple logic and a couple of IF statements. Heck, I was done in like 5 minutes. Which leads me to wonder, why haven't governments implemented these kinds of solutions to improve the productivity of their workforce? 🤔
---

*Rage, it is a  fascinating motivation. If I was Tony Stark, I would have had a field day with... Nevermind.*
    `,
    date: "2025-08-20",
    readTime: "3 min read",
    tags: ["Automation", "Opinion"],
    author: "Tyrone Mguni",
  },
  "6": {
    id: "6",
    title: "You could be handling file uploads wrong!",
    excerpt: "A scalable way to handle file uploads to AWS S3.",
    content: `
# You could be handling file uploads wrong!

## The problem with direct server uploads

Traditionally📜, when files are uploaded in our apps, we send them using some format like form data, our backend processes the files and saves them on disk or to a third party storage provider like AWS s3. This process is depicted in the first graphic. The problem with this is your server handles large inbound traffic when receiving the files and then large outbound traffic when sending the files to your storage provider. This is very heavy on the server since for starters, that file is handled in memory first, and stays in memory until it is sent. The network and compute resources expended here are large.

Instead, you could use this neat concept of signed URLs where you can generate a safe URL to a private s3 bucket🪣 from your server, send it to the client side, and have the client side upload the file directly to s3 without going through your server(As in the second part of the graphic).This reduces your compute resources immensely!

However, there are cases where you might want your server to handle your files before storing them. Maybe you are doing some heavy processing🤷🏼‍♂️, in that case, the traditional method can be difficult to forgo. But in most cases, signed URLs will do you a world of good!
---

*Sometimes, its better to do the simpler thing, then eventually do the right thing. It is a tradeoff trade after all, software engineering. Right?*
    `,
    date: "2025-08-20",
    readTime: "3 min read",
    tags: ["Automation", "Opinion"],
    author: "Tyrone Mguni",
  },
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = blogData[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Share:</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const url = window.location.href;
                      const text = `Check out this article: ${post.title}`;
                      window.open(
                        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          url,
                        )}&text=${encodeURIComponent(text)}`,
                        "_blank",
                      );
                    }}
                  >
                    <Twitter size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const url = window.location.href;
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          url,
                        )}`,
                        "_blank",
                      );
                    }}
                  >
                    <Linkedin size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-gray dark:prose-invert max-w-none"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line: string) => {
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(
                        2,
                      )}</h1>`;
                    } else if (line.startsWith("## ")) {
                      return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.substring(
                        3,
                      )}</h2>`;
                    } else if (line.startsWith("### ")) {
                      return `<h3 class="text-xl font-bold mt-4 mb-2">${line.substring(
                        4,
                      )}</h3>`;
                    } else if (line.startsWith("- ") || line.startsWith("* ")) {
                      return `<li class="ml-4">${line.substring(2)}</li>`;
                    } else if (line.trim() === "") {
                      return "<br />";
                    } else if (line.startsWith("```")) {
                      return line.includes("```") && line.length > 3
                        ? `</code></pre>`
                        : `<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>`;
                    } else {
                      // Handle bold text
                      const boldText = line.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>",
                      );
                      const codeText = boldText.replace(
                        /`(.*?)`/g,
                        '<code class="bg-muted px-2 py-1 rounded">$1</code>',
                      );
                      return `<p class="mb-4 leading-relaxed">${codeText}</p>`;
                    }
                  })
                  .join(""),
              }}
            />
          </motion.article>

          <Separator className="my-12" />

          {/* Author info and related articles could go here */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-muted/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-3">About the Author</h3>
            <p className="text-muted-foreground">
              Tyrone Mguni is a full-stack software engineer with over 5 years
              of experience building scalable web applications. He specializes
              in React, Node.js, and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
