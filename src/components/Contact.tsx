import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("6ifygz6eWs9E_cGAA");
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.current) {
      toast({
        title: "Error",
        description: "Form reference tidak ditemukan.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Validasi Gagal",
        description: "Semua field harus diisi.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    console.log("Mengirim email dengan data:", {
      serviceId: "service_6en6ygs",
      templateId: "template_csjebky",
      publicKey: "6ifygz6eWs9E_cGAA",
      formData,
    });

    emailjs
      .sendForm("service_y5ed4he", "template_csjebky", form.current, {
        publicKey: "6ifygz6eWs9E_cGAA",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          toast({
            title: "Pesan Terkirim! ✅",
            description: "Terima kasih atas pesan Anda. Saya akan segera merespon.",
          });
          // Reset form
          setFormData({ name: "", email: "", subject: "", message: "" });
          if (form.current) {
            form.current.reset();
          }
        },
        (error: any) => {
          console.error("GAGAL:", error);
          console.error("Error text:", error.text);
          console.error("Error status:", error.status);

          let errorMessage = "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.";

          if (error.status === 400) {
            errorMessage = "Email configuration salah. Periksa Service ID dan Template ID.";
          } else if (error.status === 401) {
            errorMessage = "Public Key tidak valid.";
          }

          toast({
            title: "Pesan Gagal terkirim! ❌",
            description: errorMessage,
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hananfijananto@mail.ugm.ac.id",
      href: "https://mail.google.com/mail/u/0/#sent?compose=new",
    },
    {
      icon: FaWhatsapp,
      title: "Whatsapp",
      value: "+62 85865172878",
      href: "https://wa.me/6285865172878",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Yogyakarta, Indonesia",
      href: "https://www.google.com/maps/place/Jl.+Pogung+Rejo,+Pogung+Kidul,+Sinduadi,+Kec.+Mlati,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55284/@-7.7586546,110.370048,18z/data=!3m1!4b1!4m6!3m5!1s0x2e7a585149394d79:0xd5c05590653cc036!8m2!3d-7.7586573!4d110.3713355!16s%2Fg%2F11g8792_vf?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Yoloez", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hanan-fijananto-1362152b7/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/hnfja/", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-16 px-0 lg:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Reach</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Got an interesting project? Let's discuss and work together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={sendEmail} ref={form} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required disabled={isLoading} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required disabled={isLoading} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject of your message" required disabled={isLoading} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me more about your project..." rows={5} required disabled={isLoading} />
                </div>

                <Button type="submit" size="lg" className="w-full glow-effect group" disabled={isLoading}>
                  <Send className={`mr-2 h-5 w-5 ${isLoading ? "animate-spin" : "group-hover:translate-x-1"} transition-transform`} />
                  {isLoading ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">I’m always excited to hear about new projects, collaboration opportunities, or just chat about technology. Feel free to reach out!</p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.href} className="flex items-center space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group" target="_blank" rel="noopener noreferrer">
                  <info.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">{info.title}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
