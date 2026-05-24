export type Language = "en" | "hi";

export interface TranslationDict {
  nav: {
    products: string;
    academy: string;
    benefits: string;
    about: string;
    cta: string;
  };
  hero: {
    badgeZero: string;
    headline: string;
    headlineHighlight1: string;
    headlineHighlight2: string;
    subtext: string;
    inputPlaceholder: string;
    inputButton: string;
    successMessage: string;
    trustBadge: string;
    appMockup: {
      congrats: string;
      earnedAmount: string;
      transferred: string;
      txnSuccess: string;
      salesSummary: string;
      monthlyLeads: string;
      conversion: string;
      shareEarnTitle: string;
      shareAction: string;
      bottomHome: string;
      bottomLeads: string;
      bottomEarnings: string;
      bottomProfile: string;
    };
  };
  products: {
    badge: string;
    title: string;
    desc: string;
    list: {
      title: string;
      payout: string;
      desc: string;
    }[];
  };
  footer: {
    aboutText: string;
    productsTitle: string;
    companyTitle: string;
    supportTitle: string;
    aboutUs: string;
    careers: string;
    terms: string;
    privacy: string;
    copyrightPre: string;
    copyrightPost: string;
  };
  terms: {
    title: string;
    subtitle: string;
    sections: {
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }[];
  };
  privacy: {
    title: string;
    subtitle: string;
    sections: {
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }[];
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      products: "Financial Products",
      academy: "Academy & Training",
      benefits: "Partner Benefits",
      about: "About Us",
      cta: "Become a Partner",
    },
    hero: {
      badgeZero: " @ Zero Investment",
      headline: "Refer Credit Cards & Loans, and earn extra side income.",
      headlineHighlight1: "Credit Cards & Loans",
      headlineHighlight2: "extra side income",
      subtext: "Start your side income with paisamilega @ zero investment. Share premium Credit Card and Loan offers with your network. They get the best bank deals, and you earn high payouts sent directly to your bank account.",
      inputPlaceholder: "Enter 10-digit mobile number",
      inputButton: "Start Earning",
      successMessage: "✓ App link sent to your mobile. Start your onboarding today!",
      trustBadge: "Trusted by 10,000+ registered partners across India.",
      appMockup: {
        congrats: "Congrats! You earned",
        earnedAmount: "₹30,000",
        transferred: "Transferred to bank account (...9876)",
        txnSuccess: "Transaction Successful",
        salesSummary: "Your Sales Summary",
        monthlyLeads: "Monthly Leads",
        conversion: "Conversion",
        shareEarnTitle: "Share & Earn",
        shareAction: "Share Link",
        bottomHome: "Home",
        bottomLeads: "Leads",
        bottomEarnings: "Earnings",
        bottomProfile: "Profile",
      },
    },
    products: {
      badge: "Financial Products Suite",
      title: "High-Commission Financial Products.",
      desc: "Choose from over 100+ partner products. Share lead generation links via WhatsApp, track progress in real-time, and get payouts directly.",
      list: [
        {
          title: "Credit Cards",
          payout: "Earn up to ₹3,500",
          desc: "Offer premium, co-branded, and lifetime-free credit cards from India's leading banks.",
        },
        {
          title: "Personal & Business Loans",
          payout: "Earn up to 3.5% of Loan Value",
          desc: "Help customers access instant, low-interest personal loans, business credit, or home loans.",
        },
        {
          title: "Savings & Demat Accounts",
          payout: "Earn up to ₹850 per account",
          desc: "Open digital savings accounts or demat trading accounts for customers with zero setup fees.",
        },
        {
          title: "Credit Lines & Pay Later",
          payout: "Earn up to ₹450 per lead",
          desc: "Help young professionals access instant digital credit lines and buy-now-pay-later limits.",
        },
        {
          title: "Investment & Deposits",
          payout: "Earn up to 1.2% per investment",
          desc: "Facilitate stable wealth-building options like Mutual Funds, Fixed Deposits, and Gold Bonds.",
        },
      ],
    },
    footer: {
      aboutText: "India's premium financial product distribution network. Empowering micro-entrepreneurs to build sustainable advisory businesses.",
      productsTitle: "Products",
      companyTitle: "Company",
      supportTitle: "Contact & Support",
      aboutUs: "About Us",
      careers: "Careers",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyrightPre: "© 2026 ",
      copyrightPost: " operated by Credlawn India Private Limited | All Rights Reserved",
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Effective Date: May 23, 2026 | Operated by Credlawn India Private Limited",
      sections: [
        {
          title: "1. Acceptance of Terms",
          paragraphs: [
            "By accessing, browsing, downloading, installing, or registering on the website paisamilega.in, the Paisa Milega Mobile Application, or any related services, APIs, and communication channels (collectively referred to as the 'Platform'), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using or downloading our Platform. These terms constitute a legally binding agreement between you and Credlawn India Private Limited."
          ]
        },
        {
          title: "2. Partner Eligibility & Onboarding",
          paragraphs: [
            "To register as a financial advisor, partner, or agent on our Platform (both Web and Mobile App), you must satisfy the following criteria:"
          ],
          bullets: [
            "You must be an Indian citizen of at least 18 years of age.",
            "You must provide accurate, current, and complete KYC verification information, including Aadhaar, PAN card, and active bank account details for commission transfers.",
            "You are solely responsible for protecting your account credentials, passwords, and OTP access. Any actions taken through your Mobile App or Web account are considered authorized by you."
          ]
        },
        {
          title: "3. Scope of Services",
          paragraphs: [
            "Paisa Milega operates as a digital referral and distribution network. Through the Platform, partners can access, track, and share unique lead generation links for retail financial products (such as Credit Cards, Personal Loans, Business Loans, Savings Accounts, Demat Accounts, and Investment products) with prospective customers. Once a customer successfully obtains a financial product through your referral link, you become eligible for payouts based on our active commission matrices."
          ]
        },
        {
          title: "4. Commissions & Payout Terms",
          paragraphs: [],
          bullets: [
            "Commissions are calculated based on successful product conversions, which are verified directly by our partner banking and lending institutions.",
            "All payouts are processed and sent electronically to your registered and verified bank account.",
            "Tax Deducted at Source (TDS) will be deducted at prevailing rates in compliance with the Income Tax Department of India guidelines.",
            "We reserve the right to withhold, freeze, or cancel payouts if any fraudulent activity, spamming, fake document submissions, or customer misrepresentation is detected via your account."
          ]
        },
        {
          title: "5. Code of Conduct & Rules of Use",
          paragraphs: [
            "Partners using the website and Mobile App must strictly adhere to the following rules:"
          ],
          bullets: [
            "Do not charge customers directly for referral links or consultation services. Paisa Milega services are completely free for end-customers.",
            "Do not misrepresent loan features, credit card features, interest rates, or eligibility guidelines.",
            "Do not submit falsified customer details or manipulate bank documentation.",
            "Do not distribute referral links using spam techniques (such as unsolicited message distributions or mass automated posting)."
          ]
        },
        {
          title: "6. Intermediary Status & Limitation of Liability",
          paragraphs: [
            "Credlawn India Private Limited acts purely as an intermediary referral service. The final approval, underwriting, and issuance of credit cards, loans, or accounts are at the sole discretion of our partner banks and lending institutions. We are not liable for any customer rejections, credit delays, or changes in lending policies by the respective banking partners."
          ]
        },
        {
          title: "7. Modification, Updates & Termination",
          paragraphs: [
            "We reserve the right to modify the Platform features, layout, Terms of Service, or commission payout rates at any time. Continued use of the website or Mobile App after updates indicates acceptance of the revised terms. We reserve the absolute right to suspend or terminate your account without notice for breaches of our code of conduct."
          ]
        },
        {
          title: "8. Contact Us",
          paragraphs: [
            "For questions regarding these Terms, or if you need support with the website or Mobile App, please contact support at support@paisamilega.in."
          ]
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      subtitle: "Effective Date: May 23, 2026 | Operated by Credlawn India Private Limited",
      sections: [
        {
          title: "1. Introduction & Overview",
          paragraphs: [
            "Credlawn India Private Limited (referred to as 'Paisa Milega', 'Company', 'we', 'our', or 'us') respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, store, process, and protect your Personal Information, Personally Identifiable Information (PII), and financial data when you access or use the website paisamilega.in, the Paisa Milega Mobile Application, or any related services (collectively referred to as the 'Platform').",
            "This Policy has been drafted in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Reserve Bank of India (RBI) Digital Lending Guidelines to ensure complete regulatory compliance."
          ]
        },
        {
          title: "2. Information We Collect",
          paragraphs: [
            "To onboard you as a financial partner, verify your identity, process payouts, and facilitate loan/credit card referrals, we collect the following categories of data:"
          ],
          bullets: [
            "KYC and Identity Details: Full name, mobile number, email address, PAN card number, Aadhaar number, date of birth, residential address, and selfie/photo verification.",
            "Financial and Payout Information: Bank account number, IFSC code, bank branch details, and cancelled cheque images to process direct commission transfers.",
            "Customer Lead Data: Full names, contact numbers, salary/income details, credit score estimations, and employment categories of prospects you refer for credit cards or loans.",
            "Mobile App Permissions: When using our Mobile App, we request explicit, one-time consent for: (1) Location (to prevent fraud and satisfy regional bank compliance), (2) Contacts (to help you select and share referral links easily), (3) Device Metadata (IP, device ID, and OS version to secure your account), and (4) SMS Metadata (specifically financial/transactional SMS alerts to pre-qualify leads for bank offers, strictly excluding personal messages)."
          ]
        },
        {
          title: "3. RBI Digital Lending & Partner Sharing",
          paragraphs: [
            "Paisa Milega operates as a Lending Service Provider (LSP) and referral facilitator. We share customer lead data securely only with RBI-licensed Commercial Banks and Non-Banking Financial Companies (NBFCs) for the sole purpose of loan or credit card underwriting. Your data is encrypted in transit and shared only after obtaining explicit consent. We never share, trade, or sell your personal data to unauthorized third-party marketing companies."
          ]
        },
        {
          title: "4. How We Use Your Information",
          paragraphs: [
            "The collected information is used to:"
          ],
          bullets: [
            "Verify your identity and execute KYC onboarding to prevent money laundering and identity theft.",
            "Calculate, process, and transfer commission payouts directly to your registered bank account.",
            "Share qualified customer leads with partner banks to assess eligibility and approve financial products.",
            "Ensure compliance with Indian tax laws, including deducting Tax Deducted at Source (TDS) and generating Form 16.",
            "Analyze app performance, detect fraudulent activities, and improve user security."
          ]
        },
        {
          title: "5. Data Retention, Control, and Deletion Rights",
          paragraphs: [
            "We store your data on secure servers physically located within the territory of India in accordance with RBI directives. You hold absolute control over your personal information:",
            "Right to Correction: You can update or correct your KYC or banking details through the Platform support desk.",
            "Right to Deletion: You have the right to request deletion of your account and personal data. You can submit a deletion request by writing to support@paisamilega.in. We will delete your data within 30 days, except for transaction records, tax deductions, and commission histories that we are legally required to retain under Indian financial and tax laws."
          ]
        },
        {
          title: "6. Security Standards",
          paragraphs: [
            "We employ industry-standard secure socket layer (SSL) encryption, firewalls, and data access controls. All user databases are hosted in secure data centers physically located within India. We implement reasonable security practices and procedures to prevent unauthorized access, alteration, or data leaks."
          ]
        },
        {
          title: "7. Grievance Redressal Officer",
          paragraphs: [
            "In accordance with the Information Technology Act, 2000 and rules made thereunder, the name and contact details of our Grievance Officer are provided below. We will address any grievances, disputes, or data issues within 15 days of receipt:",
            "Name: Grievance Officer, Credlawn India Private Limited",
            "Address: 1st Floor, Plot No-22, Zone-2, M.P. Nagar, Bhopal, Madhya Pradesh - 462001, India",
            "Email: support@paisamilega.in"
          ]
        }
      ]
    }
  },
  hi: {
    nav: {
      products: "वित्तीय उत्पाद",
      academy: "अकादमी और ट्रेनिंग",
      benefits: "पार्टनर के फायदे",
      about: "हमारे बारे में",
      cta: "पार्टनर बनें",
    },
    hero: {
      badgeZero: " @ ज़ीरो इन्वेस्टमेंट",
      headline: "क्रेडिट कार्ड और लोन रेफर करें, और एक्स्ट्रा साइड इनकम कमाएं।",
      headlineHighlight1: "क्रेडिट कार्ड और लोन",
      headlineHighlight2: "एक्स्ट्रा साइड इनकम",
      subtext: "paisamilega @ ज़ीरो इन्वेस्टमेंट के साथ अपनी साइड इनकम शुरू करें। अपने नेटवर्क के साथ प्रीमियम क्रेडिट कार्ड और लोन ऑफर्स शेयर करें। उन्हें बेहतरीन बैंक डील्स मिलती हैं, और आपका पैसा बिना किसी झंझट के सीधे आपके बैंक खाते में आ जाता है।*",
      inputPlaceholder: "10-अंकीय मोबाइल नंबर दर्ज करें",
      inputButton: "कमाई शुरू करें",
      successMessage: "✓ ऐप लिंक आपके मोबाइल पर भेज दिया गया है। आज ही अपनी ऑनबोर्डिंग शुरू करें!",
      trustBadge: "भारत भर में 10,000+ पंजीकृत ग्राहकों द्वारा भरोसेमंद।",
      appMockup: {
        congrats: "बधाई हो! आपने कमाए",
        earnedAmount: "₹30,000",
        transferred: "बैंक खाते (...9876) में ट्रांसफर कर दिए गए हैं।",
        txnSuccess: "सफल लेनदेन",
        salesSummary: "आपकी सेल्स समरी",
        monthlyLeads: "मासिक लीड्स",
        conversion: "कन्वर्शन",
        shareEarnTitle: "शेयर करें और कमाएं",
        shareAction: "लिंक शेयर करें",
        bottomHome: "होम",
        bottomLeads: "लीड्स",
        bottomEarnings: "कमाई",
        bottomProfile: "प्रोफाइल",
      },
    },
    products: {
      badge: "वित्तीय उत्पाद संग्रह",
      title: "हाई-कमीशन वित्तीय उत्पाद।",
      desc: "100+ से अधिक पार्टनर उत्पादों में से चुनें। व्हाट्सएप के माध्यम से लीड जनरेशन लिंक शेयर करें, वास्तविक समय में प्रगति ट्रैक करें और सीधे पेआउट प्राप्त करें।",
      list: [
        {
          title: "क्रेडिट कार्ड",
          payout: "₹3,500 तक कमाएं",
          desc: "भारत के अग्रणी बैंकों से प्रीमियम, को-ब्रांडेड और लाइफटाइम-फ्री क्रेडिट कार्ड ऑफर करें।",
        },
        {
          title: "पर्सनल और बिजनेस लोन",
          payout: "लोन राशि का 3.5% तक कमाएं",
          desc: "ग्राहकों को तुरंत, कम ब्याज वाले व्यक्तिगत लोन, व्यावसायिक क्रेडिट या होम लोन प्राप्त करने में मदद करें।",
        },
        {
          title: "बचत और डीमैट खाते",
          payout: "प्रति खाता ₹850 तक कमाएं",
          desc: "बिना किसी सेटअप शुल्क के ग्राहकों के लिए डिजिटल बचत खाते या डीमैट ट्रेडिंग खाते खोलें।",
        },
        {
          title: "क्रेडिट लाइन्स और पे लेटर",
          payout: "प्रति लीड ₹450 तक कमाएं",
          desc: "युवा प्रोफेशनल्स को तुरंत डिजिटल क्रेडिट लाइन और बाय-नाउ-पे-लेटर सीमाएं प्राप्त करने में मदद करें।",
        },
        {
          title: "निवेश और जमा",
          payout: "प्रति निवेश 1.2% तक कमाएं",
          desc: "म्यूचुअल फंड, फिक्स्ड डिपॉजिट और गोल्ड बॉन्ड जैसे स्थिर संपत्ति-निर्माण विकल्पों की सुविधा प्रदान करें।",
        },
      ],
    },
    footer: {
      aboutText: "भारत का प्रीमियम वित्तीय उत्पाद वितरण नेटवर्क। माइक्रो-उद्यमियों को टिकाऊ वित्तीय सलाहकार व्यवसाय बनाने के लिए सशक्त बनाना।",
      productsTitle: "उत्पाद",
      companyTitle: "कंपनी",
      supportTitle: "संपर्क और सहायता",
      aboutUs: "हमारे बारे में",
      careers: "करियर",
      terms: "सेवा की शर्तें",
      privacy: "गोपनीयता नीति",
      copyrightPre: "© 2026 ",
      copyrightPost: " Credlawn India Private Limited द्वारा संचालित | सर्वाधिकार सुरक्षित",
    },
    terms: {
      title: "सेवा की शर्तें",
      subtitle: "प्रभावी तिथि: 23 मई, 2026 | Credlawn India Private Limited द्वारा संचालित",
      sections: [
        {
          title: "1. शर्तों की स्वीकृति",
          paragraphs: [
            "वेबसाइट paisamilega.in, Paisa Milega मोबाइल एप्लीकेशन, या किसी भी संबंधित सेवाओं, एपीआई और संचार चैनलों (सामूहिक रूप से 'प्लेटफ़ॉर्म' के रूप में संदर्भित) को एक्सेस करने, ब्राउज़ करने, डाउनलोड करने, इंस्टॉल करने या रजिस्टर करने पर, आप इन सेवा की शर्तों से बाध्य होने के लिए सहमत हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया हमारे प्लेटफ़ॉर्म का उपयोग या डाउनलोड करने से बचें। ये शर्तें आपके और Credlawn India Private Limited के बीच एक कानूनी रूप से बाध्यकारी समझौता हैं।"
          ]
        },
        {
          title: "2. पार्टनर पात्रता और ऑनबोर्डिंग",
          paragraphs: [
            "हमारे वित्तीय सलाहकार, पार्टनर या एजेंट के रूप में हमारे प्लेटफ़ॉर्म (वेब और मोबाइल ऐप दोनों) पर पंजीकरण करने के लिए, आपको निम्नलिखित मानदंडों को पूरा करना होगा:"
          ],
          bullets: [
            "आपको कम से कम 18 वर्ष की आयु का भारतीय नागरिक होना चाहिए।",
            "आपको कमीशन ट्रांसफर के लिए आधार, पैन कार्ड और सक्रिय बैंक खाता विवरण सहित सटीक, वर्तमान और पूर्ण केवाईसी सत्यापन जानकारी प्रदान करनी होगी।",
            "आप अपने खाते के क्रेडेंशियल, पासवर्ड और ओटीपी एक्सेस की सुरक्षा के लिए पूरी तरह से जिम्मेदार हैं। आपके मोबाइल ऐप या वेब खाते के माध्यम से की गई किसी भी कार्रवाई को आपके द्वारा अधिकृत माना जाता है।"
          ]
        },
        {
          title: "3. सेवाओं का दायरा",
          paragraphs: [
            "Paisa Milega एक डिजिटल रेफरल और वितरण नेटवर्क के रूप में काम करता है। प्लेटफ़ॉर्म के माध्यम से, भागीदार संभावित ग्राहकों के साथ रिटेल वित्तीय उत्पादों (जैसे क्रेडिट कार्ड, व्यक्तिगत ऋण, व्यावसायिक ऋण, बचत खाते, डीमैट खाते और निवेश उत्पाद) के लिए अद्वितीय लीड जनरेशन लिंक साझा कर सकते हैं। एक बार जब कोई ग्राहक आपके रेफ़रल लिंक के माध्यम से सफलतापूर्वक वित्तीय उत्पाद प्राप्त कर लेता है, तो आप हमारे सक्रिय कमीशन कमीशन के आधार पर भुगतान के पात्र हो जाते हैं।"
          ]
        },
        {
          title: "4. कमीशन और भुगतान की शर्तें",
          paragraphs: [],
          bullets: [
            "कमिशन की गणना सफल उत्पाद रूपांतरणों के आधार पर की जाती है, जो सीधे हमारे सहयोगी बैंकिंग और ऋण संस्थानों द्वारा सत्यापित की जाती है।",
            "सभी भुगतान आपके पंजीकृत और सत्यापित बैंक खाते में इलेक्ट्रॉनिक रूप से संसाधित और भेजे जाते हैं।",
            "आयकर विभाग के दिशानिर्देशों के अनुपालन में प्रचलित दरों पर स्रोत पर कर कटौती (TDS) की जाएगी।",
            "यदि आपके खाते के माध्यम से कोई धोखाधड़ी गतिविधि, स्पैमिंग, नकली दस्तावेज़ जमा करना, या ग्राहक गलत बयानी का पता चलता है, तो हम भुगतान रोकने, फ्रीज करने या रद्द करने का अधिकार सुरक्षित रखते हैं।"
          ]
        },
        {
          title: "5. आचार संहिता और उपयोग के नियम",
          paragraphs: [
            "वेबसाइट और मोबाइल ऐप का उपयोग करने वाले भागीदारों को निम्नलिखित नियमों का कड़ाई से पालन करना चाहिए:"
          ],
          bullets: [
            "रेफ़रल लिंक या परामर्श सेवाओं के लिए ग्राहकों से सीधे शुल्क न लें। पैसा मिलेगा सेवाएं अंतिम ग्राहकों के लिए पूरी तरह से मुफ्त हैं।",
            "ऋण सुविधाओं, क्रेडिट कार्ड सुविधाओं, ब्याज दरों या पात्रता दिशानिर्देशों को गलत तरीके से पेश न करें।",
            "झूठे ग्राहक विवरण जमा न करें या बैंक दस्तावेज़ों में हेरफेर न करें।",
            "स्पैम तकनीकों (जैसे अवांछित संदेश वितरण या बड़े पैमाने पर स्वचालित पोस्टिंग) का उपयोग करके रेफ़रल लिंक वितरित न करें।"
          ]
        },
        {
          title: "6. मध्यस्थ स्थिति और दायित्व की सीमा",
          paragraphs: [
            "Credlawn India Private Limited विशुद्ध रूप से एक मध्यस्थ रेफरल सेवा के रूप में कार्य करता है। क्रेडिट कार्ड, ऋण या खातों की अंतिम मंजूरी, हामीदारी और जारी करना हमारे सहयोगी बैंकों और ऋण देने वाले संस्थानों के विवेकाधिकार पर है। हम संबंधित बैंकिंग भागीदारों द्वारा किसी भी ग्राहक अस्वीकृति, क्रेडिट देरी, या ऋण नीतियों में बदलाव के लिए उत्तरदायी नहीं हैं।"
          ]
        },
        {
          title: "7. संशोधन, अद्यतन और समाप्ति",
          paragraphs: [
            "हम किसी भी समय प्लेटफ़ॉर्म सुविधाओं, लेआउट, सेवा की शर्तों, या कमीशन भुगतान दरों को संशोधित करने का अधिकार सुरक्षित रखते हैं। अपडेट के बाद वेबसाइट या मोबाइल ऐप का निरंतर उपयोग संशोधित शर्तों की स्वीकृति को इंगित करता है। हम अपनी आचार संहिता के उल्लंघन के लिए बिना किसी सूचना के आपके खाते को निलंबित या समाप्त करने का पूर्ण अधिकार सुरक्षित रखते हैं।"
          ]
        },
        {
          title: "8. संपर्क करें",
          paragraphs: [
            "इन शर्तों के संबंध में प्रश्नों के लिए, या यदि आपको वेबसाइट या मोबाइल ऐप के लिए सहायता की आवश्यकता है, तो कृपया support@paisamilega.in पर संपर्क करें।"
          ]
        }
      ]
    },
    privacy: {
      title: "गोपनीयता नीति",
      subtitle: "प्रभावी तिथि: 23 मई, 2026 | Credlawn India Private Limited द्वारा संचालित",
      sections: [
        {
          title: "1. परिचय",
          paragraphs: [
            "paisamilega.in, Paisa Milega मोबाइल एप्लीकेशन और हमारी ऑनलाइन सेवाओं (सामूहिक रूप से 'प्लेटफ़ॉर्म' के रूप में संदर्भित) पर, जिसका स्वामित्व और संचालन Credlawn India Private Limited के पास है, हम आपके विश्वास को महत्व देते हैं और आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट, मोबाइल एप्लीकेशन या सेवाओं का उपयोग करते हैं तो हम आपकी व्यक्तिगत जानकारी को कैसे एकत्र, संग्रहीत, साझा और सुरक्षित करते हैं।"
          ]
        },
        {
          title: "2. जानकारी जो हम एकत्र करते हैं",
          paragraphs: [
            "हमारे वित्तीय उत्पाद रेफरल प्लेटफ़ॉर्म (वेब और ऐप के माध्यम से) की पेशकश करने के लिए, हम निम्नलिखित प्रकार की जानकारी एकत्र करते हैं:"
          ],
          bullets: [
            "पार्टनर पंजीकरण विवरण: पूरा नाम, ईमेल पता, मोबाइल नंबर, पैन कार्ड, आधार विवरण और बैंक खाता जानकारी।",
            "लीड जनरेशन जानकारी: क्रेडिट कार्ड या लोन प्री-क्वालिफिकेशन जमा करने के लिए आवश्यक ग्राहक का नाम, संपर्क नंबर, आय मेट्रिक्स और क्रेडिट विवरण।",
            "तकनीकी डिवाइस डेटा: आईपी पता, ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम और प्लेटफ़ॉर्म इंटरेक्शन लॉग। हमारे मोबाइल ऐप के लिए, इसमें डिवाइस मॉडल और ऐप एनालिटिक्स डेटा भी शामिल है।"
          ]
        },
        {
          title: "3. हम आपकी जानकारी का उपयोग कैसे करते हैं",
          paragraphs: [
            "हम एकत्रित जानकारी का उपयोग (वेब और मोबाइल ऐप दोनों में) निम्नलिखित विशिष्ट व्यावसायिक उद्देश्यों के लिए करते हैं:"
          ],
          bullets: [
            "आपको एक अधिकृत वित्तीय सलाहकार के रूप में ऑनबोर्ड करने और आपके केवाईसी विवरणों को सत्यापित करने के लिए।",
            "पात्रता का मूल्यांकन करने और संबंधित ऋणदाता बैंकों को लीड जानकारी सबमिट करने के लिए।",
            "आपके बैंक खाते में रेफरल कमीशन भुगतान को संसाधित करने और वितरित करने के लिए।",
            "धोखाधड़ी, सुरक्षा मुद्दों या नीतिगत उल्लंघनों का पता लगाने, उन्हें रोकने और कम करने के लिए।",
            "प्लेटफ़ॉर्म अपडेट, सिस्टम नोटिफिकेशन और ट्रेनिंग सामग्री भेजने के लिए।"
          ]
        },
        {
          title: "4. डेटा शेयरिंग और प्रकटीकरण",
          paragraphs: [
            "हम आपकी गोपनीयता का सम्मान करते हैं और आपका व्यक्तिगत डेटा नहीं बेचते हैं। हम केवल निम्नलिखित शर्तों के तहत जानकारी साझा करते हैं:"
          ],
          bullets: [
            "पार्टनर बैंकिंग संस्थान: हम उत्पाद की स्वीकृति की सुविधा के लिए चुने गए पार्टनर बैंकों और वित्तीय संस्थानों को ग्राहक लीड विवरण सबमिट करते हैं।",
            "सेवा प्रदाता: विश्वसनीय थर्ड-पार्टी पेमेंट गेटवे, एसएमएस गेटवे और क्लाउड सर्वर जो हमें लेनदेन संसाधित करने में सक्षम बनाते हैं।",
            "नियामक प्राधिकरण: भारतीय नियामक निकायों के कानूनी आदेशों, अदालती आदेशों या अनुरोधों के अनुपालन में।"
          ]
        },
        {
          title: "5. डेटा सुरक्षा और भंडारण",
          paragraphs: [
            "हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, संशोधन या प्रकटीकरण से बचाने के लिए शीर्ष स्तर के तकनीकी और प्रशासनिक सुरक्षा उपायों (जैसे एसएसएल एन्क्रिप्शन, पहुंच प्रतिबंध और सुरक्षित डेटाबेस) का उपयोग करते हैं। आपका डेटा भारत के भीतर स्थित सुरक्षित सर्वरों पर संग्रहीत है।"
          ]
        },
        {
          title: "6. डेटा प्रतिधारण (डेटा रिटेंशन)",
          paragraphs: [
            "हम आपकी व्यक्तिगत जानकारी को तब तक अपने पास रखते हैं जब तक आपका सलाहकार खाता सक्रिय रहता है, या भारतीय कानूनों के तहत वित्तीय रिपोर्टिंग, कराधान दिशानिर्देशों, ऑडिट नियमों या कानूनी अनुपालन के लिए आवश्यक हो।"
          ]
        },
        {
          title: "7. आपके गोपनीयता अधिकार",
          paragraphs: [
            "आपको किसी भी समय अपने पंजीकृत खाते के विवरण तक पहुंचने, निरीक्षण करने, संशोधित करने या अपडेट करने का अधिकार है। आप अपना खाता हटाने का अनुरोध भी कर सकते हैं; हालांकि, टैक्स/कानूनी उद्देश्यों के लिए कुछ अनुपालन रिकॉर्ड (जैसे कमीशन भुगतान लॉग) को रिटेन किया जाना अनिवार्य है।"
          ]
        },
        {
          title: "8. हमसे संपर्क करें",
          paragraphs: [
            "सूचना प्रौद्योगिकी अधिनियम, 2000 और उसके तहत बनाए गए नियमों के अनुसार, हमारे शिकायत अधिकारी का नाम और संपर्क विवरण नीचे प्रदान किया गया है। हम शिकायत, विवाद या डेटा समस्याओं का समाधान प्राप्ति के 15 दिनों के भीतर करेंगे:",
            "नाम: शिकायत अधिकारी, Credlawn India Private Limited",
            "पता: प्रथम तल, प्लॉट नंबर-22, जोन-2, एम.पी. नगर, भोपाल, मध्य प्रदेश - 462001, भारत",
            "ईमेल: support@paisamilega.in"
          ]
        }
      ]
    }
  }
};
