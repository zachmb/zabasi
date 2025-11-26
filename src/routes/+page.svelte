<script lang="ts">
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fade, fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';

  let scrolled = false;
  let mouseX = 0;
  let mouseY = 0;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 80;
    };
    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  });
</script>

<svelte:head>
  <title>Zabasi Group</title>
  <meta name="description" content="Zabasi Group — the future of consumer technology. Behind Kazwire (3.6M users), DEO (AI social marketing), LoopLess (CBT screen-time revolution), and a 24M+ view media network." />
  <meta property="og:image" content="https://zabasigroup.com/og.jpg" />
</svelte:head>

<!-- Floating mouse-following orb glow -->
<div class="pointer-events-none fixed inset-0 z-10">
  <div 
    class="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
    style={`background: radial-gradient(circle at ${mouseX}px ${mouseY}px, #6366F1 0%, transparent 70%);`}
  ></div>
</div>

<!-- Ultra-premium Navbar -->
<header class={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled 
  ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-indigo-900/20' 
  : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md'}`}>
  <nav class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
    <a href="/" class="flex items-center space-x-5 group">
      <div class="zabasi-logo relative">
        <svg width="56" height="56" viewBox="0 0 100 100" class="drop-shadow-2xl">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="26" fill="#6366F1" filter="url(#glow)" class="pulse"/>
          {#each [0,45,90,135,180,225,270,315] as angle}
            <g transform={`rotate(${angle} 50 50)`}>
              <rect x="50" y="36" width="32" height="9" rx="4.5" fill="#818CF8" opacity="0.95"/>
              <circle cx="86" cy="40" r="12" fill="#A78BFA">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite"/>
              </circle>
            </g>
          {/each}
        </svg>
      </div>
      <span class="font-black text-3xl tracking-tight bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-500">
        Zabasi Group
      </span>
    </a>

    <div class="hidden lg:flex items-center space-x-12">
      <a href="#portfolio" class="text-white/70 hover:text-white text-lg font-medium hover:glow transition">Portfolio</a>
      <a href="#team" class="text-white/70 hover:text-white text-lg font-medium hover:glow transition">Team</a>
      <a href="#join" class="text-white/70 hover:text-white text-lg font-medium hover:glow transition">Join</a>
    </div>

    <a href="mailto:join@zabasigroup.com" class="px-8 py-3 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-400/40 text-indigo-200 font-semibold rounded-full hover:from-indigo-600/50 hover:to-purple-600/50 hover:border-indigo-300/60 transition-all backdrop-blur-2xl shadow-lg shadow-indigo-500/20">
      Contact →
    </a>
  </nav>
</header>

<!-- Hero: Cosmic Glassmorphism -->
<section class="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
  <!-- Animated space nebula background -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-purple-900/20"></div>
    <div class="absolute inset-0 opacity-40" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>
  </div>

  <!-- Floating glass planets -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-20 left-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
    <div>
    <div class="absolute bottom-32 right-20 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-float-delayed"></div>
    <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-float-slow"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <div in:fly="{{ y: 60, duration: 1000, easing: quintOut }}">
      <h1 class="text-8xl md:text-9xl font-black tracking-tighter mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-none">
        Zabasi Group
      </h1>
    </div>

    <p class="text-2xl md:text-4xl font-extralight opacity-90 mb-20 max-w-5xl mx-auto leading-relaxed" in:fade="{{ delay: 600, duration: 1200 }}">
      We don't just build products.<br/>
      <span class="font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
        We ignite gravitational fields of viral technology.
      </span>
    </p>

    <!-- Stats with liquid glass cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20">
      {#each [
        { value: "3.6M", label: "Active Users", color: "from-orange-400 to-orange-600", site: "Kazwire" },
        { value: "24M+", label: "YouTube Views", color: "from-pink-400 to-red-500", site: "Media Network" },
        { value: "5M+", label: "UGC Views", color: "from-cyan-400 to-blue-600", site: "LoopLess" },
        { value: "300K", label: "LinkedIn Searches", color: "from-purple-400 to-indigo-600", site: "DEO" }
      ] as stat, i}
        <div 
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:border-white/30"
          in:fly="{{ y: 100, delay: 800 + i * 150, duration: 800, easing: backOut }}"
        >
          <div class="absolute inset-0 bg-gradient-to-br {stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
          <div class="text-6xl font-black bg-gradient-to-r {stat.color} bg-clip-text text-transparent">
            {stat.value}
          </div>
          <div class="text-gray-300 mt-3 text-lg">{stat.label}</div>
          <div class="text-gray-500 text-sm mt-1 opacity-70">{stat.site}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Portfolio Section – Liquid Glass Cards -->
<section id="portfolio" class="py-40 relative bg-gradient-to-b from-black to-gray-950">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-24">
      <h2 class="text-7xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
        Our Gravitational Portfolio
      </h2>
      <p class="text-2xl text-gray-400 max-w-4xl mx-auto">
        Three hyper-growth consumer platforms. One unified vision: dominate attention through engineering + viral mastery.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-12">
      <!-- Kazwire -->
      <div class="group relative">
        <div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
        <div class="relative bg-black/70 backdrop-blur-3xl border border-orange-500/30 rounded-3xl p-10 hover:border-orange-400/60 transition-all">
          <div class="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-4xl">KZ</div>
          <h3 class="text-4xl font-bold text-orange-300 mb-4">Kazwire</h3>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            The safest & most viral web gaming platform on earth.<br/>
            <strong>3.6M users • 120M monthly pageviews • $0.50 CPM UGC engine</strong>
          </p>
          <a href="https://kazwire.com" class="inline-block px-6 py-3 bg-orange-600/20 border border-orange-500/50 rounded-full text-orange-300 hover:bg-orange-600/40 transition">
            Visit Kazwire →
          </a>
        </div>
      </div>

      <!-- DEO.so -->
      <div class="group relative">
        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
        <div class="relative bg-black/70 backdrop-blur-3xl border border-purple-500/30 rounded-3xl p-10 hover:border-purple-400/60 transition-all">
          <div class="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-4xl">DEO</div>
          <h3 class="text-4xl font-bold text-purple-300 mb-4">DEO.so</h3>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            AI-powered social marketing platform (think sideshift.app on steroids).<br/>
            <strong>300K LinkedIn searches • Ex-Mercari C-suite • OpenAI & Apple alumni</strong>
          </p>
          <a href="https://deo.so" class="inline-block px-6 py-3 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 hover:bg-purple-600/40 transition">
            Coming Soon
          </a>
        </div>
      </div>

      <!-- LoopLess -->
      <div class="group relative">
        <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
        <div class="relative bg-black/70 backdrop-blur-3xl border border-cyan-500/30 rounded-3xl p-10 hover:border-cyan-400/60 transition-all">
          <div class="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl">LL</div>
          <h3 class="text-4xl font-bold text-cyan-300 mb-4">LoopLess</h3>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            Cognitive behavioral therapy-based screen-time reduction app.<br/>
            <strong>5M+ UGC views • Fermilab researchers • Ex-Apple & OpenAI engineers</strong>
          </p>
          <a href="https://beloopless.com" class="inline-block px-6 py-3 bg-cyan-600/20 border border-cyan-500/50 rounded-full text-cyan-300 hover:bg-cyan-600/40 transition">
            Visit LoopLess →
          </a>
        </div>
      </div>
    </div>

    <!-- Media Network Badge -->
    <div class="mt-32 text-center">
      <div class="inline-flex items-center gap-6 px-12 py-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
        <div class="text-6xl">▶</div>
        <div>
          <div class="text-4xl font-bold text-white">24M+ YouTube Views</div>
          <div class="text-xl text-gray-400">Featured on Joe Rogan, xQc, Hasanabi, Asmongold & more</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Final CTA -->
<section id="join" class="py-40 relative bg-black">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 class="text-7xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-10">
      The Future Is Being Written
    </h2>
    <p class="text-3xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
      Zabasi Group is quietly becoming one of the most powerful consumer tech forces of the decade.
    </p>
    <div class="flex flex-col sm:flex-row gap-8 justify-center">
      <a href="mailto:join@zabasigroup.com" class="px-12 py-6 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all shadow-2xl shadow-purple-900/50 transform hover:scale-105">
        Join the Core Team
      </a>
      <a href="#portfolio" class="px-12 py-6 text-xl font-bold border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 backdrop-blur-xl transition-all">
        Explore Portfolio
      </a>
    </div>
  </div>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
  :global(body) { font-family: 'Inter', sans-serif; margin: 0; background: black; }

  .glow {
    text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
  }

  .pulse {
    animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.9; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
  }

  @keyframes float-delayed {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(30px) rotate(-8deg); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(40px, -40px); }
    66% { transform: translate(-30px, 30px); }
  }

  .animate-float { animation: float 20s ease-in-out infinite; }
  .animate-float-delayed { animation: float-delayed 18s ease-in-out infinite; }
  .animate-float-slow { animation: float-slow 32s ease-in-out infinite; }
</style>