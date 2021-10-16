import React from 'react'
import ProductDetailValoration from '../ProductDetail/ProductDetailValoration'
import CompareProducts from '../CompareProducts/CompareProducts'
import FeatureTabs from '../FeatureTabs/FeatureTabs'

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
  } = ACF_Page || {}

  const featuresData = {
    sectionContent: ACF_Page.featurescontent,
    sectionTitle: ACF_Page.featurestitle,
    feature: {
      technology: ACF_Page.technology,
      printerVolume: ACF_Page.printervolume,
      layerResolution: ACF_Page.layerresolution,
      axisPrecision: ACF_Page.axisprecision,
      extrusorNumber: ACF_Page.extrusornumber,
      extrusor: ACF_Page.extrusor,
      filamentDiameter: ACF_Page.filamentdiameter,
      nozzleDiameter: ACF_Page.nozzlediameter,
      bedLevel: ACF_Page.bedlevel,
      printerSpeed: ACF_Page.printerspeed,
      extruderTemperature: ACF_Page.extrudertemperature,
      bedTemperature: ACF_Page.bedtemperature,
      materials: ACF_Page.materials,
    },
    software: {
      slicer: ACF_Page.slicer,
      inputFormat: ACF_Page.inputformat,
      firmware: ACF_Page.firmware,
      display: ACF_Page.display,
      conectivity: ACF_Page.conectivity,
    },
    unboxing: {
      unboxingSize: ACF_Page.unboxingsize,
      unboxingWeight: ACF_Page.unboxingweight,
      printerSize: ACF_Page.printersize,
      printerWeight: ACF_Page.printerweight,
    },
    electricity: {
      voltage: ACF_Page.voltage,
      input: ACF_Page.input,
    },
    content: {
      contentPrinterList: ACF_Page.contentprinterlist,
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
      {productsToCompare?.length > 0 && propertiesToCompare?.length && (
        <CompareProducts
          productsToCompare={productsToCompare}
          propertiesToCompare={propertiesToCompare}
          compareProductsTitle={compareProductsTitle}
          compareProductsContent={compareProductsContent}
        />
      )}
      {ACF_Page.featurestitle && ACF_Page.featurescontent && (
        <FeatureTabs properties={featuresData} />
      )}
    </>
  )
}

export default PrinterPage
