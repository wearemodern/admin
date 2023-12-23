export default function CategoriesList() {
  const categories = [
    {
      title: "خانه و آشپزخانه",
      mainLink: "/",
      layer1: [
        {
          text: "صوتی و تصویری",
          layer1_Link: "/",
          layer2: [
            { text: "نمایشگر تبلیغاتی", link: "/" },
            { text: "ویدیو پروژکتور", link: "/" },
            { text: "ساند بار ", link: "/" },
            { text: "اندروید باکس ", link: "/" },
            { text: "گیرنده دیجیتال", link: "/" },
          ],
        },
        {
          text: " لوازم برقی و خانگی ",
          layer1_Link: "/",
          layer2: [
            { text: "مایکروویو", link: "/" },
            { text: "مایکروفر ", link: "/" },
            { text: "جاروبرقی", link: "/" },
            { text: "اتو", link: "/" },
            { text: "آب‌میوه‌گیری", link: "/" },
            { text: "چای‌ساز", link: "/" },
            { text: "غذاساز", link: "/" },
            { text: "گوشت‌کوب برقی", link: "/" },
            { text: "پلوپز", link: "/" },
            { text: "آرام‌پز", link: "/" },
            { text: "زودپز", link: "/" },
            { text: "بخارپز", link: "/" },
            { text: "هواپز", link: "/" },
            { text: "سرخ‌کن", link: "/" },
            { text: "هم‌زن", link: "/" },
            { text: "چرخ گوشت", link: "/" },
            { text: "ساندویچ ساز", link: "/" },
            { text: "غذاساز کودک", link: "/" },
            { text: "توستر نان", link: "/" },
            { text: "پنکه", link: "/" },
            { text: "یخ‌ساز", link: "/" },
            { text: "میوه‌خشک‌کن", link: "/" },
            { text: "ذرت‌ساز", link: "/" },
            { text: "تخم مرغ پز", link: "/" },
            { text: "تنورک", link: "/" },
          ],
        },
        {
          text: " وسایل آشپزخانه و پذیرایی ",
          layer1_Link: "/",
          layer2: [
            { text: "سرویس قاشق و چنگال", link: "/" },
            { text: "کارد و چنگال", link: "/" },
            { text: "سرویس غذاخوری", link: "/" },
            { text: "سرویس چاقو", link: "/" },
            { text: "سرویس چای‌خوری", link: "/" },
            { text: "سرویس قهوه‌خوری", link: "/" },
            { text: "پارچ و لیوان", link: "/" },
            { text: "جاادویه و حبوبات", link: "/" },
            { text: "سرویس قابلمه", link: "/" },
            { text: "سرویس کفگیر و ملاقه", link: "/" },
            { text: "قندان", link: "/" },
            { text: "نمک‌دان", link: "/" },
            { text: "ست روغن و آبلیمو", link: "/" },
            { text: "فلاسک و کلمن", link: "/" },
            { text: "رنده و خردکن دستی", link: "/" },
            { text: "ترازو", link: "/" },
            { text: "ماگ", link: "/" },
          ],
        },
        {
          text: "قهوه‌ساز و لوازم جانبی",
          layer1_Link: "/",
          layer2: [
            { text: "اسپرسوساز", link: "/" },
            { text: "آسیاب قهوه", link: "/" },
            { text: "تمپر قهوه", link: "/" },
            { text: "ظرف نگهداری قهوه", link: "/" },
            { text: "قهوه‌خوری", link: "/" },
            { text: "قهوه‌جوش دستی", link: "/" },
            { text: "قهوه‌ساز", link: "/" },
            { text: "پیجر", link: "/" },
            { text: "ناک‌ باکس", link: "/" },
            { text: "فرنچ پرس", link: "/" },
          ],
        },
        {
          text: "کالای خواب و اتاق خواب",
          layer1_Link: "/",
          layer2: [
            { text: "روتختی", link: "/" },
            { text: "بالش", link: "/" },
            { text: "ملحفه", link: "/" },
            { text: "آباژور و چراغ خواب", link: "/" },
            { text: "منظم‌کننده لباس", link: "/" },
          ],
        },
        {
          text: "لوازم سرویس بهداشتی و حمام",
          layer1_Link: "/",
          layer2: [
            { text: "ست سرویس بهداشتی", link: "/" },
            { text: "ست حمام", link: "/" },
            { text: "لیف", link: "/" },
            { text: "سنگ پا", link: "/" },
            { text: "جامسواکی برقی", link: "/" },
            { text: "بند رخت", link: "/" },
          ],
        },
        {
          text: "تجهیزات سرمایشی و گرمایشی",
          layer1_Link: "/",
          layer2: [
            { text: "کولر گازی", link: "/" },
            { text: "کولر پرتابل", link: "/" },
            { text: "بخاری پرتابل", link: "/" },
            { text: "کولر آبی", link: "/" },
            { text: "هیتر برقی", link: "/" },
            { text: "پنکه", link: "/" },
            { text: "تصفیه هوا", link: "/" },
          ],
        },
        {
          text: "شستشو و لوازم نظافت",
          layer1_Link: "/",
          layer2: [
            { text: "تی دستی", link: "/" },
            { text: "تی برقی", link: "/" },
            { text: "جارو", link: "/" },
            { text: "شیشه‌شوی رباتیک", link: "/" },
            { text: "استخر پاک‌کن رباتیک", link: "/" },
            { text: "وسایل نظافت", link: "/" },
            { text: "دستمال نانو", link: "/" },
          ],
        },
        {
          text: "لوازم یک‌بار مصرف",
          layer1_Link: "/",
        },
        {
          text: "اکسسوری خانه و آشپزخانه",
          layer1_Link: "/",
          layer2: [
            { text: "شمع", link: "/" },
            { text: "جاکلیدی", link: "/" },
            { text: "زیر بشقابی", link: "/" },
            { text: "رومیزی", link: "/" },
            { text: "ساعت دیواری", link: "/" },
            { text: "مجسمه", link: "/" },
            { text: "گلدان و گل مصنوعی", link: "/" },
            { text: "تابلو مینیاتوری", link: "/" },
          ],
        },
      ],
    },
    {
      title: "کالای دیجیتال",
      mainLink: "/",
      layer1: [
        {
          text: "موبایل و تبلت",
          layer1_Link: "/",
          layer2: [
            { text: "موبایل خاص", link: "/" },
            { text: "تبلت", link: "/" },
          ],
        },
        {
          text: " لوازم جانبی موبایل و تبلت ",
          layer1_Link: "/",
          layer2: [
            { text: "شارژر", link: "/" },
            { text: "گارد-گلس", link: "/" },
            { text: "هندزفری", link: "/" },
            { text: "کابل شارژر", link: "/" },
            { text: "دسته بازی موبایل", link: "/" },
            { text: "بزرگ‌نما", link: "/" },
            { text: "کول فن موبایل", link: "/" },
            { text: "هولدر", link: "/" },
          ],
        },
        {
          text: "لپ‌تاپ",
          layer1_Link: "/",
          layer2: [
            { text: "اقتصادی", link: "/" },
            { text: "گیمینگ", link: "/" },
            { text: "دانشجویی", link: "/" },
          ],
        },
        {
          text: "لوازم جانبی لپ‌تاپ و کامپیوتر",
          layer1_Link: "/",
          layer2: [
            { text: "موس- پد موس", link: "/" },
            { text: "کیبورد", link: "/" },
            { text: "دانگل wifi", link: "/" },
            { text: "کول‌پد", link: "/" },
            { text: "اسپیکر-کیف حمل", link: "/" },
            { text: "کاور", link: "/" },
          ],
        },
        {
          text: "ساعت و مچ‌بند هوشمند",
          layer1_Link: "/",
          layer2: [
            { text: "اپل واچ", link: "/" },
            { text: "گلکسی Gear", link: "/" },
            { text: "می‌پرو و می‌بند", link: "/" },
            { text: "برند بازاری", link: "/" },
            { text: "برند چینی", link: "/" },
          ],
        },
        {
          text: "تلویزیون نوین",
          layer1_Link: "/",
          layer2: [
            { text: "پروژکتور پرتابل", link: "/" },
            { text: "پروژکتور لیزری", link: "/" },
            { text: "تلویزیون تبلیغاتی", link: "/" },
          ],
        },
        {
          text: "هدفون و هدست و میکروفون",
          layer1_Link: "/",
          layer2: [
            { text: "گیمینگ", link: "/" },
            { text: "روی گوش", link: "/" },
            { text: "داخل گوش", link: "/" },
            { text: "میکروفون‌دار", link: "/" },
            { text: "تک گوش", link: "/" },
            { text: "میکروفون بی‌سیم", link: "/" },
            { text: "سیم‌دار و بی‌سیم", link: "/" },
          ],
        },
        {
          text: "اسپیکر",
          layer1_Link: "/",
          layer2: [
            { text: "خانگی", link: "/" },
            { text: "قابل حمل", link: "/" },
          ],
        },
        {
          text: "هارد و فلش",
          layer1_Link: "/",
          layer2: [
            { text: "اینترنال", link: "/" },
            { text: "اکسترنال", link: "/" },
            { text: "SSD-HDD", link: "/" },
            { text: "USB با OTG و ساده", link: "/" },
          ],
        },
        {
          text: "دوربین عکاسی و لوازم جانبی",
          layer1_Link: "/",
          layer2: [
            { text: "عکاسی", link: "/" },
            { text: "فیلم‌برداری", link: "/" },
            { text: "لنز", link: "/" },
            { text: "کیف", link: "/" },
            { text: "بند حمل", link: "/" },
            { text: "محلول پاک‌کننده", link: "/" },
            { text: "لنز و دستمال", link: "/" },
            { text: "فلش دوربین", link: "/" },
            { text: "رم دوربین", link: "/" },
          ],
        },
        {
          text: "گیمینگ و لوازم جانبی",
          layer1_Link: "/",
          layer2: [
            { text: "دسته بازی گوشی", link: "/" },
            { text: "دسته بازی کامپیوتر", link: "/" },
            { text: "PSP", link: "/" },
            { text: "Nintendo Switch", link: "/" },
            { text: "کنسول اقتصادی", link: "/" },
            { text: "انگشتی", link: "/" },
            { text: "فرمان و ست بازی", link: "/" },
            { text: "کول‌پد موبایل", link: "/" },
          ],
        },
        {
          text: "دوربین‌های شبکه و تجهیزات",
          layer1_Link: "/",
          layer2: [
            { text: "دوربین وایرلس", link: "/" },
            { text: "دزدگیر وایرلس", link: "/" },
          ],
        },
        {
          text: "مودم، پرینتر و تلفن",
          layer1_Link: "/",
          layer2: [
            { text: "HP", link: "/" },
            { text: "CANON", link: "/" },
            { text: "Brother", link: "/" },
            { text: "پرتابل", link: "/" },
            { text: "عکاسی", link: "/" },
            { text: "اسکنر متن همراه", link: "/" },
            { text: "لوگو", link: "/" },
          ],
        },
        {
          text: "اکسسوری دیجیتال",
          layer1_Link: "/",
          layer2: [
            { text: "مترجم همراه", link: "/" },
            { text: "باتری", link: "/" },
            { text: "ربات‌ها", link: "/" },
          ],
        },
      ],
    },
    {
      title: "زیبایی و سلامت",
      mainLink: "/",
      layer1: [
        {
          text: "لوازم آرایشی و بهداشتی",
          layer1_Link: "/",
          layer2: [
            { text: "کرم پودر", link: "/" },
            { text: "پنکک", link: "/" },
            { text: "ریمل-خط چشم", link: "/" },
            { text: "لاک-رژ لب", link: "/" },
            { text: "حط لب-مداد چشم", link: "/" },
            { text: "سایه ابرو- مژه مصنوعی", link: "/" },
            { text: "سایه چشم- ناخن مصنوعی", link: "/" },
            { text: "فرمژه- کانسیلر", link: "/" },
            { text: "ست مانیکور و پدیکور", link: "/" },
            { text: "براش و شانه و برس", link: "/" },
            { text: "پد آرایش", link: "/" },
          ],
        },
        {
          text: "مراقبت پوست و مو",
          layer1_Link: "/",
          layer2: [
            { text: "شامپو- ماسک مو", link: "/" },
            { text: "آبرسان", link: "/" },
            { text: "نرم‌کننده- مام زیر بغل", link: "/" },
            { text: "کرم و موم موبر", link: "/" },
            { text: "ضد آفتاب- کرم زیر چشم", link: "/" },
            { text: "افترشیو", link: "/" },
            { text: "کرم دست و صورت و مرطوب‌کننده", link: "/" },
            { text: "ماسک صورت", link: "/" },
            { text: "سرم مو", link: "/" },
            { text: "حالت‌دهنده مو", link: "/" },
          ],
        },
        {
          text: "لوازم کودک و نوزاد",
          layer1_Link: "/",
          layer2: [
            { text: "کالسکه و کریر", link: "/" },
            { text: "عروسک", link: "/" },
            { text: "پوشاک بچه", link: "/" },
            { text: "دستمال مرطوب", link: "/" },
            { text: "گوش پاک‌کن", link: "/" },
            { text: "کوله و ساک", link: "/" },
            { text: "پک آراستگی", link: "/" },
            { text: "چراغ خواب کودک", link: "/" },
            { text: "پستونک وشیردوش و شیشه", link: "/" },
            { text: "وسایل نظارتی کودک", link: "/" },
            { text: "سرویس غذاخوری کودک- غذاساز کودک", link: "/" },
          ],
        },
        {
          text: "عظر و ادکلن",
          layer1_Link: "/",
          layer2: [
            { text: "اسپری بدن", link: "/" },
            { text: "بادی اسپلش", link: "/" },
            { text: "عطر و ادکلن", link: "/" },
          ],
        },
        {
          text: "لوارم شخصی برقی",
          layer1_Link: "/",
          layer2: [
            { text: "موزر", link: "/" },
            { text: "ریش‌تراش", link: "/" },
            { text: "خط‌زن", link: "/" },
            { text: "اپی‌لیدی", link: "/" },
            { text: "بندانداز", link: "/" },
            { text: "ست اصلاح موزن بینی و ابرو", link: "/" },
            { text: "ساکشن صورت", link: "/" },
            { text: "شیور بدن", link: "/" },
            { text: "سشوار", link: "/" },
            { text: "اتو مو", link: "/" },
            { text: "بابلیس و بیگودی برقی", link: "/" },
            { text: "فیس واش", link: "/" },
            { text: "سنگ پا برقی", link: "/" },
          ],
        },
        {
          text: "تجهیزات مراقبتی و سلامتی",
          layer1_Link: "/",
          layer2: [
            { text: "تست قند خون", link: "/" },
            { text: "فشار خون", link: "/" },
            { text: "تب‌سنج", link: "/" },
            { text: "پالس اکسیمتر", link: "/" },
            { text: "ترازو", link: "/" },
            { text: "دستگاه بخور سرد و گرم", link: "/" },
            { text: "اکسیژن‌ساز", link: "/" },
            { text: "کیسه آب گرم برقی", link: "/" },
          ],
        },
        {
          text: "اکسسوری زیبایی و سلامت",
          layer1_Link: "/",
        },
      ],
    },
    {
      title: "مد و پوشاک",
      mainLink: "/",
      layer1: [
        {
          text: "مردانه",
          layer1_Link: "/",
          layer2: [
            { text: "پیراهن", link: "/" },
            { text: "تی‌شرت", link: "/" },
            { text: "شلوار", link: "/" },
            { text: "کفش", link: "/" },
            { text: "شلوارک", link: "/" },
            { text: "کت و شلوار", link: "/" },
            { text: "کاپشن", link: "/" },
            { text: "پافر", link: "/" },
            { text: "هودی", link: "/" },
            { text: "سویشرت", link: "/" },
          ],
        },
        {
          text: "زنانه",
          layer1_Link: "/",
          layer2: [
            { text: "پیراهن", link: "/" },
            { text: "تی‌شرت", link: "/" },
            { text: "شلوار", link: "/" },
            { text: "کفش", link: "/" },
            { text: "شلوارک", link: "/" },
            { text: "کت و شلوار", link: "/" },
            { text: "کاپشن", link: "/" },
            { text: "پافر", link: "/" },
            { text: "هودی", link: "/" },
            { text: "سویشرت", link: "/" },
            { text: "تاپ", link: "/" },
            { text: "ساپورت", link: "/" },
          ],
        },
        {
          text: "بچگانه",
          layer1_Link: "/",
          layer2: [
            { text: "پیراهن", link: "/" },
            { text: "تی‌شرت", link: "/" },
            { text: "شلوار", link: "/" },
            { text: "کفش", link: "/" },
            { text: "شلوارک", link: "/" },
            { text: "کت و شلوار", link: "/" },
            { text: "کاپشن", link: "/" },
            { text: "پافر", link: "/" },
            { text: "هودی", link: "/" },
            { text: "سویشرت", link: "/" },
          ],
        },
        {
          text: "اکسسوری مد و پوشاک",
          layer1_Link: "/",
          layer2: [
            { text: "کمربند", link: "/" },
            { text: "عینک", link: "/" },
            { text: "ساعت", link: "/" },
            { text: "جاکارتی", link: "/" },
            {
              text: "آویز(گردنبند، دست‌بند، پیرسینگ، انگشتر و ...)",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      title: "کمپینگ و سفر",
      mainLink: "/",
      layer1: [
        {
          text: "تجهیزات گردش و سفر",
          layer1_Link: "/",
          layer2: [
            { text: "پمپ باد", link: "/" },
            { text: "چادر", link: "/" },
            { text: "کیسه خواب", link: "/" },
            { text: "فلاسک", link: "/" },
            { text: "نور و روشنایی", link: "/" },
            { text: "اینورتر", link: "/" },
            { text: "جامپ استارتر", link: "/" },
            { text: "چراغ قوه", link: "/" },
            { text: " نئو- زیرانداز", link: "/" },
            { text: "تشک بادی", link: "/" },
            { text: "کلمن", link: "/" },
            { text: "میز و صندلی", link: "/" },
          ],
        },
        {
          text: "کوهنوردی و کمپینگ",
          layer1_Link: "/",
          layer2: [
            { text: "چاقو-ابزار چندکاره", link: "/" },
            { text: "ست نجات کمک‌های اولیه", link: "/" },
            { text: "ست غذاخوری", link: "/" },
            { text: "ست قاشق و چنگال", link: "/" },
            { text: "اجاق گاز", link: "/" },
            { text: "اره انگشتی", link: "/" },
            { text: "کیت SOS", link: "/" },
            { text: " سوت نجات", link: "/" },
            { text: "بیل آفرودی", link: "/" },
            { text: "تبر تاکتیکال", link: "/" },
            { text: "تصفیه آب", link: "/" },
            { text: "بخاری سفری", link: "/" },
            { text: "کارابین", link: "/" },
            { text: "توالت پرتابل", link: "/" },
            { text: "دوش همراه", link: "/" },
            { text: "عصا کوهنوردی", link: "/" },
          ],
        },
        {
          text: "چمدان و کوله‌پشتی",
          layer1_Link: "/",
          layer2: [
            { text: "کوله تاکتیکال", link: "/" },
            { text: "کوله پشتی", link: "/" },
            { text: "چمدان و ساک", link: "/" },
          ],
        },
        {
          text: "یخچال پرتابل (قابل حمل)",
          layer1_Link: "/",
          layer2: [
            { text: "خودرویی", link: "/" },
            { text: "کمپی", link: "/" },
          ],
        },
        {
          text: "فندک و لوازم جانبی",
          layer1_Link: "/",
          layer2: [
            { text: "فندک اتمی، سنگی و بنزینی", link: "/" },
            { text: "اسپارکر", link: "/" },
            { text: "کبریت چندبار مصرف", link: "/" },
          ],
        },
        {
          text: "دوربین‌های شکاری و تلسکوپ",
          layer1_Link: "/",
          layer2: [
            { text: "دوربین شکاری، دوچشمی و تک چشمی", link: "/" },
            { text: "تلسکوپ مستقیم، بازتابی", link: "/" },
          ],
        },
        {
          text: "اکسسوری کمپینگ و سفر",
          layer1_Link: "/",
          layer2: [
            { text: "کلاه- هدبند", link: "/" },
            { text: "برچسب", link: "/" },
            { text: "باربیکیو- سه پایه آتش", link: "/" },
            { text: "آفتابه مسافرتی", link: "/" },
            { text: "کیف نظم دهنده", link: "/" },
            { text: "گالن آب", link: "/" },
          ],
        },
        {
          text: "لوازم خودرو",
          layer1_Link: "/",
        },
      ],
    },
    {
      title: "ورزش و سرگرمی",
      mainLink: "/",
      layer1: [
        {
          text: "پوشاک ورزشی",
          layer1_Link: "/",
          layer2: [
            {
              text: "زنانه",
              link: "/",
              layer3: [
                { text: "کیف", link: "/" },
                { text: "لگ", link: "/" },
                { text: "تاپ", link: "/" },
                { text: "نیم‌تنه", link: "/" },
                { text: "ساپورت‌های ورزشی", link: "/" },
                { text: "دستکش", link: "/" },
                { text: "زانوبند", link: "/" },
                { text: "مچ‌بند", link: "/" },
                { text: "کفش و جوراب", link: "/" },
                { text: "مایو", link: "/" },
                { text: "کلاه شنا", link: "/" },
                { text: "هدبند", link: "/" },
              ],
            },
            {
              text: "مردانه",
              link: "/",
              layer3: [
                { text: "شلوارک", link: "/" },
                { text: "ست ورزشی", link: "/" },
                { text: "دستکش- هدبند", link: "/" },
                { text: "زانوبند- مچ‌بند", link: "/" },
                { text: "کفش و جوراب", link: "/" },
                { text: "تی‌شرت", link: "/" },
                { text: "شلوار گرمکن", link: "/" },
                { text: "مایو", link: "/" },
                { text: "کیف", link: "/" },
                { text: "کلاه شنا", link: "/" },
              ],
            },
          ],
        },
        {
          text: "لوازم و تجهیزات ورزشی",
          layer1_Link: "/",
          layer2: [
            { text: "وزنه", link: "/" },
            { text: "گریپستر", link: "/" },
            { text: "کش‌های ورزشی", link: "/" },
            { text: "بندTRX", link: "/" },
            { text: "دسته شنا سوئدی", link: "/" },
            { text: "چرخ ورزشی", link: "/" },
            { text: "مینی تردمیل", link: "/" },
            { text: "دستگاه دراز نشست", link: "/" },
            { text: "طناب بازی", link: "/" },
          ],
        },
        {
          text: "دوچرخه",
          layer1_Link: "/",
          layer2: [
            { text: "تاشو وهیبریدی", link: "/" },
            { text: "شهری", link: "/" },
          ],
        },
        {
          text: "اسکیت و اسکوتر",
          layer1_Link: "/",
          layer2: [
            { text: "اسکیت", link: "/" },
            { text: "اسکیت برد", link: "/" },
            { text: "اسکوتر", link: "/" },
            { text: "اسکوتر برقی", link: "/" },
            { text: "اسکوتر کودک", link: "/" },
          ],
        },
        {
          text: "اسباب‌بازی",
          layer1_Link: "/",
          layer2: [
            { text: "عروسک", link: "/" },
            { text: "ماشین کنترلی", link: "/" },
            { text: "تفنگ آبی، ساچمه پلاستیکی", link: "/" },
          ],
        },
        {
          text: "بازی‌های فکری",
          layer1_Link: "/",
          layer2: [
            { text: "گروهی", link: "/" },
            { text: "پازل", link: "/" },
            { text: "مکعب روبیک", link: "/" },
          ],
        },
        {
          text: "اکسسوری ورزش و سرگرمی",
          layer1_Link: "/",
          layer2: [
            { text: "گوش‌گیر و بینی‌بند", link: "/" },
            { text: "عینک شنا", link: "/" },
            { text: "قمقمه", link: "/" },
            { text: "شیکر", link: "/" },
          ],
        },
      ],
    },
    {
      title: "شهر کتاب",
      mainLink: "/",
      layer1: [
        {
          text: "کتاب و مجله",
          layer1_Link: "/",
          layer2: [
            { text: "کتاب ‌آموزشی", link: "/" },
            { text: "کتاب داستان", link: "/" },
            { text: "کتاب رمان", link: "/" },
            { text: "مجله", link: "/" },
            { text: "کتاب تاریخی", link: "/" },
            { text: "کاور و خمیر بازی", link: "/" },
            { text: "آلبوم عکس", link: "/" },
            { text: "چراغ مطالعه", link: "/" },
            { text: "ماشین حساب", link: "/" },
          ],
        },
        {
          text: "لوازم تحریر",
          layer1_Link: "/",
          layer2: [
            { text: "ست اداری", link: "/" },
            { text: "مداد و مداد فشاری", link: "/" },
            { text: "مداد رنگی", link: "/" },
            { text: "مداد شمعی", link: "/" },
            { text: "ماژیک", link: "/" },
            { text: "گواش و آبرنگ", link: "/" },
            { text: "ستت طراحی و نقاشی", link: "/" },
            { text: "جامدادی کیف و کوله", link: "/" },
            { text: "دفتر", link: "/" },
            { text: "خودکار و روان‌نویس", link: "/" },
            {
              text: "نوشت‌افزار، دفتر و کاغذ، ابزار نقاشی و رنگ‌آمیزی و...",
              link: "/",
            },
          ],
        },
        {
          text: "فرهنگ و هنر",
          layer1_Link: "/",
          layer2: [{ text: "صنایع دستی", link: "/" }],
        },
        {
          text: "اکسسوری شهر کتاب",
          layer1_Link: "/",
        },
      ],
    },

    {
      title: "دنیای ابزارآلات",
      mainLink: "/",
      layer1: [
        {
          text: "ابزار برقی/شارژی",
          layer1_Link: "/",
          layer2: [
            { text: "دریل", link: "/" },
            { text: "سنگ فرز", link: "/" },
            { text: "پیچ گوشتی", link: "/" },
            { text: "اره", link: "/" },
            { text: "دستگاه جوش", link: "/" },
            { text: "کارواش", link: "/" },
            { text: "بلوور", link: "/" },
            { text: "چکش تخریب", link: "/" },
            { text: "اتوی لوله", link: "/" },
            { text: "سشوار صنعتی", link: "/" },
            { text: "تراز لیزری", link: "/" },
            { text: "منگنه کوب", link: "/" },
          ],
        },
        {
          text: "ابزار دستی",
          layer1_Link: "/",
          layer2: [
            { text: "پیچ گوشتی", link: "/" },
            { text: "انبرها", link: "/" },
            { text: "آچارها", link: "/" },
          ],
        },
        {
          text: "تجهیزات الکتریکی",
          layer1_Link: "/",
          layer2: [
            { text: "هویه", link: "/" },
            { text: "باتری", link: "/" },
            { text: "اهم‌متر", link: "/" },
            { text: "آمپرسنج", link: "/" },
            { text: "متر لیزری", link: "/" },
            { text: "آرمیچر", link: "/" },
          ],
        },
        {
          text: "تجهیزات باغبانی و کشاورزی",
          layer1_Link: "/",
          layer2: [
            { text: "بیلچه", link: "/" },
            { text: "آب‌پاش", link: "/" },
            { text: "قیچی", link: "/" },
            { text: "علف‌زن", link: "/" },
            { text: "اره", link: "/" },
            { text: "خاک", link: "/" },
            { text: "کود و سم", link: "/" },
            { text: "تجهیزات آبیاری", link: "/" },
            { text: "دفع حشرات و حیوانات", link: "/" },
            { text: "گلدان‌های نوین", link: "/" },
            { text: "باغبانی مدرنیته", link: "/" },
          ],
        },
        {
          text: "اکسسوری ابزارآلات",
          layer1_Link: "/",
          layer2: [
            { text: "کیف ابزار", link: "/" },
            { text: "جعبه ابزار", link: "/" },
            { text: "چراغ پیشانی", link: "/" },
            { text: "دستکش", link: "/" },
            { text: "جک‌های پنوماتیک", link: "/" },
            { text: "جک‌های هیدرولیک", link: "/" },
            { text: "جاکلیدی", link: "/" },
          ],
        },
      ],
    },
    {
      title: "قطعات ماشین‌آلات و راه‌سازی ",
      mainLink: "/",
      layer1: [
        {
          text: "موتور",
          layer1_Link: "/",
          layer2: [{ text: "موتور کامل برند کوماتسو(کامنز)", link: "/" }],
        },
        {
          text: "قظعات یدکی موتور",
          layer1_Link: "/",
          layer2: [
            { text: "YEM Part", link: "/" },
            { text: "EZOMI", link: "/" },
            { text: "تمام محصولات موتور", link: "/" },
          ],
        },
        {
          text: "پمپ هیدرولیک",
          layer1_Link: "/",
          layer2: [
            { text: "YEM Part", link: "/" },
            { text: "EZOMI", link: "/" },
            { text: "تمام محصولات پمپ مادر", link: "/" },
          ],
        },
        {
          text: "لوازم برقی و سنسور و سوییچ",
          layer1_Link: "/",
          layer2: [
            { text: "YEM Part", link: "/" },
            { text: "EZOMI", link: "/" },
            { text: "تمام محصولات برقی", link: "/" },
          ],
        },
        {
          text: "اورینگ و کاسه نمد",
          layer1_Link: "/",
          layer2: [{ text: "تمام محصولات JEL کره", link: "/" }],
        },
        {
          text: "اکسسوری قطعات ماشین‌آلات و راهسازی",
          layer1_Link: "/",
          layer2: [{ text: "دیداری چین", link: "/" }],
        },
      ],
    },
    {
      title: "ایمنی",
      mainLink: "/",
      layer1: [
        {
          text: "تجهیزات و حفاظت فردی",
          layer1_Link: "/",
          layer2: [
            { text: "لباس", link: "/" },
            { text: "کفش", link: "/" },
            { text: "عینک", link: "/" },
            { text: "دستکش", link: "/" },
            { text: "کلاه", link: "/" },
            { text: "ماسک", link: "/" },
            { text: "کار در ارتفاع", link: "/" },
          ],
        },
        {
          text: "تجهیزات و حفاظت کارگاهی",
          layer1_Link: "/",
          layer2: [
            { text: "تابلو", link: "/" },
            { text: "علائم هشداردهنده", link: "/" },
            { text: "علائم ترافیکی", link: "/" },
            { text: "چراغ خطر", link: "/" },
            { text: "سیستم اطفا", link: "/" },
          ],
        },
        {
          text: "کتاب‌های ایمنی(HSE)",
          layer1_Link: "/",
        },
        {
          text: "اکسسوری ایمنی",
          layer1_Link: "/",
        },
      ],
    },
    {
      title: "فناوری‌های نوین",
      layer1_Link: "/",
    },
  ];
  return categories;
}
