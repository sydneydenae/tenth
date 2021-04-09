import React from "react"
import Button from "./button"
import renderer from "react-test-renderer"

describe("Button", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Button />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })