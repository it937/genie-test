'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertCircle,
  BookOpen,
  FileText,
  Mail,
  BarChart3,
  Route,
  Building2,
  ClipboardCheck,
  Layers3,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const OrderExecutionPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const translations = {
    en: {
      title: 'Order Execution Policy',
      subtitle:
        'The services offered on www.geniefx.com are provided by Genie LTD, an entity registered and operated in Saint Lucia.',
      description:
        'Over-the-counter margined derivative products, including contracts for difference (CFDs) and spot foreign exchange, are highly complex instruments that carry a significant risk of rapid financial losses due to leverage.',
      disclaimer:
        'Clients should carefully assess their understanding of these products, financial capacity, and personal risk tolerance before trading. Independent professional advice is recommended prior to investing.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'General Information',
          content:
            'Genie has established this Order Execution Policy, together with other arrangements, to ensure that all reasonable steps are taken to achieve the best possible result for clients. The Company is committed to providing clear and accessible information regarding this policy, and a copy may be provided upon written request. This policy forms an integral part of the Client Agreement, and by accepting that agreement, clients confirm their understanding and acceptance of the Order Execution Policy. When executing trades, Genie directly places orders in the market on behalf of clients to ensure that trading decisions are carried out promptly and accurately. The price feed made available to clients is sourced from a combination of bank and non-bank liquidity providers, or through Genie’s proprietary ECN model, with the aim of supporting best execution during Straight Line Processing with Genie’s liquidity providers.',
        },
        {
          id: 2,
          icon: BarChart3,
          title: 'Genie Best Execution Policy',
          content:
            'Genie LTD offers leveraged margin trading in Forex and CFD instruments on an execution-only basis. Clients access markets offered solely by Genie LTD, with each market representing a derivative of the relevant underlying instrument, and Genie acts as principal, counterparty, and execution venue while providing two-way price quotes. Under Genie’s proprietary ECN model, certain qualified liquidity providers participate in pricing competition within the interbank pool and hold collateral directly with Genie under safeguarding procedures. Genie recognizes that clients rely on the Company to provide bid and offer prices that consistently reflect the best available market pricing. Although every reasonable effort is made, displayed prices may not always match prevailing market rates because of volatility, spreads, or additional transaction-related costs. Where orders are placed with third-party entities for execution, Genie continues to act in the best interests of clients and takes all reasonable steps to achieve the best possible outcome.',
        },
        {
          id: 3,
          icon: Layers3,
          title: 'Execution Factors, Total Consideration and Pricing',
          content:
            'Execution factors include price, costs, speed, likelihood of execution and settlement, order size, order nature, and any other relevant considerations. The importance of these factors is determined by reference to the characteristics of the client, the client’s order, the financial instrument involved, the available execution venues, and the overall total consideration. The best possible result is assessed on the basis of total consideration, including the instrument’s price and all direct execution costs, such as execution venue fees, clearing charges, settlement fees, and any relevant third-party costs. Key execution factors include Genie’s market-pricing algorithm applied to underlying market feeds, the transparent application of commissions or financing charges, liquidity limits that may affect spreads at certain sizes, and execution speed supported by market-specific deal size limits.',
        },
        {
          id: 4,
          icon: Building2,
          title: 'Additional Pricing and Market Considerations',
          content:
            'While Genie aims to provide competitive pricing, market volatility, spreads, and transaction-related charges may occasionally prevent quotes from reflecting the absolute best market price at all times. Certain markets may also be quoted outside normal trading hours, including grey markets, where price consistency may vary during periods of heightened volatility or reduced liquidity. Financing charges applied by Genie are intended to be competitive, fair, and transparent and are disclosed on the website and trading platform. Any commission sharing or other income arising through third-party or affiliated arrangements will be disclosed clearly to clients upon request.',
        },
        {
          id: 5,
          icon: Route,
          title: 'Execution Strategy and Venue',
          content:
            'Genie LTD continuously monitors the efficiency of its order execution framework and this Order Execution Policy to identify and rectify any deficiencies or areas requiring improvement. The Company reviews its order execution procedures at least annually, or whenever a significant change occurs that may affect its ability to consistently deliver the best possible outcome. By placing an order with Genie LTD, clients are deemed to provide prior consent to this policy and acknowledge the basis on which their orders are executed. Genie LTD acts as the execution venue for client orders and provides prices derived from leading global banks, non-bank liquidity providers in wholesale foreign exchange markets, and ECN-qualified participants within Genie’s execution infrastructure. Genie provides execution-only services for Forex and CFD instruments, and clients make all trading decisions independently.',
        },
        {
          id: 6,
          icon: ClipboardCheck,
          title: 'Market Offering, Monitoring and Review',
          content:
            'Genie determines which markets are made available to clients, and each market is a derivative of the underlying instrument. Genie is the exclusive execution venue through which clients access those prices, and no advisory services or equity share trading are offered as part of the CFD portfolio. The Company regularly monitors the effectiveness of this policy, evaluates the quality of executed orders, and seeks to ensure the best possible results for clients. Any deficiencies identified are addressed promptly, and clients are informed of any material updates to the policy or associated arrangements.',
        },
      ],
      contact: {
        title: 'Need Assistance?',
        description:
          'If you have any questions or require clarification about this Order Execution Policy, please contact us:',
        email: 'support@geniefx.com',
        website: 'www.geniefx.com',
      },
    },
    ar: {
      title: 'سياسة تنفيذ الأوامر',
      subtitle:
        'يتم تقديم الخدمات المعروضة على www.geniefx.com من قبل Genie LTD، وهي جهة مسجلة وتعمل في سانت لوسيا.',
      description:
        'تُعد المنتجات المشتقة خارج البورصة ذات الهامش، بما في ذلك عقود الفروقات (CFDs) وتداول العملات الأجنبية الفوري، أدوات مالية معقدة تنطوي على مخاطر كبيرة لخسائر مالية سريعة بسبب الرافعة المالية.',
      disclaimer:
        'يجب على العملاء تقييم مدى فهمهم لهذه المنتجات وقدرتهم المالية ومستوى تحملهم للمخاطر بعناية قبل التداول. ويوصى بالحصول على مشورة مهنية مستقلة قبل الاستثمار.',
      sections: [
        {
          id: 1,
          icon: BookOpen,
          title: 'معلومات عامة',
          content:
            'وضعت Genie هذه السياسة الخاصة بتنفيذ الأوامر، إلى جانب ترتيبات أخرى، لضمان اتخاذ جميع الخطوات المعقولة لتحقيق أفضل نتيجة ممكنة للعملاء. وتلتزم الشركة بتوفير معلومات واضحة وسهلة الوصول بشأن هذه السياسة، كما يمكن تزويد العميل بنسخة منها عند الطلب الخطي. وتشكل هذه السياسة جزءًا لا يتجزأ من اتفاقية العميل، ومن خلال قبول تلك الاتفاقية يؤكد العميل فهمه وموافقته على شروط سياسة تنفيذ الأوامر. وعند تنفيذ الصفقات، تقوم Genie بوضع الأوامر مباشرة في السوق نيابة عن العملاء لضمان تنفيذ القرارات التداولية بسرعة ودقة. كما أن تغذية الأسعار المقدمة للعملاء تأتي من مجموعة من مصادر السيولة البنكية وغير البنكية أو من خلال نموذج ECN الخاص بـ Genie، بهدف دعم أفضل تنفيذ خلال المعالجة المباشرة مع مزودي السيولة.',
        },
        {
          id: 2,
          icon: BarChart3,
          title: 'سياسة أفضل تنفيذ لدى Genie',
          content:
            'توفر Genie LTD تداول الفوركس وعقود الفروقات بالهامش على أساس التنفيذ فقط. ويصل العملاء إلى الأسواق التي تقدمها Genie LTD وحدها، حيث يمثل كل سوق أداة مشتقة من الأصل الأساسي ذي الصلة، وتعمل Genie بصفتها الطرف الرئيسي والطرف المقابل وجهة التنفيذ مع تقديم أسعار بيع وشراء ثنائية الاتجاه. وضمن نموذج ECN الخاص بـ Genie، يشارك بعض مزودي السيولة المؤهلين في المنافسة السعرية داخل مجمع السيولة بين البنوك، مع الاحتفاظ بضمانات مباشرة لدى Genie وفق إجراءات حماية صارمة. وتدرك Genie أن العملاء يعتمدون على الشركة في تقديم أسعار بيع وشراء تعكس أفضل الأسعار المتاحة بصورة مستمرة. وعلى الرغم من بذل كل جهد معقول، فقد لا تتطابق الأسعار المعروضة دائمًا مع أسعار السوق السائدة بسبب التقلبات أو فروقات الأسعار أو التكاليف الإضافية المرتبطة بالمعاملات. وعندما يتم تمرير الأوامر إلى جهات خارجية للتنفيذ، تواصل Genie العمل بما يحقق مصلحة العميل وتتخذ جميع الخطوات المعقولة للوصول إلى أفضل نتيجة ممكنة.',
        },
        {
          id: 3,
          icon: Layers3,
          title: 'عوامل التنفيذ والمقابل الإجمالي والتسعير',
          content:
            'تشمل عوامل التنفيذ السعر، والتكاليف، والسرعة، واحتمالية التنفيذ والتسوية، وحجم الأمر، وطبيعته، وأي اعتبارات أخرى ذات صلة. وتُحدد أهمية هذه العوامل بالرجوع إلى خصائص العميل، وخصائص الأمر، وطبيعة الأداة المالية، وجهات التنفيذ المتاحة، والمقابل الإجمالي. ويتم تحديد أفضل نتيجة ممكنة على أساس المقابل الإجمالي، بما يشمل سعر الأداة وجميع التكاليف المباشرة المرتبطة بالتنفيذ، مثل رسوم جهات التنفيذ، ورسوم المقاصة، ورسوم التسوية، وأي تكاليف أخرى ذات صلة تفرضها أطراف ثالثة. وتشمل العوامل الرئيسية أيضًا آلية تسعير Genie المعتمدة على تدفقات السوق الأساسية، والتطبيق الشفاف للعمولات أو رسوم التمويل، وحدود السيولة التي قد تؤثر على فروقات الأسعار عند أحجام معينة، وسرعة التنفيذ المدعومة بحدود لأحجام الصفقات في أسواق محددة.',
        },
        {
          id: 4,
          icon: Building2,
          title: 'اعتبارات إضافية تتعلق بالتسعير والأسواق',
          content:
            'على الرغم من سعي Genie إلى تقديم أسعار تنافسية، فقد تؤدي تقلبات السوق وفروقات الأسعار والتكاليف المرتبطة بالمعاملات إلى عدم عكس الأسعار المعروضة دائمًا لأفضل سعر مطلق في السوق في كل الأوقات. كما قد يتم تسعير بعض الأسواق خارج الساعات المعتادة، بما في ذلك الأسواق الرمادية، حيث قد تختلف دقة الأسعار خلال فترات انخفاض السيولة أو ارتفاع التقلبات. وتُطبق رسوم التمويل لدى Genie بصورة تنافسية وعادلة وشفافة، ويتم الإفصاح عنها على الموقع الإلكتروني ومنصة التداول. كما يتم الإفصاح بوضوح للعملاء، عند الطلب، عن أي ترتيبات لتقاسم العمولات أو أي دخل آخر ناتج عن ترتيبات مع أطراف ثالثة أو جهات تابعة.',
        },
        {
          id: 5,
          icon: Route,
          title: 'استراتيجية التنفيذ وجهة التنفيذ',
          content:
            'تقوم Genie LTD بمراقبة كفاءة إطار تنفيذ الأوامر الخاص بها وهذه السياسة بشكل مستمر من أجل تحديد أي أوجه قصور أو مجالات تحتاج إلى تحسين. كما تراجع الشركة إجراءات تنفيذ الأوامر مرة واحدة على الأقل سنويًا، أو كلما حدث تغيير جوهري قد يؤثر على قدرتها على تحقيق أفضل نتيجة ممكنة بصورة متسقة. ومن خلال تقديم أي أمر إلى Genie LTD، يُعتبر العميل قد منح موافقته المسبقة على هذه السياسة وأقر بالأساس الذي يتم بموجبه تنفيذ أوامره. وتعمل Genie LTD بصفتها جهة التنفيذ لأوامر العملاء، وتوفر أسعارًا مستمدة من بنوك عالمية رائدة، ومزودي سيولة من غير البنوك في أسواق الفوركس بالجملة، ومشاركين مؤهلين ضمن بنية التنفيذ الخاصة بـ Genie. كما تقدم الشركة خدمات التنفيذ فقط لمنتجات الفوركس وعقود الفروقات، بينما يتخذ العملاء جميع قرارات التداول بشكل مستقل.',
        },
        {
          id: 6,
          icon: ClipboardCheck,
          title: 'العروض السوقية والمراقبة والمراجعة',
          content:
            'تحدد Genie الأسواق التي تتيحها للعملاء، ويمثل كل سوق أداة مشتقة من الأصل الأساسي ذي الصلة. وتُعد Genie جهة التنفيذ الحصرية التي يمكن للعملاء من خلالها الوصول إلى تلك الأسعار، كما لا تقدم الشركة خدمات استشارية أو تداول أسهم فعلية ضمن محفظة عقود الفروقات. وتقوم الشركة بمتابعة فعالية هذه السياسة بصورة منتظمة، وتقييم جودة الأوامر المنفذة، والسعي إلى ضمان أفضل النتائج الممكنة للعملاء. وأي أوجه قصور يتم اكتشافها تُعالج بسرعة، ويتم إخطار العملاء بأي تحديثات جوهرية تطرأ على السياسة أو على الترتيبات المرتبطة بها.',
        },
      ],
      contact: {
        title: 'هل تحتاج إلى مساعدة؟',
        description:
          'إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن سياسة تنفيذ الأوامر هذه، يرجى التواصل معنا:',
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

export default OrderExecutionPolicyPage;
