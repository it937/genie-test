'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  MessagesSquare,
  FileWarning,
  BadgeCheck,
  SearchCheck,
  Clock3,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ComplaintsHandlingPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Complaints Handling Policy',
      subtitle:
        'Genie Ltd is an entity registered and operated in Saint Lucia and is committed to responding to all complaints, concerns, and service-related issues in a timely, courteous, and informative manner.',
      description:
        'This Policy explains how Genie handles inquiries and formal complaints, investigates service concerns, and works to resolve issues fairly while improving internal processes and maintaining compliance.',
      disclaimer:
        'Genie values client and public feedback and treats effective complaint handling as an important part of service quality, accountability, and regulatory compliance.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'Introduction and Commitment',
          content:
            'At Genie, we encourage clients and members of the public to share their experiences with our services, including where expectations may not have been met. The Company is committed to providing timely, courteous, and informative responses to all concerns raised. Effective complaint handling helps Genie rectify issues promptly, strengthen internal procedures, improve service quality, and ensure continued compliance with all applicable laws, rules, and regulations.',
        },
        {
          id: 2,
          icon: MessagesSquare,
          title: 'Handling Inquiries',
          content:
            'Clients seeking clarification or wishing to express dissatisfaction may contact Genie’s Customer Support Team by email, live chat, telephone, or in writing. Clients are encouraged to raise issues promptly and provide detailed information, including relevant dates, times, and transaction details, so the matter can be reviewed efficiently. Many issues arise from misunderstandings and can often be resolved quickly through standard customer service channels. Genie’s support team will endeavor to respond to inquiries within two business days. If the matter remains unresolved, it may be escalated to the Compliance Department for formal review.',
        },
        {
          id: 3,
          icon: FileWarning,
          title: 'Submitting a Formal Complaint',
          content:
            'A formal complaint is any written expression of dissatisfaction concerning the provision of investment services and addressed to Genie by a client, whether a natural or legal person. Only complaints submitted through authorized channels are considered official. Clients may submit complaints directly to the Compliance Department using the Complaint Form available on the Genie website or by email at support@geniefx.com. The Compliance Department is responsible for receiving, handling, investigating, and resolving all formal complaints.',
        },
        {
          id: 4,
          icon: BadgeCheck,
          title: 'Acknowledgement of Complaints',
          content:
            'Upon receipt of a formal complaint, Genie will acknowledge it within two business days and provide a unique reference number for future correspondence. Clients should use this reference number in all communications relating to the complaint so that the matter can be tracked accurately and handled with appropriate accountability.',
        },
        {
          id: 5,
          icon: SearchCheck,
          title: 'Investigation and Final Decision',
          content:
            'Genie will conduct a thorough investigation of each formal complaint. During this process, the Company may contact the client directly to request additional information or supporting documents, and clients are expected to cooperate fully to help expedite resolution. Once the investigation is complete, Genie will issue a final response setting out its findings, position, and any corrective or remedial action, where applicable.',
        },
        {
          id: 6,
          icon: Clock3,
          title: 'Resolution Timelines and Closure',
          content:
            'Genie aims to resolve complaints within fourteen (14) days from the date of submission. If a complaint requires further investigation, the client will be informed of the delay and given an expected resolution timeline. Depending on the complexity of the matter and the level of client cooperation, the Company may extend the resolution period by up to an additional month. A complaint may be treated as closed if the client does not respond to requests for information within two months of submission.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about this Complaints Handling Policy, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'سياسة معالجة الشكاوى',
      subtitle:
        'تُعد Genie Ltd جهة مسجلة وتعمل في سانت لوسيا، وتلتزم بالاستجابة لجميع الشكاوى والملاحظات والمسائل المتعلقة بالخدمة بطريقة سريعة ومهذبة وواضحة.',
      description:
        'توضح هذه السياسة كيفية تعامل Genie مع الاستفسارات والشكاوى الرسمية، وكيفية التحقيق في المسائل المتعلقة بالخدمة، والعمل على حلها بعدالة مع تحسين الإجراءات الداخلية والحفاظ على الامتثال.',
      disclaimer:
        'تُقدّر Genie ملاحظات العملاء والجمهور وتعتبر التعامل الفعال مع الشكاوى جزءًا أساسيًا من جودة الخدمة والمسؤولية والامتثال التنظيمي.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'المقدمة والالتزام',
          content:
            'في Genie، نشجع العملاء وأفراد الجمهور على مشاركة تجاربهم مع خدماتنا، بما في ذلك الحالات التي قد لا تكون فيها التوقعات قد تحققت بالكامل. وتلتزم الشركة بتقديم ردود سريعة ومهذبة ومفيدة على جميع الملاحظات أو المخاوف التي يتم إثارتها. ويساعد التعامل الفعال مع الشكاوى Genie على معالجة المشكلات بسرعة، وتعزيز الإجراءات الداخلية، وتحسين جودة الخدمة، وضمان الامتثال المستمر لجميع القوانين والقواعد واللوائح المعمول بها.',
        },
        {
          id: 2,
          icon: MessagesSquare,
          title: 'معالجة الاستفسارات',
          content:
            'يمكن للعملاء الذين يرغبون في طلب توضيح أو التعبير عن عدم رضاهم التواصل مع فريق دعم العملاء في Genie عبر البريد الإلكتروني أو الدردشة المباشرة أو الهاتف أو خطيًا. ويُشجَّع العملاء على الإبلاغ عن المشكلات في أقرب وقت ممكن وتقديم معلومات تفصيلية، بما في ذلك التواريخ والأوقات وتفاصيل المعاملات ذات الصلة، حتى يمكن مراجعة المسألة بكفاءة. فكثير من المسائل تنتج عن سوء فهم ويمكن حلها بسرعة من خلال قنوات خدمة العملاء المعتادة. ويسعى فريق الدعم في Genie إلى الرد على الاستفسارات خلال يومي عمل. وإذا بقيت المسألة دون حل، فيمكن تصعيدها إلى إدارة الامتثال لإجراء مراجعة رسمية.',
        },
        {
          id: 3,
          icon: FileWarning,
          title: 'تقديم شكوى رسمية',
          content:
            'تُعد الشكوى الرسمية أي تعبير خطي عن عدم الرضا يتعلق بتقديم خدمات الاستثمار وموجه إلى Genie من قبل عميل، سواء كان شخصًا طبيعيًا أو اعتباريًا. ولا تعتبر الشكاوى رسمية إلا إذا تم تقديمها من خلال القنوات المعتمدة. ويمكن للعملاء تقديم الشكاوى مباشرة إلى إدارة الامتثال باستخدام نموذج الشكاوى المتاح على موقع Genie أو عبر البريد الإلكتروني على support@geniefx.com. وتتحمل إدارة الامتثال مسؤولية استلام جميع الشكاوى الرسمية ومعالجتها والتحقيق فيها وتسويتها.',
        },
        {
          id: 4,
          icon: BadgeCheck,
          title: 'تأكيد استلام الشكاوى',
          content:
            'عند استلام الشكوى الرسمية، تقوم Genie بتأكيد استلامها خلال يومي عمل وتزويد العميل برقم مرجعي فريد لجميع المراسلات اللاحقة. ويجب استخدام هذا الرقم المرجعي في جميع الاتصالات المتعلقة بالشكوى حتى يمكن تتبعها بشكل صحيح والتعامل معها بمستوى مناسب من المساءلة.',
        },
        {
          id: 5,
          icon: SearchCheck,
          title: 'التحقيق والقرار النهائي',
          content:
            'ستجري Genie تحقيقًا شاملًا في كل شكوى رسمية. وخلال هذه العملية، قد تتواصل الشركة مع العميل مباشرة لطلب معلومات إضافية أو مستندات داعمة، ويُتوقع من العميل التعاون الكامل للمساعدة في تسريع عملية الحل. وبعد اكتمال التحقيق، ستصدر Genie ردًا نهائيًا يوضح النتائج التي توصلت إليها وموقفها وأي إجراءات تصحيحية أو علاجية، إن وجدت.',
        },
        {
          id: 6,
          icon: Clock3,
          title: 'الجداول الزمنية للحل وإغلاق الشكوى',
          content:
            'تسعى Genie إلى حل الشكاوى خلال أربعة عشر (14) يومًا من تاريخ التقديم. وإذا كانت الشكوى تتطلب مزيدًا من التحقيق، فسيتم إخطار العميل بالتأخير وتزويده بإطار زمني متوقع للحل. واعتمادًا على تعقيد المسألة ومستوى تعاون العميل، يجوز للشركة تمديد فترة المعالجة لمدة إضافية تصل إلى شهر واحد. وقد تعتبر الشكوى مغلقة إذا لم يستجب العميل لطلبات المعلومات خلال شهرين من تاريخ تقديمها.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن سياسة معالجة الشكاوى هذه، يرجى التواصل معنا:',
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

export default ComplaintsHandlingPolicyPage;
