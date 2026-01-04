"use client";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="relative mx-auto max-w-7xl px-6">
        <Hero />

        <Section
          id="how"
          title="How OPR + OPRX work together"
                    subtitle="Secure PoW settlement on L1. Fast execution on L2. Two layers. One clean system."
          >

          <HowItWorks />
        </Section>

        <Section
          id="get-started"
          title="Get started"
          subtitle= "Run an OPR node, then point your miner at your RPC. We’ll replace the placeholders with official release links closer to launch."
        >
          <GetStarted />
        </Section>

        <Section
          id="roadmap"
          title="Roadmap"
          subtitle="Clear milestones. Transparent progress. Practical execution."
            >

          <Roadmap />
        </Section>

        <Footer />
      </div>
    </main>
  );
}

/* ---------- layout helpers ---------- */

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-24 md:mt-32">
      {/* removed ring; added gradient + shadow so it feels like a real section card */}
      <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-7 md:p-10 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{title}</h2>
            {subtitle ? <p className="mt-2 max-w-2xl text-slate-300">{subtitle}</p> : null}
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap gap-2 text-xs text-slate-300">
            <Pill>OPR: PoW Settlement</Pill>
            <Pill>OPRX: Fast Execution</Pill>
            <Pill>Explorer + Testnet next</Pill>
          </div>
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
      {children}
    </span>
  );
}

/* ---------- header ---------- */

function Header() {
  const [logoOk, setLogoOk] = React.useState(true);

  return (
    <header className="sticky top-0 z-30 bg-black/45 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          {/* Emblem */}
          <div className="h-14 w-14 md:h-14 md:w-14 rounded-2xl overflow-hidden ring-1 ring-orange-400/30 bg-black/60 grid place-items-center">

            {logoOk ? (
              <img
                src="/openrange-emblem.png"
                alt="Open Range emblem"
                className="h-full w-full object-cover"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <span className="font-bold text-orange-300">OR</span>
            )}
          </div>

          <div>
            <div className="text-sm font-semibold text-white leading-tight">Open Range</div>
            <div className="text-xs text-slate-400 leading-tight">OPR (L1) • OPRX (L2)</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a className="hover:text-white" href="#how">
            How it works
          </a>
          <a className="hover:text-white" href="#get-started">
            Get started
          </a>
          <a className="hover:text-white" href="#roadmap">
            Roadmap
          </a>
        </nav>

        <div className="flex gap-2">
          <a
            href="#get-started"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400"
          >
            Run a Node
          </a>
          <a
            href="#get-started"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 ring-1 ring-white/10"
          >
            Start Mining
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section id="top" className="pt-20 md:pt-28 pb-14 md:pb-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-4 py-1 text-xs text-orange-200 ring-1 ring-orange-400/20">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            Live PoW chain • L1 + L2
          </span>

       <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
        Proof-of-Work
        <span className="block text-slate-300">Done Right!</span>
        </h1>


          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
            Open Range is a two-layer system designed for{" "}
            <span className="text-white font-semibold">security</span>,{" "}
            <span className="text-white font-semibold">scalability</span>, and{" "}
            <span className="text-white font-semibold">clarity</span>.
            <br />
            <span className="text-white font-semibold">OPR</span> anchors the network with Proof-of-Work, while{" "}
            <span className="text-white font-semibold">OPRX</span> enables fast execution for{" "}
            <span className="text-white font-semibold">DeFi</span> and{" "}
            <span className="text-white font-semibold">peer-to-peer transactions</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#get-started"
              className="glow rounded-2xl bg-orange-500 px-6 py-4 text-black font-semibold hover:bg-orange-400"
            >
              Get started
            </a>
            <a
              href="#how"
              className="rounded-2xl bg-white/10 px-6 py-4 text-white font-semibold hover:bg-white/20 ring-1 ring-white/10"
            >
              Learn How it Works
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <MiniStat k="Consensus" v="Proof-of-Work (OPR)" />
            <MiniStat k="Execution" v="Fast L2 (OPRX)" />
            <MiniStat k="Supply" v="50M cap (OPR)" />
            <MiniStat k="Blocks" v="~3 minutes target" />
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-7 md:p-9 backdrop-blur shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-white">Network Snapshot</div>
            <div className="text-xs text-slate-300">dev/local now • testnet next</div>
          </div>

          <div className="mt-6 rounded-3xl bg-black/25 p-6">
            <div className="text-xs text-slate-300">OPR → OPRX Flow</div>
            <div className="mt-3 grid gap-3">
              <FlowRow left="OPR (L1)" mid="Deposit" right="OPRX (L2)" />
              <FlowRow left="Mine PoW" mid="Settle" right="Fast Tx / DeFi" />
              <FlowRow left="Security" mid="Withdraw" right="Execution" />
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-black/30 p-5">
            <div className="text-xs text-slate-300">One-liner for X</div>
            <div className="mt-2 text-sm text-white">
              Open Range is Live PoW (OPR) + a Fast L2 (OPRX). Explorer + Public Testnet next.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4">
      <div className="text-xs text-slate-400">{k}</div>
      <div className="mt-1 text-sm font-semibold text-white">{v}</div>
    </div>
  );
}

