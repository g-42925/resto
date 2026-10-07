import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { format } from "date-fns";
import { id } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { ChefHat, Award, Users, Sparkles, Heart, Star, TrendingUp, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Calendar as CalendarIcon, User, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { cn } from "@/lib/utils";

const HomePage = () => {
  const whatsappURL = "https://wa.me/6285179889988?text=Halo,%20saya%20tertarik%20untuk%20memesan%20meja%20di%2C%20Leryn%20Resto.";
  const features = [{
    icon: ChefHat,
    title: 'Chef Profesional',
    description: 'Tim chef berpengalaman dengan keahlian kuliner internasional'
  }, {
    icon: Award,
    title: 'Kualitas Premium',
    description: 'Bahan-bahan pilihan terbaik untuk cita rasa sempurna'
  }, {
    icon: Users,
    title: 'Pelayanan Terbaik',
    description: 'Pengalaman bersantap yang tak terlupakan'
  }, {
    icon: Sparkles,
    title: 'Suasana Elegan',
    description: 'Ambience nyaman dan mewah untuk setiap momen spesial'
  }];
  const menuData = {
    appetizer: [{
      name: 'Caesar Salad',
      description: 'Selada segar dengan dressing caesar klasik',
      price: 'Rp 65.000',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
    }, {
      name: 'Bruschetta',
      description: 'Roti panggang dengan tomat segar dan basil',
      price: 'Rp 55.000',
      image: 'https://images.unsplash.com/photo-1505253716362-afb74bf60d44'
    }, {
      name: 'Soup of the Day',
      description: 'Sup spesial pilihan chef hari ini',
      price: 'Rp 45.000',
      image: 'https://images.unsplash.com/photo-1547573882-14561d3a33a6'
    }, {
      name: 'Calamari Fritti',
      description: 'Cumi goreng renyah dengan saus tartar',
      price: 'Rp 75.000',
      image: 'https://images.unsplash.com/photo-1585109649139-d3631f600f93'
    }],
    mainCourse: [{
      name: 'Grilled Salmon',
      description: 'Salmon panggang dengan saus lemon butter',
      price: 'Rp 185.000',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2'
    }, {
      name: 'Beef Tenderloin',
      description: 'Tenderloin sapi premium dengan saus mushroom',
      price: 'Rp 225.000',
      image: 'https://images.unsplash.com/photo-1588166524941-3bf6a7c64386'
    }, {
      name: 'Chicken Cordon Bleu',
      description: 'Ayam isi keju dan ham dengan saus cream',
      price: 'Rp 145.000',
      image: 'https://images.unsplash.com/photo-1628139343675-395831338a06'
    }, {
      name: 'Pasta Carbonara',
      description: 'Pasta dengan saus carbonara creamy',
      price: 'Rp 95.000',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141'
    }, {
      name: 'Lamb Chop',
      description: 'Lamb chop panggang dengan rosemary',
      price: 'Rp 195.000',
      image: 'https://images.unsplash.com/photo-1599923594348-19344464c12a'
    }, {
      name: 'Seafood Paella',
      description: 'Nasi paella dengan seafood segar',
      price: 'Rp 165.000',
      image: 'https://images.unsplash.com/photo-1598515213692-5f2824368a45'
    }],
    dessert: [{
      name: 'Tiramisu',
      description: 'Dessert Italia klasik dengan kopi dan mascarpone',
      price: 'Rp 55.000',
      image: 'https://images.unsplash.com/photo-1571115332238-9a30d2068933'
    }, {
      name: 'Chocolate Lava Cake',
      description: 'Kue cokelat hangat dengan lelehan di tengah',
      price: 'Rp 65.000',
      image: 'https://images.unsplash.com/photo-1586985289936-e3a9364969de'
    }, {
      name: 'Panna Cotta',
      description: 'Puding Italia dengan saus berry',
      price: 'Rp 50.000',
      image: 'https://images.unsplash.com/photo-1516054575936-d7a5b398a635'
    }, {
      name: 'Crème Brûlée',
      description: 'Custard vanilla dengan karamel renyah',
      price: 'Rp 60.000',
      image: 'https://images.unsplash.com/photo-1672237965936-1db4b1509fa8'
    }],
    drinks: [{
      name: 'Fresh Orange Juice',
      description: 'Jus jeruk segar tanpa gula tambahan',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd452bba'
    }, {
      name: 'Cappuccino',
      description: 'Kopi cappuccino dengan foam sempurna',
      price: 'Rp 40.000',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e539'
    }, {
      name: 'Mojito Mocktail',
      description: 'Minuman segar mint dan lime',
      price: 'Rp 45.000',
      image: 'https://images.unsplash.com/photo-1551538850-2f9c4353463a'
    }, {
      name: 'Iced Lemon Tea',
      description: 'Teh lemon dingin yang menyegarkan',
      price: 'Rp 30.000',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c19761a'
    }, {
      name: 'Smoothie Bowl',
      description: 'Smoothie dengan topping buah segar',
      price: 'Rp 55.000',
      image: 'https://images.unsplash.com/photo-1541641544-6b997972c219'
    }]
  };
  const {
    toast
  } = useToast();
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    time: '',
    guests: '',
    message: ''
  });
  const handleChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (!date) {
      toast({
        title: "Tanggal Belum Dipilih",
        description: "Silakan pilih tanggal reservasi terlebih dahulu.",
        variant: "destructive",
      });
      return;
    }

    const bookingData = {
      ...formData,
      date: format(date, "PPP", { locale: id }),
    };

    // Save to localStorage
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      id: Date.now(),
      ...bookingData,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Prepare messages
    const messageBody = `
Detail Reservasi Meja:
--------------------------------
Nama: ${bookingData.name}
Telepon: ${bookingData.phone}
Tanggal: ${bookingData.date}
Waktu: ${bookingData.time}
Jumlah Tamu: ${bookingData.guests} Orang
Pesan Khusus: ${bookingData.message || '-'}
--------------------------------
Mohon konfirmasi ketersediaan. Terima kasih!
    `.trim();

    const whatsappMessage = encodeURIComponent(messageBody);
    const emailSubject = encodeURIComponent(`Reservasi Meja Leryn Resto - ${bookingData.name}`);
    const emailBody = encodeURIComponent(messageBody);

    const restaurantWhatsapp = "6285179889988";
    const restaurantEmail = "info@lerynresto.com";

    const whatsappUrl = `https://wa.me/${restaurantWhatsapp}?text=${whatsappMessage}`;
    const emailUrl = `mailto:${restaurantEmail}?subject=${emailSubject}&body=${emailBody}`;

    // Open links
    window.open(whatsappUrl, '_blank');
    window.open(emailUrl, '_blank');

    toast({
      title: "Reservasi Terkirim! 🎉",
      description: "Silakan lanjutkan pengiriman pesan di WhatsApp dan Email yang terbuka."
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      time: '',
      guests: '',
      message: ''
    });
    setDate(null);
  };
  const aboutValues = [{
    icon: Heart,
    title: 'Passion',
    description: 'Kami mencintai apa yang kami lakukan dan berkomitmen memberikan yang terbaik'
  }, {
    icon: Award,
    title: 'Excellence',
    description: 'Standar kualitas tertinggi dalam setiap aspek pelayanan kami'
  }, {
    icon: Star,
    title: 'Innovation',
    description: 'Terus berinovasi untuk menghadirkan pengalaman kuliner yang unik'
  }, {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Berkembang bersama komunitas dan pelanggan setia kami'
  }];
  const galleryImages = [{
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    title: 'Elegant dining area',
    description: 'Luxurious restaurant interior'
  }, {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    title: 'Gourmet steak dish',
    description: 'Perfectly cooked premium steak'
  }, {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    title: 'Fresh seafood platter',
    description: 'Beautiful seafood platter'
  }, {
    src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8',
    title: 'Chef preparing food',
    description: 'Professional chef at work'
  }, {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    title: 'Dessert presentation',
    description: 'Elegant dessert plating'
  }, {
    src: 'https://images.unsplash.com/photo-1511920170033-f832d74b1e32',
    title: 'Wine collection',
    description: 'Premium wine collection'
  }];
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
            <Helmet>
                <title>Leryn Resto - Cita Rasa Elegan Setiap Hidangan</title>
                <meta name="description" content="Selamat datang di Leryn Resto. Nikmati pengalaman kuliner terbaik dalam satu halaman yang elegan." />
            </Helmet>

            {/* Beranda Section */}
            <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img className="w-full h-full object-cover object-center" alt="Elegant restaurant interior" src="https://horizons-cdn.hostinger.com/277e5d67-39f4-4d58-8909-dbe2123e94cd/phoenix_09_a_3d_futuristic_restaurant_interior_background_mini_1-h1h9c.jpg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 z-10">
                    <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-3xl">
                        <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                            Selamat Datang di <span className="text-gradient-gold">Leryn Resto</span>
                        </motion.h1>
                        <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="text-xl md:text-2xl text-slate-200 mb-8">
                            Cita Rasa Elegan Setiap Hidangan
                        </motion.p>
                        <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="gradient-gold text-slate-900 hover:opacity-90 text-lg px-8 py-6" onClick={() => scrollToSection('booking')}>
                                Pesan Meja Sekarang
                            </Button>
                            <Button size="lg" variant="outline" className="border-[#b38b47] text-[#b38b47] hover:bg-[#b38b47]/10 text-lg px-8 py-6" onClick={() => scrollToSection('menu')}>
                                Lihat Menu
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            
            <section className="py-20 bg-black/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Mengapa Memilih Kami?</h2>
                        <p className="text-[#bdaea0] text-lg max-w-2xl mx-auto">Pengalaman kuliner terbaik dengan standar kualitas tertinggi</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} whileHover={{
            y: -10
          }} className="bg-[#3a2a1a]/30 backdrop-blur-sm p-8 rounded-xl border border-[#b38b47]/30 hover:border-[#b38b47] transition-all shadow-lg">
                                <feature.icon className="w-12 h-12 text-[#b38b47] mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gradient-gold">{feature.title}</h3>
                                <p className="text-[#bdaea0]">{feature.description}</p>
                            </motion.div>)}
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4">Menu <span className="text-gradient-gold">Kami</span></h2>
                        <p className="text-[#bdaea0] text-lg max-w-2xl mx-auto">Nikmati berbagai pilihan hidangan lezat yang disiapkan khusus untuk Anda</p>
                    </motion.div>
                    <Tabs defaultValue="appetizer" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-[#3a2a1a]/30 p-2 rounded-xl border border-[#b38b47]/30">
                            <TabsTrigger value="appetizer" className="data-[state=active]:bg-[#b38b47] data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-[#e0dcd3]">Appetizer</TabsTrigger>
                            <TabsTrigger value="mainCourse" className="data-[state=active]:bg-[#b38b47] data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-[#e0dcd3]">Main Course</TabsTrigger>
                            <TabsTrigger value="dessert" className="data-[state=active]:bg-[#b38b47] data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-[#e0dcd3]">Dessert</TabsTrigger>
                            <TabsTrigger value="drinks" className="data-[state=active]:bg-[#b38b47] data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-[#e0dcd3]">Minuman</TabsTrigger>
                        </TabsList>
                        {Object.entries(menuData).map(([category, items]) => <TabsContent key={category} value={category}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {items.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1,
                duration: 0.6
              }} whileHover={{
                y: -10
              }} className="bg-[#3a2a1a]/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#b38b47]/30 hover:border-[#b38b47] transition-all shadow-lg">
                                            <div className="h-48 sm:h-56 md:h-64 overflow-hidden"><img className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500" alt={item.name} src="https://horizons-cdn.hostinger.com/277e5d67-39f4-4d58-8909-dbe2123e94cd/phoenix_09_a_futuristic_elegant_hero_image_for_a_restaurant_we_3-JFty5.jpg" /></div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold mb-2 text-gradient-gold">{item.name}</h3>
                                                <p className="text-[#bdaea0] mb-4 text-sm">{item.description}</p>
                                                <p className="text-2xl font-bold text-gradient-cyan">{item.price}</p>
                                            </div>
                                        </motion.div>)}
                                </div>
                            </TabsContent>)}
                    </Tabs>
                </div>
            </section>

            {/* Booking Section */}
            <section id="booking" className="py-20 bg-black/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4">Pesan <span className="text-gradient-gold">Meja</span></h2>
                        <p className="text-[#bdaea0] text-lg max-w-2xl mx-auto">Reservasi meja Anda sekarang untuk pengalaman kuliner yang istimewa</p>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="space-y-6">
                            <img className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover object-center" alt="Elegant restaurant dining area" src="https://horizons-cdn.hostinger.com/277e5d67-39f4-4d58-8909-dbe2123e94cd/phoenix_09_a_clean_digital_interface_showing_a_glowing_hologra_0-BZEoz.jpg" />
                            <div className="bg-[#3a2a1a]/30 backdrop-blur-sm p-6 rounded-xl border border-[#b38b47]/30 shadow-md">
                                <h3 className="text-2xl font-semibold mb-4 text-gradient-cyan">Informasi Penting</h3>
                                <ul className="space-y-3 text-[#bdaea0]">
                                    <li className="flex items-start space-x-2"><span className="text-[#86c2c9] mt-1">•</span><span>Reservasi dapat dilakukan minimal 2 jam sebelum kedatangan</span></li>
                                    <li className="flex items-start space-x-2"><span className="text-[#86c2c9] mt-1">•</span><span>Meja akan ditahan maksimal 15 menit dari waktu reservasi</span></li>
                                    <li className="flex items-start space-x-2"><span className="text-[#86c2c9] mt-1">•</span><span>Untuk grup lebih dari 10 orang, harap hubungi kami langsung</span></li>
                                    <li className="flex items-start space-x-2"><span className="text-[#86c2c9] mt-1">•</span><span>Konfirmasi reservasi akan dikirim melalui <strong>Email & WhatsApp</strong></span></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
                            <form onSubmit={handleSubmit} className="bg-[#3a2a1a]/30 backdrop-blur-sm p-8 rounded-xl border border-[#b38b47]/30 shadow-md space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="flex items-center space-x-2 text-[#e0dcd3]"><User className="w-4 h-4 text-[#b38b47]" /><span>Nama Lengkap</span></Label>
                                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-[#1a110a]/50 border border-[#b38b47]/50 rounded-lg focus:outline-none focus:border-[#b38b47] text-[#e0dcd3] transition-colors" placeholder="Masukkan nama Anda" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="flex items-center space-x-2 text-[#e0dcd3]"><Phone className="w-4 h-4 text-[#b38b47]" /><span>Nomor Telepon</span></Label>
                                    <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-[#1a110a]/50 border border-[#b38b47]/50 rounded-lg focus:outline-none focus:border-[#b38b47] text-[#e0dcd3] transition-colors" placeholder="08xx-xxxx-xxxx" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="date" className="flex items-center space-x-2 text-[#e0dcd3]"><CalendarIcon className="w-4 h-4 text-[#b38b47]" /><span>Tanggal</span></Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full justify-start text-left font-normal px-4 py-3 bg-[#1a110a]/50 border border-[#b38b47]/50 hover:bg-[#1a110a] hover:text-[#e0dcd3] focus:outline-none focus:border-[#b38b47]",
                                                        !date && "text-[#bdaea0]"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP", { locale: id }) : <span>Pilih tanggal</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                    disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="time" className="flex items-center space-x-2 text-[#e0dcd3]"><Clock className="w-4 h-4 text-[#b38b47]" /><span>Waktu</span></Label>
                                        <input id="time" name="time" type="time" required value={formData.time} onChange={handleChange} className="w-full px-4 py-3 bg-[#1a110a]/50 border border-[#b38b47]/50 rounded-lg focus:outline-none focus:border-[#b38b47] text-[#e0dcd3] transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="guests" className="flex items-center space-x-2 text-[#e0dcd3]"><Users className="w-4 h-4 text-[#b38b47]" /><span>Jumlah Tamu</span></Label>
                                    <select id="guests" name="guests" required value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 bg-[#1a110a]/50 border border-[#b38b47]/50 rounded-lg focus:outline-none focus:border-[#b38b47] text-[#e0dcd3] transition-colors"><option value="">Pilih jumlah tamu</option><option value="1">1 Orang</option><option value="2">2 Orang</option><option value="3">3 Orang</option><option value="4">4 Orang</option><option value="5">5 Orang</option><option value="6">6 Orang</option><option value="7-10">7-10 Orang</option></select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="flex items-center space-x-2 text-[#e0dcd3]"><MessageSquare className="w-4 h-4 text-[#b38b47]" /><span>Pesan Khusus (Opsional)</span></Label>
                                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-[#1a110a]/50 border border-[#b38b47]/50 rounded-lg focus:outline-none focus:border-[#b38b47] text-[#e0dcd3] transition-colors resize-none" placeholder="Permintaan khusus, alergi, atau perayaan..."></textarea>
                                </div>
                                <Button type="submit" size="lg" className="w-full gradient-gold text-slate-900 hover:opacity-90 text-lg py-6">Konfirmasi Reservasi</Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tentang Section */}
            <section id="tentang" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4">Tentang <span className="text-gradient-gold">Kami</span></h2>
                        <p className="text-[#bdaea0] text-lg max-w-2xl mx-auto">Perjalanan kami dalam menghadirkan cita rasa elegan untuk Anda</p>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
                            <img className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center" alt="Restaurant owner and chef team" src="https://horizons-cdn.hostinger.com/277e5d67-39f4-4d58-8909-dbe2123e94cd/phoenix_09_a_futuristic_about_us_section_image_for_a_restauran_3-bJ2At.jpg" />
                        </motion.div>
                        <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="space-y-6">
                            <h3 className="text-4xl font-bold">Cerita <span className="text-gradient-cyan">Kami</span></h3>
                            <p className="text-[#bdaea0] text-lg leading-relaxed">Leryn Resto didirikan dengan visi sederhana namun kuat: menghadirkan pengalaman kuliner yang tak terlupakan melalui kombinasi sempurna antara cita rasa, kualitas, dan pelayanan.</p>
                            <p className="text-[#bdaea0] text-lg leading-relaxed">Sejak tahun 2015, kami telah melayani ribuan pelanggan dengan dedikasi penuh. Setiap hidangan yang kami sajikan adalah hasil dari passion tim chef kami yang berpengalaman dan komitmen kami terhadap kesempurnaan.</p>
                        </motion.div>
                    </div>
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="mb-20">
                        <h3 className="text-4xl font-bold text-center mb-12">Nilai-Nilai <span className="text-gradient-gold">Kami</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {aboutValues.map((value, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.6
            }} whileHover={{
              y: -10
            }} className="bg-[#3a2a1a]/30 backdrop-blur-sm p-8 rounded-xl border border-[#b38b47]/30 hover:border-[#b38b47] transition-all text-center">
                                <value.icon className="w-12 h-12 text-[#b38b47] mx-auto mb-4" /><h4 className="text-xl font-semibold mb-2 text-gradient-gold">{value.title}</h4><p className="text-[#bdaea0]">{value.description}</p>
                            </motion.div>)}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Galeri Section */}
            <section id="galeri" className="py-20 bg-black/10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4">Galeri <span className="text-gradient-gold">Kami</span></h2>
                        <p className="text-[#bdaea0] text-lg max-w-2xl mx-auto">Jelajahi momen-momen indah dan hidangan lezat di Leryn Resto</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.05,
            duration: 0.5
          }} whileHover={{
            scale: 1.05
          }} className="relative group overflow-hidden rounded-xl cursor-pointer">
                                <div className="aspect-square overflow-hidden bg-[#3a2a1a]/30"><img className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" alt={image.title} src="https://horizons-cdn.hostinger.com/277e5d67-39f4-4d58-8909-dbe2123e94cd/phoenix_09_a_futuristic_elegant_hero_image_for_a_restaurant_we_0-xMSVs.jpg" /></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gradient-gold mb-1">{image.title}</h3>
                                        <p className="text-[#e0dcd3] text-sm">{image.description}</p>
                                    </div>
                                </div>
                            </motion.div>)}
                    </div>
                </div>
            </section>
            
            {/* Kontak Section */}
            <section id="kontak" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4">Hubungi <span className="text-gradient-gold">Kami</span></h2>
                        <p className="text-[#bdaea0] text-lg max-w-2xl mx-auto">Kami siap membantu Anda dengan pertanyaan atau reservasi</p>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="space-y-8">
                            <div className="bg-[#3a2a1a]/30 backdrop-blur-sm p-8 rounded-xl border border-[#b38b47]/30 shadow-lg">
                                <h3 className="text-3xl font-bold mb-6 text-gradient-cyan">Informasi Kontak</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4"><MapPin className="w-6 h-6 text-[#b38b47] mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-lg mb-1 text-[#e0dcd3]">Alamat</h4><p className="text-[#bdaea0]">Jl. Kuliner Raya No. 123<br />Jakarta Selatan, DKI Jakarta 12345</p></div></div>
                                    <div className="flex items-start space-x-4"><Phone className="w-6 h-6 text-[#b38b47] mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-lg mb-1 text-[#e0dcd3]">Telepon</h4><p className="text-[#bdaea0]">+62 8517-9889-988</p></div></div>
                                    <div className="flex items-start space-x-4"><Mail className="w-6 h-6 text-[#b38b47] mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-lg mb-1 text-[#e0dcd3]">Email</h4><p className="text-[#bdaea0]">info@lerynresto.com</p></div></div>
                                    <div className="flex items-start space-x-4"><Clock className="w-6 h-6 text-[#b38b47] mt-1 flex-shrink-0" /><div><h4 className="font-semibold text-lg mb-1 text-[#e0dcd3]">Jam Operasional</h4><p className="text-[#bdaea0]">Senin - Minggu: 10:00 - 22:00</p></div></div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }} className="bg-[#3a2a1a]/30 backdrop-blur-sm p-8 rounded-xl border border-[#b38b47]/30 shadow-lg h-fit lg:h-full">
                            <h3 className="text-3xl font-bold mb-6 text-gradient-cyan">Lokasi Kami</h3>
                            <div className="w-full h-[300px] sm:h-[350px] lg:h-[calc(100%-60px)] rounded-lg overflow-hidden">
                                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=106.82276487350465%2C-6.2297419999999995%2C106.82876586914064%2C-6.225741999999999&layer=mapnik&marker=-6.227742%2C106.82576537132263" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Leryn Resto" className="grayscale-[80%] contrast-125 invert-[90%]"></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>;
};
export default HomePage;