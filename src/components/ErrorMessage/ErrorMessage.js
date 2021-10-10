import React from 'react'
import { colors } from '../../theme/colors'
import { errorMessages } from '../../languages/es'
import { Message } from './ErrorMessage.styles'

const ErrorMessage = ({ textError, type = 'error' }) => {
  return (
    <Message>
      <div className="content">
        {type === 'error' ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke={colors.red}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="title-error">
              {errorMessages.errorTitle}
            </p>
          </>
        ) : null}
        {type === 'empty' ? (
          <>
            <p className="empty-error">
              {errorMessages.noResults}
            </p>
          </>
        ) : null}
      </div>
      <p>
        {textError}
      </p>
    </Message>
  )
}

export default ErrorMessage
