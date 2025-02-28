// footer.tsx
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white mt-12 py-8'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Business Name */}
        <div className='text-center text-2xl font-bold mb-4'>
          Business Interaspect
        </div>

        {/* Links */}
        {/* <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-x-8 sm:space-y-0 mb-6'>
          <a href='#about' className='hover:text-brandLight'>
            About
          </a>
          <a href='#services' className='hover:text-brandLight'>
            Services
          </a>
          <a href='#contact' className='hover:text-brandLight'>
            Contact
          </a>
          <a href='#privacy' className='hover:text-brandLight'>
            Privacy Policy
          </a>
        </div> */}

        {/* Copyright */}
        <div className='text-center text-sm text-gray-400 pb-1'>
          {` 705 Progress Ave Suite 110, Scarborough, ON M1H 2X1 `}
        </div>
        <div className='text-center text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Business Interaspect. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
