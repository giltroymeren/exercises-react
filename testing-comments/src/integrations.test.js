import axios from "axios";
import { mount } from "enzyme"
import { SOURCE_URL } from "./actions";
import App from "./components/App"
import RootProvider from "./root"
import MockAdapter from 'axios-mock-adapter'

describe('Load More button', () => {
  let wrapper;
  const axiosInstance = axios.create()
  const axiosMockAdapterInstance = new MockAdapter(axiosInstance)
  const mockResponse = Array.from(Array(5),
    (v, i) => { return { name: `Comment # ${i}` } })

  beforeEach(() => {
    wrapper = mount(
      <RootProvider>
        <App />
      </RootProvider>
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it.skip('can fetch and display a list of comments', () => {
    axiosMockAdapterInstance.onGet(SOURCE_URL)
      .reply({
        status: 200,
        reponse: mockResponse
      })

    wrapper.find('#form-btn-fetch').simulate('click')
    wrapper.update()

    expect(wrapper.find('li').length).toEqual(mockResponse.length)
  })
})