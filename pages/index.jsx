import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NovelPage() {
  return (
    <div className="min-h-screen bg-yellow-50 p-4 text-brown-800">
      <h1 className="text-3xl font-bold text-center mb-6">春不晚</h1>

      <Card className="max-w-xl mx-auto">
        <Image
          src="/novel-cover.jpg"
          alt="春不晚 封面"
          width={600}
          height={800}
          className="w-full h-auto rounded-t-xl"
        />
        <CardContent className="space-y-4">
          <p className="text-lg font-semibold">小說簡介：</p>
          <p>一個少年少女的故事</p>
          <div>
            <p className="text-lg font-semibold mb-2">章節列表：</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Button variant="link" className="text-brown-700 p-0">第一章：三月初的揚州</Button>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">第一章：三月初的揚州</h2>
        <p className="leading-8 whitespace-pre-wrap">

三月初，揚州城剛迎來春季，卻還未褪去冬日的寒冷。前幾年揚州剛流行起了山茶花，今年終於播種完第一次開花，滿城皆可見花苞，不用幾天山茶便會爬滿揚州城了。

是夜，本該萬籟俱寂的太守府，一處院子卻還亮著燈。‘蘇子昂？’揚州太守府嫡女江離有些發懵的看著眼前窗戶邊上站著的少年。時間倒轉回幾分鐘前，剛洗漱完畢的江離，剛遣散掉丫鬟，正準備上榻。窗戶那邊卻發出一陣一陣微弱的，像是敲窗戶一樣的響聲，但沒幾秒鐘就停了，就當江離假裝自欺欺人，想當作是自己聽錯了的時候，但響聲忽然又嚮起了第二次。江離身體頓時變得有些僵硬，剛準備大叫，忽然一聲少年獨有的聲線讓她這即將發出的這聲尖叫吞了回去‘江離？’江離覺得這個聲音分外耳熟，還未等細想，原本開著通風的窗子被一隻纖長的手推開，一個穿著極為破爛的男生翻了進來。仔細看還會發現其實他們兩個的年齡應該一般大。江離看著眼前極為狼狽的少年，愣了一會，猛的把他與在書院時長相俊俏，卻安靜不愛說話，但每次週考都能拔得頭籌的知府家二少爺聯想起來...仔細一瞧還真是！江離剛疑惑半夜三更怎麼會跑來我屋子，卻又想起幾日前因觸怒聖上而被斬首的蘇知府，而他們家族其他人應該都被流放永州。江離剛聽到時還為他唏噓不已，沒想到沒幾日本該流放在永州的他竟然出現在我的窗外，還翻了進來？？她感到一陣恍惚。
‘實在抱歉夜闖太守府，實屬情勢所逼’蘇子昂輕聲說著，他垂著頭，看起來許久沒修剪過的碎髮掩去了他的神情。
我還是沒轉過彎來‘那你怎麼在這？？你不是應該在去永州的路上嗎？？’
他沉默了，半晌，他才回話，但卻答非所問。‘你能．．收留我嗎？’
我傻了，當小廝？？認真嗎，我也沉默了。
他見我沒回答，抬頭望向我的眼睛，補充道‘我只是想留在這裡，去了永州這輩子仕途就無望了’他墨黑色的眼睛直直盯著我，話卻越說越小聲。
我暗暗思考，本想問‘你做這些你父母同意嗎’但突然想到他父母已去，當今聖上因為剛誕下龍子，不多想見血氣，所以格外開恩留他一命。
雖說已經做好了決定，但我仍想逗逗他‘我憑什麼要收留你？’
聽到這話　他的眼眸中的神采慢慢暗了下來，最後卻下定決心似的說‘你不是喜歡我嗎．．’
我一愣，隨即問道“我怎麼不知道我喜歡你？”
          );
          }
