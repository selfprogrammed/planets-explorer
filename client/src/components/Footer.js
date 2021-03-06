import { Footer as ArwesFooter, Paragraph } from 'arwes'
import Centered from './Centered'

const Footer = () => {
  return (
    <ArwesFooter animate>
      <Centered>
        <Paragraph
          style={{
            fontSize: 15,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Made by
          <a
            target='_blank'
            rel='noreferrer'
            href='https://subhamray.com'
            style={{
              textDecoration: 'none',
              color: 'inherit  ',
              cursor: 'pointer',
            }}
          >
            <p> Subham Ray</p>
          </a>{' '}
          <p> | Powered by</p>
          {
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit  ',
                cursor: 'pointer',
              }}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/r-spacex/SpaceX-API'
            >
              SpaceX API
            </a>
          }
        </Paragraph>
      </Centered>
    </ArwesFooter>
  )
}

export default Footer
