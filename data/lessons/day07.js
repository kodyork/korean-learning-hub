const day07Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-900/50">
            <i data-lucide="trophy" class="w-3.5 h-3.5"></i>
            <span>Day 7 Masterclass: Semana 1 Review</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 07: 第1週 総復習 ＆ 韓国語コア動詞・指定詞のマトリックス
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-violet-300 font-semibold">Semana 1 Complete Integration:</strong>
              <span class="ml-1 text-neutral-300">
                1週間の重要フレーズと、이다（指定詞）・있다/없다（存在動詞）・주세요（依頼）・좋아하다（好み）の使い分けを完全に整理し、マスターします。
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

        <!-- Section 1: Detailed Explanations & Verb Matrix -->
        <section class="space-y-6">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 text-violet-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：Semana 1 核心表現のマトリックス比較</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <p class="text-neutral-700">
              第1週で学んだ最も重要で、韓国語会話の骨組みとなる文法・指定詞の役割をすっきり整理しましょう！
            </p>

            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse border border-neutral-200 text-xs sm:text-sm">
                <thead>
                  <tr class="bg-neutral-900 text-violet-400">
                    <th class="p-3 border border-neutral-700">文法・表現</th>
                    <th class="p-3 border border-neutral-700">コア概念</th>
                    <th class="p-3 border border-neutral-700">代表的な用例</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-200">
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">이다 (〜です)</td>
                    <td class="p-3 border border-neutral-200">身分・属性・アイデンティティの定義</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">저는 일본인입니다.</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">있다 / 없다</td>
                    <td class="p-3 border border-neutral-200">存在・所在（ある・いる / ない・いない）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">역 근처에 있어요.</code></td>
                  </tr>
                  <tr>
                    <td class="p-3 font-bold border border-neutral-200">주세요</td>
                    <td class="p-3 border border-neutral-200">丁寧な要求・注文（〜をください）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">아메리카노 한 잔 주세요.</code></td>
                  </tr>
                  <tr class="bg-neutral-50/50">
                    <td class="p-3 font-bold border border-neutral-200">좋아하다</td>
                    <td class="p-3 border border-neutral-200">好み・愛好（好きだ）</td>
                    <td class="p-3 border border-neutral-200"><code class="bg-neutral-100 px-1 rounded">달콤한 디저트를 좋아해요.</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="space-y-2 border-l-2 border-violet-600 pl-4 mt-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 Semana 1 達成のポイント</h4>
              <p class="text-neutral-600">
                この基本構造と敬語・ヘヨ体の使い分け感覚が掴めれば、日常会話の基礎は完璧です。自信を持って第2週へと進みましょう！
              </p>
            </div>
          </div>
        </section>

        <!-- Section 2: Comprehensive Dialogues -->
        <section class="space-y-4">
          <div class="flex items-center space-x-2 border-b border-neutral-200 pb-3">
            <i data-lucide="message-square" class="w-5 h-5 text-violet-600"></i>
            <h3 class="text-xl font-bold text-neutral-900">2. 実践統合会話（1週間の学びを凝縮）</h3>
          </div>
          <div class="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm divide-y divide-neutral-100">
            
            <div onclick="speak('안녕하세요? 제 이름은 타로입니다. 스물다섯 살이고 일본인이에요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">안녕하세요? 제 이름은 타로입니다. 스물다섯 살이고 일본인이에요.</span>
                <p class="text-xs text-neutral-500 mt-1">こんにちは？私の名前はタロウです。25歳で日本人です。</p>
              </div>
            </div>

            <div onclick="speak('우리 가족은 부모님과 형이 있어요. 모두 서울에 살고 있어요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">우리 가족은 부모님과 형이 있어요. 모두 서울에 살고 있어요.</span>
                <p class="text-xs text-neutral-500 mt-1">私の家族は両親と兄がいます。みんなソウルに住んでいます。</p>
              </div>
            </div>

            <div onclick="speak('실례합니다, 근처에 좋은 카페가 어디에 있어요?')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">실례합니다, 근처에 좋은 카페가 어디에 있어요?</span>
                <p class="text-xs text-neutral-500 mt-1">すみません、近くに良いカフェはどこにありますか？</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-violet-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Semana 1 総復習クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 指定詞の活用</span>
            <p class="font-medium text-neutral-900">「私は日本人です」を表す正しい語尾は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '정답입니다! 일본인입니다 が正しい表現です。', '不正解！ 丁寧なハムニダ体を使います。', '일본인입니다')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 일본인입니다</button>
              <button onclick="checkQuiz(1, 1, 0, '정답입니다! 일본인입니다 が正しい表現です。', '不正解！ 丁寧なハムニダ体を使います。', '일본인입니다')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 일본인이어요</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 存在の表現</span>
            <p class="font-medium text-neutral-900">「近くに薬局はありますか？（근처에 약국이 [ ]?）」に入る存在動詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>근처에 약국이</span>
              <span onclick="revealAnswer(2, '있어요 (있어요)', '있어요')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
              <span>?</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：コーヒーをください</span>
            <p class="font-medium text-neutral-900">「コーヒーをください（커피 주세요）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-600 w-64 bg-white">
              <button onclick="checkInput(3, ['커피 주세요'], '커피 주세요')" class="bg-neutral-900 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. 男性から見た兄</span>
            <p class="font-medium text-neutral-900">男性が自分の年上の兄を呼ぶときの正しい呼び方は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '정답입니다! 男性が呼ぶ兄は 형 です。', '不正解！ 오빠 は女性が呼ぶときの兄です。', '형')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 형</button>
              <button onclick="checkQuiz(4, 1, 0, '정답입니다! 男性が呼ぶ兄は 형 です。', '不正解！ 오빠 は女性が呼ぶときの兄です。', '형')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 오빠</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合自己紹介</span>
            <p class="font-medium text-neutral-900">「私の名前はタロウです。25歳で日本人です」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '제 이름은 타로입니다. 스물다섯 살이고 일본인이에요. (제 이름은 타로입니다. 스물다섯 살이고 일본인이에요.)', '제 이름은 타로입니다. 스물다섯 살이고 일본인이에요.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: K-Pop & Korean Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 7 Special • Week 1 Grand Finale Anthem
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. K-POPの名曲で振り返る韓国語の温もりと未来
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              第1週で培った表現力と美しいハングルの響きを確認しましょう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">BTS / IU / Global K-Pop Anthems</h4>
                <p class="text-xs text-neutral-500">Korean Language & Culture Finale</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【文化コラム：第1週の総括】</strong><br>
              挨拶から数字、家族、自己紹介、カフェでの注文、そして場所の案内まで。第1週の学びがすべて組み合わさることで、韓国語での自然なコミュニケーションの土台が完成します。
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
                  <span class="font-bold text-lg text-violet-950">가장 깊은 밤에 빛나는 별빛</span>
                  <button onclick="speak('가장 깊은 밤에 빛나는 별빛')" class="text-violet-600 hover:text-violet-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">最も深い夜に輝く星の光（가장 ＝ 最も、밤 ＝ 夜、별빛 ＝ 星の光）</p>
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
                  <span class="font-bold text-neutral-900">第1週の総括：自分の言葉で世界を広げる</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  ハングルの仕組みから始まり、丁寧な敬語や日常のフレーズを身につけたあなたは、すでに韓国語学習の素晴らしいスタートラインを駆け抜けています。第2週（Day 08以降）も楽しみながらコツコツ進めていきましょう！
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
