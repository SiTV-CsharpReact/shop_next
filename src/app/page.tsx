import MyCard from '@/components/MyCard'
import image from '../../public/image.jpg'
export default function Home() {
  const list = [
    {
      title: "Orange",
      img: image,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: image,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
    {list.map((item, index) => (
        <MyCard item={item} index ={index}/>
    ))}
  </div>
    
  )
}
