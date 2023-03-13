import {
  BgNotFound,
  ImageNotfound,
  HeadingNotFound,
  Discription,
} from './styledComponents'

const NotFound = () => (
  <BgNotFound>
    <ImageNotfound
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <HeadingNotFound>Page Not Found</HeadingNotFound>
    <Discription>
      We are sorry, the page you requested could not be found.
    </Discription>
  </BgNotFound>
)

export default NotFound
