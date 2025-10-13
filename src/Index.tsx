import { Button } from './components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "MySQL", icon: "🗄️" },
    { name: "JavaScript", icon: "💛" },
    { name: "Git", icon: "📦" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, cart functionality, and payment integration.",
      image: "/placeholder.svg",
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Task Management App",
      description: "React-based task manager with drag-and-drop functionality and real-time updates.",
      image: "/placeholder.svg",
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard using external APIs with data visualization.",
      image: "/placeholder.svg",
      liveUrl: "#",
      sourceUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img
                src="/placeholder.svg"
                alt="Shu'aib Ayoub"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 object-cover shadow-2xl"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Shu'aib Ayoub
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Aspiring Full Stack Developer
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                Computer Science student passionate about building innovative web applications
              </p>
            </div>
            <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-center md:text-lg">
                  I'm a dedicated Computer Science student with a passion for creating elegant solutions to complex problems. 
                  My journey in technology has led me to explore full-stack development, where I combine creativity with 
                  technical skills to build user-friendly applications. I'm constantly learning and adapting to new technologies, 
                  with a focus on writing clean, maintainable code and delivering exceptional user experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <Card key={skill.name} className="group hover:shadow-lg transition-all hover:border-primary/50">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <p className="font-medium text-sm text-center">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden group hover:shadow-xl transition-all border-primary/10">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-3">
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.sourceUrl}>
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-primary/10">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
                
                <div className="mt-8 pt-8 border-t">
                  <p className="text-center text-sm text-muted-foreground mb-4">Or connect with me on</p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="#" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="mailto:shuaib@example.com" aria-label="Email">
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/30 border-t">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shu'aib Ayoub. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
