export default function Programs() {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Our Programs</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-xl font-semibold mb-4">Early Stage Program</h2>
              <p className="text-gray-600 mb-4">
                Perfect for idea-stage startups looking to validate their concept and build an MVP.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 3-month intensive program</li>
                <li>• $25,000 seed funding</li>
                <li>• Weekly mentorship sessions</li>
                <li>• Access to co-working space</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-xl font-semibold mb-4">Growth Program</h2>
              <p className="text-gray-600 mb-4">
                For startups with traction looking to scale and raise Series A funding.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• 6-month program</li>
                <li>• $100,000 investment</li>
                <li>• Investor connections</li>
                <li>• Marketing & sales support</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h2 className="text-xl font-semibold mb-4">Corporate Innovation</h2>
              <p className="text-gray-600 mb-4">
                Partner with established companies to develop innovative solutions.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Custom program length</li>
                <li>• Corporate partnerships</li>
                <li>• Industry expertise</li>
                <li>• Pilot opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }