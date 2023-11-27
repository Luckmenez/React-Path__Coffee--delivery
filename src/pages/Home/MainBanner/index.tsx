import { DiscriptiveItem, DiscriptiveLayoutContainer, MainBannerContainer, TitleContainer } from "./style";
import CoffeImage from '@/assets/CoffeeImageBanner.svg'
import Vector1 from '@/assets/Vector1.svg'
import Vector2 from '@/assets/Vector2.svg'
import Vector3 from '@/assets/Vector3.svg'
import Vector4 from '@/assets/Vector4.svg'
import Vector5 from '@/assets/Vector5.svg'
import Vector6 from '@/assets/Vector6.svg'
import Vector7 from '@/assets/Vector7.svg'
import Vector8 from '@/assets/Vector8.svg'
import Vector9 from '@/assets/Vector9.svg'
import Vector10 from '@/assets/Vector10.svg'
import Vector11 from '@/assets/Vector11.svg'
import { Image } from "@/components/Image";
import { discriptiveItems, discriptiveItemsTypes } from "@/utils/discriptiveLayoutItems";


export function MainBanner(){
  return(
  <MainBannerContainer>
    <Image className="vector1__main-image" src={Vector1}/>
    <Image className="vector2__discription-items" src={Vector2}/>
    <Image className="vector3__centralized" src={Vector3}/>
    <Image className="vector4__subtitle" src={Vector4}/>
    <Image className="vector5__main-image-right" src={Vector5}/>
    <Image className="vector6__main-image-down" src={Vector6}/>
    <Image className="vector7__header-left" src={Vector7}/>
    <Image className="vector8__main-image-under" src={Vector8}/>
    <Image className="vector9__central" src={Vector9}/>
    <Image className="vector10__title" src={Vector10}/>
    <Image className="vector11__left-down" src={Vector11}/>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
        <DiscriptiveLayoutContainer>
          {discriptiveItems.map((item: discriptiveItemsTypes) => (
            <DiscriptiveItem key={item.id} $bgcolor={item.bgColor}>
              <div className="svg__container">
                {<item.icon weight="fill"/>}
              </div>
              {item.discription}
            </DiscriptiveItem>
          ))}
        </DiscriptiveLayoutContainer>
      </TitleContainer>
      <Image src={CoffeImage} className="image__positioning-right"/>
  </MainBannerContainer>
  )
}