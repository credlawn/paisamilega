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
    dataPolicy: string;
    terms: string;
    privacy: string;
    copyrightPre: string;
    copyrightPost: string;
    addressLine1: string;
    addressLine2: string;
  };
  home: {
    features: {
      title: string;
      list: {
        title: string;
        desc: string;
      }[];
    };
    howItWorks: {
      title: string;
      steps: {
        title: string;
        desc: string;
      }[];
    };
    tech: {
      badge: string;
      title: string;
      desc: string;
      items: {
        title: string;
        desc: string;
      }[];
    };
  };
  dataPolicy: {
    title: string;
    subtitle: string;
    sections: {
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }[];
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
  saathi: {
    hero: {
      badge: string;
      title: string;
      hook: string;
      subtext: string;
      cta: string;
    };
    winWin: {
      title: string;
      concept: string;
      content: string;
      points: string[];
    };    income: {
      title: string;
      subtext: string;
      cardTitle: string;
      cardDesc: string;
    };
    benefits: {
      title: string;
      list: {
        title: string;
        desc: string;
      }[];
    };
    howItWorks: {
      title: string;
      steps: {
        title: string;
        desc: string;
      }[];
    };
    whoIsItFor: {
      title: string;
      list: {
        title: string;
        desc: string;
        tag: string;
      }[];
    };
  };
  }
