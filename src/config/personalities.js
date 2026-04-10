// 12种大连球迷类型定义

export const personalities = {
  'A': {
    id: 'A',
    name: '热血派',
    subtitle: '现场是我的灵魂',
    image: '/images/rexuepai.jpg',
    colors: { primary: '#e74c3c', secondary: '#c0392b', accent: '#e74c3c' },
    traits: ['狂热', '激情', '不离不弃', '战斗'],
    description: '你是大连球迷中的「热血派」！去现场是你的宿命，喊破喉咙是你的日常。球队输球你哭，赢球你更哭。你不是在看球，是在燃烧自己的生命！只要大连赢，你啥都干得出来！',
    strengths: ['现场气氛组', '感情最丰富', '最疯狂', '最真诚'],
    compatibility: '和理性派互补',
    quote: '"为了大连!我他妈的什么都愿意!"'
  },
  'B': {
    id: 'B',
    name: '理性派',
    subtitle: '用数据说话',
    image: '/images/lixingpai.png',
    colors: { primary: '#3498db', secondary: '#2980b9', accent: '#3498db' },
    traits: ['理性', '分析', '数据控', '深度'],
    description: '你是大连球迷中的「理性派」。你懂的比教练多，看的比解说细。什么xG、预期进球、传球成功率...你门儿清。别人看球，你写论文。你用科学的方式热爱大连。',
    strengths: ['分析透彻', '数据精准', '有独立思考', '不被情绪左右'],
    compatibility: '和热血派互补',
    quote: '"这个xG预期，比实际进球多了0.7个"'
  },
  'C': {
    id: 'C',
    name: '战斗派',
    subtitle: '怼天怼地',
    image: '/images/type-c.svg',
    colors: { primary: '#e67e22', secondary: '#d35400', accent: '#e67e22' },
    traits: ['好斗', '直接', '不吃亏', '战斗'],
    description: '你是大连球迷中的「战斗派」。看球必骂裁判，输球必喷球员。没有人能在你面前黑大连，你第一个冲上去对线。球队就是你的阵地，敌人来了就是一个字——干！',
    strengths: ['战斗力强', '护大连心切', '敢爱敢恨', '不受气'],
    compatibility: '和热血派互补',
    quote: '"CNM!会不会踢球!?"'
  },
  'D': {
    id: 'D',
    name: '死忠派',
    subtitle: '万达才是本体',
    image: '/images/type-d.svg',
    colors: { primary: '#27ae60', secondary: '#1e8449', accent: '#27ae60' },
    traits: ['死忠', '念旧', '不接受', '坚持'],
    description: '你是大连「死忠派」！万达是信仰，实德是回忆，阿尔滨一方英博？不存在！球队可以改名换壳，但你只认最开始的那支球队。新队？反正我不认！',
    strengths: ['最念旧', '不接受变迁', '坚持初心', '不接受商业化'],
    compatibility: '和远征军互补',
    quote: '"万达才是我的主队，其他我不认"'
  },
  'E': {
    id: 'E',
    name: '中立派',
    subtitle: '开心最重要',
    image: '/images/type-e.svg',
    colors: { primary: '#9b59b6', secondary: '#8e44ad', accent: '#9b59b6' },
    traits: ['平和', '乐观', '中立', '享受'],
    description: '你是大连「中立派」。赢了开心，输了也无所谓——毕竟还有球看。你不去现场但你会看直播，你不骂人但你会笑。你把看球当成生活的乐子，不争不吵，图一乐。',
    strengths: ['最乐观', '最洒脱', '不争不吵', '享受足球'],
    compatibility: '和战斗派互补',
    quote: '"踢成啥样不是看嘛，图一乐得了"'
  },
  'F': {
    id: 'F',
    name: '远征军',
    subtitle: '客场是我的命',
    image: '/images/type-f.svg',
    colors: { primary: '#ff5722', secondary: '#f4511e', accent: '#ff5722' },
    traits: ['客场', '追随', '狂热', '组织'],
    description: '你是大连「远征军」！主场算啥，客场才是真章。不管是北京上海还是广州，只要有大连队的比赛，你的身影就不会缺席。你是组织的人，也是远征的魂！',
    strengths: ['最忠诚', '客场杀手', '组织归属', '远征达人'],
    compatibility: '和热血派',
    quote: '"远征使我快乐!"'
  },
  'G': {
    id: 'G',
    name: '社交球迷',
    subtitle: '看球是社交局',
    image: '/images/type-g.svg',
    colors: { primary: '#ffc107', secondary: '#ffb300', accent: '#ffc107' },
    traits: ['社交', '热闹', '聚会', '开心'],
    description: '你看球不完全是为了球，更多是为了见朋友、喝酒、吹水。看球就是个由头，开心才是目的。酒吧一坐，兄弟一喊，这就是你的足球生活。',
    strengths: ['朋友多', '气氛组', '会来事', '开心果'],
    compatibility: '和热血派',
    quote: '"看球不重要，重要的是咱们聚聚"'
  },
  'H': {
    id: 'H',
    name: '收藏癖',
    subtitle: '球衣周边收集者',
    image: '/images/type-h.svg',
    colors: { primary: '#795548', secondary: '#6d4c41', accent: '#795548' },
    traits: ['收藏', '珍贵', '回忆', '深情'],
    description: '你是大连球迷中的「收藏癖」。球衣、围巾、签名照...你有一柜子的宝贝。每一件都有故事，每一件都是回忆。你被伤过很多次，但你还爱着。',
    strengths: ['收藏丰富', '有故事', '回忆杀', '最长情'],
    compatibility: '和死忠派共鸣',
    quote: '"这件签名球衣，市面上没有了"'
  },
  'I': {
    id: 'I',
    name: '辽宁铁人',
    subtitle: '1234辽宁必胜',
    image: '/images/type-i.svg',
    colors: { primary: '#4caf50', secondary: '#388e3c', accent: '#4caf50' },
    traits: ['死敌', '禁止窥视', '自重', '吵闹'],
    description: '你是「辽宁铁人」球迷！不管大连在中超还是中甲，不管赢球还是输球，你一种奇怪的方式关注了这支死敌球队。',
    strengths: ['吵闹邻居', '禽类饮食爱好者', '沈阳队', '地域临近'],
    compatibility: '无',
    quote: '"大连踢谁，我就支持谁"'
  },
  'J': {
    id: 'J',
    name: '冠军球迷',
    subtitle: '赢了才关注',
    image: '/images/type-j.svg',
    colors: { primary: '#ffd700', secondary: '#ffc107', accent: '#ffd700' },
    traits: ['冠军', '成绩', '荣誉', '骄傲'],
    description: '你是大连「冠军球迷」！大连赢球你狂跳，大连输球你消失。只要大连成绩好，你就是最狂热的粉丝。虽然有点...但谁不喜欢赢球呢？',
    strengths: ['有激情', '能庆祝', '锦上添花', '与有荣焉'],
    compatibility: '和热血派',
    quote: '"不惜看吧，上极好个火了"'
  },
  'K': {
    id: 'K',
    name: '王大爷',
    subtitle: '大连老球迷典范',
    image: '/images/wangdaye.jpg',
    colors: { primary: '#f44336', secondary: '#d32f2f', accent: '#f44336' },
    traits: ['激情', '传统', '豪爽', '仗义'],
    description: '你是大连球迷界的「王大爷」！脱上衣、喊口号、文明城市我做代表。年轻球迷都得服我，我是大连球迷的活招牌！',
    strengths: ['气氛担当', '经验丰富', '激情满满', '大连名片'],
    compatibility: '受所有球迷尊敬',
    quote: '"我们这一次一定要体现出大连文明城市!"'
  },
  'L': {
    id: 'L',
    name: '云球迷',
    subtitle: '线上看球',
    image: '/images/type-l.svg',
    colors: { primary: '#607d8b', secondary: '#546e7a', accent: '#607d8b' },
    traits: ['远程', '方便', '经济', '随性'],
    description: '你是大连「云球迷」。你不在现场，但你在屏幕前。用最少的钱，看最多的球。线上看热闹、点评、凑个热闹，这就是你的看球style！',
    strengths: ['省钱', '方便', '随时随地', '赛博参与'],
    compatibility: '和中立派',
    quote: '"有没有免费看球的链接啊？"'
  }
}

export const personalityOrder = [
  'K', 'I', 'J', 'L',  // 特殊类型优先
  'A', 'B', 'C', 'D', 'E',  // 基础5种
  'F', 'G', 'H'  // 扩展
]

export default personalities