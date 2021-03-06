import { GetStaticProps } from 'next'
// import { GetServerSideProps } from 'next'

import Main from 'components/Main'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'

import { LandingPageProps } from 'types/api'

const Index = (props: LandingPageProps) => <Main {...props} />

// GetServerSideProps
export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
