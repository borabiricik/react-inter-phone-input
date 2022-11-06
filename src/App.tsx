import { ISelectedCountry } from 'lib/types/main'
import { useState } from 'react'
import PhoneInput from 'react-inter-phone-input'
import './app-style.css'

function App () {
  const [selectedCountry, setselectedCountry] =
    useState<ISelectedCountry | null>(null)
  const [phoneNumber, setphoneNumber] = useState('')
  const [onChangeCountry, setonChangeCountry] =
    useState<ISelectedCountry | null>(null)
  const [onChangePhoneNumber, setonChangePhoneNumber] = useState('')
  return (
    <div className=''>
      <PhoneInput
        onInputChange={(value) => setphoneNumber(value)}
        onCountryChange={(country) => setselectedCountry(country)}
        onChange={(country, phoneNumber) => {
          setonChangeCountry(country)
          setonChangePhoneNumber(phoneNumber)
        }}
      />

      <div className='text-xl'>
        Selected country: {selectedCountry && JSON.stringify(selectedCountry)}
      </div>

      <div className='text-xl'>Phone Number: {phoneNumber}</div>
      <div className='text-xl mt-5'>
        With onChange Function:
        <div className='text-xl'>
          Selected country: {onChangeCountry && JSON.stringify(onChangeCountry)}
        </div>
        <div className='text-xl'>Phone Number: {onChangePhoneNumber}</div>
      </div>
    </div>
  )
}

export default App
