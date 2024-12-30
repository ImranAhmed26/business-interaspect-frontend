import Footer from '@/components/Footer';
import PrimaryNavbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrimaryNavbar />
      <div className='grid grid-rows-[20px_1fr_20px] justify-items-center p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]'>
        <main className=' lg:w-[] flex flex-col sm:items-start  gap-8 row-start-2 '>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
