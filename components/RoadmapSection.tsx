const RoadMapSection = () => {
    return(
      <>
        <section id='first_roadmap' className='slice slice-roadmap bleed py-24 relative container rounded-3xl overflow-hidden'>
          <header className='text-center space-y-4 undefined'>
            <h1 className='text-4xl md:text-6xl font-bold font-barrio'>Roadmap</h1>
            <div className='prose max-w-screen-md text-center mx-auto text-black text-opacity-75 text-2xl'>
              <p>The roadmap represents the current vision and ideas of SongCollab DAO. It will be updated as we build during the CELO camp, but we will never veer from our ultimate goal of helping musician be independent together on the Blockchain.</p>
            </div>
          </header>
          <div className='container mx-auto space-y-16 mt-16'>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-orange-100 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '25%' }}>
                  25%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>To create a fully functional DAO with a goverance token and voting structure on the CELO Protocol</p>
              </div>
            </div>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-orange-100 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '50%' }}>
                  50%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>To an automatic distribution and IP rights system that produces traditional music releases and NFT utility products.</p>
              </div>
            </div>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-orange-100 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '75%' }}>
                  75%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>Partnering with current and future DSPs to distribute and publish songs released from the DAO through the voting structure</p>
              </div>
            </div>
            <div className='max-max-w-screen-xl mx-auto text-center space-y-4'>
              <div className='max-w-xl mx-auto bg-gray-900 rounded-full overflow-hidden'>
                <div className='bg-orange-100 text-xs font-medium text-black text-center p-0.5 leading-none rounded-l-full' style={{ width: '100%' }}>
                  100%
                </div>
              </div>
              <div className='prose text-lg text-black max-w-screen-sm mx-auto opacity-75'>
                <p>An exclusive web3 marketplace that will help DAO members sell physical and digital items on the blockchain</p>
              </div>
            </div>
  
          </div>
        </section>
      </>
    )
  }
  
  export default RoadMapSection