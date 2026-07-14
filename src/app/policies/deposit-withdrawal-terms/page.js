'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Users, FileCheck, AlertCircle, BookOpen, FileText, Mail, ArrowDownCircle, CreditCard, ArrowUpCircle, DollarSign, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const DepositWithdrawalTermsPage = () => {
    const [activeSection, setActiveSection] = useState(null);

    // Hardcoded translations (English + Arabic)
    const translations = {
        en: {
            title: "Deposit & Withdrawal Terms",
            subtitle: "Genie is committed to offering a secure and transparent environment for all financial transactions. These terms explain how deposits and withdrawals are handled, including requirements, timelines, and important conditions.",
            disclaimer: "By using our services, you accept the procedures described in these terms.",

            sections: [
                {
                    id: 1,
                    icon: ArrowDownCircle,
                    title: "Deposit Guidelines",
                    content: "1) Ownership Verification\nDeposits must originate from a payment method registered under the same name as your Genie trading account. Third-party payments are strictly not accepted.\n2) Deposit Processing Times\nProcessing times vary by method:\n• Card or e-wallet transactions: Instant to 2 hours\n• Local transfers: 1–2 business days\n• International bank transfers: 1–5 business days\n3) Deposit Fees\nGenie does not apply internal deposit fees. External banks or payment processors may apply their own charges."
                },
                {
                    id: 2,
                    icon: CreditCard,
                    title: "Accepted Funding Methods",
                    content: "Clients may add funds to their trading accounts using various supported options:\n• Bank wire transfers\n• Credit/debit card payments\n• Supported e-wallets\n• Local or regional payment providers\nAll available methods are shown in your client portal upon login."
                },
                {
                    id: 3,
                    icon: ArrowUpCircle,
                    title: "Withdrawal Procedures",
                    content: "1) Withdrawal Routing\nWhere possible, funds will be returned using the same payment method used for depositing. If unavailable, Genie may choose an alternative compliant option.\n2) Withdrawal Timeframes\nApproved withdrawal requests are typically processed within 1–2 business days, subject to processing times of banks or payment providers.\n3) Withdrawal Requirements\nFor a withdrawal to be approved:\n• Full Account Verification Required\nWithdrawals are processed only after your Genie account completes full KYC verification.\n• Funds Must Be Free for Withdrawal\nOnly available balance can be withdrawn; funds in open positions cannot be released.\n• Additional Documents May Be Requested\nLarge or unusual withdrawal requests may require extra identity or compliance documentation.\n• Withdrawal Must Match Available Balance\nYou cannot request more than the actual accessible balance in your account.\n• Floating Balance Limitation Applies\nIf your balance is floating, you may withdraw up to 50% only.\n4) Withdrawal Fees\nGenie does not charge internal withdrawal fees. Any external charges applied by receiving banks or intermediaries are the client’s responsibility."
                },
                {
                    id: 4,
                    icon: DollarSign,
                    title: "Currencies & Conversions",
                    content: "Transactions are processed in your account’s base currency. If a different currency is used, Genie will convert the amount at the current market rate, and applicable conversion fees may apply."
                },
                {
                    id: 5,
                    icon: ShieldCheck,
                    title: "AML & Verification Requirements",
                    content: "Genie complies with international Anti-Money Laundering (AML) and Know Your Customer (KYC) standards. Clients may be required to provide identity documents or additional verification materials to meet regulatory obligations."
                }
            ],

            contact: {
                title: "Need Assistance?",
                description: "For questions regarding deposits, withdrawals, or transaction processing, you may contact our support team:",
                email: "support@geniefx.com",
                website: "www.geniefx.com"
            }
        },
        ar: {
            title: "شروط الإيداع والسحب",
            subtitle: "تلتزم Genie بتوفير بيئة آمنة وشفافة لجميع المعاملات المالية. توضح هذه الشروط كيفية التعامل مع الإيداعات والسحوبات، بما في ذلك المتطلبات والجداول الزمنية والشروط المهمة",
            disclaimer: "باستخدام خدماتنا، فإنك تقبل الإجراءات الموصوفة في هذه الشروط",

            sections: [
                {
                    id: 1,
                    icon: ArrowDownCircle,
                    title: "إرشادات الإيداع",
                    content: "1) التحقق من الملكية\nيجب أن تأتي الإيداعات من وسيلة دفع مسجلة باسم نفس حساب التداول في Genie. لا يتم قبول المدفوعات من طرف ثالث بشكل صارم.\n2) أوقات معالجة الإيداع\nتختلف أوقات المعالجة حسب الطريقة:\n• معاملات البطاقة أو المحفظة الإلكترونية: فورية إلى ساعتين\n• التحويلات المحلية: 1-2 أيام عمل\n• التحويلات البنكية الدولية: 1-5 أيام عمل\n3) رسوم الإيداع\nلا تفرض Genie رسوم إيداع داخلية. قد تفرض البنوك الخارجية أو معالجات الدفع رسومها الخاصة."
                },
                {
                    id: 2,
                    icon: CreditCard,
                    title: "طرق التمويل المقبولة",
                    content: "يمكن للعملاء إضافة أموال إلى حسابات التداول الخاصة بهم باستخدام خيارات مدعومة متنوعة:\n• تحويلات بنكية\n• مدفوعات بطاقات الائتمان/الخصم\n• محافظ إلكترونية مدعومة\n• مزودي دفع محليين أو إقليميين\nتظهر جميع الطرق المتاحة في بوابة العميل الخاصة بك بعد تسجيل الدخول."
                },
                {
                    id: 3,
                    icon: ArrowUpCircle,
                    title: "إجراءات السحب",
                    content: "1) توجيه السحب\nحيثما أمكن، سيتم إعادة الأموال باستخدام نفس طريقة الدفع المستخدمة للإيداع. إذا لم تكن متاحة، قد تختار Genie خيارًا بديلاً متوافقًا.\n2) الجداول الزمنية للسحب\nيتم معالجة طلبات السحب المعتمدة عادةً خلال 1-2 أيام عمل، مع مراعاة أوقات معالجة البنوك أو مزودي الدفع.\n3) متطلبات السحب\nللموافقة على السحب:\n• التحقق الكامل من الحساب مطلوب\nلا تتم معالجة السحوبات إلا بعد إكمال حساب Genie الخاص بك للتحقق الكامل من KYC.\n• يجب أن تكون الأموال متاحة للسحب\nيمكن سحب الرصيد المتاح فقط؛ لا يمكن إطلاق الأموال الموجودة في مراكز مفتوحة.\n• قد يُطلب وثائق إضافية\nقد تتطلب طلبات السحب الكبيرة أو غير العادية وثائق هوية أو امتثال إضافية.\n• يجب أن يتطابق السحب مع الرصيد المتاح\nلا يمكنك طلب أكثر من الرصيد المتاح الفعلي في حسابك.\n• ينطبق حد الرصيد العائم\nإذا كان رصيدك عائمًا، يمكنك سحب حتى 50% فقط.\n4) رسوم السحب\nلا تفرض Genie رسوم سحب داخلية. أي رسوم خارجية تفرضها البنوك المستقبلة أو الوسطاء هي مسؤولية العميل."
                },
                {
                    id: 4,
                    icon: DollarSign,
                    title: "العملات والتحويلات",
                    content: "تتم معالجة المعاملات بعملة الحساب الأساسية. إذا تم استخدام عملة مختلفة، ستقوم Genie بتحويل المبلغ بسعر السوق الحالي، وقد تنطبق رسوم التحويل المعمول بها."
                },
                {
                    id: 5,
                    icon: ShieldCheck,
                    title: "متطلبات مكافحة غسيل الأموال والتحقق",
                    content: "تلتزم Genie بمعايير مكافحة غسيل الأموال (AML) واعرف عميلك (KYC) الدولية. قد يُطلب من العملاء تقديم وثائق هوية أو مواد تحقق إضافية لتلبية الالتزامات التنظيمية."
                }
            ],

            contact: {
                title: "هل تحتاج إلى مساعدة؟",
                description: "للأسئلة المتعلقة بالإيداعات أو السحوبات أو معالجة المعاملات، يمكنك التواصل مع فريق الدعم لدينا:",
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

export default DepositWithdrawalTermsPage;