import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            {/* Logo Icon */}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/90 text-white mr-1 animate-bounce-slow shadow-md font-extrabold text-xl font-poppins">
              J
            </span>
            <div className="flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:drop-shadow-[0_2px_8px_rgba(255,140,0,0.15)]">
              <span className="font-poppins text-2xl font-extrabold text-primary tracking-tight transition-colors duration-200 leading-none">socials</span>
              <span className="font-[cursive] text-sm text-black-500 italic -mt-1 ml-1 animate-fade-in-up">by josh</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#about" className="font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">About</Link>
          <Link href="/#portfolio" className="font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Portfolio</Link>
          <Link href="/#services" className="font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Services</Link>
          <Link href="/#contact" className="font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="default" asChild>
            <Link href="/#contact">Let's Talk</Link>
          </Button>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Simple menu icon component
function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export default Header;
