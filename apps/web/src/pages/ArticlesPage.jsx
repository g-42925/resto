import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, BookOpen, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from 'react-router-dom';

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Bumbu Dasar Merah: Pedas Menggugah Selera",
      category: "Bumbu Dasar",
      date: "23 Nov 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1596627647426-2db54290924b",
      excerpt: "Rahasia di balik warna merah menyala dan rasa pedas balado serta sambal goreng.",
      content: `Bumbu dasar merah adalah salah satu dari tiga pilar utama masakan tradisional Indonesia. Terbuat dari perpaduan cabai merah (keriting atau besar), bawang merah, bawang putih, dan garam. Seringkali ditambahkan sedikit terasi atau tomat untuk memperkaya rasa.

      Penggunaan bumbu ini sangat luas, mulai dari Nasi Goreng, Sambal Goreng Ati, Balado Terong, hingga Rendang (sebagai campuran). Kunci dari bumbu merah yang sedap adalah menumisnya hingga benar-benar matang dan minyaknya keluar (tanak), sehingga bau langu cabai hilang sepenuhnya.`
    },
    {
      id: 2,
      title: "Bumbu Dasar Putih: Gurih Nan Lembut",
      category: "Bumbu Dasar",
      date: "22 Nov 2023",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1615485500704-3e995fad3b90",
      excerpt: "Fondasi utama untuk masakan gurih seperti Opor, Lodeh, dan tumisan sayur.",
      content: `Berbeda dengan saudaranya yang pedas, Bumbu Dasar Putih menghadirkan rasa gurih yang creamy dan aroma yang harum. Komposisi utamanya adalah bawang merah, bawang putih, kemiri (yang sudah disangrai), dan ketumbar.

      Bumbu ini adalah nyawa dari hidangan seperti Opor Ayam, Sayur Lodeh, Gudeg, hingga Semur. Kemiri memegang peranan penting di sini sebagai pengental alami dan pemberi rasa 'nutty' yang khas.`
    },
    {
      id: 3,
      title: "Bumbu Dasar Kuning: Aroma Kunyit yang Khas",
      category: "Bumbu Dasar",
      date: "21 Nov 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5",
      excerpt: "Warna emas dan aroma tanah yang khas untuk Soto, Pesmol, dan Kari.",
      content: `Bumbu Dasar Kuning pada dasarnya adalah Bumbu Dasar Putih yang ditambahkan kunyit dan kadang sedikit jahe atau lengkuas. Kunyit tidak hanya memberikan warna kuning cerah yang menggugah selera, tetapi juga berfungsi sebagai antibakteri alami yang membantu mengawetkan masakan.

      Hidangan populer yang menggunakan bumbu ini antara lain Soto Ayam, Ikan Pesmol, Ayam Goreng (ungkep), dan Acar Kuning. Tips: Bakar kunyit sebelum dihaluskan untuk menghilangkan rasa getir dan memperkuat warna.`
    },
    {
      id: 4,
      title: "Kluwek: Emas Hitam Rawon Jawa Timur",
      category: "Rempah Eksotis",
      date: "20 Nov 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556216675-1058c38e6d50", // Replacement/generic spice
      excerpt: "Mengenal biji kepayang yang difermentasi, kunci kelezatan Rawon yang legendaris.",
      content: `Kluwek (Pangium edule) adalah bumbu unik yang memberikan warna hitam pekat dan rasa gurih sedikit asam pada Rawon. Biji ini sebenarnya beracun (mengandung asam sianida) saat segar, namun menjadi bahan masakan lezat setelah melalui proses fermentasi yang panjang.

      Selain Rawon, kluwek juga digunakan dalam masakan Brongkos (Yogyakarta) dan Konro (Makassar). Memilih kluwek yang baik memerlukan keahlian khusus: dikocok harus berbunyi (tidak kopong) dan daging buahnya berwarna hitam pekat, bukan abu-abu.`
    },
    {
      id: 5,
      title: "Andaliman: Merica Batak yang Menggetarkan Lidah",
      category: "Rempah Khas",
      date: "19 Nov 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1599828346675-37cb384793c2",
      excerpt: "Sensasi rasa getir dan aroma jeruk dari tanah Sumatera Utara.",
      content: `Andaliman (Zanthoxylum acanthopodium) sering disebut sebagai "Merica Batak". Rempah ini masih satu keluarga dengan Szechuan Pepper. Ciri khasnya adalah sensasi 'mati rasa' atau getir di lidah (sensasi trigeminal) disertai aroma sitrus yang sangat segar.

      Andaliman adalah bumbu wajib untuk Arsik Ikan Mas dan Saksang. Penggunaannya biasanya dihaluskan bersama cabai rawit dan bawang, menciptakan profil rasa yang meledak-ledak namun segar.`
    },
    {
      id: 6,
      title: "Kecombrang: Si Cantik Pembawa Aroma",
      category: "Bunga & Rempah",
      date: "18 Nov 2023",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1623094066144-5c54593769c7", // Generic flower/spice
      excerpt: "Bunga merah muda yang memberikan aroma wangi segar pada Sambal Matah.",
      content: `Kecombrang, honje, atau torch ginger adalah bunga yang sering dimanfaatkan sebagai bumbu penyedap. Aromanya sangat khas: perpaduan antara jahe, serai, dan lemon yang kuat.

      Hampir seluruh bagian tanaman ini bisa dimakan, tapi bunganya yang paling populer. Sering diiris tipis untuk campuran Sambal Matah Bali, Pecel, atau Laksa. Kecombrang juga efektif menghilangkan bau amis pada olahan ikan laut.`
    },
    {
      id: 7,
      title: "Pala: Harta Karun dari Banda",
      category: "Rempah Sejarah",
      date: "17 Nov 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1509358271058-acd25cd87d09",
      excerpt: "Rempah yang pernah lebih mahal dari emas dan mengubah sejarah dunia.",
      content: `Buah Pala (Nutmeg) dari Kepulauan Banda pernah menjadi komoditas paling dicari di dunia, memicu penjelajahan samudra bangsa Eropa. Pala memberikan aroma hangat, manis, dan sedikit pedas yang sangat elegan.

      Dalam masakan Indonesia, pala (bijinya) digunakan dalam semur, sop buntut, dan berbagai gulai. Selain bijinya, selaput merah yang menyelimuti biji pala (disebut Fuli atau Mace) juga digunakan sebagai rempah dengan aroma yang lebih halus.`
    },
    {
      id: 8,
      title: "Bunga Lawang: Si Bintang Aroma",
      category: "Rempah Kering",
      date: "16 Nov 2023",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
      excerpt: "Rempah berbentuk bintang yang menyempurnakan kuah bakso dan gulai.",
      content: `Bunga Lawang atau Star Anise memiliki bentuk bintang delapan yang cantik. Aromanya mirip dengan adas manis (anise) tetapi lebih kuat dan sedikit manis.

      Rempah ini sangat populer dalam masakan Aceh, Minang, dan Jawa. Sering dimasukkan utuh ke dalam rebusan kuah Gulai, Kari, atau Sop Buntut untuk memberikan aroma manis yang hangat. Bunga lawang juga merupakan salah satu komponen bubuk 'Ngo Hiong' (Five Spice Powder).`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Artikel Bumbu Nusantara - Leryn Resto</title>
        <meta name="description" content="Jelajahi kekayaan rempah dan bumbu masakan Nusantara Indonesia di Leryn Resto." />
      </Helmet>

      <div className="min-h-screen bg-[#0f0a06] pt-24 pb-20">
        {/* Header */}
        <div className="container mx-auto px-4 mb-16">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/')}
            className="flex items-center text-[#b38b47] hover:text-[#e6c98c] mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Jejak Rempah <span className="text-gradient-gold">Nusantara</span>
            </h1>
            <p className="text-[#bdaea0] text-lg">
              Mengungkap rahasia di balik kelezatan masakan Indonesia melalui bumbu-bumbu legendaris yang kaya akan sejarah dan cita rasa.
            </p>
          </motion.div>
        </div>

        {/* Grid Artikel */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#1a110a] border border-[#b38b47]/20 rounded-xl overflow-hidden hover:border-[#b38b47] transition-all group flex flex-col h-full"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#b38b47] border border-[#b38b47]/30">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-[#86c2c9] mb-3 space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#e0dcd3] mb-3 line-clamp-2 group-hover:text-[#b38b47] transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#bdaea0] text-sm line-clamp-3 mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  <Button 
                    variant="outline" 
                    className="w-full border-[#b38b47]/50 text-[#e0dcd3] hover:bg-[#b38b47] hover:text-[#1a110a] transition-colors group-hover:border-[#b38b47]"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Baca Selengkapnya
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Baca Artikel */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="bg-[#1a110a] border-[#b38b47]/50 text-[#e0dcd3] max-w-2xl max-h-[80vh] p-0 overflow-hidden">
          {selectedArticle && (
            <div className="flex flex-col h-full">
              <div className="h-64 w-full flex-shrink-0 relative">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a] to-transparent"></div>
                <Button 
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 rounded-full p-2 h-auto w-auto border-none"
                  onClick={() => setSelectedArticle(null)}
                >
                  <X className="w-5 h-5 text-white" />
                </Button>
              </div>
              
              <ScrollArea className="flex-grow p-6 max-h-[calc(80vh-16rem)]">
                <div className="mb-2 flex items-center space-x-2">
                    <span className="px-2 py-1 bg-[#b38b47]/20 text-[#b38b47] text-xs rounded border border-[#b38b47]/30">
                        {selectedArticle.category}
                    </span>
                    <span className="text-xs text-slate-400">• {selectedArticle.date}</span>
                </div>
                <DialogTitle className="text-2xl font-bold text-gradient-gold mb-4">
                  {selectedArticle.title}
                </DialogTitle>
                <DialogDescription className="text-[#bdaea0] text-base leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </DialogDescription>
              </ScrollArea>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArticlesPage;