'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, FileCheck, AlertCircle, BookOpen, FileText, Mail, Settings } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CookiesPolicyPage = () => {
    const [activeSection, setActiveSection] = useState(null);

    // Hardcoded translations (English + Arabic)
    const translations = {
        en: {
            title: "Cookies Policy",
            subtitle: "This Cookies Policy explains how we use cookies and similar tracking technologies on our website www.geniefx.com — including what they are, why we use them, and how you can manage your preferences.",
            description: "", // Not used in original code
            disclaimer: "We only activate analytics and marketing technologies after you explicitly accept them. Certain strictly necessary storage may still be used to remember your language preference, support sign-up security steps, and record your consent choice.",

            sections: [
                {
                    id: 1,
                    icon: BookOpen,
                    title: "Understanding Cookies",
                    content: "Cookies are small text files placed on your device when you visit a website. We also use similar browser storage technologies, including local storage, where appropriate. These tools can support secure navigation, remember preferences, help protect registration and verification flows, analyze site performance, and enable personalized marketing where consent has been provided. At Genie, we use these technologies to improve functionality, measure engagement, and create a smoother user experience across our website."
                },
                {
                    id: 2,
                    icon: Eye,
                    title: "How We Use Cookies",
                    content: "We use cookies and similar storage to ensure our website operates efficiently and securely while enhancing your interaction with our services. The main categories include: • Strictly necessary storage supports core website and account functions. This includes storing your cookie consent choice, keeping your selected language preference, and generating a device identifier in local storage for sign-up, OTP verification, fraud prevention, and account protection workflows. • Performance and analytics technologies help Genie understand site usage and improve performance, but they are activated only after you accept them. • Functional storage remembers preferences such as language and certain display or journey settings to provide a more consistent browsing experience. • Advertising and targeting technologies, including tools provided through Google Tag Manager, Google Analytics, Meta Pixel, and related partners, are activated only after you accept cookies and are used to measure campaigns, understand engagement, and improve marketing relevance."
                },
                {
                    id: 3,
                    icon: Users,
                    title: "Use of Third-Party Cookies",
                    content: "Some cookies or similar technologies may be provided by third-party services that help us with analytics, marketing, and customer communications. These may include providers used through Google Tag Manager, Google Analytics, Meta Pixel, and our customer communication tools. Where these technologies are not strictly necessary, they are activated only after you accept them. We recommend reviewing the privacy and cookie policies of relevant third parties to understand how your data may be used."
                },
                {
                    id: 4,
                    icon: Settings,
                    title: "Managing Your Cookie Preferences",
                    content: "You have control over non-essential cookie use on your device. Through our banner, you can accept analytics and marketing technologies or continue without accepting them. If you do not accept them, those non-essential tools will not be activated. Most web browsers also allow you to accept or block cookies, delete existing cookies, and receive alerts before cookies are stored. Please note that disabling strictly necessary storage may limit website functionality or affect secure features such as sign-up, identity checks, language preference retention, or other protected account-related actions."
                },
                {
                    id: 5,
                    icon: FileText,
                    title: "Policy Revisions & Updates",
                    content: "We may update this Cookies Policy from time to time to reflect changes in technology, service providers, operations, or regulations. This includes updates to the specific cookies, local storage entries, consent tools, analytics providers, security-related identifiers, or marketing technologies used on our website. Any updates will appear on this page with an amended effective date. Please review this policy periodically to stay informed of our practices."
                }
            ],

            contact: {
                title: "Need Assistance?",
                description: "If you have any questions or require clarification about Cookies Policy, please contact us:",
                email: "support@geniefx.com",
                website: "www.geniefx.com"
            }
        },
        ar: {
            title: "سياسة الكوكيز",
            subtitle: "توضح سياسة الكوكيز هذه كيفية استخدامنا للكوكيز والتقنيات المشابهة للتتبع على موقعنا الإلكتروني www.geniefx.com — بما في ذلك ماهيتها، وسبب استخدامنا لها، وكيف يمكنك إدارة تفضيلاتك",
            disclaimer: "نقوم بتفعيل تقنيات التحليلات والتسويق فقط بعد موافقتك الصريحة عليها. ومع ذلك، قد نستمر في استخدام بعض وسائل التخزين الضرورية للغاية لتذكر تفضيل اللغة، ودعم خطوات الأمان أثناء التسجيل، وتسجيل اختيارك المتعلق بالموافقة.",

            sections: [
                {
                    id: 1,
                    icon: BookOpen,
                    title: "فهم الكوكيز",
                    content: "الكوكيز هي ملفات نصية صغيرة تُوضع على جهازك عند زيارة موقع إلكتروني. كما نستخدم عند الحاجة تقنيات تخزين مشابهة داخل المتصفح، مثل التخزين المحلي. تساعد هذه الأدوات في دعم التصفح الآمن، وتذكر التفضيلات، وحماية تدفقات التسجيل والتحقق، وتحليل أداء الموقع، وتمكين التسويق المخصص عند وجود موافقة. في Genie نستخدم هذه التقنيات لتحسين الوظائف وقياس التفاعل وتقديم تجربة استخدام أكثر سلاسة عبر موقعنا الإلكتروني."
                },
                {
                    id: 2,
                    icon: Eye,
                    title: "كيف نستخدم الكوكيز",
                    content: "نستخدم الكوكيز ووسائل التخزين المشابهة لضمان عمل موقعنا بكفاءة وأمان مع تحسين تفاعلك مع خدماتنا. وتشمل الفئات الرئيسية ما يلي: • وسائل التخزين الضرورية للغاية لدعم وظائف الموقع والحساب الأساسية. ويشمل ذلك حفظ اختيارك المتعلق بموافقة الكوكيز، والاحتفاظ بتفضيل اللغة الذي اخترته، وإنشاء معرّف جهاز داخل التخزين المحلي لاستخدامه في التسجيل والتحقق عبر OTP ومنع الاحتيال وحماية الحساب. • تقنيات الأداء والتحليلات التي تساعد Genie على فهم استخدام الموقع وتحسين أدائه، ولا يتم تفعيلها إلا بعد موافقتك عليها. • وسائل التخزين الوظيفية التي تتذكر التفضيلات مثل اللغة وبعض إعدادات العرض أو الرحلة لتوفير تجربة تصفح أكثر اتساقًا. • تقنيات الإعلانات والاستهداف، بما في ذلك الأدوات المستخدمة عبر Google Tag Manager وGoogle Analytics وMeta Pixel والشركاء المرتبطين بها، ولا يتم تفعيلها إلا بعد موافقتك على الكوكيز وتُستخدم لقياس الحملات وفهم التفاعل وتحسين ملاءمة التسويق."
                },
                {
                    id: 3,
                    icon: Users,
                    title: "استخدام كوكيز الطرف الثالث",
                    content: "قد يتم توفير بعض الكوكيز أو التقنيات المشابهة من قبل خدمات طرف ثالث تساعدنا في التحليلات أو التسويق أو التواصل مع العملاء. وقد يشمل ذلك مزودين مستخدمين عبر Google Tag Manager وGoogle Analytics وMeta Pixel وأدوات التواصل مع العملاء. وعندما لا تكون هذه التقنيات ضرورية للغاية، فلن يتم تفعيلها إلا بعد موافقتك عليها. ونوصي بمراجعة سياسات الخصوصية والكوكيز الخاصة بالأطراف الثالثة ذات الصلة لفهم كيفية استخدام بياناتك."
                },
                {
                    id: 4,
                    icon: Settings,
                    title: "إدارة تفضيلات الكوكيز الخاصة بك",
                    content: "لديك تحكم في استخدام الكوكيز غير الضرورية على جهازك. ومن خلال اللافتة الخاصة بنا، يمكنك قبول تقنيات التحليلات والتسويق أو الاستمرار من دون قبولها. وإذا لم توافق عليها، فلن يتم تفعيل هذه الأدوات غير الضرورية. كما تسمح لك معظم متصفحات الويب بقبول الكوكيز أو حظرها، وحذف الكوكيز الموجودة، وتلقي تنبيهات قبل تخزينها. يرجى ملاحظة أن تعطيل وسائل التخزين الضرورية للغاية قد يحد من وظائف الموقع أو يؤثر في الميزات الآمنة مثل التسجيل، والتحقق من الهوية، والاحتفاظ بتفضيل اللغة، أو الإجراءات الأخرى المرتبطة بحماية الحساب."
                },
                {
                    id: 5,
                    icon: FileText,
                    title: "مراجعات وتحديثات السياسة",
                    content: "قد نقوم بتحديث سياسة الكوكيز هذه من وقت لآخر لتعكس التغييرات في التكنولوجيا أو مزودي الخدمات أو العمليات أو اللوائح. ويشمل ذلك تحديثات تخص أنواع الكوكيز أو عناصر التخزين المحلي أو أدوات الموافقة أو مزودي التحليلات أو المعرفات المرتبطة بالأمان أو تقنيات التسويق المستخدمة على موقعنا الإلكتروني. ستظهر أي تحديثات على هذه الصفحة مع تاريخ سريان معدل. يرجى مراجعة هذه السياسة بشكل دوري للبقاء على اطلاع بممارساتنا."
                }
            ],

            contact: {
                title: "هل تحتاج إلى مساعدة؟",
                description: "إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن سياسة الكوكيز، يرجى الاتصال بنا:",
                email: "support@geniefx.com",
                website: "www.geniefx.com"
            }
        }
    };

    const { language } = useLanguage();
    const t = translations[language] || translations.en;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                        const Icon = section.icon;
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

                                {/* Animated Border Bottom */}
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

export default CookiesPolicyPage;
