const day03Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 3 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 03: 家族の紹介と呼び方 ＆ 話し手の性別で変わるきょうだい呼称
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-violet-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                家族の基本単語と、話し手（男性/女性）によって異なるお兄さん・お姉さんの呼び分けというB2重要ルールをマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：家族の名称と性別による呼称の使い分け</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-violet-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 家族の基本語彙（父・母・両親）</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">아버지</code>（アボジ：父）、<code class="bg-neutral-100 px-1 rounded">어머니</code>（オモニ：母）<br>
                ・<code class="bg-neutral-100 px-1 rounded">부모님</code>（プモニム：ご両親 ※敬称の「님」がつきます）<br>
                ・カジュアルに呼ぶときは <code class="bg-neutral-100 px-1 rounded">아빠</code>（アッパ：パパ）、<code class="bg-neutral-100 px-1 rounded">엄마</code>（オンマ：ママ）を使います。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：話し手の性別で変わるきょうだいの呼び方</h4>
              <p class="text-neutral-600">
                韓国語では、自分が男性か女性かによって年上のきょうだいの呼び方が完全に異なります。<br>
                ・男性から見た兄 ➔ <code class="bg-neutral-100 px-1 rounded">형</code>（ヒョン） / 女性から見た兄 ➔ <code class="bg-neutral-100 px-1 rounded">오빠</code>（オッパ）<br>
                ・男性から見た姉 ➔ <code class="bg-neutral-100 px-1 rounded">누나</code>（ヌナ） / 女性から見た姉 ➔ <code class="bg-neutral-100 px-1 rounded">언니</code>（オンニ）<br>
                ※ 年下のきょうだいは男女問わず <code class="bg-neutral-100 px-1 rounded">동생</code>（トンセン）と呼びます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-violet-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：韓国の家族主義と年長者への敬意</h4>
              <p class="text-neutral-600">
                韓国社会では家族の絆が非常に強く、目上の人や親に対する敬意（親孝行＝효도）が道徳の根幹として大切にされています。また、親しい間柄であれば実のきょうだいでなくても、親しい年上の男性を「オッパ」や「ヒョン」と呼ぶなど、擬似的な家族関係を築く温かい文化があります。
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
            
            <div onclick="speak('우리 가족은 부모님과 저, 그리고 여동생이 있어요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">우리 가족은 부모님과 저, 그리고 여동생이 있어요.</span>
                <p class="text-xs text-neutral-500 mt-1">私の家族は両親と私、そして妹がいます。（여동생 ＝ 妹）</p>
              </div>
            </div>

            <div onclick="speak('저에게는 형이 두 명 있습니다.')" class="p-5 hover:bg-neutral-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">저에게는 형이 두 명 있습니다.</span>
                <p class="text-xs text-neutral-500 mt-1">私には兄が2人います。（男性が話す場合：형）</p>
              </div>
            </div>

            <div onclick="speak('언니, 오늘 어디에 가세요?')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">언니, 오늘 어디에 가세요?</span>
                <p class="text-xs text-neutral-500 mt-1">お姉ちゃん、今日どこに行くの？（女性が話す場合：언니）</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-violet-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 03 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：母</span>
            <p class="font-medium text-neutral-900">「お母さん（丁寧な表現）」を表す正しい韓国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '정답입니다! 어머니 が母です。', '不正解！ 아버지 は父です。', '어머니')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 어머니</button>
              <button onclick="checkQuiz(1, 1, 0, '정답입니다! 어머니 が母です。', '不正解！ 아버지 は父です。', '어머니')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 아버지</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：ご両親</span>
            <p class="font-medium text-neutral-900">「ご両親（부모[ ]）」の空欄に入る敬称の接尾辞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>부모</span>
              <span onclick="revealAnswer(2, '님 (님)', '님')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：家族</span>
            <p class="font-medium text-neutral-900">「家族（가족）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-600 w-64 bg-white">
              <button onclick="checkInput(3, ['가족'], '가족')" class="bg-neutral-900 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：女性から見た兄の呼び方</span>
            <p class="font-medium text-neutral-900">女性が自分の年上の兄を呼ぶときの正しい呼び方は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '정답입니다! 女性が呼ぶ兄は 오빠 です。', '不正解！ 형 は男性が呼ぶときの兄です。', '오빠')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 오빠</button>
              <button onclick="checkQuiz(4, 1, 0, '정답입니다! 女性が呼ぶ兄は 오빠 です。', '不正解！ 형 は男性が呼ぶときの兄です。', '오빠')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 형</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「私の家族は両親と私、そして妹がいます」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '우리 가족은 부모님과 저, 그리고 여동생이 있어요. (우리 가족은 부모님과 저, 그리고 여동생이 있어요.)', '우리 가족은 부모님과 저, 그리고 여동생이 있어요.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: K-Pop & Korean Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 3 Special • Family & Emotional Bonds
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. 家族と絆を歌うK-POP名曲と「우리 (私たち)」の文化
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              韓国語特有の所有表現「우리（私たち〜）」の温かいニュアンスを楽曲から感じ取ろう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">BTS - 'Epiphany' / Family Ballads</h4>
                <p class="text-xs text-neutral-500">Emotional K-Pop Masterpiece</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【文化コラム：우리（ウリ＝私たち）の概念】</strong><br>
              韓国語では、自分の家族や故郷、さらには親しい仲間を言うときに「私（나）」ではなく「私たち（우리）」という言葉を使います（例：우리 가족 ＝ 私の家族）。個人の所有よりも集団や絆を重んじる韓国的な温かい世界観がここに表れています。
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
                  <span class="font-bold text-lg text-violet-950">사랑하고 싶어, 나를 in this world</span>
                  <button onclick="speak('사랑하고 싶어, 나를 in this world')" class="text-violet-600 hover:text-violet-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">愛したいんだ、この世界で僕自身を</p>
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
                  <span class="font-bold text-neutral-900">「〜고 싶다 (〜したい)」の連用表現</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  動詞の語幹に <code class="bg-neutral-200 px-1 rounded">-고 싶다</code> をつけることで、「〜したい」という強い意志や希望を表現できます（例：<code class="bg-neutral-200 px-1 rounded">사랑하고 싶어</code> ＝ 愛したい）。感情表現の幅がぐっと広がる必須文法です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
