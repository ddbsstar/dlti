// 16种人格配置 - DL球迷版MBTI

export const personalities = {
  ISTJ: {
    id: 'ISTJ',
    name: '林书豪·稳定军心型',
    subtitle: '像Jeremy一样，用稳定征服世界',
    image: '/images/istj.svg',
    colors: {
      primary: '#1a5276',
      secondary: '#2874a6',
      accent: '#3498db'
    },
    traits: ['沉稳', '专注', '可靠', '务实'],
    description: '你是DL球迷中最稳定的存在。无论林书豪在场上经历什么，你都能保持冷静分析，用理性的眼光看待每一场比赛。你像林书豪在老鹰时期那样，虽然不是最闪耀的星，但始终是球队最可靠的支柱。你的支持不张扬，但最持久。',
    strengths: ['忠诚可靠', '分析理性', '专注持久', '责任担当'],
    compatible: ['ESFP', 'ENFP'],
    quote: '"坚持做好该做的事，成功自然会来"'
  },
  ISFJ: {
    id: 'ISFJ',
    name: '林书豪·温暖守护型',
    subtitle: '用温暖的陪伴表达支持',
    image: '/images/isfj.svg',
    colors: {
      primary: '#148f77',
      secondary: '#17a589',
      accent: '#1abc9c'
    },
    traits: ['温柔', '体贴', '守护', '忠诚'],
    description: '你是DL球迷中最温暖的存在。你默默关注林书豪的每一步成长，为他的成功感到骄傲，也为他遇到的困难感到心疼。你的支持像林书豪在场上的无私传球，不求回报，只愿他一切都好。',
    strengths: ['温暖陪伴', '善解人意', '默默付出', '情感细腻'],
    compatible: ['ESFP', 'ENFP'],
    quote: '"真正的支持是无声的陪伴"'
  },
  INFJ: {
    id: 'INFJ',
    name: '林书豪·精神领袖型',
    subtitle: '信仰与坚持的力量',
    image: '/images/infj.svg',
    colors: {
      primary: '#6c3483',
      secondary: '#8e44ad',
      accent: '#9b59b6'
    },
    traits: ['理想主义', '洞察力', '使命感', '坚定'],
    description: '你被林书豪的信仰和坚持深深打动。你理解「林疯狂」不仅是篮球的奇迹，更是信念创造的奇迹。你欣赏他用行动传递正能量，像他一样相信只要坚持，梦想终会实现。',
    strengths: ['理想坚定', '洞察本质', '精神力量', '使命担当'],
    compatible: ['ENFP', 'ENTP'],
    quote: '"信仰是黑暗中的光，指引前行的路"'
  },
  INTJ: {
    id: 'INTJ',
    name: '林书豪·战术大师型',
    subtitle: '用智慧解读比赛',
    image: '/images/intj.svg',
    colors: {
      primary: '#2e4057',
      secondary: '#34495e',
      accent: '#5d6d7e'
    },
    traits: ['理性', '战略', '独立', '深邃'],
    description: '你是DL球迷中的战术分析师。你不仅看林书豪打球，更研究他为什么这样打。你欣赏他的篮球智商，像欣赏一位象棋大师。你相信智慧比蛮力更重要，就像林书豪用组织能力弥补身体天赋的不足。',
    strengths: ['战术分析', '逻辑清晰', '独立思考', '战略眼光'],
    compatible: ['ENTP', 'ENFP'],
    quote: '"篮球是智者的游戏，林书豪深谙此道"'
  },
  ISTP: {
    id: 'ISTP',
    name: '林书豪·技术流型',
    subtitle: '欣赏每一个技术细节',
    image: '/images/istp.svg',
    colors: {
      primary: '#784212',
      secondary: '#935116',
      accent: '#b9770e'
    },
    traits: ['务实', '技术', '冷静', '灵活'],
    description: '你是DL球迷中的技术派。你关注林书豪的每一个技术动作——运球节奏、变向时机、传球角度。你相信技术可以被训练和提升，就像林书豪从替补一步步证明自己。你低调内敛，但眼光独到。',
    strengths: ['技术分析', '务实理性', '动手能力强', '适应力强'],
    compatible: ['ESFJ', 'ENFJ'],
    quote: '"技术是篮球的灵魂"'
  },
  ISFP: {
    id: 'ISFP',
    name: '林书豪·艺术型',
    subtitle: '欣赏篮球之美',
    image: '/images/isfp.svg',
    colors: {
      primary: '#7b241c',
      secondary: '#922b21',
      accent: '#c0392b'
    },
    traits: ['审美', '敏感', '温和', '创意'],
    description: '你是DL球迷中的艺术家。你看林书豪打球不是在看比赛，而是在欣赏一场表演。他的传球是艺术，他的突破是诗歌。你容易被细节打动，也更能感受到篮球运动中那份独特的美感。',
    strengths: ['审美感知', '情感丰富', '创意无限', '善于观察'],
    compatible: ['ESFP', 'ENFJ'],
    quote: '"篮球不只是运动，更是艺术"'
  },
  INFP: {
    id: 'INFP',
    name: '林书豪·追梦型',
    subtitle: '为梦想而战的共鸣',
    image: '/images/infp.svg',
    colors: {
      primary: '#7d6608',
      secondary: '#9a7d0a',
      accent: '#d4ac0d'
    },
    traits: ['理想', '共情', '真诚', '创造'],
    description: '你被林书豪的追梦故事深深打动。作为一个亚裔球员在NBA闯出一片天，他的故事就是一部励志电影。你理解他的挣扎，分享他的喜悦。你相信梦想的力量，也希望像他一样勇敢追梦。',
    strengths: ['共情能力', '理想主义', '真诚善良', '创造力'],
    compatible: ['ENFJ', 'ENTJ'],
    quote: '"每一个梦想都值得被尊重"'
  },
  INTP: {
    id: 'INTP',
    name: '林书豪·智谋型',
    subtitle: '用逻辑分析比赛',
    image: '/images/intp.svg',
    colors: {
      primary: '#212f3c',
      secondary: '#2e4053',
      accent: '#34495e'
    },
    traits: ['逻辑', '好奇', '分析', '创新'],
    description: '你是DL球迷中的理论家。你对林书豪的比赛有着深入的研究，从数据分析到战术解读都有自己的见解。你不满足于表面的得分篮板，更想探究他成功背后的深层原因。',
    strengths: ['深度分析', '逻辑严谨', '求知欲强', '创新能力'],
    compatible: ['ENTJ', 'ENTP'],
    quote: '"理解本质比看到现象更重要"'
  },
  ESTP: {
    id: 'ESTP',
    name: '林书豪·热血型',
    subtitle: '和林疯狂一起燃烧',
    image: '/images/estp.svg',
    colors: {
      primary: '#1e8449',
      secondary: '#239b56',
      accent: '#2ecc71'
    },
    traits: ['热情', '行动', '务实', '魅力'],
    description: '「林疯狂」时期你就是这样看球的——热血沸腾、激情四射！你是DL球迷中的气氛担当，只要有你在的地方，球迷群就不会冷场。你和林书豪一样，关键时刻总能爆发惊人能量。',
    strengths: ['气氛担当', '行动力强', '务实灵活', '魅力四射'],
    compatible: ['ISFJ', 'ISTJ'],
    quote: '"人生就要有几次疯狂！"'
  },
  ESFP: {
    id: 'ESFP',
    name: '林书豪·快乐型',
    subtitle: '开心看球，享受篮球',
    image: '/images/esfp.svg',
    colors: {
      primary: '#d35400',
      secondary: '#e67e22',
      accent: '#f39c12'
    },
    traits: ['开朗', '热情', '乐观', '社交'],
    description: '你是DL球迷群里的开心果。看球嘛，开心最重要！你把对林书豪的喜欢变成纯粹的快乐，不纠结数据，不纠结输赢，就是单纯地享受篮球带来的乐趣。你的乐观感染着周围的每一个人。',
    strengths: ['快乐源泉', '社交高手', '积极乐观', '适应力强'],
    compatible: ['ISFJ', 'ISTJ'],
    quote: '"看球就是为了开心嘛！"'
  },
  ENFP: {
    id: 'ENFP',
    name: '林书豪·激情型',
    subtitle: '为Jeremy疯狂打call',
    image: '/images/enfp.svg',
    colors: {
      primary: '#8e44ad',
      secondary: '#9b59b6',
      accent: '#a569bd'
    },
    traits: ['热情', '创意', '感染', '自由'],
    description: '你是DL球迷中最有感染力的存在！每当林书豪有精彩表现，你比谁都激动；每当有人说他坏话，你第一个站出来。你相信热情可以改变一切，就像林书豪用「林疯狂」改变了世界对亚裔球员的看法。',
    strengths: ['热情感染', '创意无限', '社交能力强', '积极向上'],
    compatible: ['INFJ', 'INTJ'],
    quote: '"热情是最好的应援！"'
  },
  ENTP: {
    id: 'ENTP',
    name: '林书豪·创新型',
    subtitle: '发现无限可能',
    image: '/images/entp.svg',
    colors: {
      primary: '#1a5276',
      secondary: '#2874a6',
      accent: '#3498db'
    },
    traits: ['创新', '机智', '好奇', '领导'],
    description: '你是DL球迷中最有想法的人。你不满足于现状，总在想：林书豪还能做什么？他可以转型做教练，可以创办训练营，可以...你的脑洞和林书豪的篮球智商一样，永远不停转。',
    strengths: ['创新思维', '善于辩论', '适应力强', '领导潜质'],
    compatible: ['INFJ', 'INTJ'],
    quote: '"未来有无限可能等待探索"'
  },
  ESTJ: {
    id: 'ESTJ',
    name: '林书豪·领袖型',
    subtitle: '像队长一样靠谱',
    image: '/images/estj.svg',
    colors: {
      primary: '#922b21',
      secondary: '#b03a2e',
      accent: '#c0392b'
    },
    traits: ['可靠', '负责', '组织', '务实'],
    description: '你是DL球迷群里的组织者。看球活动你张罗，资源信息你分享，有事需要帮忙你第一个上。你欣赏林书豪的职业精神，像他一样相信努力就会有回报。你的支持踏实可靠，是林书豪最需要的球迷类型。',
    strengths: ['组织能力强', '责任心强', '务实可靠', '执行力强'],
    compatible: ['ISFP', 'INFP'],
    quote: '"做好每一件该做的事"'
  },
  ESFJ: {
    id: 'ESFJ',
    name: '林书豪·贴心型',
    subtitle: '暖心的球迷后援团',
    image: '/images/esfj.svg',
    colors: {
      primary: '#1e8449',
      secondary: '#239b56',
      accent: '#28b463'
    },
    traits: ['热情', '关怀', '服务', '传统'],
    description: '你是DL球迷群里最暖心的存在。你关心林书豪，也关心其他球迷；你组织看球活动，也记得照顾每一个人。你相信好的球迷文化需要传承，就像林书豪也在用自己的方式回馈社区。',
    strengths: ['温暖体贴', '社交能力强', '乐于助人', '有责任感'],
    compatible: ['ISFP', 'ISTP'],
    quote: '"大家一起支持才更有意义"'
  },
  ENTJ: {
    id: 'ENTJ',
    name: '林书豪·统帅型',
    subtitle: '胜利是唯一的目标',
    image: '/images/entj.svg',
    colors: {
      primary: '#17202a',
      secondary: '#1c2833',
      accent: '#2f3640'
    },
    traits: ['果断', '自信', '战略', '领导'],
    description: '你是DL球迷中最有领袖气质的。你欣赏林书豪在场上指挥若定的大将风度，也希望自己能像他一样成为场上的核心。你对胜利充满渴望，相信只要方向正确，就一定能到达终点。',
    strengths: ['战略思维', '领导能力', '果断决策', '自信心强'],
    compatible: ['INFP', 'ISFP'],
    quote: '"胜利是给准备好的人"'
  },
  ENFJ: {
    id: 'ENFJ',
    name: '林书豪·探险型',
    subtitle: '突破边界，探索未知',
    image: '/images/enfj.svg',
    colors: {
      primary: '#2e86ab',
      secondary: '#3498db',
      accent: '#5dade2'
    },
    traits: ['好奇', '创新', '活力', '挑战'],
    description: '你欣赏林书豪敢于突破的精神。从NBA到CBA，从球员到创办训练营，他总在尝试新事物。你相信人生就是一场探险，最大的风险是不敢冒险。和林书豪一样，你永远在探索的路上。',
    strengths: ['创新精神', '适应变化', '充满活力', '挑战自我'],
    compatible: ['INFJ', 'INTJ'],
    quote: '"不试试怎么知道不行？"'
  }
}

export const personalityTypes = Object.keys(personalities)

export default personalities
