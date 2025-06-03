import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container pt-10 pb-8 md:pt-20 md:pb-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 fade-in animate-fade-in-up">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-500">
              You build the brand.{' '}
              <span className="text-primary">I build the following.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground transition-all duration-500">
              Where every viewer is a potential customer, I will turn clicks into currency for your business,
              working with you every step of the way. Scroll to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild className="group transition-transform duration-200 hover:scale-105 hover:shadow-xl">
                <a href="#portfolio" className="flex items-center gap-2">
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="transition-transform duration-200 hover:scale-105 hover:shadow-lg">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-8 mt-8">
            <div className="w-[160px] h-[160px] rounded-2xl overflow-hidden shadow-xl transform -rotate-6 transition-transform duration-300 hover:scale-105 bg-black">
              <img
                src="https://ext.same-assets.com/1142796447/3358298053.jpeg"
                alt="Content Grid"
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="w-[160px] h-[160px] rounded-2xl overflow-hidden shadow-xl transform rotate-3 z-20 transition-transform duration-300 hover:scale-105 bg-black">
              <img
                src="https://ext.same-assets.com/1142796447/3700919059.jpeg"
                alt="Joshua Vaughan Portrait"
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="w-[160px] h-[160px] rounded-2xl overflow-hidden shadow-xl transform -rotate-6 transition-transform duration-300 hover:scale-105 bg-black">
              <video
                src="https://res.cloudinary.com/ds3ltaeul/video/upload/v1746631686/josh_vid_iljqxw.mp4"
                poster="https://res.cloudinary.com/ds3ltaeul/image/upload/v1746631684/josh_nnxjca.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
        <div className="mt-36 grid grid-cols-1 md:grid-cols-3 gap-4 text-center fade-in">
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h3 className="font-poppins text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">5M</h3>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">Total Views</p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h3 className="font-poppins text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">36K</h3>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">Total Followers</p>
          </div>
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h3 className="font-poppins text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">1.3M</h3>
            <p className="text-muted-foreground uppercase tracking-wider text-sm">Total Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
