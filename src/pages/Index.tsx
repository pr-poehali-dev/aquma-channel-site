import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

const albums = [
  {
    title: "Digital Dreams",
    cover: "https://cdn.poehali.dev/projects/2880a57d-6ebc-41f6-91c5-f0314d97e107/files/cb65d636-4bb5-4290-8883-9ae1e5f0cd1b.jpg",
    year: "2024"
  },
  {
    title: "Neon Nights",
    cover: "https://cdn.poehali.dev/projects/2880a57d-6ebc-41f6-91c5-f0314d97e107/files/718268e7-fdf0-42f6-86a1-c816ac0f928c.jpg",
    year: "2023"
  },
  {
    title: "Ethereal",
    cover: "https://cdn.poehali.dev/projects/2880a57d-6ebc-41f6-91c5-f0314d97e107/files/6460b1c2-a761-4e6f-9269-32b4274589ed.jpg",
    year: "2023"
  }
];

const tracks = [
  { title: "Cosmic Flow", duration: "3:42", album: "Digital Dreams" },
  { title: "Midnight Pulse", duration: "4:15", album: "Neon Nights" },
  { title: "Aurora", duration: "3:58", album: "Ethereal" },
  { title: "Starlight Echo", duration: "4:30", album: "Digital Dreams" },
  { title: "Electric Soul", duration: "3:25", album: "Neon Nights" }
];

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  const handlePrevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 space-y-20">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
            AQQUMA
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Музыкант • Артист • Творец
          </p>
        </div>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground animate-fade-in">
            🎵 Музыкальный плеер
          </h2>
          <Card className="bg-card/80 backdrop-blur-lg border-primary/20 p-6 md:p-8 animate-scale-in">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-glow">
                <Icon name={isPlaying ? "Disc3" : "Music"} size={64} className="text-white" />
              </div>
              
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{tracks[currentTrack].title}</h3>
                <p className="text-muted-foreground mb-4">{tracks[currentTrack].album} • {tracks[currentTrack].duration}</p>
                
                <div className="bg-muted/30 h-2 rounded-full mb-6 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all ${isPlaying ? 'w-1/3' : 'w-0'}`}
                  ></div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={handlePrevTrack}
                    className="hover:bg-primary/20"
                  >
                    <Icon name="SkipBack" size={24} />
                  </Button>
                  
                  <Button 
                    size="icon"
                    onClick={handlePlayPause}
                    className="w-14 h-14 bg-gradient-to-r from-primary to-secondary hover:scale-110 transition-transform"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={28} />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={handleNextTrack}
                    className="hover:bg-primary/20"
                  >
                    <Icon name="SkipForward" size={24} />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              {tracks.map((track, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentTrack(index)}
                  className={`
                    flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all
                    ${index === currentTrack ? 'bg-primary/20 border border-primary/30' : 'hover:bg-muted/20'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground w-6">{index + 1}</span>
                    <div>
                      <p className="font-medium text-foreground">{track.title}</p>
                      <p className="text-sm text-muted-foreground">{track.album}</p>
                    </div>
                  </div>
                  <span className="text-muted-foreground">{track.duration}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground animate-fade-in">
            💿 Альбомы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            {albums.map((album, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card/60 backdrop-blur-lg border-primary/20 cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={album.cover} 
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{album.title}</h3>
                  <p className="text-muted-foreground">{album.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground animate-fade-in">
            🔗 Соцсети
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
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
        </section>

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
