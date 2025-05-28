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
      "consent.fullText": `<p>The purpose of this research project is to examine the potential of using speculative storywriting to explore the long-term impact of artificial intelligence (AI) on future education contexts. You are invited to participate by contributing your own speculative story. Your participation will help us better understand various visions of future learning environments shaped by AI.</p>

<h3 style=\"color:#1d4ed8\">Project Specifications</h3>
<p>As part of this project, you will use a digital scenario writing tool. Upon agreeing to participate, you will be prompted to answer two short questions about your background (teacher, student, researcher, other) and your subject field. Then, you will be presented with 8 themes that have been identified as relevant for the future of AI in education in previous research. You can choose some of the themes based on what interests you or the option to 'write freely'. The choice of themes is only indicative of your interests and not otherwise binding for the scenario writing. After that, you will be prompted to start writing your scenario. The tool has a minimum amount of 80 words (recommended minimum: 150 words) before it lets you submit your story. You are free to exceed that limit if you want. During the process of writing, helpful questions or prompts will appear to inspire you - you are free to follow them or reject them. After completing your story, you are asked to submit your email address if you agree to participate in further research regarding the future of AI in education (voluntary) and to answer some questions that will help us further analyse your story.</p>
<p>In the end, you have the option to download your story on your device before you submit. Only after clicking the final 'submit' button will your story and your data reach us - your information is not otherwise saved on our research database during the process of navigating the tool.</p>

<h3 style=\"color:#1d4ed8\">Information Collection</h3>
<ul><li><strong>Written story:</strong> The story you create is stored separately and will not be connected to any identifying personal information.</li><li><strong>Email address (optional):</strong> Only if you choose to provide it.</li><li><strong>Background, subject field:</strong> General demographic information that helps us gauge the audience using the tool.</li></ul>
<p>The submitted stories and your feedback will be analyzed as part of the research project. Portions of these stories may also be cited or discussed in research publications and presentations, or used in subsequent focus groups or workshop discussions. However, no identifying information will be included in such discussions.</p>

<h3 style=\"color:#1d4ed8\">Voluntary Participation and Data Protection</h3>
<p>Your participation in this study is completely voluntary. You may discontinue your participation at any point without providing a reason. Only authorized research team members will have access to data submitted through this project. No data will be shared beyond the immediate research team (see below).<br/>We process your personal data on the basis of your consent, in accordance with Article 6(1)(a) of the <a href=\"https://gdpr-info.eu/art-6-gdpr/\" style=\"color:#1d4ed8\" target=\"_blank\">GDPR</a>, and (if applicable) for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes under Article 9(2)(j).</p>
<p><a href=\"https://www.kth.se/\" style=\"color:#1d4ed8\" target=\"_blank\">Kungliga Tekniska högskolan (KTH)</a> in Stockholm, Sweden, is the entity responsible for your personal information. When the project concludes, the data collected and generated within the project will be securely stored for archival purposes for at least 5 years.</p>

<h3 style=\"color:#1d4ed8\">Concerning Your Rights to Your Data</h3>
<p>In line with EU data protection regulations (<a href=\"https://gdpr-info.eu/\" style=\"color:#1d4ed8\" target=\"_blank\">GDPR</a>) and relevant national legislation, you have the right to:</p>
<ul><li>Withdraw your consent without affecting the lawfulness of data processing already carried out before withdrawal.</li><li>Request access to your personal data.</li><li>Have your personal data corrected.</li><li>Have your personal data deleted.</li><li>Have the processing of your personal data restricted.</li></ul>
<p>Please note these rights can be limited under certain circumstances, such as confidentiality requirements or archival regulations.</p>

<h3 style=\"color:#1d4ed8\">Data Protection and Complaints</h3>
<p>If you have questions about how your data is handled or wish to exercise any of your data protection rights, you may contact:<br/><strong>KTH Data Protection Officer (DPO):</strong> <a href=\"mailto:dataskyddsombud@kth.se\" style=\"color:#1d4ed8\">dataskyddsombud@kth.se</a><br/>You also have the right to lodge a complaint with the <a href=\"https://www.imy.se/en/\" style=\"color:#1d4ed8\" target=\"_blank\">Swedish Privacy Protection Agency (imy.se)</a>.</p>

<h3 style=\"color:#1d4ed8\">Project Responsibility and Contact Information</h3>
<p><strong>Project Responsible (Researcher):</strong> <a href=\"mailto:gidiotis@kth.se\" style=\"color:#1d4ed8\">gidiotis@kth.se</a><br/><strong>Principal Research Supervisor:</strong> <a href=\"mailto:stefanhr@kth.se\" style=\"color:#1d4ed8\">stefanhr@kth.se</a><br/><strong>Mailing Address:</strong> BRINELLVÄGEN 68, 10044 STOCKHOLM, SWEDEN</p>
<p><em>Note: Should you wish, you may request a summary of the study's findings once the research is completed by contacting the Project Responsible.</em></p>`,
      "consent.checkbox": "I have read and agree to participate in this research study. I understand how my data will be used.",
      "checkin.title": "Check-in",
      "checkin.intro": "Let's start with a quick check-in before we begin.",
      "checkin.background": "Background",
      "checkin.backgroundPlaceholder": "Select your background",
      "checkin.academicTeacher": "Academic teacher (e.g. lecturer, professor)",
      "checkin.k12Teacher": "K12 teacher",
      "checkin.researcher": "Researcher",
      "checkin.student": "Student",
      "checkin.other": "Other",
      "checkin.otherBackground": "Please specify your background",
      "checkin.discipline": "Subject discipline",
      "checkin.disciplinePlaceholder": "e.g. Education, engineering, mathematics",
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
      "cards.epistemology.title": "Epistemology",
      "cards.epistemology.description": "Understanding how knowledge is constructed and validated in AI-enhanced learning environments.",
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
"consent.fullText": `<p>Vi vill fråga dig om du vill delta i ett forskningsprojekt genom att skriva en spekulativ berättelse om artificiell intelligens (AI) inom framtidens utbildning.<br/>Forskningshuvudman för projektet är Kungliga Tekniska högskolan. Med forskningshuvudman menas den organisation som är ansvarig för projektet. Forskaren som genomför forskningen är Iosif Gidiotis.</p>

<p>Ditt deltagande i projektet innebär: Att skriva en kort spekulativ berättelse (minimum 80 ord) med hjälp av vårt digitala verktyg. Du kommer först att svara på två frågor om din yrkesroll och ditt ämnesområde och sedan välja bland framtidsteman som intresserar dig, innan du skriver din berättelse. Till slut kan du välja att svara på några feedback-frågor. Detta tar ca 15–20 minuter.</p>

<h2 style=\"color:#1d4ed8\">Vad vi samlar in</h2>
<ul>
  <li>Din berättelse (lagras utan identifierande information)</li>
  <li>Grundläggande bakgrundsinformation (yrkesroll, ämnesområde)</li>
  <li>E-postadress (frivilligt, endast om du vill delta i framtida forskning)</li>
</ul>

<p>Vi anser inte att det finns negativa följder eller risker med denna datainsamling. Du kan när som helst välja att avbryta deltagandet.</p>

<p>Projektet kommer att samla in och registrera dina svar som är anonyma. Dina svar och dina resultat kommer att behandlas så att inte obehöriga kan ta del av dem. Svaren kommer att lagras på ett säkert sätt vid Kungliga Tekniska högskolan under 10 år efter projektets avslut.</p>

<p>Du har inte möjlighet att ta del av dina svar i efterhand då berättelseinsamlingen är anonym. Projektet kommer att redovisas i fritt tillgängliga vetenskapliga artiklar (open access) som du har möjlighet att ta del av genom att kontakta projektansvarig.</p>

<h2 style=\"color:#1d4ed8\">Dina rättigheter</h2>
<p>Ditt deltagande är frivilligt och du kan när som helst välja att avbryta deltagandet. Om du väljer att inte delta eller vill avbryta ditt deltagande behöver du inte uppge varför. Om du vill avbryta ditt deltagande ska du inte skicka in din berättelse och dina svar.</p>

<p>Ansvarig för dina personuppgifter är Kungliga Tekniska högskolan. Enligt EU:s dataskyddsförordning har du rätt att kostnadsfritt få ta del av de uppgifter om dig som hanteras i projektet, och vid behov få eventuella fel rättade. Du kan också begära att uppgifter om dig raderas samt att behandlingen av dina personuppgifter begränsas. Rätten till radering och till begränsning av behandling av personuppgifter gäller dock inte när uppgifterna är nödvändiga för den aktuella forskningen.</p>

<p>Om du vill ta del av uppgifterna ska du kontakta huvudansvarig forskare Iosif Gidiotis, Kungliga Tekniska högskolan, Brinellvägen 68, 114 28 Stockholm, e-post <a href="mailto:gidiotis@kth.se" style="color:#1d4ed8">gidiotis@kth.se</a>.</p>

<h2 style=\"color:#1d4ed8\">Dataskydd och klagomål</h2>
<p>Dataskyddsombud nås på Kungliga Tekniska högskolan, Att: Dataskyddsombud, Brinellvägen 8, 100 44 Stockholm, telefon 08-7908752, e-post <a href="mailto:dataskyddsombud@kth.se" style="color:#1d4ed8">dataskyddsombud@kth.se</a>.</p>

<p>Om du är missnöjd med hur dina personuppgifter behandlas har du rätt att ge in klagomål till <a href="https://www.imy.se/" target="_blank" style="color:#1d4ed8">Integritetsskyddsmyndigheten</a>, som är tillsynsmyndighet.</p>

<h2 style=\"color:#1d4ed8\">Kontaktuppgifter</h2>
<ul>
  <li><strong>Projektansvarig (Forskare):</strong> <a href="mailto:gidiotis@kth.se" style="color:#1d4ed8">gidiotis@kth.se</a>, Brinellvägen 68, 114 28 Stockholm</li>
  <li><strong>Huvudhandledare för forskning:</strong> <a href="mailto:stefanhr@kth.se" style="color:#1d4ed8">stefanhr@kth.se</a></li>
  <li><strong>Dataskyddsombud:</strong> <a href="mailto:dataskyddsombud@kth.se" style="color:#1d4ed8">dataskyddsombud@kth.se</a></li>
</ul>`,
      "consent.checkbox": "Jag har läst och samtycker till att delta i denna forskningsstudie. Jag förstår hur mina data kommer att användas.",
      "checkin.title": "Incheckning",
      "checkin.intro": "Vi börjar med en snabb incheckning innan vi sätter igång.",
      "checkin.background": "Bakgrund",
      "checkin.backgroundPlaceholder": "Välj din bakgrund",
      "checkin.academicTeacher": "Akademisk lärare (t.ex. lektor, professor)",
      "checkin.k12Teacher": "Grund- eller gymnasielärare",
      "checkin.researcher": "Forskare",
      "checkin.student": "Student",
      "checkin.other": "Annat",
      "checkin.otherBackground": "Vänligen ange din bakgrund",
      "checkin.discipline": "Ämnesområde",
      "checkin.disciplinePlaceholder": "t.ex. utbildning, teknik, matematik",
      "cards.title": "Välj teman",
      "cards.intro": "Vad funderar du mest på när det gäller framtidens utbildning? Välj ett eller flera teman som känns intressanta för dig och som kan ge inspiration till din berättelse om hur utbildning kan se ut i framtiden Alternativt kan du bara trycka på 'Skriv fritt' för att skriva din berättelse utan någon tema.",
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
      "thankyou.nextText": "FForskargruppen kommer att analysera de insamlade berättelserna och tillhörande återkoppling i syfte att identifiera återkommande teman och insikter rörande föreställningar om önskvärda framtider för utbildning.",
      "thankyou.startOver": "Börja om",
      "cards.selected": "Vald",
      "cards.selectCard": "Välj kort",
      "cards.wildcard.title": "Skriv fritt",
      "cards.wildcard.description": "Uttryck din egen vision för AI:s framtid inom utbildning.",
      "cards.technology.title": "Teknikintegration",
      "cards.technology.description": "Föreställ dig en framtid där AI har förändrat hur elever lär sig och interagerar med utbildningsinnehåll.",
      "cards.equity.title": "Utbildningsjämlikhet",
      "cards.equity.description": "Föreställ dig hur AI kan hantera och eliminera skillnader i tillgång och resultat.",
      "cards.environment.title": "Miljöutbildning",
      "cards.environment.description": "Fundera på hur AI kan koppla utbildning till miljöansvar och hållbarhet.",
      "cards.personalization.title": "Anpassning",
      "cards.personalization.description": "Adaptiva lärsystem som skräddarsyr utbildningsupplevelser efter individuella studentbehov.",
      "cards.global.title": "Globala klassrum",
      "cards.global.description": "Föreställ dig AI-möjliggjorda lärmiljöer som överskrider geografiska gränser.",
      "cards.skills.title": "Framtidens färdigheter",
      "cards.skills.description": "Fundera på hur AI kan hjälpa till att utveckla färdigheter för jobb och utmaningar som ännu inte finns.",
      "cards.assessment.title": "Utbildningsdesign & bedömning",
      "cards.assessment.description": "Verktyg och metoder för att utvärdera studenters lärande samt AI-assisterade bedömningsprocesser.",
      "cards.community.title": "Lärande i samhället",
      "cards.community.description": "Föreställ dig hur AI kan integrera utbildning med lokala samhällen och möjligheter.",
      "prompt.start.title": "Kom igång",
      "prompt.start.message": "Fundera på att börja med en specifik tidsperiod eller miljö för ditt framtidsscenario.",
      "prompt.character.title": "Lägg till karaktärer",
      "prompt.character.message": "Fundera på att introducera en elev, lärare eller annan aktör som upplever denna framtid.",
      "prompt.challenge.title": "Introducera en utmaning",
      "prompt.challenge.message": "Vilka hinder eller spänningar finns i denna utbildningsframtid?",
      "prompt.solution.title": "Utforska lösningar",
      "prompt.solution.message": "Hur kan aktörer hantera eller lösa dessa utmaningar?",
      "prompt.tech_detail.title": "Teknikdetaljer",
      "prompt.tech_detail.message": "Vilka specifika teknologier används i detta framtida klassrum?",
      "prompt.equity_detail.title": "Jämlikhetsaspekter",
      "prompt.equity_detail.message": "Hur hanterar denna framtid frågor om tillgång och möjligheter?",
      "prompt.environment_detail.title": "Miljöpåverkan",
      "prompt.environment_detail.message": "Hur kopplas utbildning till hållbarhet i denna framtid?",
      "prompt.skills_detail.title": "Framtidens färdigheter",
      "prompt.skills_detail.message": "Vilka specifika färdigheter värderas och lärs ut i denna framtid?",
      "prompt.reflection.title": "Avslutning",
      "prompt.reflection.message": "Fundera på att avsluta med en reflektion om vad denna framtid betyder för utbildning.",
      "cards.epistemology.title": "Kunskapssyn",
      "cards.epistemology.description": "Förståelse för hur kunskap skapas och valideras i AI-förstärkta lärmiljöer.",
      "cards.bias.title": "Partiskhet",
      "cards.bias.description": "Hantering av algoritmisk bias och säkerställande av rättvis representation för alla studentgrupper.",
      "cards.surveillance.title": "Övervakning",
      "cards.surveillance.description": "Hantering av integritetsfrågor och dataövervakning i AI-drivna utbildningssystem.",
      "cards.blurredboundaries.title": "Verklighetsuppfattning",
      "cards.blurredboundaries.description": "Navigering av gränslandet mellan AI-genererat och människoskapat innehåll inom utbildning.",
      "cards.humanrelationships.title": "Mänskliga relationer",
      "cards.humanrelationships.description": "Bevarande av äkta mellanmänskliga kontakter i allt mer digitaliserade lärmiljöer.",
      "cards.sustainability.title": "Hållbarhet",
      "cards.sustainability.description": "Långsiktig genomförbarhet och miljöhänsyn vid implementering av AI inom utbildning.",
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