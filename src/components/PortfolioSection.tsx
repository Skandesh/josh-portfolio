'use client'
import { Card, CardContent } from "@/components/ui/card";
import React, { useState, useCallback, useRef, useEffect } from "react";

interface PortfolioItemProps {
  title: string;
  subtitle: string;
  videoEmbed?: string;
  views: string;
  likes: string;
  link?: string;
  collaborationLink?: string;
  isPlaying: boolean;
  onPlay: (id: string) => void;
  id: string;
}

const PortfolioItem = ({ 
  title, 
  subtitle, 
  videoEmbed, 
  views, 
  likes, 
  link, 
  collaborationLink,
  isPlaying,
  onPlay,
  id 
}: PortfolioItemProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isPlaying]);

  // Extract brand name from subtitle
  const getBrandName = (subtitle: string) => {
    if (subtitle.includes('Trendhim')) return 'Trendhim';
    if (subtitle.includes('Ultraviolet')) return 'Ultraviolet';
    if (subtitle.includes('@joshuavaughan_')) return '@joshuavaughan_';
    if (subtitle.includes('@bhamupdates')) return '@bhamupdates';
    return subtitle;
  };

  // Get the appropriate link for the brand
  const getBrandLink = (subtitle: string) => {
    if (subtitle.includes('Trendhim')) return 'https://trendhim.co.uk';
    if (subtitle.includes('Ultraviolet')) return 'https://ultraviolet.club';
    if (subtitle.includes('@joshuavaughan_')) return 'https://www.instagram.com/joshuavaughan_/';
    if (subtitle.includes('@bhamupdates')) return 'https://www.instagram.com/bhamupdates/?hl=en';
    return link || collaborationLink;
  };

  const brandName = getBrandName(subtitle);
  const brandLink = getBrandLink(subtitle);

  const handleVideoClick = useCallback(() => {
    if (videoEmbed) {
      onPlay(id);
    }
  }, [videoEmbed, onPlay, id]);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group bg-card/50 backdrop-blur-sm border border-border/50">
      <CardContent className="p-0">
        <div 
          className="relative aspect-[9/16] w-full overflow-hidden bg-black/90 cursor-pointer"
          onClick={handleVideoClick}
        >
          {videoEmbed ? (
            <>
              <video
                ref={videoRef}
                src={videoEmbed}
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-300 ${
                  isPlaying ? 'scale-100' : 'group-hover:scale-105'
                }`}
                style={{ aspectRatio: '9/16' }}
                playsInline
                muted={!isPlaying}
                loop
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-110">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="white" 
                      className="w-8 h-8 ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          ) : null}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`} />
        </div>
        <div className="p-6">
          <h3 className="font-poppins text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
          <div className="text-muted-foreground text-sm">
            {subtitle.split(brandName).map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && (
                  <a
                    href={brandLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {brandName}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-6 mt-4 pt-4 border-t border-border/50">
            <div>
              <p className="text-sm font-medium text-foreground">{views}</p>
              <p className="text-xs text-muted-foreground">views</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{likes}</p>
              <p className="text-xs text-muted-foreground">likes</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioSection = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handleVideoPlay = useCallback((id: string) => {
    setPlayingVideoId(prevId => prevId === id ? null : id);
  }, []);

  return (
    <section id="portfolio" className="section bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">PORTFOLIO</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />
          <p className="text-lg text-muted-foreground">
            Check out some of my best performing content and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioItem
            id="video1"
            title="Street Interview: Message to next person"
            subtitle="Paid Collaboration with @bhamupdates"
            videoEmbed="https://pub-067f04a8863e410797a2b63323a9f0b2.r2.dev/Message%20for%20the%20next%20person.mp4"
            views="300k+"
            likes="50k+"
            link="https://www.instagram.com/bhamupdates/?hl=en"
            isPlaying={playingVideoId === "video1"}
            onPlay={handleVideoPlay}
          />
          <PortfolioItem
            id="video2"
            title="Street Interview: Stunning Watch Giveaway"
            subtitle="Paid Collaboration with Trendhim"
            videoEmbed="https://pub-067f04a8863e410797a2b63323a9f0b2.r2.dev/Nordgreen%20Watch%20Giveaway%20(Street%20interview).MP4"
            views="400k+"
            likes="100k+"
            isPlaying={playingVideoId === "video2"}
            onPlay={handleVideoPlay}
          />
          <PortfolioItem
            id="video3"
            title="Street Interview: Location, Location, Location"
            subtitle="Paid Collaboration with @bhamupdates"
            videoEmbed="https://pub-067f04a8863e410797a2b63323a9f0b2.r2.dev/Guess%20where%20i'm%20from.mp4"
            views="200k+"
            likes="40k+"
            link="https://www.instagram.com/bhamupdates/?hl=en"
            isPlaying={playingVideoId === "video3"}
            onPlay={handleVideoPlay}
          />
          <PortfolioItem
            id="video4"
            title="Fake Proposal Prank with UrbanOutfitters"
            subtitle="Personal Content @joshuavaughan_"
            videoEmbed="https://pub-067f04a8863e410797a2b63323a9f0b2.r2.dev/Fake%20proposal%20prank.mp4"
            views="900k+"
            likes="90k+"
            isPlaying={playingVideoId === "video4"}
            onPlay={handleVideoPlay}
          />
          <PortfolioItem
            id="video5"
            title="Get Ready with me"
            subtitle="Paid Collaboration with Ultraviolet"
            videoEmbed="https://pub-067f04a8863e410797a2b63323a9f0b2.r2.dev/Ultraviolet%20UGC%20Promo%20-%20Get%20ready%20with%20me%20-%20.mp4"
            views="Internal Use"
            likes="Internal Use"
            isPlaying={playingVideoId === "video5"}
            onPlay={handleVideoPlay}
          />
          <PortfolioItem
            id="video6"
            title="Nigerian Auntie gives some brutal advice"
            subtitle="Personal Content @joshuavaughan_"
            videoEmbed="https://pub-067f04a8863e410797a2b63323a9f0b2.r2.dev/Auntie%20advice.mp4"
            views="200k+"
            likes="50k+"
            link="https://www.tiktok.com/@joshuavaughan_"
            isPlaying={playingVideoId === "video6"}
            onPlay={handleVideoPlay}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
