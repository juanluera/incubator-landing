export default function Programs() {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">The Tensor Program</h1>
          
          {/* Program Overview */}
          <section className="mb-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              A competitive non-profit accelerator program designed to identify and support the most promising founders across LATAM. 
              We believe in merit-based selection and empowering exceptional talent.
            </p>
          </section>

          {/* Program Stages */}
          <div className="space-y-8">
            
            {/* Stage 1: Application */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Application & Network Sourcing</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We collect applications from talented students and professionals across LATAM through our established MIT alumni network.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• Submit your startup idea with market rationale</li>
                <li>• Demonstrate product-market fit potential</li>
                <li>• Network-based referrals prioritized</li>
                <li>• Rolling applications accepted</li>
              </ul>
            </div>

            {/* Stage 2: Sprint Challenge */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2-Week Intensive Sprint</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Selected teams get two weeks to make maximum progress building their company. This is where execution meets ambition.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• Build MVP or significant prototype</li>
                <li>• Validate market assumptions</li>
                <li>• Competitive environment fosters excellence</li>
                <li>• Top 100 performers advance</li>
              </ul>
            </div>

            {/* Stage 3: Selection */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Elite Interview Process</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Top 100 teams are interviewed and evaluated for commitment, scalability, and impact potential.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• In-depth founder interviews</li>
                <li>• Business model validation</li>
                <li>• Impact and sustainability assessment</li>
                <li>• Final 25 teams selected</li>
              </ul>
            </div>

            {/* Stage 4: Support & Resources */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Support & Resources</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Top 25 founders receive comprehensive support and access to our startup ecosystem, including participation in a month-long intensive convention.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Support Structure</h3>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Mentorship and guidance</li>
                    <li>• Strategic advisory support</li>
                    <li>• Connections to potential investors</li>
                    <li>• Performance-based milestone support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tensor Resources</h3>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Month-long intensive convention</li>
                    <li>• Legal and compliance guidance</li>
                    <li>• Market connections and partnerships</li>
                    <li>• Investor introduction opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Mission Model */}
          <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Our Mission Philosophy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              We believe in empowering exceptional founders to build transformative companies. Our mission is simple: 
              <strong className="text-gray-900 dark:text-white"> provide maximum value and support to visionary entrepreneurs</strong>. 
              We connect founders with resources, mentors, and potential investors, creating a thriving ecosystem for innovation.
            </p>
          </section>
        </div>
      </div>
    );
  }