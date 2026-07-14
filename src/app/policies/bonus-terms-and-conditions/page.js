'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  Gift,
  Calculator,
  Wallet,
  Ban,
  Scale,
  ShieldAlert,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const BonusTermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Bonus Terms and Conditions',
      subtitle:
        'These terms govern Genie LTD’s 20% deposit bonus promotion and explain the eligibility conditions, bonus limits, trading treatment, and the Company’s rights in relation to this promotional offer.',
      description:
        'Participation in this campaign requires an active Standard Bonus Account and a qualifying deposit. Bonus credit is intended for trading support only and remains subject to Genie’s promotional rules and compliance review.',
      disclaimer:
        'Genie reserves the right to amend, suspend, cancel, or discontinue the promotion or any associated bonus credit at its discretion, including in cases of misuse, abuse, or non-compliance with the promotion terms.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'Participation Requirements',
          content:
            'To participate in this promotion, the client must open and maintain an active Standard Bonus Account with Genie LTD. A minimum deposit of USD 100 is required to qualify, and the maximum cumulative bonus available under this campaign is USD 2,000 per client. The 20% Deposit Bonus applies to first deposits only. If a client withdraws funds from the trading account, the corresponding bonus amount may be partially or fully removed at the Company’s discretion. To remain eligible during the promotion period, clients should maintain sufficient deposited funds in the account.',
        },
        {
          id: 2,
          icon: Gift,
          title: 'Bonus Claim Procedure and Crediting',
          content:
            'Clients must first open a Standard Bonus Account with Genie LTD and complete the required deposit. Once the deposit is successfully verified by the Company, the applicable bonus credit will be automatically applied to the client’s trading account. Clients will receive confirmation or notification once the bonus has been successfully credited to their account balance.',
        },
        {
          id: 3,
          icon: Calculator,
          title: 'Calculation Method and Bonus Cap',
          content:
            'The bonus is calculated as 20% of the client’s qualifying deposit amount and is credited to the Standard Account as trading credit. The total maximum bonus available to any one client is USD 2,000 regardless of the number or size of deposits made. For example, a USD 1,000 deposit would qualify for a USD 200 bonus. If a client deposits USD 10,000 or more, the bonus remains limited to the maximum cap of USD 2,000.',
        },
        {
          id: 4,
          icon: Wallet,
          title: 'Withdrawal Conditions and Trading Use',
          content:
            'The bonus itself is provided for trading purposes only and functions primarily as additional trading margin. Clients may withdraw profits generated through trading, subject to the Company’s standard trading and withdrawal requirements. Genie reserves the right to adjust or cancel the bonus amount where withdrawals or internal transfers affect the bonus balance or otherwise impact eligibility under the promotion rules.',
        },
        {
          id: 5,
          icon: Ban,
          title: 'Non-Eligible Instruments',
          content:
            'Certain instruments are excluded from the bonus promotion. Stock CFDs and cryptocurrency trading pairs do not qualify for calculations related to the bonus program and will not be counted toward bonus-related trading treatment.',
        },
        {
          id: 6,
          icon: Scale,
          title: 'Promotion Governance and Company Discretion',
          content:
            'This promotional offer remains active until modified, suspended, or terminated by Genie LTD. By participating, clients confirm that they accept and agree to comply with all applicable promotional terms and conditions. Genie reserves the right to amend, update, discontinue, or otherwise revise the promotion and its terms at any time without prior notice. All determinations made by Genie regarding eligibility, issuance, and compliance with the promotion rules are final.',
        },
        {
          id: 7,
          icon: ShieldAlert,
          title: 'Cancellation Clause',
          content:
            'Genie LTD reserves the right to cancel or remove bonus credit from a client’s account if the promotion terms are breached or if the Company identifies misuse, abuse, or activity inconsistent with the intended purpose of the promotion.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about these Bonus Terms and Conditions, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'شروط وأحكام البونص',
      subtitle:
        'تنظم هذه الشروط عرض بونص الإيداع بنسبة 20% المقدم من Genie LTD، وتوضح شروط الأهلية وحدود البونص وطريقة استخدامه في التداول وحقوق الشركة المتعلقة بهذا العرض الترويجي.',
      description:
        'تتطلب المشاركة في هذه الحملة وجود حساب Standard Bonus Account نشط وإيداع مؤهل. ويُمنح رصيد البونص لأغراض دعم التداول فقط ويظل خاضعًا لقواعد العرض الترويجي وإجراءات الامتثال الخاصة بـ Genie.',
      disclaimer:
        'تحتفظ Genie بحقها في تعديل العرض الترويجي أو تعليقه أو إلغائه أو إنهائه، وكذلك أي رصيد بونص مرتبط به، وفقًا لتقديرها، بما في ذلك في حالات سوء الاستخدام أو الاستغلال أو عدم الالتزام بالشروط.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'متطلبات المشاركة',
          content:
            'للمشاركة في هذا العرض الترويجي، يجب على العميل فتح حساب Standard Bonus Account نشط والمحافظة عليه لدى Genie LTD. ويشترط حد أدنى للإيداع قدره 100 دولار أمريكي للتأهل، بينما يبلغ الحد الأقصى التراكمي للبونص المتاح ضمن هذه الحملة 2,000 دولار أمريكي لكل عميل. ويُطبق بونص الإيداع بنسبة 20% على الإيداع الأول فقط. وإذا قام العميل بسحب أموال من حساب التداول، فقد يتم إزالة مبلغ البونص المقابل جزئيًا أو كليًا وفقًا لتقدير الشركة. وللاحتفاظ بالأهلية خلال فترة العرض، يجب على العملاء المحافظة على مستوى كافٍ من الأموال المودعة في الحساب.',
        },
        {
          id: 2,
          icon: Gift,
          title: 'إجراءات المطالبة بالبونص وإضافته',
          content:
            'يجب على العميل أولاً فتح حساب Standard Bonus Account لدى Genie LTD وإتمام الإيداع المطلوب. وبعد التحقق من الإيداع بنجاح من قبل الشركة، يتم إضافة رصيد البونص المؤهل تلقائيًا إلى حساب التداول الخاص بالعميل. كما سيتلقى العميل تأكيدًا أو إشعارًا بعد إضافة البونص بنجاح إلى رصيد الحساب.',
        },
        {
          id: 3,
          icon: Calculator,
          title: 'طريقة الاحتساب والحد الأقصى للبونص',
          content:
            'يُحتسب البونص بنسبة 20% من مبلغ الإيداع المؤهل للعميل، ويتم قيده في الحساب القياسي كرصيد مخصص للتداول. ويبلغ الحد الأقصى الإجمالي للبونص الذي يمكن أن يحصل عليه أي عميل 2,000 دولار أمريكي بغض النظر عن عدد الإيداعات أو حجمها. فعلى سبيل المثال، إذا قام العميل بإيداع 1,000 دولار أمريكي، فسيكون البونص 200 دولار أمريكي. وإذا أودع العميل 10,000 دولار أمريكي أو أكثر، فسيظل البونص محدودًا بالسقف الأقصى البالغ 2,000 دولار أمريكي.',
        },
        {
          id: 4,
          icon: Wallet,
          title: 'شروط السحب والاستخدام في التداول',
          content:
            'يتم تقديم البونص لأغراض التداول فقط، ويعمل بشكل أساسي كهامش تداول إضافي. ويمكن للعملاء سحب الأرباح الناتجة عن التداول، وذلك رهناً بمتطلبات التداول والسحب المعمول بها لدى الشركة. وتحتفظ Genie بحقها في تعديل أو إلغاء مبلغ البونص إذا أثرت عمليات السحب أو التحويلات الداخلية على رصيد البونص أو على الأهلية ضمن قواعد العرض الترويجي.',
        },
        {
          id: 5,
          icon: Ban,
          title: 'الأدوات غير المؤهلة',
          content:
            'بعض الأدوات مستثناة من العرض الترويجي الخاص بالبونص. إذ لا تدخل عقود الفروقات على الأسهم وأزواج تداول العملات المشفرة ضمن الحسابات المتعلقة ببرنامج البونص، ولن يتم احتسابها ضمن المعاملة الخاصة بالبونص.',
        },
        {
          id: 6,
          icon: Scale,
          title: 'حوكمة العرض الترويجي والسلطة التقديرية للشركة',
          content:
            'يبقى هذا العرض الترويجي ساريًا إلى أن يتم تعديله أو تعليقه أو إنهاؤه من قبل Genie LTD. ومن خلال المشاركة، يؤكد العملاء قبولهم والتزامهم بجميع الشروط والأحكام المطبقة على العرض. كما تحتفظ Genie بحقها في تعديل أو تحديث أو إيقاف أو مراجعة العرض الترويجي وشروطه في أي وقت دون إشعار مسبق. وتُعد جميع القرارات التي تتخذها Genie بشأن الأهلية أو منح البونص أو الامتثال لقواعد العرض نهائية.',
        },
        {
          id: 7,
          icon: ShieldAlert,
          title: 'بند الإلغاء',
          content:
            'تحتفظ Genie LTD بحقها في إلغاء أو إزالة رصيد البونص من حساب العميل إذا تم انتهاك شروط العرض الترويجي أو إذا رصدت الشركة سوء استخدام أو استغلالًا أو نشاطًا يتعارض مع الغرض المقصود من العرض.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن شروط وأحكام البونص هذه، يرجى التواصل معنا:',
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

export default BonusTermsAndConditionsPage;
