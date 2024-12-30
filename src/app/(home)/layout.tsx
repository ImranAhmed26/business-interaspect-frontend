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
      <main className='flex flex-col items-center px-4 py-20'>
        <div className='max-w-7xl'>{children}</div>
      </main>
      <Footer />
    </>
  );
}
