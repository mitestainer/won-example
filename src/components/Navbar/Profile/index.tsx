import { Wrapper } from './styles'
import IconPerson from '../../../images/icon-person.svg'
import { BsChevronDown } from 'react-icons/bs'

export const Profile = () => {
  return (
    <Wrapper>
      <img src={IconPerson} alt="Avatar" />
      <span>João</span>
      <BsChevronDown color="#8F8F8F" />
    </Wrapper>
  )
}