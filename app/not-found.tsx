import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-6 text-center">
      <h2 className="text-4xl font-black text-primary mb-4">404 - Page Not Found</h2>
      <p className="text-on-surface-variant mb-8">
        The destination you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md"
      >
        Return Home
      </Link>
    </div>
  );
}
