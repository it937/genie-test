'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  Wallet,
  ArrowLeftRight,
  BadgeDollarSign,
  CreditCard,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const PaymentTermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Payment Terms and Conditions',
      subtitle:
        'Genie Ltd is an entity registered and operated in Saint Lucia. These Payment Terms govern account deposits, withdrawals, related charges, and prepaid card services offered by Genie.',
      description:
        'These provisions supplement the general Terms governing the trading relationship between Genie and its clients. Unless otherwise stated, capitalized terms used here have the same meaning assigned in the main Terms.',
      disclaimer:
        'Clients are responsible for ensuring that deposit and withdrawal instructions comply with Genie’s payment procedures, transaction limits, and any applicable third-party banking or payment requirements.',
      sections: [
        {
          id: 1,
          icon: Wallet,
          title: 'Account Funding and Withdrawals',
          content:
            'Subject to the applicable Terms and these Payment Terms, clients may deposit funds into their Account and request withdrawal of available funds. Deposited funds form part of the Account Equity, while Free Margin represents the portion that may be eligible for withdrawal. Genie offers a range of payment methods through the Client Portal and the payment services information page on the Website. Each deposit or withdrawal may be subject to minimum and maximum transaction limits, and requests submitted outside those limits may not be processed. Clients may request withdrawal of available Free Margin at any time, but if market movements reduce available Free Margin below the requested amount during processing, the withdrawal may be declined. To withdraw all Account Equity, all open positions must first be closed.',
        },
        {
          id: 2,
          icon: ArrowLeftRight,
          title: 'Processing, Instructions and Return of Funds',
          content:
            'Withdrawal requests may be submitted through the Client Portal or by contacting Genie at support@geniefx.com. Where a client has outstanding financial obligations under the Terms, Genie may deduct or offset those amounts against the requested withdrawal. If a client has funded an account using more than one payment method, withdrawals may be returned to the original funding source unless regulatory requirements, internal policies, or other conditions require a different method. Clients acknowledge that deposits may take time to appear in the trading Account, and Genie is not responsible for losses or damages arising from deposit delays. Withdrawal instructions received before 15:00 on a Business Day may be processed on the same day; requests received after that time may be processed on the next available Business Day.',
        },
        {
          id: 3,
          icon: BadgeDollarSign,
          title: 'Charges, Fees and Currency Conversion',
          content:
            'Deposits and withdrawals may be subject to fees imposed by the client’s bank, card providers, external payment service providers, Genie’s banking partners, alternative payment providers, or Genie itself. Applicable fees may be deducted from the transaction amount or charged separately to the client’s Account. Where a transaction is processed in a currency other than GBP, USD, EUR, or AED, currency conversion may apply. By confirming the transaction at the displayed exchange rate, the client accepts both the quoted rate and any associated conversion fee. The exchange rate generally reflects the prevailing market rate at the time of processing together with a fixed percentage conversion fee, which Genie may adjust depending on the original transaction currency, the converted currency, the Account base currency, or the currency in which the withdrawal is processed. Where a deposit is made by debit or credit card and the client later initiates a chargeback or cancellation request, the client may also be responsible for any related fees imposed by the payment provider.',
        },
        {
          id: 4,
          icon: CreditCard,
          title: 'Prepaid Card Services',
          content:
            'Genie may, at its discretion, make prepaid cards available to clients who maintain active Accounts. These cards may be subject to separate terms, conditions, and fee schedules that must be reviewed and accepted before use. If a prepaid card has been issued but is not collected or activated, the client may be responsible for associated administrative or issuance costs. Genie reserves the right, at its sole discretion and without obligation to provide justification, to decline the issuance of a prepaid card even where eligibility appears to have been met, or to suspend or cancel an issued prepaid card. If a prepaid card is cancelled for any reason, including termination of the client relationship, Genie may deactivate the card and apply the relevant procedures under the applicable prepaid card terms.',
        },
        {
          id: 5,
          icon: AlertCircle,
          title: 'Technical Limitations and Liability',
          content:
            'Genie shall not be liable for any failure, interruption, delay, or disruption affecting deposits or withdrawals where such issues arise from technical matters beyond Genie’s control. Clients agree that Genie bears no responsibility for claims, losses, or damages resulting from such technical interruptions or deposit-processing delays.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about these Payment Terms and Conditions, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'شروط وأحكام الدفع',
      subtitle:
        'تُعد Genie Ltd جهة مسجلة وتعمل في سانت لوسيا. وتنظم شروط الدفع هذه الإيداعات والسحوبات والرسوم ذات الصلة وخدمات البطاقات المدفوعة مسبقًا التي تقدمها Genie.',
      description:
        'تكمل هذه الأحكام الشروط العامة التي تنظم العلاقة التداولية بين Genie وعملائها. وما لم يُنص على خلاف ذلك، يكون للمصطلحات المكتوبة بأحرف كبيرة هنا المعنى نفسه المحدد لها في الشروط الرئيسية.',
      disclaimer:
        'يتحمل العملاء مسؤولية التأكد من أن تعليمات الإيداع والسحب الخاصة بهم تتوافق مع إجراءات الدفع لدى Genie وحدود المعاملات وأي متطلبات مصرفية أو متطلبات من مزودي الدفع الخارجيين ذات صلة.',
      sections: [
        {
          id: 1,
          icon: Wallet,
          title: 'تمويل الحساب والسحوبات',
          content:
            'رهناً بالشروط المعمول بها وهذه الشروط الخاصة بالدفع، يجوز للعملاء إيداع الأموال في حساباتهم وطلب سحب الأموال المتاحة. وتُعد الأموال المودعة جزءًا من حقوق الملكية في الحساب، بينما يمثل الهامش الحر الجزء الذي قد يكون مؤهلاً للسحب. وتوفر Genie عدة وسائل للدفع من خلال بوابة العميل وصفحة معلومات خدمات الدفع على الموقع الإلكتروني. وقد تخضع كل عملية إيداع أو سحب لحدود دنيا أو قصوى للمعاملة، وقد لا تتم معالجة الطلبات المقدمة خارج هذه الحدود. ويمكن للعملاء طلب سحب الهامش الحر المتاح في أي وقت، ولكن إذا أدت تحركات السوق أثناء المعالجة إلى انخفاض الهامش الحر عن المبلغ المطلوب، فقد يتم رفض طلب السحب. ولسحب كامل حقوق الملكية في الحساب، يجب أولاً إغلاق جميع المراكز المفتوحة.',
        },
        {
          id: 2,
          icon: ArrowLeftRight,
          title: 'المعالجة والتعليمات وإعادة الأموال',
          content:
            'يمكن تقديم طلبات السحب من خلال بوابة العميل أو عبر التواصل مع Genie على support@geniefx.com. وإذا كانت على العميل التزامات مالية قائمة بموجب الشروط، فيجوز لـ Genie خصم أو مقاصة تلك المبالغ من قيمة السحب المطلوب. وإذا كان العميل قد موّل حسابه باستخدام أكثر من وسيلة دفع، فقد تتم إعادة السحوبات إلى مصدر التمويل الأصلي ما لم تستلزم المتطلبات التنظيمية أو السياسات الداخلية أو أي شروط أخرى استخدام وسيلة مختلفة. ويقر العملاء بأن الإيداعات قد تستغرق وقتًا قبل أن تظهر في حساب التداول، ولا تتحمل Genie المسؤولية عن أي خسائر أو أضرار ناتجة عن تأخر الإيداع. أما تعليمات السحب المستلمة قبل الساعة 15:00 في يوم عمل فقد تتم معالجتها في اليوم نفسه، في حين قد تُعالج الطلبات المقدمة بعد ذلك في يوم العمل التالي المتاح.',
        },
        {
          id: 3,
          icon: BadgeDollarSign,
          title: 'الرسوم والتكاليف وتحويل العملات',
          content:
            'قد تخضع الإيداعات والسحوبات لرسوم تفرضها البنوك الخاصة بالعملاء أو مزودو البطاقات أو مزودو خدمات الدفع الخارجيون أو الشركاء المصرفيون لـ Genie أو مزودو الدفع البديل أو Genie نفسها. وقد تُخصم هذه الرسوم من مبلغ المعاملة مباشرة أو تُحمّل بشكل منفصل على حساب العميل. وإذا تمت المعاملة بعملة غير الجنيه الإسترليني أو الدولار الأمريكي أو اليورو أو الدرهم الإماراتي، فقد يُطبق تحويل للعملة. ومن خلال تأكيد المعاملة بالسعر المعروض، يقبل العميل سعر الصرف وأي رسوم تحويل مرتبطة به. ويعكس سعر الصرف المطبق عادة سعر السوق السائد وقت المعالجة مضافًا إليه نسبة ثابتة كرسم تحويل، ويجوز لـ Genie تعديل هذه الرسوم بحسب العملة الأصلية أو العملة المحولة أو العملة الأساسية للحساب أو العملة التي تتم بها معالجة السحب. وإذا تم الإيداع باستخدام بطاقة خصم أو ائتمان ثم قدم العميل طلب استرداد أو إلغاء لاحقًا، فقد يتحمل العميل أي رسوم ناتجة عن ذلك يفرضها مزود الدفع المعني.',
        },
        {
          id: 4,
          icon: CreditCard,
          title: 'خدمات البطاقات المدفوعة مسبقًا',
          content:
            'يجوز لـ Genie، وفقًا لتقديرها، إتاحة بطاقات مدفوعة مسبقًا للعملاء الذين يحتفظون بحسابات نشطة. وقد تخضع هذه البطاقات لشروط وأحكام ورسوم منفصلة يجب مراجعتها وقبولها قبل الاستخدام. وإذا تم إصدار بطاقة مدفوعة مسبقًا ولكن لم يتم استلامها أو تفعيلها، فقد يكون العميل مسؤولاً عن التكاليف الإدارية أو رسوم الإصدار المرتبطة بها. كما تحتفظ Genie بحقها، وفقًا لتقديرها المنفرد ودون التزام بتقديم مبرر، في رفض إصدار بطاقة مدفوعة مسبقًا حتى إذا بدت شروط الأهلية مستوفاة، أو في تعليق أو إلغاء بطاقة سبق إصدارها. وإذا أُلغيت البطاقة لأي سبب، بما في ذلك انتهاء العلاقة مع العميل، فيجوز لـ Genie إلغاء تفعيلها وتطبيق الإجراءات ذات الصلة وفقًا للشروط المطبقة على البطاقة المدفوعة مسبقًا.',
        },
        {
          id: 5,
          icon: AlertCircle,
          title: 'القيود التقنية وحدود المسؤولية',
          content:
            'لا تتحمل Genie المسؤولية عن أي فشل أو انقطاع أو تأخير أو تعطل يؤثر في الإيداعات أو السحوبات إذا كان ذلك ناتجًا عن مسائل تقنية خارجة عن سيطرتها. ويوافق العملاء على أن Genie لا تتحمل أي مسؤولية عن المطالبات أو الخسائر أو الأضرار الناتجة عن مثل هذه الانقطاعات التقنية أو التأخير في معالجة الإيداعات.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن شروط وأحكام الدفع هذه، يرجى التواصل معنا:',
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

export default PaymentTermsAndConditionsPage;
