import {Link} from '@/i18n/routing';

interface ComingSoonProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ComingSoon({ title, description, icon = "🚀" }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-md mx-auto text-center px-4">
        
        {/* Icon */}
        <div className="mb-8">
          <div className="text-6xl mb-4">{icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h1>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors font-medium"
          >
            Back to Home
          </Link>
          
          <Link
            href="/waitlist"
            className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Join our waitlist for updates
          </Link>
        </div>

        {/* Tensor Branding */}
        <div className="mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Building the future at <span className="font-semibold">Tensor</span>
          </p>
        </div>

      </div>
    </div>
  );
}
