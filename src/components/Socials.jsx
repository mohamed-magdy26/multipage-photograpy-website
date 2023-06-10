import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Socials = ({ showOnMobile }) => {
  return (
    <ul
      className={`${showOnMobile ? 'flex' : 'hidden lg:flex'} gap-3`}
    >
      <li>
        <a
          href="http://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </li>
      <li>
        <a
          href="http://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          href="http://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          href="http://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
