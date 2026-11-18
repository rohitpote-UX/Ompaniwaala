export interface TranslationSchema {
  nav: {
    brandFirst: string;
    brandSecond: string;
    company: string;
    capabilities: string;
    products: string;
    portal: string;
    orderNow: string;
    menu: string;
    close: string;
    dropdowns: {
      storyTitle: string;
      storyDesc: string;
      purityTitle: string;
      purityDesc: string;
      qaTitle: string;
      qaDesc: string;
      roTitle: string;
      roDesc: string;
      washTitle: string;
      washDesc: string;
      logisticsTitle: string;
      logisticsDesc: string;
      jarTitle: string;
      jarDesc: string;
      dispenserTitle: string;
      dispenserDesc: string;
      bottleTitle: string;
      bottleDesc: string;
    };
  };
  hero: {
    since: string;
    h1Line1: string;
    h1Line2: string;
    h1Line3Normal: string;
    h1Line3Italic: string;
    subline: string;
    cityView: string;
    purePour: string;
    cardTag: string;
    cardTitle: string;
    cardCta: string;
  };
  whatWeDo: {
    label: string;
    p1: string;
    accent1: string;
    p2: string;
    accent2: string;
    p3: string;
    accent3: string;
    badgePurity: string;
    badgePuritySub: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    learnProcess: string;
  };
  areas: {
    label: string;
    headingNormal: string;
    headingItalic: string;
    subline: string;
    viewAll: string;
    items: {
      name: string;
      locality: string;
      badge: string;
    }[];
  };
  keyFigures: {
    label: string;
    headingNormal: string;
    headingItalic: string;
    stats: {
      value: string;
      label: string;
      desc: string;
    }[];
  };
  featuredProducts: {
    label: string;
    headingNormal: string;
    headingItalic: string;
    products: {
      number: string;
      title: string;
      tagline: string;
      specs: string;
      price: string;
    }[];
    orderCta: string;
  };
  capabilities: {
    label: string;
    headingNormal: string;
    headingItalic: string;
    subline: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  about: {
    label: string;
    statement: string;
    statementItalic: string;
    desc: string;
    cta: string;
    statsAvailability: string;
    statsReviews: string;
  };
  ctaBanner: {
    tagline: string;
    headingNormal: string;
    headingItalic: string;
    subline: string;
    buttonText: string;
  };
  footer: {
    brandTag: string;
    hubTitle: string;
    companyCol: string;
    servicesCol: string;
    areasCol: string;
    legalCol: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<"en" | "mr", TranslationSchema> = {
  en: {
    nav: {
      brandFirst: "Ranjeet",
      brandSecond: "Enterprises",
      company: "Company",
      capabilities: "Capabilities",
      products: "Products",
      portal: "Portal",
      orderNow: "Order Now",
      menu: "Menu",
      close: "Close",
      dropdowns: {
        storyTitle: "About Ranjeet Enterprises",
        storyDesc: "Dedicated 20L water jar supply based in Aundh, Pune",
        purityTitle: "Clean Water Standards",
        purityDesc: "Hygienically handled and securely sealed 20L jars",
        qaTitle: "Google Verified Profile",
        qaDesc: "12 customer reviews with 4.6 rating in Pune",
        roTitle: "Quality Water Selection",
        roDesc: "Rigorous standards for clarity, taste & neutral balance",
        washTitle: "Clean & Inspected Jars",
        washDesc: "Multi-point container check and secure cap sealing",
        logisticsTitle: "Prompt Local Delivery",
        logisticsDesc: "Confirmed routes across Aundh, Baner & Khadki",
        jarTitle: "20L Drinking Water Jar",
        jarDesc: "Primary confirmed supply for homes & workplaces",
        dispenserTitle: "Bulk & Corporate Supply",
        dispenserDesc: "Scheduled multi-jar replenishment for offices",
        bottleTitle: "Custom Delivery Schedules",
        bottleDesc: "Flexible daily or alternate-day supply options",
      },
    },
    hero: {
      since: "Pune Water Supply",
      h1Line1: "Pure Hydration.",
      h1Line2: "Delivered with",
      h1Line3Normal: "proven",
      h1Line3Italic: "reliability",
      subline: "Reliable 20-litre drinking water jar delivery for homes, offices and businesses across our Pune service areas.",
      cityView: "City View",
      purePour: "Pure Pour",
      cardTag: "20L Water Jar Delivery",
      cardTitle: "Hygienic 20L Drinking Water Jars Delivered to Your Door",
      cardCta: "Order now",
    },
    whatWeDo: {
      label: "What We Do",
      p1: "From",
      accent1: "trusted",
      p2: "source to",
      accent2: "sealed",
      p3: "jars, we deliver 20L drinking water where families live, work &",
      accent3: "thrive.",
      badgePurity: "24-Hour Availability",
      badgePuritySub: "Aundh, Pune Hub",
      card1Title: "Clean & Sealed 20L Jars",
      card1Desc: "Hygienically handled and securely sealed 20-litre drinking water jars delivered with utmost care for your home or office.",
      card2Title: "Open 24 Hours Availability",
      card2Desc: "Listed as open 24 hours on Google Business Profile to support residences, shops, and commercial offices with dependable water replenishment.",
      card3Title: "Prompt Customer Service",
      card3Desc: "Direct doorstep distribution focused on Aundh, Baner, and Khadki with attentive customer service and reliable timing.",
      learnProcess: "Explore Our Service Workflow",
    },
    areas: {
      label: "Service Coverage",
      headingNormal: "Explore our",
      headingItalic: "delivery areas",
      subline: "Confirmed daily delivery routes across Aundh, Baner, and Khadki. Contact to confirm service in adjacent localities.",
      viewAll: "View confirmed delivery areas",
      items: [
        { name: "Aundh", locality: "DP Road, Shambhu Vihar & Society Hub", badge: "Primary Hub" },
        { name: "Baner", locality: "Baner Road & Residential Corridor", badge: "Confirmed Area" },
        { name: "Khadki", locality: "Cantonment & Residential Pockets", badge: "Confirmed Area" },
        { name: "Pashan & University Area", locality: "Adjacent Western Pune Corridors", badge: "Contact to Confirm" },
        { name: "Greater Pune", locality: "Corporate & Bulk Water Supply", badge: "Inquire for Route" },
      ],
    },
    keyFigures: {
      label: "Business Profile & Service",
      headingNormal: "Where verified facts reflect",
      headingItalic: "trust and dependable service",
      stats: [
        { value: "24/7", label: "Operating Availability", desc: "Listed as open 24 hours on Google Business Profile" },
        { value: "12", label: "Google Reviews", desc: "Verified customer feedback and recommendations in Pune" },
        { value: "4.6★", label: "Customer Rating", desc: "Rated on Google Business Profile for prompt, courteous service" },
        { value: "20L", label: "Dedicated Water Jars", desc: "Specialized in supplying standard hygienic 20-litre drinking water jars" },
      ],
    },
    featuredProducts: {
      label: "Our Offerings",
      headingNormal: "Confirmed",
      headingItalic: "supply services",
      products: [
        {
          number: "01",
          title: "20-Litre Drinking Water Jar",
          tagline: "Primary confirmed supply for homes, shops & workplaces.",
          specs: "Clean Inspected Container • Tamper-Evident Cap • Direct Doorstep Placement",
          price: "Inquire for Pricing",
        },
        {
          number: "02",
          title: "Bulk & Corporate Supply",
          tagline: "Scheduled volume replenishment for offices and businesses.",
          specs: "Multi-Jar Batch Supply • Recurring Morning Slots • Dedicated Local Coordination",
          price: "Inquire for Volume Rates",
        },
        {
          number: "03",
          title: "Custom Delivery Schedules",
          tagline: "Flexible recurring delivery options to match your consumption.",
          specs: "Daily or Alternate-Day Drops • Standalone Orders • Route Coverage in Aundh, Baner & Khadki",
          price: "Tailored to Needs",
        },
      ],
      orderCta: "Inquire for Delivery",
    },
    capabilities: {
      label: "Our Workflow",
      headingNormal: "Our dedicated",
      headingItalic: "service process",
      subline: "Focused on clean containers, verified water quality, and courteous doorstep delivery across our Pune routes.",
      steps: [
        { number: "01", title: "Quality Sourcing & Selection", desc: "Sourcing drinking water that adheres to strict standards of clarity, purity, and neutral mineral taste." },
        { number: "02", title: "Multi-Point Jar Inspection", desc: "Thorough inspection of container integrity, cleanliness, and cleanliness before filling." },
        { number: "03", title: "Secure Cap & Tamper Seal", desc: "Hermetic cap sealing to safeguard water purity from transport handling to final delivery." },
        { number: "04", title: "Prompt Doorstep Delivery", desc: "Direct distribution across Aundh, Baner, and Khadki straight to your doorstep, pantry, or reception." },
      ],
    },
    about: {
      label: "About Ranjeet Enterprises",
      statement: "We don't just supply water. We deliver reliability, clean jars, and dependable service across",
      statementItalic: "Pune.",
      desc: "Located on DP Road in Aundh, Ranjeet Enterprises is a dedicated 20-litre drinking water jar supplier in Pune. We are committed to providing clean water jars, prompt customer service, and reliable delivery schedules for residential homes, corporate offices, and local businesses in Aundh, Baner, and Khadki.",
      cta: "Learn About Our Service",
      statsAvailability: "Open 24 Hours",
      statsReviews: "Google Rating",
    },
    ctaBanner: {
      tagline: "Aundh, Pune Logistics Desk",
      headingNormal: "Need 20L water jars in Aundh, Baner or",
      headingItalic: "Khadki?",
      subline: "Connect with Ranjeet Enterprises for reliable 20-litre drinking water jar supply for your home or workplace.",
      buttonText: "Inquire for Delivery",
    },
    footer: {
      brandTag: "20 Litre Water Jar Supplier • Aundh, Pune",
      hubTitle: "Aundh Service Hub",
      companyCol: "Company",
      servicesCol: "Services",
      areasCol: "Service Areas",
      legalCol: "Legal",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Supply",
    },
  },

  mr: {
    nav: {
      brandFirst: "रणजीत",
      brandSecond: "एंटरप्रायझेस",
      company: "कंपनी",
      capabilities: "कार्यक्षमता",
      products: "उत्पादने",
      portal: "पोर्टल",
      orderNow: "आताच ऑर्डर करा",
      menu: "मेनू",
      close: "बंद करा",
      dropdowns: {
        storyTitle: "रणजीत एंटरप्रायझेसबद्दल",
        storyDesc: "औंध, पुणे येथील २० लिटर वॉटर जार सप्लायर",
        purityTitle: "स्वच्छ पाण्याची हमी",
        purityDesc: "स्वच्छ व सुरक्षित सीलबंद २० लिटर पाण्याचे जार",
        qaTitle: "गुगल व्हेरिफाइड प्रोफाइल",
        qaDesc: "१२ ग्राहक पुनरावलोकने आणि ४.६ स्टार रेटिंग",
        roTitle: "गुणवत्तापूर्ण पाणी पुरवठा",
        roDesc: "स्वच्छ, शुद्ध आणि हलके पिण्याचे पाणी",
        washTitle: "स्वच्छ जार तपासणी",
        washDesc: "प्रत्येक जारची काटेकोर तपासणी व सीलबंद झाकण",
        logisticsTitle: "स्थानिक जलद वितरण",
        logisticsDesc: "औंध, बाणेर व खडकी परिसरात नियमित सेवा",
        jarTitle: "२० लिटर पाण्याचा जार",
        jarDesc: "घरे आणि कार्यालयांसाठी प्राथमिक पुरवठा",
        dispenserTitle: "मोठ्या प्रमाणावर पुरवठा",
        dispenserDesc: "कार्यालये व संस्थांसाठी नियमित जार डिलिव्हरी",
        bottleTitle: "लवचिक डिलिव्हरी वेळापत्रक",
        bottleDesc: "दररोज किंवा आवश्यकतेनुसार थेट पुरवठा",
      },
    },
    hero: {
      since: "पुणे वॉटर जार सप्लायर",
      h1Line1: "शुद्ध पाणी.",
      h1Line2: "विश्वसनीय सेवेसह",
      h1Line3Normal: "थेट",
      h1Line3Italic: "घरोघरी",
      subline: "पुण्यातील घरे, कार्यालये आणि व्यवसायांसाठी २० लिटर पिण्याच्या पाण्याच्या जारची विश्वासार्ह व वेळेवर डिलिव्हरी.",
      cityView: "शहराचे दृश्य",
      purePour: "शुद्ध प्रवाह",
      cardTag: "२० लिटर वॉटर जार पुरवठा",
      cardTitle: "तुमच्या दारात स्वच्छ व शुद्ध २० लिटर पाण्याचे जार",
      cardCta: "आताच संपर्क करा",
    },
    whatWeDo: {
      label: "आमचे कार्य",
      p1: "विश्वसनीय",
      accent1: "स्रोतापासून",
      p2: "ते थेट",
      accent2: "सीलबंद",
      p3: "जारपर्यंत, आम्ही २०L पाणी पोहोचवतो जिथे कुटुंबे राहतात, काम करतात आणि",
      accent3: "आनंदाने जगतात.",
      badgePurity: "२४ तास उपलब्धता",
      badgePuritySub: "औंध, पुणे केंद्र",
      card1Title: "स्वच्छ आणि सीलबंद २०L जार",
      card1Desc: "घरे किंवा कार्यालयांसाठी अत्यंत काळजीपूर्वक हाताळलेले आणि सुरक्षित सील केलेले २० लिटर पिण्याच्या पाण्याचे जार.",
      card2Title: "२४ तास उपलब्ध सेवा",
      card2Desc: "गुगल बिझनेस प्रोफाइलवर २४ तास उपलब्ध म्हणून नोंदणीकृत, नियमित पाणी पुरवठ्यासाठी सतत तत्पर.",
      card3Title: "तत्पर ग्राहक सेवा",
      card3Desc: "औंध, बाणेर आणि खडकी परिसरावर विशेष लक्ष केंद्रित करून वेळेवर आणि विनम्र ग्राहक सेवेसह थेट वितरण.",
      learnProcess: "आमची कार्यपद्धती पहा",
    },
    areas: {
      label: "वितरण क्षेत्रे",
      headingNormal: "आमची प्रमुख",
      headingItalic: "वितरण क्षेत्रे पहा",
      subline: "औंध, बाणेर आणि खडकी येथे खात्रीशीर दैनंदिन डिलिव्हरी. इतर भागांसाठी कृपया संपर्क साधा.",
      viewAll: "सर्व पुष्टी केलेली क्षेत्रे पहा",
      items: [
        { name: "औंध", locality: "डीपी रोड, शंभू विहार व प्रमुख सोसायट्या", badge: "मुख्य केंद्र" },
        { name: "बाणेर", locality: "बाणेर रोड व निवासी परिसर", badge: "पुष्टी केलेले क्षेत्र" },
        { name: "खडकी", locality: "कॅन्टोन्मेंट व निवासी भाग", badge: "पुष्टी केलेले क्षेत्र" },
        { name: "पाषाण व विद्यापीठ परिसर", locality: "लगतची निवासी क्षेत्रे", badge: "खात्री करण्यासाठी संपर्क करा" },
        { name: "इतर पुणे भाग", locality: "कॉर्पोरेट व मोठ्या प्रमाणातील ऑर्डर्स", badge: "चौकशी करा" },
      ],
    },
    keyFigures: {
      label: "व्यवसाय माहिती व सेवा",
      headingNormal: "जिथे खरी माहिती दर्शवते",
      headingItalic: "विश्वास आणि तत्पर सेवा",
      stats: [
        { value: "२४/७", label: "कामाची वेळ", desc: "गुगल बिझनेस प्रोफाइलवर २४ तास उपलब्ध म्हणून नोंदणीकृत" },
        { value: "१२", label: "गुगल रिव्ह्यू", desc: "पुण्यातील स्थानिक ग्राहकांचा विश्वास व प्रत्यक्ष अभिप्राय" },
        { value: "४.६★", label: "गुगल रेटिंग", desc: "स्वच्छ जार आणि तत्पर सेवेसाठी गुगलवर ४.६ स्टार रेटिंग" },
        { value: "२०L", label: "पाण्याचे जार", desc: "दर्जेदार व स्वच्छ २० लिटर पाण्याचे जार पुरवण्यात विशेष प्राविण्य" },
      ],
    },
    featuredProducts: {
      label: "आमच्या सेवा",
      headingNormal: "पुष्टी केलेल्या",
      headingItalic: "पाणी पुरवठा सेवा",
      products: [
        {
          number: "०१",
          title: "२० लिटर पिण्याचे पाण्याचे जार",
          tagline: "घरे, दुकाने आणि कार्यालयांसाठी मुख्य दैनंदिन पाणी पुरवठा पर्याय.",
          specs: "तपासलेले स्वच्छ जार • सुरक्षित सीलबंद कॅप • थेट दारात डिलिव्हरी",
          price: "चौकशी करा",
        },
        {
          number: "०२",
          title: "मोठ्या प्रमाणावर व कॉर्पोरेट पुरवठा",
          tagline: "ऑफिस आणि व्यावसायिक आस्थापनांसाठी नियमित जार पुरवठा.",
          specs: "एकापेक्षा जास्त जार • नियमित सकाळची वेळ • समर्पित स्थानिक समन्वय",
          price: "दर जाणून घेण्यासाठी संपर्क करा",
        },
        {
          number: "०३",
          title: "लवचिक डिलिव्हरी वेळापत्रक",
          tagline: "तुमच्या गरजेनुसार नियमित किंवा मागणीनुसार पाणी पुरवठा.",
          specs: "दररोज किंवा एका दिवसाआड • स्वतंत्र ऑर्डर्स • औंध, बाणेर व खडकीत सेवा",
          price: "गरजेनुसार सेवा",
        },
      ],
      orderCta: "डिलिव्हरीसाठी संपर्क करा",
    },
    capabilities: {
      label: "आमची कार्यपद्धती",
      headingNormal: "विश्वास आणि",
      headingItalic: "दर्जेदार सेवा प्रक्रिया",
      subline: "स्वच्छ जार, दर्जेदार पाणी आणि ग्राहकाभिमुख डिलिव्हरीवर आधारित आमची कार्यपद्धती.",
      steps: [
        { number: "०१", title: "दर्जेदार पाण्याची निवड", desc: "स्वच्छता, शुद्धता आणि योग्य चवीच्या निकषांची पूर्तता करणाऱ्या पिण्याच्या पाण्याची खात्री." },
        { number: "०२", title: "जार तपासणी व स्वच्छता", desc: "भरण्यापूर्वी प्रत्येक २० लिटर जारची स्वच्छता आणि सुरक्षिततेची कसून तपासणी." },
        { number: "०३", title: "सुरक्षित सीलबंद झाकण", desc: "वाहतुकीदरम्यान पाणी सुरक्षित राहण्यासाठी मजबूत व टॅम्पर-प्रूफ सीलिंग." },
        { number: "०४", title: "थेट घरपोच डिलिव्हरी", desc: "औंध, बाणेर आणि खडकी परिसरातील ग्राहकांच्या घरापर्यंत व कार्यालयापर्यंत थेट वितरण." },
      ],
    },
    about: {
      label: "रणजीत एंटरप्रायझेसबद्दल",
      statement: "आम्ही फक्त पाणी पुरवत नाही, तर विश्वास, स्वच्छ जार आणि दर्जेदार सेवा देतो",
      statementItalic: "पुण्यात.",
      desc: "औंध येथील डीपी रोडवर स्थित, रणजीत एंटरप्रायझेस हा पुण्यातील एक विश्वासार्ह २० लिटर पाण्याचा जार पुरवठादार आहे. औंध, बाणेर आणि खडकी परिसरातील घरे, सोसायट्या आणि व्यावसायिक कार्यालयांना स्वच्छ जार, वेळेवर डिलिव्हरी आणि तत्पर सेवा देणे हे आमचे ध्येय आहे.",
      cta: "आमच्या सेवेबद्दल अधिक जाणून घ्या",
      statsAvailability: "२४ तास सेवा",
      statsReviews: "गुगल रेटिंग",
    },
    ctaBanner: {
      tagline: "औंध, पुणे वितरण डेस्क",
      headingNormal: "औंध, बाणेर किंवा खडकीमध्ये २०L पाण्याचे जार",
      headingItalic: "हवे आहेत का?",
      subline: "तुमच्या घरासाठी किंवा कार्यालयासाठी विश्वासार्ह २० लिटर पाण्याच्या जारसाठी आजच रणजीत एंटरप्रायझेसशी संपर्क साधा.",
      buttonText: "डिलिव्हरीसाठी संपर्क करा",
    },
    footer: {
      brandTag: "२० लिटर वॉटर जार सप्लायर • औंध, पुणे",
      hubTitle: "औंध सेवा केंद्र",
      companyCol: "कंपनी",
      servicesCol: "सेवा",
      areasCol: "वितरण क्षेत्रे",
      legalCol: "कायदेशीर",
      rights: "सर्व हक्क राखीव.",
      privacy: "गोपनीयता धोरण",
      terms: "नियम व अटी",
    },
  },
};
