import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const socialLinks = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/4daswPFeURAWrQYfV7mmOb?si=XQtlSk9WS_eCb9D3qSOl1Q",
    icon: "Music",
    color: "from-green-500 to-green-600",
    hoverColor: "hover:shadow-green-500/50"
  },
  {
    name: "Яндекс.Музыка",
    url: "https://music.yandex.ru/artist/25211538?utm_source=web&utm_medium=copy_link",
    icon: "Music2",
    color: "from-yellow-500 to-red-500",
    hoverColor: "hover:shadow-yellow-500/50"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/aqqumaz?igsh=MWR6eW52dHFjMnR4dA==",
    icon: "Instagram",
    color: "from-purple-500 via-pink-500 to-orange-500",
    hoverColor: "hover:shadow-pink-500/50"
  },
  {
    name: "Telegram",
    url: "https://t.me/PoDHAPKOTOU",
    icon: "Send",
    color: "from-blue-400 to-blue-600",
    hoverColor: "hover:shadow-blue-500/50"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@rimashiroo?_r=1&_t=ZP-92y8FCTHEUR",
    icon: "Video",
    color: "from-cyan-400 to-pink-600",
    hoverColor: "hover:shadow-cyan-500/50"
  },
  {
    name: "SoundCloud",
    url: "https://on.soundcloud.com/IbessdSo69qsa5XGwb",
    icon: "AudioLines",
    color: "from-orange-500 to-orange-600",
    hoverColor: "hover:shadow-orange-500/50"
  },
  {
    name: "VK",
    url: "https://vk.com/aqqumar",
    icon: "MessageCircle",
    color: "from-blue-500 to-blue-700",
    hoverColor: "hover:shadow-blue-600/50"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@aqquma?si=DpsSlh5OD0tAyQeJ",
    icon: "Youtube",
    color: "from-red-500 to-red-700",
    hoverColor: "hover:shadow-red-500/50"
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/aqqumaa",
    icon: "Twitter",
    color: "from-gray-700 to-black",
    hoverColor: "hover:shadow-gray-500/50"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/files/digicamfx-original-2025-12-18T22-29-36.jpg)',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
            AQQUMA
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Музыкант • Артист • Творец
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <Card className={`
                relative overflow-hidden p-6 h-full
                bg-gradient-to-br ${link.color}
                border-0 transition-all duration-500
                hover:scale-105 hover:shadow-2xl ${link.hoverColor}
                cursor-pointer
                animate-fade-in
              `}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[120px]">
                  <div className="mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon 
                      name={link.icon as any} 
                      size={40} 
                      className="text-white drop-shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white drop-shadow-lg group-hover:tracking-wide transition-all duration-300">
                    {link.name}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground">
            Слушай, следи, подписывайся ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
