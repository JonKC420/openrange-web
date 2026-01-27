"use client";
import React from "react";

const MAINNET_LAUNCH = "Friday • Jan 30, 2026 • 8:00 PM CT";

// Update these when ready (safe to leave as placeholders tonight)
const LINKS = {
  discord: "https://discord.gg/kHYVVryA",
  github: "https://github.com/JonKC420",
  x: "https://x.com/", // <-- put your X profile link here
  explorer: "#", // e.g. https://explorer.openrange.xyz
  rpcWs: "#", // e.g. wss://rpc.openrange.xyz
  rpcHttp: "#", // e.g. https://rpc.openrange.xyz
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="relative mx-auto max-w-7xl px-6">
        <Hero />

        <Section
          id="economics"
          title="Economics"
          subtitle="Transparent incentives. Built for miners, sustainable for the network."
        >
          <Economics />
        </Section>

        <Section
          id="how"
          title="How OPR + OPRX work together"
          subtitle="Secure PoW settlement on L1. Fast execution on L2. Two layers. One clean system."
        >
          <HowItWorks />
        </Section>

        <Section
          id="testing"
          title="Stress testing & performance"
          subtitle="We build under load first — then publish receipts."
        >
          <TestingResults />
        </Section>

        <Section
          id="get-started"
          title="Get started"
          subtitle="Node + miner guides will be published as copy/paste scripts for mainnet. Placeholders below will be replaced with verified release links during launch week."
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
      <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-7 md:p-10 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 max-w-2xl text-slate-300">{subtitle}</p>
            ) : null}
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap gap-2 text-xs text-slate-300">
            <Pill>PoW Settlement (OPR)</Pill>
            <Pill>Fast Execution (OPRX)</Pill>
            <Pill>Mainnet: {MAINNET_LAUNCH}</Pill>
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
            <div className="text-sm font-semibold text-white leading-tight">
              Open Range
            </div>
            <div className="text-xs text-slate-400 leading-tight">
              OPR (L1) • OPRX (L2)
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a className="hover:text-white" href="#economics">
            Economics
          </a>
          <a className="hover:text-white" href="#how">
            How it works
          </a>
          <a className="hover:text-white" href="#testing">
            Testing
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
            Mainnet launches • {MAINNET_LAUNCH}
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
            <span className="text-white font-semibold">OPR</span> anchors the
            network with Proof-of-Work, while{" "}
            <span className="text-white font-semibold">OPRX</span> enables fast
            execution for{" "}
            <span className="text-white font-semibold">DeFi</span> and{" "}
            <span className="text-white font-semibold">
              peer-to-peer transactions
            </span>
            .
          </p>

          <div className="mt-6 rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white">
              🚀 Launch-week readiness
            </div>
            <div className="mt-1 text-sm text-slate-300">
              Production servers are deployed (bootnode + RPC/explorer). We’re
              finalizing mainnet config, verifying fee pots, and preparing
              copy/paste tutorials for nodes and miners.
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#get-started"
              className="glow rounded-2xl bg-orange-500 px-6 py-4 text-black font-semibold hover:bg-orange-400"
            >
              Get started
            </a>
            <a
              href="#economics"
              className="rounded-2xl bg-white/10 px-6 py-4 text-white font-semibold hover:bg-white/20 ring-1 ring-white/10"
            >
              View Economics
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <MiniStat k="Consensus" v="Proof-of-Work (OPR)" />
            <MiniStat k="Mining" v="CPU/GPU friendly" />
            <MiniStat k="Supply" v="56M cap (OPR)" />
            <MiniStat k="Blocks" v="~3 minutes target" />
          </div>
        </div>

        {/* Right card */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-7 md:p-9 backdrop-blur shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-white">
              Network Snapshot
            </div>
            <div className="text-xs text-slate-300"></div>
          </div>

          <div className="mt-6 rounded-3xl bg-black/25 p-6">
            <div className="mb-3 text-sm font-semibold text-white">
              Settlement → Execution
            </div>

            <div className="grid gap-3">
              <FlowRow left="OPR (L1)" mid="Deposit" right="OPRX (L2)" />
              <FlowRow left="Mine PoW" mid="Settle" right="Fast Tx / DeFi" />
              <FlowRow left="Security" mid="Withdraw" right="Execution" />
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-black/30 p-5">
            <div className="text-sm font-semibold text-white">
              What’s live / what’s next
            </div>
            <div className="mt-2 text-sm text-slate-300 leading-relaxed">
              <span className="text-white font-semibold">OPR (L1)</span> is the
              PoW settlement layer.{" "}
              <span className="text-white font-semibold">OPRX (L2)</span> is the
              fast execution layer planned for DeFi and high-speed activity.
              <div className="mt-3">
                Next up: publish verified downloads + public RPC/explorer
                endpoints, then lock in final mainnet configuration.
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            <Pill>Bootnode + RPC servers deployed</Pill>
            <Pill>Docs & scripts coming this week</Pill>
            <Pill>Mainnet countdown</Pill>
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

function FlowRow({
  left,
  mid,
  right,
}: {
  left: string;
  mid: string;
  right: string;
}) {
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

function Economics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Step
        n="01"
        title="Fixed supply"
        text="OPR has a capped supply (56M). Emissions follow a transparent schedule designed for long-term sustainability."
      />
      <Step
        n="02"
        title="Mining incentives"
        text="PoW secures the base layer. Designed to remain accessible to everyday miners (CPU/GPU)."
      />
      <Step
        n="03"
        title="Fee pots"
        text="Transaction fees flow through on-chain accounting and are distributed by protocol (miners / stakers / burn)."
      />

      <div className="md:col-span-3 rounded-3xl bg-black/25 p-6 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white">
          Launch-week disclosure
        </div>
        <p className="mt-2 text-slate-300">
          Before mainnet goes live we will publish the finalized fee split
          percentages and verify pot behavior on-chain with real transactions.
        </p>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Step
        n="01"
        title="Mine & Secure OPR (L1)"
        text="OPR stays focused on PoW security and settlement. Stable block production, fair mining, simple core layer."
      />
      <Step
        n="02"
        title="Move value into OPRX (L2)"
        text="Deposit/bridge into OPRX to unlock low-cost transfers, swaps, and DeFi activity at high speed."
      />
      <Step
        n="03"
        title="Withdraw back to PoW settlement"
        text="When you need L1 settlement, withdraw back to OPR — anchored by PoW finality."
      />

      <div className="md:col-span-3 rounded-3xl bg-black/25 p-6">
        <div className="text-sm font-semibold text-white">Simple mental model</div>
        <p className="mt-2 text-slate-300">
          <span className="font-semibold text-white">OPR</span> = secure
          settlement •{" "}
          <span className="font-semibold text-white">OPRX</span> = fast
          execution for DeFi.
        </p>
      </div>
    </div>
  );
}

