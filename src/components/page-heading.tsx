export function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-heading">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-sm font-bold text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-primary sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </section>
  );
}