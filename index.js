let Input = document.querySelector(".inEmailRe");
let Button = document.querySelector(".btnSubmet");




window.onload = function() {
    // Select the form elements
    let firstForm = document.querySelector(".formStarted");
let secondForm = document.querySelector(".secondForm");

    // Check if elements are found before modifying their styles
    if (!firstForm || !secondForm) {
        console.error("Forms not found in the document.");
        return;
    }

    // Check if "email" exists in localStorage
    if (localStorage.getItem("emaili")) {
        firstForm.style.display = "none";
        secondForm.style.display = "flex";
    } else {
        firstForm.style.display = "flex";
        secondForm.style.display = "none";
    }
};


let validEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

function emailValid() {
    let Useremail = Input.value; 
    if (Useremail.match(validEmail)) {
        location.href = "./Register/register.html";
        
localStorage.setItem("email" , Useremail) ;


    } else {
        
        event.preventDefault()
    }
}

const translation = {
    en: {
      signIn: "Sign In",
      h1: "Unlimited movies, TV",
      h12: "shows, and more",
      h2: "Starts at EGP 70. Cancel anytime.",
      h4: "Ready to watch? Enter your email to create or restart your membership.",
      getStarted: "Get Started",
      finishSign: "Finish Sign-Up",
      filmsSuggests: "Trending Now",
      whatJoin: "More Reasons to Join",
  
      oneh: "Enjoy on your TV",
      onep: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more",
  
      twoh: "Download your shows to watch offline",
      twop: "Save your favorites easily and always have something to watch.",
  
      threeh: "Watch Everywhere",
      threep: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV",
  
      fourh: "Create Profiles For kids",
      fourp: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership",
  
      asked: "Frequently Asked Questions",
  
      span1: "What is Netflix?",
      div1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  
      span2: "How much does Netflix cost?",
      div2: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EGP 70 to EGP 165 a month. No extra costs, no contracts.",
  
      span3: "Where can I watch?",
      div3: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  
      span4: "How do I cancel?",
      div4: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  
      span5: "What can I watch on Netflix?",
      div5: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  
      span6: "Is Netflix good for kids?",
      div6: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  
      readyToWatch: "Ready to watch? Enter your email to create or restart your membership.",
  
      questionFooter: "Questions? Contact Us",
    },
    ar: {
      signIn: "تسجيل الدخول",
      h1: "أفلام غير محدودة، وبرامج تلفزيونية",
      h12: "والمزيد",
      h2: "ابدأ من ٧٠ جنيه. إلغاء في أي وقت.",
      h4: "هل أنت مستعد للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء أو إعادة تنشيط عضويتك.",
      getStarted: "ابدأ الآن",
      finishSign: "أكمل التسجيل",
      filmsSuggests: "شائع الآن",
      whatJoin: "أسباب أخرى للانضمام",
  
      oneh: "استمتع على التلفاز",
      onep: "شاهد على أجهزة التلفاز الذكية، بلاي ستيشن، إكس بوكس، كروم كاست، آبل تي في، مشغلات بلو راي، والمزيد",
  
      twoh: "حمّل العروض للمشاهدة دون اتصال",
      twop: "احفظ برامجك المفضلة بسهولة واجعل لديك شيئًا للمشاهدة دائمًا.",
  
      threeh: "شاهد في أي مكان",
      threep: "استمتع بالبث غير المحدود للأفلام والبرامج التلفزيونية على هاتفك، جهازك اللوحي، الكمبيوتر المحمول، والتلفاز",
  
      fourh: "أنشئ ملفات تعريف للأطفال",
      fourp: "دع الأطفال يخوضون مغامرات مع شخصياتهم المفضلة في مساحة مخصصة لهم - مجانًا مع عضويتك",
  
      asked: "الأسئلة المتكررة",
  
      span1: "ما هو نتفليكس؟",
      div1: "نتفليكس هي خدمة بث توفر مجموعة واسعة من البرامج التلفزيونية الحائزة على جوائز، الأفلام، الأنمي، الوثائقيات، والمزيد على آلاف الأجهزة المتصلة بالإنترنت. يمكنك المشاهدة بقدر ما تريد، في أي وقت تريده، بدون إعلانات - وكل هذا بسعر شهري منخفض. هناك دائمًا شيء جديد للاكتشاف وتضاف برامج وأفلام جديدة كل أسبوع!",
  
      span2: "كم يكلف نتفليكس؟",
      div2: "شاهد نتفليكس على هاتفك الذكي، جهازك اللوحي، التلفاز الذكي، الكمبيوتر المحمول، أو جهاز البث، كل ذلك مقابل رسوم شهرية ثابتة. تتراوح الخطط من ٧٠ إلى ١٦٥ جنيه شهريًا. بدون تكاليف إضافية، بدون عقود.",
  
      span3: "أين يمكنني المشاهدة؟",
      div3: "شاهد في أي مكان، في أي وقت. سجّل الدخول باستخدام حساب نتفليكس الخاص بك للمشاهدة الفورية على الويب من الكمبيوتر الشخصي أو على أي جهاز متصل بالإنترنت يوفر تطبيق نتفليكس، بما في ذلك التلفازات الذكية، الهواتف الذكية، الأجهزة اللوحية، أجهزة البث ووحدات التحكم في الألعاب. يمكنك أيضًا تنزيل عروضك المفضلة باستخدام تطبيق iOS أو Android. استخدم التنزيلات للمشاهدة أثناء التنقل وبدون اتصال بالإنترنت. خذ نتفليكس معك في أي مكان.",
  
      span4: "كيف يمكنني الإلغاء؟",
      div4: "نتفليكس مرنة. لا توجد عقود مزعجة ولا التزامات. يمكنك بسهولة إلغاء حسابك عبر الإنترنت بنقرتين. لا توجد رسوم إلغاء - يمكنك بدء أو إيقاف حسابك في أي وقت.",
  
      span5: "ماذا يمكنني مشاهدة على نتفليكس؟",
      div5: "تحتوي نتفليكس على مكتبة واسعة من الأفلام الروائية، الوثائقيات، البرامج التلفزيونية، الأنمي، الإنتاجات الأصلية الحائزة على جوائز، والمزيد. شاهد بقدر ما تريد، في أي وقت تريد.",
  
      span6: "هل نتفليكس مناسب للأطفال؟",
      div6: "تجربة نتفليكس للأطفال مشمولة في عضويتك لتوفير التحكم للآباء بينما يستمتع الأطفال بالبرامج التلفزيونية والأفلام الملائمة للعائلة في مساحتهم الخاصة. تأتي ملفات تعريف الأطفال مع إعدادات التحكم الأبوي المحمية برمز PIN والتي تسمح لك بتحديد تصنيف المحتوى المناسب للأطفال وحظر عناوين محددة لا تريد للأطفال رؤيتها.",
  
      readyToWatch: "هل أنت مستعد للمشاهدة؟ أدخل بريدك الإلكتروني لإنشاء أو إعادة تنشيط عضويتك.",
  
      questionFooter: "هل لديك أسئلة؟ اتصل بنا",
    }
  };
  

  const languageSelectTop = document.querySelectorAll("select");

