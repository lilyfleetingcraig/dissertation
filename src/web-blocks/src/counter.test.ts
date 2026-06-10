import { describe, expect, it, vi } from 'vitest'
import { setupCounter } from './counter'

describe('setupCounter', () => {
  it('renders the starting count and increments on click', () => {
    let clickHandler: (() => void) | undefined

    const element = {
      innerHTML: '',
      addEventListener: vi.fn((type, listener) => {
        if (type === 'click' && typeof listener === 'function') {
          clickHandler = listener as () => void
        }
      }),
    } as unknown as HTMLButtonElement

    setupCounter(element)

    expect(element.innerHTML).toBe('Count is 0')

    clickHandler?.()

    expect(element.innerHTML).toBe('Count is 1')
  })
})
