'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface Member {
  name: string;
  image: string;
  bio: string;
}

interface Startup {
  name: string;
  logo: string;
  pitch: string;
  background?: string;
  members?: Member[];
}

export default function Startups() {
  const t = useTranslations('startups');
  const startups = t.raw('startupsList') as Startup[];
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <div
              key={startup.name}
              className="bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedStartup(startup)}
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-center p-8 bg-white min-h-[250px]">
                  <Image
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-4" style={{ backgroundColor: '#f5efe6' }}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {startup.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-2">
                    {startup.pitch.length > 80
                      ? startup.pitch.substring(0, 80) + '...'
                      : startup.pitch
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStartup && (
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedStartup(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={selectedStartup.logo}
                    alt={`${selectedStartup.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain rounded-lg"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedStartup.name}
                    </h2>
                    <p className="text-gray-700 mt-1">
                      {selectedStartup.pitch}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStartup(null)}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {selectedStartup.background && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('background')}
                  </h3>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#f5efe6' }}>
                    <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                      {selectedStartup.background}
                    </p>
                  </div>
                </div>
              )}

              {selectedStartup.members && selectedStartup.members.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('teamMembers')}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedStartup.members.map((member: Member, index: number) => (
                      <div key={member.name || index} className="p-4 rounded-lg" style={{ backgroundColor: '#faf7f2' }}>
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-4">
                            <Image
                              src={member.image}
                              alt={`${member.name} photo`}
                              width={80}
                              height={80}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {member.name}
                            </h4>
                            <p className="text-accent-blue text-sm mb-2">
                              Co-founder
                            </p>
                            <p className="text-gray-700 text-sm">
                              {member.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
