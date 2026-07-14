'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  Scale,
  Users,
  Eye,
  ShieldCheck,
  Gift,
  ClipboardCheck,
  ScrollText,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ConflictOfInterestPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Conflict of Interest Policy',
      subtitle:
        'Genie Ltd is an entity registered and operated in Saint Lucia and is committed to identifying, managing, and preventing conflicts of interest across all client interactions and business activities.',
      description:
        'This Policy explains how Genie protects clients by maintaining integrity, fairness, transparency, and independence whenever competing professional, personal, or commercial interests may arise.',
      disclaimer:
        'Genie is committed to acting with integrity, skill, and diligence, always prioritizing the client’s best interests and applying this Policy in line with applicable legal and regulatory principles.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'Purpose and Policy Objective',
          content:
            'Genie has established this Conflicts of Interest Policy to identify circumstances in which conflicts may arise and to implement procedures designed to prevent, manage, or mitigate them. The Policy reflects the Company’s commitment to acting fairly, diligently, and in the best interests of clients at all times while maintaining compliance with applicable laws, internal governance standards, and regulatory principles.',
        },
        {
          id: 2,
          icon: Scale,
          title: 'Definition and Overview',
          content:
            'A conflict of interest arises when Genie, its employees, directors, associates, related entities, or any person directly or indirectly connected to the Company has competing interests with a client or between clients. These conflicts may be actual or potential and may impair the Company’s ability to act independently, objectively, or impartially. Genie actively works to identify, monitor, and manage such situations so that all services are provided fairly and without bias.',
        },
        {
          id: 3,
          icon: Users,
          title: 'Scope of Application',
          content:
            'This Policy applies to all directors, employees, and persons directly or indirectly linked to Genie, collectively referred to as Relevant Persons, and covers the Company’s dealings with all clients regardless of classification. Conflicts may arise between the Company and a client, a Relevant Person and a client, two or more clients of the Company, or any group company and a client. Genie applies conflict management measures across each of these scenarios to preserve transparency, impartiality, and fair treatment.',
        },
        {
          id: 4,
          icon: Eye,
          title: 'Disclosure Procedures',
          content:
            'Where preventative measures are insufficient to eliminate a conflict of interest or fully protect the client’s interests, Genie will disclose the conflict to the client in sufficient detail before any relevant business is undertaken. This includes the nature, source, and potential impact of the conflict, together with the steps taken to avoid or mitigate it and any relationships or arrangements with third parties that could create the conflict. Such disclosure is intended as a last-resort measure so that the client can make an informed decision about whether to proceed despite the conflict.',
        },
        {
          id: 5,
          icon: ShieldCheck,
          title: 'Identification of Potential Conflicts of Interest',
          content:
            'To identify situations in which conflicts of interest may arise in connection with investment services, ancillary services, or any combination of them, Genie considers circumstances that may potentially harm the client’s interests. These include where the Company or a Relevant Person may obtain a financial or personal benefit, or avoid a loss, at the client’s expense; where there is an interest in the outcome of a service or transaction that differs from the client’s interest; where the Company or a Relevant Person carries on business activities similar to those of the client; where inducements such as gifts, payments, or other benefits may be received from third parties beyond standard fees or commissions; or where incentives may exist that favor one client or group of clients over another.',
        },
        {
          id: 6,
          icon: ShieldCheck,
          title: 'Internal Controls and Governance Measures',
          content:
            'Genie has implemented a broad set of internal controls to identify, reduce, and manage conflicts of interest. These include ongoing oversight by the Compliance Department and reporting to the Board of Directors, supervision of Relevant Persons operating in potentially sensitive roles, controls over access to confidential and electronic information, restrictions on the exchange of information between personnel where client harm could result, clear segregation of duties, Chinese wall arrangements, and the four-eye principle for key activities. Additional controls include restricting conflicting external business interests without prior Board approval, preventing undue influence over service delivery, supervising third-party service providers, applying risk-adjusted remuneration methodologies where appropriate, and ensuring that all marketing communications are reviewed and approved by Compliance before release.',
        },
        {
          id: 7,
          icon: ScrollText,
          title: 'Conflict of Interest Register',
          content:
            'Genie maintains a Conflicts of Interest Control Register that is regularly updated by the Compliance Department. This register records all services and activities where actual or potential conflicts may arise, including the type of conflict, mitigating measures, and assigned responsibilities. On a case-by-case basis, Compliance and Senior Management determine whether an activity can proceed where a conflict cannot be fully resolved. Where no adequate resolution is available, the Company may disclose the conflict to the client so that the client can make an informed decision on whether to continue.',
        },
        {
          id: 8,
          icon: Gift,
          title: 'Gifts, Hospitality and Personal Account Dealing',
          content:
            'Employees and directors are prohibited from accepting gifts, hospitality, promotional offers, discounts, or any monetary or non-monetary benefit from clients or third parties where this could give rise to a conflict of interest. Staff must comply with Genie’s Gifts and Hospitality Policy to avoid undue influence over decision-making. In addition, Genie operates a Personal Account Dealing Policy governing personal investment transactions by employees, directors, and other relevant persons. Personal trading must never conflict with client interests, interfere with the execution of client orders, or compromise impartiality in the delivery of services.',
        },
        {
          id: 9,
          icon: ClipboardCheck,
          title: 'Monitoring, Record Keeping and Policy Review',
          content:
            'As part of Genie’s Compliance Monitoring Plan, the Compliance Department conducts annual reviews of the effectiveness of all Conflicts of Interest systems, controls, and policies. Genie also maintains and regularly updates a register of services and activities where conflicts of interest have arisen or may arise, including those involving a material risk of client harm. The Compliance Department is responsible for maintaining this register, reviewing conflicts, and updating the Policy at least annually so that it remains compliant with regulatory and operational requirements. Genie reserves the right to review or amend this Policy and its associated procedures at any time, with annual review undertaken to ensure the Policy remains current, legally compliant, and effective in managing conflicts of interest.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about this Conflict of Interest Policy, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'سياسة تضارب المصالح',
      subtitle:
        'تُعد Genie Ltd جهة مسجلة وتعمل في سانت لوسيا، وتلتزم بتحديد وإدارة ومنع تضارب المصالح في جميع تعاملاتها مع العملاء وأنشطتها التشغيلية.',
      description:
        'توضح هذه السياسة كيف تحمي Genie مصالح العملاء من خلال الحفاظ على النزاهة والعدالة والشفافية والاستقلالية كلما ظهرت مصالح مهنية أو شخصية أو تجارية متعارضة.',
      disclaimer:
        'تلتزم Genie بالعمل بنزاهة ومهارة وعناية، مع إعطاء الأولوية دائمًا للمصلحة الفضلى للعميل وتطبيق هذه السياسة بما يتوافق مع المتطلبات القانونية والتنظيمية المعمول بها.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'الغرض وهدف السياسة',
          content:
            'وضعت Genie هذه السياسة الخاصة بتضارب المصالح لتحديد الحالات التي قد ينشأ فيها تضارب في المصالح، ولتطبيق الإجراءات الكفيلة بمنعه أو إدارته أو الحد من آثاره. وتعكس هذه السياسة التزام الشركة بالتصرف بعدالة وعناية واجبة وبما يحقق المصلحة الفضلى للعملاء في جميع الأوقات، مع الحفاظ على الامتثال للقوانين المعمول بها ومعايير الحوكمة الداخلية والمبادئ التنظيمية.',
        },
        {
          id: 2,
          icon: Scale,
          title: 'التعريف والنظرة العامة',
          content:
            'ينشأ تضارب المصالح عندما تكون لدى Genie أو موظفيها أو مديريها أو شركائها أو الجهات المرتبطة بها أو أي شخص مرتبط بالشركة بصورة مباشرة أو غير مباشرة مصالح متنافسة مع العميل أو بين العملاء أنفسهم. وقد يكون هذا التضارب فعليًا أو محتملًا، وقد يؤثر في قدرة الشركة على التصرف باستقلالية أو موضوعية أو حياد. وتعمل Genie بشكل استباقي على تحديد هذه الحالات ومراقبتها وإدارتها لضمان تقديم جميع الخدمات بعدالة ودون تحيز.',
        },
        {
          id: 3,
          icon: Users,
          title: 'نطاق التطبيق',
          content:
            'تنطبق هذه السياسة على جميع المديرين والموظفين والأشخاص المرتبطين بـ Genie بصورة مباشرة أو غير مباشرة، ويشار إليهم مجتمعين باسم الأشخاص المعنيين، كما تشمل تعاملات الشركة مع جميع العملاء بغض النظر عن فئتهم أو تصنيفهم. وقد ينشأ التضارب بين الشركة والعميل، أو بين شخص معني والعميل، أو بين عميلين أو أكثر من عملاء الشركة، أو بين أي شركة ضمن المجموعة والعميل. وتطبق Genie تدابير إدارة التضارب في جميع هذه الحالات للحفاظ على الشفافية والحياد والمعاملة العادلة.',
        },
        {
          id: 4,
          icon: Eye,
          title: 'إجراءات الإفصاح',
          content:
            'عندما لا تكون التدابير الوقائية كافية لإزالة تضارب المصالح أو لحماية مصالح العميل بصورة كاملة، تقوم Genie بالإفصاح عن التضارب للعميل بشكل واضح ومفصل قبل مباشرة النشاط ذي الصلة. ويشمل ذلك طبيعة التضارب ومصدره وأثره المحتمل، إلى جانب الخطوات المتخذة لتجنبه أو الحد منه، وأي علاقات أو ترتيبات مع أطراف ثالثة قد تؤدي إلى نشوء هذا التضارب. ويُقصد بهذا الإفصاح أن يكون تدبيرًا أخيرًا يتيح للعميل اتخاذ قرار مستنير بشأن الاستمرار في الخدمة رغم وجود التضارب.',
        },
        {
          id: 5,
          icon: ShieldCheck,
          title: 'تحديد حالات تضارب المصالح المحتملة',
          content:
            'لتحديد الحالات التي قد ينشأ فيها تضارب مصالح فيما يتعلق بخدمات الاستثمار أو الخدمات المساندة أو أي مزيج منها، تنظر Genie في الظروف التي قد تضر بمصالح العميل. ويشمل ذلك الحالات التي قد تحقق فيها الشركة أو أي شخص معني منفعة مالية أو شخصية، أو يتجنب خسارة، على حساب مصلحة العميل؛ أو تكون له مصلحة في نتيجة خدمة أو معاملة تختلف عن مصلحة العميل؛ أو يزاول أنشطة مشابهة لأنشطة العميل بما يخلق مصلحة متنافسة؛ أو يتلقى حوافز من أطراف ثالثة مثل المدفوعات أو الهدايا أو غيرها من المنافع خارج نطاق الرسوم أو العمولات المعتادة؛ أو تكون لديه دوافع لتفضيل عميل أو مجموعة من العملاء على غيرهم.',
        },
        {
          id: 6,
          icon: ShieldCheck,
          title: 'الضوابط الداخلية وتدابير الحوكمة',
          content:
            'طبقت Genie مجموعة شاملة من الضوابط الداخلية لتحديد تضارب المصالح وتقليله وإدارته. وتشمل هذه الضوابط إشراف إدارة الامتثال ورفع التقارير إلى مجلس الإدارة، ومراقبة الأشخاص المعنيين العاملين في أدوار قد تكون حساسة، والتحكم في الوصول إلى المعلومات الإلكترونية والسرية، ووضع قيود على تبادل المعلومات بين الموظفين عندما قد يؤدي ذلك إلى الإضرار بالعملاء، والفصل الواضح بين المهام، وتطبيق جدران صينية داخلية، ومبدأ الرقابة المزدوجة على الأنشطة الرئيسية. كما تشمل الضوابط تقييد المصالح التجارية الخارجية المتعارضة دون موافقة مسبقة من المجلس، ومنع أي تأثير غير مبرر على تقديم الخدمات، والإشراف على الأطراف الثالثة، وتطبيق منهجيات مكافآت تراعي المخاطر عند الاقتضاء، وضمان مراجعة جميع المواد التسويقية والموافقة عليها من قبل إدارة الامتثال قبل نشرها.',
        },
        {
          id: 7,
          icon: ScrollText,
          title: 'سجل تضارب المصالح',
          content:
            'تحتفظ Genie بسجل رقابي لتضارب المصالح يتم تحديثه بانتظام من قبل إدارة الامتثال. ويسجل هذا السجل جميع الخدمات والأنشطة التي قد تنشأ فيها حالات تضارب فعلية أو محتملة، بما في ذلك نوع التضارب، والتدابير المخففة، والمسؤوليات المحددة. كما تقوم إدارة الامتثال والإدارة العليا بتقييم كل حالة على حدة لتحديد ما إذا كان يمكن المضي في النشاط عندما يتعذر حل التضارب بالكامل. وإذا لم يكن هناك حل مناسب، فقد تقوم الشركة بالإفصاح عن التضارب للعميل حتى يتمكن من اتخاذ قرار مستنير بشأن الاستمرار في المعاملة.',
        },
        {
          id: 8,
          icon: Gift,
          title: 'الهدايا والضيافة والتعامل في الحسابات الشخصية',
          content:
            'يُحظر على الموظفين والمديرين قبول الهدايا أو الضيافة أو العروض الترويجية أو الخصومات أو أي منفعة مالية أو عينية من العملاء أو الأطراف الثالثة إذا كان من شأن ذلك أن يؤدي إلى تضارب في المصالح. ويجب على جميع الموظفين الالتزام بسياسة Genie الخاصة بالهدايا والضيافة لتجنب أي تأثير غير مبرر على اتخاذ القرارات. بالإضافة إلى ذلك، تطبق Genie سياسة خاصة بالتعامل في الحسابات الشخصية تنظم المعاملات الاستثمارية الشخصية للموظفين والمديرين وغيرهم من الأشخاص المعنيين. ويجب ألا تتعارض هذه التعاملات الشخصية مع مصالح العملاء أو تؤثر في تنفيذ أوامرهم أو تقوض الحياد في تقديم الخدمات.',
        },
        {
          id: 9,
          icon: ClipboardCheck,
          title: 'المراقبة والاحتفاظ بالسجلات ومراجعة السياسة',
          content:
            'تقوم إدارة الامتثال، كجزء من خطة الرقابة الخاصة بـ Genie، بإجراء مراجعات سنوية لفعالية جميع أنظمة وضوابط وسياسات تضارب المصالح. كما تحتفظ Genie بسجل يتم تحديثه بانتظام للأنشطة والخدمات التي نشأت فيها حالات تضارب مصالح أو قد تنشأ فيها، بما في ذلك الحالات التي تنطوي على مخاطر جوهرية على العميل. وتتولى إدارة الامتثال مسؤولية الحفاظ على هذا السجل، ومراجعة حالات التضارب، وتحديث السياسة مرة واحدة على الأقل سنويًا لضمان بقائها متوافقة مع المتطلبات التنظيمية والتشغيلية. كما تحتفظ Genie بحق مراجعة هذه السياسة أو تعديلها وإجراءاتها المرتبطة بها في أي وقت، مع إجراء مراجعة سنوية للتأكد من أنها تظل حديثة وفعالة ومتوافقة قانونيًا في إدارة تضارب المصالح.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن سياسة تضارب المصالح هذه، يرجى التواصل معنا:',
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

export default ConflictOfInterestPolicyPage;
