import HeroSection from "@/components/HeroSection"
import AboutPreview from "@/components/AboutPreview"
import ProjectsShowcase from "@/components/ProjectsShowcase"
import SkillsSection from "@/components/SkillsSection"
import ContactCTA from "@/components/ContactCTA"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsShowcase />
      <SkillsSection />
      <ContactCTA />
    </>
  )
}