export const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      products: "Financial Products",
      academy: "Academy & Training",
      benefits: "Saathi Benefits",
      about: "About Us",
      cta: "Join as a Saathi",
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
      aboutText: "India's trusted network for financial product distribution. Become a Saathi, help your community find the right banking products, and earn ₹1,00,000* every month from home.",
      productsTitle: "Products",
      companyTitle: "Company",
      supportTitle: "Contact & Support",
      aboutUs: "About Us",
      dataPolicy: "Data Policy",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyrightPre: "© 2026 ",
      copyrightPost: " operated by Credlawn India Private Limited",
      addressLine1: "1st Floor, Plot No-22, Zone-2, M.P. Nagar",
      addressLine2: "Bhopal, Madhya Pradesh - 462011",
    },
    home: {
      features: {
        title: "Why choose Paisa Milega?",
        list: [
          {
            title: "Zero Investment",
            desc: "Start your professional journey without any upfront costs or hidden fees.",
          },
          {
            title: "100+ Trusted Brands",
            desc: "Access products from India's top banks and financial institutions.",
          },
          {
            title: "Highest Payouts",
            desc: "Enjoy industry-leading commission rates with direct bank transfers.",
          },
          {
            title: "Dedicated Support",
            desc: "Get expert assistance and training through our Saathi Academy.",
          },
        ],
      },
      howItWorks: {
        title: "Start earning in 3 simple steps",
        steps: [
          {
            title: "Join as a Saathi",
            desc: "Download the app and complete your digital onboarding in minutes.",
          },
          {
            title: "Share Offers",
            desc: "Send personalized product links to your network via WhatsApp.",
          },
          {
            title: "Earn Big",
            desc: "Track leads in real-time and get commissions on every success.",
          },
        ],
      },
      tech: {
        badge: "Next-Gen Tech",
        title: "The smartest way to earn.",
        desc: "We use cutting-edge technology to make your business easier, faster, and more profitable.",
        items: [
          {
            title: "WhatsApp Cloud API",
            desc: "Get real-time lead updates and instant support directly on your WhatsApp.",
          },
          {
            title: "AI Smart Match",
            desc: "Our AI (Roadmap) suggests the best financial products for each customer automatically.",
          },
          {
            title: "Live Dashboard",
            desc: "A powerful real-time dashboard to manage your team and track every rupee.",
          },
        ],
      },
    },
    dataPolicy: {
      title: "Data Policy",
      subtitle: "Effective Date: May 23, 2026 | Compliant with RBI Digital Lending Guidelines",
      sections: [
        {
          title: "1. Data Collection & Purpose",
          paragraphs: [
            "At Paisa Milega, we collect only the minimum data required to facilitate financial product referrals and ensure regulatory compliance. This includes:",
            "• Identity Data: Name, Mobile Number, PAN, and Aadhaar (for KYC).",
            "• Financial Data: Bank details for commission payouts.",
            "• Lead Data: Basic financial requirements of customers you refer.",
            "This data is used solely for onboarding, verifying conversions, and processing your earnings."
          ]
        },
        {
          title: "2. Data Storage & Security",
          paragraphs: [
            "We prioritize the security of your information above all else:",
            "• Localized Storage: All user data is stored on secure, encrypted servers physically located within the territory of India.",
            "• Encryption: We use industry-standard SSL encryption for data in transit and AES-256 encryption for data at rest.",
            "• Access Control: Only authorized personnel with strict multi-factor authentication can access anonymized datasets for audit purposes."
          ]
        },
        {
          title: "3. Data Retention Policy",
          paragraphs: [
            "We adhere to strict timelines for keeping your data:",
            "• Credit Report Data: Any data sourced from credit bureaus (like Equifax or CIBIL) is retained for a maximum period of 6 months, after which it is automatically purged from our active systems.",
            "• Account Data: General profile information is retained as long as your account is active. Transactional and tax records (TDS) are retained for 7 years as mandated by Indian financial laws."
          ]
        },
        {
          title: "4. Data Disposal & Shredding",
          paragraphs: [
            "When data is no longer required or upon a valid deletion request, we employ 'Digital Shredding' techniques. This ensures that the data is not just deleted but overwritten multiple times, making it technically impossible to recover. Sensitive documents like PAN/Aadhaar copies are masked in our archives to prevent misuse."
          ]
        },
        {
          title: "5. User Rights & Consent",
          paragraphs: [
            "You have the absolute right to:",
            "• Request a copy of the data we hold about you.",
            "• Ask for the correction of inaccurate information.",
            "• Request the deletion of your account and associated data (subject to legal retention requirements).",
            "We never share or sell your data to third-party marketing companies. Data is only shared with RBI-regulated banks and NBFCs after your explicit consent for specific product applications."
          ]
        }
      ]
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
            "You must be an Indian citizen of at least 18 years of age and residing in India.",
            "You must provide accurate, current, and complete KYC verification information, including Aadhaar, PAN card, and active bank account details for commission transfers.",
            "You are solely responsible for protecting your account credentials, passwords, and OTP access. Any actions taken through your Mobile App or Web account are considered authorized by you.",
            "Registration is at the sole discretion of the Company, and we reserve the right to reject any application without providing reasons."
          ]
        },
        {
          title: "3. User Obligations & Code of Conduct",
          paragraphs: [
            "As a partner, you agree to adhere to the highest standards of professional conduct:"
          ],
          bullets: [
            "No Service Fees: You shall not charge any fees or commissions directly from the customers for referral services. Our services are free for end-customers.",
            "Accurate Representation: You must not misrepresent loan features, interest rates, eligibility criteria, or hidden charges of any financial product.",
            "Data Privacy: You must obtain explicit consent from customers before collecting or submitting their data on the Platform.",
            "Prohibited Acts: You shall not engage in 'spamming', use automated scripts, or attempt to reverse-engineer any part of the Platform.",
            "Brand Usage: You shall not use the 'Paisa Milega' name or logo for any unauthorized marketing, including creating social media handles or websites that imply an official partnership beyond lead generation."
          ]
        },
        {
          title: "4. Intellectual Property Rights",
          paragraphs: [
            "All content, logos, trademarks, graphics, UI/UX design, code, and proprietary algorithms on the Platform are the exclusive property of Credlawn India Private Limited. You are granted a limited, non-exclusive, revocable, and non-transferable license to use the Platform solely for the purpose of financial product distribution as authorized by us. Any unauthorized reproduction or distribution is strictly prohibited and may lead to legal action."
          ]
        },
        {
          title: "5. Commissions, Payouts & Clawback",
          paragraphs: [
            "Earnings and payouts are governed by the following rules:"
          ],
          bullets: [
            "Verification: Commissions are only credited after successful conversion and verification by our partner banking/financial institutions.",
            "Dynamic Payouts: The Company reserves the right to modify, update, or change the payout structure, commission rates, and incentive schemes at any time at its sole discretion without prior notice.",
            "TDS & Taxes: All payouts are subject to Tax Deducted at Source (TDS) as per the Income Tax Act of India.",
            "Clawback Policy: We reserve the right to 'clawback' or deduct commissions already paid if the partner bank subsequently identifies the lead as fraudulent or if the customer cancels the product within a 'look-back' period.",
            "Penalty Recovery: If any bank, NBFC, or lending partner imposes a fine or penalty on the Company due to your misconduct, submission of fake documents, or breach of their lending guidelines, we reserve the right to deduct or recover the equivalent penalty amount from your accrued or future earnings.",
            "Wallet Expiry: Earnings not transferred to a bank account for more than 180 days may be subject to expiry or forfeiture at the Company's discretion."
          ]
        },
        {
          title: "6. Confidentiality",
          paragraphs: [
            "You may receive access to confidential information, including lead data, payout structures, and internal strategies. You agree to maintain strict confidentiality and not disclose such information to any third party. This obligation survives even after the termination of your partnership with the Platform."
          ]
        },
        {
          title: "7. Limitation of Liability & Indemnification",
          paragraphs: [
            "Limitation: The Platform is provided on an 'as-is' and 'as-available' basis. Credlawn India Private Limited shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data, resulting from your use of the Platform.",
            "Indemnification: You agree to indemnify, defend, and hold harmless the Company and its directors from any claims, losses, legal fees, or damages arising out of your breach of these terms, negligence, or misrepresentation to customers."
          ]
        },
        {
          title: "8. Termination & Suspension",
          paragraphs: [
            "We reserve the right to suspend or terminate your account immediately, without notice, if:",
            "a) You violate any provision of these Terms.",
            "b) You engage in fraudulent activities or submit falsified documents.",
            "c) Your actions are deemed detrimental to the reputation of the Company.",
            "Upon termination, your right to use the Platform ceases, and any pending commissions may be frozen or forfeited."
          ]
        },
        {
          title: "9. Governing Law & Dispute Resolution",
          paragraphs: [
            "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Bhopal, Madhya Pradesh."
          ]
        },
        {
          title: "11. Relationship of Parties",
          paragraphs: [
            "Your relationship with Credlawn India Private Limited is that of an independent contractor. Nothing in these Terms shall be construed to create a partnership, joint venture, employer-employee, or agency relationship. You have no authority to bind the Company to any obligations or represent yourself as an official agent or employee."
          ]
        },
        {
          title: "12. Communication Consent",
          paragraphs: [
            "By registering on the Platform, you provide your explicit consent to be contacted by the Company via phone calls, SMS, RCS, WhatsApp, and email for the purposes of account verification, lead updates, training materials, and promotional offers. This consent overrides any registration on the National Do Not Call (DNC) Registry."
          ]
        },
        {
          title: "13. Modification of Agreement",
          paragraphs: [
            "The Company reserves the right to modify, amend, or update these Terms of Service at any time. Any changes will be effective immediately upon posting on the Platform. Your continued use of the Platform following such changes constitutes your acceptance of the revised Terms."
          ]
        },
        {
          title: "14. Contact Us",
          paragraphs: [
            "For questions regarding these Terms or if you need support, please contact us at support@paisamilega.in."
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
            "Address: 1st Floor, Plot No-22, Zone-2, M.P. Nagar, Bhopal, Madhya Pradesh - 462011, India",
            "Email: support@paisamilega.in"
          ]
        }
      ]
    },
    saathi: {
      hero: {
        badge: "Paisa Milega Saathi Program",
        title: "Become a Digital Financial Saathi.",
        hook: "Earn up to ₹1,00,000 every month with zero investment.",
        subtext: "Join the Digital India revolution. Refer banking products and earn high commissions while helping your community grow financially.",
        cta: "Join as a Saathi Now",
      },
      winWin: {
        title: "Everyone wins when you help.",
        concept: "Everyone needs it, so why not through you?",
        content: "In today's world, everyone needs a Credit Card or a Loan—whether it's for buying a new phone, paying school fees, or growing a business. When you help them choose the right bank offer, they benefit from expert guidance, and you earn a professional commission. It's a true win-win, done completely digitally!",
        points: [
          "Expert Guidance for them",
          "Professional Commission for you",
          "Stronger Financial Community",
        ],
      },
      income: {
        title: "High Earning Potential",
        subtext: "Your income depends on your effort. No upper limit.",
        cardTitle: "₹1,00,000 / Month",
        cardDesc: "With just 1-2 successful referrals daily, you can reach this milestone easily.",
      },
      benefits: {
        title: "Why become a Saathi?",
        list: [
          {
            title: "Zero Investment",
            desc: "Start your business without spending a single rupee.",
          },
          {
            title: "100+ Trusted Banks",
            desc: "Partner with India's top banks like HDFC, SBI, Axis, and more.",
          },
          {
            title: "Academy Support",
            desc: "We provide full training on products and how to find customers.",
          },
          {
            title: "Flexible Timing",
            desc: "Work whenever you want. You are your own boss.",
          },
        ],
      },
      howItWorks: {
        title: "3 Simple Steps to Start",
        steps: [
          {
            title: "Join & Register",
            desc: "Download the app and sign up as a Saathi in minutes.",
          },
          {
            title: "Suggest & Share",
            desc: "Share the best bank offers with your friends and family via WhatsApp.",
          },
          {
            title: "Earn & Grow",
            desc: "Get your commission directly in your bank account on every success.",
          },
        ],
      },
      whoIsItFor: {
        title: "Who can become a Saathi?",
        list: [
          {
            title: "Students",
            tag: "Pocket Money",
            desc: "Turn your free time into professional income and learn finance.",
          },
          {
            title: "Shop Owners",
            tag: "Extra Income",
            desc: "Offer extra services to your existing customers and earn more.",
          },
          {
            title: "Housewives",
            tag: "Independence",
            desc: "Become financially independent while managing your home.",
          },
          {
            title: "Salaried Employees",
            tag: "Side Income",
            desc: "Earn an extra side income along with your regular job.",
          },
        ],
      },
    },
  },
  hi: {
    nav: {
      products: "वित्तीय उत्पाद",
      academy: "अकादमी और ट्रेनिंग",
      benefits: "साथी के फायदे",
      about: "हमारे बारे में",
      cta: "साथी बनें",
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
        {
          title: "प्रॉपर्टी पर लोन (LAP)",
          payout: "लोन राशि का 1.5% तक कमाएं",
          desc: "प्रॉपर्टी मालिकों को कम ब्याज वाले LAP के साथ अपनी आवासीय या व्यावसायिक संपत्ति की वैल्यू अनलॉक करने में मदद करें।",
        },
      ],
    },
    footer: {
      aboutText: "भारत का भरोसेमंद फाइनेंशियल प्रोडक्ट डिस्ट्रीब्यूशन नेटवर्क। हमारे साथ 'साथी' बनें, अपने सर्कल को सही बैंकिंग प्रोडक्ट्स दिलाने में मदद करें और घर बैठे हर महीने ₹1,00,000* तक कमाएं।",
      productsTitle: "उत्पाद",
      companyTitle: "कंपनी",
      supportTitle: "संपर्क और सहायता",
      aboutUs: "हमारे बारे में",
      dataPolicy: "डेटा पॉलिसी",
      terms: "सेवा की शर्तें",
      privacy: "गोपनीयता नीति",
      copyrightPre: "© 2026 ",
      copyrightPost: " Credlawn India Private Limited द्वारा संचालित",
      addressLine1: "प्रथम तल, प्लॉट नंबर-22, जोन-2, एम.पी. नगर",
      addressLine2: "भोपाल, मध्य प्रदेश - 462011",
    },
    home: {
      features: {
        title: "Paisa Milega ही क्यों चुनें?",
        list: [
          {
            title: "ज़ीरो इन्वेस्टमेंट",
            desc: "बिना किसी अग्रिम लागत या छिपे हुए शुल्क के अपनी व्यावसायिक यात्रा शुरू करें।",
          },
          {
            title: "100+ भरोसेमंद ब्रांड",
            desc: "भारत के शीर्ष बैंकों और वित्तीय संस्थानों के उत्पादों तक पहुंचें।",
          },
          {
            title: "उच्चतम भुगतान (Payouts)",
            desc: "सीधे बैंक ट्रांसफर के साथ उद्योग-अग्रणी कमीशन दरों का आनंद लें।",
          },
          {
            title: "समर्पित सहायता",
            desc: "हमारी Saathi Academy के माध्यम से विशेषज्ञ सहायता और ट्रेनिंग प्राप्त करें।",
          },
        ],
      },
      howItWorks: {
        title: "3 आसान चरणों में कमाना शुरू करें",
        steps: [
          {
            title: "साथी के रूप में जुड़ें",
            desc: "ऐप डाउनलोड करें और मिनटों में अपनी डिजिटल ऑनबोर्डिंग पूरी करें।",
          },
          {
            title: "ऑफ़र शेयर करें",
            desc: "व्हाट्सएप के माध्यम से अपने नेटवर्क को व्यक्तिगत उत्पाद लिंक भेजें।",
          },
          {
            title: "बड़ी कमाई करें",
            desc: "वास्तविक समय में लीड्स ट्रैक करें और हर सफलता पर कमीशन प्राप्त करें।",
          },
        ],
      },
      tech: {
        badge: "नेक्स्ट-जेन टेक",
        title: "कमाने का सबसे स्मार्ट तरीका।",
        desc: "हम आपके व्यवसाय को आसान, तेज़ और अधिक लाभदायक बनाने के लिए अत्याधुनिक तकनीक का उपयोग करते हैं।",
        items: [
          {
            title: "WhatsApp Cloud API",
            desc: "सीधे अपने व्हाट्सएप पर रीयल-टाइम लीड अपडेट और तुरंत सहायता प्राप्त करें।",
          },
          {
            title: "AI स्मार्ट मैच",
            desc: "हमारा AI (रोडमैप) स्वचालित रूप से प्रत्येक ग्राहक के लिए सर्वोत्तम वित्तीय उत्पादों का सुझाव देता है।",
          },
          {
            title: "लाइव डैशबोर्ड",
            desc: "अपनी टीम को प्रबंधित करने और हर रुपये को ट्रैक करने के लिए एक शक्तिशाली रीयल-टाइम डैशबोर्ड।",
          },
        ],
      },
    },
    dataPolicy: {
      title: "डेटा पॉलिसी",
      subtitle: "प्रभावी तिथि: 23 मई, 2026 | RBI डिजिटल लेंडिंग दिशानिर्देशों के अनुरूप",
      sections: [
        {
          title: "1. डेटा संग्रह और उद्देश्य",
          paragraphs: [
            "Paisa Milega में, हम केवल वित्तीय उत्पाद रेफरल की सुविधा और नियामक अनुपालन सुनिश्चित करने के लिए आवश्यक न्यूनतम डेटा एकत्र करते हैं। इसमें शामिल हैं:",
            "• पहचान डेटा: नाम, मोबाइल नंबर, पैन (PAN), और आधार (KYC के लिए)।",
            "• वित्तीय डेटा: कमीशन भुगतान के लिए बैंक विवरण।",
            "• लीड डेटा: आपके द्वारा रेफर किए गए ग्राहकों की बुनियादी वित्तीय आवश्यकताएं।",
            "यह डेटा केवल ऑनबोर्डिंग, कन्वर्शन की पुष्टि और आपकी कमाई को प्रोसेस करने के लिए उपयोग किया जाता है।"
          ]
        },
        {
          title: "2. डेटा स्टोरेज और सुरक्षा",
          paragraphs: [
            "हम आपकी जानकारी की सुरक्षा को सर्वोपरि रखते हैं:",
            "• स्थानीय स्टोरेज: सभी उपयोगकर्ता डेटा भारत के क्षेत्र में स्थित सुरक्षित, एन्क्रिप्टेड सर्वर पर संग्रहीत किया जाता है।",
            "• एन्क्रिप्शन: हम ट्रांजिट में डेटा के लिए उद्योग-मानक SSL एन्क्रिप्शन और रेस्ट में डेटा के लिए AES-256 एन्क्रिप्शन का उपयोग करते हैं।",
            "• एक्सेस कंट्रोल: केवल अधिकृत कर्मचारी ही ऑडिट उद्देश्यों के लिए अनाम डेटासेट तक पहुंच सकते हैं।"
          ]
        },
        {
          title: "3. डेटा प्रतिधारण नीति (Retention Policy)",
          paragraphs: [
            "हम आपके डेटा को रखने के लिए सख्त समयसीमा का पालन करते हैं:",
            "• क्रेडिट रिपोर्ट डेटा: क्रेडिट ब्यूरो (जैसे Equifax या CIBIL) से प्राप्त किसी भी डेटा को अधिकतम 6 महीने की अवधि के लिए रखा जाता है, जिसके बाद इसे हमारे सक्रिय सिस्टम से स्वचालित रूप से हटा दिया जाता है।",
            "• अकाउंट डेटा: जब तक आपका खाता सक्रिय है, सामान्य प्रोफाइल जानकारी रखी जाती है। भारतीय वित्तीय कानूनों के अनुसार ट्रांजेक्शनल और टैक्स रिकॉर्ड (TDS) 7 वर्षों के लिए रखे जाते हैं।"
          ]
        },
        {
          title: "4. डेटा निपटान और श्रेडिंग (Digital Shredding)",
          paragraphs: [
            "जब डेटा की आवश्यकता नहीं रह जाती है या वैध विलोपन अनुरोध प्राप्त होता है, तो हम 'डिजिटल श्रेडिंग' तकनीकों का उपयोग करते हैं। यह सुनिश्चित करता है कि डेटा केवल हटाया नहीं गया है, बल्कि उसे कई बार ओवरराइट किया गया है, जिससे उसे रिकवर करना तकनीकी रूप से असंभव हो जाता है। दुरुपयोग को रोकने के लिए पैन/आधार प्रतियों जैसे संवेदनशील दस्तावेजों को हमारे अभिलेखागार में मास्क (Mask) किया जाता है।"
          ]
        },
        {
          title: "5. उपयोगकर्ता अधिकार और सहमति",
          paragraphs: [
            "आपके पास पूर्ण अधिकार है:",
            "• हमारे पास मौजूद अपने डेटा की एक प्रति मांगना।",
            "• गलत जानकारी को सही करने का अनुरोध करना।",
            "• अपने खाते और संबंधित डेटा को हटाने का अनुरोध करना (कानूनी प्रतिधारण आवश्यकताओं के अधीन)।",
            "हम आपका डेटा कभी भी तीसरे पक्ष की मार्केटिंग कंपनियों के साथ साझा या बेचते नहीं हैं। विशिष्ट उत्पाद आवेदनों के लिए आपकी स्पष्ट सहमति के बाद ही डेटा को केवल RBI द्वारा विनियमित बैंकों और NBFC के साथ साझा किया जाता है।"
          ]
        }
      ]
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
            "आपको कम से कम 18 वर्ष की आयु का भारतीय नागरिक होना चाहिए और भारत में निवास करना चाहिए।",
            "आपको कमीशन ट्रांसफर के लिए आधार, पैन कार्ड और सक्रिय बैंक खाता विवरण सहित सटीक, वर्तमान और पूर्ण केवाईसी सत्यापन जानकारी प्रदान करनी होगी।",
            "आप अपने खाते के क्रेडेंशियल, पासवर्ड और ओटीपी एक्सेस की सुरक्षा के लिए पूरी तरह से जिम्मेदार हैं। आपके मोबाइल ऐप या वेब खाते के माध्यम से की गई किसी भी कार्रवाई को आपके द्वारा अधिकृत माना जाता है।",
            "पंजीकरण कंपनी के विवेकाधिकार पर है, और हम बिना कारण बताए किसी भी आवेदन को अस्वीकार करने का अधिकार सुरक्षित रखते हैं।"
          ]
        },
        {
          title: "3. उपयोगकर्ता दायित्व और आचार संहिता",
          paragraphs: [
            "एक पार्टनर के रूप में, आप पेशेवर आचरण के उच्चतम मानकों का पालन करने के लिए सहमत हैं:"
          ],
          bullets: [
            "कोई सेवा शुल्क नहीं: आप रेफरल सेवाओं के लिए ग्राहकों से सीधे कोई शुल्क या कमीशन नहीं लेंगे। हमारी सेवाएं अंतिम ग्राहकों के लिए मुफ्त हैं।",
            "सटीक प्रतिनिधित्व: आपको किसी भी वित्तीय उत्पाद की ऋण सुविधाओं, ब्याज दरों, पात्रता मानदंडों या छिपे हुए शुल्कों को गलत तरीके से पेश नहीं करना चाहिए।",
            "डेटा गोपनीयता: प्लेटफ़ॉर्म पर ग्राहकों का डेटा एकत्र करने या सबमिट करने से पहले आपको उनसे स्पष्ट सहमति प्राप्त करनी होगी।",
            "प्रतिबंधित कार्य: आप 'स्पैमिंग' में शामिल नहीं होंगे, स्वचालित स्क्रिप्ट का उपयोग नहीं करेंगे, या प्लेटफ़ॉर्म के किसी भी हिस्से को रिवर्स-इंजीनियर करने का प्रयास नहीं करेंगे।",
            "ब्रांड का उपयोग: आप अनधिकृत मार्केटिंग के लिए 'Paisa Milega' नाम या लोगो का उपयोग नहीं करेंगे, जिसमें सोशल मीडिया हैंडल या वेबसाइट बनाना शामिल है जो लीड जनरेशन से परे आधिकारिक साझेदारी का संकेत देते हैं।"
          ]
        },
        {
          title: "4. बौद्धिक संपदा अधिकार (Intellectual Property)",
          paragraphs: [
            "प्लेटफ़ॉर्म पर सभी सामग्री, लोगो, ट्रेडमार्क, ग्राफिक्स, UI/UX डिज़ाइन, कोड और मालिकाना एल्गोरिदम Credlawn India Private Limited की विशेष संपत्ति हैं। आपको हमारे द्वारा अधिकृत वित्तीय उत्पाद वितरण के उद्देश्य से प्लेटफ़ॉर्म का उपयोग करने के लिए एक सीमित, गैर-अनन्य, प्रतिसंहरणीय और गैर-हस्तांतरणीय लाइसेंस दिया जाता है। कोई भी अनधिकृत पुनरुत्पादन या वितरण सख्त वर्जित है और कानूनी कार्रवाई का कारण बन सकता है।"
          ]
        },
        {
          title: "5. कमीशन, भुगतान और क्लॉबैक (Clawback)",
          paragraphs: [
            "कमाई और भुगतान निम्नलिखित नियमों द्वारा शासित होते हैं:"
          ],
          bullets: [
              "सत्यापन: कमीशन केवल हमारे सहयोगी बैंकिंग/वित्तीय संस्थानों द्वारा सफल रूपांतरण और सत्यापन के बाद ही क्रेडिट किया जाता है।",
              "परिवर्तनशील भुगतान: कंपनी के पास बिना किसी पूर्व सूचना के किसी भी समय अपने पूर्ण विवेकाधिकार पर भुगतान संरचना, कमीशन दरों और प्रोत्साहन योजनाओं को संशोधित करने, अपडेट करने या बदलने का अधिकार सुरक्षित है।",
              "टीडीएस और कर: भारत के आयकर अधिनियम के अनुसार स्रोत पर कर कटौती (TDS) के अधीन हैं।",
            "क्लॉबैक नीति: यदि पार्टनर बैंक बाद में लीड को धोखाधड़ी के रूप में पहचानता है या यदि ग्राहक एक निश्चित अवधि के भीतर उत्पाद रद्द कर देता है, तो हम पहले से भुगतान किए गए कमीशन को 'क्लॉबैक' करने या काटने का अधिकार सुरक्षित रखते हैं।",
            "जुर्माना वसूली (Penalty Recovery): यदि आपकी अनुचित गतिविधियों, जाली दस्तावेज जमा करने, या उनके ऋण दिशानिर्देशों के उल्लंघन के कारण कोई बैंक, NBFC या लेंडिंग पार्टनर कंपनी पर कोई जुर्माना या पेनल्टी लगाता है, तो हम आपकी वर्तमान या भविष्य की कमाई से समतुल्य जुर्माना राशि काटने या वसूलने का अधिकार सुरक्षित रखते हैं।",
            "वॉलेट समाप्ति: 180 दिनों से अधिक समय तक बैंक खाते में स्थानांतरित नहीं की गई कमाई कंपनी के विवेकाधिकार पर समाप्त या जब्त की जा सकती है।"
          ]
        },
        {
          title: "6. गोपनीयता (Confidentiality)",
          paragraphs: [
            "आपको लीड डेटा, भुगतान संरचनाओं और आंतरिक रणनीतियों सहित गोपनीय जानकारी तक पहुंच प्राप्त हो सकती है। आप सख्त गोपनीयता बनाए रखने और ऐसी जानकारी किसी भी तीसरे पक्ष को प्रकट नहीं करने के लिए सहमत हैं। यह दायित्व प्लेटफ़ॉर्म के साथ आपकी साझेदारी समाप्त होने के बाद भी बना रहता है।"
          ]
        },
        {
          title: "7. दायित्व की सीमा और क्षतिपूर्ति",
          paragraphs: [
            "सीमा: प्लेटफ़ॉर्म 'जैसा है' और 'जैसा उपलब्ध है' के आधार पर प्रदान किया जाता है। Credlawn India Private Limited आपके प्लेटफ़ॉर्म के उपयोग के परिणामस्वरूप होने वाले किसी भी अप्रत्यक्ष, आकस्मिक या परिणामी नुकसान, जिसमें लाभ या डेटा की हानि शामिल है, के लिए उत्तरदायी नहीं होगा।",
            "क्षतिपूर्ति: आप कंपनी और उसके निदेशकों को इन शर्तों के उल्लंघन, लापरवाही, या ग्राहकों के प्रति गलत बयानी से उत्पन्न होने वाले किसी भी दावे, नुकसान, कानूनी शुल्क या क्षति से सुरक्षित रखने और क्षतिपूर्ति करने के लिए सहमत हैं।"
          ]
        },
        {
          title: "8. समाप्ति और निलंबन",
          paragraphs: [
            "हम बिना किसी सूचना के आपके खाते को तुरंत निलंबित या समाप्त करने का अधिकार सुरक्षित रखते हैं, यदि:",
            "क) आप इन शर्तों के किसी भी प्रावधान का उल्लंघन करते हैं।",
            "ख) आप धोखाधड़ी की गतिविधियों में शामिल होते हैं या जाली दस्तावेज जमा करते हैं।",
            "ग) आपके कार्यों को कंपनी की प्रतिष्ठा के लिए हानिकारक माना जाता है।",
            "समाप्ति पर, प्लेटफ़ॉर्म का उपयोग करने का आपका अधिकार समाप्त हो जाता है, और किसी भी लंबित कमीशन को फ्रीज या जब्त किया जा सकता है।"
          ]
        },
        {
          title: "9. शासी कानून और विवाद समाधान",
          paragraphs: [
            "ये शर्तें भारत के कानूनों के अनुसार शासित और समझी जाएंगी। इन शर्तों से उत्पन्न या उनके संबंध में होने वाले किसी भी विवाद को भोपाल, मध्य प्रदेश में स्थित न्यायालयों के विशेष अधिकार क्षेत्र के अधीन किया जाएगा।"
          ]
        },
        {
          title: "11. पक्षों का संबंध (Relationship of Parties)",
          paragraphs: [
            "Credlawn India Private Limited के साथ आपका संबंध एक स्वतंत्र ठेकेदार (Independent Contractor) का है। इन शर्तों में से किसी भी बात का अर्थ साझेदारी, संयुक्त उद्यम, नियोक्ता-कर्मचारी, या एजेंसी संबंध बनाना नहीं माना जाएगा। आपके पास कंपनी को किसी भी दायित्व के लिए बाध्य करने या खुद को आधिकारिक एजेंट या कर्मचारी के रूप में प्रस्तुत करने का कोई अधिकार नहीं है।"
          ]
        },
        {
          title: "12. संचार सहमति (Communication Consent)",
          paragraphs: [
            "प्लेटफ़ॉर्म पर पंजीकरण करके, आप खाता सत्यापन, लीड अपडेट, प्रशिक्षण सामग्री और प्रचार ऑफ़र के उद्देश्यों के लिए फोन कॉल, एसएमएस, आरसीएस (RCS), व्हाट्सएप और ईमेल के माध्यम से कंपनी द्वारा संपर्क किए जाने के लिए अपनी स्पष्ट सहमति प्रदान करते हैं। यह सहमति नेशनल डू नॉट कॉल (DNC) रजिस्ट्री पर किसी भी पंजीकरण से ऊपर मानी जाएगी।"
          ]
        },
        {
          title: "13. समझौते में संशोधन",
          paragraphs: [
            "कंपनी के पास किसी भी समय इन सेवा की शर्तों को संशोधित करने, संशोधित करने या अपडेट करने का अधिकार सुरक्षित है। कोई भी परिवर्तन प्लेटफ़ॉर्म पर पोस्ट करने के तुरंत बाद प्रभावी होगा। ऐसे परिवर्तनों के बाद प्लेटफ़ॉर्म का आपका निरंतर उपयोग संशोधित शर्तों की आपकी स्वीकृति माना जाएगा।"
          ]
        },
        {
          title: "14. हमसे संपर्क करें",
          paragraphs: [
            "इन शर्तों के संबंध में प्रश्नों के लिए या यदि आपको सहायता की आवश्यकता है, तो कृपया support@paisamilega.in पर हमसे संपर्क करें।"
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
            "पता: प्रथम तल, प्लॉट नंबर-22, जोन-2, एम.पी. नगर, भोपाल, मध्य प्रदेश - 462011, भारत",
            "ईमेल: support@paisamilega.in"
          ]
        }
      ]
    },
    saathi: {
      hero: {
        badge: "Paisa Milega साथी प्रोग्राम",
        title: "घर बैठे बनें डिजिटल फाइनेंशियल साथी।",
        hook: "बिना किसी निवेश के हर महीने ₹1,00,000 तक कमाएं।",
        subtext: "डिजिटल इंडिया क्रांति का हिस्सा बनें। अपने सर्कल को आर्थिक रूप से आगे बढ़ने में मदद करें और साथ ही बेहतरीन कमीशन भी कमाएं।",
        cta: "अभी साथी के रूप में जुड़ें",
      },
      winWin: {
        title: "मदद आपकी, तरक्की सबकी।",
        concept: "जरूरत तो सबको है, तो आपके जरिए क्यों नहीं?",
        content: "आज के समय में, हर किसी को क्रेडिट कार्ड या लोन की जरूरत होती है—चाहे वह नया फोन खरीदना हो, स्कूल की फीस भरनी हो, या व्यवसाय बढ़ाना हो। जब आप उन्हें सही बैंक ऑफर चुनने में मदद करते हैं, तो उन्हें विशेषज्ञ मार्गदर्शन का लाभ मिलता है, और आप एक पेशेवर कमीशन कमाते हैं। यह पूरी तरह से डिजिटल रूप से किया गया एक वास्तविक विन-विन (win-win) है!",
        points: [
          "उनके लिए सही सलाह",
          "आपके लिए शानदार कमीशन",
          "मजबूत आर्थिक समाज",
        ],
      },
      income: {
        title: "बड़ी कमाई की संभावना",
        subtext: "आपकी आय आपकी मेहनत पर निर्भर करती है। कोई ऊपरी सीमा नहीं।",
        cardTitle: "₹1,00,000 / महीना",
        cardDesc: "हर दिन केवल 1-2 सफल रेफरल के साथ, आप इस मुकाम तक आसानी से पहुँच सकते हैं।",
      },
      benefits: {
        title: "साथी क्यों बनें?",
        list: [
          {
            title: "जीरो इन्वेस्टमेंट",
            desc: "बिना एक रुपया खर्च किए अपना बिजनेस शुरू करें।",
          },
          {
            title: "100+ भरोसेमंद बैंक",
            desc: "HDFC, SBI, Axis और अन्य जैसे भारत के शीर्ष बैंकों के साथ पार्टनर बनें।",
          },
          {
            title: "अकादमी सपोर्ट",
            desc: "हम उत्पादों और ग्राहकों को खोजने के तरीके पर पूरी ट्रेनिंग प्रदान करते हैं।",
          },
          {
            title: "फ्लेक्सिबल टाइमिंग",
            desc: "जब चाहें काम करें। आप अपने खुद के बॉस हैं।",
          },
        ],
      },
      howItWorks: {
        title: "शुरू करने के 3 आसान चरण",
        steps: [
          {
            title: "जुड़ें और रजिस्टर करें",
            desc: "ऐप डाउनलोड करें और मिनटों में साथी के रूप में साइन अप करें।",
          },
          {
            title: "सुझाव दें और शेयर करें",
            desc: "व्हाट्सएप के माध्यम से अपने दोस्तों और परिवार के साथ बेहतरीन बैंक ऑफर्स शेयर करें।",
          },
          {
            title: "कमाएं और बढ़ें",
            desc: "हर सफलता पर अपना कमीशन सीधे अपने बैंक खाते में प्राप्त करें।",
          },
        ],
      },
      whoIsItFor: {
        title: "साथी कौन बन सकता है?",
        list: [
          {
            title: "छात्र (Students)",
            tag: "पॉकेट मनी",
            desc: "अपने खाली समय को पेशेवर आय में बदलें और फाइनेंस सीखें।",
          },
          {
            title: "दुकानदार",
            tag: "अतिरिक्त आय",
            desc: "अपने मौजूदा ग्राहकों को अतिरिक्त सेवाएं प्रदान करें और अधिक कमाएं।",
          },
          {
            title: "गृहिणियां (Housewives)",
            tag: "आत्मनिर्भरता",
            desc: "अपना घर संभालते हुए आर्थिक रूप से स्वतंत्र बनें।",
          },
          {
            title: "नौकरीपेशा लोग",
            tag: "साइड इनकम",
            desc: "अपनी नियमित नौकरी के साथ अतिरिक्त साइड इनकम कमाएं।",
          },
        ],
      },
    },
  }
};
