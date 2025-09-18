import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import wa from "@/assets/whatsapp.png";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Saya akan segera merespon.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hananfijananto@mail.ugm.ac.id",
      href: "mailto:hananfijananto@mail.ugm.ac.id",
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
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-0 lg:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Reach</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Punya project menarik? Mari diskusi dan wujudkan ide Anda menjadi kenyataan</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nama lengkap Anda" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subjek pesan" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Ceritakan project atau ide Anda..." rows={5} required />
                </div>

                <Button type="submit" size="lg" className="w-full glow-effect group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Mari Terhubung</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">Saya selalu antusias untuk mendengar tentang project baru, peluang kolaborasi, atau sekadar ngobrol tentang teknologi. Jangan ragu untuk menghubungi saya!</p>
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
