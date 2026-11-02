const day04Data = {
  render: function() {
    return `
      <!-- Hero Section -->
      <section class="bg-neutral-950 text-white py-12 px-4 border-b border-neutral-800 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-950/30 rounded-full blur-3xl pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="inline-flex items-center space-x-2 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-3 bg-violet-950/50 px-3 py-1 rounded-full border border-violet-900/50">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>Day 4 Comprehensive Masterclass</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-neutral-100">
            Day 04: 職業と国籍の表現 ＆ 指定詞 이다 の仕組みと自己アイデンティティ
          </h2>
          <div class="bg-neutral-900/90 border border-neutral-800 rounded-xl p-4 flex items-start space-x-3 text-xs text-neutral-300 backdrop-blur-sm">
            <i data-lucide="globe" class="w-4 h-4 text-violet-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-violet-300 font-semibold">From A1 Basics to B2 Nuances:</strong>
              <span class="ml-1 text-neutral-300">
                国籍・職業の名詞表現と、パッチム有無で変わる指定詞 이다（〜です）の高度な接続ルールをマスターします。
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
            <h3 class="text-xl font-bold text-neutral-900">1. 深掘り解説：国籍・職業の単語と指定詞 이다 の接続ルール</h3>
          </div>

          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-neutral-800">
            <div class="space-y-2 border-l-2 border-violet-500 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">① 国籍と職業の表現（A1基礎）</h4>
              <p class="text-neutral-600">
                ・国籍：<code class="bg-neutral-100 px-1 rounded">일본인</code>（日本人）、<code class="bg-neutral-100 px-1 rounded">한국인</code>（韓国人）、<code class="bg-neutral-100 px-1 rounded">미국인</code>（アメリカ人）<br>
                ・職業：<code class="bg-neutral-100 px-1 rounded">학생</code>（学生）、<code class="bg-neutral-100 px-1 rounded">회사원</code>（会社員）、<code class="bg-neutral-100 px-1 rounded">선생님</code>（先生）<br>
                ※ 名詞の直後に指定詞 <code class="bg-neutral-100 px-1 rounded">이다</code> の変化形をつけることで「〜です」というアイデンティティを表します。
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-neutral-900 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">② B2応用：パッチムの有無による指定詞の接続変形</h4>
              <p class="text-neutral-600">
                丁寧なハムニダ体（〜입니다）では常に <code class="bg-neutral-100 px-1 rounded">-입니다</code> ですが、日常会話のヘヨ体（〜예요 / 〜이에요）では直前の名詞にパッチム（子音の底）があるかどうかで形が変わります。<br>
                ・パッチムが<strong>ある</strong>場合（例：학생 ➔ 학생<strong>이에요</strong>）<br>
                ・パッチムが<strong>ない</strong>場合（例：회사원 ➔ 회사원<strong>예요</strong> ※または 의사예요）
              </p>
            </div>

            <div class="space-y-2 border-l-2 border-violet-600 pl-4">
              <h4 class="font-bold text-neutral-900 text-base">💡 豆知識：韓国の学歴・キャリア文化とアイデンティティ</h4>
              <p class="text-neutral-600">
                韓国では自己紹介の際、出身地や年齢だけでなく「どこに通っているか」「どんな仕事をしているか（직업）」が自分の社会的アイデンティティを形作る重要な要素として語られます。お互いの背景をリスペクトし合う丁寧な言葉選びが欠かせません。
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
            
            <div onclick="speak('어느 나라 사람이에요? — 저는 일본인이에요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">어느 나라 사람이에요? — 저는 일본인이에요.</span>
                <p class="text-xs text-neutral-500 mt-1">どちらの国の人ですか？ — 私は日本人です。（나라 ＝ 国、사람 ＝ 人）</p>
              </div>
            </div>

            <div onclick="speak('직업이 무엇입니까? — 저는 회사원입니다.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">직업이 무엇입니까? — 저는 회사원입니다.</span>
                <p class="text-xs text-neutral-500 mt-1">ご職業は何ですか？ — 私は会社員です。（ハムニダ体の表現）</p>
              </div>
            </div>

            <div onclick="speak('제 친구는 서울에서 대학생으로 살고 있어요.')" class="p-5 hover:bg-violet-50/30 transition cursor-pointer flex items-start space-x-4">
              <div class="mt-1 bg-neutral-100 text-neutral-800 p-2.5 rounded-full shrink-0"><i data-lucide="volume-2" class="w-4 h-4"></i></div>
              <div>
                <span class="font-bold text-lg text-neutral-900 block">제 친구는 서울에서 대학생으로 살고 있어요.</span>
                <p class="text-xs text-neutral-500 mt-1">私の友人はソウルで大学生として暮らしています。</p>
              </div>
            </div>

          </div>
        </section>

        <!-- Section 3: Quizzes -->
        <section class="space-y-6">
          <div class="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div class="flex items-center space-x-2">
              <i data-lucide="check-circle-2" class="w-5 h-5 text-violet-600"></i>
              <h3 class="text-xl font-bold text-neutral-900">3. Day 04 実践クイズ（全5問）</h3>
            </div>
            <span class="text-xs text-violet-600 font-semibold bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">5 Questions</span>
          </div>

          <!-- Q1 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q1. 選択問題：日本人</span>
            <p class="font-medium text-neutral-900">「日本人」を意味する正しい韓国語は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(1, 0, 0, '정답입니다! 일본인 が日本人です。', '不正解！ 한국인 は韓国人です。', '일본인')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 일본인</button>
              <button onclick="checkQuiz(1, 1, 0, '정답입니다! 일본인 が日本人です。', '不正解！ 한국인 は韓国人です。', '일본인')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 한국인</button>
            </div>
            <div id="q1-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q2 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q2. 穴埋め問題：会社員です</span>
            <p class="font-medium text-neutral-900">「私は会社員です（저는 회사원[ ]니다）」の空欄に入るハムニダ体の語尾は？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span>저는 회사원</span>
              <span onclick="revealAnswer(2, '입 (입)', '입')" id="q2-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
              <span>니다.</span>
            </div>
          </div>

          <!-- Q3 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q3. タイピングテスト：学生</span>
            <p class="font-medium text-neutral-900">「学生（학생）」を入力しなさい。</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-3 text-base border border-neutral-200">
              <input type="text" id="q3-input" placeholder="入力してください..." class="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-violet-600 w-64 bg-white">
              <button onclick="checkInput(3, ['학생'], '학생')" class="bg-neutral-900 hover:bg-violet-600 text-white font-medium px-4 py-2 rounded-lg text-xs transition cursor-pointer">判定</button>
            </div>
            <div id="q3-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q4 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q4. B2応用：パッチム有りの指定詞接続</span>
            <p class="font-medium text-neutral-900">パッチムのある名詞「학생（学生）」にヘヨ体を繋げるときの正しい形は？</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button onclick="checkQuiz(4, 0, 0, '정답입니다! 학생이에요 となります。', '不正解！ パッチムがあるため 예요 ではありません。', '학생이에요')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">A. 학생이에요</button>
              <button onclick="checkQuiz(4, 1, 0, '정답입니다! 학생이에요 となります。', '不正解！ パッチムがあるため 예요 ではありません。', '학생이에요')" class="hover-lift border border-neutral-200 rounded-xl p-4 text-left bg-white font-medium text-sm">B. 학생예요</button>
            </div>
            <div id="q4-feedback" class="hidden text-sm p-4 rounded-xl"></div>
          </div>

          <!-- Q5 -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <span class="text-xs font-bold text-neutral-800 bg-neutral-100 px-3 py-1 rounded-full">Q5. 総合フレーズ</span>
            <p class="font-medium text-neutral-900">「どちらの国の人ですか？ — 私は日本人です」のフルフレーズは？（タップで表示）</p>
            <div class="bg-neutral-50 p-4 rounded-xl flex items-center space-x-2 text-base border border-neutral-200">
              <span onclick="revealAnswer(5, '어느 나라 사람이에요? — 저는 일본인이에요. (어느 나라 사람이에요? — 저는 일본인이에요.)', '어느 나라 사람이에요? — 저는 일본인이에요.')" id="q5-slot" class="cursor-pointer border-b-2 border-dashed border-violet-500 px-3 py-0.5 text-violet-600 font-bold hover:bg-violet-50 transition">[ クリックして答えを表示 ]</span>
            </div>
          </div>
        </section>

        <!-- 🎵 Section 4: K-Pop & Korean Culture Special -->
        <section class="space-y-6 pt-6 border-t-2 border-neutral-200">
          <div class="border-b border-neutral-200 pb-3">
            <div class="inline-block bg-violet-100 text-violet-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
              Day 4 Special • Self Identity & Music
            </div>
            <h3 class="text-2xl font-bold text-neutral-900">
              4. アンセム曲で学ぶ「自分らしさ」の表現
            </h3>
            <p class="text-xs sm:text-sm text-neutral-600 mt-1">
              世界中で大人気のK-POP楽曲から、自分の存在やアイデンティティを高らかに歌うフレーズを学ぼう！
            </p>
          </div>

          <!-- 曲紹介カード -->
          <div class="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center font-bold shrink-0">
                <i data-lucide="music" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="text-lg font-bold text-neutral-900">BTS - 'IDOL' / Self Love Anthems</h4>
                <p class="text-xs text-neutral-500">Global K-Pop Phenomenon</p>
              </div>
            </div>
            <p class="text-xs text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
              <strong>【文化コラム：自分を愛する文化（Love Yourself）】近年の韓国カルチャー</strong><br>
              「他人の視点に囚われず、ありのままの自分（나 자신）を愛する」というメッセージは、現代のK-POPや韓国のエッセイ文学を貫く最も強力なテーマとなっています。
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
                  <span class="font-bold text-lg text-violet-950">지켜봐, 나는 나일 뿐이니까</span>
                  <button onclick="speak('지켜봐, 나는 나일 뿐이니까')" class="text-violet-600 hover:text-violet-700 p-1 cursor-pointer">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <p class="text-neutral-700 font-medium">見守っていて、僕はただの僕なのだから（나일 뿐이니까 ＝ 私なのだから）</p>
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
                  <span class="font-bold text-neutral-900">限定の表現「-일 뿐이다 (〜にすぎない / 〜だけだ)」</span>
                </div>
                <p class="text-neutral-700 leading-relaxed">
                  指定詞の連体形に <code class="bg-neutral-200 px-1 rounded">-일 뿐이다</code> をつなげると、「〜にすぎない」という強い自己主張や限定を表す表現になります（例：<code class="bg-neutral-200 px-1 rounded">나는 나일 뿐이다</code> ＝ 僕は僕にすぎない／私は私だ）。
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    `;
  }
};
