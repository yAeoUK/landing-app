export const landingConfig = {
  // App Information
  appName: "FitTracker Pro",
  tagline: {
    en: "Transform Your Fitness Journey",
    ar: "حوّل رحلة لياقتك البدنية",
  },
  description: {
    en: "The ultimate fitness companion that helps you track workouts, monitor progress, and achieve your health goals with personalized insights and motivation.",
    ar: "الرفيق المثالي للياقة البدنية الذي يساعدك على تتبع التمارين ومراقبة التقدم وتحقيق أهدافك الصحية من خلال رؤى ودوافع شخصية.",
  },

  // Branding
  primaryColor: "#6366f1", // Indigo
  secondaryColor: "#8b5cf6", // Purple
  accentColor: "#06b6d4", // Cyan

  // Hero Section
  heroTitle: {
    en: "Your Personal Fitness Revolution Starts Here",
    ar: "ثورة اللياقة البدنية الشخصية تبدأ من هنا",
  },
  heroSubtitle: {
    en: "Join thousands of users who have transformed their health with our intelligent fitness tracking and personalized coaching.",
    ar: "انضم إلى آلاف المستخدمين الذين حولوا صحتهم من خلال تتبع اللياقة البدنية الذكي والتدريب الشخصي.",
  },
  heroImage: "Fitness tracking app interface showing workout progress",

  // Features
  features: {
    en: [
      {
        title: "Smart Workout Tracking",
        description: "Automatically detect and log your exercises with AI-powered recognition technology.",
        icon: "Activity",
      },
      {
        title: "Personalized Plans",
        description: "Get custom workout and nutrition plans tailored to your goals and fitness level.",
        icon: "Target",
      },
      {
        title: "Progress Analytics",
        description: "Visualize your fitness journey with detailed analytics and achievement milestones.",
        icon: "BarChart3",
      },
      {
        title: "Community Support",
        description: "Connect with like-minded fitness enthusiasts and share your achievements.",
        icon: "Users",
      },
      {
        title: "Offline Mode",
        description: "Continue your workouts even without internet connection with offline sync.",
        icon: "Wifi",
      },
      {
        title: "Wearable Integration",
        description: "Seamlessly sync with Apple Watch, Fitbit, and other popular fitness devices.",
        icon: "Watch",
      },
    ],
    ar: [
      {
        title: "تتبع التمارين الذكي",
        description: "اكتشف وسجل تمارينك تلقائياً باستخدام تقنية التعرف المدعومة بالذكاء الاصطناعي.",
        icon: "Activity",
      },
      {
        title: "خطط شخصية",
        description: "احصل على خطط تمارين وتغذية مخصصة تناسب أهدافك ومستوى لياقتك البدنية.",
        icon: "Target",
      },
      {
        title: "تحليلات التقدم",
        description: "تصور رحلة لياقتك البدنية من خلال التحليلات التفصيلية ومعالم الإنجاز.",
        icon: "BarChart3",
      },
      {
        title: "دعم المجتمع",
        description: "تواصل مع عشاق اللياقة البدنية المتشابهين في التفكير وشارك إنجازاتك.",
        icon: "Users",
      },
      {
        title: "وضع عدم الاتصال",
        description: "واصل تمارينك حتى بدون اتصال بالإنترنت مع المزامنة غير المتصلة.",
        icon: "Wifi",
      },
      {
        title: "تكامل الأجهزة القابلة للارتداء",
        description: "تزامن بسلاسة مع Apple Watch وFitbit وأجهزة اللياقة البدنية الشائعة الأخرى.",
        icon: "Watch",
      },
    ],
  },

  // Navigation
  navigation: {
    en: {
      features: "Features",
      reviews: "Reviews",
      pricing: "Pricing",
      team: "Team",
      download: "Download App",
    },
    ar: {
      features: "المميزات",
      reviews: "التقييمات",
      pricing: "الأسعار",
      team: "الفريق",
      download: "تحميل التطبيق",
    },
  },

  // Testimonials
  testimonials: {
    en: [
      {
        name: "Sarah Johnson",
        role: "Fitness Enthusiast",
        content: "This app completely changed how I approach fitness. The personalized plans are incredible!",
        avatar: "Professional headshot of a smiling woman in workout attire",
        rating: 5,
      },
      {
        name: "Mike Chen",
        role: "Personal Trainer",
        content: "I recommend this to all my clients. The tracking features are unmatched in the industry.",
        avatar: "Professional headshot of a male personal trainer",
        rating: 5,
      },
      {
        name: "Emily Davis",
        role: "Busy Professional",
        content: "Perfect for my hectic schedule. Quick workouts that actually show results!",
        avatar: "Professional headshot of a businesswoman in professional attire",
        rating: 5,
      },
    ],
    ar: [
      {
        name: "سارة جونسون",
        role: "عاشقة اللياقة البدنية",
        content: "هذا التطبيق غيّر تماماً طريقة تعاملي مع اللياقة البدنية. الخطط الشخصية رائعة!",
        avatar: "Professional headshot of a smiling woman in workout attire",
        rating: 5,
      },
      {
        name: "مايك تشين",
        role: "مدرب شخصي",
        content: "أنصح بهذا التطبيق لجميع عملائي. ميزات التتبع لا مثيل لها في الصناعة.",
        avatar: "Professional headshot of a male personal trainer",
        rating: 5,
      },
      {
        name: "إيميلي ديفيس",
        role: "محترفة مشغولة",
        content: "مثالي لجدولي المزدحم. تمارين سريعة تظهر نتائج حقيقية!",
        avatar: "Professional headshot of a businesswoman in professional attire",
        rating: 5,
      },
    ],
  },

  // Pricing
  pricing: {
    en: [
      {
        name: "Free",
        price: "$0",
        period: "forever",
        features: ["Basic workout tracking", "Limited exercise library", "Basic progress reports", "Community access"],
        popular: false,
      },
      {
        name: "Pro",
        price: "$9.99",
        period: "per month",
        features: [
          "Unlimited workout tracking",
          "Complete exercise library",
          "Advanced analytics",
          "Personalized meal plans",
          "Priority support",
          "Wearable integration",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "$19.99",
        period: "per month",
        features: [
          "Everything in Pro",
          "1-on-1 coaching sessions",
          "Custom workout creation",
          "Advanced nutrition tracking",
          "Early access to features",
          "Exclusive community",
        ],
        popular: false,
      },
    ],
    ar: [
      {
        name: "مجاني",
        price: "$0",
        period: "إلى الأبد",
        features: ["تتبع التمارين الأساسي", "مكتبة تمارين محدودة", "تقارير تقدم أساسية", "الوصول للمجتمع"],
        popular: false,
      },
      {
        name: "احترافي",
        price: "$9.99",
        period: "شهرياً",
        features: [
          "تتبع تمارين غير محدود",
          "مكتبة تمارين كاملة",
          "تحليلات متقدمة",
          "خطط وجبات شخصية",
          "دعم أولوية",
          "تكامل الأجهزة القابلة للارتداء",
        ],
        popular: true,
      },
      {
        name: "مميز",
        price: "$19.99",
        period: "شهرياً",
        features: [
          "كل شيء في الاحترافي",
          "جلسات تدريب فردية",
          "إنشاء تمارين مخصصة",
          "تتبع تغذية متقدم",
          "وصول مبكر للميزات",
          "مجتمع حصري",
        ],
        popular: false,
      },
    ],
  },

  // FAQ
  faqs: {
    en: [
      {
        question: "Is there a free version available?",
        answer:
          "Yes! We offer a free version with basic tracking features. You can upgrade anytime to unlock premium features.",
      },
      {
        question: "Can I sync with my existing fitness devices?",
        answer: "We support integration with Apple Watch, Fitbit, Garmin, and most popular fitness wearables.",
      },
      {
        question: "Is my data secure and private?",
        answer:
          "Your privacy is our priority. All data is encrypted and we never share personal information with third parties.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Yes, you can cancel your subscription at any time. You'll continue to have access to premium features until your current billing period ends.",
      },
      {
        question: "Do you offer workout plans for beginners?",
        answer:
          "Definitely! Our AI creates personalized plans for all fitness levels, from complete beginners to advanced athletes.",
      },
    ],
    ar: [
      {
        question: "هل يوجد إصدار مجاني متاح؟",
        answer: "نعم! نقدم إصداراً مجانياً بميزات التتبع الأساسية. يمكنك الترقية في أي وقت لفتح الميزات المميزة.",
      },
      {
        question: "هل يمكنني المزامنة مع أجهزة اللياقة البدنية الموجودة لدي؟",
        answer: "ندعم التكامل مع Apple Watch وFitbit وGarmin ومعظم الأجهزة القابلة للارتداء الشائعة.",
      },
      {
        question: "هل بياناتي آمنة وخاصة؟",
        answer: "خصوصيتك هي أولويتنا. جميع البيانات مشفرة ولا نشارك المعلومات الشخصية مع أطراف ثالثة أبداً.",
      },
      {
        question: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
        answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت. ستستمر في الوصول للميزات المميزة حتى انتهاء فترة الفوترة الحالية.",
      },
      {
        question: "هل تقدمون خطط تمارين للمبتدئين؟",
        answer:
          "بالتأكيد! ذكاؤنا الاصطناعي ينشئ خططاً شخصية لجميع مستويات اللياقة، من المبتدئين الكاملين إلى الرياضيين المتقدمين.",
      },
    ],
  },

  // Team
  team: {
    en: [
      {
        name: "Alex Thompson",
        role: "CEO & Founder",
        bio: "Former Olympic trainer with 15 years of experience in fitness technology.",
        image: "Professional headshot of a confident CEO in business attire",
        social: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        name: "Dr. Lisa Rodriguez",
        role: "Chief Medical Officer",
        bio: "Sports medicine specialist and nutrition expert with PhD in Exercise Science.",
        image: "Professional headshot of a medical professional in white coat",
        social: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        name: "David Park",
        role: "Head of Engineering",
        bio: "Tech veteran with expertise in AI and mobile app development at scale.",
        image: "Professional headshot of a tech professional in casual attire",
        social: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        name: "Maria Santos",
        role: "Head of Design",
        bio: "Award-winning UX designer focused on creating intuitive fitness experiences.",
        image: "Professional headshot of a creative professional with modern styling",
        social: {
          linkedin: "#",
          dribbble: "#",
        },
      },
    ],
    ar: [
      {
        name: "أليكس تومسون",
        role: "الرئيس التنفيذي والمؤسس",
        bio: "مدرب أولمبي سابق مع 15 عاماً من الخبرة في تكنولوجيا اللياقة البدنية.",
        image: "Professional headshot of a confident CEO in business attire",
        social: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        name: "د. ليزا رودريغيز",
        role: "كبيرة المسؤولين الطبيين",
        bio: "أخصائية طب رياضي وخبيرة تغذية حاصلة على دكتوراه في علوم التمرين.",
        image: "Professional headshot of a medical professional in white coat",
        social: {
          linkedin: "#",
          twitter: "#",
        },
      },
      {
        name: "ديفيد بارك",
        role: "رئيس الهندسة",
        bio: "خبير تقني مع خبرة في الذكاء الاصطناعي وتطوير التطبيقات المحمولة على نطاق واسع.",
        image: "Professional headshot of a tech professional in casual attire",
        social: {
          linkedin: "#",
          github: "#",
        },
      },
      {
        name: "ماريا سانتوس",
        role: "رئيسة التصميم",
        bio: "مصممة تجربة مستخدم حائزة على جوائز تركز على إنشاء تجارب لياقة بدنية بديهية.",
        image: "Professional headshot of a creative professional with modern styling",
        social: {
          linkedin: "#",
          dribbble: "#",
        },
      },
    ],
  },

  // Contact & Social
  contact: {
    email: "hello@fittrackerpro.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fitness Street, Health City, HC 12345",
  },

  social: {
    twitter: "https://twitter.com/fittrackerpro",
    facebook: "https://facebook.com/fittrackerpro",
    instagram: "https://instagram.com/fittrackerpro",
    linkedin: "https://linkedin.com/company/fittrackerpro",
  },

  // App Store Links - Real store links
  appStore: {
    ios: "https://apps.apple.com/app/apple-store/id1234567890",
    android: "https://play.google.com/store/apps/details?id=com.fittrackerpro.app",
  },

  // Section Titles
  sectionTitles: {
    en: {
      features: "Powerful Features for Your Fitness Journey",
      featuresSubtitle: "Everything you need to track, improve, and maintain your fitness goals in one beautiful app.",
      testimonials: "What Our Users Say",
      testimonialsSubtitle:
        "Join thousands of satisfied users who have transformed their fitness journey with our app.",
      pricing: "Choose Your Plan",
      pricingSubtitle: "Start free and upgrade as you grow. All plans include our core features.",
      faq: "Frequently Asked Questions",
      faqSubtitle:
        "Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.",
      team: "Meet Our Team",
      teamSubtitle: "Our passionate team of experts is dedicated to helping you achieve your fitness goals.",
      contact: "Contact Us",
      quickLinks: "Quick Links",
      mostPopular: "Most Popular",
      getStarted: "Get Started",
      startFreeTrial: "Start Free Trial",
      downloadIOS: "Download for iOS",
      downloadAndroid: "Download for Android",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      allRightsReserved: "All rights reserved",
    },
    ar: {
      features: "ميزات قوية لرحلة لياقتك البدنية",
      featuresSubtitle: "كل ما تحتاجه لتتبع وتحسين والحفاظ على أهداف لياقتك البدنية في تطبيق جميل واحد.",
      testimonials: "ماذا يقول مستخدمونا",
      testimonialsSubtitle: "انضم إلى آلاف المستخدمين الراضين الذين حولوا رحلة لياقتهم البدنية مع تطبيقنا.",
      pricing: "اختر خطتك",
      pricingSubtitle: "ابدأ مجاناً وقم بالترقية مع نموك. جميع الخطط تشمل ميزاتنا الأساسية.",
      faq: "الأسئلة الشائعة",
      faqSubtitle: "لديك أسئلة؟ لدينا إجابات. إذا لم تجد ما تبحث عنه، لا تتردد في الاتصال بنا.",
      team: "تعرف على فريقنا",
      teamSubtitle: "فريقنا المتحمس من الخبراء مكرس لمساعدتك في تحقيق أهداف لياقتك البدنية.",
      contact: "اتصل بنا",
      quickLinks: "روابط سريعة",
      mostPopular: "الأكثر شعبية",
      getStarted: "ابدأ الآن",
      startFreeTrial: "ابدأ تجربة مجانية",
      downloadIOS: "تحميل لنظام iOS",
      downloadAndroid: "تحميل لنظام Android",
      privacyPolicy: "سياسة الخصوصية",
      termsOfService: "شروط الخدمة",
      allRightsReserved: "جميع الحقوق محفوظة",
    },
  },
}
