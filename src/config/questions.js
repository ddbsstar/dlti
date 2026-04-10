// 20道题，每题5选项，tags均衡分布
// A/B/C/D/E 分别对应 热血派/理性派/战斗派/死忠派/中立派 为主
// 每题同时有多个类型的tags

export const questions = [
  {
    id: 1, text: '观看大连队比赛时，你更喜欢？', options: [
      { text: '去现场感受热血氛围，我是球迷组织的一员', scores: 'A', tags: ['热血派', '远征军'] },
      { text: '约朋友一起喝凯龙看，边看边聊', scores: 'E', tags: ['中立派', '社交球迷'] },
      { text: '安静在家看，仔细分析战术', scores: 'B', tags: ['理性派'] },
      { text: '去现场看球加油', scores: 'C', tags: ['战斗派', '远征军'] },
      { text: '我从来不看', scores: 'D', tags: ['死忠派', '辽宁铁人'] },
    ]
  },
  {
    id: 2, text: '球队苦苦保级，难求一胜，你会？', options: [
      { text: '持续支持大连队，直至最后一刻', scores: 'A', tags: ['热血派'] },
      { text: '减少观看次数', scores: 'B', tags: ['理性派', '辽宁铁人'] },
      { text: '没什么特别感觉，看淡了', scores: 'E', tags: ['中立派'] },
      { text: '发帖抱怨：首发都是关系户', scores: 'C', tags: ['战斗派'] },
      { text: '骂球队高层，要求退钱', scores: 'D', tags: ['死忠派'] },
    ]
  },
  {
    id: 3, text: '当大连队购买外援达不到预期你会？', options: [
      { text: '买卖有赚有赔其实很正常', scores: 'E', tags: ['中立派'] },
      { text: '默默等待，相信只是最近状态不好', scores: 'A', tags: ['热血派'] },
      { text: '仔细分析达不到预期的原因，写帖子分析', scores: 'B', tags: ['理性派'] },
      { text: '我不想知道为什么不行我只是支持球队', scores: 'D', tags: ['死忠派'] },
      { text: '表达观点，早就不看好了', scores: 'C', tags: ['战斗派'] },
    ]
  },
  {
    id: 4, text: '球队在一场艰难的比赛中绝杀你会？', options: [
      { text: '怒爆粗口（CNXM）发泄之前的郁闷', scores: 'C', tags: ['战斗派', '王大爷'] },
      { text: '和周围的人左拥右抱，一起庆祝', scores: 'A', tags: ['热血派', '远征军'] },
      { text: '冷静的起来鼓掌表达开心', scores: 'B', tags: ['理性派'] },
      { text: '没有完全感到兴奋，因为之前的表现不满足预期', scores: 'D', tags: ['死忠派'] },
      { text: '脱下上衣，直接冲场', scores: 'C', tags: ['战斗派', '王大爷'] },
    ]
  },
  {
    id: 5, text: '对于"文明观赛，争做滨城好青年"你的态度是？', options: [
      // ... 继续
      { text: '严格遵守规则，认为文明观赛是对的', scores: 'D', tags: ['死忠派'] },
      { text: '保持沉默，心里十分不认可这种限制', scores: 'C', tags: ['战斗派'] },
      { text: '我并不关心我只是看球的', scores: 'E', tags: ['中立派'] },
      { text: '我可去喃爹个鸡额的', scores: 'C', tags: ['战斗派'] },
      { text: '我们这一次一定要体现出大连文明城市', scores: 'A', tags: ['热血派', '王大爷'] },
    ]
  },
  // 简化处理 - 批量重写剩余题目
  {
    id: 6, text: '大连队有新球员加入时，你最关心？', options: [
      { text: '这笔买卖是否合适，值不值', scores: 'B', tags: ['理性派'] },
      { text: '他能否适应球队，融入体系', scores: 'B', tags: ['理性派'] },
      { text: '他的数据会有什么变化', scores: 'B', tags: ['理性派'] },
      { text: '能和本土球员有更多配合吗', scores: 'E', tags: ['中立派'] },
      { text: '关注他的上场时间，能不能打上比赛', scores: 'D', tags: ['死忠派'] },
    ]
  },
  {
    id: 7, text: '你会为大连队做最大的事是？', options: [
      { text: '去现场支持大连队', scores: 'A', tags: ['热血派', '远征军'] },
      { text: '不畏路途前去远征客场', scores: 'A', tags: ['远征军'] },
      { text: '我已经将大连队徽纹在身上!', scores: 'D', tags: ['收藏癖'] },
      { text: '为大连队流眼泪', scores: 'A', tags: ['热血派'] },
      { text: '足球只是生活的一部分', scores: 'E', tags: ['中立派', '云球迷'] },
    ]
  },
  {
    id: 8, text: '看到有人黑大连队，你？', options: [
      { text: '立刻回击据理力争', scores: 'C', tags: ['战斗派'] },
      { text: '冷静地列举事实反驳', scores: 'B', tags: ['理性派'] },
      { text: '默默拉黑不想争论', scores: 'E', tags: ['中立派'] },
      { text: '进行对线，骂个你死我活', scores: 'C', tags: ['战斗派'] },
      { text: '举报评论不想看到', scores: 'C', tags: ['战斗派'] },
    ]
  },
  {
    id: 9, text: '你欣赏大连队的什么品质？', options: [
      { text: '永不放弃的精神', scores: 'A', tags: ['热血派', '冠军球迷'] },
      { text: '骄傲的大连足球城血脉', scores: 'D', tags: ['死忠派'] },
      { text: '乐观开朗的性格魅力', scores: 'A', tags: ['热血派'] },
      { text: '不断进化的技战术水平', scores: 'B', tags: ['理性派'] },
      { text: '对球迷的真诚回馈', scores: 'E', tags: ['中立派'] },
    ]
  },
  {
    id: 10, text: '见到大连队球员，你会？', options: [
      { text: '和他们合影签名，大喊大连', scores: 'A', tags: ['热血派', '王大爷'] },
      { text: '请教足球技巧和训练方法', scores: 'B', tags: ['理性派'] },
      { text: '安静地要个签名就好', scores: 'D', tags: ['收藏癖'] },
      { text: '聊聊人生规划和信仰', scores: 'B', tags: ['理性派'] },
      { text: '质问他，为什么那个点球没进', scores: 'C', tags: ['战斗派'] },
    ]
  },
  {
    id: 11, text: '你更喜欢大连队伍哪个时期？', options: [
      { text: '辉煌期 - 夺冠那些年才是真正的大连队', scores: 'D', tags: ['死忠派'] },
      { text: '有苦有甜 - 那些年的起起伏伏', scores: 'D', tags: ['死忠派'] },
      { text: '金元时代 - 我就喜欢大连赢', scores: 'A', tags: ['热血派', '冠军球迷'] },
      { text: '现在 - 重新出发，复兴城市的光辉', scores: 'A', tags: ['热血派'] },
      { text: '每个时期都喜欢，城市球迷，只为大连这俩个字', scores: 'D', tags: ['死忠派'] },
    ]
  },
  {
    id: 12, text: '你认为大连是否长期在裁判的判罚上吃亏？', options: [
      { text: '并不是，只不过我支持大连才有这种感觉', scores: 'B', tags: ['理性派'] },
      { text: '裁判很菜，大连只是运气不好', scores: 'E', tags: ['中立派'] },
      { text: '有事大连办，没事办大连', scores: 'C', tags: ['战斗派'] },
      { text: '只有个别几个裁判一直针对大连', scores: 'C', tags: ['战斗派'] },
      { text: '裁判的判罚十分正确', scores: 'D', tags: ['死忠派'] },
    ]
  },
  {
    id: 13, text: '你和其他大连球迷交流时更在意？', options: [
      { text: '能不能合得来，气氛开心', scores: 'A', tags: ['社交球迷'] },
      { text: '对方懂不懂球，有共同话题', scores: 'B', tags: ['理性派'] },
      { text: '互相分享资源和消息', scores: 'B', tags: ['理性派'] },
      { text: '尊重彼此的看法，不争对错', scores: 'E', tags: ['中立派'] },
      { text: '看对方是否真诚友善', scores: 'A', tags: ['社交球迷'] },
    ]
  },
  {
    id: 14, text: '关于大连队的发展建议，你更倾向？', options: [
      { text: '加大投入，冲击冠军', scores: 'A', tags: ['热血派', '冠军球迷'] },
      { text: '稳定能有个球看就行', scores: 'E', tags: ['中立派'] },
      { text: '做好青训，着眼未来', scores: 'B', tags: ['理性派'] },
      { text: '专注公益和球迷文化', scores: 'A', tags: ['热血派'] },
      { text: '做自己喜欢的事就好', scores: 'E', tags: ['中立派'] },
    ]
  },
  {
    id: 15, text: '你是什么时候开始喜欢大连队的？', options: [
      { text: '这是一个问题？', scores: 'D', tags: ['死忠派'] },
      { text: '外地人，来大连后才知道的', scores: 'D', tags: ['死忠派', '收藏癖'] },
      { text: '我从小就是大连球迷', scores: 'D', tags: ['死忠派'] },
      { text: '朋友推荐后入坑的', scores: 'A', tags: ['热血派', '冠军球迷'] },
      { text: '最近才开始关注', scores: 'E', tags: ['中立派', '云球迷'] },
    ]
  },
  {
    id: 16, text: '用什么词形容大连队最贴切？', options: [
      { text: '热血 - 永不放弃', scores: 'A', tags: ['热血派'] },
      { text: '稳定 - 持续输出', scores: 'B', tags: ['理性派'] },
      { text: '血臭 - 不惜看吧', scores: 'C', tags: ['战斗派'] },
      { text: '传承 - 足球城', scores: 'D', tags: ['死忠派'] },
      { text: '坚持 - 从不认输', scores: 'A', tags: ['热血派'] },
    ]
  },
  {
    id: 17, text: '你希望大连队未来怎样？', options: [
      { text: '复兴城市的光辉', scores: 'A', tags: ['热血派'] },
      { text: '稳定立足中超', scores: 'D', tags: ['死忠派'] },
      { text: '转型培养新人', scores: 'B', tags: ['理性派'] },
      { text: '做自己想做的事就好', scores: 'E', tags: ['中立派'] },
      { text: '各级别大连队都稳定运营', scores: 'D', tags: ['死忠派', '收藏癖'] },
    ]
  },
  {
    id: 18, text: '你看球的同时也会踢球么？', options: [
      { text: '我自己就是球员', scores: 'B', tags: ['理性派'] },
      { text: '踢从小就踢球', scores: 'B', tags: ['理性派'] },
      { text: '我只看，不踢', scores: 'E', tags: ['云球迷'] },
      { text: '以前踢，现在只看', scores: 'D', tags: ['死忠派'] },
      { text: '看球就够了，踢球太累', scores: 'E', tags: ['中立派'] },
    ]
  },
  {
    id: 19, text: '你怎么看Ultras死忠球迷文化?', options: [
      { text: '这就是球迷该有的样子', scores: 'A', tags: ['热血派', '远征军'] },
      { text: '太极端，不太能接受', scores: 'E', tags: ['中立派'] },
      { text: '很热血，但要注意安全', scores: 'A', tags: ['热血派'] },
      { text: '尊重他们的选择', scores: 'E', tags: ['中立派'] },
      { text: '关我什么事', scores: 'D', tags: ['死忠派', '辽宁铁人'] },
    ]
  },
  {
    id: 20, text: '如果大连的队伍再次夺冠，你会？', options: [
      { text: '去现场疯狂庆祝', scores: 'A', tags: ['热血派'] },
      { text: '发朋友圈庆祝', scores: 'A', tags: ['社交球迷'] },
      { text: '在家默默流泪', scores: 'A', tags: ['热血派'] },
      { text: '去酒吧和球迷一起庆祝', scores: 'A', tags: ['社交球迷'] },
      { text: '平静地看着直播', scores: 'E', tags: ['中立派'] },
    ]
  },
]

export default questions