import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import CourseForm from './CourseForm'

function setup (saving) {
    let props = {
        course: {}, saving: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    }

    let renderer = TestUtils.createRenderer()
    renderer.render(<CourseForm {...props}/>)
    let output = renderer.getRenderOutput()

    return {
        props,
        output,
        renderer
    }
}

describe('CourseForm via React Test Utils', () => {
    it('renders form and h1', () => {
        const { output } = setup()
        expect(output.type).toBe('form')
        let [ h1 ] = output.props.children
        expect(h1.type).toBe('h1')
    })

    it('Save button is labelled Save, when it is not saving', () => {
        const { output } = setup(false)
        const submitButtom = output.props.children[5]
        expect(submitButtom.props.value).toBe('Save')
    })

    it('Save button is labelled Saving.., when it is saving', () => {
        const { output } = setup(true)
        const submitButtom = output.props.children[5]
        expect(submitButtom.props.value).toBe('Saving...')
    })
})
