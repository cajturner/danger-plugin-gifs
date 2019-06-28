import gifs from "./index"

declare const global: any

describe("gifs()", () => {
  beforeEach(() => {
    global.warn = jest.fn()
    global.message = jest.fn()
    global.fail = jest.fn()
    global.markdown = jest.fn()
  })

  afterEach(() => {
    global.warn = undefined
    global.message = undefined
    global.fail = undefined
    global.markdown = undefined
  })

  it("Checks for a that message is not called when a gif is present", () => {
    global.danger = {
      github: {
        pr: {
          body: "My Test description, ![Best doggo gif](https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif)",
        },
      },
    }

    gifs()

    expect(global.message).not.toBeCalled()
  })

  it("Checks for a that message has been called", () => {
    global.danger = {
      github: { pr: { body: "My Test description, no gifs :'(" } },
    }

    gifs()

    expect(global.message).toHaveBeenCalled()
  })

  it("Checks for a that message is passed through", () => {
    global.danger = {
      github: { pr: { body: "My Test description, no gifs :'(" } },
    }

    const customMessage = "Bad bad bad!"
    gifs({ msg: customMessage })

    expect(global.message).toHaveBeenCalledWith("Bad bad bad!")
  })
})
