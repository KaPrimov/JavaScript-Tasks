import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import { ManageCoursePage } from './ManageCoursePage'

describe('Tests of ManageCoursePage', () => {
    it('sets error message when trying to set an empty title', () => {
        const props = {
            authors: [],
            actions: {saveCourse: () => {return Promise.resolve()}},
            course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
        }
        const wrapper = mount(<ManageCoursePage {...props}/>)
        const saveButton = wrapper.find('input').last()
        expect(saveButton.prop('type')).toBe('submit')
        saveButton.simulate('click')
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.')
    })
})