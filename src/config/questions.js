// 题目配置 - 40道DL球迷版MBTI测试题（每题5个选项）

export const dimensions = ['EI', 'SN', 'TF', 'JP']

export const questions = [
  {
    id: 1,
    text: '观看林书豪比赛时，你更喜欢？',
    options: [
      { text: '去现场感受热血氛围，和球迷一起欢呼', scores: { EI: 2 } },
      { text: '约朋友一起喝啤酒看直播，边看边聊', scores: { EI: 1, SN: 1 } },
      { text: '安静在家看回放，仔细分析他的战术', scores: { JP: 2 } },
      { text: '独自研究他的传球集锦和技巧', scores: { IN: 1, JP: 1 } },
      { text: '无所谓，哪里看都行', scores: { IP: 1 } },
    ]
  },
  {
    id: 2,
    text: '林书豪「林疯狂」时期，你会？',
    options: [
      { text: '激动地发朋友圈，分享给所有好友', scores: { EI: 2 } },
      { text: '在球迷群里热烈讨论，分析他的表现', scores: { EI: 1, SN: 1 } },
      { text: '默默收藏比赛录像，反复研究', scores: { IP: 1, JP: 1 } },
      { text: '写一篇深度分析文章', scores: { IN: 2 } },
      { text: '没什么特别感觉，看淡了', scores: { TN: 1 } },
    ]
  },
  {
    id: 3,
    text: '当林书豪受伤缺阵时，你？',
    options: [
      { text: '担心得睡不着，到处找最新消息', scores: { TF: 2 } },
      { text: '默默等待，相信他会强势回归', scores: { TJ: 1 } },
      { text: '去翻他以前的精彩集锦解闷', scores: { SN: 1, JP: 1 } },
      { text: '理性分析伤病对球队的影响', scores: { TN: 2 } },
      { text: '希望他好好休息，不急', scores: { IF: 1 } },
    ]
  },
  {
    id: 4,
    text: '你喜欢林书豪的哪种球风？',
    options: [
      { text: '华丽传球，助攻数据爆表', scores: { SN: 2 } },
      { text: '冷静组织，关键时刻不手软', scores: { TJ: 2 } },
      { text: '爆发突破，关键球绝杀', scores: { EP: 2 } },
      { text: '团队至上，牺牲数据成全队友', scores: { TF: 2 } },
      { text: '全面均衡，没有短板', scores: { NT: 1 } },
    ]
  },
  {
    id: 5,
    text: '在球迷群里，你通常是？',
    options: [
      { text: '活跃气氛的开心果', scores: { EI: 2, EP: 1 } },
      { text: '理性分析的技术流', scores: { IN: 1, TN: 1 } },
      { text: '默默围观潜水党', scores: { IP: 2 } },
      { text: '组织活动的群管理', scores: { EI: 1, TJ: 1 } },
      { text: '偶尔冒泡的潜水员', scores: { IP: 1 } },
    ]
  },
  {
    id: 6,
    text: '林书豪加入新球队时，你最关心？',
    options: [
      { text: '球队实力和夺冠前景', scores: { TN: 2 } },
      { text: '他能否适应新环境', scores: { TF: 2 } },
      { text: '他的数据会有什么变化', scores: { SN: 2 } },
      { text: '能和中国球员有更多互动吗', scores: { SF: 2 } },
      { text: '关注他的上场时间', scores: { SJ: 1 } },
    ]
  },
  {
    id: 7,
    text: '你会为林书豪做哪些事？',
    options: [
      { text: '买他的球衣去现场支持', scores: { EI: 1, SF: 1 } },
      { text: '制作应援视频和周边', scores: { NP: 2 } },
      { text: '认真学篮球模仿他的动作', scores: { SJ: 2 } },
      { text: '写邮件鼓励他或寄礼物', scores: { IF: 2 } },
      { text: '只在朋友圈点赞支持', scores: { IP: 1 } },
    ]
  },
  {
    id: 8,
    text: '看到有人黑林书豪，你？',
    options: [
      { text: '立刻回击据理力争', scores: { EP: 2 } },
      { text: '冷静地列举事实反驳', scores: { TJ: 2 } },
      { text: '默默拉黑不想争论', scores: { IP: 2 } },
      { text: '忽略他，不值得浪费时间', scores: { IN: 1, JP: 1 } },
      { text: '举报评论不想看到', scores: { IJ: 1 } },
    ]
  },
  {
    id: 9,
    text: '你欣赏林书豪的什么品质？',
    options: [
      { text: '永不言弃的奋斗精神', scores: { TJ: 2 } },
      { text: '谦逊低调的为人处世', scores: { IF: 2 } },
      { text: '乐观开朗的性格魅力', scores: { EF: 2 } },
      { text: '不断进化的球商球技', scores: { IN: 2 } },
      { text: '对粉丝的真诚回馈', scores: { SF: 1 } },
    ]
  },
  {
    id: 10,
    text: '如果你有机会见林书豪，你想？',
    options: [
      { text: '和他合影签名，大喊我爱你', scores: { EP: 2, EF: 1 } },
      { text: '请教篮球技巧和训练方法', scores: { IN: 1, SJ: 1 } },
      { text: '安静地要个签名就好', scores: { IP: 2 } },
      { text: '聊聊人生规划和信仰', scores: { IF: 2, IN: 1 } },
      { text: '问他下一个目标是什么', scores: { NT: 1 } },
    ]
  },
  {
    id: 11,
    text: '你更喜欢林书豪职业生涯哪个时期？',
    options: [
      { text: '林疯狂时期 - 惊天逆袭', scores: { EP: 2, NP: 1 } },
      { text: '火箭时期 - 稳定成长', scores: { SJ: 2 } },
      { text: '老鹰时期 - 替补也能发光', scores: { IF: 1, IJ: 1 } },
      { text: '首钢/高雄时期 - 另辟蹊径', scores: { NP: 2 } },
      { text: '每个时期都喜欢', scores: { TF: 1 } },
    ]
  },
  {
    id: 12,
    text: '看比赛时你的习惯是？',
    options: [
      { text: '大喊大叫，激动得坐不住', scores: { EP: 2 } },
      { text: '默默记笔记分析战术', scores: { IJ: 2, TN: 1 } },
      { text: '边刷手机边看，有时抬头', scores: { IP: 2 } },
      { text: '全神贯注，紧张得手心出汗', scores: { IJ: 1, FN: 1 } },
      { text: '边吃东西边看，比较放松', scores: { EP: 1, SP: 1 } },
    ]
  },
  {
    id: 13,
    text: '你和其他DL球迷交流时更在意？',
    options: [
      { text: '能不能合得来，气氛开心', scores: { EF: 2 } },
      { text: '对方懂不懂球，有共同话题', scores: { IN: 2 } },
      { text: '互相分享资源和消息', scores: { SN: 2 } },
      { text: '尊重彼此的看法，不争对错', scores: { IF: 2 } },
      { text: '看对方是否真诚友善', scores: { SF: 1 } },
    ]
  },
  {
    id: 14,
    text: '关于林书豪的发展建议，你更倾向？',
    options: [
      { text: '坚持NBA，追逐冠军梦', scores: { TJ: 2, NP: 1 } },
      { text: '转型做篮球训练营', scores: { SJ: 2 } },
      { text: '发展个人品牌和商业', scores: { EN: 2 } },
      { text: '专注公益和慈善事业', scores: { IF: 2 } },
      { text: '做自己喜欢的事就好', scores: { NP: 1 } },
    ]
  },
  {
    id: 15,
    text: '你是什么时候开始喜欢林书豪的？',
    options: [
      { text: '林疯狂时期就关注了', scores: { EP: 1, SJ: 1 } },
      { text: '他来CBA后才知道的', scores: { SF: 2 } },
      { text: '很早就开始关注他了', scores: { IJ: 2 } },
      { text: '朋友推荐后入坑的', scores: { EF: 1, SF: 1 } },
      { text: '最近才开始关注他', scores: { SP: 1 } },
    ]
  },
  {
    id: 16,
    text: '林书豪用什么词形容最贴切？',
    options: [
      { text: '热血 - 永不放弃', scores: { EP: 2 } },
      { text: '稳定 - 持续输出', scores: { IJ: 2 } },
      { text: '全能 - 攻防一体', scores: { TN: 2 } },
      { text: '温暖 - 谦逊有爱', scores: { IF: 2 } },
      { text: '坚持 - 从不认输', scores: { TJ: 1 } },
    ]
  },
  {
    id: 17,
    text: '你希望林书豪未来怎样？',
    options: [
      { text: '回NBA再创辉煌', scores: { NJ: 2 } },
      { text: '在CBA拿个冠军', scores: { SJ: 2 } },
      { text: '转型教练培养新人', scores: { IJ: 1, TF: 1 } },
      { text: '做自己想做的事就好', scores: { NP: 2 } },
      { text: '继续在篮球领域深耕', scores: { SJ: 1 } },
    ]
  },
  {
    id: 18,
    text: '和其他球迷吵架，你通常？',
    options: [
      { text: '据理力争，必须赢', scores: { ET: 2 } },
      { text: '摆事实讲道理', scores: { IT: 1, TJ: 1 } },
      { text: '算了懒得吵', scores: { IP: 2 } },
      { text: '转移话题避免冲突', scores: { IF: 2 } },
      { text: '直接退出群聊眼不见为净', scores: { IP: 1 } },
    ]
  },
  {
    id: 19,
    text: '你收集林书豪的哪些周边？',
    options: [
      { text: '球衣、球鞋等大件', scores: { SJ: 2, SF: 1 } },
      { text: '海报、照片、贴纸', scores: { SP: 2 } },
      { text: '签名和限定版', scores: { IN: 1, JP: 1 } },
      { text: '不太收集周边', scores: { IN: 2 } },
      { text: '只收集有纪念意义的', scores: { IJ: 1 } },
    ]
  },
  {
    id: 20,
    text: '林书豪比赛最后时刻，你会？',
    options: [
      { text: '紧张到不敢看', scores: { IF: 2 } },
      { text: '全神贯注紧盯屏幕', scores: { IJ: 2 } },
      { text: '大声喊口号加油', scores: { EP: 2 } },
      { text: '默默祈祷', scores: { IN: 1, IF: 1 } },
      { text: '保持冷静等待结果', scores: { IT: 1 } },
    ]
  },
  {
    id: 21,
    text: '你喜欢什么类型的林书豪集锦？',
    options: [
      { text: '过人突破炸框集锦', scores: { SP: 2 } },
      { text: '妙传助攻集锦', scores: { NF: 2 } },
      { text: '绝杀时刻合集', scores: { TJ: 2 } },
      { text: '励志语录混剪', scores: { NF: 1, IF: 1 } },
      { text: '比赛全场回放', scores: { SJ: 1 } },
    ]
  },
  {
    id: 22,
    text: '你更愿意参加哪种DL球迷活动？',
    options: [
      { text: '线下看球聚会', scores: { EI: 2 } },
      { text: '篮球训练营体验', scores: { SJ: 2 } },
      { text: '球星见面会', scores: { ES: 1, SF: 1 } },
      { text: '线上讨论社群', scores: { IN: 2 } },
      { text: '不太想参加活动', scores: { IP: 1 } },
    ]
  },
  {
    id: 23,
    text: '当林书豪做出精彩传球时，你？',
    options: [
      { text: '拍手叫好大喊666', scores: { EP: 2 } },
      { text: '欣赏他的球商和大局观', scores: { IN: 2 } },
      { text: '分析这次传球的意图', scores: { TN: 2 } },
      { text: '感动于他的无私', scores: { FN: 2 } },
      { text: '记下来这个精彩瞬间', scores: { IJ: 1 } },
    ]
  },
  {
    id: 24,
    text: '你认同林书豪的哪种生活态度？',
    options: [
      { text: '信仰第一，永不放弃', scores: { IF: 2, IJ: 1 } },
      { text: '努力训练，不断进步', scores: { SJ: 2 } },
      { text: '享受篮球，快乐至上', scores: { EP: 2 } },
      { text: '不断挑战，突破自我', scores: { NT: 2 } },
      { text: '平衡生活和工作', scores: { IJ: 1 } },
    ]
  },
  {
    id: 25,
    text: '你更关注林书豪的？',
    options: [
      { text: '场上数据和表现', scores: { SN: 2 } },
      { text: '场下人格和故事', scores: { NF: 2 } },
      { text: '场内外综合发展', scores: { NT: 1, NF: 1 } },
      { text: '不太关注场下', scores: { ST: 2 } },
      { text: '他和球迷的互动', scores: { EF: 1 } },
    ]
  },
  {
    id: 26,
    text: '你如何评价林书豪的职业选择？',
    options: [
      { text: '勇敢追梦，值得尊敬', scores: { NF: 2 } },
      { text: '理性选择，无可厚非', scores: { ST: 2 } },
      { text: '尊重他的任何决定', scores: { IF: 2 } },
      { text: '希望他做更挑战的选择', scores: { NT: 2 } },
      { text: '每个选择都有道理', scores: { TF: 1 } },
    ]
  },
  {
    id: 27,
    text: '你和其他球迷聊天开场通常是？',
    options: [
      { text: '诶你看林书豪了吗', scores: { EI: 2 } },
      { text: '那场比赛你看了吗', scores: { ES: 2 } },
      { text: '我觉得他应该...', scores: { IN: 1, TJ: 1 } },
      { text: '默默等对方先开口', scores: { IP: 2 } },
      { text: '发表情包活跃气氛', scores: { EP: 1 } },
    ]
  },
  {
    id: 28,
    text: '林书豪最让你感动的一刻是？',
    options: [
      { text: '林疯狂时期带领球队连胜', scores: { EP: 1, NF: 1 } },
      { text: '伤病后坚持康复训练', scores: { IJ: 1, TF: 1 } },
      { text: '夺冠后喜极而泣', scores: { EF: 2 } },
      { text: '分享信仰时的真诚', scores: { IF: 2 } },
      { text: '每次看到他微笑都很暖', scores: { SF: 1 } },
    ]
  },
  {
    id: 29,
    text: '你会向朋友怎么介绍林书豪？',
    options: [
      { text: 'NBA华裔球星，超厉害', scores: { ES: 2 } },
      { text: '一个很励志的篮球运动员', scores: { NF: 2 } },
      { text: '球商很高，组织能力超强', scores: { IN: 2 } },
      { text: '人好球技也好的优质偶像', scores: { SF: 1, IF: 1 } },
      { text: '哈佛毕业的高材生', scores: { TJ: 1 } },
    ]
  },
  {
    id: 30,
    text: '你理想中的DL球迷社群是？',
    options: [
      { text: '热闹活跃，大家打成一片', scores: { EI: 2 } },
      { text: '有深度讨论的技术群', scores: { IN: 2 } },
      { text: '和谐友好，互相尊重', scores: { IF: 2 } },
      { text: '有组织有纪律的正规组织', scores: { IJ: 2 } },
      { text: '可以自由分享资源', scores: { NP: 1 } },
    ]
  },
  {
    id: 31,
    text: '你会为林书豪购买什么？',
    options: [
      { text: 'CBA/NBA正版球衣', scores: { SF: 2 } },
      { text: '他的自传和周边', scores: { NF: 2 } },
      { text: '比赛门票和机酒', scores: { EP: 2 } },
      { text: '不太会买周边', scores: { IN: 2 } },
      { text: '偶尔买一点支持一下', scores: { SP: 1 } },
    ]
  },
  {
    id: 32,
    text: '林书豪比赛中失误时，你？',
    options: [
      { text: '没关系继续支持他', scores: { EF: 2 } },
      { text: '理解这是比赛的一部分', scores: { TJ: 2 } },
      { text: '有点失望但能接受', scores: { IP: 1, TP: 1 } },
      { text: '分析失误原因和解决办法', scores: { TN: 2 } },
      { text: '可惜了，下次加油', scores: { SF: 1 } },
    ]
  },
  {
    id: 33,
    text: '你喜欢哪种林书豪新闻？',
    options: [
      { text: '比赛报道和数据统计', scores: { ST: 2 } },
      { text: '场外生活和个人动态', scores: { SF: 2 } },
      { text: '深度专访和背后故事', scores: { NF: 2 } },
      { text: '未来规划和职业发展', scores: { NT: 2 } },
      { text: '各种都想看', scores: { EN: 1 } },
    ]
  },
  {
    id: 34,
    text: '如果你也是篮球运动员，你会？',
    options: [
      { text: '和林书豪同队并肩作战', scores: { EF: 2 } },
      { text: '作为对手来场精彩对决', scores: { EP: 2 } },
      { text: '专心研究他的技术特点', scores: { IN: 2 } },
      { text: '不太想这些有的没的', scores: { IS: 2 } },
      { text: '学习他的领导力', scores: { IJ: 1 } },
    ]
  },
  {
    id: 35,
    text: '你用什么方式支持林书豪？',
    options: [
      { text: '去现场看球加油', scores: { EI: 2 } },
      { text: '社交媒体点赞转发', scores: { EN: 2 } },
      { text: '默默关注不张扬', scores: { IP: 2 } },
      { text: '买周边支持他事业', scores: { SF: 2 } },
      { text: '和朋友安利他', scores: { EI: 1 } },
    ]
  },
  {
    id: 36,
    text: '你怎样评价林书豪的球商？',
    options: [
      { text: '顶级，能读懂比赛', scores: { IN: 2 } },
      { text: '很高，阅读防守能力强', scores: { TN: 2 } },
      { text: '够用，但还需提升', scores: { SJ: 2 } },
      { text: '这个不好评价', scores: { IF: 1, IN: 1 } },
      { text: '在亚裔球员里算很好了', scores: { SF: 1 } },
    ]
  },
  {
    id: 37,
    text: '林书豪夺冠时你的心情是？',
    options: [
      { text: '比他本人还激动', scores: { EF: 2 } },
      { text: '欣慰，努力终有回报', scores: { IF: 2 } },
      { text: '高兴，这冠军实至名归', scores: { TF: 2 } },
      { text: '平静，为他感到高兴', scores: { IP: 2 } },
      { text: '感动到想哭', scores: { NF: 1 } },
    ]
  },
  {
    id: 38,
    text: '你希望林书豪和谁合作？',
    options: [
      { text: '其他华裔球员', scores: { SF: 2 } },
      { text: '顶级球星冲击冠军', scores: { NT: 2 } },
      { text: '年轻球员传授经验', scores: { IF: 2 } },
      { text: '谁都好，看缘分', scores: { NP: 2 } },
      { text: '希望他单核带队证明自己', scores: { TJ: 1 } },
    ]
  },
  {
    id: 39,
    text: '你怎样看待林书豪的职业生涯？',
    options: [
      { text: '非常励志的逆袭故事', scores: { NF: 2 } },
      { text: '充满起伏但精彩纷呈', scores: { NP: 2 } },
      { text: '稳定输出值得尊重', scores: { SJ: 2 } },
      { text: '足够成功，没有遗憾', scores: { TF: 2 } },
      { text: '未来还可以更精彩', scores: { EN: 1 } },
    ]
  },
  {
    id: 40,
    text: '如果用一个词形容你作为DL球迷，你选？',
    options: [
      { text: '忠诚 - 一直支持', scores: { IJ: 2 } },
      { text: '狂热 - 热情满满', scores: { EP: 2 } },
      { text: '理性 - 客观分析', scores: { IT: 2 } },
      { text: '佛系 - 开心就好', scores: { IP: 2 } },
      { text: '专业 - 懂球懂他', scores: { IN: 1 } },
    ]
  },
]

export default questions
