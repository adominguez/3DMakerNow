import React from 'react'
import PageHero from '../PageHero/PageHero'
import styled from 'styled-components'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import PageSidebar from '../PageSidebar/PageSidebar'

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
`

const DefatulPage = ({ data }) => (
  <>
    {data.wpPage.featuredImage ? (
      <PageHero
        img={
          data.wpPage.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData
        }
        alt={data.wpPage.title}
      />
    ) : null}
    <Wrapper>
      {data.wpPage.seo?.breadcrumbs && (
        <BreadCrumb links={data.wpPage.seo.breadcrumbs} />
      )}
      <ContentWrapper>
        <PageSidebar
          parentChildren={
            data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes
          }
          currentPage={data.wpPage}
          parent={data.wpPage.wpParent && data.wpPage.wpParent.node.title}
        >
          {data.wpPage.wpChildren}
        </PageSidebar>
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </>
)

export default DefatulPage