function FlowRow({ left, mid, right }: { left: string; mid: string; right: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-black/25 px-4 py-3">
      <span className="text-sm font-semibold text-white">{left}</span>
      <span className="text-xs rounded-full bg-orange-500/20 px-3 py-1 text-orange-200 ring-1 ring-orange-400/20">
        {mid}
      </span>
      <span className="text-sm font-semibold text-white">{right}</span>
    </div>
  );
}


/* ---------- sections ---------- */

function HowItWorks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Step
        n="01"
        title="Mine & Secure OPR (L1)"
        text="OPR Stays Focused on PoW Security and Settlement. Stable Block Production, Fair Mining, Simple Core Layer."
      />
      <Step
        n="02"
        title="Move Value into OPRX (L2)"
        text="Deposit/Bridge into OPRX to Unlock Low-Cost Transfers, Swaps, and DeFi Activity at High Speed."
      />
      <Step
        n="03"
        title="Withdraw Back to PoW Settlement"
        text="When You Need L1 Settlement, Withdraw Back to OPR — Anchored by PoW Finality."
      />

      <div className="md:col-span-3 rounded-3xl bg-black/25 p-6">
        <div className="text-sm font-semibold text-white">Simple mental model</div>
        <p className="mt-2 text-slate-300">
          <span className="font-semibold text-white">OPR</span> = Secure settlement •{" "}
          <span className="font-semibold text-white">OPRX</span> = fast execution for DeFi.
        </p>
      </div>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/5 p-6">
      <div className="text-xs font-semibold text-orange-300">{n}</div>
      <div className="mt-2 text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-slate-300 leading-relaxed">{text}</div>
    </div>
  );
}

/* ---------- Get Started (soft-block builder commands) ---------- */

function GetStarted() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* calm testnet notice inside this section */}
      <div className="md:col-span-2 rounded-2xl bg-orange-500/10 p-4 ring-1 ring-orange-400/20">
        <div className="text-sm font-semibold text-orange-200">Testnet notice</div>
        <p className="mt-1 text-sm text-slate-200">
          Open Range is in <span className="font-semibold text-white">testnet development</span>. These instructions are
          for builders testing locally. Official downloads + verified releases will be posted with public testnet.
        </p>
      </div>

      <BuildCard
        title="Run a node"
        desc="Builder instructions (testnet/dev). Replace the repo link with your official GitHub when ready."
        code={`git clone https://github.com/<YOUR_ORG>/openrange-chain.git
cd openrange-chain
SKIP_WASM_BUILD=1 cargo build -p solochain-template-node --release
./target/release/solochain-template-node --dev --execution Native --tmp --rpc-external --unsafe-rpc-external`}
        foot={
          <>
            RPC example: <span className="text-white">ws://127.0.0.1:9944</span>
          </>
        }
      />

      <BuildCard
        title="Start mining"
        desc="Builder instructions (testnet/dev). Replace placeholder commands with your official miner package when ready."
        code={`export OPR_RPC="ws://127.0.0.1:9944"
cd openrange-miner
npm i
node miner.js --ws $OPR_RPC`}
        foot={<></>}
      />

      <div className="md:col-span-2 rounded-3xl bg-black/25 p-6">
        <div className="text-sm font-semibold text-white">What’s next</div>
        <p className="mt-2 text-slate-300">
          We’ll add real download buttons (Linux/Windows), checksums, and quick-start scripts once your release builds
          are ready.
        </p>
      </div>
    </div>
  );
}

function BuildCard({
  title,
  desc,
  code,
  foot,
}: {
  title: string;
  desc: string;
  code: string;
  foot?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white/5 p-6">
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>

      <details className="mt-4 group">
        <summary className="cursor-pointer select-none rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20 ring-1 ring-white/10">
          Show builder instructions
        </summary>

        <div className="mt-4">
          <CodeBlock code={code} />
          {foot ? <div className="mt-3 text-xs text-slate-400">{foot}</div> : null}
        </div>
      </details>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-2xl bg-black/40 p-4 text-xs text-slate-200 ring-1 ring-white/10">
      <code>{code}</code>
    </pre>
  );
}

function Roadmap() {
  const items = [
    { title: "Explorer v1", text: "Public explorer with blocks, transactions, and network stats." },
    { title: "Public testnet", text: "Docs + faucet + packaged node/miner for the community." },
    { title: "OPRX plumbing", text: "Deposit/mint/withdraw flow + relayer hardening." },
    { title: "DeFi apps", text: "Swap UI + charts + bridge UI + staking dashboard." },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((i) => (
        <div key={i.title} className="rounded-3xl bg-white/5 p-6">
          <div className="text-lg font-semibold text-white">{i.title}</div>
          <div className="mt-2 text-slate-300">{i.text}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- footer ---------- */

function Footer() {
  return (
    <footer className="mt-24 pb-16">
      <div className="rounded-3xl bg-black/25 p-8 backdrop-blur shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Open Range</div>
            <div className="mt-1 text-xs text-slate-400">OPR (L1 PoW) • OPRX (L2 fast execution)</div>
          </div>

          <div className="text-xs text-slate-500">© {new Date().getFullYear()} Open Range</div>
        </div>
      </div>
    </footer>
  );
}
