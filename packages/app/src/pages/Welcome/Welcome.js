import React from 'react'
import HeroHeader from '../../components/HeroHeader'
import group from '../../res/icons/group.svg'
import cloudServer from '../../res/icons/cloud-server.svg'
import FadeInView from '../../ui/FadeInView'
import Heading from '../../ui/Heading'
import SectionContent from '../../ui/SectionContent'
import Text from '../../ui/Text'
import styles from './Welcome.module.scss'

function Welcome () {
  return (
    <main>
      <HeroHeader />

      <FadeInView>
        <SectionContent
          header={(
            <Heading type='h2' centered>Join the community</Heading>
          )}
          image={(
            <img className={styles.image} src={group} alt='' />
          )}
        >
          <Text>
            Your are able to comment on others recipes, giving them tips or what
            you liked most about their recipe. You can give them a heart that
            allows other people to find a recipe that is loved by others.
          </Text>
        </SectionContent>
      </FadeInView>

      <FadeInView>
        <SectionContent
          header={(
            <Heading type='h3' centered>Ditch the old recipe books</Heading>
          )}
          image={(
            <img className={styles.image} src={cloudServer} alt='' />
          )}
          reversed
        >
          <Text>
            Instead of storing your recipes in old books that needs to be stored
            safely and risk losing all you precious and delicious recipes in case
            of an accident, you can create you recipes here where it is safely
            stored in the cloud. Allowing access to your recipes wherever you are.
          </Text>
        </SectionContent>
      </FadeInView>
    </main>
  )
}

export default Welcome
