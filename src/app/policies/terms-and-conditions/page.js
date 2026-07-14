'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, FileCheck, AlertCircle, BookOpen, FileText, Mail, UserCheck, AlertTriangle, BarChart, Globe, DollarSign, ShieldCheck, Scale } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Hardcoded translations (English + Arabic)
  const translations = {
    en: {
      title: "Terms and Conditions",
      subtitle: "Effective Date: 01 January 2025\nWelcome to Genie (“we,” “us,” or “our”). By accessing our website, using our trading services, or maintaining an account with us, you agree to comply with these Terms and Conditions.",
      disclaimer: "Please read them carefully, as they define your rights, responsibilities, and mutual obligations.",
      
      sections: [
        {
          id: 1,
          icon: UserCheck,
          title: "Eligibility and Account Access",
          content: "You must be at least 18 years old or of legal age in your jurisdiction to use Genie services.\nBy opening an account, you confirm that all personal details provided are accurate and up to date.\nYou are solely responsible for maintaining the confidentiality of your account's credentials and any activity conducted under your account."
        },
        {
          id: 2,
          icon: AlertCircle,
          title: "Trading Risks and Disclaimer",
          content: "Trading forex, CFDs, and other leveraged instruments carries a high level of risk and may not be suitable for all investors.\nYou may lose more than your initial deposit.\nWe strongly advise assessing your risk tolerance and seeking independent financial advice when necessary.\nPast performance does not guarantee future results."
        },
        {
          id: 3,
          icon: BookOpen,
          title: "Standard Operating Procedure (SOP)",
          content: "Forex Trading Rules\n1. Latency-based strategies are not allowed. This means you cannot take advantage of execution delays, price feed lag, or server speed differences to make profits.\n2. No Arbitrage Trading\nAny form of arbitrage trading is strictly prohibited. This includes price arbitrage, hedging across different brokers, or using delayed price feeds, especially during news or high-volatility periods.\n3. No Swap Abuse\nStrategies designed only to benefit from positive swap rates are not permitted. Holding positions purely to collect swaps without genuine market exposure is considered swap abuse.\n4. No Spread Abuse\nTraders are not allowed to exploit abnormal market conditions or widened spreads, especially during market opening, closing, low-liquidity hours, or major news events.\n5. Scalping Policy\nScalping is allowed only within limits. Any trade closed in under 3 minutes will be counted as scalping. Up to 20% of your total trading volume may come from scalping strategies. Excessive scalping beyond this limit is not allowed and may result in account review.\nClosing Statement\nIf you trade within these rules, you will not face any issues. In case of violations, trades may be adjusted or accounts may be suspended as per our risk policy."
        },
        {
          id: 4,
          icon: BarChart,
          title: "Products and Platform Services",
          content: "Genie provides access to a range of instruments — including forex, metals, commodities, indices, and cryptocurrencies — via the Meta Trader 5 platform.\nWe reserve the right to modify, suspend, or discontinue any feature or service at any time without prior notice."
        },
        {
          id: 5,
          icon: FileCheck,
          title: "Client Obligations",
          content: "Clients must adhere to all applicable laws, regulations, and financial standards in their jurisdiction.\nBy using Genie services, you confirm that:\n• Your funds are from legitimate sources\n• Your activities do not violate any legal or regulatory restrictions"
        },
        {
          id: 6,
          icon: Eye,
          title: "Website Usage and Conduct",
          content: "All content on www.geniefx.com is intended for general and educational purposes only.\nthis should not be taken as financial or trading advice.\nYou agree not to misuse the website, attempt unauthorized access, or disrupt system operations."
        },
        {
          id: 7,
          icon: Shield,
          title: "Ownership and Intellectual Property",
          content: "All intellectual property on the Genie website — including logos, designs, graphics, software, and text — is the exclusive property of Genie.\nNo material may be copied, modified, or redistributed without our prior written consent."
        },
        {
          id: 8,
          icon: DollarSign,
          title: "Deposits, Withdrawals, and Processing",
          content: "All payment transactions are governed by our official Deposit & Withdrawal Terms.\nGenie reserves the right to:\n• Set transaction limits\n• Request identity verification\n• Delay processing when required for compliance or fraud prevention\nAll transfers must originate from verified accounts only."
        },
        {
          id: 9,
          icon: ShieldCheck,
          title: "AML and Verification Requirements",
          content: "Genie complies with global Anti-Money Laundering (AML) standards and financial crime prevention laws.\nWe may request identity documents or supporting evidence at any time.\nAccounts engaged in suspicious or unlawful activity may be suspended or terminated immediately."
        },
        {
          id: 10,
          icon: AlertTriangle,
          title: "Account Suspension and Termination",
          content: "We may suspend, restrict, or terminate your account at our discretion for reasons including, but not limited to:\n• Breach of these Terms\n• Misuse of platform features\n• Regulatory or compliance issues\nSuch actions may occur with or without prior notice."
        },
        {
          id: 11,
          icon: Users,
          title: "Limitation of Liability",
          content: "Genie shall not be held liable for any direct, indirect, incidental, or consequential losses arising from your use or inability to use our website or services.\nWe do not guarantee uninterrupted access or error-free operation of the trading platform."
        },
        {
          id: 12,
          icon: FileText,
          title: "Updates and Modifications",
          content: "We may revise or update these Terms periodically to reflect regulatory, operational, or technical changes.\nAll modifications will be effective immediately upon publication on this page.\nContinued use of our services implies your acceptance of the latest version."
        },
        {
          id: 13,
          icon: Scale,
          title: "Governing Law and Jurisdiction",
          content: "These Terms are governed by the laws of FSCA St. Lucia\nAll disputes or claims arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in that region."
        }
      ],
      
      contact: {
        title: "Need Assistance?",
        description: "If you have questions or concerns regarding these Terms & Conditions, please contact our support team:",
        email: "support@geniefx.com",
        website: "www.geniefx.com"
      }
    },
    ar: {
      title: "الشروط والأحكام",
      subtitle: "تاريخ السريان: 01 يناير 2025\nمرحبًا بك في Genie (\"نحن\" أو \"لنا\" أو \"خاصتنا\"). من خلال الوصول إلى موقعنا الإلكتروني أو استخدام خدمات التداول الخاصة بنا أو الحفاظ على حساب لدينا، فإنك توافق على الامتثال لهذه الشروط والأحكام",
      disclaimer: "يرجى قراءتها بعناية، حيث تحدد حقوقك ومسؤولياتك والتزاماتنا المتبادلة",
      
      sections: [
        {
          id: 1,
          icon: UserCheck,
          title: "الأهلية والوصول إلى الحساب",
          content: "يجب أن تكون في سن 18 عامًا على الأقل أو في سن قانونية في ولايتك القضائية لاستخدام خدمات Genie.\nبفتح حساب، فإنك تؤكد أن جميع التفاصيل الشخصية المقدمة دقيقة ومحدثة.\nأنت مسؤول بمفردك عن الحفاظ على سرية بيانات حسابك وأي نشاط يتم تحت حسابك."
        },
        {
          id: 2,
          icon: AlertCircle,
          title: "مخاطر التداول وإخلاء المسؤولية",
          content: "يتضمن التداول في الفوركس وعقود الفروقات والأدوات ذات الرافعة المالية الأخرى مستوى عالٍ من المخاطر وقد لا يكون مناسبًا لجميع المستثمرين.\nقد تخسر أكثر من إيداعك الأولي.\nننصح بشدة بتقييم تحملك للمخاطر وطلب استشارة مالية مستقلة عند الضرورة.\nالأداء السابق لا يضمن النتائج المستقبلية."
        },
        {
          id: 3,
          icon: BookOpen,
          title: "إجراءات التشغيل القياسية (SOP)",
          content: `قواعد تداول الفوركس
        1. لا يُسمح بالاستراتيجيات القائمة على الكمون (Latency). وهذا يعني أنه لا يمكنك الاستفادة من تأخير التنفيذ أو تأخر تغذية الأسعار أو اختلافات سرعة الخوادم لتحقيق أرباح.
        2. حظر التداول بالمراجحة (Arbitrage)
        يُحظر أي شكل من أشكال تداول المراجحة بشكل صارم. يشمل ذلك مراجحة الأسعار، أو التحوط عبر وسطاء مختلفين، أو استخدام تغذيات أسعار متأخرة، خاصة أثناء الأخبار أو فترات التقلب العالي.
        3. حظر إساءة استخدام السواب (Swap)
        لا يُسمح بالاستراتيجيات المصممة فقط للاستفادة من معدلات السواب الإيجابية. إن الاحتفاظ بالصفقات فقط لتحصيل السواب دون تعرض حقيقي للسوق يُعد إساءة استخدام للسواب.
        4. حظر إساءة استخدام السبريد (Spread)
        لا يُسمح للمتداولين باستغلال ظروف السوق غير الطبيعية أو اتساع السبريد، خاصة أثناء افتتاح السوق أو إغلاقه أو ساعات السيولة المنخفضة أو الأحداث الإخبارية الكبرى.
        5. سياسة السكالبينج (Scalping)
        يُسمح بالسكالبينج ضمن حدود. أي صفقة يتم إغلاقها خلال أقل من 3 دقائق تُعتبر صفقة سكالبينج. يمكن أن يصل السكالبينج إلى 20% من إجمالي حجم تداولك. السكالبينج المفرط خارج هذا الحد غير مسموح وقد يؤدي إلى مراجعة الحساب.
        البيان الختامي
        إذا التزمت بهذه القواعد، فلن تواجه أي مشكلات. وفي حال حدوث مخالفات، قد يتم تعديل الصفقات أو تعليق الحسابات وفقًا لسياسة المخاطر لدينا.`
        },
        {
          id: 4,
          icon: BarChart,
          title: "المنتجات وخدمات المنصة",
          content: "توفر Genie الوصول إلى مجموعة من الأدوات — بما في ذلك الفوركس والمعادن والسلع والمؤشرات والعملات المشفرة — عبر منصة Meta Trader 5.\nنحتفظ بالحق في تعديل أو تعليق أو إيقاف أي ميزة أو خدمة في أي وقت دون إشعار مسبق."
        },
        {
          id: 5,
          icon: FileCheck,
          title: "التزامات العميل",
          content: "يجب على العملاء الالتزام بجميع القوانين واللوائح والمعايير المالية المعمول بها في ولايتهم القضائية.\nباستخدام خدمات Genie، فإنك تؤكد أن:\n• أموالك من مصادر مشروعة\n• أنشطتك لا تنتهك أي قيود قانونية أو تنظيمية"
        },
        {
          id: 6,
          icon: Eye,
          title: "استخدام الموقع والسلوك",
          content: "جميع المحتويات على www.geniefx.com مخصصة لأغراض عامة وتعليمية فقط.\nلا يجب اعتبارها نصيحة مالية أو تداول.\nتوافق على عدم إساءة استخدام الموقع أو محاولة الوصول غير المصرح به أو تعطيل عمليات النظام."
        },
        {
          id: 7,
          icon: Shield,
          title: "الملكية والملكية الفكرية",
          content: "جميع الملكية الفكرية على موقع Genie — بما في ذلك الشعارات والتصاميم والرسومات والبرمجيات والنصوص — هي ملكية حصرية لـ Genie.\nلا يجوز نسخ أو تعديل أو إعادة توزيع أي مادة دون موافقة كتابية مسبقة منا."
        },
        {
          id: 8,
          icon: DollarSign,
          title: "الإيداعات والسحوبات والمعالجة",
          content: "تخضع جميع معاملات الدفع لشروط الإيداع والسحب الرسمية لدينا.\nتحتفظ Genie بالحق في:\n• تحديد حدود المعاملات\n• طلب التحقق من الهوية\n• تأخير المعالجة عند الحاجة للامتثال أو منع الاحتيال\nيجب أن تأتي جميع التحويلات من حسابات تم التحقق منها فقط."
        },
        {
          id: 9,
          icon: ShieldCheck,
          title: "متطلبات مكافحة غسيل الأموال والتحقق",
          content: "تلتزم Genie بمعايير مكافحة غسيل الأموال (AML) العالمية وقوانين منع الجرائم المالية.\nقد نطلب وثائق هوية أو أدلة داعمة في أي وقت.\nقد يتم تعليق أو إنهاء الحسابات المشاركة في نشاط مشبوه أو غير قانوني فورًا."
        },
        {
          id: 10,
          icon: AlertTriangle,
          title: "تعليق الحساب وإنهاؤه",
          content: "يجوز لنا تعليق أو تقييد أو إنهاء حسابك حسب تقديرنا لأسباب تشمل على سبيل المثال لا الحصر:\n• انتهاك هذه الشروط\n• إساءة استخدام ميزات المنصة\n• مشكلات تنظيمية أو امتثال\nقد تحدث مثل هذه الإجراءات مع أو بدون إشعار مسبق."
        },
        {
          id: 11,
          icon: Users,
          title: "تحديد المسؤولية",
          content: "لا تتحمل Genie مسؤولية أي خسائر مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدامك أو عدم قدرتك على استخدام موقعنا أو خدماتنا.\nلا نضمن الوصول دون انقطاع أو تشغيل المنصة التداولية خالٍ من الأخطاء."
        },
        {
          id: 12,
          icon: FileText,
          title: "التحديثات والتعديلات",
          content: "يجوز لنا مراجعة أو تحديث هذه الشروط بشكل دوري لتعكس التغييرات التنظيمية أو التشغيلية أو التقنية.\nتصبح جميع التعديلات سارية فور النشر على هذه الصفحة.\nاستمرار استخدام خدماتنا يعني قبولك للإصدار الأحدث."
        },
        {
          id: 13,
          icon: Scale,
          title: "القانون الحاكم والاختصاص القضائي",
          content: "تخضع هذه الشروط لقوانين FSCA سانت لوسيا\nتخضع جميع النزاعات أو المطالبات الناشئة بموجب هذه الشروط للاختصاص الحصري للمحاكم المختصة في تلك المنطقة."
        }
      ],
      
      contact: {
        title: "هل تحتاج إلى مساعدة؟",
        description: "إذا كانت لديك أسئلة أو مخاوف بشأن هذه الشروط والأحكام، يرجى الاتصال بفريق الدعم لدينا:",
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
            
            <p className={`text-md md:text-lg text-white/90 max-w-4xl mx-auto mb-4 whitespace-pre-line ${language === 'ar' ? 'font-arabic' : ''}`}>
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

export default TermsAndConditionsPage;
