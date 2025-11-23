import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-md mx-auto text-center px-4">

        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-900 dark:text-white opacity-20">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors font-medium"
          >
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
            <Link
              href="/about"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/apply"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>

        {/* Tensor Branding */}
        <div className="mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Lost in space? Let <span className="font-semibold">Tensor</span> guide you back.
          </p>
        </div>

      </div>
    </div>
  );
}
