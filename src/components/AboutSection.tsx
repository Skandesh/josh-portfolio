const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">ABOUT</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-10" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
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
