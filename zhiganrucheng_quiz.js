const quizQuestions = [
    {
        id: 1,
        text: "下列句子中，加点字“初”的含义和用法解释正确的一项是？",
        py: "xià liè jù zǐ zhōng jiā diǎn zì chū de hán yì hé yòng fǎ jiě shì zhèng què de yī xiàng shì",
        en: "What is the correct meaning of 'chū' in the phrase 'chū shù zhí zhī'?",
        options: [
            {
                text: "初次见面，表示礼貌",
                py: "chū cì jiàn miàn biǎo shì lǐ mào",
                en: "Meeting for the first time / polite term.",
                correct: false,
                explanation: "错误。这里是时间副词修饰动作，并不是指社交层面的初次见面。",
                explanationPy: "cuò wù zhè lǐ shì shí jiān fù cí xiū shì dòng zuò bìng bú shì zhǐ shè jiāo céng miàn de chū cì jiàn miàn"
            },
            {
                text: "起初、刚开始、开头",
                py: "qǐ chū gāng kāi shǐ kāi tóu",
                en: "At first / initially / at the beginning.",
                correct: true,
                explanation: "正确！“初竖执之”指的就是他刚开始、最先尝试竖着拿竹竿。",
                explanationPy: "zhèng què chū shù zhí zhī zhǐ de jiù shì tā gāng kāi shǐ zuì xiān cháng shì shù zhe ná zhú gān"
            },
            {
                text: "植物长出的嫩芽",
                py: "zhí wù zhǎng chū de nèn yá",
                en: "Sprouts or young shoots of plants.",
                correct: false,
                explanation: "错误。完全脱离了句中作为时间修饰语的词性功能。",
                explanationPy: "cuò wù wán quán tuō lí le jù zhōng zuò wéi shí jiān xiū shì yǔ de cí xìng gōng néng"
            },
            {
                text: "初级、程度非常浅",
                py: "chū jí chéng dù fēi cháng qiǎn",
                en: "Primary or elementary level.",
                correct: false,
                explanation: "错误。这属于现代汉语搭配词义，不能生搬硬套进文言文中。",
                explanationPy: "cuò wù zhè shǔ yú xiàn dài hàn yǔ dā pèi cí yì bù néng shēng bān yìng tào jìn wén yán wén zhōng"
            }
        ]
    },
    {
        id: 2,
        text: "文中句子“俄有老父至”中，“俄”字的意思是？",
        py: "wén zhōng jù zǐ é yǒu lǎo fǔ zhì zhōng é zì de yì si shì",
        en: "What does the character 'é' mean in 'é yǒu lǎo fǔ zhì'?",
        options: [
            {
                text: "俄罗斯国家的简称",
                py: "é luó sī guó jiā de jiǎn chēng",
                en: "Abbreviation for Russia.",
                correct: false,
                explanation: "错误。古代文言文中不可能出现现代国家地理名称的简称。",
                explanationPy: "cuò wù gǔ dài wén yán wén zhōng bù kě néng chū xiàn xiàn dài guó jiā dì lǐ míng chēng de jiǎn chēng"
            },
            {
                text: "一会儿、不久、很快",
                py: "yī huǐ ér bù jiǔ hěn kuài",
                en: "Shortly after / soon / after a moment.",
                correct: true,
                explanation: "正确！“俄”是马来西亚文言文考试最常考的时间副词，指过去不久、很快发生。",
                explanationPy: "zhèng què é shì mǎ lái xī yà wén yán wén kǎo shì zuì cháng kǎo de shí jiān fù cí zhǐ guò qù bù jiǔ hěn kuài fā shēng"
            },
            {
                text: "斜着头看人的样子",
                py: "xié zhe tóu kàn rén de yàng zǐ",
                en: "Tilting one's head to look at someone.",
                correct: false,
                explanation: "错误。虽然字形有倾斜的意思，但在此处作为修饰全句的时间词讲不通。",
                explanationPy: "cuò wù suī rán zì xíng yǒu qīng xié de yì si dàn zài cǐ chù zuò wéi xiū shì quán jù de shí jiān cí jiǎng bù tōng"
            },
            {
                text: "非常饥饿，想吃东西",
                py: "fēi cháng jī è xiǎng chī dōng xī",
                en: "Very hungry / starving.",
                correct: false,
                explanation: "错误。属于把“俄”错当成“饿”的字音盲目猜测。",
                explanationPy: "cuò wù shǔ yú bǎ é cuò dàng chéng è de zì yīn máng mù cāi cè"
            }
        ]
    },
    {
        id: 3,
        text: "老人说“何不以锯中截而入”，他提出的具体建议是？",
        py: "lǎo rén shuō hé bù yǐ jù zhōng jié ér rù tā tí chū de jù tǐ jiàn yì shì",
        en: "What specific advice did the old man give when he said 'hé bù yǐ jù zhōng jié ér rù'?",
        options: [
            {
                text: "把城门的上框用锯子拆掉",
                py: "bǎ chéng mén de shàng kuàng yòng jù zǐ chāi diào",
                en: "Saw off the top frame of the city gate.",
                correct: false,
                explanation: "错误。他要锯的是长竿，而不是去破坏官府修筑的城门建筑。",
                explanationPy: "cuò wù tā yào jù de shì cháng gān ér bú shì qù pò huài guān fǔ xiū zhù de chéng mén jiàn zhù"
            },
            {
                text: "用锯子把长竹竿从正中间截断再进去",
                py: "yòng jù zǐ bǎ cháng zhú gān cóng zhèng zhōng jiān jié duàn zài jìn qù",
                en: "Use a saw to cut the bamboo pole in half from the middle before entering.",
                correct: true,
                explanation: "正确！“中截”就是指从中间截断。这个馊主意虽然能进去，但长竿也彻底废了。",
                explanationPy: "zhèng què zhōng jié jiù shì zhǐ cóng zhèng zhōng jiān jié duàn zhè gè sōu zhǔ yì suī rán néng jìn qù dàn cháng gān yě chè dǐ fèi le"
            },
            {
                text: "绕开大门，从旁边的矮墙翻过去",
                py: "rào kāi dà mén cóng páng biān de ǎi qiáng fān guò qù",
                en: "Bypass the main gate and climb over the low wall.",
                correct: false,
                explanation: "错误。文中没有提到任何矮墙或者翻墙的策略路径。",
                explanationPy: "cuò wù wén zhāng zhōng méi yǒu tí dào rèn hé ǎi qiáng huò zhě fān qiáng de cè lüè lù jìng"
            },
            {
                text: "等到天黑，趁城门守卫换班时偷偷溜进去",
                py: "děng dào tiān hēi chèn chéng mén shǒu wèi huàn bān shí tōu tōu liū jìn qù",
                en: "Wait until dark to sneak in during the guards' shift change.",
                correct: false,
                explanation: "错误。老人提出的是彻底物理解决长竿长度的愚蠢办法，而不是潜入策略。",
                explanationPy: "cuò wù lǎo rén tí chū de shì chè dǐ wù lǐ jiě jué cháng gān cháng dù de yú chǔn bàn fǎ ér bú shì qiǎn rù cè lüè"
            }
        ]
    },
    {
        id: 4,
        text: "那个鲁国人“计无所出”时，他面临的真正物理困境是？",
        py: "nà gè lǔ guó rén jì wú suǒ chū shí tā miàn lín de zhēn zhèng wù lǐ kùn jìng shì",
        en: "What was the actual physical dilemma faced by the man from Lu when he was at his wits' end?",
        options: [
            {
                text: "进城需要买票，他身上完全没有带钱",
                py: "jìn chéng xū yào mǎi piào tā shēn shàng wán quán méi yǒu dài qián",
                en: "Entering the city required a ticket, and he had no money.",
                correct: false,
                explanation: "错误。文中的矛盾在于长竿的尺寸与城门长宽产生的冲突，而非财务问题。",
                explanationPy: "cuò wù wén zhāng zhōng de máo dùn zài yú cháng gān de chǐ cùn yǔ chéng mén cháng kuān chǎn shēng de chōng tū ér fēi cái wù wèn tí"
            },
            {
                text: "长竿竖着拿高过城门，横着拿宽过城门，导致怎么都卡住进不去",
                py: "cháng gān shù zhe ná gāo guò chéng mén héng zhe ná kuān guò chéng mén dǎo zhì zěn me dōu kǎ zhù jìn bú qù",
                en: "The pole held vertically was too tall, and horizontally too wide, causing it to get stuck either way.",
                correct: true,
                explanation: "正确！“竖执之不可入，横执之亦不可入”精准写出了他横竖都卡在门外的笨拙窘境。",
                explanationPy: "zhèng què shù zhí zhī bù kě rù héng zhí zhī yì bù kě rù jīng zhǔn xiě chū le tā héng shù dōu kǎ zài mén wài de bèn zhuō jiǒng jìng"
            },
            {
                text: "城门守卫觉得他的长竹竿是危险武器，禁止他带入城中",
                py: "chéng mén shǒu wèi jué dé tā de cháng zhú gān shì wēi xiǎn wǔ qì jìn zhǐ tā dài rù chéng zhōng",
                en: "The guards deemed his long pole a dangerous weapon and banned it.",
                correct: false,
                explanation: "错误。守卫自始至终没有干预，完全是他自己智商不够卡在门外。",
                explanationPy: "cuò wù shǒu wèi zì shǐ zhì zhōng méi yǒu gān yù wán quán shì tā zì jǐ zhì shāng bú gòu kǎ zài mén wài"
            },
            {
                text: "他的长竹竿太重了，他实在拿不动了",
                py: "tā de cháng zhú gān tài zhòng le tā shí zài ná bú dòng le",
                en: "The long bamboo pole was too heavy for him to carry.",
                correct: false,
                explanation: "错误。他拿得动，甚至还能横竖来回调整，纯粹是脑筋卡死转不过弯。",
                explanationPy: "cuò wù tā ná dé dòng jèn zhì hái néng héng shù lái huí tiáo zhěng chún cuì shì nǎo jīn kǎ sǐ zhuàn bú guò wān"
            }
        ]
    },
    {
        id: 5,
        text: "其实长竿不需要锯断也能完美入城，最聪明的拿法应该是？",
        py: "qí shí cháng gān bù xū yào jù duàn yě néng wán měi rù chéng zuì cōng míng de ná fǎ yīng gāi shì",
        en: "Actually, the pole could enter perfectly without being cut. What was the smartest way to hold it?",
        options: [
            {
                text: "把长竹竿当作标枪，用力扔进城门里面去",
                py: "bǎ cháng zhú gān dàng zuò biāo qiāng yòng lì rēng jìn chéng mén lǐ miàn qù",
                en: "Throw the bamboo pole inside the gate like a javelin.",
                correct: false,
                explanation: "错误。这样扔进去容易砸到城里的无辜路人，十分危险且不合常理。",
                explanationPy: "cuò wù zhè yàng rēng jìn qù róng yì zá dào chéng lǐ de wú gū lù rén shí fēn wēi xiǎn qiě bù hé cháng lǐ"
            },
            {
                text: "顺着进城的方向，前后竖直地把长竹竿对准城门顺进去",
                py: "shùn zhe jìn chéng de fāng xiàng qián hòu shù zhí de bǎ cháng zhú gān duì zhǔn chéng mén shùn jìn qù",
                en: "Align the pole pointing straight forward and backward, sliding it through the gate path.",
                correct: true,
                explanation: "正确！既然城门有深度，只要把长竿顺着走路的方向前后拿着，利用城门的纵深空间就能轻松通过，完全不伤长竿。",
                explanationPy: "zhèng què jì rán chéng mén yǒu shēn dù zhǐ yào bǎ cháng gān shùn zhe zǒu lù de fāng xiàng qián hòu ná zhe lì yòng chéng mén de zòng shēn kōng jiān jiù néng qīng sōng tōng guò wán quán bú shàng cháng gān"
            },
            {
                text: "背着长竹竿，双手双脚在地上爬进去",
                py: "bēi zhe cháng zhú gān shuāng shǒu shuāng jiǎo zài dì shàng pá jìn qù",
                en: "Strapping the pole on his back and crawling in on all fours.",
                correct: false,
                explanation: "错误。横竖卡住跟爬行姿势完全无关，依然无法改变物理碰撞长度。",
                explanationPy: "cuò wù héng shù kǎ zhù gēn pá xíng zī shì wán quán wú guān yī rán wú fǎ gǎi biàn wù lǐ pèng zhuàng cháng dù"
            },
            {
                text: "请求全城的老百姓一起帮他把城门扩建拓宽",
                py: "qǐng qiú quán chéng de lǎo bǎi xìng yī qǐ bāng tā bǎ chéng mén kuò jiàn tuò kuān",
                en: "Asking all city residents to widen the gate infrastructure for him.",
                correct: false,
                explanation: "错误。为了进一根竹竿去扩建古代城门，属于极端且不可能的荒唐幻想。",
                explanationPy: "cuò wù wèi le jìn yī gēn zhú gān qù kuò jiàn gǔ dài chéng mén shǔ yú jí duān qiě bù kě néng de huāng táng huàn xiǎng"
            }
        ]
    }
];
