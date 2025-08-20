import { GraduationCap, Briefcase, Code } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative bg-background">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-random"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyber/5 rounded-full blur-3xl animate-float-random" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container">
        <h2 className="section-title">
          💎 {t('about.title')} <span className="text-gold">Mim</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="group glass-card rounded-3xl p-8 transition-all duration-700 hover:scale-105 animate-slide-up-fade">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-primary rounded-2xl mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <GraduationCap size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-cyber font-display">🎓 {t('about.education')}</h3>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: t('about.education.title1'),
                  institution: t('about.education.institution1'),
                  year: t('about.education.year1'),
                  color: "bg-cyber",
                  status: t('about.education.status1')
                },
                {
                  title: t('about.education.title2'),
                  institution: t('about.education.institution2'),
                  year: t('about.education.year2'),
                  color: "bg-primary"
                },
                {
                  title: t('about.education.title3'),
                  institution: t('about.education.institution3'),
                  year: t('about.education.year3'),
                  color: "bg-cyber"
                },
                {
                  title: t('about.education.title4'),
                  institution: t('about.education.institution4'),
                  year: t('about.education.year4'),
                  color: "bg-gold"
                }
              ].map((item, index) => (
                <div key={index} className="relative border-l-4 border-primary/30 pl-6 hover:border-primary transition-colors duration-300">
                  <div className={`absolute -left-2 top-0 w-4 h-4 ${item.color} rounded-full animate-pulse`}></div>
                  <h4 className="font-bold text-foreground text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground font-medium">{item.institution}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {item.year}
                    </span>
                    {item.status && (
                      <span className="inline-block px-3 py-1 bg-cyber/10 text-cyber rounded-full text-sm font-semibold">
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="group glass-card rounded-3xl p-8 transition-all duration-700 hover:scale-105 animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-cyber rounded-2xl mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Briefcase size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-display">💼 {t('about.experience')}</h3>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-full h-0.5 bg-gradient-primary opacity-30"></div>
                <h4 className="font-bold text-xl text-cyber mb-3">{t('about.experience.title')}</h4>
                <p className="text-gold font-semibold text-lg mb-4">
                  {t('about.experience.company')}
                </p>
                <div className="grid gap-3">
                  {[
                    t('about.experience.activity1'),
                    t('about.experience.activity2'),
                    t('about.experience.activity3'),
                    t('about.experience.activity4'),
                    t('about.experience.activity5'),
                    t('about.experience.activity6')
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-card/30 hover:bg-card/50 transition-all duration-300 group/item">
                      <span className="text-sm font-medium text-muted-foreground group-hover/item:text-primary transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group glass-card rounded-3xl p-8 transition-all duration-700 hover:scale-105 animate-slide-up-fade" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-gold rounded-2xl mr-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Code size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-gold font-display">⚡ {t('about.mission.title')}</h3>
            </div>
            <div className="space-y-6">
              <div className="relative p-6 bg-gradient-to-r from-primary/5 to-cyber/5 rounded-2xl border border-primary/20">
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  {t('about.mission.description')}
                </p>
              </div>
              
              <div className="grid gap-4">
                {[
                  t('about.mission.item1'),
                  t('about.mission.item2'),
                  t('about.mission.item3'),
                  t('about.mission.item4')
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/20 hover:bg-card/40 transition-all duration-300 group/item">
                    <span className="text-2xl">{item.split(' ')[0]}</span>
                    <p className="text-muted-foreground group-hover/item:text-foreground transition-colors font-medium">
                      {item.substring(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center p-6 bg-gradient-primary rounded-2xl">
                <p className="text-primary-foreground font-bold text-lg">
                  {t('about.mission.cta')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
