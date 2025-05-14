import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="w-14 h-14 mb-4 flex items-center justify-center text-primary">
          {icon}
        </div>
        <CardTitle className="font-poppins text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground/80 text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

// Modern 3D-style icon components
const ManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform hover:scale-110 transition-transform">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="currentColor" fillOpacity="0.1" />
    <circle cx="9" cy="7" r="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="currentColor" fillOpacity="0.1" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

const ContentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform hover:scale-110 transition-transform">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" fill="currentColor" fillOpacity="0.1" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const CoachingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform hover:scale-110 transition-transform">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

const UgcIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform hover:scale-110 transition-transform">
    <path d="M23 7l-7 5 7 5V7z" fill="currentColor" fillOpacity="0.1" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-muted">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">SERVICES</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />
          <p className="text-lg text-muted-foreground">
            The big four. Learn which best suits your business needs and let's grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Social Media Management"
            description="By executing everything from strategy to content, I will establish your business as the internet's 'one to watch.' With regular growth reports and check-ins, you'll stay informed as I produce results."
            icon={<ManagementIcon />}
          />
          <ServiceCard
            title="Content Creation"
            description="From ideation to creation, I will produce original, engaging content that turns clicks into customers with your vision in mind. Perfect if you're happy with your management but need new high-quality content."
            icon={<ContentIcon />}
          />
          <ServiceCard
            title="Coaching"
            description="You've got the power to execute your vision but something isn't working? Together, we'll create actionable steps to reach your goals with confidence and real results."
            icon={<CoachingIcon />}
          />
          <ServiceCard
            title="User-Generated Content (UGC)"
            description="Need an authentic face to promote your brand? I, or a trusted creator, will feature in your content with high-energy performance skills. Whether it's a cheeky lip-sync or street interview, we'll make sure to meet your needs."
            icon={<UgcIcon />}
          />
        </div>
        <p className="text-center mt-8 text-muted-foreground">Rates available upon request</p>
      </div>
    </section>
  );
};

export default ServicesSection;
