'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  Ban,
  MessageSquareWarning,
  FileCheck,
  ShieldAlert,
  RefreshCcw,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WebsiteAcceptableUsePolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Website Acceptance Use Policy',
      subtitle:
        'Genie Ltd is an entity registered and operated in Saint Lucia. This policy sets out the rules under which visitors and users may access and use the Genie website at www.geniefx.com.',
      description:
        'Trading over-the-counter margined derivative contracts, including CFDs and spot foreign exchange, carries a high level of risk due to leverage and may result in rapid financial losses. Professional advice is recommended before trading.',
      disclaimer:
        'By using the Genie website, you agree to comply with this policy together with any related website policies and terms that supplement the general Terms of Website Use.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'Scope of This Policy',
          content:
            'This acceptable use policy sets out the terms under which users may access and use the Genie website. It applies to all visitors and users of the site. By using the website, you confirm that you agree to comply with this policy as well as any related website policies that supplement the general Terms of Website Use.',
        },
        {
          id: 2,
          icon: Ban,
          title: 'Prohibited Activities',
          content:
            'The website may be used only for lawful purposes. Users must not use the site to violate any applicable local, national, or international law or regulation; engage in fraudulent, unlawful, or deceptive conduct; harm minors; upload, transmit, or share content that breaches Genie’s content standards; send unsolicited advertising, spam, or promotional materials; or distribute viruses, malware, spyware, or other harmful code designed to interfere with software or hardware. Users also agree not to copy, reproduce, resell, or exploit any part of the site in breach of Genie’s website terms, and must not access or interfere with the site itself, the servers and networks hosting it, or any third-party systems connected to it.',
        },
        {
          id: 3,
          icon: MessageSquareWarning,
          title: 'Interactive Features',
          content:
            'Genie may make interactive services available from time to time, including services such as chat rooms or bulletin boards. Where such services are offered, Genie will provide information about the nature of the service, whether moderation is used, and whether moderation is carried out by humans or automated tools. Genie may assess the risks associated with third-party contributions, particularly where minors may be involved, and determine whether moderation is appropriate. However, Genie is not obliged to monitor all interactive services and excludes liability for losses resulting from user contributions, whether such services are moderated or not. Where moderation is provided, contact details for the moderator will usually be made available for concerns or complaints.',
        },
        {
          id: 4,
          icon: FileCheck,
          title: 'Content Standards',
          content:
            'These standards apply to all material submitted to Genie or posted through its interactive services. Contributions must be accurate where they state facts, must reflect genuinely held opinions, and must comply with the laws of Saint Lucia. Contributions must not be defamatory, obscene, offensive, hateful, sexually explicit, or violent; must not encourage discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age; and must not infringe intellectual property rights, mislead others, breach legal duties owed to third parties, promote unlawful activity, impersonate others, create unnecessary annoyance or anxiety, invade privacy, or falsely suggest affiliation with or endorsement by Genie.',
        },
        {
          id: 5,
          icon: ShieldAlert,
          title: 'Enforcement, Suspension and Termination',
          content:
            'Genie may determine, in its discretion, whether a breach of this policy has occurred and may take such action as it considers appropriate. Non-compliance with this policy constitutes a material breach of the site’s Terms of Use and may result in temporary or permanent suspension of access, removal of uploaded materials or postings, formal warnings, legal action to recover associated costs, further legal proceedings, and disclosure of relevant information to law enforcement authorities. Genie excludes liability for any action taken in response to a breach and reserves the right to take any reasonable protective measure it deems necessary for the security of the site and its users.',
        },
        {
          id: 6,
          icon: RefreshCcw,
          title: 'Updates to the Policy',
          content:
            'Genie may amend this policy at any time by updating this page. Users are expected to review it periodically, as all changes become legally binding once published. Certain provisions may also be superseded by notices or updates published elsewhere on the website.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about this Website Acceptance Use Policy, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'سياسة الاستخدام المقبول للموقع',
      subtitle:
        'تُعد Genie Ltd جهة مسجلة وتعمل في سانت لوسيا. وتحدد هذه السياسة القواعد التي يجوز بموجبها للزوار والمستخدمين الوصول إلى موقع Genie الإلكتروني واستخدامه على www.geniefx.com.',
      description:
        'ينطوي تداول العقود المشتقة خارج البورصة ذات الهامش، بما في ذلك عقود الفروقات وتداول العملات الأجنبية الفوري، على مستوى مرتفع من المخاطر بسبب الرافعة المالية وقد يؤدي إلى خسائر مالية سريعة. ويوصى بالحصول على مشورة مهنية قبل التداول.',
      disclaimer:
        'باستخدامك لموقع Genie الإلكتروني، فإنك توافق على الالتزام بهذه السياسة وبأي سياسات أو شروط أخرى ذات صلة بالموقع تكمل الشروط العامة لاستخدام الموقع.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'نطاق هذه السياسة',
          content:
            'تحدد سياسة الاستخدام المقبول هذه الشروط التي يجوز بموجبها للمستخدمين الوصول إلى موقع Genie الإلكتروني واستخدامه. وهي تنطبق على جميع الزوار والمستخدمين للموقع. وباستخدام الموقع، فإنك تؤكد موافقتك على الالتزام بهذه السياسة وكذلك بأي سياسات أخرى ذات صلة بالموقع تكمل الشروط العامة لاستخدام الموقع.',
        },
        {
          id: 2,
          icon: Ban,
          title: 'الأنشطة المحظورة',
          content:
            'لا يجوز استخدام الموقع إلا للأغراض المشروعة. ويُحظر على المستخدمين استخدام الموقع لانتهاك أي قانون أو لائحة محلية أو وطنية أو دولية سارية، أو الانخراط في سلوك احتيالي أو غير قانوني أو مضلل، أو الإضرار بالقاصرين، أو تحميل أو إرسال أو مشاركة محتوى يخالف معايير المحتوى الخاصة بـ Genie، أو إرسال إعلانات غير مرغوب فيها أو رسائل مزعجة أو مواد ترويجية، أو نشر فيروسات أو برامج خبيثة أو برامج تجسس أو أي تعليمات ضارة تهدف إلى تعطيل البرمجيات أو الأجهزة. كما يوافق المستخدمون على عدم نسخ أو إعادة إنتاج أو إعادة بيع أو استغلال أي جزء من الموقع بما يخالف شروط الموقع، وعدم الوصول إلى الموقع أو التدخل فيه أو في الخوادم والشبكات المستضيفة له أو في أي أنظمة لطرف ثالث متصلة به.',
        },
        {
          id: 3,
          icon: MessageSquareWarning,
          title: 'الخدمات التفاعلية',
          content:
            'يجوز لـ Genie توفير خدمات تفاعلية من وقت لآخر، مثل غرف الدردشة أو لوحات الرسائل. وعند تقديم مثل هذه الخدمات، ستوفر Genie معلومات واضحة حول طبيعة الخدمة، وما إذا كانت خاضعة للإشراف، وما إذا كان هذا الإشراف يتم بشريًا أو آليًا. ويجوز لـ Genie تقييم المخاطر المرتبطة بمساهمات الأطراف الثالثة، خاصة عندما يكون القاصرون معنيين، وتحديد ما إذا كان الإشراف مناسبًا. ومع ذلك، لا تلتزم Genie بمراقبة جميع الخدمات التفاعلية، وتستبعد مسؤوليتها عن أي خسائر تنشأ عن مساهمات المستخدمين سواء كانت هذه الخدمات خاضعة للإشراف أم لا. وعندما يتوفر الإشراف، فعادة ما يتم توفير بيانات الاتصال بالمشرف لمعالجة الشكاوى أو المخاوف.',
        },
        {
          id: 4,
          icon: FileCheck,
          title: 'معايير المحتوى',
          content:
            'تنطبق هذه المعايير على جميع المواد المقدمة إلى Genie أو المنشورة من خلال خدماتها التفاعلية. ويجب أن تكون المساهمات دقيقة إذا تضمنت وقائع، وأن تعكس آراء حقيقية، وأن تمتثل لقوانين سانت لوسيا. كما يجب ألا تكون المساهمات تشهيرية أو فاحشة أو مسيئة أو قائمة على الكراهية أو ذات طابع جنسي أو عنيف، وألا تشجع على التمييز على أساس العرق أو الجنس أو الدين أو الجنسية أو الإعاقة أو التوجه الجنسي أو العمر، وألا تنتهك حقوق الملكية الفكرية أو تضلل الآخرين أو تخل بالواجبات القانونية تجاه الغير أو تروج لأنشطة غير قانونية أو تنتحل شخصية الغير أو تسبب إزعاجًا أو قلقًا غير ضروري أو تنتهك الخصوصية أو توحي زورًا بوجود علاقة أو تأييد من Genie.',
        },
        {
          id: 5,
          icon: ShieldAlert,
          title: 'الإنفاذ والتعليق والإنهاء',
          content:
            'يجوز لـ Genie أن تقرر، وفقًا لتقديرها، ما إذا كان قد حدث خرق لهذه السياسة وأن تتخذ الإجراء الذي تراه مناسبًا. ويُعد عدم الامتثال لهذه السياسة خرقًا جوهريًا لشروط استخدام الموقع، وقد يؤدي إلى تعليق مؤقت أو دائم للوصول إلى الموقع، أو إزالة المواد أو المشاركات التي قمت بتحميلها، أو إصدار تحذيرات، أو اتخاذ إجراءات قانونية لاسترداد التكاليف ذات الصلة، أو رفع دعاوى إضافية عند الضرورة، أو الإفصاح عن المعلومات ذات الصلة إلى سلطات إنفاذ القانون. وتستبعد Genie مسؤوليتها عن أي إجراء يتم اتخاذه استجابةً لخرق هذه السياسة، كما تحتفظ بحقها في اتخاذ أي تدبير معقول تراه ضروريًا لحماية الموقع ومستخدميه.',
        },
        {
          id: 6,
          icon: RefreshCcw,
          title: 'تحديثات السياسة',
          content:
            'يجوز لـ Genie تعديل هذه السياسة في أي وقت من خلال تحديث هذه الصفحة. ويُتوقع من المستخدمين مراجعتها بشكل دوري، حيث تصبح جميع التغييرات ملزمة قانونًا بمجرد نشرها. كما قد يتم استبدال بعض الأحكام بإشعارات أو تحديثات منشورة في أماكن أخرى على الموقع الإلكتروني.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن سياسة الاستخدام المقبول للموقع هذه، يرجى التواصل معنا:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
  };

  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 20px 40px rgba(24, 2, 72, 0.15)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#f8f7fc] via-white to-[#f0eef8] ${
        language === 'ar' ? 'direction-rtl' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#180248] py-8 text-white"
      >
        <div className="absolute inset-0 opacity-15">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="h-full w-full"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
              className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg"
            >
              <Shield className="h-10 w-10" />
            </motion.div>

            <h1
              className={`banner-heading-gradient mb-6 text-2xl font-extrabold md:text-3xl ${
                language === 'ar' ? 'font-arabic py-6' : ''
              }`}
            >
              {t.title}
            </h1>

            <p
              className={`mx-auto mb-4 max-w-4xl text-md text-white/90 md:text-lg ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t.subtitle}
            </p>

            <p
              className={`mx-auto max-w-3xl text-md text-white/80 md:text-lg ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t.description}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f8f7fc"
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mx-auto -mt-8 max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#180248] to-[#2d1360] p-6 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <AlertCircle className="h-5 w-5 text-white" />
              </div>
            </div>
            <p
              className={`text-sm leading-relaxed text-white/95 md:text-base ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t.disclaimer}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 md:py-12"
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
                className="overflow-hidden rounded-2xl border border-[#180248]/5 bg-white shadow-lg"
              >
                <div className="p-6 sm:p-8">
                  <div className="sm:hidden">
                    <div
                      className={`mb-4 flex items-center gap-3 ${
                        language === 'ar' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <motion.div
                        animate={{
                          scale: activeSection === section.id ? 1.1 : 1,
                          rotate: activeSection === section.id ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#180248] to-[#2d1360] shadow-lg">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </motion.div>

                      <div
                        className={`flex items-center gap-2 ${
                          language === 'ar' ? 'flex-row-reverse' : ''
                        }`}
                      >
                        <span className="text-lg font-bold text-[#180248]">
                          {section.id}.
                        </span>
                        <h3
                          className={`text-lg font-bold text-[#180248] ${
                            language === 'ar' ? 'font-arabic' : ''
                          }`}
                        >
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`text-sm leading-relaxed text-[#180248]/80 ${
                        language === 'ar' ? 'font-arabic text-right' : ''
                      }`}
                    >
                      {section.content}
                    </motion.p>
                  </div>

                  <div
                    className={`hidden items-start gap-6 sm:flex ${
                      language === 'ar' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <motion.div
                      animate={{
                        scale: activeSection === section.id ? 1.1 : 1,
                        rotate: activeSection === section.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#180248] to-[#2d1360] shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    <div
                      className={`min-w-0 flex-1 ${
                        language === 'ar' ? 'text-right' : ''
                      }`}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: language === 'ar' ? 20 : -20,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className={`mb-3 flex items-center gap-3 ${
                            language === 'ar' ? 'flex-row-reverse' : ''
                          }`}
                        >
                          <span className="text-xl font-bold text-[#180248]">
                            {section.id}.
                          </span>
                          <h3
                            className={`text-xl font-bold text-[#180248] ${
                              language === 'ar' ? 'font-arabic' : ''
                            }`}
                          >
                            {section.title}
                          </h3>
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className={`text-sm leading-relaxed text-[#180248]/80 ${
                            language === 'ar' ? 'font-arabic' : ''
                          }`}
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
                  className="h-1 origin-left bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#180248]"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="mx-auto mb-16 max-w-6xl overflow-hidden rounded-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-4xl bg-gradient-to-r from-[#180248] via-[#2d1360] to-[#180248] py-8 text-white"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-lg"
            >
              <Mail className="h-8 w-8" />
            </motion.div>

            <h2
              className={`mb-4 text-xl font-extrabold md:text-2xl ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t.contact.title}
            </h2>

            <p
              className={`mx-auto mb-8 max-w-xl text-md text-white/90 ${
                language === 'ar' ? 'font-arabic' : ''
              }`}
            >
              {t.contact.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <motion.a
                href={`mailto:${t.contact.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 font-semibold text-[#180248] shadow-xl transition-shadow hover:shadow-2xl"
              >
                <Mail className="h-5 w-5" />
                {t.contact.email}
              </motion.a>

              <motion.a
                href={`https://${t.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-lg transition-colors hover:bg-white/20"
              >
                <FileText className="h-5 w-5" />
                {t.contact.website}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteAcceptableUsePolicyPage;
