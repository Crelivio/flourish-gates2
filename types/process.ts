import { IconType } from "react-icons"

export type ProcessStep = {
  icon: IconType
  title: string
  description: string
}

export type ProcessSectionData = {
  image: string
  steps: ProcessStep[]
  buttonText: string
}
