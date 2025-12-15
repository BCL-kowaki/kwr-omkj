export type OmikujiRank = '大吉' | '中吉' | '小吉' | '吉' | '末吉';

export interface OmikujiResult {
  rank: OmikujiRank;
  overall: string;
  wish: string;
  business: string;
  love: string;
  health: string;
  luckyItem: string;
  luckyColor: string;
  luckyNumber: number;
  moneyHint: string; // 軽い投資・お金のヒント
  advice: string;
  color: string;
}

// 一般的なおみくじ結果データ（少しだけ投資要素を残す）
const omikujiData: Record<OmikujiRank, OmikujiResult[]> = {
  '大吉': [
    {
      rank: '大吉',
      overall: '最高の運気！何事も積極的に取り組めば、素晴らしい結果が待っています。',
      wish: '願い事は叶う。強く念じて行動せよ。',
      business: '大きな成功の兆し。新しい挑戦も吉。',
      love: '素敵な出会いあり。既存の関係も深まる。',
      health: '活力に満ち溢れる一年。',
      luckyItem: 'ゴールドのアクセサリー',
      luckyColor: '赤・金',
      luckyNumber: 8,
      moneyHint: '💰 お金の流れ良好。思い切った決断が実を結ぶかも？',
      advice: '自信を持って前へ進め！',
      color: '#c41e3a'
    },
    {
      rank: '大吉',
      overall: '飛躍の年。あなたの努力が大きく報われる時が来ました。',
      wish: '大きな願いほど叶いやすい。',
      business: '周囲からの信頼厚く、昇進・成功の運あり。',
      love: '運命的な出会いの予感。',
      health: '心身ともに充実。',
      luckyItem: '革製品',
      luckyColor: '白・ゴールド',
      luckyNumber: 7,
      moneyHint: '💰 臨時収入の兆しあり。チャンスを逃さずに。',
      advice: '夢は大きく、行動は今すぐに！',
      color: '#c41e3a'
    }
  ],
  '中吉': [
    {
      rank: '中吉',
      overall: '安定した運気。コツコツと努力を続ければ、確実に成果が出ます。',
      wish: '焦らず進めば願いは叶う。',
      business: '堅実な成長あり。チームワークが鍵。',
      love: '穏やかで温かい関係が築ける。',
      health: '規則正しい生活が吉。',
      luckyItem: '手帳・ノート',
      luckyColor: '青・緑',
      luckyNumber: 3,
      moneyHint: '💰 堅実な管理が吉。少しずつ貯めると良いことが。',
      advice: '一歩一歩、着実に進もう。',
      color: '#d4a017'
    },
    {
      rank: '中吉',
      overall: '良い流れの中にいます。周囲との調和を大切に。',
      wish: '人の助けを借りれば叶う。',
      business: '協力者に恵まれる。感謝を忘れずに。',
      love: '相手を思いやる心が幸運を呼ぶ。',
      health: '適度な運動が吉。',
      luckyItem: '植物・花',
      luckyColor: 'オレンジ・黄',
      luckyNumber: 5,
      moneyHint: '💰 無理のない範囲で計画的に。バランスが大事。',
      advice: '感謝の心を忘れずに。',
      color: '#d4a017'
    }
  ],
  '小吉': [
    {
      rank: '小吉',
      overall: '小さな幸せが積み重なる年。日常の中に喜びを見つけよう。',
      wish: '小さな願いから叶えていこう。',
      business: '地道な努力が認められる。',
      love: '友情から始まる恋もあり。',
      health: '無理せず休息も大切に。',
      luckyItem: 'お気に入りのマグカップ',
      luckyColor: 'ピンク・水色',
      luckyNumber: 2,
      moneyHint: '💰 小さな節約が大きな実りに。コツコツが吉。',
      advice: '小さな一歩を大切に。',
      color: '#e5751f'
    },
    {
      rank: '小吉',
      overall: '学びの多い年。新しい知識や経験が運気を上げる。',
      wish: '努力次第で叶う可能性あり。',
      business: 'スキルアップが成功への近道。',
      love: '共通の趣味が縁を結ぶ。',
      health: '新しい健康習慣を始めると吉。',
      luckyItem: '本・雑誌',
      luckyColor: '紫・グレー',
      luckyNumber: 4,
      moneyHint: '💰 勉強・自己投資にお金を使うと後で返ってくる。',
      advice: '学ぶ姿勢が幸運を呼ぶ。',
      color: '#e5751f'
    }
  ],
  '吉': [
    {
      rank: '吉',
      overall: '穏やかな運気。焦らず自分のペースで進めば大丈夫。',
      wish: '時間をかければ叶う。',
      business: '現状維持も一つの成功。',
      love: '今ある関係を大切に。',
      health: '心の安らぎを優先して。',
      luckyItem: 'アロマ・お香',
      luckyColor: 'ベージュ・茶',
      luckyNumber: 6,
      moneyHint: '💰 守りの姿勢が吉。無理な出費は控えめに。',
      advice: '焦らず、自分らしく。',
      color: '#b8860b'
    },
    {
      rank: '吉',
      overall: '静かだが確かな運気。内省の時間が大切。',
      wish: '心を落ち着けて願えば叶う。',
      business: '準備期間と捉えて力を蓄えよ。',
      love: '自分磨きが良縁を呼ぶ。',
      health: 'リラックスする時間を作ろう。',
      luckyItem: '音楽・楽器',
      luckyColor: '白・アイボリー',
      luckyNumber: 1,
      moneyHint: '💰 焦らず待てば好機あり。準備を怠らずに。',
      advice: '静かに力を蓄える時。',
      color: '#b8860b'
    }
  ],
  '末吉': [
    {
      rank: '末吉',
      overall: '今は種まきの時期。未来への準備をしっかりと。',
      wish: '今は叶わずとも、やがて花開く。',
      business: '基礎固めの時期。焦らず学ぼう。',
      love: '自分を好きになることから始めよう。',
      health: '生活習慣の見直しが吉。',
      luckyItem: '日記・メモ帳',
      luckyColor: '深緑・紺',
      luckyNumber: 9,
      moneyHint: '💰 今は貯める時期。地道が一番の近道。',
      advice: '今日の努力が明日を作る。',
      color: '#7c6a4f'
    },
    {
      rank: '末吉',
      overall: '運気は上昇中。諦めずに続ければ光が見える。',
      wish: '粘り強く願い続けることが大切。',
      business: '小さな成功を積み重ねよう。',
      love: '焦らず自然体で。',
      health: '睡眠をしっかりとろう。',
      luckyItem: 'クッション・枕',
      luckyColor: 'ラベンダー・グレー',
      luckyNumber: 0,
      moneyHint: '💰 まずは足元を固めて。無理は禁物。',
      advice: '明けない夜はない。前を向こう。',
      color: '#7c6a4f'
    }
  ]
};

