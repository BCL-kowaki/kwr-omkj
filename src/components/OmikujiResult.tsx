'use client';

import { OmikujiResult as Result, getRankDecoration } from '@/lib/omikuji';

interface OmikujiResultProps {
  result: Result;
  onRetry: () => void;
}

export default function OmikujiResult({ result, onRetry }: OmikujiResultProps) {
  const decoration = getRankDecoration(result.rank);

  return (
    <div className="w-full max-w-md mx-auto px-4 animate-slide-up">
      {/* 紙吹雪エフェクト */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-20px',
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${1 + Math.random()}s`,
            }}
          >
            {['🎊', '✨', '🌸', '💫', '🎉'][i % 5]}
          </div>
        ))}
      </div>

      {/* メインカード */}
      <div className={`relative card-festive rounded-3xl overflow-hidden animate-pulse-festive`}>
        {/* 上部の装飾帯 */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--red)] via-[var(--pink)] to-[var(--gold)]" />

        <div className="relative z-10 p-6 sm:p-8">
          {/* ヘッダー */}
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">{decoration.emoji}</div>
            <div className="inline-block px-5 py-2 rounded-full bg-white border-2 border-[var(--pink)]/20 shadow-sm">
              <span className="text-xs text-[var(--red)] tracking-wider font-bold">🎍 KAWARA版 2026年 🎍</span>
            </div>
          </div>

          {/* 運勢ランク */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white rounded-2xl px-8 py-5 shadow-lg border-2 border-[var(--gold)]/30">
              <h2 
                className={`text-5xl sm:text-6xl font-extrabold ${decoration.textColor} animate-reveal`}
              >
                {result.rank}
              </h2>
            </div>
            <p className="mt-3 text-gray-400 text-sm tracking-wider font-bold">YOUR FORTUNE 2026</p>
          </div>

          {/* 総合運メッセージ */}
          <div className="bg-white rounded-2xl p-5 mb-6 border border-[var(--pink)]/20 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-lg">🌟</span>
              <span className="text-sm text-[var(--red)] font-bold tracking-wider">総合運</span>
            </div>
            <p className="text-center text-[var(--foreground)] leading-relaxed font-medium">
              {result.overall}
            </p>
          </div>

          {/* 詳細情報 */}
          <div className="space-y-3">
            <DetailItem 
              icon="🙏" 
              label="願い事" 
              value={result.wish}
            />
            <DetailItem 
              icon="💼" 
              label="仕事運" 
              value={result.business}
            />
            <DetailItem 
              icon="💕" 
              label="恋愛運" 
              value={result.love}
            />
            <DetailItem 
              icon="💪" 
              label="健康運" 
              value={result.health}
            />
            
            {/* 区切り線 */}
            <div className="py-2">
              <div className="border-t-2 border-dashed border-[var(--pink)]/20" />
            </div>
            
            <DetailItem 
              icon="🎁" 
              label="ラッキーアイテム" 
              value={result.luckyItem}
              highlight
            />
            <div className="flex gap-3">
              <div className="flex-1 bg-white rounded-xl p-3 border border-[var(--pink)]/15 shadow-sm">
                <p className="text-xs text-gray-500 mb-0.5 font-medium">🎨 ラッキーカラー</p>
                <p className="text-[var(--foreground)] font-bold">{result.luckyColor}</p>
              </div>
              <div className="flex-1 bg-white rounded-xl p-3 border border-[var(--pink)]/15 shadow-sm">
                <p className="text-xs text-gray-500 mb-0.5 font-medium">🔢 ラッキーナンバー</p>
                <p className="text-[var(--foreground)] font-bold">{result.luckyNumber}</p>
              </div>
            </div>
          </div>

          {/* お金のヒント */}
          <div className="mt-5 bg-gradient-to-r from-[var(--gold)]/10 to-[var(--gold)]/5 rounded-xl p-4 border border-[var(--gold)]/20">
            <p className="text-sm text-[var(--gold-dark)] leading-relaxed font-medium">
              {result.moneyHint}
            </p>
          </div>

          {/* 助言 */}
          <div className="mt-6 pt-6 border-t-2 border-dashed border-[var(--pink)]/30">
            <div className="bg-gradient-to-r from-[var(--red)]/5 to-[var(--pink)]/5 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="text-xs text-[var(--red)]/70 mb-1 tracking-wider font-bold">今年のメッセージ</p>
                  <p className="text-[var(--red)] font-bold text-lg leading-relaxed">
                    「{result.advice}」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 下部の装飾帯 */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--red)] via-[var(--pink)] to-[var(--gold)]" />
      </div>

      {/* アクションボタン */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRetry}
          className="btn-festive px-8 py-4 rounded-full shadow-lg flex items-center justify-center gap-2 text-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          もう一度引く
        </button>
      </div>

      {/* 免責事項 */}
      <p className="mt-8 text-center text-xs text-gray-400 leading-relaxed font-medium">
        ※このおみくじはお遊び目的のエンターテインメントです。<br />
        楽しんでいただければ幸いです 🌸
      </p>
    </div>
  );
}

function DetailItem({ 
  icon, 
  label, 
  value, 
  highlight = false 
}: { 
  icon: string; 
  label: string; 
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl ${
      highlight 
        ? 'bg-gradient-to-r from-[var(--gold)]/15 to-[var(--gold)]/5 border border-[var(--gold)]/25' 
        : 'bg-white border border-[var(--pink)]/15'
    } shadow-sm`}>
      <span className="text-xl">{icon}</span>
      <div className="flex-1">
        <p className="text-xs text-gray-500 mb-0.5 font-medium">{label}</p>
        <p className={`font-medium ${highlight ? 'text-[var(--gold-dark)]' : 'text-[var(--foreground)]'}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
