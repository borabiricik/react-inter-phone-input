<!-- Improved compatibility of back to top link: See: https://github.com/borabiricik/react-inter-phone-input/pull/73 -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

```sh
## npm
npm install react-inter-phone-input

## yarn
yarn add react-inter-phone-input
```

<!-- USAGE EXAMPLES -->

## Usage

This is a basic example of `<PhoneInput />` component

```javascript
import type { NextPage } from 'next';
import { useState } from 'react';
import { MobileNumber } from 'react-inter-phone-input-2';

const Home: NextPage = () => {
  const [phoneNumber, setphoneNumber] = useState('965');
  const [selectedCountry, setselectedCountry] = useState('+90');
  return (
    <div>
      <MobileNumber
        value={{
          dialCode: selectedCountry,
          phoneNumber,
        }}
        onPhoneNumberChange={(number) => setphoneNumber(number)}
        onCountryChange={(dialCode) => setselectedCountry(dialCode)}
      />
    </div>
  );
};

export default Home;

```

<!-- ROADMAP -->

<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/borabiricik/react-inter-phone-input/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

Your Name - [@biricik_js](https://twitter.com/biricik_js) - borabiriciksoftware@gmail.com

Project Link: [https://github.com/borabiricik/react-inter-phone-input](https://github.com/borabiricik/react-inter-phone-input)

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/borabiricik/react-inter-phone-input/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/borabiricik/react-inter-phone-input/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/borabiricik/react-inter-phone-input/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/borabiricik/react-inter-phone-input/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/borabiricik/react-inter-phone-input/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bora-biricik-6b16181b0/
