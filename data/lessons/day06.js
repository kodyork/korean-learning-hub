const day06Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 6 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 06: 場所・位置の表現 ＆ 存在を表す 있다 / 없다 の仕組み
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-violet-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                「〜はどこにありますか？」の尋ね方と、位置を示す名詞（위, 아래, 옆）と存在動詞 있다 の高度な組み合わせをマスターします。
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">

        <!-- Speed Controller -->
        <div class="bg-white border border-neutral-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div class="flex items-center space-x-2 text-neutral-800">
            <i data-lucide="volume-2" class="w-5 h-5 shrink-0 text-violet-600"></i>
            <span class="text-sm font-semibold">発音スピード調整（Audio Speed Controller）:</span>
          </div>
          <div class="flex items-center space-x-2">
            <button onclick="setSpeed(0.85)" id="speed-085" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-900 bg-neutral-900 text-white font-medium transition cursor-pointer">0.85x (Slow)</button>
            <button onclick="setSpeed(1.0)" id="speed-100" class="px-3.5 py-1.5 text-xs rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-900 font-medium transition cursor-pointer">1.0x (Normal)</button>
          </div>
        </div>

        <!-- Section 1: Detailed Explanations & Culture -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-violet-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：場所の尋ね方 ＆ 存在動詞 있다 / 없다 の使い分け</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-violet-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 場所を尋ねる基本フレーズ（A1基礎）</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">화장실이 어디에 있어요?</code>（お手洗いはどこにありますか？）<br>
                ・<code class="bg-neutral-100 px-1 rounded">근처에 약국이 있어요?</code>（近くに薬局はありますか？）<br>
                ・位置を表す名詞：<code class="bg-neutral-100 px-1 rounded">위</code>（上）、<code class="bg-neutral-100 px-1 rounded">아래</code>（下）、<code class="bg-neutral-100 px-1 rounded">옆</code>（隣・横）、<code class="bg-neutral-100 px-1 rounded">앞</code>（前）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：存在動詞 있다（ある・いる）と 없다（ない・いない）の構造</h4>
              <p class="text-neutral-600">
                韓国語では「存在・所在地」を表すときに <code class="bg-neutral-100 px-1 rounded">있다</code>（肯定）と <code class="bg-neutral-100 px-1 rounded">없다</code>（否定）を使います。<br>
                ・<code class="bg-neutral-100 px-1 rounded">~에 있어요</code>（〜にあります / います）という形で、場所を示す助詞 <code class="bg-neutral-100 px-1 rounded">-에</code> とセットで使われます。<br>
                 例：<code class="bg-neutral-100 px-1 rounded">호텔은 역 근처에 있어요.</code>（ホテルは駅の近くにあります）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-violet-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：韓国の街のランドマークと地下鉄文化</h4>
              <p class="text-neutral-600">
                ソウルなどの韓国の都市では、地下鉄の駅（지하철역）が生活の中心となっており、出口の番号（예: 3번 출구 ＝ 3番出口）や周辺の大型ビルを目印にして道案内をするのが一般的です。道を尋ねるときも「何番出口の近くですか？」と確認するのがスムーズです。
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-violet-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践会話（クリックで発音再生）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('실례합니다, 지하철역이 어디에 있어요?')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">실례합니다, 지하철역이 어디에 있어요?</span>
                <p class="text-xs text-neutral-500 mt-1">失礼ですが、地下鉄の駅はどこにありますか？（실례합니다 ＝ 失礼します）</p>
              </div>
            </div>

            <div onclick="speak('저기 큰 편의점 옆에 있어요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">저기 큰 편의점 옆에 있어요.</span>
                <p class="text-xs text-neutral-500 mt-1">あそこの大きなコンビニの隣にあります。（편의점 ＝ コンビニ、옆 ＝ 隣）</p>
              </div>
            </div>

            <div onclick="speak('이 근처에 좋은 카페가 있어요?')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">이 근처에 좋은 카페가 있어요?</span>
                <p class="text-xs text-neutral-500 mt-1">この近くに良いカフェはありますか？（근처 ＝ 近く）</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-violet-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 06 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：どこにありますか？</span>
            <p class="font-medium text-neutral-900">「どこにありますか？」と尋ねる正しい疑問詞フレーズは？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '정답입니다! 어디에 있어요? です。', '不正解！ 무엇 は「何」です。', '어디에 있어요')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 어디에 있어요?</button>
              <button onclick="checkQuiz(1, 1, 0, '정답입니다! 어디에 있어요? です。', '不正解！ 무엇 は「何」です。', '어디에 있어요')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 무엇에 있어요?</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：存在の表現</span>
            <p class="font-medium text-neutral-900">「近くに薬局はありますか？（근처에 약국이 [ ]?）」の空欄に入る存在の表現は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>근처에 약국이</span>
              <span onclick="revealAnswer(2, '있어요 (있어요)', '있어요')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
              <span>?</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：失礼します</span>
            <p class="font-medium text-neutral-900">「失礼します（실례합니다）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-600 w-64 bg-white">
              <button onclick="checkInput(3, ['실례합니다'], '실례합니다')" class="bg-neutral-900 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：位置を表す名詞</span>
            <p class="font-medium text-neutral-900">韓国語で「隣・横」を意味する位置名詞はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '정답입니다! 옆 が隣・横です。', '不正解！ 위 は上です。', '옆')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 옆</button>
              <button onclick="checkQuiz(4, 1, 0, '정답입니다! 옆 が隣・横です。', '不正解！ 위 は上です。', '옆')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 위</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「地下鉄の駅はどこにありますか？」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '지하철역이 어디에 있어요? (지하철역이 어디에 있어요?)', '지하철역이 어디에 있어요?')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: K-Pop & Korean Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 6 Special • City Vibe & Music
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 街の風景と「있다」の世界観を歌から学ぶ
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              ソウルの街並みや思い出の場所を歌ったK-POP楽曲から、存在を表す言葉の響きを感じ取ろう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">Paul Kim - 'Every Day, Every Moment' (모든 날, 모든 순간)</h4>
                <p class="text-xs text-neutral-500">Korean Drama OST Masterpiece</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【文化コラム：ソウルの街と記憶の場所】</strong><br>
              韓国のドラマや音楽には、ハンガン（漢江）や特定の街角など、物語の舞台となった「場所」に強い思い出や感情が結びついている表現が多く登場します。場所を表現する言葉は、韓国語の叙情性を高める大切なカギです。
            </p>
          </div>

          <!-- 歌詞フレーズセクション -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-6">
            <div class="flex justify-between items-center border-b border-neutral-200 pb-3">
              <h4 class="text-md font-bold text-neutral-900 flex items-center space-x-2">
                <i data-lucide="mic" class="w-4 h-4 text-violet-600"></i>
                <span>名フレーズを聴いてみよう</span>
              </h4>
            </div>

            <div class="space-y-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl border-2 border-violet-200 bg-violet-50/30 hover-lift transition space-y-1">
                <div class="flex justify-between items-start">
                  <span class="font-bold text-lg text-violet-950">네가 있어서 내가 있는 거야</span>
                  <button onclick="speak('네가 있어서 내가 있는 거야')" class="text-violet-600 hover:text-violet-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">君がいてくれるから、僕がいるんだ（있어서 ＝ いて、있는 ＝ いる）</p>
              </div>
            </div>
          </div>

          <!-- 文法解説 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-5">
            <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
              <i data-lucide="sparkles" class="w-5 h-5 text-violet-600"></i>
              <h4 class="text-lg font-bold text-neutral-900">歌から学べる！重要表現解説</h4>
            </div>

            <div class="grid gap-4 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1.5">
                <div class="flex items-center space-x-2">
                  <span class="bg-violet-600 text-white font-bold px-2 py-0.5 rounded text-xs">ポイント 1</span>
                  <span class="font-bold text-neutral-900">理由・経過を表す接続尾詞「-아서/어서 (〜なので / いて)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  存在動詞の <code class="bg-neutral-200 px-1 rounded">있다</code> に <code class="bg-neutral-200 px-1 rounded">-어서</code> がつくと、「存在していて / いるから」という因果関係や状態の継続をスムーズにつなぐことができます。日常会話でも非常に頻繁に使われる必須文法です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
