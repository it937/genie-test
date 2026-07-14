'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  MoonStar,
  BadgeDollarSign,
  ShieldCheck,
  Landmark,
  ClipboardCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SwapFreeTermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Swap Free Terms and Conditions',
      subtitle:
        'These Swap-Free Trading Terms are issued by Genie Ltd, an entity registered and operated in Saint Lucia, and apply only to clients who have been approved for a Swap-Free Trading Account.',
      description:
        'These Swap-Free Terms supplement the general Terms and Conditions governing the trading relationship between Genie and its clients and apply exclusively to approved Swap-Free Accounts.',
      disclaimer:
        'Swap-Free status is subject to Genie’s approval, ongoing monitoring, and the client’s continued compliance with these Terms and the general trading Terms.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'General Overview and Eligibility',
          content:
            'A Swap-Free Account allows eligible clients to trade designated instruments without the application of traditional rollover interest, storage charges, or overnight financing fees on qualifying products when positions remain open across the platform rollover time of 23:59:59 to 00:00 platform time. Genie’s default account type includes standard swap charges, and clients who require Swap-Free treatment must request it separately, subject to eligibility review and approval by Genie. Eligible instruments generally include major and minor forex pairs as well as selected metals such as gold and silver, while other instruments may become subject to administrative charges if held overnight.',
        },
        {
          id: 2,
          icon: BadgeDollarSign,
          title: 'Islamic Account Structure and Administrative Fees',
          content:
            'Instead of conventional swap charges, Genie may apply an administrative fee when positions remain open overnight beyond the defined Grace Period. This fee replaces the interest component normally associated with rollover. The administrative fee is variable and may depend on liquidity provider costs and prevailing market conditions. Because Genie operates under a Straight-Through Processing (STP) model, charges imposed by liquidity providers may be reflected accordingly in client accounts. Positions held longer than the permitted Grace Period may incur a daily administrative fee regardless of whether the position is long or short, and if a position already exceeds the Grace Period when these Terms come into effect, the applicable administrative fee may be applied immediately without further notice.',
        },
        {
          id: 3,
          icon: MoonStar,
          title: 'Grace Period, Charges and Account Impact',
          content:
            'Swap-Free clients may hold certain qualifying instruments without administrative charges during the Grace Period, which is five trading days from the date the position is opened. After that period, an administrative fee may apply daily to overnight positions. Administrative fees are deducted from the Equity of the client’s trading Account at the end of the trading day and may affect both account equity and available margin. Clients remain solely responsible for monitoring their accounts and maintaining sufficient margin to support open positions.',
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: 'Restrictions, Misuse and Enforcement',
          content:
            'Clients must not use a Swap-Free Account primarily to exploit differences in swap pricing or to generate profit through swap-related strategies. Where a standard account is converted into a Swap-Free Account, any swap credits that would otherwise have arisen during the conversion process may not be recoverable. Genie reserves the right to take action if misuse, manipulation, arbitrage, fraudulent activity, or any other abusive trading behavior is identified. In such cases, Genie may rely on any remedies available under the general Terms, remove Swap-Free status immediately, cancel affected trades and declare resulting profit or loss void, recover unpaid swap-related costs or administrative expenses, or terminate the Swap-Free Terms without notice or court intervention.',
        },
        {
          id: 5,
          icon: Landmark,
          title: 'Discretion, Governing Law and Supplementary Terms',
          content:
            'Genie reserves the right, at its sole discretion and without providing a specific explanation, to reject a request for a Swap-Free Account or withdraw Swap-Free status from an existing account, in which case the account may revert to a standard swap-enabled account. If the client does not accept that change, the client may terminate the trading relationship under the general Terms. Terms and expressions not specifically defined in these Swap-Free Terms carry the meaning given to them in the general Terms. These provisions are governed by and interpreted in accordance with the laws of Saint Lucia, and where translated into another language, the English version prevails in the event of any conflict. The general Terms form an integral part of these Swap-Free Terms, and all rights, powers, and protections available to Genie under the main agreement remain valid and enforceable.',
        },
        {
          id: 6,
          icon: ClipboardCheck,
          title: 'Client Acknowledgement',
          content:
            'By opening or using a Swap-Free Account, the client acknowledges and agrees that Genie may apply charges for overnight positions in accordance with these Terms and prevailing market conditions, that spreads and commissions on Swap-Free Accounts may differ from those of standard accounts and may be wider where necessary, that Swap-Free Accounts are subject to ongoing monitoring and periodic compliance checks, and that certain instruments may still incur fees during rollover periods as displayed within the trading platform under the swap field.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about these Swap Free Terms and Conditions, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'شروط وأحكام الحساب الخالي من السواب',
      subtitle:
        'تصدر هذه الشروط الخاصة بالتداول الخالي من السواب من قبل Genie Ltd، وهي جهة مسجلة وتعمل في سانت لوسيا، وتنطبق فقط على العملاء الذين تمت الموافقة لهم على حساب تداول خالٍ من السواب.',
      description:
        'تكمل هذه الشروط الخاصة بالحساب الخالي من السواب الشروط والأحكام العامة التي تنظم العلاقة التداولية بين Genie وعملائها، وتنطبق حصريًا على الحسابات المعتمدة كحسابات خالية من السواب.',
      disclaimer:
        'تخضع حالة الحساب الخالي من السواب لموافقة Genie والمراقبة المستمرة والامتثال الدائم من جانب العميل لهذه الشروط وللشروط العامة للتداول.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'نظرة عامة عامة والأهلية',
          content:
            'يتيح الحساب الخالي من السواب للعملاء المؤهلين تداول أدوات محددة دون تطبيق فائدة التبييت التقليدية أو رسوم التخزين أو رسوم التمويل الليلي على المنتجات المؤهلة عندما تظل المراكز مفتوحة عبر وقت الترحيل على المنصة من 23:59:59 إلى 00:00 بتوقيت المنصة. ويشمل النوع الافتراضي لحسابات Genie رسوم السواب المعتادة، لذلك يجب على العملاء الذين يحتاجون إلى معاملة خالية من السواب تقديم طلب مستقل يخضع لمراجعة الأهلية والموافقة من Genie. وتشمل الأدوات المؤهلة عادةً أزواج الفوركس الرئيسية والثانوية وبعض المعادن المختارة مثل الذهب والفضة، بينما قد تخضع الأدوات الأخرى لرسوم إدارية إذا تم الاحتفاظ بها طوال الليل.',
        },
        {
          id: 2,
          icon: BadgeDollarSign,
          title: 'هيكل الحساب الإسلامي والرسوم الإدارية',
          content:
            'بدلاً من رسوم السواب التقليدية، قد تطبق Genie رسومًا إدارية عندما تظل المراكز مفتوحة طوال الليل بعد انتهاء فترة السماح المحددة. وتحل هذه الرسوم محل عنصر الفائدة المرتبط عادةً بالتبييت. وتكون الرسوم الإدارية متغيرة وقد تعتمد على تكاليف مزودي السيولة وظروف السوق السائدة. ونظرًا لأن Genie تعمل وفق نموذج المعالجة المباشرة STP، فقد تنعكس الرسوم التي يفرضها مزودو السيولة وفقًا لذلك في حسابات العملاء. كما قد تخضع المراكز التي تتجاوز فترة السماح لرسوم إدارية يومية بغض النظر عما إذا كان المركز شراءً أو بيعًا، وإذا كان المركز قد تجاوز بالفعل فترة السماح عند بدء نفاذ هذه الشروط، فيجوز تطبيق الرسوم الإدارية فورًا دون إشعار إضافي.',
        },
        {
          id: 3,
          icon: MoonStar,
          title: 'فترة السماح والرسوم وأثرها على الحساب',
          content:
            'يجوز لعملاء الحساب الخالي من السواب الاحتفاظ ببعض الأدوات المؤهلة دون رسوم إدارية خلال فترة السماح، وهي خمسة أيام تداول من تاريخ فتح المركز. وبعد انتهاء هذه الفترة، قد تُطبق رسوم إدارية يومية على المراكز الليلية. وتُخصم الرسوم الإدارية من حقوق الملكية في حساب التداول الخاص بالعميل في نهاية يوم التداول، وقد تؤثر في حقوق الملكية الإجمالية والهامش المتاح. ويظل العميل مسؤولاً وحده عن مراقبة حسابه والحفاظ على هامش كافٍ لدعم المراكز المفتوحة.',
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: 'القيود وسوء الاستخدام وإجراءات الإنفاذ',
          content:
            'يجب على العملاء عدم استخدام الحساب الخالي من السواب بشكل أساسي لاستغلال فروقات تسعير السواب أو تحقيق أرباح من خلال استراتيجيات مرتبطة بالسواب. وعند تحويل حساب عادي إلى حساب خالٍ من السواب، قد لا يكون بالإمكان استرداد أي أرصدة سواب كانت ستُضاف خلال عملية التحويل. وتحتفظ Genie بحقها في اتخاذ الإجراءات اللازمة إذا تم اكتشاف سوء استخدام أو تلاعب أو مراجحة أو نشاط احتيالي أو أي سلوك تداولي مسيء. وفي هذه الحالات، يجوز لـ Genie الاستناد إلى أي وسائل انتصاف متاحة بموجب الشروط العامة، أو إزالة حالة الحساب الخالي من السواب فورًا، أو إلغاء الصفقات المتأثرة واعتبار أي أرباح أو خسائر ناتجة عنها باطلة، أو استرداد تكاليف السواب أو المصاريف الإدارية غير المدفوعة، أو إنهاء هذه الشروط دون إشعار أو تدخل قضائي.',
        },
        {
          id: 5,
          icon: Landmark,
          title: 'السلطة التقديرية والقانون الحاكم والأحكام المكملة',
          content:
            'تحتفظ Genie بحقها، وفقًا لتقديرها المنفرد ودون تقديم تفسير محدد، في رفض طلب فتح حساب خالٍ من السواب أو سحب هذه الميزة من حساب قائم، وفي هذه الحالة قد يعود الحساب إلى حساب عادي خاضع لرسوم السواب. وإذا لم يقبل العميل هذا التغيير، فيجوز له إنهاء العلاقة التداولية وفقًا للشروط العامة. كما تحمل المصطلحات والتعابير غير المعرفة تحديدًا في هذه الشروط المعنى الممنوح لها في الشروط العامة. وتخضع هذه الأحكام وتفسر وفقًا لقوانين سانت لوسيا، وإذا تمت ترجمتها إلى لغة أخرى، تسود النسخة الإنجليزية في حالة التعارض. وتشكل الشروط العامة جزءًا لا يتجزأ من هذه الشروط، كما تبقى جميع الحقوق والصلاحيات والحمايات الممنوحة لـ Genie بموجب الاتفاقية الرئيسية سارية ونافذة.',
        },
        {
          id: 6,
          icon: ClipboardCheck,
          title: 'إقرار العميل',
          content:
            'من خلال فتح أو استخدام حساب خالٍ من السواب، يقر العميل ويوافق على أن Genie قد تطبق رسومًا على المراكز الليلية وفقًا لهذه الشروط وظروف السوق السائدة، وأن فروقات الأسعار والعمولات في الحسابات الخالية من السواب قد تختلف عن الحسابات العادية وقد تكون أوسع عند الحاجة، وأن هذه الحسابات تخضع للمراقبة المستمرة وفحوصات الامتثال الدورية، وأن بعض الأدوات قد تظل خاضعة لرسوم خلال فترات التبييت كما هو موضح في منصة التداول ضمن خانة السواب.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن شروط وأحكام الحساب الخالي من السواب هذه، يرجى التواصل معنا:',
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

export default SwapFreeTermsAndConditionsPage;
