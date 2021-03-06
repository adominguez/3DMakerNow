import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Wrapper = styled.div`
  display:flex:
  justify-content: center;
  width: 100%;
  background: ${colors.secondary};
  background: linear-gradient(140deg, ${colors.secondary} 0%, ${colors.secondaryDark} 100%);

  .wrapper-content {
    max-width: 1180px;
    margin: 0 auto;
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  
  .wrapper-content .content {
    flex: 1;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  
  .wrapper-content .content.left-content {
    justify-content: flex-start;
  }

  .wrapper-content .content-message {
    font-family: ${fonts.pompiere};
    border: 1px solid ${colors.white};
    border-radius: 4px;
    padding: 1rem;
    font-size: 30px;
  }
  
  h2.title,
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${colors.primary};
    font-family: ;
    text-transform: none;
    font-weight: 400;
    text-align: center;
  }
  
  h3.subtitle,
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${colors.blueGrayLight};
    font-family: ${fonts.archive};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  position: relative;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  label {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.primary};
    margin-bottom: 0.5rem;
  }
  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.blueGrayLight};
    border: 1px solid ${colors.primaryDark};
    border-radius: 4px;
    text-decoration: none;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.primary};
    &:hover {
      background: ${colors.primaryDark};
    }
    &:focus {
      outline: none;
      background: ${colors.primaryDark};
    }
  }
  select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid ${colors.blueGrayLight};
    background: transparent;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.blueGrayLight};
    margin-bottom: 1rem;
    &:focus {
      outline: none;
      border: 1px solid ${colors.primary};
    }
  }
`

export const StyledImg = styled(GatsbyImage)`
  max-width: 450px;
`
