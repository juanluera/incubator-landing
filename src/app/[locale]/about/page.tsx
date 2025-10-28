import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function About() {
  const translations = useTranslations('about');
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">{translations('title')}</h1>
          
          {/* Mission Section */}
          <section className="mb-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{translations('ourMission')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {translations('missionDescription')}
            </p>
          </section>

          {/* Team Grid */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">{translations('leadershipTeam')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Team Member 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/AngelLuera.jpg"
                    alt="Juan Angel Luera - Co-Founder"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <Link href="https://juanluera.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Juan Angel Luera</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{translations('coFounder')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations('angelBio')}
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/SebastianAlberdi.jpg"
                    alt="Sebastian Alberdi - Co-Founder"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <Link href="https://www.linkedin.com/in/salberdi/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Sebastian Alberdi</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{translations('coFounder')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations('sebastianBio')}
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/AntonioLuera.jpg"
                    alt="Antonio Luera - Co-Founder"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover w-[120px] h-[120px]"
                  />
                </div>
                <Link href="https://www.linkedin.com/in/antoniol19/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Juan Antonio Luera</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{translations('coFounder')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations('antonioBio')}
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/CruzSoto.jpg"
                    alt="Cruz Soto - Co-Founder"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover"
                  />
                </div>
                <Link href="https://www.linkedin.com/in/cruz-soto/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Cruz Soto</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{translations('coFounder')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations('cruzBio')}
                </p>
              </div>

            </div>
          </section>

          {/* Advisors Grid */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">{translations('advisors')}</h2>
            <div className="grid md:grid-cols-2 gap-8 justify-center">
              
              {/* Advisor 1: Gyalpo Dongo */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <Image 
                    src="/GyalpoDongo.jpg"
                    alt="Gyalpo Dongo - Advisor"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover w-[120px] h-[120px]"
                  />
                </div>
                <Link href="https://www.linkedin.com/in/gyalpodongo/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Gyalpo Dongo</h3>
                </Link>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{translations('gyalpoTitle')}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {translations('gyalpoBio')}
                </p>
              </div>

              {/* Advisor 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-colors text-center">
                <div className="mb-4">
                  <div className="w-[120px] h-[120px] bg-gray-200 dark:bg-gray-600 rounded-full mx-auto flex items-center justify-center">
                  <Image 
                    src="/AbrahamCristiani.jpg"
                    alt="Abraham Cristiani - Advisor"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto object-cover w-[120px] h-[120px]"
                  />
                  </div>
                  
                </div>
                <Link href="https://www.linkedin.com/in/abrahamcristiani/" target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Abraham Cristiani</h3>
                </Link>                
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {translations('abrahamTitle')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                {translations('abrahamBio')}
                </p>
              </div>


            </div>
          </section>

          {/* Company Story */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{translations('ourStory')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {translations('ourStoryDescription')}
            </p>
          </section>
        </div>
      </div>
    );
  }