function TestingResults() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Step
        n="01"
        title="Throughput under load"
        text="Internal stress tests validated high transaction throughput while maintaining stable block production."
      />
      <Step
        n="02"
        title="Mempool control"
        text="Even when pending transactions build up, the pool clears rapidly once blocks are produced and tuned correctly."
      />
      <Step
        n="03"
        title="Production infrastructure"
        text="Dedicated bootnode + RPC/explorer servers deployed so the network can operate in real-world conditions."
      />

      <div className="md:col-span-3 rounded-3xl bg-black/25 p-6 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white">Launch week updates</div>
        <p className="mt-2 text-slate-300">
          We’ll post screenshots/log excerpts and finalized benchmark numbers
          during launch week as part of transparent mainnet readiness reporting.
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

/* ---------- Get Started (mainnet-ready placeholders) ---------- */

function GetStarted() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="md:col-span-2 rounded-2xl bg-orange-500/10 p-4 ring-1 ring-orange-400/20">
        <div className="text-sm font-semibold text-orange-200">
          Mainnet prep notice
        </div>
        <p className="mt-1 text-sm text-slate-200">
          Open Range is in{" "}
          <span className="font-semibold text-white">
            final pre-mainnet testing
          </span>
          . Verified downloads, checksums, and copy/paste scripts for running a
          node and mining will be published before launch.
        </p>
      </div>

      <BuildCard
        title="Run a node"
        desc="Mainnet-ready structure. Swap placeholders with the official chain spec + bootnodes + release binaries during launch week."
        code={`# Option A (recommended): Verified release (coming during launch week)
# ${LINKS.github}/openrange-chain/releases

# Option B: Build from source
git clone ${LINKS.github}/openrange-chain.git
cd openrange-chain
SKIP_WASM_BUILD=1 cargo build -p solochain-template-node --release

# Run (replace <MAINNET_SPEC.json> and ports as published)
./target/release/solochain-template-node \\
  --chain <MAINNET_SPEC.json> \\
  --name "<YOUR_NODE_NAME>" \\
  --port 30333 \\
  --rpc-port 9933 \\
  --ws-port 9944`}
        foot={
          <>
            RPC (example): <span className="text-white">ws://127.0.0.1:9944</span>
          </>
        }
      />

      <BuildCard
        title="Start mining"
        desc="Miner quick-start. Replace the RPC endpoint with the published public RPC (or your own node RPC) at launch."
        code={`# Use a public RPC (launch week) or point at your own node RPC:
export OPR_WS="${LINKS.rpcWs}"

# Example miner workflow (replace with official repo/path if different):
cd opr-miner
npm i
node miner.js --ws "$OPR_WS"`}
        foot={
          <>
            Tip: miners will work best against a local/full node RPC once you’re
            synced.
          </>
        }
      />

      <div className="md:col-span-2 rounded-3xl bg-black/25 p-6 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white">What’s coming next</div>
        <p className="mt-2 text-slate-300">
          Before launch we will publish: bootnode addresses, public RPC
          endpoints, explorer URL, verified binaries (Linux/Windows), checksums,
          and one-click scripts.
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
          Show quick-start
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
    {
      title: "Explorer v1",
      text: "Public explorer with blocks, transactions, and network stats.",
    },
    {
      title: "Public RPC + onboarding",
      text: "Official endpoints, quick-start scripts, and step-by-step tutorials.",
    },
    {
      title: "OPRX plumbing",
      text: "Deposit/mint/withdraw flow + relayer hardening.",
    },
    {
      title: "DeFi apps",
      text: "Swap UI + charts + bridge UI + staking dashboard.",
    },
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
            <div className="mt-1 text-xs text-slate-400">
              OPR (L1 PoW) • OPRX (L2 fast execution)
            </div>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-300">
              <a className="hover:text-white" href={LINKS.discord} target="_blank" rel="noreferrer">
                Discord
              </a>
              <a className="hover:text-white" href={LINKS.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="hover:text-white" href={LINKS.x} target="_blank" rel="noreferrer">
                X
              </a>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Open Range
          </div>
        </div>
      </div>
    </footer>
  );
}
