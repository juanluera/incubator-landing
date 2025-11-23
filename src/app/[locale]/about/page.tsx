'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function About() {
  const t = useTranslations('about');
  const team = t.raw('team') as any[];
  const advisors = t.raw('advisors') as any[];
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">{t('title')}</h1>

        {/* Company Story */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('ourStory')}</h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            {t('ourStoryDescription')}
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('ourMission')}</h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            {t('missionDescription')}
          </p>
        </section>

        {/* Team Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">{t('leadershipTeam')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border transition-colors text-center">
                <div className="mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <Link href={member.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-primary transition-colors cursor-pointer">{member.name}</h3>
                </Link>
                <p className="text-accent-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisors Grid */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">{t('advisorsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border transition-colors text-center">
                <div className="mb-4">
                  <Image
                    src={advisor.image}
                    alt={`${advisor.name} - Advisor`}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover w-[120px] h-[120px]"
                  />
                </div>
                <Link href={advisor.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-primary transition-colors cursor-pointer">{advisor.name}</h3>
                </Link>
                <p className="text-accent-blue font-medium mb-3">{advisor.title}</p>
                <p className="text-gray-700 text-sm">
                  {advisor.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}