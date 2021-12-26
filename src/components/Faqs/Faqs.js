import React, { useState, useEffect } from 'react'
import CustomSection from '../CustomSection/CustomSection'
import { capitalize } from '../../utils/utils'
import { colors } from '../../theme/colors'
import { Answer } from './Faqs.styles'

const Faq = ({ clickedFaq, ask, response, index, opened }) => (
  <Answer>
    <button
      className={`${opened ? 'opened' : ''}`}
      onClick={() => clickedFaq(index)}
    >
      <h3>{capitalize(ask)}</h3>
      <span
        className={`${opened ? 'opened' : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </button>
    <div className={`response ${opened ? 'opened' : ''}`}>
      <div dangerouslySetInnerHTML={{ __html: response }} />
    </div>
  </Answer>
);

const Faqs = ({ faqs: asks, initialText, title }) => {
  const [faqs, setFaqs] = useState(asks)

  useEffect(() => {
    setFaqs(asks)
  }, [asks])

  const clickedFaq = (index) => {
    const newFaqs = [...faqs]
    newFaqs[index].opened = !newFaqs[index].opened
    setFaqs(newFaqs)
  }

  return (
    <CustomSection
      backgroundColor={colors.white}
      titleColor={colors.primary}
      color={colors.blueGray}
    >
      <div className="block slider">
        <h2>{title || 'Preguntas frecuentes'}</h2>
        <div dangerouslySetInnerHTML={{ __html: initialText }} />
        {faqs && faqs.length ? (
          faqs.map(({ question, response, opened }, index) => (
            <Faq key={index} index={index} ask={question} response={response} opened={opened} clickedFaq={clickedFaq} />
          ))
        ) : null}
      </div>
    </CustomSection>
  )
}

export default Faqs
