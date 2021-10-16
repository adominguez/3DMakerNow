import React, { useState } from 'react'
import { colors } from '../../theme/colors'
import { convertedKeyProperties } from '../../utils/utils'
import CustomSection from '../CustomSection/CustomSection'
import Tooltip from '../Tooltip/Tooltip'
import { matchKeyProperties } from './properties'
import { ContentTabs } from './FeatureTabs.styles'
import { TabsContainer, TabContent } from './Tabs.Styles'

const Tab = ({ properties, activeTab = 'feature' }) => {
  const data = Object.entries(matchKeyProperties[activeTab].data)

  const renderTechnologyTooltip = (technology) => {
    switch (technology) {
      case 'FDM':
        return '<b>Impresora de FDM:</b> es un tipo de impresión por el que <b>la pieza se va realizando capa a capa</b>. El material se va fundiendo a su paso por el extrusor de la impresora y va realizando la pieza.'
      case 'Resina':
        return '<b>Impresora de resina:</b> la impresión 3D se realiza mediante resina líquida, gracias a una luz photónica que va solidificando el material capa a capa.'
      default:
        break
    }
  }

  return (
    <TabContent>
      {properties &&
        data.map((item, key) => {
          return item[0] === 'contentPrinterList' ? (
            <div dangerouslySetInnerHTML={{ __html: properties.contentPrinterList }} />
          ) : properties[item[0]] ? (
            <div key={key} className="prop-data">
              {item[1].icon ? (
                <img
                  src={item[1].icon}
                  alt={item[1].title}
                />
              ) : null}
              <b>{item[1].title}</b>:{' '}
              <span className="mr-2">{properties[item[0]]}</span>
              {item[1].info ? (
                <Tooltip
                  content={
                    item[0] === 'technology'
                      ? renderTechnologyTooltip(properties[item[0]])
                      : item[1].info
                  }
                  title={item[1].title}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="information"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#94a3b8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Tooltip>
              ) : null}
            </div>
          ) : null
        })}
    </TabContent>
  )
}

const HeaderTabs = ({ properties, activeTab, setActiveTab }) => (
  <TabsContainer>
    {convertedKeyProperties(properties) &&
      convertedKeyProperties(properties).filter(
        (item) => item !== 'sectionContent' && item !== 'title'
      ).length
      ? convertedKeyProperties(matchKeyProperties).map((item, key) =>
        properties[item] ? (
          <label
            key={key}
            htmlFor="property"
            className={activeTab === item ? 'active' : ''}
          >
            <input
              type="radio"
              name="property"
              value={item}
              checked={activeTab === item}
              onChange={(e) => setActiveTab(e.currentTarget.value)}
            />
            <span className="match-prop">{matchKeyProperties[item].text}</span>
          </label>
        ) : null
      )
      : null}
  </TabsContainer>
)

const FeatureTabs = ({ properties }) => {
  const initialSelected = properties['feature']
    ? 'feature'
    : properties['software']
      ? 'software'
      : properties['unboxing']
        ? 'unboxing'
        : properties['electricity']
          ? 'electricity'
          : properties['content']
            ? 'content'
            : 'feature'
  const [activeTab, setActiveTab] = useState(initialSelected)

  return (
    <CustomSection
      backgroundColor={colors.blueGrayDark}
      sectionContent={properties.sectionContent}
      titleColor={colors.primary}
      color={colors.white}
    >
      <div className="block">
        <h2>{properties.sectionTitle || 'Características técnicas'}</h2>
        <div className="body" dangerouslySetInnerHTML={{ __html: properties.sectionContent }} />
        <ContentTabs>
          <HeaderTabs properties={properties} activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab properties={properties[activeTab]} activeTab={activeTab} />
        </ContentTabs>
      </div>
    </CustomSection>
  )
}

export default FeatureTabs
