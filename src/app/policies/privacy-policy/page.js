'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, FileCheck, AlertCircle, BookOpen, FileText, Mail, Settings, Link } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const PrivacyPolicyPage = () => {
    const [activeSection, setActiveSection] = useState(null);

    // Hardcoded translations (English + Arabic)
    const translations = {
        en: {
            title: "Privacy Policy",
            subtitle: "Your privacy matters to Genie. This policy explains how we collect, use, store, and share your information when you interact with our website, platform, or services.",
            disclaimer: "By accessing our platform, you consent to the practices described here.",

            sections: [
                {
                    id: 1,
                    icon: FileCheck,
                    title: "What Data We Collect",
                    content: "We may collect the following information as part of your interaction with Genie:\n1. Personal & Identity Information\nName, contact details, date of birth, and residential information.\n2. Financial Information\nPayment details, bank account information, bank account information, bank numbers, and transaction history.\n3. Trading Activity Data\nTrading behavior, account activity, deposits, withdrawals, and platform usage metrics.\n4. Technical & Device Data\nIP address, device identifiers, browser type, operating system, cookies, and tracking data."
                },
                {
                    id: 2,
                    icon: Eye,
                    title: "How Your Information Is Used",
                    content: "1. Account Setup & Management\nWe use your information to create, maintain, and manage your trading account efficiently.\n2. Transaction Processing\nYour data enables smooth handling of deposits, withdrawals, and all related financial operations.\n3. Compliance & Verification\nWe verify identity and fulfil regulatory requirements to keep your account fully compliant.\n4. Support & Communication\nInformation helps us respond to inquiries, provide assistance, and deliver essential service updates.\n5. Platform Improvement & Security\nYour data helps enhance platform performance, strengthen security, and optimize overall user experience."
                },
                {
                    id: 3,
                    icon: Users,
                    title: "When We Share Your Information",
                    content: "While we do not sell or rent personal information, limited sharing may occur under these conditions:\n1. Service & Technology Partners\nPayment processors, verification providers, and IT vendors assisting in operations.\n2. Legal or Regulatory Requests\nAuthorities requiring information for compliance, investigations, or legal processes.\n3. Group Companies & Approved Affiliates\nEntities operating under Genie with confidentiality agreements."
                },
                {
                    id: 4,
                    icon: Shield,
                    title: "Safeguarding Your Information",
                    content: "We apply industry-standard administrative, physical, and technical measures to reduce risks such as unauthorized access, misuse, or data loss. While no system is fully immune, we are committed to maintaining strong security protections."
                },
                {
                    id: 5,
                    icon: Settings,
                    title: "Cookies and Tracking Technology",
                    content: "Genie uses cookies to improve website functionality, analyze traffic, and enhance your experience. You may control cookie settings through your browser, though disabling them may affect certain features."
                },
                {
                    id: 6,
                    icon: BookOpen,
                    title: "Your Rights & Choices",
                    content: "1. Access Your Data\nYou may request a copy of the personal information Genie holds about you.\n2. Correct Information\nYou can request us to revise any information that you may find incomplete or inaccurate.\n3. Request Data Deletion\nYou may request removal of specific personal information where applicable under law.\n4. Manage Consent & Processing\nYou can withdraw consent or object to certain types of data processing anytime.\n5. Submit a Complaint\nYou may contact your local data authority if you believe your rights were violated."
                },
                {
                    id: 7,
                    icon: Link,
                    title: "Third-Party Links",
                    content: "Our website may reference external sites. Genie is not responsible for those platforms, their privacy practices, or their handling of your data."
                },
                {
                    id: 8,
                    icon: FileText,
                    title: "Updates to This Privacy Policy",
                    content: "We may revise this Privacy Policy as needed. Any revisions in the policy will be posted with an updated effective date. We request that you keep checking this page regularly."
                }
            ],

            contact: {
                title: "Need Assistance?",
                description: "If you have any questions or require clarification about this Privacy Policy, please contact us:",
                email: "support@geniefx.com",
                website: "www.geniefx.com"
            }
        },
        ar: {
            title: "سياسة الخصوصية",
            subtitle: "خصوصيتك تهمنا في Genie. توضح هذه السياسة كيفية جمعنا واستخدامنا وتخزيننا ومشاركتنا لمعلوماتك عند تفاعلك مع موقعنا الإلكتروني أو منصتنا أو خدماتنا",
            disclaimer: "من خلال الوصول إلى منصتنا، فإنك توافق على الممارسات الموصوفة هنا",

            sections: [
                {
                    id: 1,
                    icon: FileCheck,
                    title: "البيانات التي نجمعها",
                    content: "قد نجمع المعلومات التالية كجزء من تفاعلك مع Genie:\n1. المعلومات الشخصية والهوية\nالاسم، تفاصيل الاتصال، تاريخ الميلاد، والمعلومات السكنية.\n2. المعلومات المالية\nتفاصيل الدفع، معلومات الحساب البنكي، أرقام الحسابات البنكية، وسجل المعاملات.\n3. بيانات نشاط التداول\nسلوك التداول، نشاط الحساب، الإيداعات، السحوبات، ومقاييس استخدام المنصة.\n4. البيانات التقنية والجهاز\nعنوان IP، معرفات الجهاز، نوع المتصفح، نظام التشغيل، الكوكيز، وبيانات التتبع."
                },
                {
                    id: 2,
                    icon: Eye,
                    title: "كيفية استخدام معلوماتك",
                    content: "1. إعداد الحساب وإدارته\nنستخدم معلوماتك لإنشاء حساب التداول الخاص بك وصيانته وإدارته بكفاءة.\n2. معالجة المعاملات\nتمكن بياناتك من معالجة الإيداعات والسحوبات وعمليات الدفع المالية ذات الصلة بسلاسة.\n3. الامتثال والتحقق\nنحن نتحقق من الهوية ونفي بالمتطلبات التنظيمية للحفاظ على حسابك متوافقًا تمامًا.\n4. الدعم والاتصال\nتساعد المعلومات في الرد على الاستفسارات وتقديم المساعدة وإرسال تحديثات الخدمة الأساسية.\n5. تحسين المنصة والأمان\nتساعد بياناتك في تعزيز أداء المنصة وتقوية الأمان وتحسين تجربة المستخدم بشكل عام."
                },
                {
                    id: 3,
                    icon: Users,
                    title: "متى نشارك معلوماتك",
                    content: "بينما لا نبيع أو نؤجر المعلومات الشخصية، قد تحدث مشاركة محدودة في هذه الحالات:\n1. شركاء الخدمة والتكنولوجيا\nمعالجو الدفع، مزودو التحقق، وبائعو تكنولوجيا المعلومات الذين يساعدون في العمليات.\n2. الطلبات القانونية أو التنظيمية\nالسلطات التي تطلب المعلومات للامتثال أو التحقيقات أو الإجراءات القانونية.\n3. الشركات التابعة والشركاء المعتمدين\nالكيانات التي تعمل تحت مظلة Genie باتفاقيات سرية."
                },
                {
                    id: 4,
                    icon: Shield,
                    title: "حماية معلوماتك",
                    content: "نطبق إجراءات إدارية وبدنية وتقنية قياسية في الصناعة لتقليل المخاطر مثل الوصول غير المصرح به أو الاستخدام الخاطئ أو فقدان البيانات. على الرغم من أن لا نظام آمن تمامًا، إلا أننا ملتزمون بالحفاظ على حماية أمنية قوية."
                },
                {
                    id: 5,
                    icon: Settings,
                    title: "الكوكيز وتقنيات التتبع",
                    content: "تستخدم Genie الكوكيز لتحسين وظائف الموقع وتحليل الحركة وتعزيز تجربتك. يمكنك التحكم في إعدادات الكوكيز من خلال متصفحك، على الرغم من أن تعطيلها قد يؤثر على بعض الميزات."
                },
                {
                    id: 6,
                    icon: BookOpen,
                    title: "حقوقك وخياراتك",
                    content: "1. الوصول إلى بياناتك\nيمكنك طلب نسخة من المعلومات الشخصية التي يحتفظ بها Genie عنك.\n2. تصحيح المعلومات\nيمكنك طلب تعديل أي معلومات تجدها ناقصة أو غير دقيقة.\n3. طلب حذف البيانات\nيمكنك طلب إزالة معلومات شخصية معينة حيثما ينطبق القانون.\n4. إدارة الموافقة والمعالجة\nيمكنك سحب الموافقة أو الاعتراض على أنواع معينة من معالجة البيانات في أي وقت.\n5. تقديم شكوى\nيمكنك الاتصال بجهة حماية البيانات المحلية إذا كنت تعتقد أن حقوقك قد انتهكت."
                },
                {
                    id: 7,
                    icon: Link,
                    title: "روابط الطرف الثالث",
                    content: "قد يحتوي موقعنا على إشارات إلى مواقع خارجية. لا تتحمل Genie مسؤولية تلك المنصات أو ممارسات الخصوصية الخاصة بها أو طريقة تعاملها مع بياناتك."
                },
                {
                    id: 8,
                    icon: FileText,
                    title: "تحديثات سياسة الخصوصية هذه",
                    content: "قد نعدل سياسة الخصوصية هذه عند الحاجة. سيتم نشر أي تعديلات مع تاريخ سريان محدث. نرجو منك مراجعة هذه الصفحة بانتظام."
                }
            ],

            contact: {
                title: "هل تحتاج إلى مساعدة؟",
                description: "إذا كانت لديك أي أسئلة أو تحتاج إلى توضيح بشأن سياسة الخصوصية هذه، يرجى الاتصال بنا:",
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
                                            className={`text-[#180248]/80 leading-relaxed text-sm whitespace-pre-line ${language === 'ar' ? 'font-arabic text-right' : ''}`}
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
                                                    className={`text-[#180248]/80 leading-relaxed text-sm whitespace-pre-line ${language === 'ar' ? 'font-arabic' : ''}`}
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

export default PrivacyPolicyPage;