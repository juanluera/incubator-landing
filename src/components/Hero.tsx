import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero-section py-20 text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900 drop-shadow-lg">
                Something Big is Coming
            </h1>
            <p className="text-xl mb-8 text-gray-700 drop-shadow-md">
                Where talent meets opportunity. Be part of the next wave.
            </p>
        </section>
    );
}