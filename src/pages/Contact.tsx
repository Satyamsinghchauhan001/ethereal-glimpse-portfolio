import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (replace with your actual service ID, template ID, and public key)
      await emailjs.send(
        "service_your_service_id", // Replace with your EmailJS service ID
        "template_your_template_id", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Satyam Singh Chauhan", // Your name
        },
        "your_public_key" // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass glass-hover p-6 border-white/10">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Let's Connect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-secondary">📧</span>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-foreground/70">john@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-secondary">💼</span>
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-foreground/70">linkedin.com/in/john</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                      <span className="text-secondary">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-foreground/70">github.com/john</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="glass glass-hover p-6 border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="neu-inset bg-muted/50 border-0 focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="neu-inset bg-muted/50 border-0 focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="neu-inset bg-muted/50 border-0 focus:ring-2 focus:ring-primary/50 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full glass-strong glass-hover bg-primary/20 hover:bg-primary/30 border-primary/30 hover:scale-105 transition-all duration-300 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
