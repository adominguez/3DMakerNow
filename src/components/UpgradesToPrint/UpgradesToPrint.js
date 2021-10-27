import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomSection from '../CustomSection/CustomSection'
import { colors } from '../../theme/colors'
import { Item } from './UpgradesToPrint.Styles'

const sliderSettings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const SliderUpgrades = ({ upgrades, settings }) => {
  return (
    <Slider {...settings}>
      {upgrades &&
        upgrades.length &&
        upgrades.map((item, key) => (
          <Item key={key}>
            <a
              key={key}
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={item.link}
            >
              <div className="relative items-center flex-grow overflow-hidden flex-2 centered-flex">
                <img loading="lazy" src={item.image} alt={item.text} />
                <h3 className="text-primary-500 w-full p-1 text-center">
                  {item.description}
                </h3>
              </div>
            </a>
          </Item>
        ))}
    </Slider>
  )
}

export const UpgradesToPrint = ({
  upgrades,
  initialText,
  title,
  settings = sliderSettings,
}) => {
  return (
    <CustomSection
      backgroundColor={colors.white}
      titleColor={colors.primary}
      color={colors.blueGray}
    >
      <div className="block slider">
        <h2>{title || 'Mejoras para imprimir'}</h2>
        <div dangerouslySetInnerHTML={{ __html: initialText }} />
        <SliderUpgrades upgrades={upgrades} settings={settings} />
      </div>
    </CustomSection>
  )
}
