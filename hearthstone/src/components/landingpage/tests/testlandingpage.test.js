import React from 'react'
import LandingPage from '../LandingPage'
import SpeechOne from '../../common/SpeechOne'
import SpeechTwo from '../../common/SpeechTwo'
import { shallow } from 'enzyme'

describe('TESTING LANDING PAGE LOAD', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LandingPage />)
  })

  describe('START BUTTON VALIDATION', () => {
    test('displays 0 as a default', () => {
      expect(wrapper.find('Link').text()).toContain('Start Building')
    })
  })
})

describe('TEST ANIMATION OF SPEECH BUBBLES', ()=> {
  let wrapper

  beforeEach(()=> {
    wrapper = shallow(<SpeechOne />)
  })

  describe('speech bubble has no animation class on mount', ()=> {
    test('no animation class', ()=> {
      expect(wrapper.find('img').hasClass('animate__zoomIn')).toBeFalsy()
    })
  })
})