const Sign = document.getElementById("signin") ;
const hhhh = document.getElementById("hhhh") ;
const hhhht = document.getElementById("asd") ;
const hhs = document.getElementById("xcv") ;
const hf = document.getElementById("hf") ;
const get = document.getElementById("get") ;
const finish = document.getElementById("finish") ;
const oneh = document.getElementById("oneh") ;
const onep = document.getElementById("onep") ;
const twoh = document.getElementById("twoh") ;
const twop = document.getElementById("twop") ;
const threeh = document.getElementById("threep") ;
const threep = document.getElementById("threep") ;
const fourh = document.getElementById("fourh") ;
const fourp = document.getElementById("fourp") ;
const span1 = document.getElementById("span1") ;
const div1 = document.getElementById("div1") ;
const span2 = document.getElementById("span2") ;
const div2 = document.getElementById("div2") ;
const span3 = document.getElementById("span3") ;
const div3 = document.getElementById("div3") ;
const span4 = document.getElementById("span4") ;
const div4 = document.getElementById("div4") ;
const span5 = document.getElementById("span5") ;
const div5 = document.getElementById("div5") ;
const span6 = document.getElementById("span6") ;
const div6 = document.getElementById("div6") ;
const fre = document.getElementById("fre") ;
const reafyy = document.getElementById("reafyy") ;
const fot = document.getElementById("fot") ;





  languageSelectTop.forEach((selectElement) => {
      selectElement.addEventListener("change", (event) => {
          setLanguage(event.target.value);
      });
  });
  
  const setLanguage = (language) => {
      if (language === "ar") {
          

Sign.innerHTML = translation.ar.signIn ;
hhhh.innerHTML = translation.ar.h1
hhhht.innerHTML = translation.ar.h12
hhs.innerHTML = translation.ar.h2
hf.innerHTML = translation.ar.h4
get.innerHTML = translation.ar.getStarted
finish.innerHTML = translation.ar.finishSign
tred.innerHTML = translation.ar.filmsSuggests
oneh.innerHTML = translation.ar.oneh
onep.innerHTML = translation.ar.onep
threeh.innerHTML = translation.ar.threeh
threep.innerHTML = translation.ar.threep
twoh.innerHTML = translation.ar.twoh
twop.innerHTML = translation.ar.twop
fourh.innerHTML = translation.ar.fourh
fourp.innerHTML = translation.ar.fourp

span1.innerHTML = translation.ar.span1
span2.innerHTML = translation.ar.span2
span3.innerHTML = translation.ar.span3
span4.innerHTML = translation.ar.span4
span5.innerHTML = translation.ar.span5
span6.innerHTML = translation.ar.span6
div1.innerHTML = translation.ar.div1
div2.innerHTML = translation.ar.div2
div3.innerHTML = translation.ar.div3
div4.innerHTML = translation.ar.div4
div5.innerHTML = translation.ar.div5
div6.innerHTML = translation.ar.div6

fre.innerHTML = translation.ar.asked
reafyy.innerHTML = translation.ar.readyToWatch
fot.innerHTML = translation.ar.questionFooter



localStorage.setItem("lang" , "arabic");




      } else if (language === "en") {
        Sign.innerHTML = translation.en.signIn ;
        hhhh.innerHTML = translation.en.h1
        hhhht.innerHTML = translation.en.h12
        hhs.innerHTML = translation.en.h2
        hf.innerHTML = translation.en.h4
        get.innerHTML = translation.en.getStarted
        finish.innerHTML = translation.en.finishSign
        tred.innerHTML = translation.en.filmsSuggests
        oneh.innerHTML = translation.en.oneh
        onep.innerHTML = translation.en.onep
        threeh.innerHTML = translation.en.threeh
        threep.innerHTML = translation.en.threep
        twoh.innerHTML = translation.en.twoh
        twop.innerHTML = translation.en.twop
        fourh.innerHTML = translation.en.fourh
        fourp.innerHTML = translation.en.fourp
        
        span1.innerHTML = translation.en.span1
        span2.innerHTML = translation.en.span2
        span3.innerHTML = translation.en.span3
        span4.innerHTML = translation.en.span4
        span5.innerHTML = translation.en.span5
        span6.innerHTML = translation.en.span6
        div1.innerHTML = translation.en.div1
        div2.innerHTML = translation.en.div2
        div3.innerHTML = translation.en.div3
        div4.innerHTML = translation.en.div4
        div5.innerHTML = translation.en.div5
        div6.innerHTML = translation.en.div6
        
        fre.innerHTML = translation.en.asked
        reafyy.innerHTML = translation.en.readyToWatch
        fot.innerHTML = translation.en.questionFooter

        localStorage.setItem("lang" , "english") ;

      }
  };
  