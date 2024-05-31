import ContentItem from "@/components/ContentItem";
import ContentListFilter from "@/components/ContentListFilter";
import Header from "@/components/Header";
// import Image from "next/image";

export default function Home() {
  const items = Array.from({ length: 100 }).map((_, i) => ({
    src: `https://picsum.photos/seed/${i + 1}/300/300`,
    text: 'Lorem Ipsum',
    hot: i % 2 == 0,
    update: i % 3 == 0,
    like: Math.round(Math.random() * 1000) + i,
    share: Math.round(Math.random() * 1000) + i,
    comment: Math.round(Math.random() * 1000) + i,
  }))
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="flex flex-col w-full px-7 max-w-[1200px]">
        {/* 큐레이션 섹션 */}
        <div className="text-2xl font-bold align-left py-4 w-full">#큐레이션</div>
        <div className="w-full">
          <div className="snap-x flex flex-row gap-2 w-full overflow-x-scroll">
            {items.toReversed().map((item, i) => (
              <div className="snap-start ">
                <ContentItem key={i} {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <ContentListFilter />
          {/* 리스트 섹션 */}
          <div className="mt-5 flex flex-wrap gap-2 justify-center">
            {items.map((item, i)=>(<ContentItem key={i} {...item}/>))}
          </div>
        </div>
      </div>
    </main>
  );
}
