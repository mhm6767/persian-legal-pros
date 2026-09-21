import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, FileCheck2, Handshake, SearchCheck, Trophy, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConsultation } from "@/components/site-shell";
import { articles } from "@/lib/site-data";
import heroImage from "@/assets/law-hero.jpg";
import articleImage from "@/assets/legal-articles.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "وکیل هومن کریمی | وکیل پایه یک دادگستری" },
    { name: "description", content: "خدمات وکالت و مشاوره حقوقی هومن کریمی با ۲۲ سال تجربه در تهران." },
    { property: "og:title", content: "وکیل هومن کریمی | وکیل پایه یک دادگستری" },
    { property: "og:description", content: "خدمات وکالت و مشاوره حقوقی با ۲۲ سال تجربه." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const problems = [
  [Trophy, "دریافت بیشترین خسارت"],
  [Check, "کسب بهترین نتیجه"],
  [SearchCheck, "ارائه بهترین راهکارهای حقوقی"],
  [FileCheck2, "مطالبه حقوق حداکثری شما"],
  [WalletCards, "کاهش هزینه‌های شما"],
] as const;

const steps = ["مشاوره اولیه", "تحقیق و بررسی دقیق پرونده", "عقد قرارداد", "اتمام پرونده و تحویل نتیجه"];

function HomePage() {
  const openConsultation = useConsultation();
  return <>
    <section className="relative isolate min-h-[690px] overflow-hidden bg-primary">
      <img src={heroImage} width={1920} height={1200} alt="ترازوی عدالت در دفتر وکالت" className="absolute inset-0 -z-20 size-full object-cover object-center" />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[690px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-primary-foreground">
          <div className="mb-7 flex items-center gap-3 text-sm font-bold text-gold"><span className="h-px w-10 bg-gold" />تجربه، تعهد، پیگیری</div>
          <h1 className="text-4xl font-black leading-[1.35] sm:text-6xl lg:text-7xl">وکیل پایه یک دادگستری<br/><span className="text-gold">با ۲۲ سال تجربه</span></h1>
          <p className="mt-7 text-base leading-8 text-primary-foreground/80 sm:text-xl">کسب بهترین نتیجه <span className="mx-2 text-gold">•</span> دریافت بیشترین خسارت <span className="mx-2 text-gold">•</span> کاهش هزینه‌ها</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button size="lg" onClick={openConsultation}>ارسال درخواست مشاوره رایگان</Button><Button asChild size="lg" variant="goldOutline"><Link to="/magazine">مشاهده مقالات <ArrowLeft /></Link></Button></div>
        </div>
      </div>
    </section>

    <section className="border-b border-border bg-background"><div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-4 sm:grid-cols-3 sm:divide-x sm:divide-x-reverse sm:divide-y-0 sm:px-6 lg:px-8">{[["۲۲", "سال سابقه"], ["هزاران", "پرونده موفق"], ["بیش از ۹۵٪", "رضایت موکلان"]].map(([number,label]) => <div className="py-7 text-center" key={label}><strong className="text-2xl text-primary">{number}</strong><span className="mr-2 text-sm text-muted-foreground">{label}</span></div>)}</div></section>

    <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-sm font-bold text-gold-dark">حمایت حقوقی هدفمند</p><h2 className="mt-3 text-3xl font-black text-primary sm:text-5xl">مشکلات حقوقی شما چیست؟</h2><p className="mt-5 leading-8 text-muted-foreground">هر پرونده به بررسی مستقل و راهکاری دقیق نیاز دارد. هدف، روشن کردن مسیر و دفاع مؤثر از حقوق شماست.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-5">{problems.map(([Icon,title], index) => <article key={title} className="group bg-background p-6 transition-colors hover:bg-surface"><span className="text-xs font-bold text-gold-dark">۰{index+1}</span><Icon className="mt-8 size-8 text-primary transition-transform group-hover:-translate-y-1"/><h3 className="mt-5 font-bold leading-7 text-primary">{title}</h3></article>)}</div><Button className="mt-9" size="lg" onClick={openConsultation}>ارسال درخواست مشاوره تخصصی</Button></div></section>

    <section className="bg-primary py-20 text-primary-foreground lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-bold text-gold">مسیر روشن پرونده</p><h2 className="mt-3 text-3xl font-black sm:text-5xl">روش کار ما در ۴ مرحله</h2></div><p className="max-w-md leading-7 text-primary-foreground/65">از نخستین گفت‌وگو تا پایان پرونده، هر مرحله با اطلاع و همراهی شما پیش می‌رود.</p></div><div className="mt-14 grid gap-8 md:grid-cols-4">{steps.map((step,index) => <div key={step} className="relative border-t border-primary-foreground/20 pt-7"><span className="absolute -top-4 right-0 grid size-8 place-items-center bg-gold text-sm font-black text-gold-foreground">{index+1}</span><Handshake className="mt-3 size-7 text-gold"/><h3 className="mt-5 font-bold leading-7">{step}</h3></div>)}</div></div></section>

    <section className="bg-surface py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-bold text-gold-dark">دانش حقوقی کاربردی</p><h2 className="mt-3 text-3xl font-black text-primary sm:text-5xl">مقالات و اخبار حقوقی اخیر</h2></div><Button asChild variant="outline"><Link to="/magazine">مشاهده تمام مقالات <ArrowLeft /></Link></Button></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{articles.map((article,index) => <article key={article.title} className="group overflow-hidden border border-border bg-background"><div className="aspect-[16/10] overflow-hidden"><img src={articleImage} width={1408} height={912} loading="lazy" alt="میز کار حقوقی" className={`size-full object-cover transition-transform duration-500 group-hover:scale-105 ${index % 2 ? "object-right" : "object-left"}`} /></div><div className="p-5"><span className="text-xs font-bold text-gold-dark">{article.category}</span><h3 className="mt-3 min-h-14 font-bold leading-7 text-primary">{article.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{article.description}</p><Link to="/magazine" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">خواندن بیشتر <ArrowLeft className="size-4" /></Link></div></article>)}</div></div></section>
  </>;
}