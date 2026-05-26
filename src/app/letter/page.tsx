
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { StorySection } from '@/components/story-section';
import { RevealCard } from '@/components/reveal-card';
import { PageFooter } from '@/components/page-footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BackgroundMusic } from '@/components/background-music';

export default function LetterPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <BackgroundMusic src="/varoon.mp3.mp3" />
      <PageHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" passHref>
              <Button variant="outline"><ArrowLeft className="mr-2" /> Back to Main Page</Button>
            </Link>
        </div>

        <StorySection title="A Letter From My Heart">
          <RevealCard
            coverContent={<p className="text-lg">Click to read my birthday wishes for you...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/red.jpg" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Every word in this letter comes straight from the heart. Happy B'Day Meri Himmat</p>
          </RevealCard>
        </StorySection>
        
        <StorySection title="A Promise in a Rose">
          <RevealCard
            coverContent={<p className="text-lg">A special promise for the future...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/pink.jpg" alt="A rose and two polaroids as a promise" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="rose polaroids" />
            </div>
            <p className="mt-4 text-center font-body text-lg max-w-prose">I'm keeping this rose safe. It's a promise of all the beautiful moments waiting for us. I'll give it to you the moment we're together again.</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Another Little Keepsake">
          <RevealCard
            coverContent={<p className="text-lg">Something else that's waiting for you...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/frame.jpg" alt="A small flower and two polaroids with a note" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="flower message" />
            </div>
            <p className="mt-4 text-center font-body text-lg max-w-prose">Just like the note in this photo says... this little flower is for my love. It's another piece of my heart that I'm holding onto for you..</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Click to read your absence for me">
          <RevealCard
            coverContent={<p className="text-lg">Apki Yaaden Mujhe Jine Nhi Deti</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/missyou_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">I miss you every day, in the smallest moments — in silence, in thoughts, in all the things I never say out loud.. Miss you Meri Himmat</p>
          </RevealCard>
        </StorySection>

        <StorySection title="For Part-2 ,Click to continue">
          <RevealCard
            coverContent={<p className="text-lg">Haa, Mai Roj marta hu...Apke Liye</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/missyou_2.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Kuchh samjh nhi ataa hai, Bas etna hai ki --- Miss you a lot Meri Himmat</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Bas ek Baar aur Mehnat Kar do na Babu">
          <RevealCard
            coverContent={<p className="text-lg">Bhagwan ne bhi ekdam choose karke mujhe dia</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/missyou_3.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Aur Always Miss hi karunga mai, Aur uske alava mere pass option hi kya hai na --  Meri Himmat</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Merry Chritmas My Secret Santa Clause 🤶 ">
          <RevealCard
            coverContent={<p className="text-lg">Haa, Meri Santa 🤶 to Aap hi ho ☺ </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/chritmas_11.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Wishing you a Christmas full of gentle moments, soft happiness, and everything that makes you feel safe and cared for. Merry Christmas 🎄✨</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Really, You are my Gift 📦 For 🤶 ">
          <RevealCard
            coverContent={<p className="text-lg">You already gifted me many more ☺ </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/chritmas_22.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">It is a time to slow down, smile a little more, and appreciate the warmth around us. I hope this Christmas brings you peace in your heart, comfort in your thoughts, and reasons to smile in the small moments.. Meri Santa Clause 🎄✨</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Happy New Year 2026 Babu 🥰">
          <RevealCard
            coverContent={<p className="text-lg">Naya Saal apke liye dher sari khushiyan laye Babu </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/newyear_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">I hope this Year brings you peace in your heart, comfort in your thoughts, and reasons to smile in the small moments.. ✨Happy New Year Jaan✨</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Really, I will miss You Babu">
          <RevealCard
            coverContent={<p className="text-lg">Lekin mera Pyar always apke sath hoga Babu </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/newyear_2.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Mai apna best try karunga Babu, Because sayad ye dono ke liye better ho</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Babu, Vapas se Aisa Kyu 😔">
          <RevealCard
            coverContent={<p className="text-lg">Mujhe bhi aisa andaza nhi tha ki ye fir se hoga </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Yaaden_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">😔 Babu ye vapas se aisa Kyu hogya, na jane kaise ho gya lekin same same as a 1st time 😔</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Ab ap vapas se mujhe bahot rulati ho Babu, mtlb ki bahot yaad ati ho 😔 ">
          <RevealCard
            coverContent={<p className="text-lg">Fir mujhe laga ki ap ho to sab possible hai Babu</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Yaaden_2.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">😔 mai apko explain bhi nhi kar sakta, aur karna hi kyu, you know very well Babu About me 😔</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Mai ab apko kya bolu ...... ">
          <RevealCard
            coverContent={<p className="text-lg">Mujhe kuchh samjh me nhi arha hai ki...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Yaaden_3.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Mai aaj tak vahi bate soch rha hu babu 😔 ki apko aisa kyu laga ki mai aisa chahta tha apke liye kabhi se hi  😔</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Lekin maine aisa kabhi nhi Chaha Babu ">
          <RevealCard
            coverContent={<p className="text-lg">Apki Kasam Babu 😔 </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Yaaden_4.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Apne mohabbat ki kasam babu maine kabhi aisa nhi chaha ki mai apko kabhi dukh pahuchaun,apko taklif du babu, kabhi bhi nhi babu 😔 😔 😔 </p>
          </RevealCard>
        </StorySection>

        <StorySection title="By the apko aisa laga to...">
          <RevealCard
            coverContent={<p className="text-lg">fir to mai mafi ke bhi layak nhi hu </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Yaaden_5.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really jo maine apke nazro me kiya hai Babu 😔 ooo to mafi ke bhi layak nhi hai, mai roj roj ye baat sochta hu, Even maine vapas bhi puccha apse, to apne bola ki - Sach h oo, Aur mai Toot gya Babu 😔 </p>
          </RevealCard>
        </StorySection>

        <StorySection title="All The Best Babu  ">
          <RevealCard
            coverContent={<p className="text-lg">Mai apke sath Hamesha hu Babu </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Exam.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Haa, mai manta hu mai ab us layak nhi Babu, lekin apka exam hai ap free of mind sare papers do, mai apke sath always khada hu Babu</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Happy 1st Love U-Turn Day Babu 🥹  ">
          <RevealCard
            coverContent={<p className="text-lg">Mai apke sath Hamesha Rahunga Babu, Aap Raho ya na  </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/1st_year.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Haa,Aaj hame pure 1saal hogye Babu sath hote huye,aur yakin nhi hota ki sach me 1year ho gye 🥹🥹🥹</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Really, Ye din mere zindagi ka sabe bada aur khushnasib din hai">
          <RevealCard
            coverContent={<p className="text-lg">Aaj ka din mai kabhi nhi bhulunga </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/1st_year1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really Babu 🥹 Aaj ka din mere liye bahot bahot jyada special hai,Ye mai kaise bhul sakta hu,meri zindagi me ap jo ayi thi aur oo moment aur oo kapde bhi yaad hai apne kya pahena tha Babu 🥹 (Parrot Color ki Kurti) Love You Meri Jaan 🥹♥ </p>
          </RevealCard>
        </StorySection>

        <StorySection title="Rose For You Babu 🌹">
          <RevealCard
            coverContent={<p className="text-lg">Ye Gulab koi Aam Gulab nhi hai Babu</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/rose.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Sachi me, Ye Gulab bahot khash Gulab hai mere liye apko dena, Because maine khud ke kamai se diya hua hai apko, aisa feel hota hai mujhe, isliye mujhe bahot happiness hoti hai ise leke Babu 😊 Thank You For Accepting This Beautiful Heart ❤  From me to most Beautiful Lady 😊 in the World 🌏 </p>
          </RevealCard>
        </StorySection>

        <StorySection title="Peruu For You But 😔">
          <RevealCard
            coverContent={<p className="text-lg">Mujhe apse ye zindagi bhar sikayat rahegi Babu 😔 </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/peruu.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Ab mai apko kya hi bolu 😔, Bas etna hi kahunga ki maine apke liye ye bahot pyar se aur feelings ke sath leke aya tha mai Babu 😔 But Sorry 😔 </p>
          </RevealCard>
        </StorySection>

        <StorySection title="Ye Churiyan, Apke liye hi Hain Babu 😊">
          <RevealCard
            coverContent={<p className="text-lg">Jo mujhe khud apko 1 saal se dena tha yrrr...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Churiyan.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Apko yaad hai, Apne mujhe khud bola, aur mujhe ye etna acha laga ki mai apko bta bhi nhi sakta hu really, Apka hakk jatana mere upar bahot acha lagta tha mujhe Babu 😊 </p>
          </RevealCard>
        </StorySection>

        <StorySection title="Apki Bahot Yad Ati Hai Babu 😔">
          <RevealCard
            coverContent={<p className="text-lg">Aap mere Dimag me ek cassette ki tarah chalti ho Babu 😔 </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Yaaden_6.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really, Mai apko bahot bahot jyada miss karta hu,mai apko socha hi nhi, na mai apko yaad karta hu, ap mere dimag me kisi film ki tarah bas gyi ho jo ki 24*7 chalti rahti ho, Etna even koi film bhi nhi play hogi Babu 😔 </p>
          </RevealCard>
        </StorySection>

        <StorySection title="Ye Danaa Apke Liye hi hai Babu">
          <RevealCard
            coverContent={<p className="text-lg">Kash ap mere pass hoti to mai apko apne hath se khilata</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/Danaa.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really bahot testy hai ye , ab mere nashib me to nhi ye,varna apko jarur lake khilata mai,But kabhi try karna ap mere kahne pe,Sayad apko bhi testy lage Babu</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Our First Outdoor Meeting Same Day Back 1 Year">
          <RevealCard
            coverContent={<p className="text-lg">Aaj ke just 1 saal pahale ham same Date pe Mile the Babu </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/2_april.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Sach me, mai iss din aur Date ko aaj bahot miss kar rha hu, and apko bhi bahot miss kar rha hu Babu 😔, Because mujhe laga tha ki ham iss Date pe jarur milenge kaise  bhi karke But 😔 Really Miss You So Much Babu 😔</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Barish, Mai Aur Apki Yaaden Babu 😔">
          <RevealCard
            coverContent={<p className="text-lg">Aaj maine apko bahot miss kiya 2bajke 6mnt se 6pm sham tak,ek ek pal pure zindagi ke brabar lag rha tha 😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/barish.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really Mai apke call orr msg ka wait karta rah gya but kuchh bhi nhi aya Babu 😔, Fir socha kya pta apko yaad bhi hai ki nhi aaj ka din 😔,Mere liye aap aur apki yaaden bahot mayane rakhti hain yrr 😔 Aur mai bhi apko msg kar sakta tha but mere pass koi option nhi tha,kaise karta apko mai 😔 maine apko bahot miss kiya - Apki kasam Dear Love ♥ 😔</p>
          </RevealCard>
        </StorySection>




















        <StorySection title="Life me Clarity Bahot Zaruri hai - 1">
          <RevealCard
            coverContent={<p className="text-lg">Life me clear hona bahot jaruri hai, aur apne mujhe...😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/clarity_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really yar,vaise bhi apne mujhe bahot bar apne raste se clear kiya hai, bahot sare hints diye tha ki mai khud ba khud clear ho jaun..lekin vahi hai na kki --- Dil hai ki Manta nhi............</p>
          </RevealCard>
        </StorySection>


        <StorySection title="Kuchh thoda aur hai, clarity - 2">
          <RevealCard
            coverContent={<p className="text-lg">Thoda beman se hi padh lena ap....</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/clarity_2.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really Maine apke iss bar ke tarike se sach me, Apse milna nasib to nhi hua..lekin bahot kuchh sikha gya</p>
          </RevealCard>
        </StorySection>




        <StorySection title="Apse na milke bahot kuchh sikha maine Babu 😔">
          <RevealCard
            coverContent={<p className="text-lg">Apse to nhi mila, lekin sayad mai iss bar apne apse to mil gya Babu 😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/clarity_3.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Ap to bahot pahale se apne side se clear thi, bas fasa aur unclear to mai tha jo aaj tak nhi ho paya tha but ab....😔</p>
          </RevealCard>
        </StorySection>




        <StorySection title="Fir Bhi ek ummeed thi ki...1">
          <RevealCard
            coverContent={<p className="text-lg"> ooo ummeed bhi fiki padd gyi meri apke aage Babu😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/umeed_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Mujhe lga tha ki---------......................................................................................................kya likhu kuchh samjh me hi nhi arha hai mujhe yar sach me....😔</p>
          </RevealCard>
        </StorySection>






        <StorySection title="Maine sapne me bhi nhi socha tha ki aisa hoga...2">
          <RevealCard
            coverContent={<p className="text-lg">Din me Tare dikha diye ap to yar Babu....</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/umeed_2.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Mere pass sabd etne hai ki puri zindagi kam padd jaye likhane ke liye...lekin mai aaj bhi kal ke jaise blank hua pada hu Babu 😔</p>
          </RevealCard>
        </StorySection>





        <StorySection title="lekin sach bat hai...ummede hamesha taklif hi deti hai...3">
          <RevealCard
            coverContent={<p className="text-lg">maine ye suna tha ki pairo tale zamin khisak jati hai kabhi....Lekin apne to mere ankho tale andhera la diya tha Babu kal...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/umeed_3.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really, Apne to mera Noor hi chhin liya yar...ek bar ke liye jaan mangti to ham de dete yar Babu 😊.....................But apne to 😔</p>
          </RevealCard>
        </StorySection>




        <StorySection title="Apko pata hai ???????????????????????????????...4">
          <RevealCard
            coverContent={<p className="text-lg">Apka na rukna hi mere sare sawalo ka javab ban gya</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/umeed_4.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really Mujhe apke end se har ek confusion ka javab apka na ana de gya Babu 😔 ........</p>
          </RevealCard>
        </StorySection>




        <StorySection title="sayad mai aur meri ummede dono galat thi...5">
          <RevealCard
            coverContent={<p className="text-lg">Kyuki mai iss ummedon me bahot baar maar khaya hu...aur...........</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/umeed_5.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Aur ooo mar koi aur nhi, apne hi har vakt diya hai Babu 😔 </p>
          </RevealCard>
        </StorySection>




        <StorySection title="Kuchh galat ummed hogi to maaf karna...6">
          <RevealCard
            coverContent={<p className="text-lg">Sayad har bar galat hi rahi ho😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/umeed_6.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">iske liye apne aisa kiya mere sath Babu, vaise bahot achha ki ap sach me, mujhe apne meri aukat dikhai...Thanks Babu 😊 </p>
          </RevealCard>
        </StorySection>




        <StorySection title="Mausam ne to Dil kholke mera Welcome kiya But....">
          <RevealCard
            coverContent={<p className="text-lg">Lekin jise karna chahiye tha unhone to mere pagalpan ka intehan le liya....</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/mausam_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really, mujhe kitna acha ye lga ki mausam ne mera ache se swagat kiya aur vidai bhi, lekin apne to mujhe ek bhikhh ka tukda bhi nhi dala...butt mujhe apka ye welcome karne ka tarika bhi bahot acha laga Babu 😊... I am really Happy For You Babu 😊 </p>
          </RevealCard>
        </StorySection>



        <StorySection title="Hatna etna asan hota to, Kal ap mujhe aise ajnabi ke jaise chhodke nhi jati">
          <RevealCard
            coverContent={<p className="text-lg">SAb kuchh jante huye bhi kaise kar leti ho ap Yar Babu 😔 </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/hatna_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Apko takilfe pata hai fir bhi apne aisa kiya, lekin kyu yar Babu Kyu ???????????????????????</p>
          </RevealCard>
        </StorySection>


        <StorySection title="Kya Sach me etna Asan hai ???">
          <RevealCard
            coverContent={<p className="text-lg">Babu😔, Apse maine manga hi aisa kya tha jo ap mujhe bar bar ye bat bolti rahi yar 😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/hatna_2.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really , Sayad bahot jyada asan hai..iske liye ap mujhe ye bat bar bar bar bar bar bar bolti thi na.....ap bolti ho mtlb hoga ... I  Accepted .</p>
          </RevealCard>
        </StorySection>


        <StorySection title="Chaliye, Ab mai sach me hi hatt jaunga....">
          <RevealCard
            coverContent={<p className="text-lg">Hatt jaunga mtlb ki - Marr jaunga aisa, aur apko kya hi ????</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/hatna_3.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Really,etna samjh me aya ki apko kuch nhi hone wala hai mere vajah se, kuchh bhi nhi...iske liye ap mujhe etna asani se bol deti ho na ???😔</p>
          </RevealCard>
        </StorySection>



        <StorySection title="एक आखिरी पत्र आपके लिये">
          <RevealCard
            coverContent={<p className="text-lg">Ye mera last letter hai apke liye, ab iske baad nhi ayega kuch mera Sandesh apko Babu😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/last_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Ye mera last Khat hai...mujhe sach me samjh agya ki efforts matter nhi karte hai jab samne wala insan hamara na ho tab......baki to karte hi hai...ham kisi ek ki vajah se pure world ko to blame nhi kar sakte na???</p>
          </RevealCard>
        </StorySection>


        <StorySection title="Apse kiya hua promise mai jarur pura karunga">
          <RevealCard
            coverContent={<p className="text-lg">aur oo sab mujhe hi pta rahega ab....kyuki apne to mera sath bahot hi asani se chhod diya na Babu 😔 </p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/last_2.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Kya bolu yar Babu.................mai to abhi bhi rah rah ke blank ho ja rha hu yar 😔 </p>
          </RevealCard>
        </StorySection>



        <StorySection title="Akhiri Letter aisa hota hai...Jaise akhirh saans ho">
          <RevealCard
            coverContent={<p className="text-lg">Aisa lag rha ye ki ab meri saans bhi band ho jayegi isi ke sath me</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/last_3.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">kisi ko ye akhiri bar bye bolna, kisi ko ek last time msg karna, kisi ko ek last time dekhna, jaisa feel hota hai na, use bhi bada dard kisi ko last time khat likhane ka hota hai Babu, because ham khat me sirf words nhi likhate hai, ham khat me apni feelings likhate hai jo har bar aur har ek words ke liye alag alag hoti hai Babu 😔</p>
          </RevealCard>
        </StorySection>

        <StorySection title="Mujhe apne nazar me bura hi rahne dena aap">
          <RevealCard
            coverContent={<p className="text-lg">Vaise rahne dena kya, mai to hu hi sabke nazro me, aur ab to apne bhi apna liya hai same Babu</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/bura_1.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Aur ye apko bahot ache se meri yado se dur rakhega bahot jyada .....ap hamesha bura hi likhna apne nazaro me mujhe .........</p>
          </RevealCard>
        </StorySection>


        <StorySection title="Guru to hona hi chahiye">
          <RevealCard
            coverContent={<p className="text-lg">Akhir Gurur kyu na karo ap ? Apke pass mujhse acha sab kuchh hai</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/gurur.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Aur karna bhi chahiye Babu, aur ap karo........Lekin ek bar yaad rakhna ki...kisi ka Dil dukha ke Gurur nhi kiya karte Mohtarma....</p>
          </RevealCard>
        </StorySection>


        <StorySection title="Har bar apko acha laga hai mere feelings ke sath ???? Kitna pyar se laya tha mai">
          <RevealCard
            coverContent={<p className="text-lg">Apko adat si ho gyi hogi mere efforts aur feelings ke sath aisa karte karte na😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/kalava.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Apke liye apne mandir se laya tha, lekin apne use dekhna tak nhi chaha ki.....etna to apko pta hona chahiye ki gavn gya hai to mere liye kuchh na kuchh to laya hi hoga ooo.....lekin apko to bas mai Hawasi lagta tha na.......Babu..........</p>
          </RevealCard>
        </StorySection>




        <StorySection title="Lekin ye Tarika acha nhi tha Babu 😔">
          <RevealCard
            coverContent={<p className="text-lg">Aur bhi tarike ho sakte tha Babu😔</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/tarika.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">kisi ke liye, kisi aur ka dil dukhana sayad apko pasand hai...kya rasta apnaya hai na apne Babu 😔 apne ek bar bhi nhi socha hoga ki aur raste ho sakte hain na ??? But ???????????</p>
          </RevealCard>
        </StorySection>


        <StorySection title="अलविदा मेरी रानी 😊">
          <RevealCard
            coverContent={<p className="text-lg">Chaliye ab chalta hu, mera Samay pura hua apke pyar ke liye...</p>}
          >
            <div className="relative w-full max-w-2xl">
              <Image src="/alvida.png" alt="A heartfelt letter" width={800} height={1067} className="rounded-lg shadow-lg object-contain" data-ai-hint="handwritten letter" />
            </div>
            <p className="mt-4 text-center font-body text-lg">Finally, Ap wali maine iss bar kar di Babu.....ab to ap khush hogi na...mujhe apka msg ache se yad hai.....ki--- apne life khush rho....koshish karunga......Bas ap khush ho na Bas....Always Be Happy 😊 Babu 😊 </p>
          </RevealCard>
        </StorySection>

      
      </main>
      <PageFooter />
    </div>
  );
}
