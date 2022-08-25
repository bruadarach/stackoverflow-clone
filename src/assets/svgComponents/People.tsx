import React from 'react'
import styled from 'styled-components'

const People = () => {
  return (
    <Container aria-hidden="true" className="svg-icon iconPeople" viewBox="0 0 18 18">
      <path d="M17 14c0 .44-.45 1-1 1H9a1 1 0 0 1-1-1H2c-.54 0-1-.56-1-1 0-2.63 3-4 3-4s.23-.4 0-1c-.84-.62-1.06-.59-1-3 .06-2.42 1.37-3 2.5-3s2.44.58 2.5 3c.06 2.41-.16 2.38-1 3-.23.59 0 1 0 1s1.55.71 2.42 2.09c.78-.72 1.58-1.1 1.58-1.1s.23-.4 0-1c-.84-.61-1.06-.58-1-3 .06-2.41 1.37-3 2.5-3s2.44.59 2.5 3c.05 2.42-.16 2.39-1 3-.23.6 0 1 0 1s3 1.38 3 4Z"></path>
    </Container>
  )
}

export default People

const Container = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  fill: rgb(255, 255, 255);
  margin-left: 0.2rem;
`
