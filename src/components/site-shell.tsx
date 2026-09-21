import { createContext, useContext, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Menu, Phone, Scale, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";

const ConsultationContext = createContext<() => void>(() => undefined);
export const useConsultation = () => useContext(ConsultationContext);

const links = [
  { to: "/", label: "خانه" },
  { to: "/services", label: "خدمات" },
  { to: "/magazine", label: "مقالات" },
  { to: "/about", label: "درباره" },
  { to: "/contact", label: "تماس" },
] as const;

function Brand() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="خانه وکیل هومن کریمی">
      <span className="grid size-10 shrink-0 place-items-center border border-gold/50 bg-primary text-gold"><Scale className="size-5" /></span>
      <span className="min-w-0 leading-tight"><strong className="block truncate text-lg text-primary">هومن <span className="text-gold-dark">کریمی</span></strong><span className="block text-[10px] text-muted-foreground">وکیل پایه یک دادگستری</span></span>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openConsultation = () => setConsultationOpen(true);

  return (
    <ConsultationContext.Provider value={openConsultation}>
      <div dir="rtl" className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-lg">
          <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:flex lg:px-8">
            <Brand />
            <nav className="mr-auto hidden items-center gap-7 lg:flex" aria-label="ناوبری اصلی">
              {links.map((link) => <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} className="border-b-2 border-transparent py-7 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "border-gold text-primary" }}>{link.label}</Link>)}
            </nav>
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <button type="button" className="text-xs font-bold text-muted-foreground transition-colors hover:text-primary" aria-label="تغییر زبان">FA <span className="mx-1 text-border">/</span> EN</button>
              <Button onClick={openConsultation}>ارسال درخواست مشاوره</Button>
            </div>
            <Button variant="ghost" size="icon" className="shrink-0 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
          {menuOpen && <div className="border-t border-border bg-background px-4 pb-5 lg:hidden"><nav className="grid gap-1 py-3">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)} className="border-r-2 border-transparent px-4 py-3 text-sm font-semibold text-muted-foreground" activeProps={{ className: "border-gold bg-muted text-primary" }}>{link.label}</Link>)}</nav><Button className="w-full" onClick={() => { setMenuOpen(false); openConsultation(); }}>ارسال درخواست مشاوره</Button></div>}
        </header>
        <main>{children}</main>
        <footer className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
            <div><div className="flex items-center gap-3"><span className="grid size-11 place-items-center border border-gold/50 text-gold"><Scale /></span><div><strong className="text-xl">هومن کریمی</strong><p className="text-xs text-primary-foreground/65">وکیل پایه یک دادگستری</p></div></div><p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/65">ارائه خدمات وکالت و مشاوره حقوقی با تکیه بر تجربه، تحلیل دقیق و پیگیری مسئولانه.</p></div>
            <div><h2 className="font-bold text-gold">دسترسی سریع</h2><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-primary-foreground/70">{links.map((link) => <Link key={link.to} to={link.to} className="transition-colors hover:text-gold">{link.label}</Link>)}</div></div>
            <div><h2 className="font-bold text-gold">ارتباط با دفتر</h2><div className="mt-4 space-y-3 text-sm text-primary-foreground/70"><a href="tel:+989121094082" className="flex items-center gap-2 hover:text-gold"><Phone className="size-4" />۰۹۱۲۱۰۹۴۰۸۲</a><a href="mailto:info@homayounkarimi.com" className="flex items-center gap-2 hover:text-gold"><Mail className="size-4" />info@homayounkarimi.com</a><p className="leading-7">تهران، نیاوران، مجتمع تجاری اداری نیاوران سنتر، واحد ۳۰۴</p></div></div>
          </div>
          <div className="border-t border-primary-foreground/10"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-xs text-primary-foreground/50 sm:px-6 lg:px-8"><span>© ۱۴۰۵ وکیل هومن کریمی</span><div className="flex gap-3"><a href="#" aria-label="اینستاگرام" className="hover:text-gold"><Instagram className="size-4" /></a><a href="#" aria-label="لینکدین" className="hover:text-gold"><Linkedin className="size-4" /></a></div></div></div>
        </footer>
        <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
      </div>
    </ConsultationContext.Provider>
  );
}