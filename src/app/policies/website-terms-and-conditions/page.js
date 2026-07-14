'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  ScrollText,
  Globe,
  KeyRound,
  Copyright,
  Info,
  ExternalLink,
  TriangleAlert,
  Upload,
  Link2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WebsiteTermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Website Terms and Conditions',
      subtitle:
        'Genie Ltd is an entity registered and operated in Saint Lucia. These website terms govern access to and use of the Genie website together with related notices, policies, and disclaimers displayed on the site.',
      description:
        'Trading over-the-counter margined derivative products, including CFDs and spot foreign exchange, carries significant risk and may lead to rapid financial losses. Independent professional advice should be considered before making investment decisions.',
      disclaimer:
        'By accessing or using this website, you confirm that you have read, understood, and accepted these Terms of Use. If you do not agree, you should stop using the website immediately.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'Introduction and Additional Policies',
          content:
            'These website terms set out the conditions that govern use of the Genie website. Accessing or using the website is subject to these terms, the Client Agreement, and any notices, disclaimers, or policies displayed on the website, together referred to as the Terms of Use. By continuing to use the site, you agree to comply with them. Additional policies also apply, including the Privacy Policy, the Acceptable Use Policy, and the Cookie Policy, each of which supplements these website terms and should be reviewed alongside them.',
        },
        {
          id: 2,
          icon: ScrollText,
          title: 'Amendments, Updates and Website Availability',
          content:
            'Genie may amend these Terms of Use from time to time, and users should review the current version whenever they use the website. We may also update, modify, or improve the website to reflect changes in services, operations, or user needs. Genie does not guarantee uninterrupted or continuous access to the site and may suspend, restrict, or withdraw access temporarily or permanently for operational or business reasons, giving reasonable notice where practicable. Users are responsible for ensuring that anyone accessing the website through their internet connection is aware of these Terms and complies with them. The website is intended only for users in jurisdictions where the relevant services may lawfully be offered, and access is currently provided free of charge.',
        },
        {
          id: 3,
          icon: KeyRound,
          title: 'Security of Account Information',
          content:
            'If you are provided with, or choose, a user identification code, password, or other login credentials, you must keep them confidential and must not disclose them to any third party. Genie reserves the right to disable any login credentials, whether chosen by you or assigned by us, where we reasonably believe that you have failed to comply with these Terms of Use. If you know or suspect that your credentials have been compromised or accessed by another person, you must notify Genie promptly at support@geniefx.com.',
        },
        {
          id: 4,
          icon: Copyright,
          title: 'Intellectual Property Rights',
          content:
            'Genie is the owner or authorized licensee of all intellectual property rights in the website and the material published on it, and those rights are protected by international copyright laws and related treaties. Users may print one copy or download limited extracts for personal use and may share relevant material within their organization for informational purposes only. Materials must not be altered, edited, or used separately from accompanying content, and Genie’s ownership and authorship, together with that of any credited contributors, must always be acknowledged. Commercial use of website content requires prior written approval. If website material is copied, reproduced, or downloaded in breach of these Terms, the right to use the website terminates immediately and any copies may need to be returned or destroyed.',
        },
        {
          id: 5,
          icon: Info,
          title: 'Informational Content and Third-Party Resources',
          content:
            'The content available on the Genie website is provided for general informational purposes only and does not constitute financial, legal, or investment advice. It should not be relied upon as the basis for decision-making, and independent professional or specialist advice should be obtained before acting on any information presented on the website. Although Genie makes reasonable efforts to keep website content updated, we do not give any express or implied guarantee as to its accuracy, completeness, or timeliness. The website may also contain links to third-party websites, services, or resources provided solely for convenience and information; Genie does not control such external resources and accepts no responsibility for their content, policies, or availability.',
        },
        {
          id: 6,
          icon: ExternalLink,
          title: 'User Content and Interactive Areas',
          content:
            'Certain areas of the website may allow users to upload or share content through forums, message boards, chat features, or other interactive tools. Any information or material submitted by users is not reviewed, verified, or endorsed by Genie. Statements and opinions expressed by other users are their own and do not reflect Genie’s views, policies, or values. If you believe material uploaded by another user is inappropriate or violates applicable rules, you may report it to support@geniefx.com.',
        },
        {
          id: 7,
          icon: TriangleAlert,
          title: 'Liability and Limitation of Responsibility',
          content:
            'Genie does not exclude or restrict liability where doing so would be unlawful, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation by Genie’s employees, agents, or subcontractors. Liability relating to trading services or financial products is governed by the relevant provisions in the Client Terms and Conditions. For professional clients, Genie excludes all implied conditions, warranties, and representations relating to the website to the fullest extent permitted by law and is not liable for direct or indirect losses resulting from use of the website, inability to use it, or reliance on website content, including loss of profits, revenue, sales, savings, business opportunities, goodwill, or reputation. For retail clients, the website is intended for personal and non-commercial use only, and Genie is not responsible for loss of profits, loss of business, or business interruption arising from website use. If digital content provided through the website damages your device or files because Genie failed to exercise reasonable care and skill, Genie will repair the damage or provide compensation where required by law, except where the harm could have been avoided by installing available updates or following system or installation guidance.',
        },
        {
          id: 8,
          icon: Upload,
          title: 'Uploading Material and User Responsibilities',
          content:
            'When using any feature that allows you to upload content or communicate with other users, you must comply with the standards set out in the Acceptable Use Policy. By submitting content, you confirm that it complies with those standards and agree to indemnify Genie for losses or damages resulting from a breach. Content submitted to the website will be treated as non-confidential and non-proprietary. While you retain ownership rights in your content, you grant Genie a limited licence to use, reproduce, store, and distribute it where necessary. Genie may disclose your identity to a third party who claims that material uploaded by you infringes their intellectual property or privacy rights, may remove material that does not comply with the Acceptable Use Policy, and is not responsible for preserving copies of uploaded content. You remain responsible for maintaining your own backups.',
        },
        {
          id: 9,
          icon: Shield,
          title: 'Security, Viruses and System Misuse',
          content:
            'Genie does not guarantee that the website will always be secure or free from viruses, bugs, or other harmful components. Users are responsible for configuring their own information technology systems, software, and devices securely and should maintain appropriate antivirus protection at all times. You must not misuse the website by introducing malicious code, attempting unauthorized access to the website or related systems, or carrying out attacks such as denial-of-service or distributed denial-of-service attacks. Such conduct may constitute a criminal offence, may be reported to law enforcement authorities together with relevant identifying information, and will result in immediate termination of your right to use the website.',
        },
        {
          id: 10,
          icon: Link2,
          title: 'Linking to the Genie Website',
          content:
            'You may link to the Genie homepage provided that the link is fair, lawful, and does not damage or exploit Genie’s reputation. Links must not imply any partnership, endorsement, or approval where none exists, must not appear on websites not owned or controlled by you, and must not frame the Genie website within another website. Unless otherwise authorized, links may only be directed to the homepage. Genie reserves the right to withdraw linking permission at any time without prior notice. Any website linking to Genie must comply fully with the content standards of the Acceptable Use Policy. If you wish to use website content or create links beyond what is permitted, written permission must be requested from support@geniefx.com.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about these Website Terms and Conditions, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'شروط وأحكام الموقع الإلكتروني',
      subtitle:
        'تُعد Genie Ltd جهة مسجلة وتعمل في سانت لوسيا. وتنظم هذه الشروط الوصول إلى موقع Genie الإلكتروني واستخدامه، إلى جانب الإشعارات والسياسات وإخلاءات المسؤولية ذات الصلة المعروضة على الموقع.',
      description:
        'ينطوي تداول المنتجات المشتقة خارج البورصة ذات الهامش، بما في ذلك عقود الفروقات وتداول العملات الأجنبية الفوري، على مخاطر كبيرة وقد يؤدي إلى خسائر مالية سريعة. وينبغي النظر في الحصول على مشورة مهنية مستقلة قبل اتخاذ أي قرار استثماري.',
      disclaimer:
        'من خلال الوصول إلى هذا الموقع أو استخدامه، فإنك تؤكد أنك قرأت وفهمت ووافقت على شروط الاستخدام هذه. وإذا كنت لا توافق عليها، فيجب عليك التوقف فورًا عن استخدام الموقع.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'المقدمة والسياسات الإضافية',
          content:
            'تحدد هذه الشروط الأحكام التي تنظم استخدام موقع Genie الإلكتروني. ويخضع الدخول إلى الموقع أو استخدامه لهذه الشروط، ولاتفاقية العميل، ولأي إشعارات أو إخلاءات مسؤولية أو سياسات معروضة على الموقع، ويشار إليها مجتمعة باسم شروط الاستخدام. ومن خلال الاستمرار في استخدام الموقع، فإنك توافق على الالتزام بها. كما تنطبق سياسات إضافية عند استخدام الموقع، بما في ذلك سياسة الخصوصية وسياسة الاستخدام المقبول وسياسة ملفات تعريف الارتباط، وينبغي مراجعتها إلى جانب هذه الشروط.',
        },
        {
          id: 2,
          icon: ScrollText,
          title: 'التعديلات والتحديثات وتوفر الموقع',
          content:
            'يجوز لـ Genie تعديل شروط الاستخدام هذه من وقت لآخر، ويجب على المستخدمين مراجعة النسخة الحالية كلما استخدموا الموقع. كما يجوز لنا تحديث الموقع أو تعديله أو تحسينه ليعكس التغييرات في الخدمات أو العمليات أو احتياجات المستخدمين. ولا تضمن Genie الوصول المستمر أو غير المنقطع إلى الموقع، ويجوز لها تعليق الوصول إليه أو تقييده أو سحبه مؤقتًا أو دائمًا لأسباب تشغيلية أو تجارية، مع تقديم إشعار معقول عندما يكون ذلك عمليًا. ويتحمل المستخدم مسؤولية التأكد من أن أي شخص يصل إلى الموقع من خلال اتصال الإنترنت الخاص به على علم بهذه الشروط ويلتزم بها. كما أن الموقع مخصص فقط للمستخدمين الموجودين في الولايات القضائية التي يجوز فيها تقديم هذه الخدمات بصورة قانونية، ويتم إتاحة الوصول إلى الموقع حاليًا دون مقابل.',
        },
        {
          id: 3,
          icon: KeyRound,
          title: 'أمن معلومات الحساب',
          content:
            'إذا تم تزويدك برمز تعريف مستخدم أو كلمة مرور أو بيانات دخول أخرى، أو قمت باختيارها بنفسك، فيجب عليك التعامل معها بسرية تامة وعدم الإفصاح عنها لأي طرف ثالث. وتحتفظ Genie بحقها في تعطيل أي بيانات دخول، سواء تم اختيارها من قبلك أو تعيينها من قبلنا، إذا كان لدينا سبب معقول للاعتقاد بأنك لم تلتزم بهذه الشروط. وإذا علمت أو اشتبهت في أن بيانات الدخول الخاصة بك قد تم اختراقها أو الوصول إليها من قبل شخص آخر، فيجب عليك إخطار Genie فورًا على support@geniefx.com.',
        },
        {
          id: 4,
          icon: Copyright,
          title: 'حقوق الملكية الفكرية',
          content:
            'تُعد Genie المالكة أو المرخص لها بصورة قانونية بجميع حقوق الملكية الفكرية المتعلقة بالموقع والمواد المنشورة عليه، وهذه الحقوق محمية بموجب قوانين حقوق النشر الدولية والمعاهدات ذات الصلة. ويجوز للمستخدم طباعة نسخة واحدة أو تنزيل مقتطفات محدودة للاستخدام الشخصي فقط، كما يمكنه مشاركة محتوى ذي صلة داخل مؤسسته لأغراض معلوماتية. ولا يجوز تعديل المواد أو تحريرها أو استخدامها بصورة منفصلة عن محتواها المصاحب، ويجب دائمًا الإقرار بملكية Genie وتأليفها، وكذلك أي مساهمين معتمدين. ويتطلب الاستخدام التجاري لأي محتوى من الموقع موافقة خطية مسبقة. وإذا تم نسخ أو إعادة إنتاج أو تنزيل مواد من الموقع بالمخالفة لهذه الشروط، ينتهي حق المستخدم في استخدام الموقع فورًا، وقد يُطلب منه إعادة أو إتلاف أي نسخ بحوزته.',
        },
        {
          id: 5,
          icon: Info,
          title: 'الطبيعة المعلوماتية للمحتوى والموارد الخارجية',
          content:
            'يُقدم المحتوى المتاح على موقع Genie لأغراض معلوماتية عامة فقط، ولا يشكل نصيحة مالية أو قانونية أو استثمارية. ولا ينبغي الاعتماد عليه كأساس لاتخاذ القرارات، ويجب الحصول على مشورة مهنية أو متخصصة مستقلة قبل التصرف بناءً على أي معلومات واردة في الموقع. وعلى الرغم من أن Genie تبذل جهودًا معقولة لتحديث محتوى الموقع، فإنها لا تقدم أي ضمان صريح أو ضمني بشأن دقته أو اكتماله أو حداثته. وقد يحتوي الموقع أيضًا على روابط إلى مواقع أو خدمات أو موارد تابعة لأطراف ثالثة يتم توفيرها فقط للراحة والمعلومة، ولا تسيطر Genie على هذه الموارد الخارجية ولا تتحمل أي مسؤولية عن محتواها أو سياساتها أو توفرها.',
        },
        {
          id: 6,
          icon: ExternalLink,
          title: 'محتوى المستخدمين والمناطق التفاعلية',
          content:
            'قد تسمح بعض أجزاء الموقع للمستخدمين بتحميل المحتوى أو مشاركته من خلال المنتديات أو لوحات الرسائل أو الدردشة أو الأدوات التفاعلية الأخرى. وأي معلومات أو مواد يقدمها المستخدمون لا تتم مراجعتها أو التحقق منها أو اعتمادها من قبل Genie. كما أن الآراء والتصريحات الصادرة عن المستخدمين الآخرين تمثل وجهات نظرهم الخاصة ولا تعكس آراء Genie أو سياساتها أو قيمها. وإذا كنت تعتقد أن مادة قام مستخدم آخر بتحميلها غير مناسبة أو تخالف القواعد المعمول بها، فيمكنك الإبلاغ عنها إلى support@geniefx.com.',
        },
        {
          id: 7,
          icon: TriangleAlert,
          title: 'المسؤولية وحدودها',
          content:
            'لا تستبعد Genie أو تقيد مسؤوليتها في الحالات التي يكون فيها هذا الاستبعاد أو التقييد غير قانوني، بما في ذلك المسؤولية عن الوفاة أو الإصابة الشخصية الناتجة عن الإهمال أو الاحتيال أو التحريف الاحتيالي من قبل موظفيها أو وكلائها أو المتعاقدين معها. أما المسؤولية المتعلقة بخدمات التداول أو المنتجات المالية فتخضع للأحكام ذات الصلة الواردة في شروط وأحكام العميل. وبالنسبة للعملاء المحترفين، تستبعد Genie إلى أقصى حد يسمح به القانون جميع الشروط والضمانات والتعهدات الضمنية المتعلقة بالموقع، ولا تتحمل مسؤولية الخسائر المباشرة أو غير المباشرة الناتجة عن استخدام الموقع أو عدم القدرة على استخدامه أو الاعتماد على محتواه، بما في ذلك خسارة الأرباح أو الإيرادات أو المبيعات أو المدخرات أو الفرص التجارية أو السمعة. وبالنسبة للعملاء الأفراد، فإن الموقع مخصص للاستخدام الشخصي وغير التجاري فقط، ولا تتحمل Genie مسؤولية أي خسارة في الأرباح أو الأعمال أو انقطاع الأعمال نتيجة استخدام الموقع. وإذا تسبب محتوى رقمي مقدم من خلال الموقع في إتلاف جهازك أو ملفاتك نتيجة عدم بذل Genie للعناية والمهارة المعقولتين، فستقوم Genie بإصلاح الضرر أو تقديم التعويض حيثما يقتضي القانون، باستثناء الحالات التي كان يمكن فيها تفادي الضرر من خلال تثبيت التحديثات المتاحة أو اتباع متطلبات النظام أو تعليمات التثبيت المقدمة.',
        },
        {
          id: 8,
          icon: Upload,
          title: 'تحميل المواد ومسؤوليات المستخدم',
          content:
            'عند استخدام أي ميزة تتيح لك تحميل محتوى أو التواصل مع مستخدمين آخرين، يجب عليك الالتزام بالمعايير المنصوص عليها في سياسة الاستخدام المقبول. ومن خلال تقديم المحتوى، فإنك تؤكد التزامه بهذه المعايير وتوافق على تعويض Genie عن أي خسائر أو أضرار ناتجة عن الإخلال بذلك. ويُعامل المحتوى المقدم إلى الموقع على أنه غير سري وغير مملوك، ومع أنك تحتفظ بحقوق الملكية الخاصة بك فيه، فإنك تمنح Genie ترخيصًا محدودًا لاستخدامه أو نسخه أو تخزينه أو توزيعه عند الضرورة. كما يجوز لـ Genie الكشف عن هويتك لطرف ثالث يدعي أن المادة التي قمت بتحميلها تنتهك حقوق الملكية الفكرية أو الخصوصية الخاصة به، ويجوز لها إزالة أي مادة لا تمتثل لسياسة الاستخدام المقبول. وتبقى مسؤولية الاحتفاظ بنسخ احتياطية من المحتوى المرفوع على عاتقك وحدك.',
        },
        {
          id: 9,
          icon: Shield,
          title: 'الأمن والفيروسات وإساءة استخدام الأنظمة',
          content:
            'لا تضمن Genie أن يكون الموقع دائمًا آمنًا أو خاليًا من الفيروسات أو الأخطاء أو المكونات الضارة الأخرى. ويتحمل المستخدمون مسؤولية إعداد أنظمتهم وأجهزتهم وبرامجهم بصورة آمنة، وينبغي عليهم استخدام برامج مكافحة الفيروسات المناسبة في جميع الأوقات. ولا يجوز لك إساءة استخدام الموقع من خلال إدخال تعليمات ضارة أو محاولة الوصول غير المصرح به إلى الموقع أو الأنظمة المرتبطة به أو تنفيذ هجمات حجب الخدمة أو الهجمات الموزعة. وقد يشكل هذا السلوك جريمة جنائية، ويجوز لـ Genie إبلاغ سلطات إنفاذ القانون به وتزويدها بالمعلومات ذات الصلة، وسيؤدي ذلك إلى الإنهاء الفوري لحقك في استخدام الموقع.',
        },
        {
          id: 10,
          icon: Link2,
          title: 'الربط بموقع Genie الإلكتروني',
          content:
            'يجوز لك إنشاء رابط إلى الصفحة الرئيسية لموقع Genie بشرط أن يكون الرابط عادلاً ومشروعًا ولا يضر بسمعة Genie أو يستغلها. ولا يجوز أن توحي الروابط بوجود شراكة أو تأييد أو اعتماد من Genie في حال عدم وجود ذلك، كما يجب ألا تظهر على مواقع لا تملكها أو لا تسيطر عليها. ولا يجوز تأطير موقع Genie داخل موقع آخر، كما يجب أن تقتصر الروابط على الصفحة الرئيسية ما لم يتم التصريح بخلاف ذلك. وتحتفظ Genie بحقها في سحب الإذن بالربط في أي وقت دون إشعار مسبق. كما يجب أن يلتزم أي موقع يربط بموقع Genie التزامًا كاملاً بمعايير المحتوى المنصوص عليها في سياسة الاستخدام المقبول. وإذا كنت ترغب في استخدام محتوى الموقع أو إنشاء روابط تتجاوز ما هو مسموح به هنا، فيجب طلب إذن خطي من خلال support@geniefx.com.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن شروط وأحكام الموقع الإلكتروني هذه، يرجى التواصل معنا:',
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

export default WebsiteTermsAndConditionsPage;
