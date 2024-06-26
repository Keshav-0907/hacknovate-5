import Image from 'next/image'
import Heading from './Heading'

export default function Schedule() {
    return (
        <div className='w-screen'>
            <div className='w-11/12 mx-auto'>
                <Heading>
                    Schedule
                </Heading>
            </div>

            <img src="/newSchedule.PNG" alt="Schedule" className="hidden md:flex w-11/12 mx-auto"  />
            <img src="/schedulemobile.svg" alt="Schedule" className="flex md:hidden" />
        </div>
    )
}