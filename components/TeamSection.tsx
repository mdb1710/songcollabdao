import Image from 'next/image'

import Hayes from '../public/johnhayes800.png'
import Bonner from '../public/MDBimage.jpeg'

const OldTeamSection = () => {
    return(
        <div className='container mx-auto text-center py-4'>
            <h2 className='text-6xl my-4 font-barrio'>TEAM</h2>
            <div className='group-hover:shadow-2xl duration-300 group-hover:shadow-teal-800 group-hover:-translate-y-1 rounded-sm max-w-sm'>
              <Image
                src={Bonner}
                width={350}
                height={350}
                alt='Team Member'
              />
            </div>
            <h3 className='text-2xl my-4'>MICHAEL D BONNER | CO-FOUNDER</h3>
            <h2 className='text-6xl my-4 font-barrio'>TEAM</h2>
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
    )
}

export default OldTeamSection