const day05Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 5 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 05: カフェでの注文・好みの表現 ＆ 丁寧な依頼表現 주세요 の仕組み
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-violet-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                注文の必須フレーズ (주세요 / 좋아해요) から、より洗練されたB2の依頼表現（-아/어 주시겠어요?）まで徹底解説します。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：カフェでの注文フレーズと依頼表現</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-violet-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① カフェでの注文フレーズ（A1基礎）</h4>
              <p class="text-neutral-600">
                ・<code class="bg-neutral-100 px-1 rounded">아메리카노 한 잔 주세요.</code>（アメリカーノを1杯ください）<br>
                ・<code class="bg-neutral-100 px-1 rounded">테이크아웃 할게요.</code>（テイクアウトにします）<br>
                ・<code class="bg-neutral-100 px-1 rounded">얼마예요?</code>（いくらですか？）<br>
                ※ <code class="bg-neutral-100 px-1 rounded">주세요</code>（〜をください）は、お店やレストランで最も頻繁に使う魔法の必須表現です。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：より丁寧な依頼表現（-아/어 주시겠어요?）</h4>
              <p class="text-neutral-600">
                日常的なお願いには <code class="bg-neutral-100 px-1 rounded">-주세요</code> で十分ですが、B2レベルでは「〜していただけますでしょうか？」という相手への最大限の配慮を含んだ依頼形 <code class="bg-neutral-100 px-1 rounded">-아/어 주시겠어요?</code>（例：영수증을 버려 주시겠어요? ＝ レシートを捨てていただけますか？）を使えるようになると、韓国語の表現力が格段に洗練されます。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-violet-600 pl-4">
              <h4 class="font-bold text-neutral-900  text-base">💡 豆知識：韓国の「カフェ（카페）文化」とコーヒー愛</h4>
              <p class="text-neutral-600">
                韓国は世界でも有数のカフェ大国であり、街の至るところに個性的なカフェが並んでいます。アイスアメリカーノ（通称：아아 / アア）は季節を問わず大人気で、カフェは単にコーヒーを飲む場所だけでなく、勉強や仕事、友人との大切なコミュニケーションの空間として親しまれています。
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
            
            <div onclick="speak('어서 오세요, 무엇을 드릴까요? — 아이스 아메리카노 한 잔 주세요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">어서 오세요, 무엇을 드릴까요? — 아이스 아메리카노 한 잔 주세요.</span>
                <p class="text-xs text-neutral-500 mt-1">いらっしゃいませ、何になさいますか？ — アイスアメリカーノを1杯ください。</p>
              </div>
            </div>

            <div onclick="speak('매장에서 드세요, 아니면 포장이세요? — 매장에서 먹고 갈게요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">매장에서 드세요, 아니면 포장이세요? — 매장에서 먹고 갈게요.</span>
                <p class="text-xs text-neutral-500 mt-1">店内でお召し上がりですか、それともお持ち帰りですか？ — 店内で食べていきます。</p>
              </div>
            </div>

            <div onclick="speak('저는 달콤한 디저트를 아주 좋아해요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">저는 달콤한 디저트를 아주 좋아해요.</span>
                <p class="text-xs text-neutral-500 mt-1">私は甘いデザートがとても好きです。（달콤한 ＝ 甘い、좋아해요 ＝ 好きです）</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-violet-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 05 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：〜をください</span>
            <p class="font-medium text-neutral-900">「〜をください」と注文するときに使う表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '정답입니다! 주세요 です。', '不正解！ 좋아해요 は「好きです」です。', '주세요')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 주세요</button>
              <button onclick="checkQuiz(1, 1, 0, '정답입니다! 주세요 です。', '不正解！ 좋아해요 は「好きです」です。', '주세요')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 좋아해요</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：コーヒー1杯</span>
            <p class="font-medium text-neutral-900">「コーヒー1杯（커피 한 [ ]）」の空欄に入る杯の助数詞は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>커피 한</span>
              <span onclick="revealAnswer(2, '잔 (잔)', '잔')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
              <span>.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：いくらですか？</span>
            <p class="font-medium text-neutral-900">「いくらですか？（얼마예요）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-600 w-64 bg-white">
              <button onclick="checkInput(3, ['얼마예요'], '얼마예요')" class="bg-neutral-900 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：お持ち帰り（テイクアウト）</span>
            <p class="font-medium text-neutral-900">韓国のカフェで「お持ち帰り」を意味する一般的な表現は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '정답입니다! 포장（包装）と言います。', '不正解！ 매장 は店内という意味です。', '포장')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 포장</button>
              <button onclick="checkQuiz(4, 1, 0, '정답입니다! 포장（包装）と言います。', '不正解！ 매장 は店内という意味です。', '포장')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 매장</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「アイスアメリカーノを1杯ください」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '아이스 아메리카노 한 잔 주세요. (아이스 아메리카노 한 잔 주세요.)', '아이스 아메리카노 한 잔 주세요.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: K-Pop & Korean Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 5 Special • Cafe Life & K-Pop
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. K-POPの歌詞から感じる日常とカフェの情緒
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              街のカフェや甘いひとときを歌ったK-POPの名曲から、リアルな会話表現を学びましょう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">IU - 'Palette' / Cafe & Daily Vibe Songs</h4>
                <p class="text-xs text-neutral-500">Korean Acoustic Pop Masterpiece</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【文化コラム：韓国のカフェライフ】</strong><br>
              韓国の人々にとってカフェは、美味しいコーヒーを飲むだけでなく、友人とゆっくりおしゃべりをしたり、自分の時間を楽しんだりする生活の一部です。「커피 한 잔의 여유（コーヒー1杯の余裕）」という言葉があるように、日常の小さな幸せを大切にする文化があります。
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
                  <span class="font-bold text-lg text-violet-950">이런 소소한 하루가 참 좋아</span>
                  <button onclick="speak('이런 소소한 하루가 참 좋아')" class="text-violet-600 hover:text-violet-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">こんな些細な一日が本当に好き（소소한 ＝ 些細な、참 ＝ 本当に）</p>
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
                  <span class="font-bold text-neutral-900">感情を表す形容詞の活用（좋다 ➔ 좋아해요 / 좋아）</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  <code class="bg-neutral-200 px-1 rounded">좋다</code>（良い・好きだ）という状態や感情を表す言葉は、会話のなかで自分の気持ちをストレートに伝えるための必須の単語です。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
