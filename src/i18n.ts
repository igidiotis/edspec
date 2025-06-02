import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "appTitle": "Future of AI in Education",
      "footer": "2025 Created by <1>Iosif Gidiotis</1>",
      "swedishVersion": "Access the Swedish version here",
      "continue": "Continue",
      "back": "Back",
      "and": "and",
      "consent.title": "Research Participation Consent",
      "consent.intro": "<span style=\"color:#1d4ed8\"><strong>Writing speculative stories helps us build alternative, (un)wanted education spaces or scenarios, offering insights that can inform present decisions and outlooks.</strong></span>",
      "consent.fullText": `<p>We would like to ask you to participate in a research project by writing a speculative story about the future of artificial intelligence (AI) in education. <br/>Kungliga Tekniska högskolan (KTH) is responsible for this project. The researcher carrying out the research is Iosif Gidiotis.</p>

<p>Your participation involves: Writing a short speculative story (minimum 80 words) using our digital tool. You'll first answer two questions about your occupation and subject field and then choose among future themes that interest you, before writing your story. In the end, you can choose to answer some feedback questions. This takes about 15–20 minutes.</p>

<h3 style=\"color:#1d4ed8\">What we collect</h3>
<ul>
  <li>Your story (stored without identifying information)</li>
  <li>Basic background info (occupation, subject field)</li>
  <li>Email address (optional, only if you want to participate in future research)</li>
</ul>

<p>We do not believe there are any negative consequences or risks with this data collection. You can choose to stop taking part at any time.</p>

<p>The project will collect and register your responses, which are anonymous. Your responses and results will be handled so that unauthorized persons cannot access them. The survey responses will be stored securely at Kungliga Tekniska högskolan for 10 years after the project ends.</p>

<p>You do not have the possibility to access your responses afterwards since the story collection is anonymous. The project will be reported in freely available scientific articles (open access) that you can access by contacting the principal researcher.</p>

<h3 style=\"color:#1d4ed8\">Your rights</h3>
<p>Your participation is voluntary and you can choose to stop participating at any time. If you choose not to participate or want to stop your participation, you do not need to explain why. If you want to stop your participation, you should not submit your story and responses.</p>

<p>Kungliga Tekniska högskolan is responsible for your personal data. If you choose to share you email with us in the (final) feedback step, according to the EU General Data Protection Regulation (GDPR), you have the right to access information about you that is processed in the project free of charge, and to have any errors corrected if necessary. You can also request that information about you be deleted and that the processing of your personal data be restricted. However, the right to deletion and restriction of processing of personal data does not apply if you agree to participate but do not share your email address (identifying information).</p>

<p>If you have questions about the data you provided, you should contact the principal researcher Iosif Gidiotis, Kungliga Tekniska högskolan, Brinellvägen 68, 114 28 Stockholm, email <a href="mailto:gidiotis@kth.se" style="color:#1d4ed8">gidiotis@kth.se</a>.</p>

<h3 style=\"color:#1d4ed8\">Data protection and complaints</h3>
<p>The Data Protection Officer can be reached at Kungliga Tekniska högskolan, Attn: Data Protection Officer, Brinellvägen 8, 100 44 Stockholm, phone 08-7908752, email <a href="mailto:dataskyddsombud@kth.se" style="color:#1d4ed8">dataskyddsombud@kth.se</a>.</p>

<p>If you are dissatisfied with how your personal data is processed, you have the right to file a complaint with the <a href="https://www.imy.se/en/" target="_blank" style="color:#1d4ed8">Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten)</a>.</p>

<h3 style=\"color:#1d4ed8\">Contact</h3>
<ul>
  <li><strong>Project Responsible (Researcher):</strong> <a href="mailto:gidiotis@kth.se" style="color:#1d4ed8">gidiotis@kth.se</a>, Brinellvägen 68, 114 28 Stockholm</li>
  <li><strong>Principal Supervisor of the research:</strong> <a href="mailto:stefanhr@kth.se" style="color:#1d4ed8">stefanhr@kth.se</a></li>
</ul>`,
      "consent.checkbox": "I have read and agree to participate in this research study. I understand how my data will be used.",
      "checkin.title": "Check-in",
      "checkin.intro": "Let's start with a quick check-in before we begin.",
      "checkin.background": "Background",
      "checkin.backgroundPlaceholder": "Select your background",
      "checkin.academicTeacher": "Academic teacher (e.g. lecturer, professor)",
      "checkin.k12Teacher": "K12 teacher",
      "checkin.researcher": "Researcher",
      "checkin.phdStudent": "PhD student (doctoral student)",
      "checkin.student": "Student",
      "checkin.other": "Other",
      "checkin.otherBackground": "Please specify your background",
      "checkin.discipline": "Subject discipline",
      "checkin.disciplinePlaceholder": "e.g. Education, engineering, mathematics",
      "checkin.country": "Country",
      "checkin.countryPlaceholder": "e.g. Sweden, United States",
      "cards.title": "Select Themes",
      "cards.intro": "What are the most important questions for you when it comes to the future of education? Select one or more themes that you are interested in and that will inspire your story about the future of education. Alternatively, you can just click 'Write Freely' to write your story without any overarching theme.",
      "cards.error": "Please select at least one theme",
      "writing.title": "Write Your Story",
      "writing.intro": "Inspired by {{inspiration}}, write a speculative story about the future of AI in education.",
      "writing.ownVision": "your own vision",
      "writing.placeholder": "In the year 2040, education has transformed in ways we once could only imagine...",
      "writing.wordCount": "Word count: {{count}}",
      "writing.minWords": "Min. recommended: 150 words",
      "writing.error": "Please write at least 50 words for your story.",
      "writing.submit": "Submit Story",
      "feedback.title": "Share Your Feedback",
      "feedback.intro": "Help us understand your perspective on the future of AI in education.",
      "feedback.interview": "I want to be further contacted to participate in short interviews or focus group discussions related to the topic of AI and education",
      "feedback.email": "Email Address",
      "feedback.emailNote": "Optional - Providing your email address will only be used for communications related to this research and will not undermine the anonymity of the data collected through the tool.",
      "feedback.storyMessage": "In one sentence: What message or insight do you think your story sends about the future of education? *",
      "feedback.aiViewsImpact": "How did writing a fictional scenario shape or shift your views about AI in education?",
      "feedback.futureVisionType": "Did your story reflect a utopian, dystopian, or hybrid vision of the future? Why do you think that is?",
      "feedback.storySurprises": "What surprised you about the story you created or the direction it took?",
      "feedback.realWorldApplications": "How might fictional scenarios like the one you created be used in real-world educational planning or policy-making?",
      "feedback.download": "Download Your Story",
      "feedback.submit": "Submit Feedback",
      "feedback.errorMessage": "Please provide a message or insight about your story.",
      "feedback.errorEmail": "Email is required if you want to participate in interviews.",
      "thankyou.title": "Thank You!",
      "thankyou.appreciation": "Your contribution to this research on the future of education is greatly appreciated. Your story and feedback will help us better understand perspectives on educational futures.",
      "thankyou.recorded": "Your responses have been recorded successfully.",
      "thankyou.nextTitle": "What happens next?",
      "thankyou.nextText": "The research team will analyze the collected stories and feedback to identify emerging themes and insights about desired futures for education.",
      "thankyou.startOver": "Start Over",
      "cards.selected": "Selected",
      "cards.selectCard": "Select card",
      "cards.wildcard.title": "Write Freely",
      "cards.wildcard.description": "Express your own vision for the future of AI in education.",
      "cards.technology.title": "Technology Integration",
      "cards.technology.description": "Imagine a future where AI has transformed how students learn and interact with educational content.",
      "cards.equity.title": "Educational Equity",
      "cards.equity.description": "Envision how AI could address and eliminate disparities in access and outcomes.",
      "cards.environment.title": "Environmental Education",
      "cards.environment.description": "Consider how AI could connect education to environmental stewardship and sustainability.",
      "cards.personalization.title": "Personalized Learning",
      "cards.personalization.description": "Adaptive learning systems that tailor educational experiences to individual student needs.",
      "cards.global.title": "Global Classrooms",
      "cards.global.description": "Imagine AI-enabled learning environments that transcend geographical boundaries.",
      "cards.skills.title": "Future Skills",
      "cards.skills.description": "Consider how AI could help develop skills for jobs and challenges that don't yet exist.",
      "cards.assessment.title": "Education & Assessment",
      "cards.assessment.description": "Tools and methods for evaluating student learning and AI-assisted evaluation processes.",
      "cards.community.title": "Community Learning",
      "cards.community.description": "Envision how AI could integrate education with local communities and opportunities.",
      "prompt.start.title": "Getting Started",
      "prompt.start.message": "Consider starting with a specific time period or setting for your future scenario.",
      "prompt.character.title": "Add Characters",
      "prompt.character.message": "Consider introducing a student, teacher, or other stakeholder experiencing this future.",
      "prompt.challenge.title": "Introduce a Challenge",
      "prompt.challenge.message": "What obstacles or tensions exist in this educational future?",
      "prompt.solution.title": "Explore Solutions",
      "prompt.solution.message": "How might stakeholders navigate or resolve these challenges?",
      "prompt.tech_detail.title": "Technology Details",
      "prompt.tech_detail.message": "What specific technologies are used in this future classroom?",
      "prompt.equity_detail.title": "Equity Considerations",
      "prompt.equity_detail.message": "How does this future address issues of access and opportunity?",
      "prompt.environment_detail.title": "Environmental Impact",
      "prompt.environment_detail.message": "How does education connect to sustainability in this future?",
      "prompt.skills_detail.title": "Future Skills",
      "prompt.skills_detail.message": "What specific skills are valued and taught in this future?",
      "prompt.reflection.title": "Wrap Up",
      "prompt.reflection.message": "Consider ending with a reflection on what this future means for education.",
      "cards.epistemology.title": "Knowledge & AI",
      "cards.epistemology.description": "Understanding how knowledge is constructed and validated in AI-infused learning environments.",
      "cards.bias.title": "Bias",
      "cards.bias.description": "Addressing algorithmic bias and ensuring fair representation across diverse student populations.",
      "cards.surveillance.title": "Surveillance",
      "cards.surveillance.description": "Managing privacy concerns and data monitoring in AI-powered educational systems.",
      "cards.blurredboundaries.title": "Blurred Boundaries",
      "cards.blurredboundaries.description": "Navigating the intersection between AI-generated and human-created content in education.",
      "cards.humanrelationships.title": "Human Relationships",
      "cards.humanrelationships.description": "Maintaining authentic interpersonal connections in increasingly digital learning spaces.",
      "cards.sustainability.title": "Sustainability",
      "cards.sustainability.description": "Long-term viability and environmental considerations of AI implementation in education.",
      "consent.scrollToConsent": "Scroll to the bottom to consent to using the tool and participate in the research project.",
      "helpButton.label": "Questions or problems?",
      "helpButton.learnMore": "Learn more",
      "helpButton.questions": "Questions or problems?"
    }
  },
  sv: {
    translation: {
      "appTitle": "AI och framtidens utbildning",
      "footer": "2025 Skapad av <1>Iosif Gidiotis</1>",
      "swedishVersion": "Gå till den svenska versionen här",
      "continue": "Fortsätt",
      "back": "Tillbaka",
      "and": "och",
      "consent.title": "Samtyckesblankett - Forskningsprojekt",
"consent.intro": "<span style=\"color:#1d4ed8\"><strong>Att skriva spekulativa berättelser hjälper oss att föreställa oss alternativa – önskade eller oönskade – utbildningsmiljöer eller scenarier. Det kan ge insikter som bidrar till att forma våra nuvarande beslut och perspektiv.</strong></span>",
"consent.fullText": `<p>Vi vill fråga dig om du vill delta i ett forskningsprojekt genom att skriva en kort spekulativ berättelse om artificiell intelligens (AI) inom framtidens utbildning.<br/>Forskningshuvudman för projektet är Kungliga Tekniska högskolan. Med forskningshuvudman menas den organisation som är ansvarig för projektet. Doktoranden som genomför forskningen är Iosif Gidiotis.</p>

<p>Ditt deltagande i projektet innebär: Att skriva en kort spekulativ berättelse (minimum 80 ord) med hjälp av vårt digitala verktyg. Du kommer först att svara på två frågor om din yrkesroll och ditt ämnesområde och sedan välja bland framtidsteman som intresserar dig, innan du skriver din berättelse. Till slut kan du välja att svara på några feedback-frågor. Detta tar ca 5-25 minuter.</p>

<h2 style=\"color:#1d4ed8\">Vad vi samlar in</h2>
<ul>
  <li>Din berättelse (lagras utan identifierande information)</li>
  <li>Grundläggande bakgrundsinformation (yrkesroll, ämnesområde)</li>
  <li>E-postadress (frivilligt, endast om du vill delta i framtida forskning)</li>
  <li>Svar på några feedback-frågor (frivilligt)</li>
</ul>

<p>Vi anser inte att det finns negativa följder eller risker med denna datainsamling. Du kan när som helst välja att avbryta deltagandet.</p>

<p>Projektet kommer att samla in och registrera dina svar som är anonyma. Dina svar och dina resultat kommer att behandlas så att inte obehöriga kan ta del av dem. Svaren kommer att lagras på ett säkert sätt vid Kungliga Tekniska högskolan under 10 år efter projektets avslut.</p>

<p>Du har inte möjlighet att ta del av dina svar i efterhand då berättelseinsamlingen är anonym. Projektet kommer att redovisas i fritt tillgängliga vetenskapliga artiklar (open access) som du har möjlighet att ta del av genom att kontakta projektansvarig.</p>

<h2 style=\"color:#1d4ed8\">Dina rättigheter</h2>
<p>Ditt deltagande är frivilligt och du kan när som helst välja att avbryta deltagandet. Om du väljer att inte delta eller vill avbryta ditt deltagande behöver du inte uppge varför. Om du vill avbryta ditt deltagande ska du inte skicka in din berättelse och dina svar.</p>

<p>Ansvarig för dina personuppgifter är Kungliga Tekniska högskolan. Om du delar med dig epost-addressen, enligt EU:s dataskyddsförordning har du rätt att kostnadsfritt få ta del av de uppgifter om dig som hanteras i projektet, och vid behov få eventuella fel rättade. Du kan också begära att uppgifter om dig raderas samt att behandlingen av dina personuppgifter begränsas. Rätten till radering och till begränsning av behandling av personuppgifter gäller dock inte när personliga uppgifterna inte delas i systemet (dvs. om du inte ger din epost adress).</p>

<p>Om du har frågor kring uppgifterna ska du kontakta huvudansvarig doktorand Iosif Gidiotis, Kungliga Tekniska högskolan, Brinellvägen 68, 114 28 Stockholm, e-post <a href="mailto:gidiotis@kth.se" style="color:#1d4ed8">gidiotis@kth.se</a>.</p>

<h2 style=\"color:#1d4ed8\">Dataskydd och klagomål</h2>
<p>Dataskyddsombud nås på Kungliga Tekniska högskolan, Att: Dataskyddsombud, Brinellvägen 8, 100 44 Stockholm, telefon 08-7908752, e-post <a href="mailto:dataskyddsombud@kth.se" style="color:#1d4ed8">dataskyddsombud@kth.se</a>.</p>

<p>Om du är missnöjd med hur dina personuppgifter behandlas har du rätt att lämna in klagomål till <a href="https://www.imy.se/" target="_blank" style="color:#1d4ed8">Integritetsskyddsmyndigheten</a>, som är tillsynsmyndighet.</p>

<h2 style=\"color:#1d4ed8\">Kontaktuppgifter</h2>
<ul>
  <li><strong>Projektansvarig (Doktorand): Iosif Gidiotis, KTH </strong> <a href="mailto:gidiotis@kth.se" style="color:#1d4ed8">gidiotis@kth.se</a>, Brinellvägen 68, 114 28 Stockholm</li>
  <li><strong>Huvudhandledare för forskning: Stefan Hrastinski, KTH </strong> <a href="mailto:stefanhr@kth.se" style="color:#1d4ed8">stefanhr@kth.se</a></li>
</ul>`,
      "consent.checkbox": "Jag har läst och samtycker till att delta i denna forskningsstudie. Jag förstår hur mina data kommer att användas.",
      "checkin.title": "Incheckning",
      "checkin.intro": "Vi börjar med en snabb incheckning innan vi sätter igång.",
      "checkin.background": "Bakgrund",
      "checkin.backgroundPlaceholder": "Välj din bakgrund",
      "checkin.academicTeacher": "Akademisk lärare (t.ex. lektor, professor)",
      "checkin.k12Teacher": "Grund- eller gymnasielärare",
      "checkin.researcher": "Forskare",
      "checkin.phdStudent": "Doktorand (PhD-student)",
      "checkin.student": "Student",
      "checkin.other": "Annat",
      "checkin.otherBackground": "Vänligen ange din bakgrund",
      "checkin.discipline": "Ämnesområde",
      "checkin.disciplinePlaceholder": "t.ex. utbildning, teknik, matematik",
      "checkin.country": "Land",
      "checkin.countryPlaceholder": "t.ex. Sverige, USA",
      "cards.title": "Välj teman",
      "cards.intro": "Vad är du mest intresserad av när det gäller framtidens utbildning? Välj ett eller flera teman som känns intressanta för dig och som kan ge inspiration till din berättelse om hur AI-integrerad utbildning kan se ut i framtiden. Alternativt kan du trycka på 'Skriv fritt' för att skriva din berättelse utan någon tema.",
      "cards.error": "Vänligen välj minst ett tema",
      "writing.title": "Skriv din berättelse",
      "writing.intro": "Inspirerad av {{inspiration}}, skriv en spekulativ berättelse om AI:s framtid inom utbildning.",
      "writing.ownVision": "din egen vision",
      "writing.placeholder": "År 2040 har utbildningen förändrats på sätt vi tidigare bara kunnat föreställa oss...",
      "writing.wordCount": "Antal ord: {{count}}",
      "writing.minWords": "Min. rekommenderat: 150 ord",
      "writing.error": "Skriv minst 50 ord i din berättelse.",
      "writing.submit": "Skicka berättelse",
      "feedback.title": "Dela din återkoppling",
      "feedback.intro": "Hjälp oss att förstå din syn på AI:s framtid inom utbildning.",
      "feedback.interview": "Jag vill gärna bli kontaktad för att delta i korta intervjuer eller fokusgrupper om AI och utbildning.",
      "feedback.email": "E-postadress",
      "feedback.emailNote": "Frivilligt - Din e-postadress används enbart för kommunikation som rör denna forskning och påverkar inte anonymiteten i de data som samlas in via verktyget.",
      "feedback.storyMessage": "Med en mening: Vilket budskap eller vilken insikt tycker du att din berättelse förmedlar om utbildningens framtid? *",
      "feedback.aiViewsImpact": "Hur upplevde du att skriva ett fiktivt scenario om AI i utbildning?",
      "feedback.futureVisionType": "Var din berättelse utopisk, dystopisk eller en blandning – och varför tror du att det blev så?",
      "feedback.storySurprises": "Vad överraskade dig i berättelsen du skapade, eller i den riktning den tog?",
      "feedback.realWorldApplications": "Hur tror du att fiktiva scenarier som det du skrev kan användas i verklig utbildningsplanering eller i arbete med policyutveckling?",
      "feedback.download": "Ladda ner din berättelse",
      "feedback.submit": "Skicka återkoppling",
      "feedback.errorMessage": "Vänligen ange ett budskap eller en insikt om din berättelse.",
      "feedback.errorEmail": "E-post krävs om du vill delta i intervjuer.",
      "thankyou.title": "Tack!",
      "thankyou.appreciation": "Tack för ditt värdefulla bidrag till vår forskning om utbildningens framtid. Din berättelse och återkoppling hjälper oss att få en djupare förståelse för olika perspektiv på hur utbildning kan utvecklas framöver.",
      "thankyou.recorded": "Dina svar har registrerats.",
      "thankyou.nextTitle": "Vad händer nu?",
      "thankyou.nextText": "Forskargruppen kommer att analysera de insamlade berättelserna och tillhörande återkoppling i syfte att identifiera återkommande teman och insikter rörande föreställningar om önskvärda framtider för utbildning.",
      "thankyou.startOver": "Börja om",
      "cards.selected": "Vald",
      "cards.selectCard": "Välj kort",
      "cards.wildcard.title": "Skriv fritt",
      "cards.wildcard.description": "Beskriv din egen vision om AI i framtidens utbildning.",
      "cards.technology.title": "Teknikintegration",
      "cards.technology.description": "Föreställ dig en framtid där AI har förändrat hur elever lär sig och interagerar med utbildningsinnehåll.",
      "cards.equity.title": "Utbildningsjämlikhet",
      "cards.equity.description": "Föreställ dig hur AI kan hantera och eliminera skillnader i tillgång och resultat.",
      "cards.environment.title": "Miljöutbildning",
      "cards.environment.description": "Fundera på hur AI kan koppla utbildning till miljöansvar och hållbarhet.",
      "cards.personalization.title": "Anpassning",
      "cards.personalization.description": "Adaptiva lärsystem som skräddarsyr utbildning baserat på individuella studentbehov.",
      "cards.global.title": "Globala klassrum",
      "cards.global.description": "Föreställ dig AI-möjliggjorda lärmiljöer som överskrider geografiska gränser.",
      "cards.skills.title": "Framtidens färdigheter",
      "cards.skills.description": "Fundera på hur AI kan hjälpa till att utveckla färdigheter för jobb och utmaningar som ännu inte finns.",
      "cards.assessment.title": "Utbildning & bedömning",
      "cards.assessment.description": "Verktyg och metoder för att bedöma studenters kunskap och AI-stöd för bedömning.",
      "cards.community.title": "Lärande i samhället",
      "cards.community.description": "Föreställ dig hur AI kan integrera utbildning med lokala samhällen och möjligheter.",
      "prompt.start.title": "Kom igång",
      "prompt.start.message": "Om du vill kan du börja att beskriva en tidsperiod eller miljö för ditt framtidsscenario.",
      "prompt.character.title": "Lägg till karaktärer",
      "prompt.character.message": "Om du vill kan du beskriva en student, lärare eller annan person som upplever denna framtid.",
      "prompt.challenge.title": "Introducera en utmaning",
      "prompt.challenge.message": "Vilka hinder eller utmaningar finns i denna utbildningsframtid?",
      "prompt.solution.title": "Utforska lösningar",
      "prompt.solution.message": "Hur kan dessa utmaningar hanteras eller lösas?",
      "prompt.tech_detail.title": "Teknik",
      "prompt.tech_detail.message": "Vilka specifika teknologier används i denna framtida utbildning?",
      "prompt.equity_detail.title": "Jämlikhetsaspekter",
      "prompt.equity_detail.message": "Hur hanterar denna framtid frågor om jämlikhet?",
      "prompt.environment_detail.title": "Miljöpåverkan",
      "prompt.environment_detail.message": "Hur kopplas utbildning till hållbarhet i denna framtid?",
      "prompt.skills_detail.title": "Framtidens färdigheter",
      "prompt.skills_detail.message": "Vilka  färdigheter värderas och lärs ut i denna framtid?",
      "prompt.reflection.title": "Avslutning",
      "prompt.reflection.message": "Om du vill kan du avsluta med en reflektion om vad denna framtid betyder för utbildning.",
      "cards.epistemology.title": "Kunskapssyn",
      "cards.epistemology.description": "Hur kunskap skapas och valideras i AI-förstärkta lärmiljöer.",
      "cards.bias.title": "Bias",
      "cards.bias.description": "Hantering av bias och rättvis representation för olika studentgrupper.",
      "cards.surveillance.title": "Övervakning",
      "cards.surveillance.description": "Hantering av integritetsfrågor och dataövervakning i AI-drivna utbildningssystem.",
      "cards.blurredboundaries.title": "Verklighetsuppfattning",
      "cards.blurredboundaries.description": "Utforska gränslandet mellan AI-genererat och innehåll skapat av människor inom utbildning.",
      "cards.humanrelationships.title": "Mänskliga relationer",
      "cards.humanrelationships.description": "Mänskliga kontakter i allt mer digitaliserade lärmiljöer.",
      "cards.sustainability.title": "Hållbarhet",
      "cards.sustainability.description": "Långsiktig hållbarhet och miljöhänsyn vid implementering av AI inom utbildning.",
      "consent.scrollToConsent": "Scrolla ner för att samtycka till att använda verktyget och delta i forskningsprojektet.",
      "helpButton.label": "Frågor eller problem?",
      "helpButton.learnMore": "Läs mer",
      "helpButton.questions": "Frågor eller problem?"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 