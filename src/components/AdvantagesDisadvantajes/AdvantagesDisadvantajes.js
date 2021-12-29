import React from 'react'
import { colors } from '../../theme/colors'
import CustomSection from '../CustomSection/CustomSection'
import { BlockWrapper, Item } from './AdvantagesDisavantajes.styles'

const RenderItem = ({ item, type }) => (
  <Item className={type}>
    <div dangerouslySetInnerHTML={{ __html: item.advantageslist || item.disadvantageslist }} />
  </Item>
)

const Block = ({ advantagesDisadvantajes }) => (
  <BlockWrapper>
    {!!advantagesDisadvantajes.advantages.length &&
      <section>
        <h3>Ventajas</h3>
        {advantagesDisadvantajes.advantages.map((item, key) => (
          <RenderItem item={item} key={key} type="advantage" />
        ))}
      </section>}
    {!!advantagesDisadvantajes.disadvantages.length &&
      <section>
        <h3>Desventajas</h3>
        {
          advantagesDisadvantajes.disadvantages.map((item, key) => (
            <RenderItem key={key} item={item} type="disadvantage" />
          ))
        }
      </section>}
  </BlockWrapper>
)

const AdvantagesDisadvantajes = ({ advantagesDisadvantajes, title, initialText }) => {

  return (
    <CustomSection
      backgroundColor={colors.blueGrayDark}
      titleColor={colors.primary}
      color={colors.white}
    >
      <div className="block">
        <h2>{title || 'Ventajas y desventajas'}</h2>
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: initialText }}
        />
        <Block advantagesDisadvantajes={advantagesDisadvantajes} />
      </div>
    </CustomSection>

  )
}

export default AdvantagesDisadvantajes
