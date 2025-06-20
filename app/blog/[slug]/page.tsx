"use client";

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, User, Share, Twitter, Linkedin } from 'lucide-react';

// Mock blog data - in a real app, this would come from a CMS or API
const blogData: Record<string, any> = {
  '1': {
    id: '1',
    title: 'The Evolution of JavaScript Frameworks: A Developer\'s Journey',
    excerpt: 'My thoughts on how JavaScript frameworks have evolved over the years and what this means for developers in 2024.',
    content: `
# The Evolution of JavaScript Frameworks: A Developer's Journey

As someone who has been writing JavaScript for over a decade, I've witnessed firsthand the incredible evolution of the JavaScript ecosystem. From the early days of jQuery to the modern era of React, Vue, and beyond, each phase has brought new paradigms, challenges, and opportunities.

## The jQuery Era

Back in 2010, jQuery was king. It solved the cross-browser compatibility nightmare that plagued web developers. Writing **$("#myElement").fadeIn()** felt magical compared to the verbose vanilla JavaScript alternatives.

jQuery taught us valuable lessons:
- The power of a good API design
- The importance of cross-browser compatibility
- How a simple, chainable syntax could improve developer experience

## The Rise of MVC Frameworks

As applications grew more complex, we needed better ways to organize our code. Backbone.js and later Angular 1.x introduced us to the Model-View-Controller pattern in the browser.

Angular 1.x was revolutionary because it brought:
- Two-way data binding
- Dependency injection
- A comprehensive framework approach

However, it also introduced complexity that many developers struggled with. The learning curve was steep, and the framework could feel opinionated to a fault.

## The React Revolution

When React was announced in 2013, many developers were skeptical. "Why would I want to put HTML in my JavaScript?" was a common refrain. But React's component-based architecture and virtual DOM proved to be game-changers.

React's key innovations:
- **Component-based architecture**: Reusable, composable UI components
- **Virtual DOM**: Efficient updates and rendering
- **One-way data flow**: Predictable state management
- **JSX**: A more natural way to describe UI

The React ecosystem exploded with complementary libraries like Redux, React Router, and countless UI libraries.

## Vue.js: The Progressive Framework

Vue.js emerged as a "progressive framework" that combined the best of Angular and React while maintaining simplicity. Evan You created something that felt familiar to developers coming from different backgrounds.

Vue's strengths:
- Gentle learning curve
- Excellent documentation
- Template syntax that feels natural to HTML developers
- Powerful but optional tooling

## The Modern Era: Beyond Frameworks

Today, we're seeing interesting developments:

### Meta-Frameworks
- **Next.js**: Full-stack React with server-side rendering
- **Nuxt.js**: The Vue.js equivalent
- **SvelteKit**: Svelte's answer to meta-frameworks
- **Remix**: Focused on web standards and progressive enhancement

### Build Tools Revolution
- **Vite**: Lightning-fast development and building
- **esbuild**: Incredibly fast JavaScript bundler
- **SWC**: Rust-based JavaScript/TypeScript compiler

### New Paradigms
- **Islands Architecture**: Partial hydration for better performance
- **Resumability**: Qwik's approach to instant loading
- **Fine-grained Reactivity**: SolidJS's efficient updates

## What This Means for Developers in 2024

### 1. Choose Based on Project Requirements
There's no single "best" framework. Each has its sweet spot:
- **React**: Large applications, strong ecosystem, enterprise projects
- **Vue**: Rapid prototyping, gentle learning curve, balanced approach
- **Svelte**: Performance-critical applications, smaller bundle sizes
- **Angular**: Large enterprise applications, TypeScript-first projects

### 2. Focus on Fundamentals
Frameworks come and go, but understanding core concepts remains valuable:
- Component architecture
- State management patterns
- Performance optimization
- Accessibility principles
- Testing strategies

### 3. Stay Curious, But Don't Chase Every Trend
The JavaScript fatigue is real. While it's important to stay informed about new developments, jumping on every new framework isn't sustainable or necessary.

### 4. Consider the Total Cost of Ownership
When choosing a framework, consider:
- Learning curve for your team
- Community support and ecosystem
- Long-term maintenance
- Performance requirements
- Deployment and scaling considerations

## My Personal Framework Evolution

Looking back at my journey:
- **2010-2013**: jQuery and vanilla JavaScript
- **2013-2016**: Angular 1.x and early React
- **2016-2019**: React ecosystem deep dive
- **2019-2022**: Vue.js exploration and TypeScript adoption
- **2022-Present**: Next.js, modern tooling, and performance optimization

Each phase taught me something valuable, and skills from one era often apply to the next.

## The Future

Looking ahead, I'm excited about:
- **WebAssembly**: Bringing other languages to the browser efficiently
- **Web Components**: Native component architecture
- **Progressive Web Apps**: Bridging the gap between web and native
- **AI-Assisted Development**: Tools that help us write better code faster

## Conclusion

The JavaScript ecosystem's evolution has been remarkable. While the pace of change can feel overwhelming, each new development has generally made us more productive and our applications better.

My advice? Master one framework deeply, understand the underlying principles, and stay curious about new developments. The fundamentals you learn today will serve you well regardless of what framework becomes popular tomorrow.

What's your JavaScript journey been like? I'd love to hear about your experiences with different frameworks and what lessons you've learned along the way.

---

*What do you think about the current state of JavaScript frameworks? Share your thoughts on [Twitter](https://twitter.com/tyronemguni) or [LinkedIn](https://linkedin.com/in/tyronemguni).*
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['JavaScript', 'React', 'Vue', 'Opinion'],
    author: 'Tyrone Mguni'
  },
  '2': {
    id: '2',
    title: 'Building Scalable APIs: Lessons from Production',
    excerpt: 'Hard-learned lessons about API design, performance optimization, and scaling strategies from real-world projects.',
    content: `
# Building Scalable APIs: Lessons from Production

Over the past few years, I've had the opportunity to build and maintain APIs that serve millions of requests daily. Through trial, error, and quite a few production incidents, I've learned valuable lessons about what it takes to build truly scalable APIs.

## The Foundation: Design Principles

### 1. RESTful Design (When It Makes Sense)

REST isn't just about using HTTP verbs correctly. It's about creating a consistent, predictable interface:

- **Resource-based URLs**: \`/users/123/posts\` not \`/getUserPosts?userId=123\`
- **Proper HTTP status codes**: 201 for creation, 204 for deletion, 422 for validation errors
- **Consistent error responses**: Always return errors in the same format

### 2. API Versioning Strategy

Version your APIs from day one. I prefer URL versioning (\`/api/v1/users\`) because it's explicit and easy to understand.

### 3. Documentation as a First-Class Citizen

Use tools like OpenAPI/Swagger to generate documentation from your code. Keep it updated and include examples for every endpoint.

## Performance Lessons

### Database Query Optimization

The biggest performance killer I've encountered is the N+1 query problem. Here's what I've learned:

**Bad:**
\`\`\`javascript
// This will make N+1 queries
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.findAll({ where: { userId: user.id } });
}
\`\`\`

**Good:**
\`\`\`javascript
// Single query with joins
const users = await User.findAll({
  include: [{ model: Post }]
});
\`\`\`

### Caching Strategy

Implement caching at multiple levels:

1. **Application-level caching**: Redis for frequently accessed data
2. **Database query caching**: Reduce repeated database hits
3. **HTTP caching**: Use ETags and Cache-Control headers
4. **CDN caching**: For static or semi-static content

### Rate Limiting

Implement rate limiting early. I use a sliding window approach:

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});
\`\`\`

## Scaling Strategies

### Horizontal vs Vertical Scaling

**Vertical Scaling** (scaling up):
- Easier to implement
- Limited by hardware constraints
- Single point of failure

**Horizontal Scaling** (scaling out):
- More complex but unlimited potential
- Requires stateless design
- Better fault tolerance

### Load Balancing

Use a load balancer to distribute traffic across multiple API instances. Consider:
- **Round-robin**: Simple but doesn't account for server load
- **Least connections**: Better for varying request complexity
- **Health checks**: Automatically remove unhealthy servers

### Database Scaling

1. **Read Replicas**: Separate read and write operations
2. **Sharding**: Distribute data across multiple databases
3. **Connection Pooling**: Reuse database connections efficiently

## Error Handling and Monitoring

### Comprehensive Error Handling

\`\`\`javascript
app.use((err, req, res, next) => {
  // Log the error
  logger.error('API Error:', {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    userAgent: req.get('User-Agent'),
    ip: req.ip
  });

  // Don't leak internal errors to clients
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
});
\`\`\`

### Monitoring and Alerting

Track key metrics:
- **Response times**: 50th, 95th, and 99th percentiles
- **Error rates**: 4xx and 5xx responses
- **Throughput**: Requests per second
- **Database performance**: Query times and connection pool usage

## Security Considerations

### Authentication and Authorization

Use JWT tokens with proper expiration times:

\`\`\`javascript
const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

// Verify token middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};
\`\`\`

### Input Validation

Never trust client input. Use a schema validation library:

\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  age: Joi.number().integer().min(13).max(120)
});

const { error, value } = userSchema.validate(req.body);
if (error) {
  return res.status(400).json({ message: error.details[0].message });
}
\`\`\`

## Testing Strategy

### Unit Tests

Test individual functions and methods in isolation:

\`\`\`javascript
describe('User Service', () => {
  it('should create a user with valid data', async () => {
    const userData = { email: 'test@example.com', password: 'password123' };
    const user = await UserService.create(userData);
    
    expect(user.email).toBe(userData.email);
    expect(user.password).not.toBe(userData.password); // Should be hashed
  });
});
\`\`\`

### Integration Tests

Test API endpoints end-to-end:

\`\`\`javascript
describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ email: 'test@example.com', password: 'password123' })
      .expect(201);
    
    expect(response.body.user.email).toBe('test@example.com');
  });
});
\`\`\`

### Load Testing

Use tools like Artillery or k6 to test performance under load:

\`\`\`yaml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Get users"
    flow:
      - get:
          url: "/api/users"
\`\`\`

## Deployment and DevOps

### CI/CD Pipeline

Automate testing and deployment:

1. **Continuous Integration**: Run tests on every commit
2. **Automated Deployment**: Deploy to staging automatically
3. **Manual Production Deploy**: With proper approvals
4. **Rollback Strategy**: Quick rollback if issues arise

### Environment Management

Use environment variables for configuration:

\`\`\`javascript
const config = {
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '1h'
  }
};
\`\`\`

## Common Pitfalls and How to Avoid Them

### 1. Not Planning for Scale from the Start

Even if you don't need it immediately, design your API with scaling in mind:
- Use stateless design
- Implement proper caching early
- Choose technologies that can scale

### 2. Ignoring Database Indexes

Profile your queries and add indexes for frequently queried fields:

\`\`\`sql
-- Add index for email lookups
CREATE INDEX idx_users_email ON users(email);

-- Composite index for complex queries
CREATE INDEX idx_posts_user_date ON posts(user_id, created_at);
\`\`\`

### 3. Poor Error Messages

Provide meaningful error messages that help developers integrate with your API:

\`\`\`javascript
// Bad
{ "error": "Invalid input" }

// Good
{
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Email is required"
    },
    {
      "field": "password",
      "message": "Password must be at least 8 characters"
    }
  ]
}
\`\`\`

## Conclusion

Building scalable APIs is as much about planning and architecture as it is about code. The key lessons I've learned:

1. **Design for scale from the beginning**
2. **Monitor everything and alert on anomalies**
3. **Cache aggressively but invalidate carefully**
4. **Test thoroughly at all levels**
5. **Secure by default, not as an afterthought**

Every production incident taught me something valuable. Embrace failures as learning opportunities, and always conduct post-mortems to prevent similar issues.

The API landscape continues to evolve with GraphQL, gRPC, and other technologies, but these fundamental principles remain constant.

---

*Have you faced similar challenges building scalable APIs? I'd love to hear about your experiences and lessons learned.*
    `,
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['API', 'Backend', 'Performance', 'Architecture'],
    author: 'Tyrone Mguni'
  }
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
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
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
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
                      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                    }}
                  >
                    <Twitter size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const url = window.location.href;
                      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
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
                  .split('\n')
                  .map((line: string) => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold mt-8 mb-4">${line.substring(2)}</h1>`;
                    } else if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold mt-6 mb-3">${line.substring(3)}</h2>`;
                    } else if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold mt-4 mb-2">${line.substring(4)}</h3>`;
                    } else if (line.startsWith('- ') || line.startsWith('* ')) {
                      return `<li class="ml-4">${line.substring(2)}</li>`;
                    } else if (line.trim() === '') {
                      return '<br />';
                    } else if (line.startsWith('```')) {
                      return line.includes('```') && line.length > 3 ? `</code></pre>` : `<pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>`;
                    } else {
                      // Handle bold text
                      const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                      const codeText = boldText.replace(/`(.*?)`/g, '<code class="bg-muted px-2 py-1 rounded">$1</code>');
                      return `<p class="mb-4 leading-relaxed">${codeText}</p>`;
                    }
                  })
                  .join('')
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
              Tyrone Mguni is a full-stack software engineer with over 5 years of experience 
              building scalable web applications. He specializes in React, Node.js, and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}