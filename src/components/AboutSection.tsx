const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted relative overflow-hidden">
      {/* Decorative images */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-2xl overflow-hidden shadow-xl transform -rotate-6 transition-transform duration-300 hover:scale-105 bg-black">
          <img
            src="https://res.cloudinary.com/ds3ltaeul/image/upload/v1747071810/Smiley_open_mouth_px8n9c.jpg"
            alt="Content Creation"
            className="object-cover w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-2xl overflow-hidden shadow-xl transform rotate-6 transition-transform duration-300 hover:scale-105 bg-black">
          <img
            src="https://res.cloudinary.com/ds3ltaeul/image/upload/v1747072841/Smiley_short_hair-min_gkrz8g.jpg"
            alt="Social Media"
            className="object-cover w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-2xl overflow-hidden shadow-xl transform rotate-3 transition-transform duration-300 hover:scale-105 bg-black">
          <img
            src="https://res.cloudinary.com/ds3ltaeul/image/upload/v1747072857/Big_smile_short_hair-min_gg5q8x.jpg"
            alt="Community"
            className="object-cover w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-2xl overflow-hidden shadow-xl transform -rotate-3 transition-transform duration-300 hover:scale-105 bg-black">
          <img
            src="https://res.cloudinary.com/ds3ltaeul/image/upload/v1747071810/Fun_Smiley_Pearls_pic_wemstt.jpg"
            alt="Strategy"
            className="object-cover w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">ABOUT</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center backdrop-blur-md bg-white/50 dark:bg-black/80 p-8 rounded-2xl shadow-xl border border-white/20">
          <p className="text-lg leading-relaxed">
            For 5 years as a social media manager,
            I've focused on building a personal brand through
            engaging & relatable content; establishing brand
            partnerships and successfully growing a
            community of fans that wait for every video,
            commenting because <em>they just can't help it</em>.
          </p>

          <p className="text-lg leading-relaxed">
            Most social media managers think they have what
            it takes simply because they're young, online
            and know what a hashtag is.
          </p>

          <p className="text-lg leading-relaxed">
            Me? I've dealt with the weird comments. The planning.
            The content brainstorms. Which means your brand won't be
            my first rodeo and you can feel assured that my
            'people first, business second' mindset will be what you need.
          </p>

          <p className="text-lg leading-relaxed font-medium">
            What are you waiting for? Check out my contact info below.
            Let's call and discuss your business needs and how to meet them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
