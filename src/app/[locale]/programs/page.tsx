'use client';
import { useTranslations } from 'next-intl';

export default function Programs() {
  const t = useTranslations('programs');
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Program Stages */}

        {/* Program Stages */}
        <div className="space-y-8">
          {t.raw('stages').map((stage: any, index: number) => {
            const colors = ['bg-blue-600', 'bg-orange-600', 'bg-green-600', 'bg-purple-600'];
            const isLastStage = index === 3; // Stage 4 has special layout

            return (
              <div key={stage.number} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <div className={`${colors[index]} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4`}>
                    {stage.number}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{stage.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {stage.description}
                </p>
                {isLastStage ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('supportStructureTitle')}</h3>
                      <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                        {t.raw('supportStructureItems').map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('tensorResourcesTitle')}</h3>
                      <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                        {t.raw('tensorResourcesItems').map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  stage.items && (
                    <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                      {stage.items.map((item: string, itemIndex: number) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            );
          })}
        </div>


      </div>
    </div>
  );
}