import { FC, InputHTMLAttributes } from 'react'
import { InputWrapper } from './styles'
import iconMail from '../../images/icon-mail.svg'
import iconLock from '../../images/icon-lock.svg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  placeholder?: string
}

export const Input: FC<InputProps> = ({ type, placeholder, ...rest }) => {
  return (
    <InputWrapper>
      <img src={type === 'email' ? iconMail : iconLock} alt="" />
      <input type={type} placeholder={placeholder} {...rest} />
    </InputWrapper>
  )
}