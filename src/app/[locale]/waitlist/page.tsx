'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import WaitlistForm from '@/components/WaitlistForm';
import Modal from '@/components/ui/Modal';

interface Stage {
  number: string;
  title: string;
  description: string;
  items?: string[];
}

export default function Waitlist() {
  const t = useTranslations('programs');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-background transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-foreground">{t('title')}</h1>

        {/* Program Overview */}
        <section className="mb-12 text-center">
          <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-8">
            {t('description')}
          </p>
        </section>

        {/* Program Stages */}
        <div className="space-y-8 mb-16">
          {t.raw('stages').map((stage: Stage, index: number) => {
            const colors = ['bg-blue-600', 'bg-orange-600', 'bg-green-600', 'bg-purple-600'];
            const isLastStage = index === 3; // Stage 4 has special layout

            return (
              <div key={stage.number} className="bg-card p-8 rounded-lg shadow-md border border-border transition-colors">
                <div className="flex items-center mb-4">
                  <div className={`${colors[index]} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4`}>
                    {stage.number}
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">{stage.title}</h2>
                </div>
                <p className="text-foreground/80 mb-4">
                  {stage.description}
                </p>
                {isLastStage ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('supportStructureTitle')}</h3>
                      <ul className="text-sm text-foreground/60 space-y-1">
                        {t.raw('supportStructureItems').map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('tensorResourcesTitle')}</h3>
                      <ul className="text-sm text-foreground/60 space-y-1">
                        {t.raw('tensorResourcesItems').map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  stage.items && (
                    <ul className="text-sm text-foreground/60 space-y-2">
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

        {/* Mission Model */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-foreground">{t('missionPhilosophyTitle')}</h2>
          <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto">
            {t('missionPhilosophyText')}
          </p>
        </section>

        {/* Apply Button Section */}
        <div className="text-center pb-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-primary-foreground text-xl font-bold px-12 py-4 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Fill out form
          </button>
        </div>
      </div>

      {/* Application Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Apply to Tensor"
      >
        <WaitlistForm />
      </Modal>
    </div>
  );
}