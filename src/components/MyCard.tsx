import {Card, CardHeader, CardBody, CardFooter,Image} from "@nextui-org/react";

export default function MyCard(item:any,index:number) {
  return (
    <Card shadow="sm" key={index} isPressable >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
  );
}