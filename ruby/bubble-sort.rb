def bubble_sort(array)
  j = array.size
  while j > 0
    i = 0
    while i < j - 1
       if array[i] > array[i + 1]
         array[i], array[i+1] = array[i+1], array[i]
       end
      i += 1
    end
    j -= 1
  end
  array
end

bubble_sort([4, 3, 78, 2, 0, 2])
