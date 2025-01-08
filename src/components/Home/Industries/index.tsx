interface IndustryHeroProps {
  title: string;
  description: string;
  image: string;
}

function IndustryHero({ title, description, image }: IndustryHeroProps) {
  return (
    <section className='pt-32 pb-16 px-4 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10' />
      <div className='container mx-auto'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
            {title}
          </h1>
          <p className='text-xl text-muted-foreground'>{description}</p>
        </div>
        <div className='mt-12 relative rounded-2xl overflow-hidden aspect-[21/9]'>
          <img src={image} alt={title} className='object-cover w-full h-full' />
        </div>
      </div>
    </section>
  );
}

export default IndustryHero;
