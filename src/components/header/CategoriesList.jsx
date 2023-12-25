import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import BlenderIcon from "@mui/icons-material/Blender";
import ScaleRoundedIcon from "@mui/icons-material/ScaleRounded";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HotelIcon from "@mui/icons-material/Hotel";
import HeatPumpOutlinedIcon from "@mui/icons-material/HeatPumpOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import HeadphonesBatteryOutlinedIcon from "@mui/icons-material/HeadphonesBatteryOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import MouseIcon from "@mui/icons-material/Mouse";
import TvIcon from "@mui/icons-material/Tv";
import WatchIcon from "@mui/icons-material/Watch";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SdIcon from "@mui/icons-material/Sd";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import Battery6BarRoundedIcon from "@mui/icons-material/Battery6BarRounded";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import CableIcon from "@mui/icons-material/Cable";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import { GiLargeDress } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { FaTshirt } from "react-icons/fa";
import { BsSunglasses } from "react-icons/bs";
import { GiCampingTent } from "react-icons/gi";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { MdBackpack } from "react-icons/md";
import { TbPerfume } from "react-icons/tb";
import KitchenIcon from "@mui/icons-material/Kitchen";
import { TbLighter } from "react-icons/tb";
import { IoTelescopeSharp } from "react-icons/io5";
import { GiBarbecue } from "react-icons/gi";
import { TbShirtSport } from "react-icons/tb";
import { GiFlatTire } from "react-icons/gi";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import PedalBikeRoundedIcon from "@mui/icons-material/PedalBikeRounded";
import RollerSkatingRoundedIcon from "@mui/icons-material/RollerSkatingRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import { MdOutlineToys } from "react-icons/md";
import { MdOutlineSports } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { FaPenClip } from "react-icons/fa6";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CarpenterOutlinedIcon from '@mui/icons-material/CarpenterOutlined';
import BatterySaverOutlinedIcon from '@mui/icons-material/BatterySaverOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import LensOutlinedIcon from '@mui/icons-material/LensOutlined';
import { TbSettingsCog } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdOutlineSafetyDivider } from "react-icons/md";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import GppGoodIcon from '@mui/icons-material/GppGood';
export default function CategoriesList() {
  const categories = [
    {
      title: "خانه و آشپزخانه",
      mainLink: "/",
      layer1: [
        {
          text: "صوتی و تصویری",
          icon: <KeyboardVoiceIcon />,

          layer1_Link: "/",
          layer2: [
            { text: "نمایشگر تبلیغاتی", link: "/" },
            { text: "ویدیو پروژکتور", link: "/" },
            { text: "ساندبار ", link: "/" },
            { text: "اندروید باکس ", link: "/" },
            { text: "گیرنده دیجیتال", link: "/" },
          ],
        },
        {
          text: " لوازم برقی و خانگی ",
          icon: <BlenderIcon />,
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
          icon: <ScaleRoundedIcon />,
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
          icon: <CoffeeMakerOutlinedIcon />,
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
          icon: <HotelIcon />,
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
          icon: <BathtubOutlinedIcon />,
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
          icon: <HeatPumpOutlinedIcon />,
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
          icon: <CleaningServicesOutlinedIcon />,
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
          icon: <RestaurantOutlinedIcon />,
          layer1_Link: "/",
        },
        {
          text: "اکسسوری خانه و آشپزخانه",
          icon: <QueryBuilderOutlinedIcon />,
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
          icon: <PhoneIphoneOutlinedIcon />,
          layer1_Link: "/",
          layer2: [
            { text: "موبایل خاص", link: "/" },
            { text: "تبلت", link: "/" },
          ],
        },
        {
          text: " لوازم جانبی موبایل و تبلت ",
          icon: <HeadphonesBatteryOutlinedIcon />,
          layer1_Link: "/",
          layer2: [
            { text: "شارژر", link: "/" },
            { text: "گاردو گلس", link: "/" },
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
          icon: <LaptopOutlinedIcon />,
          layer1_Link: "/",
          layer2: [
            { text: "اقتصادی", link: "/" },
            { text: "گیمینگ", link: "/" },
            { text: "دانشجویی", link: "/" },
          ],
        },
        {
          text: "لوازم جانبی لپ‌تاپ و کامپیوتر",
          icon: <MouseIcon />,
          layer1_Link: "/",
          layer2: [
            { text: "موس و پد موس", link: "/" },
            { text: "کیبورد", link: "/" },
            { text: "دانگل wifi", link: "/" },
            { text: "کول‌پد", link: "/" },
            { text: "اسپیکر و کیف حمل", link: "/" },
            { text: "کاور", link: "/" },
          ],
        },
        {
          text: "ساعت و مچ‌بند هوشمند",
          icon: <WatchIcon />,
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
          icon: <TvIcon />,
          layer1_Link: "/",
          layer2: [
            { text: "پروژکتور پرتابل", link: "/" },
            { text: "پروژکتور لیزری", link: "/" },
            { text: "تلویزیون تبلیغاتی", link: "/" },
          ],
        },
        {
          text: "هدفون، هدست و میکروفون",
          icon: <HeadphonesOutlinedIcon />,

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
          icon: <VolumeUpIcon />,
          layer2: [
            { text: "خانگی", link: "/" },
            { text: "قابل حمل", link: "/" },
          ],
        },
        {
          text: "هارد و فلش",
          layer1_Link: "/",
          icon: <SdIcon />,
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
          icon: <PhotoCameraIcon />,
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
          icon: <SportsEsportsIcon />,
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
          icon: <WifiIcon />,
          layer2: [
            { text: "دوربین وایرلس", link: "/" },
            { text: "دزدگیر وایرلس", link: "/" },
          ],
        },
        {
          text: "مودم، پرینتر و تلفن",
          icon: <LocalPrintshopRoundedIcon />,
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
          icon: <Battery6BarRoundedIcon />,
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
          icon: <SanitizerIcon />,
          layer1_Link: "/",
          layer2: [
            { text: "کرم پودر", link: "/" },
            { text: "پنکک", link: "/" },
            { text: "ریمل و خط چشم", link: "/" },
            { text: "لاک و رژ لب", link: "/" },
            { text: "خط لب و مداد چشم", link: "/" },
            { text: "سایه ابرو و مژه مصنوعی", link: "/" },
            { text: "سایه چشم و ناخن مصنوعی", link: "/" },
            { text: "فرمژه و کانسیلر", link: "/" },
            { text: "ست مانیکور و پدیکور", link: "/" },
            { text: "براش و شانه و برس", link: "/" },
            { text: "پد آرایش", link: "/" },
          ],
        },
        {
          text: "مراقبت پوست و مو",
          layer1_Link: "/",
          icon: <CleanHandsIcon />,
          layer2: [
            { text: "شامپو و ماسک مو", link: "/" },
            { text: "آبرسان", link: "/" },
            { text: "نرم‌کننده و مام زیر بغل", link: "/" },
            { text: "کرم و موم موبر", link: "/" },
            { text: "ضد آفتاب و کرم زیر چشم", link: "/" },
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
          icon: <ChildFriendlyIcon />,
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
            { text: "سرویس غذاخوری کودک و  غذاساز کودک", link: "/" },
          ],
        },
        {
          text: "عطر و ادکلن",
          icon: <TbPerfume style={{ fontSize: "24px" }} />,
          layer1_Link: "/",
          layer2: [
            { text: "اسپری بدن", link: "/" },
            { text: "بادی اسپلش", link: "/" },
            { text: "عطر و ادکلن", link: "/" },
          ],
        },
        {
          text: "لوازم شخصی برقی",
          icon: <CableIcon />,
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
          icon: <LocalHospitalIcon />,
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
          icon: <MedicationLiquidIcon />,
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
          icon: <FaTshirt style={{ fontSize: "24px" }} />,
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
          icon: <GiLargeDress style={{ fontSize: "24px" }} />,
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
          icon: <LuBaby style={{ fontSize: "24px" }} />,
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
          icon: <BsSunglasses style={{ fontSize: "24px" }} />,
          layer1_Link: "/",
          layer2: [
            { text: "کمربند", link: "/" },
            { text: "عینک", link: "/" },
            { text: "ساعت", link: "/" },
            { text: "جاکارتی", link: "/" },
            {
              text: "آویز(گردنبند، دست‌بند، پیرسینگ،انگشتر و ...)",
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
          icon: <FaSuitcaseRolling style={{ fontSize: "24px" }} />,
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
            { text: " نئو و زیرانداز", link: "/" },
            { text: "تشک بادی", link: "/" },
            { text: "کلمن", link: "/" },
            { text: "میز و صندلی", link: "/" },
          ],
        },
        {
          text: "کوهنوردی و کمپینگ",
          layer1_Link: "/",
          icon: <GiCampingTent style={{ fontSize: "24px" }} />,
          layer2: [
            { text: "چاقو و ابزار چندکاره", link: "/" },
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
          icon: <MdBackpack style={{ fontSize: "24px" }} />,
          layer2: [
            { text: "کوله تاکتیکال", link: "/" },
            { text: "کوله پشتی", link: "/" },
            { text: "چمدان و ساک", link: "/" },
          ],
        },
        {
          text: "یخچال پرتابل (قابل حمل)",
          icon: <KitchenIcon />,
          layer1_Link: "/",
          layer2: [
            { text: "خودرویی", link: "/" },
            { text: "کمپی", link: "/" },
          ],
        },
        {
          text: "فندک و لوازم جانبی",
          layer1_Link: "/",
          icon: <TbLighter style={{ fontSize: "24px" }} />,
          layer2: [
            { text: "فندک اتمی، سنگی و بنزینی", link: "/" },
            { text: "اسپارکر", link: "/" },
            { text: "کبریت چندبار مصرف", link: "/" },
          ],
        },
        {
          text: "دوربین‌های شکاری و تلسکوپ",
          layer1_Link: "/",
          icon: <IoTelescopeSharp style={{ fontSize: "24px" }} />,
          layer2: [
            { text: "دوربین شکاری، دوچشمی و تک چشمی", link: "/" },
            { text: "تلسکوپ مستقیم، بازتابی", link: "/" },
          ],
        },
        {
          text: "اکسسوری کمپینگ و سفر",
          layer1_Link: "/",
          icon: <GiBarbecue style={{ fontSize: "24px" }} />,
          layer2: [
            { text: "کلاه و هدبند", link: "/" },
            { text: "برچسب", link: "/" },
            { text: "باربیکیو و سه پایه آتش", link: "/" },
            { text: "آفتابه مسافرتی", link: "/" },
            { text: "کیف نظم دهنده", link: "/" },
            { text: "گالن آب", link: "/" },
          ],
        },
        {
          text: "لوازم خودرو",
          layer1_Link: "/",
          icon: <GiFlatTire style={{ fontSize: "24px" }} />,
        },
      ],
    },
    {
      title: "ورزش و سرگرمی",
      mainLink: "/",
      layer1: [
        {
          text: "پوشاک ورزشی",
          icon: <TbShirtSport style={{ fontSize: "24px" }} />,
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
                { text: "دستکش و هدبند", link: "/" },
                { text: "زانوبند و مچ‌بند", link: "/" },
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
          icon: <FitnessCenterRoundedIcon />,
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
          icon: <PedalBikeRoundedIcon />,
          layer2: [
            { text: "تاشو وهیبریدی", link: "/" },
            { text: "شهری", link: "/" },
          ],
        },
        {
          text: "اسکیت و اسکوتر",
          layer1_Link: "/",
          icon: <RollerSkatingRoundedIcon />,
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
          icon: <MdOutlineToys style={{ fontSize: "24px" }} />,
          layer2: [
            { text: "عروسک", link: "/" },
            { text: "ماشین کنترلی", link: "/" },
            { text: "تفنگ آبی و ساچمه پلاستیکی", link: "/" },
          ],
        },
        {
          text: "بازی‌های فکری",
          layer1_Link: "/",
          icon: <ExtensionRoundedIcon />,
          layer2: [
            { text: "گروهی", link: "/" },
            { text: "پازل", link: "/" },
            { text: "مکعب روبیک", link: "/" },
          ],
        },
        {
          text: "اکسسوری ورزش و سرگرمی",
          layer1_Link: "/",
          icon: <MdOutlineSports style={{ fontSize: "24px" }} />,
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
          icon: <MdMenuBook style={{ fontSize: "24px" }} />,
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
          icon: <FaPenClip style={{ fontSize: "18px" }} />,
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
          icon: <BrushOutlinedIcon />,
          layer2: [{ text: "صنایع دستی", link: "/" }],
        },
        {
          text: "اکسسوری شهر کتاب",
          layer1_Link: "/",
          icon: <ColorLensOutlinedIcon />,
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
          icon:< HandymanOutlinedIcon/>,
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
          icon:< BuildOutlinedIcon/>,
          layer2: [
            { text: "پیچ گوشتی", link: "/" },
            { text: "انبرها", link: "/" },
            { text: "آچارها", link: "/" },
          ],
        },
        {
          text: "تجهیزات الکتریکی",
          layer1_Link: "/",
          icon:<BatterySaverOutlinedIcon/>,
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
          icon:<CarpenterOutlinedIcon/>,
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
          icon:<HomeRepairServiceOutlinedIcon/>,
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
          icon:<SettingsOutlinedIcon/>,
          layer2: [{ text: "موتور کامل برند کوماتسو(کامنز)", link: "/" }],
        },
        {
          text: "قطعات یدکی موتور",
          layer1_Link: "/",
          icon:< RoomPreferencesOutlinedIcon />,
          layer2: [
            { text: "YEM Part", link: "/" },
            { text: "EZOMI", link: "/" },
            { text: "تمام محصولات موتور", link: "/" },
          ],
        },
        {
          text: "پمپ هیدرولیک",
          layer1_Link: "/",
          icon:<TbSettingsCog style={{fontSize:'24px'}}/>,
          layer2: [
            { text: "YEM Part", link: "/" },
            { text: "EZOMI", link: "/" },
            { text: "تمام محصولات پمپ مادر", link: "/" },
          ],
        }, 
        {
          text: "لوازم برقی، سنسور و سوییچ",
          layer1_Link: "/",
          icon:<ElectricalServicesOutlinedIcon/>,
          layer2: [
            { text: "YEM Part", link: "/" },
            { text: "EZOMI", link: "/" },
            { text: "تمام محصولات برقی", link: "/" },
          ],
        },
        {
          text: "اورینگ و کاسه نمد",
          layer1_Link: "/",
          icon:< LensOutlinedIcon/>,
          layer2: [{ text: "تمام محصولات JEL کره", link: "/" }],
        },
        {
          text: "اکسسوری قطعات ماشین‌آلات و راهسازی",
          icon:<AgricultureOutlinedIcon/>,
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
          icon:<FaHelmetSafety style={{fontSize:'20px'}}/>,
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
          icon:<MdOutlineSafetyDivider style={{fontSize:'24px'}} />,
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
          icon:<AutoStoriesOutlinedIcon/>
        },
        {
          text: "اکسسوری ایمنی",
          layer1_Link: "/",
          icon:<GppGoodIcon/>,
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
