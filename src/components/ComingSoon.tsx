import { Link } from '@/i18n/routing';

interface ComingSoonProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ComingSoon({ title, description, icon = "🚀" }: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background transition-colors">
      <div className="max-w-md mx-auto text-center px-4">

        {/* Icon */}
        <div className="mb-8">
          <div className="text-6xl mb-4">{icon}</div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Coming Soon
          </h1>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-foreground/80 text-lg">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-colors font-medium"
          >
            Back to Home
          </Link>

          <Link
            href="/apply"
            className="block text-primary hover:underline transition-colors"
          >
            Join our waitlist for updates
          </Link>
        </div>

        {/* Tensor Branding */}
        <div className="mt-12">
          <p className="text-sm text-foreground/60">
            Building the future at <span className="font-semibold">Tensor</span>
          </p>
        </div>

      </div>
    </div>
  );
}
