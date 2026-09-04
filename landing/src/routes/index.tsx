import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MapPin,
  Heart,
  X,
  Users,
  Sparkles,
  Compass,
  MessageCircle,
  Star,
  ArrowRight,
  Smartphone,
  Coffee,
  Wine,
  Mountain,
  Apple,
} from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FavDate — Dê match em lugares com seus amigos" },
      {
        name: "description",
        content:
          "FavDate é o app que ajuda você e seus amigos a decidirem onde ir. Deslize, dê match em lugares e descubra os melhores rolês juntos.",
      },
      { property: "og:title", content: "FavDate — Dê match em lugares com seus amigos" },
      {
        property: "og:description",
        content:
          "Chega de 'onde a gente vai?'. Deslize lugares como um app de match, combine com seus amigos e desbloqueie os detalhes do rolê.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Categories />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="grid h-9 w-9 place-items-center rounded-xl text-white shadow-[var(--shadow-glow)]"
        style={{ background: "var(--gradient-coral)" }}
      >
        <Heart className="h-4 w-4 fill-white" />
      </div>
      <span className="font-display text-xl font-bold tracking-tight">
        Fav<span className="text-[var(--coral-deep,oklch(0.66_0.21_12))]">Date</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Recursos</a>
          <a href="#how" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#categories" className="hover:text-foreground transition-colors">Lugares</a>
          <a href="#download" className="hover:text-foreground transition-colors">Baixar</a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          style={{ background: "var(--gradient-coral)" }}
        >
          Baixar app <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 10%, color-mix(in oklab, var(--coral) 35%, transparent), transparent 70%), radial-gradient(50% 50% at 10% 80%, color-mix(in oklab, var(--plum) 35%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[oklch(0.66_0.21_12)]" />
            Novo · Match em grupo já disponível
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            Dê <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >match</span> em lugares,<br />
            não em pessoas.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Chega do eterno “onde a gente vai?”. Com o FavDate, você e seus amigos deslizam lugares e,
            quando todo mundo curte o mesmo, é match — e o rolê aparece com todos os detalhes.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-coral)" }}
            >
              <Smartphone className="h-5 w-5" /> Baixar grátis
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Como funciona
            </a>
          </div>
          <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[0,1,2,3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.7 0.2 ${10 + i*30}), oklch(0.5 0.18 ${300 + i*10}))`,
                  }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-foreground font-semibold">
                <Star className="h-4 w-4 fill-[oklch(0.82_0.16_85)] text-[oklch(0.82_0.16_85)]" /> 4.9
              </div>
              <span>+50 mil amigos já matcharam</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[3rem] blur-3xl opacity-60"
            style={{ background: "var(--gradient-hero)" }}
          />
          <img
            src={heroPhone}
            alt="Tela do app FavDate mostrando um card de lugar com botões de curtir e dispensar"
            width={1280}
            height={1280}
            className="w-full h-auto rounded-[2rem] shadow-[var(--shadow-card)]"
          />
          {/* Floating match chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -left-4 md:-left-12 top-10 rounded-2xl bg-card/95 backdrop-blur border border-border shadow-[var(--shadow-card)] px-4 py-3 flex items-center gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: "var(--gradient-coral)" }}>
              <Heart className="h-4 w-4 fill-white" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">It’s a Match!</div>
              <div className="text-muted-foreground text-xs">Você e Júlia curtiram</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -right-2 md:-right-10 bottom-16 rounded-2xl bg-card/95 backdrop-blur border border-border shadow-[var(--shadow-card)] px-4 py-3 flex items-center gap-3"
          >
            <MapPin className="h-5 w-5 text-[oklch(0.52_0.19_359)]" />
            <div className="text-sm">
              <div className="font-semibold">Sunset Social</div>
              <div className="text-muted-foreground text-xs">Rooftop · 1,2 km</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = ["TechCrunch", "VEJA", "Folha", "Exame", "GQ", "Time Out"];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
        <span className="font-medium">Visto em</span>
        {items.map((i) => (
          <span key={i} className="font-display font-semibold tracking-wide opacity-70 hover:opacity-100 transition-opacity">
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    icon: Users,
    title: "Match em grupo",
    desc: "Crie um grupo com seus amigos e deslizem juntos. Quando todos curtirem o mesmo lugar, é match.",
  },
  {
    icon: Compass,
    title: "Descobertas perto de você",
    desc: "Recomendações inteligentes baseadas em distância, vibe e nos lugares que você já curtiu.",
  },
  {
    icon: Sparkles,
    title: "Detalhes desbloqueados",
    desc: "Ao dar match, libere fotos, cardápio, horários, faixa de preço e avaliações reais.",
  },
  {
    icon: MessageCircle,
    title: "Chat e plano de rolê",
    desc: "Combine o horário, reserve e compartilhe a localização — tudo dentro do app.",
  },
  {
    icon: MapPin,
    title: "Mapa interativo",
    desc: "Veja todos os lugares matchados no mapa e trace a rota mais rápida com um toque.",
  },
  {
    icon: Heart,
    title: "Favoritos pra sempre",
    desc: "Salve seus lugares preferidos e crie listas temáticas pra qualquer ocasião.",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.52_0.19_359)]">Recursos</span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
          Tudo que vocês precisam pra escolher o próximo rolê.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Pensado pra grupos indecisos, casais aventureiros e amigos que amam descobrir o novo.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative rounded-3xl border border-border bg-card p-6 hover:shadow-[var(--shadow-card)] transition-shadow"
          >
            <div
              className="grid h-12 w-12 place-items-center rounded-2xl text-white"
              style={{ background: "var(--gradient-coral)" }}
            >
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Monte seu grupo", desc: "Convide amigos, parceiro ou crew pra deslizar juntos." },
    { n: "02", title: "Deslize lugares", desc: "Curta com ❤ ou dispense com ✕. Simples e divertido." },
    { n: "03", title: "É um match!", desc: "Quando todos curtirem, o lugar abre com todos os detalhes." },
    { n: "04", title: "Bora pro rolê", desc: "Combine no chat e siga pelo mapa direto pro destino." },
  ];
  return (
    <section id="how" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--coral) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.52_0.19_359)]">Como funciona</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Do “sei lá, decide você” ao rolê em 4 passos.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl border border-border bg-card p-6"
            >
              <div
                className="font-display text-5xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                {s.n}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const cats = [
    { icon: Coffee, label: "Cafés aconchegantes", count: "1.2k lugares" },
    { icon: Wine, label: "Bares & rooftops", count: "860 lugares" },
    { icon: Mountain, label: "Aventura ao ar livre", count: "540 trilhas" },
    { icon: Sparkles, label: "Vida noturna", count: "320 spots" },
  ];
  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.52_0.19_359)]">Lugares</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Toda vibe tem o rolê certo.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Do café da manhã às madrugadas, são milhares de lugares curados — atualizados toda semana.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cats.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-border p-6 text-white min-h-[200px] flex flex-col justify-between"
            style={{
              background: `linear-gradient(135deg, oklch(0.6 0.22 ${10 + i*40}), oklch(0.42 0.16 ${300 + i*15}))`,
            }}
          >
            <c.icon className="h-7 w-7 opacity-90" />
            <div>
              <h3 className="text-xl font-semibold">{c.label}</h3>
              <p className="text-sm opacity-80 mt-1">{c.count}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "A gente perdia 40 minutos decidindo onde ir. Agora dura 2 minutos e ninguém reclama.",
      name: "Marina S.",
      role: "Usuária desde 2025",
    },
    {
      quote: "Achei um bar incrível a 3 quadras de casa que eu nunca tinha ouvido falar. Match instantâneo!",
      name: "Pedro L.",
      role: "Usuário desde 2025",
    },
    {
      quote: "Usamos pra planejar a viagem do grupo. Bateu match em 12 lugares — virou nosso roteiro.",
      name: "Ana & Bia",
      role: "Crew de viagem",
    },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl bg-card border border-border p-6"
            >
              <div className="flex gap-0.5 text-[oklch(0.82_0.16_85)]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> · {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div
        className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-white shadow-[var(--shadow-card)]"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{ background: "white" }}
        />
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Pronto pro próximo rolê?
            </h2>
            <p className="mt-4 text-white/85 text-lg max-w-md">
              Baixe o FavDate, chame a galera e descubra o lugar perfeito em segundos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-black/90 backdrop-blur px-5 py-3 text-white hover:bg-black transition-colors"
              >
                <Apple className="h-6 w-6" />
                <span className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider opacity-80">Baixe na</span>
                  <span className="block text-base font-semibold leading-tight">App Store</span>
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-black/90 backdrop-blur px-5 py-3 text-white hover:bg-black transition-colors"
              >
                <Smartphone className="h-6 w-6" />
                <span className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider opacity-80">Disponível no</span>
                  <span className="block text-base font-semibold leading-tight">Google Play</span>
                </span>
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-64 rotate-6">
              <img src={heroPhone} alt="" width={1280} height={1280} className="w-full h-auto rounded-[2rem] shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <Logo />
        <p>© {new Date().getFullYear()} FavDate. Feito com ❤ pra quem ama um bom rolê.</p>
        <div className="flex gap-5">
          <a href="https://favdate.helpia.app.br/privacidade.html" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Privacidade</a>
          <a href="https://favdate.helpia.app.br/termos.html" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Termos</a>
          <a href="https://favdate.helpia.app.br/exclusao-de-conta.html" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Excluir Conta</a>
        </div>
      </div>
    </footer>
  );
}
