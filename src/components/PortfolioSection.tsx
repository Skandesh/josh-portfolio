import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface PortfolioItemProps {
  title: string;
  subtitle: string;
  image: string;
  views: string;
  likes: string;
  link?: string;
}

const PortfolioItem = ({ title, subtitle, image, views, likes, link }: PortfolioItemProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <CardContent className="p-0">
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            style={{ objectPosition: 'center' }}
          />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
            >
              <span className="text-white font-medium">View Project</span>
            </a>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-poppins text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
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
            image="https://ext.same-assets.com/1142796447/743690694.jpeg"
            views="300k+"
            likes="50k+"
            link="https://www.instagram.com/bhamupdates/?hl=en"
          />
          <PortfolioItem
            title="Street Interview: Stunning Watch Giveaway"
            subtitle="Paid Collaboration with https://www.trendhim.com/"
            image="https://ext.same-assets.com/1142796447/267723496.png"
            views="400k+"
            likes="100k+"
            link="https://www.trendhim.co.uk"
          />
          <PortfolioItem
            title="Street Interview: Location, Location, Location"
            subtitle="Paid Collaboration with @bhamupdates"
            image="https://ext.same-assets.com/1142796447/428964541.jpeg"
            views="200k+"
            likes="40k+"
            link="https://www.instagram.com/bhamupdates/?hl=en"
          />
          <PortfolioItem
            title="Fake Proposal Prank with UrbanOutfitters"
            subtitle="Personal Content @joshuavaughan_"
            image="https://ext.same-assets.com/1142796447/4088831637.jpeg"
            views="900k+"
            likes="90k+"
            link="https://www.instagram.com/joshuavaughan_/"
          />
          <PortfolioItem
            title="Get Ready with me"
            subtitle="Paid Collaboration with https://www.ultraviolet.club/"
            image="https://ext.same-assets.com/1142796447/1804565266.jpeg"
            views="Internal Use"
            likes="Internal Use"
            link="https://www.ultraviolet.club/"
          />
          <PortfolioItem
            title="Nigerian Auntie gives some brutal advice"
            subtitle="Personal Content @joshuavaughan_"
            image="https://ext.same-assets.com/1142796447/2073204187.jpeg"
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
