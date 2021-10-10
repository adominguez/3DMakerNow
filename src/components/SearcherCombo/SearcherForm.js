import React, {useState, useEffect} from 'react';
import { Form } from './SearcherCombo.styles';
import { Link, withPrefix } from 'gatsby'
import { products, searcherComboTexts, printersTypes, filamentsTypes, filamentsColor, resinsColor, accesorios, postprocesados } from '../../languages/es';

const PrinterForm = ({printerType, changePrinterType}) => (
  <>
    <label htmlFor="printer">
      {searcherComboTexts.printerLabel}
    </label>
    <select
      name="printer"
      value={printerType}
      onChange={(event) => changePrinterType(event.currentTarget.value)}
    >
      {printersTypes.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </>
);

const FilamentForm = ({filamentType, filamentColor, changeFilamentColor, changeFilamentType}) => (
  <>
    <label htmlFor="filament">
      {searcherComboTexts.filamentLabel}
    </label>
    <select
      name="filament"
      value={filamentType}
      onChange={(event) => changeFilamentType(event.currentTarget.value)}
    >
      {filamentsTypes.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
    <label htmlFor="filamentColor">
      {searcherComboTexts.filamentColorLabel}
    </label>
    <select
      name="filamentColor"
      value={filamentColor}
      onChange={(event) => changeFilamentColor(event.currentTarget.value)}
    >
      {filamentsColor.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </>
);

const ResinaForm = ({resinColor, changeResinColor}) => (
  <>
    <label htmlFor="resina">
      {searcherComboTexts.resinaLabel}
    </label>
    <select
      name="resina"
      value={resinColor}
      onChange={(event) => changeResinColor(event.currentTarget.value)}
    >
      {resinsColor.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </>
);

const AccesoriosForm = ({accesorio, changeAccesorio}) => (
  <>
    <label htmlFor="accesorios">
      {searcherComboTexts.accesoriosLabel}
    </label>
    <select
      name="accesorios"
      value={accesorio}
      onChange={(event) => changeAccesorio(event.currentTarget.value)}
    >
      {accesorios.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </>
);

const PostprocesadoForm = ({postprocesado, changePostprocesado}) => (
  <>
    <label htmlFor="postprocesado">
      {searcherComboTexts.postprocesadoLabel}
    </label>
    <select
      name="postprocesado"
      value={postprocesado}
      onChange={(event) => changePostprocesado(event.currentTarget.value)}
    >
      {postprocesados.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </>
);

const SearcherForm = ({ handlerChangeProduct }) => {
  const {
    sessionProduct,
    sessionPrinterType,
    sessionFilamentColor,
    sessionFilamentType,
    sessionPostprocesado,
    sessionAccesorio,
    sessionResinColor,
  } =
    typeof sessionStorage !== 'undefined' &&
    sessionStorage.getItem('searcherCombo')
      ? JSON.parse(sessionStorage.getItem('searcherCombo'))
      : {}
  const [product, setProduct] = useState(sessionProduct || products[0].value);
  const [printerType, setPrinterType] = useState(sessionPrinterType || printersTypes[0])
  const [filamentType, setFilamentType] = useState(sessionFilamentType || filamentsTypes[0])
  const [filamentColor, setFilamentColor] = useState(sessionFilamentColor || filamentsColor[0])
  const [resinColor, setResinColor] = useState(sessionResinColor || resinsColor[0])
  const [accesorio, setAccesorio] = useState(sessionAccesorio || accesorios[0])
  const [postprocesado, setPostprocesado] = useState(sessionPostprocesado || postprocesados[0])

  useEffect(() => {
    if (product === products[0].value) {
      sessionStorage.setItem(
        'searcherCombo',
        JSON.stringify({
          sessionProduct: product,
          sessionPrinterType: printerType,
        })
      )
    }
    if (product === products[1].value) {
      sessionStorage.setItem(
        'searcherCombo',
        JSON.stringify({
          sessionProduct: product,
          sessionFilamentType: filamentType,
          sessionFilamentColor: filamentColor,
        })
      )
    }
    if (product === products[2].value) {
      sessionStorage.setItem(
        'searcherCombo',
        JSON.stringify({
          sessionProduct: product,
          sessionResinColor: resinColor,
        })
      )
    }
    if (product === products[3].value) {
      sessionStorage.setItem(
        'searcherCombo',
        JSON.stringify({
          sessionProduct: product,
          sessionAccesorio: accesorio,
        })
      )
    }
    if (product === products[4].value) {
      sessionStorage.setItem(
        'searcherCombo',
        JSON.stringify({
          sessionProduct: product,
          sessionPostprocesado: postprocesado,
        })
      )
    }
  }, [
    product,
    printerType,
    filamentType,
    filamentColor,
    resinColor,
    accesorio,
    postprocesado,
  ])

  useEffect(() => {
    handlerChangeProduct(product);
  }, [product, handlerChangeProduct])

  const changeProduct = (e) => {
    handlerChangeProduct(e.target.value);
    setProduct(e.target.value);
  }

  const transformProduct = () => {
    if (product === products[0].value) {
      return `impresoras 3D ${printerType}`
    }
    if (product === products[1].value) {
      return `Filamento ${filamentType} ${filamentColor}`
    }
    if (product === products[2].value) {
      return `Resina 3D ${resinColor}`
    }
    if (product === products[3].value) {
      return `${accesorio} para impresora 3D`
    }
    if (product === products[4].value) {
      if (postprocesado === 'Pinturas') {
        return `${postprocesado} para wargames`
      } else if (postprocesado === 'Pegamento') {
        return `Pegamento para plástico`
      } else if (postprocesado === 'Aerógrafos') {
        return `Aerógrafo para modelismo`
      } else if (postprocesado === 'Destornilladores') {
        return `Destornilladores precisión`
      } else {
        return postprocesado
      }
    }
  }

  const getUrl = () => `${withPrefix('/')}qp?s=${transformProduct().toLowerCase()}`;

  return (
    <Form>
      <label htmlFor="product">
        {searcherComboTexts.productLabel}
      </label>
      <select
        name="product"
        value={product}
        onChange={changeProduct}
      >
        {products.map(({value, text}) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      {product === products[0].value ? <PrinterForm printerType={printerType} changePrinterType={setPrinterType} /> : null}
      {product === products[1].value ? <FilamentForm filamentType={filamentType} filamentColor={filamentColor} changeFilamentColor={setFilamentColor} changeFilamentType={setFilamentType} /> : null}
      {product === products[2].value ? <ResinaForm resinColor={resinColor} changeResinColor={setResinColor} /> : null}
      {product === products[3].value ? <AccesoriosForm accesorio={accesorio} changeAccesorio={setAccesorio} /> : null}
      {product === products[4].value ? <PostprocesadoForm postprocesado={postprocesado} changePostprocesado={setPostprocesado} /> : null}
      <Link to={getUrl()}>
        Ver {products.find(({value}) => value === product).text}
      </Link>
    </Form>
  )
}

export default SearcherForm;