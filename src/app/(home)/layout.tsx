import Footer from '@/components/Footer';
import PrimaryNavbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <PrimaryNavbar />
      </header>

      <main className='flex-grow px-4 py-20'>
        <div className='max-w-7xl mx-auto'>{children}</div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
