export default function Programs() {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">The Tensor Program</h1>
          
          {/* Program Overview */}
          <section className="mb-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              A competitive venture studio program designed to identify and accelerate the most promising startups across LATAM. 
              We believe in merit-based selection and performance-driven funding.
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
                Top 100 teams are interviewed and evaluated for commitment, scalability, and exit potential.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• In-depth founder interviews</li>
                <li>• Business model validation</li>
                <li>• Exit strategy assessment</li>
                <li>• Final 25 teams selected</li>
              </ul>
            </div>

            {/* Stage 4: Funding & Acceleration */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Seed Funding & Resources</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Top 25 teams receive seed funding and access to our comprehensive startup ecosystem.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Funding Structure</h3>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• $10k–$25k seed investment</li>
                    <li>• ~6% equity (negotiable)</li>
                    <li>• Performance-based follow-on funding</li>
                    <li>• Condition-based capital deployment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tensor Resources</h3>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Legal and compliance support</li>
                    <li>• Market connections and partnerships</li>
                    <li>• Follow-on funding opportunities</li>
                    <li>• Optional month-long convention</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Fund Model */}
          <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Our Investment Philosophy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              We make early, strategic investments at attractive valuations. Our fund model is simple: 
              <strong className="text-gray-900 dark:text-white"> one breakout success returns the entire fund</strong>. 
              Investor capital flows directly to portfolio companies, with Tensor taking 1% equity for operational services.
            </p>
          </section>
        </div>
      </div>
    );
  }