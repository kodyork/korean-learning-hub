const day02Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 2 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 02: 数字の種類（固有数詞と漢字数詞）と年齢・お買い物の表現
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-violet-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                韓国語の最大の難所「2種類の数字（固有数詞・漢字数詞）」の使い分けと、助数詞の前での変化（하나 ➔ 한）をマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：2つの数字（固有数詞と漢字数詞）の使い分け</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-violet-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 固有数詞（年齢・個数・時間）と漢字数詞（お金・電話番号・分数）</h4>
              <p class="text-neutral-600">
                韓国語には数字システムが2つあります。<br>
                ・<strong>固有数詞：</strong> 하나 (1), 둘 (2), 셋 (3), 넷 (4), 다섯 (5) ➔ 主に年齢、物のかぞえ、何時（시）に使う。<br>
                ・<strong>漢字数詞：</strong> 일 (1), 이 (2), 삼 (3), 사 (4), 오 (5) ➔ お金（ウォン）、電話番号、分（분）、階数などに使う。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：助数詞の前で変化する固有数詞（하나 ➔ 한）</h4>
              <p class="text-neutral-600">
                助数詞（個、人、冊など）を伴うとき、1〜4の固有数詞は形が変化します。<br>
                ・하나 (1) ➔ <code class="bg-neutral-100 px-1 rounded">한</code>（例：한 개 ＝ 1個）<br>
                ・둘 (2) ➔ <code class="bg-neutral-100 px-1 rounded">두</code>（例：두 명 ＝ 2人）<br>
                ・셋 (3) ➔ <code class="bg-neutral-100 px-1 rounded">세</code>（例：세 권 ＝ 3冊）<br>
                ・넷 (4) ➔ <code class="bg-neutral-100 px-1 rounded">네</code>（例：네 개 ＝ 4個）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-violet-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：韓国のお買い物文化とキャッシュレス</h4>
              <p class="text-neutral-600">
                韓国は世界でもトップクラスのキャッシュレス社会です。屋台や市場でもクレジットカードやスマホ決済（Samsung Payなど）が広く普及しており、お会計の際も「얼마예요?（いくらですか？）」とスムーズに決済が行われます。
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
            
            <div onclick="speak('나이가 어떻게 되세요? — 저는 스물다섯 살입니다.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">나이가 어떻게 되세요? — 저는 스물다섯 살입니다.</span>
                <p class="text-xs text-neutral-500 mt-1">おいくつですか？ — 私は25歳です。（스물다섯 ＝ 25、살 ＝ 歳）</p>
              </div>
            </div>

            <div onclick="speak('이것은 얼마예요? — 만 오천 원입니다.')" class="p-5 hover:bg-neutral-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">이것은 얼마예요? — 만 오천 원입니다.</span>
                <p class="text-xs text-neutral-500 mt-1">これはいくらですか？ — 1万5千ウォンです。（만 ＝ 1万、오천 ＝ 5千）</p>
              </div>
            </div>

            <div onclick="speak('커피 한 잔 주세요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">커피 한 잔 주세요.</span>
                <p class="text-xs text-neutral-500 mt-1">コーヒーを1杯ください。（하나 が 한 に変化）</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-violet-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 02 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：固有数詞の「3」</span>
            <p class="font-medium text-neutral-900">年齢や個数を数えるときの固有数詞「3」はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '정답입니다! 셋 が3です。', '不正解！ 둘 は2です。', '셋')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 셋</button>
              <button onclick="checkQuiz(1, 1, 0, '정답입니다! 셋 が3です。', '不正解！ 둘 は2です。', '셋')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 둘</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：いくらですか？</span>
            <p class="font-medium text-neutral-900">「いくらですか？（이것은 얼마[ ]요?）」の空欄に入るヘヨ体の表現は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>이것은 얼마</span>
              <span onclick="revealAnswer(2, '예 (예)', '예')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
              <span>요?</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：1個（ハンケ）</span>
            <p class="font-medium text-neutral-900">「1個（한 개）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-600 w-64 bg-white">
              <button onclick="checkInput(3, ['한 개', '한개'], '한 개')" class="bg-neutral-900 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：数詞の変化</span>
            <p class="font-medium text-neutral-900">助数詞の前で「둘 (2)」が変化した形はどれ？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '정답입니다! 두 に変化します。', '不正解！ 다 は異なります。', '두')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 두</button>
              <button onclick="checkQuiz(4, 1, 0, '정답입니다! 두 に変化します。', '不正解！ 다 は異なります。', '두')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 다</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「コーヒーを1杯ください」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '커피 한 잔 주세요. (커피 한 잔 주세요.)', '커피 한 잔 주세요.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: K-Pop & Korean Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 2 Special • K-Pop Anthem & Numbers
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. K-POPのヒット曲で覚えるカウントと感情表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              世界的なK-POPの歌詞に登場する数字や、日常のライブ感を歌から楽しく吸収しよう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">SHINee - 'Replay (누난 너무 예뻐)'</h4>
                <p class="text-xs text-neutral-500">K-Pop Legendary Classic</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【文化コラム：韓国の年上の呼び方】</strong><br>
              タイトルにある「누나（ヌナ）」は、男性から見た年上の女性を呼ぶ親しい言葉。韓国では年齢や立場に応じた呼び方が非常に発達しており、人間関係をスムーズにするための大切なコミュニケーションツールとなっています。
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
                  <span class="font-bold text-lg text-violet-950">누난 너무 예뻐, 단발머리가 너무 잘어울려</span>
                  <button onclick="speak('누난 너무 예뻐, 단발머리가 너무 잘어울려')" class="text-violet-600 hover:text-violet-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">ヌナはとても綺麗さ、ボブヘアが本当によく似合うよ</p>
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
                  <span class="font-bold text-neutral-900">強調の副詞「너무 (とても / あまりにも)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">너무</code> は本来「度が過ぎる・あまりに」という意味ですが、現代の韓国語（K-POPや日常会話）では「すごく、とても」というポジティブな強調の副詞として非常に頻繁に使われます。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
