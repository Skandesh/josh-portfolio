import { Card, CardContent } from "@/components/ui/card";

interface PortfolioItemProps {
  title: string;
  subtitle: string;
  videoEmbed?: string;
  views: string;
  likes: string;
  link?: string;
}

const PortfolioItem = ({ title, subtitle, videoEmbed, views, likes, link }: PortfolioItemProps) => {
  // Check if subtitle contains a URL or handle
  const isSubtitleUrl = subtitle.includes('http');
  const isHandle = subtitle.includes('@');
  const subtitleText = isSubtitleUrl ? subtitle.split('https://')[1] : subtitle;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <CardContent className="p-0">
        <div className="relative h-[300px] w-full overflow-hidden">
          {videoEmbed ? (
            <iframe
              src={videoEmbed}
              width="100%"
              height="100%"
              allow="autoplay"
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="p-5">
          <h3 className="font-poppins text-xl font-semibold">{title}</h3>
          {isSubtitleUrl ? (
            <a 
              href={subtitle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {subtitleText}
            </a>
          ) : isHandle ? (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {subtitle}
            </a>
          ) : (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
          <div className="flex gap-4 mt-3">
            <div>
              <p className="text-sm font-medium">{views}</p>
              <p className="text-xs text-muted-foreground">views</p>
            </div>
            <div>
              <p className="text-sm font-medium">{likes}</p>
              <p className="text-xs text-muted-foreground">likes</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">PORTFOLIO. </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />
          <p className="text-lg text-muted-foreground">
            Check out some of my best performing content and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioItem
            title="Street Interview: Message to next person"
            subtitle="Paid Collaboration with @bhamupdates"
            videoEmbed="https://drive.google.com/file/d/1HrvTB8Wr6fGqJZGAtSd_4aoOBWdGQ9FX/preview"
            views="300k+"
            likes="50k+"
            link="https://www.instagram.com/bhamupdates/?hl=en"
          />
          <PortfolioItem
            title="Street Interview: Stunning Watch Giveaway"
            subtitle="Paid Collaboration with https://www.trendhim.com/"
            videoEmbed="https://drive.google.com/file/d/1U8wvwSJ3CFp_u3pKYqJu-ldE03Ya-WWh/preview"
            views="400k+"
            likes="100k+"
            link="https://www.trendhim.co.uk"
          />
          <PortfolioItem
            title="Street Interview: Location, Location, Location"
            subtitle="Paid Collaboration with @bhamupdates"
            videoEmbed="https://drive.google.com/file/d/19d9U2g-jQlfmWyTyTtFTODiNjPqNbq_u/preview"
            views="200k+"
            likes="40k+"
            link="https://www.instagram.com/bhamupdates/?hl=en"
          />
          <PortfolioItem
            title="Fake Proposal Prank with UrbanOutfitters"
            subtitle="Personal Content @joshuavaughan_"
            videoEmbed="https://drive.google.com/file/d/1XyG94q7_4sfUl4s2ki0f9lAQuelMEFo8/preview"
            views="900k+"
            likes="90k+"
            link="https://www.instagram.com/joshuavaughan_/"
          />
          <PortfolioItem
            title="Get Ready with me"
            subtitle="Paid Collaboration with https://www.ultraviolet.club/"
            videoEmbed="https://drive.google.com/file/d/1-tctQf9d0snJm-_A1IR-oGb5CJQuhWT2/preview"
            views="Internal Use"
            likes="Internal Use"
            link="https://www.ultraviolet.club/"
          />
          <PortfolioItem
            title="Nigerian Auntie gives some brutal advice"
            subtitle="Personal Content @joshuavaughan_"
            videoEmbed="https://drive.google.com/file/d/1sF0E8HzyJ0PVFSV5mkRDjv-ui6i9j4mf/preview"
            views="200k+"
            likes="50k+"
            link="https://www.tiktok.com/@joshuavaughan_"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
