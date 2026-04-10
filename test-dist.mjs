import { questions } from './src/config/questions.js';
import { personalities } from './src/config/personalities.js';

// 新算法: tags优先 + 基础分值后备
function calcResult(answers) {
  const counts = {};
  const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };

  Object.entries(answers).forEach(([qId, optIdx]) => {
    const q = questions.find(q => q.id === Number(qId));
    if (!q || !q.options[optIdx]) return;
    const opt = q.options[optIdx];
    if (opt.tags) opt.tags.forEach(t => { counts[t] = (counts[t] || 0) + 1; });
    if (scores[opt.scores] !== undefined) scores[opt.scores]++;
  });

  // 1. 特殊>=4
  const specials = ['王大爷','辽宁铁人','云端球迷','冠军球迷','对线王','懂王'];
  for (const s of specials) {
    if (counts[s] >= 4) return s;
  }

  // 2. tags最多的
  const bases = ['热血派','理性派','战斗派','传统派','中立派','活化石','战术大师','球迷组织成员','数据帝','云球迷','远征军','社交球迷','收藏癖','心碎球迷','养生球迷','夜猫子'];
  let max = null, maxVal = 0;
  for (const b of bases) {
    if ((counts[b]||0) > maxVal) { maxVal = counts[b]; max = b; }
  }

  // 3. tags>=1用tags，否则用基础分值
  if (max && maxVal >= 1) return max;

  let maxS = 'A', maxSVal = 0;
  Object.entries(scores).forEach(([k,v]) => { if (v > maxSVal) { maxSVal = v; maxS = k; } });
  const map = { A: '热血派', B: '理性派', C: '战斗派', D: '传统派', E: '中立派' };
  return map[maxS];
}

// 统计
const typeStats = {};
Object.values(personalities).forEach(p => { typeStats[p.name] = 0; });

// 测试
for (let i = 0; i < 10000; i++) {
  const ans = {};
  for (let q = 1; q <= 20; q++) ans[q] = Math.floor(Math.random() * 5);
  const r = calcResult(ans);
  if (r) typeStats[r] = (typeStats[r] || 0) + 1;
}

// 输出
const sorted = Object.entries(typeStats).sort((a,b) => b[1] - a[1]);
console.log('\n=== tags优先+基础分值后备 ===');
sorted.slice(0, 22).forEach(([t,c]) => {
  console.log(t.padEnd(14) + c.toString().padStart(5) + '  ' + (c/100).toFixed(1) + '%');
});