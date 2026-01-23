
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

      
      </main>
      <PageFooter />
    </div>
  );
}
