import { insertSort, selectionSort, mergeSort, quickSort } from '../src'
import { getRandomArray } from './helper'

describe('test sort ', () => {
  let source: number[] = []
  const size = 10000,
    range = 1000
  beforeEach(() => {
    source = getRandomArray(size, range)
  })
  test('test insert sort number ', () => {
    const target = insertSort(source)

    for (let i = 1; i < size; i++) {
      expect(target[i]).toBeGreaterThanOrEqual(target[i - 1])
    }
  })

  test('test selection sort number ', () => {
    // const target = withPerformance(selectionSort, 'selection-sort')(source)
    const target = selectionSort(source)

    for (let i = 1; i < size; i++) {
      expect(target[i]).toBeGreaterThanOrEqual(target[i - 1])
    }
  })

  test('test merge sort number ', () => {
    const target = mergeSort(source)

    for (let i = 1; i < size; i++) {
      expect(target[i]).toBeGreaterThanOrEqual(target[i - 1])
    }
  })

  test('test quick sort number ', () => {
    const target = quickSort(source)

    for (let i = 1; i < size; i++) {
      expect(target[i]).toBeGreaterThanOrEqual(target[i - 1])
    }
  })
})
