'use client';

import { useState, useCallback } from 'react';
import OmikujiBox from '@/components/OmikujiBox';
import OmikujiResult from '@/components/OmikujiResult';
import { drawOmikuji, OmikujiResult as Result } from '@/lib/omikuji';

export default function Home() {
  const [result, setResult] = useState<Result | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleDraw = useCallback(() => {
    setIsDrawing(true);
    setShowResult(false);
    setResult(null);

    // おみくじを引くアニメーション
    setTimeout(() => {
      const omikujiResult = drawOmikuji();
      setResult(omikujiResult);
      setIsDrawing(false);
      
      // 結果表示のディレイ
      setTimeout(() => {
        setShowResult(true);
      }, 100);
    }, 1500);
  }, []);

  const handleRetry = useCallback(() => {
    setShowResult(false);
    setResult(null);
    // スクロールをトップに
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 装飾的なライン */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--red)] via-[var(--pink)] to-[var(--gold)]" />
        
        {/* 浮遊する装飾 */}
        <div className="absolute bottom-32 left-8 text-3xl opacity-25 animate-float" style={{ animationDelay: '0s' }}>🌸</div>
        <div className="absolute bottom-48 right-8 text-2xl opacity-25 animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute top-32 left-12 text-2xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>💫</div>
        <div className="absolute top-48 right-12 text-3xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>🌟</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12">
        {/* ヘッダー */}
        <header className="text-center mb-12 sm:mb-16">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
            <span className="text-gradient-festive">KAWARA版</span>
            <br className="sm:hidden" />
            <span className="text-[var(--foreground)]"> 2026年</span>
            <br />
            <span className="text-gradient-gold">おみくじ</span>
          </h1>
          
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-medium">
            🎍 2026年あなたの運勢は？ 🎍
          </p>
        </header>

        {/* メインコンテンツ */}
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          {!showResult ? (
            <OmikujiBox onDraw={handleDraw} isDrawing={isDrawing} />
          ) : (
            result && <OmikujiResult result={result} onRetry={handleRetry} />
          )}
        </div>

        {/* フッター */}
        <footer className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center gap-3 text-gray-400 text-xs bg-gray-50 px-4 py-2 rounded-[3px] font-medium">
            <span>🎍</span>
            <span>© 2025 投資の"KAWARA"版.com</span>
            <span>🎍</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
