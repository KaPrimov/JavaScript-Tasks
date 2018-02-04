import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import CourseForm from './CourseForm'

function setup (saving) {
    const props = {
        course: {}, saving: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    }

    return shallow(<CourseForm {...props} />)
}

describe('CourseForm via Enzyme', () => {
    it ('renders form and h1', () => {
        const wrapper = setup(false)
        expect(wrapper.find('form').length).toBe(1)
        expect(wrapper.find('h1').text()).toEqual('Manage Course')
    })

    it ('Save button is labelled Save, when it is not saving', () => {
        const wrapper = setup(false)
        expect(wrapper.find('input').props().value).toBe('Save')
    })

    it ('Save button is labelled Save, when it is saving', () => {
        const wrapper = setup(true)
        expect(wrapper.find('input').props().value).toBe('Saving...')
    })
})
