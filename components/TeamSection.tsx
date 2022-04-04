import Image from 'next/image'

import Hayes from '../public/johnhayes800.png'
import Bonner from '../public/MDBimage.jpeg'

const OldTeamSection = () => {
    return(
        <>
        <h2 className='text-6xl my-4 font-barrio text-center my-20'>TEAM</h2>
        <div className='grid md:grid-cols-2 place-items-center container mx-auto text-center my-20 py-4'>
            <div>
            <div className='group-hover:shadow-2xl duration-300 group-hover:shadow-teal-800 group-hover:-translate-y-1 rounded-sm max-w-sm justify-center'>
              <Image
                src={Bonner}
                width={350}
                height={350}
                alt='Team Member'
              />
            </div>
            <h3 className='text-2xl my-4'>MICHAEL D BONNER | CO-FOUNDER</h3>
            </div>
            <div>
            <div className='group-hover:shadow-2xl duration-300 group-hover:shadow-teal-800 group-hover:-translate-y-1 rounded-sm max-w-sm'>
              <Image
                src={Hayes}
                width={350}
                height={350}
                alt='Team Member'
              />
            </div>
            <h3 className='text-2xl my-4'>JOHN HAYES | CO-FOUNDER</h3>
            </div>
        </div>
        </>
    )
}

export default OldTeamSection