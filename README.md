<!-- Improved compatibility of back to top link: See: https://github.com/borabiricik/react-inter-phone-input/pull/73 -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br /> 
<div align="center">
  <!-- <a href="https://github.com/borabiricik/react-inter-phone-input">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->
  <h1 align="center">🚀 react-inter-phone-input 🚀</h3>
  <h2 align="center">React International Phone Input</h2>
  <h4 align='center'>✨ 95% Customizable International Phone Number Input Component ✨</h3>

  <p align="center">
    <!-- <a href="https://github.com/borabiricik/react-inter-phone-input"><strong>Explore the docs »</strong></a> -->
    <br />
    <a href="https://github.com/borabiricik/react-inter-phone-input">View Demo</a>
    ·
    <a href="https://github.com/borabiricik/react-inter-phone-input/issues">Report Bug</a>
    ·
    <a href="https://github.com/borabiricik/react-inter-phone-input/issues">Request Feature</a>
  </p>
</div>

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
import { ISelectedCountry } from 'lib/types/main'
import { useState } from 'react'
import PhoneInput from 'react-inter-phone-input'

function App () {
  // <PhoneInput /> component can be used both controlled or uncontrolled
  const [selectedCountry, setselectedCountry] = useState<ISelectedCountry | null>(null)
  const [phoneNumber, setphoneNumber] = useState('')
  const [isCountrySelectedEnabled, setisCountrySelectedEnabled] = useState(true)

  return (
      <PhoneInput
        containerProps={{ ...}}
        dropdownButtonProps={{ ...}}
        flagProps={{ ... }}
        inputProps={{ ...}}
        defaultCountryCode={'tr'}
        dropdownProps={{ ...}}
        dropdownItemProps={{ ...}}
        append={<p>Append something Here</p>}
        isCountrySelectEnabled={isCountrySelectedEnabled}
        onInputChange={(value) => setphoneNumber(value)}
        onCountryChange={(country) => setselectedCountry(country)}
        onChange={(country, phoneNumber) => {
          //This function is triggering on both country and input change
        }}
      />
  )
}

export default App
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

Your Name - [@biricik_js](https://twitter.com/biricik_js) - email@example.com

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
