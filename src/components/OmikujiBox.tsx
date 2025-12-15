'use client';

import { useState } from 'react';

interface OmikujiBoxProps {
  onDraw: () => void;
  isDrawing: boolean;
}

export default function OmikujiBox({ onDraw, isDrawing }: OmikujiBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* 浮遊する花びら */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-sparkle opacity-50"
            style={{
              left: `${15 + i * 14}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {i % 2 === 0 ? '🌸' : '✨'}
          </div>
        ))}
      </div>

      {/* おみくじ箱 */}
      <div
        className={`relative cursor-pointer transition-all duration-300 ${
          isDrawing ? 'animate-shake' : isHovered ? 'scale-105' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={!isDrawing ? onDraw : undefined}
      >
        {/* 箱本体 */}
        <div className="relative w-52 h-68 sm:w-60 sm:h-80">
          {/* 背面の光 */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[var(--pink)]/15 via-[var(--gold)]/10 to-transparent rounded-2xl blur-2xl transition-opacity duration-300 ${
              isHovered || isDrawing ? 'opacity-100' : 'opacity-50'
            }`}
          />
          
          {/* 箱の形状 */}
          <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[var(--pink)]/20">
            {/* 上部のカラフルな帯 */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-[var(--red)] via-[var(--pink)] to-[var(--gold)]">
              {/* 白の装飾ライン */}
              <div className="absolute bottom-2 left-4 right-4 h-1 bg-white/40 rounded-full" />
            </div>

            {/* 中央の装飾 */}
            <div className="absolute inset-0 flex items-center justify-center pt-8">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-3 animate-bounce-gentle">🎍</div>
                <div className="bg-gradient-to-r from-[var(--red)] to-[var(--pink)] text-white px-5 py-2 rounded-full text-sm tracking-widest font-bold shadow-lg">
                  おみくじ
                </div>
                <div className="mt-3 text-[var(--gold-dark)] text-xs tracking-wider font-bold">
                  2026年 新春
                </div>
              </div>
            </div>

            {/* 口の部分 */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-14 h-5 bg-[var(--red-dark)] rounded-b-lg shadow-inner" />
            
            {/* 側面の装飾 */}
            <div className="absolute bottom-4 left-4 text-2xl opacity-50">🌸</div>
            <div className="absolute bottom-4 right-4 text-2xl opacity-50">🌸</div>
          </div>

          {/* くじ棒のアニメーション */}
          {isDrawing && (
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-2 h-20 bg-gradient-to-b from-[var(--gold-light)] to-[var(--gold)] rounded-full animate-bounce shadow-lg" />
          )}
        </div>
      </div>

      {/* ボタン */}
      <button
        onClick={!isDrawing ? onDraw : undefined}
        disabled={isDrawing}
        className={`mt-10 px-12 py-4 rounded-full text-lg tracking-wider transition-all duration-300 shadow-xl ${
          isDrawing
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed font-bold'
            : 'btn-festive'
        }`}
      >
        {isDrawing ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            占い中...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span>🎯</span>
            運勢を占う！
          </span>
        )}
      </button>

      {/* ヒントテキスト */}
      <p className="mt-4 text-sm text-gray-400 font-medium">
        {isDrawing ? '🌸 くじを引いています... 🌸' : 'タップして2026年の運勢を占おう ✨'}
      </p>
    </div>
  );
}
