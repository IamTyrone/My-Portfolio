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
