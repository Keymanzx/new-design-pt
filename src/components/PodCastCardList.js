import React from "react";
import {
  Bars3Icon,
  BellIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import PodCastCard from "./PodCastCard";

const listCard = [
  {
    title:
      "[CR] From Kashmir with Love",
    img: "https://f.ptcdn.info/415/083/000/s9tc203fz0SpPpsG5MVy-o.png",
    content:
      "เมื่อหลายปีก่อน ระหว่างกำลังนั่งไถจอมือถือเล่น เราบังเอิญไปเจอภาพของฝูงม้าที่มีฉากหลังเป็นแนวเทือกเขาเรียงรายสลับซับซ้อนถูกแต้มด้วยหิมะสีขาวนุ่มฟู ไม่รอช้า กดเข้าไปอ่านอย่างรวดเร็วว่าคือที่ไหน สวยอะไรขนาดนี้",
  },
  {
    title:
      "**Green book** หนังดี Feel Good",
    img: "https://f.ptcdn.info/406/083/000/s9rlv628o4rZlVvOJqppc-o.jpg",
    content:
      "เรื่องราวของ **Green Book** ตั้งอยู่ในปี 1962 และติดตามชีวิตของทอนี่ ลิป (วิกโก้ มอร์เทนเซ่น) ผู้เป็นบอดี้การ์ดชาวอิตาเลียน-อเมริกันที่ได้รับการว่าจ้างให้เป็นคนขับรถและผู้คุ้มกันให้กับดอน ชีร์ลีย์ (มาเฮอร์ชาลา อาลี) นักเปียโนคลาสสิกชาวแอฟริกัน-อเมริกันที่กำลังจะเริ่มทัวร์คอนเสิร์ตในภาคใต้ของสหรัฐอเมริกา ซึ่งเป็นพื้นที่ที่มีการแบ่งแยกสีผิวอย่างชัดเจนในขณะนั้น ",
  },
  {
    title:
      "ไปเดินดูดอก อุเมะ 梅ด้วยกัน ที่กิฟุ 3-2ぎふ梅まつり",
    img: "https://f.ptcdn.info/453/074/000/qxoli2ed2ZOPW1C4IwK-o.jpg",
    content:
      "อีกไม่กี่ปีก็เกษียนแล้ว ไปนอนกินเงินบำนาญ สิ่งที่ทำได้คือออกกำลัง เพื่อให้สุขภาพดี ไม่เจ็บป่วยบ่อย จะได้ไม่เป็นภาระของลูกหลานอายุยืนก็ดีค่ะ  แต่จะให้ดีสุขภาพก็ต้องดีด้วย ค่า",
  },
//   {
//     title:
//       "หาชื่อหนังนึกไม่ออกซักที",
//     img: "https://www.kroobannok.com/news_pic/p66554620509.jpg",
//     content:
//       "อีกไม่กี่ปีก็เกษียนแล้ว ไปนอนกินเงินบำนาญ สิ่งที่ทำได้คือออกกำลัง เพื่อให้สุขภาพดี ไม่เจ็บป่วยบ่อย จะได้ไม่เป็นภาระของลูกหลานอายุยืนก็ดีค่ะ  แต่จะให้ดีสุขภาพก็ต้องดีด้วย ค่า",
//   },
  {
    title:
      "รวมรูปภาพของ 10 ซีรีส์-หนัง Netflix",
    img: "https://s.isanook.com/mv/0/ui/19/99109/low_season_1590759582.jpg",
    content:
      "รู้สึกหมดไฟในการหางาน เด็กจบใหม่มีใครเป็นบ้าง เรียนจบมาแต่หางานทำไม่ได้",
  },
//   {
//     title: "คุณชอบตัวละครแบบไหนในหนังสัปเหร่อ ไทบ้านเดอะซีรีส์",
//     img: "https://www.thibaan.com/wp-content/uploads/2020/01/poster-%E0%B9%84%E0%B8%97%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%E0%B8%8B%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B9%8C2-1.jpg",
//     content: "คุณเคยดูหนังไทบ้านเดอะซีรีส์ภาคไหนบ้าง",
//   },
  {
    title:
      "Asian Television Awards ครั้งที่28 จากประเทศเวียดนาม",
    img: "https://f.ptcdn.info/927/082/000/s78p8d20dgdbXmi8mtc7x-o.jpg",
    content:
      "ชื่อรางวัลคือ Best Actress in a Reading Role โดยได้จากซีรีส์เรื่อง หนังรักเรื่องที่แล้ว (10 Years Ticket น้องตูสวยมากๆแล้วก็เก่งมากๆเลย  อนาคตไกลแน่ๆ ก้าวขึ้นมาเป็น BA Dior แล้วยังได้รางวัลระดับเอเชียอีก👏🏻👏🏻👏🏻",
  },
];

export default function PodCastCardList() {
  return (
    <>
      <div className="bg-gray-100 px-4 py-4 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-900 font-bold flex items-center">
            Podcasts
            <ArrowRightIcon className="h-6 w-6 ml-2" aria-hidden="true" />
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {listCard.map((item) => {
            return (
              <PodCastCard
                title={item.title}
                img={item.img}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
