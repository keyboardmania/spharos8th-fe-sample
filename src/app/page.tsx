export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 font-sans text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500 selection:text-black">
      {/* 배경 오로라/반짝임 효과 원들 */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/30 blur-[128px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/30 blur-[128px] animate-pulse duration-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[160px] pointer-events-none" />

      {/* 중앙 메인 카드 (Glassmorphism) */}
      <main className="relative z-10 max-w-2xl w-full rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center space-y-8 transition-all hover:border-white/20">
        
        {/* 상단 반짝이는 뱃지 */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next.js & Vercel Auto Deployment Ready
        </div>

        {/* 타이틀 (그라데이션 텍스트) */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
          코드가 살아 움직이는 <br className="hidden sm:inline" />
          마법 같은 순간
        </h1>

        {/* 설명 문구 */}
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
          로컬 PC에서 시작된 작은 아이디어가 Git Push 한 번으로 전 세계에 순식간에 펼쳐집니다.
        </p>

        {/* 버튼 영역 */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
          <button className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
            프로젝트 시작하기 ✨
          </button>
          <button className="px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/50 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-200">
            문서 살펴보기
          </button>
        </div>

        {/* 하단 장식용 카드 그리드 */}
        <div className="grid grid-cols-3 gap-3 w-full pt-6 border-t border-white/5 text-xs text-slate-400">
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="font-semibold text-cyan-400">⚡ 초고속</div>
            <div>Vercel CDN</div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="font-semibold text-purple-400">🔄 자동화</div>
            <div>CI/CD Pipeline</div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="font-semibold text-pink-400">🎨 네온 UI</div>
            <div>Tailwind CSS</div>
          </div>
        </div>
      </main>
    </div>
  );
}