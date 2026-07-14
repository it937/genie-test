'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  Handshake,
  BadgeDollarSign,
  Scale,
  Users,
  ShieldCheck,
  ScrollText,
  Landmark,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const IbTermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'IB Terms and Conditions',
      subtitle:
        'Genie Ltd is an entity registered and operated in Saint Lucia. These Terms govern the relationship between Genie LTD and the Introducing Broker (IB), together referred to as the Parties.',
      description:
        'This document outlines the scope of the IB relationship, compensation structure, compliance obligations, conduct standards, commission rules, termination rights, and the legal framework governing the arrangement.',
      disclaimer:
        'The IB relationship is limited to client introduction and related onboarding support. Nothing in these Terms authorizes the IB to act as Genie’s employee, agent, or financial adviser unless explicitly approved in writing.',
      sections: [
        {
          id: 1,
          icon: Handshake,
          title: 'Authorization and Scope',
          content:
            'Genie authorizes the IB to introduce clients to Genie’s trading platforms for the purpose of conducting trading activity. The IB’s role is limited to introducing prospective clients and supporting their onboarding within the boundaries of these Terms. Compensation becomes relevant only after a referred client has been approved and has actively funded a trading account, and the IB’s entitlement is based exclusively on the trading activity of referred clients.',
        },
        {
          id: 2,
          icon: BadgeDollarSign,
          title: 'Compensation, Rebates and Payout Procedures',
          content:
            'Genie shall remunerate the IB in accordance with these Terms and the applicable compensation schedule. Commission data will be made available through Genie’s secure, password-protected platform, and any discrepancies must be reported within five business days or the posted information will be deemed accepted. Commission withdrawals may only be processed upon written instruction from the IB and paid to an account in the IB’s own name held with a recognized financial institution, provided all obligations under these Terms have been satisfied. Genie may withhold, adjust, or decline payments where entitlement cannot be verified or where the Terms have not been complied with. No commission or rebate is payable for trades classified as Scalping Trades, and under no circumstances may the IB receive more than forty percent of the total funds introduced for a client account as rebates or commissions; any excess amount will be returned to the client account.',
        },
        {
          id: 3,
          icon: Scale,
          title: 'Conduct and Compliance Framework',
          content:
            'The IB must ensure that its officers, employees, and representatives comply with Genie’s policies and with all applicable laws and regulations in the IB’s jurisdiction, whether by direct compliance or valid exemption. Genie may explain the nature of the IB relationship to clients and retains full authority to approve or reject client applications and to administer all client accounts on its platforms. The IB must ensure that each referred client identifies the IB correctly on all required Genie forms and applications. Nothing in these Terms limits Genie’s right to enforce its client policies on introduced accounts, including restrictions, liquidations, or other account-level actions where required.',
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: 'Obligations and Ethical Standards',
          content:
            'The IB must clearly disclose that it receives referral-based compensation from Genie and ensure that clients understand the nature of this arrangement. The IB must not provide financial advice, make profit guarantees, or make misleading or unauthorized statements about Genie or its services. The IB may not present itself as an employee of Genie and must represent Genie accurately while remaining familiar with Genie’s procedures. Discretionary trading or trade execution on behalf of clients is only permitted where supported by a valid, signed, and pre-approved power of attorney. The IB also acknowledges that clients engaging in prohibited trading practices, such as manipulation, arbitrage, or other exploitative conduct, may be subject to sanctions by Genie. Any misrepresentation by the IB may result in immediate termination and forfeiture of unpaid compensation.',
        },
        {
          id: 5,
          icon: BookOpen,
          title: 'Remuneration Structure and Exclusions',
          content:
            'Certain instruments, including individual stocks, cryptocurrencies, ECN-based trades, and futures contracts, do not qualify for rebate payments, and no remuneration will be issued in respect of those products. Genie may adjust rebate levels for certain accounts when needed for risk-management purposes, with prior notice to the IB. The applicable remuneration framework is defined in the compensation table or schedule provided by Genie, including account categories, expected trading volume, rebate per standard lot, and any markup commission arrangements. Genie reserves the right to revise rebate rates, commission terms, or related commercial conditions as operational needs require, subject to notice being given to the IB.',
        },
        {
          id: 6,
          icon: Users,
          title: 'IB Declarations and Client Interaction Standards',
          content:
            'The IB confirms that it is properly constituted, lawfully operating, and compliant with all regulatory requirements applicable in its jurisdiction, whether acting as an individual or legal entity. The IB is solely responsible for its own tax obligations arising from income earned under these Terms. The IB may not use Genie’s trademarks, branding, or intellectual property without prior written approval and may not present itself as Genie’s employee or agent. The IB must ensure that all introduced clients complete the required account-opening documentation and provide all necessary supporting documents. Genie bears no responsibility for any guidance, recommendation, or statement made by the IB, and the IB accepts full liability for its own conduct and communications with clients. The IB’s role is limited to introductions and onboarding assistance and must not be portrayed as advisory or discretionary in nature unless separately authorized.',
        },
        {
          id: 7,
          icon: ScrollText,
          title: 'Company Obligations, Communication and Termination',
          content:
            'Genie shall compensate the IB for services performed under these Terms in line with the relevant payment schedule, subject to round-turn trade completion, minimum client balance requirements, and the accrual of applicable trading fees. Positions opened and closed within thirty seconds will not be included in rebate calculations, and bonus-sharing arrangements will be calculated based on fifty percent of the relevant trading volume where applicable. Genie may withhold or adjust payments where disputes, complaints, or unresolved review matters exist. All notices between the Parties must be in English and may be delivered by email or in person, with notices to Genie directed to support@geniefx.com. These Terms remain effective for one year and renew automatically unless terminated. Either Party may terminate on five business days’ written notice, while Genie may terminate immediately in the event of breach, misconduct, or misuse. On termination, the IB must remove or return all Genie-related branding, materials, documents, and intellectual property, and any outstanding remuneration will only be settled if the IB has fulfilled all obligations under these Terms.',
        },
        {
          id: 8,
          icon: Landmark,
          title: 'Governing Law, Disputes and General Terms',
          content:
            'These Terms are governed by and interpreted in accordance with the laws of Saint Lucia, and any disputes, claims, or controversies arising out of or in connection with them are subject to the exclusive jurisdiction of the courts of Saint Lucia. The Terms are drafted in English, and any translated version is provided for convenience only; if any inconsistency arises, the English version prevails. All business information and client details must be kept strictly confidential, and confidentiality obligations continue indefinitely even after termination of the relationship.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about these IB Terms and Conditions, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'شروط وأحكام الوسيط المعرف',
      subtitle:
        'تُعد Genie Ltd جهة مسجلة وتعمل في سانت لوسيا. وتنظم هذه الشروط العلاقة بين Genie LTD والوسيط المعرف (IB)، ويشار إليهما معًا باسم الطرفين.',
      description:
        'توضح هذه الوثيقة نطاق علاقة الوسيط المعرف، وهيكل التعويضات، والالتزامات التنظيمية، ومعايير السلوك، وقواعد العمولات، وحقوق الإنهاء، والإطار القانوني الحاكم لهذه العلاقة.',
      disclaimer:
        'تقتصر علاقة الوسيط المعرف على تقديم العملاء ودعم إجراءات انضمامهم ذات الصلة. ولا تخول هذه الشروط الوسيط المعرف للعمل كموظف أو وكيل أو مستشار مالي لـ Genie ما لم تتم الموافقة على ذلك خطيًا بشكل صريح.',
      sections: [
        {
          id: 1,
          icon: Handshake,
          title: 'التفويض ونطاق العمل',
          content:
            'تمنح Genie الوسيط المعرف صلاحية تقديم العملاء إلى منصات التداول الخاصة بـ Genie بغرض ممارسة الأنشطة التداولية. ويقتصر دور الوسيط المعرف على تقديم العملاء المحتملين ودعم إجراءات انضمامهم ضمن الحدود المنصوص عليها في هذه الشروط. ولا ينشأ أي استحقاق للتعويض إلا بعد اعتماد العميل المُحال وتمويله الفعلي لحساب التداول، كما أن حق الوسيط في التعويض يستند حصريًا إلى نشاط التداول الخاص بالعملاء المُحالين.',
        },
        {
          id: 2,
          icon: BadgeDollarSign,
          title: 'التعويضات والخصومات وإجراءات السحب',
          content:
            'تقوم Genie بتعويض الوسيط المعرف وفقًا لهذه الشروط وجدول التعويضات المعمول به. وستتاح بيانات العمولات من خلال منصة آمنة ومحمية بكلمة مرور، ويجب الإبلاغ عن أي أخطاء خلال خمسة أيام عمل، وإلا اعتُبرت البيانات المنشورة مقبولة. ولا يجوز معالجة سحوبات العمولات إلا بناءً على تعليمات خطية من الوسيط المعرف، ويتم السداد فقط إلى حساب مصرفي باسمه لدى مؤسسة مالية معترف بها، وذلك بعد استيفاء جميع الالتزامات المنصوص عليها في هذه الشروط. ويجوز لـ Genie حجب المدفوعات أو تعديلها أو رفضها إذا تعذر التحقق من الاستحقاق أو إذا لم يتم الامتثال لهذه الشروط. ولا تُدفع أي عمولة أو خصم على الصفقات المصنفة كصفقات سكالبينج، ولا يجوز للوسيط المعرف، تحت أي ظرف، أن يتلقى أكثر من أربعين بالمائة من إجمالي الأموال المقدمة لحساب العميل على شكل خصومات أو عمولات؛ ويعاد أي مبلغ زائد إلى حساب العميل.',
        },
        {
          id: 3,
          icon: Scale,
          title: 'إطار السلوك والامتثال',
          content:
            'يجب على الوسيط المعرف التأكد من التزام مسؤوليه وموظفيه وممثليه بسياسات Genie وبجميع القوانين واللوائح السارية في نطاق اختصاصه، سواء بالامتثال المباشر أو بالإعفاء الصحيح قانونًا. ويجوز لـ Genie شرح طبيعة علاقة الوسيط المعرف للعملاء، كما تحتفظ بالسلطة الكاملة لقبول أو رفض طلبات العملاء وإدارة جميع حساباتهم على منصاتها. ويجب على الوسيط المعرف التأكد من أن كل عميل مُحال يذكر اسم الوسيط بشكل صحيح في جميع النماذج والطلبات المطلوبة. ولا يحد أي حكم في هذه الشروط من حق Genie في تطبيق سياساتها الخاصة بالعملاء على الحسابات المُحالة، بما في ذلك فرض القيود أو التصفية أو أي إجراءات أخرى على مستوى الحساب عند الحاجة.',
        },
        {
          id: 4,
          icon: ShieldCheck,
          title: 'الالتزامات والمعايير الأخلاقية',
          content:
            'يجب على الوسيط المعرف الإفصاح بوضوح عن أنه يتلقى تعويضًا قائمًا على الإحالة من Genie، والتأكد من فهم العملاء لطبيعة هذا الترتيب. كما لا يجوز له تقديم نصائح مالية أو ضمان أرباح أو إصدار بيانات مضللة أو غير مصرح بها بشأن Genie أو خدماتها. ولا يجوز له أن يقدّم نفسه على أنه موظف لدى Genie، ويجب أن يمثل خدماتها بدقة مع الإلمام بإجراءاتها. ولا يُسمح بالتداول التقديري أو تنفيذ الصفقات نيابة عن العملاء إلا إذا كان ذلك مدعومًا بتوكيل صحيح وموقع وموافق عليه مسبقًا. كما يقر الوسيط المعرف بأن العملاء الذين يستخدمون ممارسات تداول محظورة، مثل التلاعب أو المراجحة أو غيرها من السلوكيات الاستغلالية، قد يتعرضون لعقوبات من Genie. وأي تحريف أو تضليل من جانب الوسيط قد يؤدي إلى الإنهاء الفوري وفقدان أي تعويضات غير مدفوعة.',
        },
        {
          id: 5,
          icon: BookOpen,
          title: 'هيكل المكافآت والاستثناءات',
          content:
            'لا تؤهل بعض الأدوات المالية، بما في ذلك الأسهم الفردية والعملات المشفرة وتداولات ECN وعقود العقود الآجلة، للحصول على خصومات أو مكافآت، ولن يتم دفع أي تعويض بشأن هذه المنتجات. ويجوز لـ Genie تعديل مستويات الخصم لبعض الحسابات عند الحاجة لأغراض إدارة المخاطر، مع إخطار الوسيط المعرف مسبقًا. ويتم تحديد إطار التعويض المطبق ضمن جدول أو هيكل التعويضات الذي توفره Genie، بما في ذلك فئات الحسابات، وحجم التداول المتوقع، والخصم لكل لوت قياسي، وأي ترتيبات عمولات إضافية. كما تحتفظ Genie بحق تعديل معدلات الخصومات أو شروط العمولات أو الشروط التجارية ذات الصلة وفقًا للمتطلبات التشغيلية، مع إخطار الوسيط المعرف بذلك.',
        },
        {
          id: 6,
          icon: Users,
          title: 'إقرارات الوسيط ومعايير التعامل مع العملاء',
          content:
            'يؤكد الوسيط المعرف أنه قائم بشكل قانوني ويعمل بصورة مشروعة ومتوافق مع جميع المتطلبات التنظيمية السارية في نطاق اختصاصه، سواء كان فردًا أو كيانًا اعتباريًا. ويتحمل الوسيط وحده المسؤولية عن جميع الالتزامات الضريبية الناشئة عن الدخل المكتسب بموجب هذه الشروط. ولا يجوز له استخدام العلامات التجارية أو الهوية البصرية أو الملكية الفكرية الخاصة بـ Genie دون موافقة خطية مسبقة، كما لا يجوز له أن يقدم نفسه كموظف أو وكيل للشركة. ويجب عليه التأكد من أن جميع العملاء المُحالين يكملون مستندات فتح الحساب المطلوبة ويقدمون جميع الوثائق الداعمة اللازمة. ولا تتحمل Genie أي مسؤولية عن أي إرشاد أو توصية أو تصريح يصدر عن الوسيط، ويتحمل الوسيط كامل المسؤولية عن سلوكه واتصالاته مع العملاء. كما يقتصر دوره على تقديم العملاء ودعم انضمامهم، ولا يجوز تصويره على أنه دور استشاري أو تقديري ما لم يتم منحه هذا التفويض بشكل منفصل.',
        },
        {
          id: 7,
          icon: ScrollText,
          title: 'التزامات الشركة والتواصل والإنهاء',
          content:
            'تقوم Genie بتعويض الوسيط المعرف عن الخدمات المقدمة وفقًا لجدول الدفع المعمول به، وذلك رهناً بإتمام الصفقات الكاملة ذهابًا وإيابًا، والحفاظ على الحد الأدنى من أرصدة العملاء، وتراكم الرسوم التداولية ذات الصلة. ولن تدخل المراكز المفتوحة والمغلقة خلال ثلاثين ثانية في احتساب الخصومات، كما تُحسب ترتيبات تقاسم المكافآت على أساس خمسين بالمائة من حجم التداول ذي الصلة حيثما ينطبق ذلك. ويجوز لـ Genie حجب المدفوعات أو تعديلها في حال وجود نزاعات أو شكاوى أو مسائل قيد المراجعة. ويجب أن تكون جميع الإخطارات بين الطرفين باللغة الإنجليزية، ويمكن تسليمها عبر البريد الإلكتروني أو شخصيًا، على أن توجه الإخطارات إلى Genie عبر support@geniefx.com. وتظل هذه الشروط سارية لمدة سنة واحدة وتتجدد تلقائيًا ما لم يتم إنهاؤها. ويجوز لأي من الطرفين الإنهاء بإشعار خطي قبل خمسة أيام عمل، بينما يجوز لـ Genie الإنهاء الفوري في حالة الإخلال أو سوء السلوك أو إساءة الاستخدام. وعند الإنهاء، يجب على الوسيط إزالة أو إعادة جميع المواد والعلامات والمستندات والملكية الفكرية الخاصة بـ Genie، ولا تُسوى أي مبالغ مستحقة إلا إذا كان الوسيط قد استوفى جميع التزاماته بموجب هذه الشروط.',
        },
        {
          id: 8,
          icon: Landmark,
          title: 'القانون الحاكم والنزاعات والأحكام العامة',
          content:
            'تخضع هذه الشروط وتفسر وفقًا لقوانين سانت لوسيا، وتكون جميع النزاعات أو المطالبات أو الخلافات الناشئة عنها أو المتعلقة بها خاضعة للاختصاص الحصري لمحاكم سانت لوسيا. وقد صيغت هذه الشروط باللغة الإنجليزية، وأي ترجمة لها تُقدم لأغراض التيسير فقط، وفي حال وجود أي تعارض، تسود النسخة الإنجليزية. ويجب الحفاظ على سرية جميع معلومات الأعمال وبيانات العملاء بشكل صارم، وتستمر التزامات السرية إلى أجل غير مسمى حتى بعد انتهاء العلاقة.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن شروط وأحكام الوسيط المعرف هذه، يرجى التواصل معنا:',
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

export default IbTermsAndConditionsPage;
