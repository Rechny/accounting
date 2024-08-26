"use client";
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
        decimals='2'
        decimal=","
        suffix='€'
        separator='.'
        duration={1.5}
        end={amount} />
    </div>
  )
}

export default AnimatedCounter
