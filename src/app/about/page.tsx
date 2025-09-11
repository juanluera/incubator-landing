export default function About() {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Our Incubator</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                We empower entrepreneurs to build successful startups through mentorship, 
                resources, and a supportive community.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2020, we&apos;ve helped over 100 startups launch and scale their businesses. 
                Our comprehensive program combines technical expertise with business acumen.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-lg text-gray-600">
                Our experienced mentors come from successful startups, Fortune 500 companies, 
                and leading venture capital firms.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }