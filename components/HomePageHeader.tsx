import Link from 'next/link'
import Image from 'next/image'

import Logo from '../public/SCDLogoV2.png'
import TwitterLogo from '../public/twittericon.svg'
import DiscordLogo from '../public/discordlogo.svg'
import InstaLogo from '../public/instagramlogo.svg'

const NavHeader = () => {
    return(
        <>
        <header className='bleed grid grid-cols-5 fixed top-0 inset-x-0 h-20 z-30 bg-red-400 bg-opacity-50 backdrop-blur border-t-4 border-black'>
          <div className='flex items-center'>
            <Image
              src={Logo}
              width={75}
              height={(75)}
              alt='Welcome To Song Collab Dao'
              />
            </div>
            <nav className='text-xl col-span-3 flex items-center justify-center invisible md:visible'>
              <Link href='/'>
                <a className='underline decoration-black decoration-solid decoration-4 underline-offset-4'>
                  Celo Camp Roadmap
                </a>
              </Link>
            </nav>
            <div className='flex items-center justify-end gap-x-4'>
                <nav className='flex items-center justify-center text-2xl gap-x-4 text-red-300'>
                  <Link href='/'>
                    <a title='Twitter'>
                      <Image
                        src={TwitterLogo}
                        width="24"
                        height="24"
                        alt="SongCollabDao Twitter"
                      />
                    </a>
                  </Link>
                  <Link href='/'>
                    <a title='Instagram'>
                      <Image
                        src={InstaLogo}
                        width="24"
                        height="24"
                        alt="SongCollabDao Insta"
                      />
                    </a>
                  </Link>
                  <Link href='/'>
                    <a title='Discord'>
                      <Image
                        src={DiscordLogo}
                        width="36"
                        height="36"
                        alt="SongCollabDao Discord"
                      />
                    </a>
                  </Link>
                </nav>
            </div>
        </header>
        </>

    )
}

export default NavHeader;