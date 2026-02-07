export type TeamMember = {
  name: string
  role: string
  image: string
  instagram?: string
  twitter?: string
  linkedin?: string
  contact?: string
}

export type FollowJourneyData = {
  title: string
  backgroundImage: string
  instagram: string
  twitter: string
  linkedin: string
}

export type TeamSectionData = {
  title: string
  subtitle: string
  members: TeamMember[]
}
