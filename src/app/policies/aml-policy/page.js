'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, FileCheck, AlertCircle, BookOpen, FileText, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext'

const PolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Hardcoded translations (English + Arabic)
  const translations = {
    en: {
      title: "AML Compliance Policy",
      subtitle: "At Genie, we are firmly committed to maintaining the integrity of the financial system by preventing money laundering, terrorist financing, and related financial crimes.",
      description: "This policy defines our approach to detecting, monitoring, and reporting suspicious activities while complying with international AML and CTF standards.",
      disclaimer: "By opening an account with us, you agree to comply with all AML verification, monitoring, and reporting procedures outlined in this policy.",
      
      sections: [
        {
          id: 1,
          title: "Understanding Money Laundering",
          content: "Money laundering is the act of disguising the origin of illegally obtained funds to make them appear legitimate. It generally occurs through three stages: placement, where illicit funds enter the financial system; layering, involving complex transactions to obscure the source; and integration, where the funds are reintroduced as lawful assets. Genie enforces stringent systems to detect, monitor, and prevent such activities effectively."
        },
        {
          id: 2,
          title: "Commitment to Global Compliance",
          content: "Genie upholds the highest compliance standards by aligning with the Financial Action Task Force (FATF) recommendations and relevant international AML frameworks. We ensure our systems cannot be used for unlawful purposes and conduct business exclusively with verified clients. Our compliance infrastructure is reviewed regularly to meet evolving global standards and regulatory expectations."
        },
        {
          id: 3,
          title: "Know Your Customer (KYC) Verification",
          content: "Before gaining full access to Genie services, every client must successfully complete a Know Your Customer (KYC) verification process. This involves providing a valid government-issued ID, proof of address issued within the last three months, and any additional documents requested for high-risk profiles or large transaction volumes. These requirements are mandatory for account activation and fund operations."
        },
        {
          id: 4,
          title: "Monitoring of Transactions",
          content: "Genie continuously reviews account activity to identify potential irregularities or suspicious financial behavior. Indicators include inconsistent trading volumes, structured deposits or withdrawals designed to bypass reporting limits, or transfers involving high-risk jurisdictions. Detected anomalies are reviewed by the compliance team and, if necessary, reported to competent regulatory authorities without prior client notification."
        },
        {
          id: 5,
          title: "Restricted and Prohibited Practices",
          content: "To maintain integrity and compliance, Genie prohibits any activity that compromises legal and regulatory obligations. These include anonymous or fake account creation, third-party deposits or withdrawals, and transactions linked to sanctioned individuals, organizations, or countries. Any client found engaging in such practices risks immediate account suspension, termination, and potential legal proceedings."
        },
        {
          id: 6,
          title: "Employee Training & Internal Oversight",
          content: "Our employees receive comprehensive AML training designed to identify suspicious patterns and fulfill reporting responsibilities accurately. Genie conducts internal audits, periodic risk assessments, and policy reviews to ensure continuous compliance with AML regulations and industry best practices. This proactive approach reinforces our commitment to ethical and lawful business conduct."
        },
        {
          id: 7,
          title: "Reporting Obligations to Authorities",
          content: "In compliance with applicable international and local AML laws, Genie may report suspicious or unusual activities to relevant law enforcement or financial intelligence units. Such disclosures are carried out confidentially and without prior notice to the client, as required by law."
        },
        {
          id: 8,
          title: "Client Cooperation Responsibilities",
          content: "Clients play a vital role in maintaining AML integrity. You are required to provide accurate and updated personal and financial details, respond promptly to compliance requests, and notify Genie of any changes to your information. Non-compliance may result in restricted account functionality or termination of services."
        }
      ],
      
      contact: {
        title: "Need Assistance?",
        description: "If you have any questions or require clarification about this AML Compliance Policy, please contact us:",
        email: "support@geniefx.com",
        website: "www.geniefx.com"
      }
    },
    ar: {
      title: "سياسة الامتثال لمكافحة غسيل الأموال",
      subtitle: "في Genie، نحن ملتزمون بشدة بالحفاظ على سلامة النظام المالي من خلال منع غسيل الأموال وتمويل الإرهاب والجرائم المالية ذات الصلة",
      description: "تحدد هذه السياسة نهجنا في الكشف عن الأنشطة المشبوهة ورصدها والإبلاغ عنها مع الامتثال للمعايير الدولية لمكافحة غسيل الأموال وتمويل الإرهاب",
      disclaimer: "بفتح حساب لدينا، فإنك توافق على الامتثال لجميع إجراءات التحقق والرصد والإبلاغ المتعلقة بمكافحة غسيل الأموال الموضحة في هذه السياسة",
      
      sections: [
        {
          id: 1,
          title: "فهم غسيل الأموال",
          content: "غسيل الأموال هو عملية إخفاء مصدر الأموال المكتسبة بطريقة غير قانونية لجعلها تبدو مشروعة. يحدث عادةً من خلال ثلاث مراحل: الإيداع، حيث تدخل الأموال غير المشروعة إلى النظام المالي؛ الطبقات، التي تتضمن معاملات معقدة لإخفاء المصدر؛ والدمج، حيث تعاد الأموال كأصول قانونية. تطبق Genie أنظمة صارمة للكشف عن هذه الأنشطة ورصدها ومنعها بفعالية."
        },
        {
          id: 2,
          title: "الالتزام بالامتثال العالمي",
          content: "تحافظ Genie على أعلى معايير الامتثال من خلال التوافق مع توصيات فرقة العمل المالي (FATF) والإطارات الدولية ذات الصلة بمكافحة غسيل الأموال. نضمن عدم استخدام أنظمتنا لأغراض غير قانونية ونقوم بأعمالنا حصريًا مع عملاء تم التحقق منهم. يتم مراجعة بنيتنا التحتية للامتثال بانتظام لتلبية المعايير العالمية المتطورة والتوقعات التنظيمية."
        },
        {
          id: 3,
          title: "التحقق من اعرف عميلك (KYC)",
          content: "قبل الحصول على الوصول الكامل إلى خدمات Genie، يجب على كل عميل إكمال عملية التحقق من اعرف عميلك (KYC) بنجاح. يتضمن ذلك تقديم هوية صادرة عن الحكومة سارية المفعول، وإثبات عنوان صادر خلال آخر ثلاثة أشهر، وأي وثائق إضافية مطلوبة للملفات عالية المخاطر أو حجم معاملات كبير. هذه المتطلبات إلزامية لتفعيل الحساب وعمليات الأموال."
        },
        {
          id: 4,
          title: "رصد المعاملات",
          content: "تقوم Genie بمراجعة نشاط الحساب باستمرار لتحديد أي مخالفات محتملة أو سلوك مالي مشبوه. تشمل المؤشرات أحجام تداول غير متسقة، إيداعات أو سحوبات منظمة لتجنب حدود الإبلاغ، أو تحويلات تتعلق بولايات قضائية عالية المخاطر. يتم مراجعة الحالات الشاذة المكتشفة من قبل فريق الامتثال، وإذا لزم الأمر، الإبلاغ عنها إلى السلطات التنظيمية المختصة دون إشعار مسبق للعميل."
        },
        {
          id: 5,
          title: "الممارسات المقيدة والمحظورة",
          content: "لحماية السلامة والامتثال، تحظر Genie أي نشاط يعرض الالتزامات القانونية والتنظيمية للخطر. يشمل ذلك إنشاء حسابات مجهولة أو مزيفة، إيداعات أو سحوبات من طرف ثالث، والمعاملات المرتبطة بأفراد أو منظمات أو دول خاضعة للعقوبات. يخاطر أي عميل يُكتشف مشاركته في مثل هذه الممارسات بتعليق الحساب فورًا أو إنهائه وإجراءات قانونية محتملة."
        },
        {
          id: 6,
          title: "تدريب الموظفين والرقابة الداخلية",
          content: "يتلقى موظفونا تدريبًا شاملاً على مكافحة غسيل الأموال مصممًا لتحديد الأنماط المشبوهة وأداء مسؤوليات الإبلاغ بدقة. تجري Genie تدقيقات داخلية وتقييمات مخاطر دورية ومراجعات للسياسات لضمان الامتثال المستمر للوائح مكافحة غسيل الأموال وأفضل الممارسات في الصناعة. يعزز هذا النهج الاستباقي التزامنا بالسلوك التجاري الأخلاقي والقانوني."
        },
        {
          id: 7,
          title: "التزامات الإبلاغ للسلطات",
          content: "امتثالاً للقوانين الدولية والمحلية المعمول بها بمكافحة غسيل الأموال، قد تبلغ Genie عن الأنشطة المشبوهة أو غير العادية إلى وحدات الاستخبارات المالية أو جهات إنفاذ القانون ذات الصلة. تتم هذه الإفصاحات بسرية ودون إشعار مسبق للعميل، كما يقتضي القانون."
        },
        {
          id: 8,
          title: "مسؤوليات تعاون العميل",
          content: "يلعب العملاء دورًا حيويًا في الحفاظ على سلامة مكافحة غسيل الأموال. يُطلب منك تقديم تفاصيل شخصية ومالية دقيقة ومحدثة، والرد بسرعة على طلبات الامتثال، وإخطار Genie بأي تغييرات في معلوماتك. قد يؤدي عدم الامتثال إلى تقييد وظائف الحساب أو إنهاء الخدمات."
        }
      ],
      
      contact: {
        title: "هل تحتاج إلى مساعدة؟",
        description: "إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن سياسة الامتثال لمكافحة غسيل الأموال هذه، يرجى الاتصال بنا:",
        email: "support@geniefx.com",
        website: "www.geniefx.com"
      }
    }
  };

  // Assuming you have this context available
  const { language } = useLanguage(); // Keep your existing LanguageContext
  const t = translations[language] || translations.en; // Fallback to English

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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
            
            <p className={`text-md md:text-lg text-white/80 max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.description}
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
            const Icon = [BookOpen, Shield, FileCheck, Eye, AlertCircle, Users, FileText, Users][index];
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
                      className={`text-[#180248]/80 leading-relaxed text-sm ${language === 'ar' ? 'font-arabic text-right' : ''}`}
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
                          className={`text-[#180248]/80 leading-relaxed text-sm ${language === 'ar' ? 'font-arabic' : ''}`}
                        >
                          {section.content}
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
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

export default PolicyPage;