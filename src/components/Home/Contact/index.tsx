import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { Card } from '@/components/Interface/Card';

export default function Contact() {
  return (
    <main className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='pt-32 pb-16 px-4 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent -z-10' />
        <div className='container mx-auto'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              {`Let's Build Something`}
              <span className='block bg-gradient-to-r from-brandLight to-violet-600 bg-clip-text h-16 text-transparent'>
                {` Amazing Together`}
              </span>
            </h1>
            <p className='text-xl text-muted-foreground'>
              {`Have a project in mind? We'd love to discuss how we can help bring
              your vision to life.`}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 px-4'>
        <div className='container mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
            <Card className='p-8'>
              <h2 className='text-2xl font-bold mb-6'>{`Send Us a Message`}</h2>
              <ContactForm />
            </Card>

            <div className='space-y-8'>
              <div>
                <h2 className='text-2xl font-bold mb-6'>{`Contact Information`}</h2>
                <ContactInfo />
              </div>

              <Card className='p-6 bg-primary text-primary-foreground'>
                <h3 className='text-xl font-semibold mb-2'>
                  {` Free Consultation`}
                </h3>
                <p className='text-primary-foreground/90'>
                  {` Book a free 30-minute consultation to discuss your project
                  requirements and explore how we can help your business grow.`}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
