'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, FileCheck, AlertCircle, BookOpen, FileText, Mail, AlertTriangle, BarChart, Droplet, Scale, Zap, Globe, UserCheck, Server, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const RiskInformationStatementPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Hardcoded translations (English + Arabic)
  const translations = {
    en: {
      title: "Risk Information Statement",
      subtitle: "Trading leveraged financial instruments such as Forex, commodities, indices, and Contracts for Difference (CFDs) carries substantial risk. These products may not suit every investor, as trading outcomes can include both profit and loss.",
      disclaimer: "By opening an account or trading with Genie, you confirm that you have read, understood, and accepted the risks outlined below.",

      sections: [
        {
          id: 1,
          icon: AlertTriangle,
          title: "Understanding Leverage & Margin Exposure",
          content: "Trading with leverage amplifies both potential gains and losses. Even minor price movements can have a major financial impact.\nIf the market moves unfavorably, you may need to deposit additional funds to sustain open positions. Failure to do so can result in forced position closures without prior notice."
        },
        {
          id: 2,
          icon: BarChart,
          title: "Market Volatility & Price Movement",
          content: "Financial markets are influenced by unpredictable factors such as economic events, policy decisions, geopolitical developments, or natural crises.\nThis volatility can lead to sudden price gaps, slippage, or changes in liquidity that affect trade execution and profitability."
        },
        {
          id: 3,
          icon: Droplet,
          title: "Liquidity & Order Execution",
          content: "Certain instruments may face reduced liquidity during off-hours or periods of stress.\nThis could limit your ability to open or close trades at preferred prices.\nGenie relies on electronic systems that depend on internet connectivity — any delay or outage may disrupt order placement or execution."
        },
        {
          id: 4,
          icon: Scale,
          title: "Regulatory, Legal & Taxation Changes",
          content: "Laws, tax policies, and financial regulations can change without notice in your jurisdiction or that of Genie.\nSuch developments may influence your ability to trade or access account services. It remains your responsibility to comply with all relevant laws and reporting obligations."
        },
        {
          id: 5,
          icon: Zap,
          title: "No Profit Guarantees",
          content: "Trading leveraged instruments does not ensure returns. Genie makes no profit guarantees, and historical performance should not be viewed as an indicator of future success.\nAll trading decisions are made at your discretion and risk."
        },
        {
          id: 6,
          icon: AlertCircle,
          title: "General Risk Warning",
          content: "Trading leveraged products involves significant financial exposure, and losses can exceed your initial investment.\nOnly trade if you understand the mechanics of leveraged instruments and can afford potential losses."
        },
        {
          id: 7,
          icon: Globe,
          title: "Third-Party Dependencies",
          content: "We partner with reputable, regulated third parties for liquidity, payments, and data services.\nDespite this, we cannot be held responsible for any losses resulting from external technical issues, delays, or connectivity problems beyond our control."
        },
        {
          id: 8,
          icon: UserCheck,
          title: "Client Duties & Responsibilities",
          content: "Before engaging in any trading activity, clients are expected to have a clear understanding of the nature and risks associated with leveraged financial instruments. It is essential that all Genie legal documents, terms, and disclosure statements are carefully reviewed and accepted prior to participation.\nClients who are uncertain about any aspect of trading, investment suitability, or associated risks are strongly advised to seek independent financial or legal advice before proceeding."
        },
        {
          id: 9,
          icon: Server,
          title: "System Reliability & Operational Factors",
          content: "Online trading depends on stable systems and technology. Delays caused by software failure, server downtime, or unstable internet connections may prevent order execution or position monitoring."
        },
        {
          id: 10,
          icon: CheckCircle,
          title: "Acknowledgment of Risk",
          content: "By trading with Genie, you confirm that you fully understand and accept the risks of leveraged trading, have carefully read this Risk Information Statement, and choose to trade voluntarily using funds you can afford to lose."
        }
      ],

      contact: {
        title: "Need Assistance?",
        description: "If you have any questions or require clarification about this Risk Information Statement, please contact us:",
        email: "support@geniefx.com",
        website: "www.geniefx.com"
      }
    },
    ar: {
      title: "بيان معلومات المخاطر",
      subtitle: "يتضمن التداول في الأدوات المالية ذات الرافعة المالية مثل الفوركس والسلع والمؤشرات وعقود الفروقات (CFDs) مخاطر كبيرة. قد لا تناسب هذه المنتجات كل مستثمر، حيث يمكن أن تشمل نتائج التداول الربح والخسارة معًا",
      disclaimer: "بفتح حساب أو التداول مع Genie، فإنك تؤكد أنك قرأت وفهمت وقبلت المخاطر الموضحة أدناه",

      sections: [
        {
          id: 1,
          icon: AlertTriangle,
          title: "فهم الرافعة المالية وتعرض الهامش",
          content: "التداول بالرافعة المالية يضخم كلاً من الأرباح والخسائر المحتملة. حتى الحركات السعرية البسيطة يمكن أن يكون لها تأثير مالي كبير.\nإذا تحرك السوق بشكل غير مواتٍ، قد تحتاج إلى إيداع أموال إضافية للحفاظ على المراكز المفتوحة. عدم القيام بذلك قد يؤدي إلى إغلاق المراكز قسرًا دون إشعار مسبق."
        },
        {
          id: 2,
          icon: BarChart,
          title: "تقلبات السوق وحركة الأسعار",
          content: "تتأثر الأسواق المالية بعوامل غير متوقعة مثل الأحداث الاقتصادية وقرارات السياسات والتطورات الجيوسياسية أو الأزمات الطبيعية.\nيمكن أن يؤدي هذا التقلب إلى فجوات سعرية مفاجئة أو انزلاق أو تغييرات في السيولة تؤثر على تنفيذ الصفقات والربحية."
        },
        {
          id: 3,
          icon: Droplet,
          title: "السيولة وتنفيذ الأوامر",
          content: "قد تواجه بعض الأدوات سيولة منخفضة خلال ساعات خارج الدوام أو فترات الضغط.\nقد يحد ذلك من قدرتك على فتح أو إغلاق الصفقات بالأسعار المفضلة.\nتعتمد Genie على أنظمة إلكترونية تعتمد على اتصال الإنترنت — أي تأخير أو انقطاع قد يعطل وضع الأوامر أو تنفيذها."
        },
        {
          id: 4,
          icon: Scale,
          title: "التغييرات التنظيمية والقانونية والضريبية",
          content: "يمكن أن تتغير القوانين وسياسات الضرائب واللوائح المالية دون إشعار في بلدك أو بلد Genie.\nقد تؤثر هذه التطورات على قدرتك على التداول أو الوصول إلى خدمات الحساب. تبقى مسؤوليتك الامتثال لجميع القوانين والالتزامات التقريرية ذات الصلة."
        },
        {
          id: 5,
          icon: Zap,
          title: "عدم وجود ضمانات للأرباح",
          content: "التداول في الأدوات ذات الرافعة المالية لا يضمن عوائد. لا تقدم Genie أي ضمانات للأرباح، ولا يجب اعتبار الأداء التاريخي مؤشرًا للنجاح المستقبلي.\nجميع قرارات التداول تُتخذ حسب تقديرك ومخاطرك."
        },
        {
          id: 6,
          icon: AlertCircle,
          title: "تحذير عام من المخاطر",
          content: "يتضمن التداول في المنتجات ذات الرافعة المالية تعرضًا ماليًا كبيرًا، ويمكن أن تتجاوز الخسائر استثمارك الأولي.\nتداول فقط إذا كنت تفهم آليات الأدوات ذات الرافعة المالية ويمكنك تحمل الخسائر المحتملة."
        },
        {
          id: 7,
          icon: Globe,
          title: "الاعتماد على أطراف ثالثة",
          content: "نتعاون مع أطراف ثالثة مرموقة ومرخصة لتوفير السيولة والمدفوعات وخدمات البيانات.\nرغم ذلك، لا يمكن محاسبتنا على أي خسائر ناتجة عن مشكلات تقنية خارجية أو تأخيرات أو مشكلات اتصال خارجة عن سيطرتنا."
        },
        {
          id: 8,
          icon: UserCheck,
          title: "واجبات ومسؤوليات العميل",
          content: "قبل المشاركة في أي نشاط تداول، يُتوقع من العملاء أن يكون لديهم فهم واضح لطبيعة ومخاطر الأدوات المالية ذات الرافعة المالية. من الضروري مراجعة وقبول جميع وثائق Genie القانونية والشروط وبيانات الكشف بعناية قبل المشاركة.\nيُنصح بشدة العملاء الذين لديهم شكوك حول أي جانب من التداول أو ملاءمة الاستثمار أو المخاطر المرتبطة به بطلب استشارة مالية أو قانونية مستقلة قبل المتابعة."
        },
        {
          id: 9,
          icon: Server,
          title: "موثوقية النظام والعوامل التشغيلية",
          content: "يعتمد التداول عبر الإنترنت على أنظمة وتكنولوجيا مستقرة. قد تمنع التأخيرات الناتجة عن فشل البرمجيات أو توقف الخادم أو اتصال إنترنت غير مستقر تنفيذ الأوامر أو مراقبة المراكز."
        },
        {
          id: 10,
          icon: CheckCircle,
          title: "الإقرار بالمخاطر",
          content: "بالتداول مع Genie، فإنك تؤكد أنك تفهم تمامًا وتقبل مخاطر التداول بالرافعة المالية، وقد قرأت بعناية بيان معلومات المخاطر هذا، وتختار التداول طوعًا باستخدام أموال يمكنك تحمل خسارتها."
        }
      ],

      contact: {
        title: "هل تحتاج إلى مساعدة؟",
        description: "إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن بيان معلومات المخاطر هذا، يرجى الاتصال بنا:",
        email: "support@geniefx.com",
        website: "www.geniefx.com"
      }
    }
  };

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(24, 2, 72, 0.15)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#f8f7fc] via-white to-[#f0eef8] ${language === 'ar' ? 'direction-rtl' : ''}`}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#180248] text-white py-8"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="h-full w-full"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full mb-6"
            >
              <Shield className="w-10 h-10" />
            </motion.div>

            <h1 className={`text-2xl md:text-3xl font-extrabold banner-heading-gradient mb-6 ${language === 'ar' ? 'font-arabic py-6' : ''}`}>
              {t.title}
            </h1>

            <p className={`text-md md:text-lg text-white/90 max-w-4xl mx-auto mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f8f7fc"
            />
          </svg>
        </div>
      </motion.div>

      {/* Disclaimer Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10"
      >
        <div className="bg-gradient-to-r from-[#180248] to-[#2d1360] rounded-2xl p-6 shadow-2xl border border-white/10">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className={`text-white/95 text-sm md:text-base leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.disclaimer}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Policy Sections */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-12"
      >
        <div className="grid gap-6 sm:gap-8">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveSection(section.id)}
                onHoverEnd={() => setActiveSection(null)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#180248]/5"
              >
                <div className="p-6 sm:p-8">
                  {/* Mobile Layout */}
                  <div className="sm:hidden">
                    <div className={`flex items-center gap-3 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                      <motion.div
                        animate={{
                          scale: activeSection === section.id ? 1.1 : 1,
                          rotate: activeSection === section.id ? 5 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#180248] to-[#2d1360] rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>

                      <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                        <span className="text-[#180248] font-bold text-lg">
                          {section.id}.
                        </span>
                        <h3 className={`text-lg font-bold text-[#180248] ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`text-[#180248]/80 leading-relaxed text-sm whitespace-pre-line ${language === 'ar' ? 'font-arabic text-right' : ''}`}
                    >
                      {section.content}
                    </motion.p>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden sm:flex items-start gap-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <motion.div
                      animate={{
                        scale: activeSection === section.id ? 1.1 : 1,
                        rotate: activeSection === section.id ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#180248] to-[#2d1360] rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <div className={`flex-1 min-w-0 ${language === 'ar' ? 'text-right' : ''}`}>
                      <motion.div
                        initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`flex items-center gap-3 mb-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                          <span className="text-[#180248] font-bold text-xl">
                            {section.id}.
                          </span>
                          <h3 className={`text-xl font-bold text-[#180248] ${language === 'ar' ? 'font-arabic' : ''}`}>
                            {section.title}
                          </h3>
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className={`text-[#180248]/80 leading-relaxed text-sm whitespace-pre-line ${language === 'ar' ? 'font-arabic' : ''}`}
                        >
                          {section.content}
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Animated Border Bottom */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeSection === section.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#180248] origin-left"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 rounded-3xl overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#180248] text-white py-8 m:py-8 rounded-4xl"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full mb-6"
            >
              <Mail className="w-8 h-8" />
            </motion.div>

            <h2 className={`text-xl md:text-2xl font-extrabold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.contact.title}
            </h2>

            <p className={`text-md text-white/90 mb-8 max-w-xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.contact.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href={`mailto:${t.contact.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-[#180248] px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-shadow"
              >
                <Mail className="w-5 h-5" />
                {t.contact.email}
              </motion.a>

              <motion.a
                href={`https://${t.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                <FileText className="w-5 h-5" />
                {t.contact.website}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiskInformationStatementPage;