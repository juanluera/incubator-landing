'use client';
import { useTranslations } from 'next-intl';

export default function Programs() {
    const translations = useTranslations('programs');
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{translations('title')}</h1>
          
          {/* Program Overview */}
          <section className="mb-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              {translations('description')}
            </p>
          </section>

          {/* Program Stages */}
          <div className="space-y-8">
            
            {/* Stage 1: Application */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">1</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{translations('stage1Title')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {translations('stage1Description')}
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                {translations.raw('stage1Items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Stage 2: Sprint Challenge */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">2</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{translations('stage2Title')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {translations('stage2Description')}
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                {translations.raw('stage2Items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Stage 3: Selection */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">3</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{translations('stage3Title')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {translations('stage3Description')}
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                {translations.raw('stage3Items').map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Stage 4: Support & Resources */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">4</div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{translations('stage4Title')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {translations('stage4Description')}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{translations('supportStructureTitle')}</h3>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    {translations.raw('supportStructureItems').map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{translations('tensorResourcesTitle')}</h3>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    {translations.raw('tensorResourcesItems').map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Mission Model */}
          <section className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">{translations('missionPhilosophyTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              {translations('missionPhilosophyText')}
            </p>
          </section>
        </div>
      </div>
    );
  }