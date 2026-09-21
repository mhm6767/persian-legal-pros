import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { useConsultation } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "خدمات وکالت حرفه‌ای | هومن کریمی" }, { name: "description", content: "خدمات وکالت حقوقی، کیفری، ملکی، خانواده، طلاق و مهریه." },
    { property: "og:title", content: "خدمات وکالت حرفه‌ای | هومن کریمی" }, { property: "og:description", content: "هفت حوزه خدمات تخصصی وکالت و مشاوره حقوقی." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

function ServicesPage() { const open = useConsultation(); return <><PageHeading eyebrow="حوزه‌های فعالیت" title="خدمات وکالت حرفه‌ای" description="هر پرونده با بررسی دقیق اسناد، انتخاب راهکار حقوقی مناسب و پیگیری منظم تا پایان مسیر همراه می‌شود."/><section className="py-20"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">{services.map((service,index) => { const Icon=service.icon; return <article key={service.title} className={`border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg ${index===6 ? "md:col-span-2" : ""}`}><div className="flex items-start justify-between gap-5"><span className="grid size-12 shrink-0 place-items-center bg-primary text-gold"><Icon className="size-6"/></span><span className="text-sm font-black text-border">۰{index+1}</span></div><h2 className="mt-6 text-xl font-black text-primary">{service.title}</h2><p className="mt-3 leading-7 text-muted-foreground">{service.description}</p><ul className="mt-6 grid gap-3 sm:grid-cols-3">{service.benefits.map(item=><li key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="size-4 shrink-0 text-gold-dark"/>{item}</li>)}</ul><Button variant="outline" className="mt-7" onClick={open}>جزئیات بیشتر</Button></article>})}</div></section></> }