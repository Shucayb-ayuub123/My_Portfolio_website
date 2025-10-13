import { useState } from 'react';

import axios from 'axios'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import image from './img/Me.jpg'
type users = {
  name:string,
  email:string,
  message: string
}
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

  const [formData, setFormData] = useState<users>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://formspree.io/f/mdkwpnqo" , formData);

      if (response) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again!");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong. Try later!");
    }
  };


  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
     <section className="relative overflow-hidden">
  <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
    <div className="flex flex-col-reverse gap-y-12 md:flex-row items-center text-center md:text-left md:space-x-12  md:space-y-0">
      
      {/* Left: Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt="Shu'aib Ayoub"
          className="w-64 sm:w-80 md:w-80 lg:w-96 rounded-2xl shadow-2xl object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="flex-1 flex flex-col items-center md:items-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Shu'aib Ayoub
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
          Aspiring Full Stack Developer
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl break-words">
          Computer Science student passionate about building <br /> innovative web applications.
        </p>

        <Button
          size="lg"
          className="rounded-full mt-4 px-8 shadow-lg hover:shadow-xl transition-all"
        >
          <a href="#Projects">View My Work</a>
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
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
      <section className="py-20 bg-secondary/30" id='Projects'>
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
                <form className="space-y-4" onSubmit={handleSubmit} >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your name" name='name' value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" name='email' value={formData.email} onChange={handleChange} placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" name='message' placeholder="Your message..." rows={5} value={formData.message} onChange={handleChange} />
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
