import React from 'react'

interface ClickEvent {
  classSelected: (value: string) => void
}


const ClassContainer = (props: ClickEvent) => {
  return (
    <div className='class-container'>
      <h3 className='class-title'>Choose a class</h3>
      <div className='class-flex'>
        {/* DEMON HUNTER */}
        <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('demonhunter')
          }} />
          <p className='class-name class-DH'>Demon Hunter</p>
        </div>

            {/* DRUID */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('druid')
          }} />
          <p className='class-name class-druid'>Druid</p>
        </div>

            {/* HUNTER */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('hunter')
          }} />
          <p className='class-name class-hunter'>Hunter</p>
        </div>

            {/* MAGE */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('mage')
          }} />
          <p className='class-name class-mage'>Mage</p>
        </div>

            {/* PALADIN */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('paladin')
          }} />
          <p className='class-name class-paladin'>Paladin</p>
        </div>

            {/* PRIEST */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('priest')
          }} />
          <p className='class-name class-priest'>Priest</p>
        </div>

            {/* ROGUE */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('rogue')
          }} />
          <p className='class-name class-rogue'>Rogue</p>
        </div>

            {/* SHAMAN */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('shaman')
          }} />
          <p className='class-name class-shaman'>Shaman</p>
        </div>

            {/* WARLOCK */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('warlock')
          }} />
          <p className='class-name class-warlock'>Warlock</p>
        </div>

            {/* WARRIOR */}
            <div className='class-div'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600527983/pngwave_36_kxawux.png' className='class-icon' alt='druid' onClick={() => {
            props.classSelected('warrior')
          }} />
          <p className='class-name class-warrior'>Warrior</p>
        </div>

      </div>
    </div>
    
  )
}

export default ClassContainer