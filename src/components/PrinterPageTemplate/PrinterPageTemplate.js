import React from 'react'
import ProductDetailValoration from '../ProductDetail/ProductDetailValoration'
import CompareProducts from '../CompareProducts/CompareProducts'
import FeatureTabs from '../FeatureTabs/FeatureTabs'
import CustomSection from '../CustomSection/CustomSection'
import WhereBuy from '../WhereBuy/WhereBuy'
import ProductsListSection from '../ProductsListSection/ProductsListSection'
import AdvantagesDisadvantajes from '../AdvantagesDisadvantajes/AdvantagesDisadvantajes'
import SlideImages from '../SlideImages/SlideImages'
import { UpgradesToPrint } from '../UpgradesToPrint/UpgradesToPrint'
import Faqs from '../Faqs/Faqs'
import Conclusion from '../Conclusion/Conclusion'
import SearcherCombo from '../SearcherCombo/SearcherCombo'

const page = {
  title: '¿No te convence esta impresora 3D?',
  subtitle: 'Elige tus requisitos y encuentra la impresora 3D que necesitas',
}

const PrinterPage = ({ data }) => {
  const { title, ACF_Page } = data.wpPage
  const {
    content,
    printerimages: printerImages,
    aliexpresslink: aliexpressLink,
    amazonlink: amazonLink,
    customlinks: customLinks,
    compareproductscontent: compareProductsContent,
    compareproductstitle: compareProductsTitle,
    productstocompare: productsToCompare,
    productstocompareproperties: propertiesToCompare,
    wherebuyinitialtext: whereBuyInitialText,
    wherebuycontent: whereBuyContent,
    wherebuytitle: whereBuyTitle,
    wherebuyimage: whereBuyImage,
    productslisttitle: productsListTitle,
    productslistinitialtext: productsListInitialText,
    keywordsproductslist: keywordsProductsList,
    advantagestitle: advantagesTitle,
    advantagesinitialtext: advantagesInitialText,
    advantagesrepeater: advantages,
    disadvantegesrepeater: disadvantages,
    printersgallerytitle: printersGalleryTitle,
    printersgalleryinitialtext: printersGalleryInitialText,
    printersgalleryimages: printersGalleryImages,
    featurestext: featuresText,
    featurestitle: featuresTitle,
    features,
    conclusiontitle: conclusionTitle,
    conclusioncontent: conclusionContent,
    faqstext: faqsText,
    faqstitle: faqsTitle,
    calltoactiontext: callToActionText,
    calltoactionimage: callToActionImage,
    faqs
  } = ACF_Page || {}

  const featuresData = {
    sectionContent: ACF_Page?.featurescontent,
    sectionTitle: ACF_Page?.featurestitle,
    feature: {
      technology: ACF_Page?.technology,
      printerVolume: ACF_Page?.printervolume,
      layerResolution: ACF_Page?.layerresolution,
      axisPrecision: ACF_Page?.axisprecision,
      extrusorNumber: ACF_Page?.extrusornumber,
      extrusor: ACF_Page?.extrusor,
      filamentDiameter: ACF_Page?.filamentdiameter,
      nozzleDiameter: ACF_Page?.nozzlediameter,
      bedLevel: ACF_Page?.bedlevel,
      printerSpeed: ACF_Page?.printerspeed,
      extruderTemperature: ACF_Page?.extrudertemperature,
      bedTemperature: ACF_Page?.bedtemperature,
      materials: ACF_Page?.materials,
    },
    software: {
      slicer: ACF_Page?.slicer,
      inputFormat: ACF_Page?.inputformat,
      firmware: ACF_Page?.firmware,
      display: ACF_Page?.display,
      conectivity: ACF_Page?.conectivity,
    },
    unboxing: {
      unboxingSize: ACF_Page?.unboxingsize,
      unboxingWeight: ACF_Page?.unboxingweight,
      printerSize: ACF_Page?.printersize,
      printerWeight: ACF_Page?.printerweight,
    },
    electricity: {
      voltage: ACF_Page?.voltage,
      input: ACF_Page?.input,
    },
    content: {
      contentPrinterList: ACF_Page?.contentprinterlist,
    },
  }

  return (
    <>
      <ProductDetailValoration
        pageTitle={title}
        content={content || ''}
        images={printerImages}
        amazonLink={amazonLink}
        aliexpressLink={aliexpressLink}
        customLinks={customLinks}
      />
      <CustomSection>
        <div className="block" dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      </CustomSection>
      {productsToCompare?.length > 0 && propertiesToCompare?.length && (
        <CompareProducts
          productsToCompare={productsToCompare}
          propertiesToCompare={propertiesToCompare}
          compareProductsTitle={compareProductsTitle}
          compareProductsContent={compareProductsContent}
        />
      )}
      {
        <FeatureTabs properties={featuresData} />
      }
      {whereBuyTitle && whereBuyContent && (
        <WhereBuy 
          title={whereBuyTitle}
          content={whereBuyContent}
          initialText={whereBuyInitialText}
          amazonLink={amazonLink}
          aliexpressLink={aliexpressLink}
          customLinks={customLinks}
          image={whereBuyImage}
        />
      )}
      {productsListTitle && productsListInitialText && (
        <ProductsListSection title={productsListTitle} content={productsListInitialText} keywords={keywordsProductsList} />)
      }
      {!!advantages?.length || !!disadvantages?.length ? (
        <AdvantagesDisadvantajes advantagesDisadvantajes={{advantages, disadvantages}} title={advantagesTitle} initialText={advantagesInitialText} />
      ) : null}
      {printersGalleryImages?.length && (
        <SlideImages title={printersGalleryTitle} initialText={printersGalleryInitialText} images={printersGalleryImages} />
      )}
      {features?.length && (
        <UpgradesToPrint upgrades={features} title={featuresTitle} initialText={featuresText} />
      )}
      {faqs?.length && (
        <Faqs faqs={faqs} title={faqsTitle} initialText={faqsText} />
      )}
      {conclusionContent && (
        <Conclusion title={conclusionTitle} text={conclusionContent} />
      )}
      {callToActionText && (
        <WhereBuy 
          title='na'
          content={callToActionText}
          amazonLink={amazonLink}
          aliexpressLink={aliexpressLink}
          customLinks={customLinks}
          image={callToActionImage}
        />
      )}
      <SearcherCombo title={page.title} subtitle={page.subtitle} />
    </>
  )
}

export default PrinterPage
