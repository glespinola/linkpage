import { Button } from "./ButtonCTAStyles"

// eslint-disable-next-line react/prop-types
const ButtonCTA = ({name, link}) => {
  return (
    <Button name={`"${name}"`} href={link} target="_blank">{name}</Button>
  )
}

export default ButtonCTA