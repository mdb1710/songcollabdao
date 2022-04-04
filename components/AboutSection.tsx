import Image from 'next/image'
// import ReactPlayer from 'react-player/youtube'


const AboutSection = () => {
  return(
    <>
      <section className='slice slice-feature bleed grid md:grid-cols-2 gap-12 mx-20 my-20'>
        <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>WHAT IS SONGCOLLAB DAO</h1>
          <p>We are building SongCollabDAO to give independent songwriters a virtual space to create together, publish together, and get royalties together using a DAO framework.</p>
        </div>
        <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>WHY ARE WE FORMING THIS DAO</h1>
          <p>For a musician, collaborations can be incredibly beneficial, but finding collaborators you vibe with is hard, finding ways to collaborate remotely is harder, and defining the IP rights to collaborations while distributing them is often even harder.</p>
        </div>
      </section>
      <section className='slice slice-feature bleed grid md:grid-cols-2 gap-12 mx-20'>
      <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>WE ARE A COLLECTIVE SOLUTION</h1>
          <p>SongCollabDAO's contracts will form a template for a distributed artistic collective, a system of  formalized distribution and IP rights that are democratic, automated, and profitable.</p>
        </div>
        <div className='flex flex-col justify-center space-y-2'>
          <h1 className='text-6xl font-bold font-barrio'>CREATE TOGETHER AND BENEFIT TOGETHER</h1>
          <p>DEMOCRATICALLY decided and codified song ownership rules take the guesswork and contention out of IP.</p>
        </div>
      </section>
    </>
  )
}

export default AboutSection;