// おみくじを引く関数（良い結果が出やすい）
export function drawOmikuji(): OmikujiResult {
  const random = Math.random() * 100;
  
  let rank: OmikujiRank;
  
  // 良い結果が出やすい重み付け
  // 大吉: 30%, 中吉: 30%, 小吉: 20%, 吉: 15%, 末吉: 5%
  if (random < 30) {
    rank = '大吉';
  } else if (random < 60) {
    rank = '中吉';
  } else if (random < 80) {
    rank = '小吉';
  } else if (random < 95) {
    rank = '吉';
  } else {
    rank = '末吉';
  }
  
  const results = omikujiData[rank];
  const randomIndex = Math.floor(Math.random() * results.length);
  
  return results[randomIndex];
}

// ランクに応じた装飾情報
export function getRankDecoration(rank: OmikujiRank) {
  const decorations = {
    '大吉': {
      emoji: '🎊',
      bgGradient: 'from-red-50 via-white to-yellow-50',
      borderColor: 'border-red-400',
      textColor: 'text-red-600',
      particles: 12
    },
    '中吉': {
      emoji: '✨',
      bgGradient: 'from-amber-50 via-white to-yellow-50',
      borderColor: 'border-amber-400',
      textColor: 'text-amber-600',
      particles: 8
    },
    '小吉': {
      emoji: '🌟',
      bgGradient: 'from-orange-50 via-white to-amber-50',
      borderColor: 'border-orange-400',
      textColor: 'text-orange-600',
      particles: 6
    },
    '吉': {
      emoji: '💫',
      bgGradient: 'from-yellow-50 via-white to-amber-50',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-700',
      particles: 4
    },
    '末吉': {
      emoji: '🍀',
      bgGradient: 'from-green-50 via-white to-lime-50',
      borderColor: 'border-green-400',
      textColor: 'text-green-700',
      particles: 3
    }
  };
  
  return decorations[rank];
}
