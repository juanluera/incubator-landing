import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Meet Our Team</h1>
          
          {/* Mission Section */}
          <section className="mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We empower entrepreneurs to build successful startups through mentorship, 
              resources, and a supportive community.
            </p>
          </section>

          {/* Team Grid */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/Angel.jpg"
                    alt="Angel - Co-Founder"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <Link href="https://www.linkedin.com/in/juanluera/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Juan Angel Luera</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  MIT alumni with double major in Physics and EECS. Former Amazon engineer and startup co-founder with deep technical expertise in engineering and product development.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/salberdi.jpg"
                    alt="Salberdi - Co-Founder"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <Link href="https://www.linkedin.com/in/salberdi/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Sebastian Alberdi</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  MIT alumni with double major in CS and Physics, currently pursuing Masters in CS. NVIDIA engineer with expertise in AI and high-performance computing.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/AntonioLuera.jpg"
                    alt="Antonio Luera - Partner"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <Link href="https://www.linkedin.com/in/antoniol19/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Juan Antonio Luera</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Co-Founder</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  MIT alumni with double major in Physics and EECS. Microsoft Software Engineer with startup experience and expertise in software development and engineering.
                </p>
              </div>

            </div>
          </section>

          {/* Company Story */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Founded in 2020, we have helped over 100 startups launch and scale their businesses. 
              Our comprehensive program combines technical expertise with business acumen to create the next generation of successful entrepreneurs.
            </p>
          </section>
        </div>
      </div>
    );
  }