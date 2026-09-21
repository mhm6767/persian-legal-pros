import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ConsultationDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={(next) => { onOpenChange(next); if (!next) setSubmitted(false); }}>
      <DialogContent dir="rtl" className="max-h-[90vh] overflow-y-auto border-gold/30 sm:max-w-xl">
        {submitted ? (
          <div className="grid min-h-72 place-items-center text-center">
            <div>
              <CheckCircle2 className="mx-auto size-14 text-gold" />
              <DialogTitle className="mt-5 text-2xl text-primary">درخواست شما ثبت شد</DialogTitle>
              <DialogDescription className="mx-auto mt-3 max-w-sm leading-7">
                اطلاعات شما دریافت شد. برای هماهنگی زمان مشاوره با شما تماس گرفته می‌شود.
              </DialogDescription>
              <Button className="mt-6" onClick={() => onOpenChange(false)}>بستن</Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="text-right sm:text-right">
              <p className="text-xs font-bold text-gold">درخواست مشاوره</p>
              <DialogTitle className="text-2xl text-primary">شرح کوتاهی از موضوع خود بنویسید</DialogTitle>
              <DialogDescription className="leading-7">اطلاعات شما محرمانه می‌ماند و فقط برای بررسی اولیه استفاده می‌شود.</DialogDescription>
            </DialogHeader>
            <form className="mt-2 grid gap-4" onSubmit={submit}>
              <label className="grid gap-2 text-sm font-semibold text-foreground">نام و نام خانوادگی<Input required placeholder="نام شما" /></label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">شماره تماس<Input required inputMode="tel" placeholder="۰۹۱۲..." dir="rtl" /></label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">موضوع پرونده<Input required placeholder="برای مثال: دعوای ملکی" /></label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">توضیحات<Textarea required className="min-h-28" placeholder="خلاصه موضوع و پرسش خود را بنویسید" /></label>
              <Button size="lg" type="submit" className="mt-2 w-full">ثبت درخواست مشاوره</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}