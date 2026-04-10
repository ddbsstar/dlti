import { questions } from './src/config/questions.js';
import { personalities } from './src/config/personalities.js';

// 12种类型计算
function calcResult(answers) {
  const tagCounts = {};
  const scoreCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  Object.entries(answers).forEach(([qId, optIdx]) => {
    const q = questions.find(q => q.id === Number(qId));
    if (!q || !q.options[optIdx]) return;
    const opt = q.options[optIdx];
    if (opt.tags) opt.tags.forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; });
    if (scoreCounts[opt.scores] !== undefined) scoreCounts[opt.scores]++;
  });

  // 特殊类型>=3
  const specialNames = ['王大爷', '辽宁铁人', '冠军球迷', '远征军', '社交球迷', '收藏癖', '云球迷'];
  for (const n of specialNames) {
    if (tagCounts[n] >= 3) return n;
  }

  // 最多匹配
  const allNames = ['热血派', '理性派', '战斗派', '死忠派', '中立派', '远征军', '社交球迷', '收藏癖', '云球迷'];
  let max = null, maxVal = 0;
  for (const n of allNames) {
    if ((tagCounts[n]||0) > maxVal) { maxVal = tagCounts[n]; max = n; }
  }
  if (max && maxVal >= 1) return max;

  // 基础分值
  const map = { A: '热血派', B: '理性派', C: '战斗派', D: '死忠派', E: '中立派' };
  let maxS = 'A', maxSVal = 0;
  Object.entries(scoreCounts).forEach(([k,v]) => { if (v > maxSVal) { maxSVal = v; maxS = k; } });
  return map[maxS];
}

const typeStats = {};
Object.values(personalities).forEach(p => { typeStats[p.name] = 0; });

// 随机测试10000次
for (let i = 0; i < 10000; i++) {
  const ans = {};
  for (let q = 1; q <= 20; q++) ans[q] = Math.floor(Math.random() * 5);
  const r = calcResult(ans);
  if (r) typeStats[r]++;
}

const sorted = Object.entries(typeStats).sort((a,b) => b[1] - a[1]);
console.log('\n=== 12种类型分布 (随机10000次) ===');
console.log('类型          次数   概率');
console.log('---------------------------');
sorted.forEach(([t,c]) => {
  console.log(t.padEnd(12) + c.toString().padStart(5) + '  ' + (c/100).toFixed(1) + '%');
});