import React from "react"

const About = () => {
  return (
    <section
      role="About"
      className="bg-lighter px-col-all text-darker md:px-col-main"
    >
      <h3 className="py-16 text-center font-serif text-xl font-medium md:text-2xl xl:py-24 xl:text-3xl">
        A unique tabla artist who has simultaneously scaled unprecedented
        heights of achievement in solo performance, accompaniment and pedagogy.
      </h3>

      <div className="xl: mb-12 flex flex-col space-y-4 text-base md:text-lg xl:mb-16 xl:flex-row xl:justify-between xl:space-y-0 xl:text-xl">
        <p className="font-semibold">As a Soloist,</p>
        <p className="max-w-none xl:max-w-lg 2xl:max-w-3xl">
          Yogesh balances both tradition and innovation in the Punjab Gharana.
          His performances showcase mastery over a vast range of traditional
          content, more recently unearthing and sharing rare repertoire that was
          lost during partition. At the same time, he brings fresh perspective
          to the canon by presenting new ideas that capture the philosophy and
          rhythmic thought processes of his Guru, Ustad Allah Rakha.
        </p>
      </div>

      <div className="flex flex-col space-y-4 pb-24 text-base md:text-lg xl:flex-row xl:justify-between xl:text-xl">
        <p className="font-semibold">As an Accompanist,</p>
        <p className="max-w-none xl:max-w-lg 2xl:max-w-3xl">
          Yogesh has provided sensitive and thoughtful tabla accompaniment for
          many leading vocalists and instrumentalists. His approach has been
          instilled by the close grooming under his father and stalwart
          vocalist, Pandit Dinkar Kaikini.
        </p>
      </div>
    </section>
  )
}

export default About
