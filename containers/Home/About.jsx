import React from "react"

const About = () => {
  return (
    <section
      role="About"
      className="bg-lighter px-col-all text-darker md:px-col-main"
    >
      <h3 className="py-12 text-center font-serif text-xl font-medium">
        A unique tabla artist who has simultaneously scaled unprecedented
        heights of achievement in solo performance, accompaniment and pedagogy.
      </h3>

      <div className="mb-8 flex flex-col space-y-2 text-base">
        <p className="font-semibold">As a Soloist,</p>
        <p>
          Yogesh balances both tradition and innovation in the Punjab Gharana.
          His performances showcase mastery over a vast range of traditional
          content, more recently unearthing and sharing rare repertoire that was
          lost during partition. At the same time, he brings fresh perspective
          to the canon by presenting new ideas that capture the philosophy and
          rhythmic thought processes of his Guru, Ustad Allah Rakha.
        </p>
      </div>

      <div className="flex flex-col space-y-2 pb-16 text-base">
        <p className="font-semibold">As an Accompanist,</p>
        <p>
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
